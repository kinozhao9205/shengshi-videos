/**
 * SHENGSHI CASE — 盛世推廣案例視頻集 應用主邏輯
 * 視頻畫廊 · 搜索 · 分類篩選 · 播放器 · 轉發分享 · 防下載 · 多語言（中/英/俄/烏茲別克）
 */

(function () {
  'use strict';

  // --- 狀態 ---
  let currentCategory = '全部';
  let currentSearch = '';
  let renderedVideos = [];
  let currentVideoId = null;
  let lang = localStorage.getItem('ss_lang') || 'zh';
  if (!I18N.LANGS[lang]) lang = 'zh';

  // --- DOM ---
  const grid = document.getElementById('videoGrid');
  const filterChips = document.getElementById('filterChips');
  const searchInput = document.getElementById('searchInput');
  const emptyState = document.getElementById('emptyState');
  const topbar = document.getElementById('topbar');
  const overlay = document.getElementById('playerOverlay');
  const playerVideo = document.getElementById('playerVideo');
  const playerClose = document.getElementById('playerClose');
  const playerBackdrop = document.getElementById('playerBackdrop');
  const playerTitle = document.getElementById('playerTitle');
  const playerDesc = document.getElementById('playerDesc');
  const playerTag = document.getElementById('playerTag');
  const playerShareBtn = document.getElementById('playerShareBtn');
  const toast = document.getElementById('toast');

  // --- 多語言取詞 ---
  function t(key) {
    const ui = I18N.UI[lang] || I18N.UI.zh;
    return ui[key] !== undefined ? ui[key] : I18N.UI.zh[key];
  }

  function getTitle(v) {
    const tr = I18N.VIDEOS[v.id] && I18N.VIDEOS[v.id][lang];
    return (tr && tr.title) ? tr.title : v.title;
  }

  function getDesc(v) {
    const tr = I18N.VIDEOS[v.id] && I18N.VIDEOS[v.id][lang];
    return (tr && tr.desc) ? tr.desc : v.desc;
  }

  function getCatName(cat) {
    const m = I18N.CATS[lang] || I18N.CATS.zh;
    return m[cat] !== undefined ? m[cat] : cat;
  }

  function getTagName(tag) {
    const m = I18N.TAGS[lang] || I18N.TAGS.zh;
    return m[tag] !== undefined ? m[tag] : tag;
  }

  // --- 應用靜態文案（語言切換時刷新頁面固定文本） ---
  function applyStaticText() {
    const ui = I18N.UI[lang] || I18N.UI.zh;

    document.documentElement.lang = I18N.HTML_LANG[lang] || 'zh-Hant';
    document.title = ui.title || document.title;
    searchInput.placeholder = ui.searchPlaceholder || searchInput.placeholder;

    // 帶 data-i18n 的文本節點
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (ui[key] !== undefined) el.textContent = ui[key];
    });

    // 帶 data-i18n-attr 的屬性（如 title / meta content / aria-label）
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attr = el.dataset.i18nAttr;
      const key = el.dataset.i18nAttrKey;
      if (ui[key] !== undefined) el.setAttribute(attr, ui[key]);
    });
  }

  // --- 語言切換 ---
  // 同步所有語言按鈕的高亮狀態（Hero 按鈕組 + 右下角浮動按鈕）
  function syncLangButtons() {
    document.querySelectorAll('.lang-pick').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function setLang(l) {
    if (!I18N.LANGS[l]) return;
    lang = l;
    localStorage.setItem('ss_lang', l);
    applyStaticText();
    syncLangButtons();
    renderChips();
    renderVideos();
    // 播放器已打開時同步刷新
    if (currentVideoId) {
      const v = VIDEOS.find(x => x.id === currentVideoId);
      if (v) {
        playerTitle.textContent = getTitle(v);
        playerDesc.textContent = getDesc(v);
        playerTag.textContent = getTagName(v.tag || v.category);
      }
    }
  }

  // 綁定所有語言按鈕（Hero + 浮動兩處共用 .lang-pick）
  document.querySelectorAll('.lang-pick').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // --- 獲取分類 ---
  function getCategories() {
    const cats = ['全部'];
    const set = new Set();
    VIDEOS.forEach(v => set.add(v.category));
    cats.push(...set);
    return cats.map(cat => ({
      key: cat,
      name: getCatName(cat),
      count: cat === '全部' ? VIDEOS.length : VIDEOS.filter(v => v.category === cat).length
    }));
  }

  // --- 渲染分類篩選 ---
  function renderChips() {
    const cats = getCategories();
    filterChips.innerHTML = cats.map(cat => `
      <button class="chip ${cat.key === currentCategory ? 'active' : ''}" data-cat="${cat.key}">
        ${cat.name}<span class="chip-count">${cat.count}</span>
      </button>
    `).join('');

    filterChips.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        currentCategory = chip.dataset.cat;
        filterChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderVideos();
      });
    });
  }

  // --- 過濾視頻（按當前語言匹配） ---
  function getFilteredVideos() {
    return VIDEOS.filter(v => {
      const matchCat = currentCategory === '全部' || v.category === currentCategory;
      let matchSearch = true;
      if (currentSearch) {
        const q = currentSearch;
        const haystack = [
          getTitle(v),
          getDesc(v),
          getCatName(v.category),
          getTagName(v.tag || v.category)
        ].join(' ').toLowerCase();
        matchSearch = haystack.includes(q);
      }
      return matchCat && matchSearch;
    });
  }

  // --- 渲染視頻卡片 ---
  function renderVideos() {
    const filtered = getFilteredVideos();
    renderedVideos = filtered;

    if (filtered.length === 0) {
      grid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    grid.innerHTML = filtered.map((v, i) => `
      <div class="video-card" data-id="${v.id}" style="animation-delay:${i * 60}ms">
        <div class="card-thumbnail">
          <span class="card-tag">${getTagName(v.tag || v.category)}</span>
          <div class="card-loader"></div>
          <img class="card-poster" loading="lazy" src="${v.poster}"
               alt="${getTitle(v)}" draggable="false"
               oncontextmenu="return false">
          <div class="play-btn">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="card-info">
          <div class="card-info-head">
            <h3 class="card-title">${getTitle(v)}</h3>
            <button class="share-mini" data-share="${v.id}" aria-label="${t('share')}" title="${t('share')}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </div>
          <p class="card-desc">${getDesc(v)}</p>
        </div>
      </div>
    `).join('');

    // 縮略圖加載完成/失敗後隱藏加載動畫
    grid.querySelectorAll('.video-card').forEach(card => {
      const img = card.querySelector('.card-poster');
      const loader = card.querySelector('.card-loader');

      if (img) {
        img.addEventListener('load', () => { if (loader) loader.style.display = 'none'; });
        img.addEventListener('error', () => { if (loader) loader.style.display = 'none'; });
      }

      card.addEventListener('click', () => openPlayer(card.dataset.id));

      // 卡片轉發按鈕（阻止冒泡到卡片點擊）
      const shareBtn = card.querySelector('.share-mini');
      if (shareBtn) {
        shareBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          shareVideo(shareBtn.dataset.share);
        });
      }
    });
  }

  // --- 打開播放器 ---
  function openPlayer(id) {
    const v = VIDEOS.find(x => x.id === id);
    if (!v) return;

    currentVideoId = id;
    playerTitle.textContent = getTitle(v);
    playerDesc.textContent = getDesc(v);
    playerTag.textContent = getTagName(v.tag || v.category);

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // 同步 URL hash，便於轉發定位（pushState 而非 replaceState，
    // 這樣關閉時再 pushState 清空，瀏覽器返回鍵可正常"關掉播放器"）
    if (location.hash !== '#' + id) {
      history.pushState({ ssHash: id }, '', '#' + id);
    }

    // Apple WebKit 回退：僅在不支持 HTTP Range 的沙盒域名生效
    const ua = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isMacSafari = /Macintosh/.test(ua) && /Safari/.test(ua) &&
      !/Chrome/.test(ua) && !/Edg/.test(ua);
    const needsBlobFallback = (isIOS || isMacSafari) &&
      /app\.workbuddy\.link$/.test(location.hostname);

    if (needsBlobFallback) {
      showToast(t('toastLoading'));
      fetch(v.src)
        .then(r => {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.blob();
        })
        .then(blob => {
          const blobUrl = URL.createObjectURL(blob);
          playerVideo.src = blobUrl;
          playerVideo.play().catch(() => {});
          showToast(t('toastLoaded'));
        })
        .catch(err => {
          showToast(t('toastFailed'));
          console.error('Video fetch error:', err);
        });
    } else {
      playerVideo.src = v.src;
      const playPromise = playerVideo.play();
      if (playPromise) {
        playPromise.catch(() => {
          // 自動播放被阻止，用戶需手動點擊
        });
      }
    }
  }

  // --- 關閉播放器 ---
  function closePlayer() {
    overlay.classList.remove('open');
    playerVideo.pause();
    // 釋放 Blob URL（macOS Safari 回退機制使用）
    const src = playerVideo.src;
    if (src && src.startsWith('blob:')) {
      URL.revokeObjectURL(src);
    }
    playerVideo.removeAttribute('src');
    playerVideo.load();
    document.body.style.overflow = '';
    currentVideoId = null;

    // 清掉 URL 上的 #vXX，讓地址欄回到乾淨的頁面地址
    if (location.hash) {
      const cleanUrl = location.pathname + location.search;
      history.pushState({ ssHash: '' }, '', cleanUrl);
    }
  }

  // --- 轉發分享 ---
  function shareVideo(id) {
    const v = VIDEOS.find(x => x.id === id);
    if (!v) return;

    const shareUrl = location.origin + location.pathname + '#' + v.id;
    const shareData = {
      title: t('sharePrefix') + getTitle(v),
      text: getTitle(v) + ' — ' + getDesc(v) + t('shareSuffix'),
      url: shareUrl
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => { /* 用戶取消 */ });
    } else {
      // 降級：複製鏈接
      copyText(shareUrl);
    }
  }

  // --- 複製文本 ---
  function copyText(text) {
    const done = () => showToast(t('toastCopied'));

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  // --- Toast 提示 ---
  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  // --- 搜索 ---
  let searchTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderVideos();
    }, 200);
  });

  // --- 播放器關閉事件 ---
  playerClose.addEventListener('click', closePlayer);
  playerBackdrop.addEventListener('click', closePlayer);

  // 播放器轉發按鈕
  playerShareBtn.addEventListener('click', () => {
    if (currentVideoId) shareVideo(currentVideoId);
  });

  // --- 全局下載防護 ---
  // 攔截視頻區域的右鍵菜單（防止"另存爲/複製視頻地址"）
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('video') ||
        e.target.closest('.card-thumbnail') ||
        e.target.closest('.player-wrapper')) {
      e.preventDefault();
    }
  });

  // 攔截拖拽（防止拖到本地/新窗口打開）
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'VIDEO' || e.target.closest('.card-thumbnail')) {
      e.preventDefault();
    }
  });

  // 攔截 Ctrl/Cmd + S（另存爲）
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
    }
  });

  // ESC 關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closePlayer();
    }
  });

  // --- 滾動效果 ---
  let scrollTimer;
  window.addEventListener('scroll', () => {
    if (scrollTimer) cancelAnimationFrame(scrollTimer);
    scrollTimer = requestAnimationFrame(() => {
      if (window.scrollY > 10) {
        topbar.classList.add('scrolled');
      } else {
        topbar.classList.remove('scrolled');
      }
    });
  });

  // --- 數字動畫 ---
  function animateCount() {
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.dataset.count);
      const duration = 1200;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }

  // --- 回到頂部 ---
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- URL hash 深鏈定位 ---
  // 僅在播放器處於"關閉態"時響應外部 hash 變化（粘貼深鏈 / 瀏覽器返回鍵）
  // 進入關閉態時設置 suppressNextHash，避免剛主動關閉後立刻又被 hashchange 重新打開
  let suppressNextHash = false;
  function handleHash() {
    if (suppressNextHash) { suppressNextHash = false; return; }
    const id = location.hash.replace('#', '');
    if (!id) return; // 關閉後清空 hash：直接忽略
    if (overlay.classList.contains('open')) return; // 播放器已打開時不重複觸發
    if (VIDEOS.some(v => v.id === id)) {
      openPlayer(id);
    }
  }
  window.addEventListener('hashchange', handleHash);

  // --- 初始化 ---
  applyStaticText();
  syncLangButtons();
  renderChips();
  renderVideos();

  // 延遲啓動數字動畫
  setTimeout(animateCount, 300);

  // 若 URL 帶 #視頻id，直接打開
  handleHash();

})();
