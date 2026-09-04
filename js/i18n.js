/**
 * 盛世推廣案例視頻集 — 多語言配置（i18n）
 * ==========================================
 * 支持：中文(zh) / 英文(en) / 俄語(ru) / 烏茲別克語(uz)
 * 品牌名（BYD / FANGCHENGBAO / DENZA / YANGWANG / CATL 等）各語言統一用官方英文名
 * 烏茲別克語採用烏茲別克斯坦現行拉丁字母書寫
 */

const I18N = {
  // 語言顯示名（切換菜單用）
  LANGS: {
    zh: "繁體中文",
    en: "English",
    ru: "Русский",
    uz: "O'zbekcha"
  },

  // html lang 屬性值
  HTML_LANG: {
    zh: "zh-Hant",
    en: "en",
    ru: "ru",
    uz: "uz"
  },

  // ---------------- 頁面靜態文案 ----------------
  UI: {
    zh: {
      title: "盛世推廣案例視頻集 · 北京盛世前程",
      metaDesc: "盛世推廣案例視頻集 — 覆蓋盛世實力、體驗營銷、品牌合集、海外營銷、創新展具、AI創意六大內容矩陣",
      searchPlaceholder: "搜索視頻 / 品牌...",
      heroBadge: "盛世推廣案例集",
      heroLine1: "盛世推廣案例視頻集",
      heroLine2: "策略 · 體驗 · 全球",
      heroDesc: "體系化營銷平臺 · 覆蓋實力展示 / 體驗營銷 / 品牌合集 / 海外營銷 / 創新展具 / AI創意 六大內容矩陣",
      statVideos: "精選視頻",
      statCats: "內容分類",
      statReal: "% 真實案例",
      empty: "沒有找到匹配的視頻",
      close: "關閉",
      share: "轉發",
      footerCompany: "北京盛世前程營銷活動策劃有限公司",
      toastLoading: "視頻加載中…",
      toastLoaded: "視頻加載完成",
      toastFailed: "視頻加載失敗，請重試",
      toastCopied: "鏈接已複製，去粘貼轉發吧",
      sharePrefix: "盛世推廣案例 | ",
      shareSuffix: "（來自北京盛世前程）"
    },
    en: {
      title: "SHENGSHI Promotion Case Videos · Beijing Shenshi Qiancheng",
      metaDesc: "SHENGSHI promotion case videos — six content pillars: corporate strength, experiential marketing, brand portfolios, overseas marketing, innovative exhibits, and AI creativity",
      searchPlaceholder: "Search videos / brands...",
      heroBadge: "SHENGSHI PROMOTION CASE STUDIES",
      heroLine1: "SHENGSHI Case Video Gallery",
      heroLine2: "Strategy · Experience · Global",
      heroDesc: "A systematic marketing platform covering six content pillars: Strength, Experiential Marketing, Brand Portfolios, Overseas Marketing, Innovative Exhibits & AI Creativity",
      statVideos: "Selected Videos",
      statCats: "Categories",
      statReal: "% Real Cases",
      empty: "No matching videos found",
      close: "Close",
      share: "Share",
      footerCompany: "Beijing Shenshi Qiancheng Marketing Event Planning Co., Ltd.",
      toastLoading: "Loading video…",
      toastLoaded: "Video loaded",
      toastFailed: "Failed to load video, please retry",
      toastCopied: "Link copied — paste it to share",
      sharePrefix: "SHENGSHI Case | ",
      shareSuffix: " (from Beijing Shenshi Qiancheng)"
    },
    ru: {
      title: "Промо-кейсы SHENGSHI · Пекин Шэнши Цяньчэн",
      metaDesc: "Промо-видео кейсов SHENGSHI — шесть направлений: сила компании, событийный маркетинг, портфели брендов, зарубежный маркетинг, инновационные стенды, AI-креатив",
      searchPlaceholder: "Поиск видео / брендов...",
      heroBadge: "ПРОМО-КЕЙСЫ SHENGSHI",
      heroLine1: "Видео-галерея кейсов SHENGSHI",
      heroLine2: "Стратегия · Опыт · Глобально",
      heroDesc: "Системная маркетинговая платформа: шесть направлений контента — сила компании, событийный маркетинг, портфели брендов, зарубежный маркетинг, инновационные стенды и AI-креатив",
      statVideos: "Отобранные видео",
      statCats: "Категории",
      statReal: "% Реальные кейсы",
      empty: "Не найдено подходящих видео",
      close: "Закрыть",
      share: "Поделиться",
      footerCompany: "Пекинская компания по планированию маркетинговых мероприятий «Шэнши Цяньчэн»",
      toastLoading: "Загрузка видео…",
      toastLoaded: "Видео загружено",
      toastFailed: "Не удалось загрузить видео, попробуйте ещё раз",
      toastCopied: "Ссылка скопирована — вставьте и поделитесь",
      sharePrefix: "Кейс SHENGSHI | ",
      shareSuffix: " (от Beijing Shenshi Qiancheng)"
    },
    uz: {
      title: "SHENGSHI Reklama Holatlari Videolari · Pekin Shenshi Qiancheng",
      metaDesc: "SHENGSHI reklama holatlari videolari — olti yo'nalish: kompaniya salohiyati, tajribaviy marketing, brend portfeli, xorijiy marketing, innovatsion eksponatlar, AI-ijodkorlik",
      searchPlaceholder: "Videolar / brendlarni qidirish...",
      heroBadge: "SHENGSHI REKLAMA MISOLARI",
      heroLine1: "SHENGSHI holatlari video galereyasi",
      heroLine2: "Strategiya · Tajriba · Global",
      heroDesc: "Tizimli marketing platformasi: oltita kontent yo'nalishi — kompaniya salohiyati, tajribaviy marketing, brend portfeli, xorijiy marketing, innovatsion eksponatlar va AI-ijodkorlik",
      statVideos: "Tanlangan videolar",
      statCats: "Kategoriyalar",
      statReal: "% Haqiqiy holatlar",
      empty: "Mos videolar topilmadi",
      close: "Yopish",
      share: "Ulashish",
      footerCompany: "Pekin Shenshi Qiancheng Marketing Tadbirlarini Rejalashtirish MChJ",
      toastLoading: "Video yuklanmoqda…",
      toastLoaded: "Video yuklandi",
      toastFailed: "Video yuklanmadi, qayta urinib ko'ring",
      toastCopied: "Havola nusxalandi — joylab ulashing",
      sharePrefix: "SHENGSHI holati | ",
      shareSuffix: " (Beijing Shenshi Qiancheng kompaniyasidan)"
    }
  },

  // ---------------- 分類名 ----------------
  CATS: {
    zh: { "全部": "全部", "盛世實力": "盛世實力", "體驗營銷": "體驗營銷", "品牌合集": "品牌合集", "海外營銷": "海外營銷", "創新展具": "創新展具", "AI創意": "AI創意" },
    en: { "全部": "All", "盛世實力": "Corporate Strength", "體驗營銷": "Experiential Marketing", "品牌合集": "Brand Portfolios", "海外營銷": "Overseas Marketing", "創新展具": "Innovative Exhibits", "AI創意": "AI Creativity" },
    ru: { "全部": "Все", "盛世實力": "Сила компании", "體驗營銷": "Событийный маркетинг", "品牌合集": "Портфели брендов", "海外營銷": "Зарубежный маркетинг", "創新展具": "Инновационные стенды", "AI創意": "AI-креатив" },
    uz: { "全部": "Barchasi", "盛世實力": "Kompaniya salohiyati", "體驗營銷": "Tajribaviy marketing", "品牌合集": "Brend portfeli", "海外營銷": "Xorijiy marketing", "創新展具": "Innovatsion eksponatlar", "AI創意": "AI-ijodkorlik" }
  },

  // ---------------- 品牌/子標籤角標 ----------------
  TAGS: {
    zh: { "綜合實力": "綜合實力", "團隊實力": "團隊實力", "海外實力": "海外實力", "比亞迪": "比亞迪", "方程豹": "方程豹", "騰勢": "騰勢", "仰望": "仰望", "多品牌": "多品牌", "寶駿": "寶駿", "五菱": "五菱", "美的": "美的", "一汽豐田": "一汽豐田", "寧德時代": "寧德時代", "吉利": "吉利", "廣本": "廣本", "雅迪": "雅迪", "盛世": "盛世", "AI創意": "AI創意" },
    en: { "綜合實力": "Corporate Strength", "團隊實力": "Team Strength", "海外實力": "Overseas Strength", "比亞迪": "BYD", "方程豹": "FANGCHENGBAO", "騰勢": "DENZA", "仰望": "YANGWANG", "多品牌": "Multi-Brand", "寶駿": "BAOJUN", "五菱": "WULING", "美的": "Midea", "一汽豐田": "FAW Toyota", "寧德時代": "CATL", "吉利": "GEELY", "廣本": "GAC Honda", "雅迪": "YADEA", "盛世": "SHENGSHI", "AI創意": "AI Creative" },
    ru: { "綜合實力": "Сила компании", "團隊實力": "Сила команды", "海外實力": "Зарубежная сила", "比亞迪": "BYD", "方程豹": "FANGCHENGBAO", "騰勢": "DENZA", "仰望": "YANGWANG", "多品牌": "Мультибренд", "寶駿": "BAOJUN", "五菱": "WULING", "美的": "Midea", "一汽豐田": "FAW Toyota", "寧德時代": "CATL", "吉利": "GEELY", "廣本": "GAC Honda", "雅迪": "YADEA", "盛世": "SHENGSHI", "AI創意": "AI-креатив" },
    uz: { "綜合實力": "Kompaniya salohiyati", "團隊實力": "Jamoa salohiyati", "海外實力": "Xorijiy salohiyat", "比亞迪": "BYD", "方程豹": "FANGCHENGBAO", "騰勢": "DENZA", "仰望": "YANGWANG", "多品牌": "Ko'p brend", "寶駿": "BAOJUN", "五菱": "WULING", "美的": "Midea", "一汽豐田": "FAW Toyota", "寧德時代": "CATL", "吉利": "GEELY", "廣本": "GAC Honda", "雅迪": "YADEA", "盛世": "SHENGSHI", "AI創意": "AI ijodkorlik" }
  },

  // ---------------- 視頻標題 & 描述（zh 直接用 videos-data.js 原文） ----------------
  VIDEOS: {
    v01: {
      en: { title: "Comprehensive Strength of SHENGSHI", desc: "SHENGSHI builds a systematic marketing platform across five pillars — Strategy, Scenario, Communication, Events, and Overseas. Driven by technology, with a global footprint and self-developed automated exhibits, it delivers end-to-end integrated marketing services for brands, from top-level design to local implementation." },
      ru: { title: "Комплексная сила SHENGSHI", desc: "SHENGSHI формирует системную маркетинговую платформу по пяти направлениям: стратегия, сценарии, коммуникации, мероприятия и зарубежные проекты. Опираясь на глобальное присутствие и собственные автоматизированные стенды, компания на основе технологий предоставляет брендам комплексные интегрированные маркетинговые услуги — от стратегического проектирования до локальной реализации." },
      uz: { title: "SHENGSHI umumiy salohiyati", desc: "SHENGSHI strategiya, ssenariy, kommunikatsiya, tadbirlar va xorijiy yo'nalishlardan iborat beshta ustun asosida tizimli marketing platformasini quradi. Global qamrov va o'zining avtomatlashtirilgan ko'rgazma jihozlari tufayli texnologiyaga tayanib, brendlarga strategik dizayndan mahalliy amaliyotgacha bo'lgan to'liq integratsiyalashgan marketing xizmatlarini taqdim etadi." }
    },
    v02: {
      en: { title: "SHENGSHI Team Strength", desc: "SHENGSHI has a \"sharp-edge team\" combining strategic thinking, creative edge, and execution resilience. With full-process professional coordination and agile responsiveness, it consistently delivers high quality under extreme conditions and international projects, safeguarding brands." },
      ru: { title: "Сила команды SHENGSHI", desc: "У SHENGSHI есть «острая команда», сочетающая стратегическое мышление, творческую смелость и устойчивость к исполнению. Благодаря профессиональной координации всего процесса и гибкой реакции команда стабильно обеспечивает высокое качество в экстремальных условиях и международных проектах, надёжно защищая интересы брендов." },
      uz: { title: "SHENGSHI jamoasi salohiyati", desc: "SHENGSHI strategik tafakkur, ijodiy keskinlik va ijro chidamliligini birlashtirgan \"o'tkir jamoa\"ga ega. To'liq jarayonni professional muvofiqlashtirish va chaqqon reaksiya tufayli jamoa ekstremal sharoitlarda ham, xalqaro loyihalarda ham doimiy yuqori sifatni ta'minlab, brendlarni himoya qiladi." }
    },
    v03: {
      en: { title: "SHENGSHI Overseas Strength", desc: "Leveraging a systematic global service platform, SHENGSHI helps brands deepen their presence in Southeast Asia, Central Asia, Europe, and North America, opening new chapters of commercial exchange with a Chinese narrative and creating genuine brand value." },
      ru: { title: "Зарубежная сила SHENGSHI", desc: "Опираясь на глобальную системную сервисную платформу, SHENGSHI помогает брендам укреплять позиции в Юго-Восточной Азии, Центральной Азии, Европе и Северной Америке, открывая новые главы делового обмена через китайскую повествовательную модель и создавая подлинную ценность бренда." },
      uz: { title: "SHENGSHI xorijiy salohiyati", desc: "Global tizimli xizmat platformasiga tayanib, SHENGSHI brendlarga Janubi-Sharqiy Osiyo, Markaziy Osiyo, Yevropa va Shimoliy Amerikada o'z mavqeini mustahkamlashda yordam beradi, Xitoy hikoyasi bilan yangi biznes aloqa sahifalarini ochadi va haqiqiy brend qiymatini yaratadi." }
    },
    v04: {
      en: { title: "BYD · Super Experience Day", desc: "Around the brand's stage-by-stage goals, SHENGSHI continuously refines upgrades in automated exhibit R&D, experience module configuration, content topic design, and communication channel planning — achieving a 10-year IP legacy with 17 project iterations." },
      ru: { title: "BYD · Супер-день впечатлений", desc: "В соответствии с поэтапными целями бренда SHENGSHI постоянно совершенствует разработку автоматизированных стендов, конфигурацию опыта, дизайн контент-тем и планирование каналов коммуникации, создав 10-летнее наследие IP и 17 итераций проекта." },
      uz: { title: "BYD · Super Tajriba Kuni", desc: "SHENGSHI brendning bosqichma-bosqich maqsadlari asosida avtomatlashtirilgan jihozlar yaratish, tajriba modullari konfiguratsiyasi, kontent mavzulari dizayni va kommunikatsiya kanallari rejasini doimiy takomillashtirib, 10 yillik IP merosi va 17 loyiha iteratsiyasini amalga oshirgan." }
    },
    v05: {
      en: { title: "FANGCHENGBAO · Leopard Power Experience Day", desc: "With modular automated exhibits, SHENGSHI builds large-scale test-drive experience systems for brands. Each module supports flexible configuration by site conditions, quickly adapting to outdoor auto-show venues, malls, and other spaces — balancing standardized replication with customized implementation." },
      ru: { title: "FANGCHENGBAO · День впечатлений Leopard Power", desc: "С помощью модульных автоматизированных стендов SHENGSHI создаёт для брендов крупные системы тест-драйвов. Каждый модуль гибко настраивается под условия площадки, быстро адаптируясь к внешним зонам автосалонов, торговым центрам и другим пространствам, обеспечивая баланс стандартизации и кастомизации." },
      uz: { title: "FANGCHENGBAO · Leopard Kuchi Tajriba Kuni", desc: "Modulli avtomatlashtirilgan jihozlar bilan SHENGSHI brendlar uchun yirik sinov haydash tizimlarini quradi. Har bir modul maydon sharoitiga qarab moslashuvchan sozlanadi, avtosalon tashqi hududlari, savdo markazlari va boshqa joylarga tez moslashib, standartlashtirilgan takrorlash va moslashtirilgan amalga oshirish o'rtasidagi muvozanatni ta'minlaydi." }
    },
    v06: {
      en: { title: "DENZA · Yi San Fang Experience Day", desc: "Seizing prime mall locations, SHENGSHI builds futuristic experience scenarios on automated exhibits, making black-tech perceptible, understandable, and verifiable. Panoramic displays attract footfall, spark viral content, drive cross-platform reach, and continuously accumulate event IP assets." },
      ru: { title: "DENZA · День впечатлений Yi San Fang", desc: "Занимая ключевые площадки в торговых центрах, SHENGSHI создаёт футуристичные пространства впечатлений на основе автоматизированных стендов, делая передовые технологии ощутимыми, понятными и проверяемыми. Панорамные показы привлекают трафик, порождают вирусный контент, усиливают охват на всех платформах и накапливают IP-активы мероприятия." },
      uz: { title: "DENZA · Yi San Fang Tajriba Kuni", desc: "Savdo markazlaridagi eng yaxshi joylarni egallab, SHENGSHI avtomatlashtirilgan jihozlar asosida futuristik tajriba maydonlarini yaratadi, ilg'or texnologiyalarni seziladigan, tushunarli va tasdiqlanadigan qiladi. Panoramik namoyishlar mijozlar oqimini jalb qiladi, virusli kontent yaratadi, barcha platformalarda tarqalishni kuchaytiradi va tadbir IP aktivlarini to'playdi." }
    },
    v07: {
      en: { title: "YANGWANG · Emergency Water Float Experience", desc: "Breaking site limits through iterative R&D and precise operations, SHENGSHI delivers a 2,000㎡ \"Mountain & Sea\" immersive scene efficiently. The rare experience drives UGC content, redefining \"ultimate safety\" and \"ultimate performance\" luxury standards across the internet." },
      ru: { title: "YANGWANG · Опыт экстренного всплытия", desc: "Преодолевая ограничения площадок за счёт итеративной разработки и точной организации, SHENGSHI эффективно реализует иммерсивную сцену «Гора и Море» площадью 2000 м². Уникальный опыт стимулирует создание UGC-контента и переопределяет люксовые стандарты «абсолютной безопасности» и «абсолютной производительности»." },
      uz: { title: "YANGWANG · Favqulodda Suzish Tajribasi", desc: "Maydon cheklovlarini bosqichma-bosqich tadqiqot va aniq tashkiliy ishlar orqali yengib, SHENGSHI 2000 m² \"Tog' va Dengiz\" immersiv sahnasini samarali amalga oshiradi. Noyob tajriba UGC kontentni rag'batlantiradi va internetda \"eng yuqori xavfsizlik\" hamda \"eng yuqori ishlash\" lyuks standartlarini yangilaydi." }
    },
    v08: {
      en: { title: "FANGCHENGBAO · DENZA · YANGWANG Outdoor Mix", desc: "SHENGSHI customizes outdoor plans for each of the three brands and completes full delivery, matching each brand's tone, cycle, and marketing rhythm — independent brand expressions unified within the group's marketing framework, building offline reputation through a mature IP matrix." },
      ru: { title: "FANGCHENGBAO · DENZA · YANGWANG — нарезка внешних мероприятий", desc: "SHENGSHI разрабатывает индивидуальные внешние планы для каждого из трёх брендов и полностью реализует их, учитывая тональность, циклы и маркетинговые ритмы брендов, создавая независимые выражения, объединённые в групповую маркетинговую структуру, и накапливая офлайн-репутацию через зрелую матрицу IP." },
      uz: { title: "FANGCHENGBAO · DENZA · YANGWANG ochiq maydon aralashmasi", desc: "SHENGSHI har uchala brend uchun alohida ochiq maydon rejalarini ishlab chiqadi va ularni to'liq amalga oshiradi; har bir brendning ohangi, sikli va marketing ritmiga moslashib, guruh marketing tizimi doirasida mustaqil brend ifodalarini yaratadi va yetuk IP matritsasi orqali oflayn obro' to'playdi." }
    },
    v09: {
      en: { title: "BYD · Four-Brand Experience Collection", desc: "At the 2025 GBA Auto Show, SHENGSHI simultaneously operated experience zones for four brands. Automated exhibits enabled low-manpower multi-threaded operations, and integrated brand resources delivered synergistic exposure — 100,000+ interactions across a 40,000㎡ zone and 10M+ topic views online." },
      ru: { title: "BYD · Коллекция впечатлений четырёх брендов", desc: "На автосалоне Большого залива 2025 SHENGSHI одновременно организовала зоны впечатлений для четырёх брендов. Автоматизированные стенды обеспечили работу с минимальным персоналом и многопоточную эксплуатацию, а интеграция ресурсов дала синергетический охват: 100 000+ взаимодействий на площади 40 000 м² и 10 млн+ просмотров тем в сети." },
      uz: { title: "BYD · To'rt Brend Tajriba To'plami", desc: "2025 yil Buyuk Ko'rfaz avtosalonida SHENGSHI bir vaqtning o'zida to'rtta brend uchun tajriba zonalarini ochdi. Avtomatlashtirilgan jihozlar kam xodim bilan ko'p oqimli ishlashni ta'minladi, brend resurslari integratsiyasi sinergik yoritishni berdi — 40 000 m² maydonda 100 000+ interaksiya va internetda 10 mln+ mavzu ko'rish." }
    },
    v10: {
      en: { title: "BAOJUN · Smart Experience Day", desc: "SHENGSHI upgrades automated exhibits with precise strategic response and efficient execution, leveraging regional tourism resources, intangible cultural heritage, and KOLs for integrated promotion — solidifying Wuling's differentiated perception on the smart track." },
      ru: { title: "BAOJUN · День умных впечатлений", desc: "SHENGSHI модернизирует автоматизированные стенды, обеспечивая точную стратегическую реакцию и эффективное исполнение, используя региональные туристические ресурсы, нематериальное культурное наследие и KOL для интегрированного продвижения, укрепляя дифференцированное восприятие Wuling в сегменте умных технологий." },
      uz: { title: "BAOJUN · Aqlli Tajriba Kuni", desc: "SHENGSHI avtomatlashtirilgan jihozlarni yangilab, aniq strategik javob va samarali ijroni ta'minlaydi; mintaqaviy turizm resurslari, nomoddiy madaniy meros va KOLlardan foydalanib integratsiyalashgan targ'ibot olib boradi va Wulingning aqlli yo'nalishdagi farqlanuvchi obro'sini mustahkamlaydi." }
    },
    v11: {
      en: { title: "BYD · Project Collection", desc: "As product lines expand, the brand matrix refreshes, and the overseas footprint grows, SHENGSHI rises to every challenge, pioneering new marketing paradigms and witnessing every brand milestone — helping brands lead globally." },
      ru: { title: "BYD · Коллекция проектов", desc: "По мере расширения продуктовых линеек, обновления матрицы брендов и роста зарубежного присутствия SHENGSHI принимает вызовы, преодолевает трудности, создаёт новые маркетинговые парадигмы, участвуя в каждом этапе роста бренда и помогая ему лидировать в мире." },
      uz: { title: "BYD · Loyihalar To'plami", desc: "Mahsulot qatorlari kengayib, brend matritsasi yangilanib, xorijiy qamrov o'sib borar ekan, SHENGSHI har bir qiyinchilikni qabul qilib, yangi marketing paradigmalarini yaratadi va brendning har bir bosqichida ishtirok etib, unga global yetakchilikka erishishda yordam beradi." }
    },
    v12: {
      en: { title: "Midea · Project Collection", desc: "SHENGSHI supports the brand's domestic expansion from prime first-tier malls to lower-tier markets and county towns, through multi-level roadshows and combined exhibitions, leveraging cross-industry resources to achieve matrix effects and brand co-building for Midea, Toshiba, Little Swan, Hualing, and COLMO." },
      ru: { title: "Midea · Коллекция проектов", desc: "SHENGSHI поддерживает внутреннее развитие бренда — от ключевых торговых центров первого эшелона до рынков низших уровней и уездных городов — через многоуровневые туры и комбинированные выставки, используя межотраслевые ресурсы для достижения матричного эффекта и совместного развития брендов Midea, Toshiba, Little Swan, Hualing и COLMO." },
      uz: { title: "Midea · Loyihalar To'plami", desc: "SHENGSHI brendning ichki kengayishini — birinchi darajali savdo markazlaridan quyi bozorlar va tuman shaharlarigacha — ko'p bosqichli ko'rgazma turlari va kombinatsiyalangan ko'rgazmalar orqali qo'llab-quvvatlaydi; tarmoqlararo resurslardan foydalanib Midea, Toshiba, Little Swan, Hualing va COLMO brendlari uchun matritsa effekti va birgalikda brend qurishga erishadi." }
    },
    v13: {
      en: { title: "Wuling · Project Collection", desc: "SHENGSHI accompanies Wuling through every growth stage, with nearly a thousand roadshows a year and integrated communication forming an online-offline marketing network, constantly closing the distance between brand and users and embedding the belief \"Build what the people need\" in users' minds." },
      ru: { title: "Wuling · Коллекция проектов", desc: "SHENGSHI сопровождает Wuling на всех этапах роста: около тысячи туров в год и интегрированные коммуникации формируют маркетинговую сеть онлайн и офлайн, сокращая дистанцию между брендом и пользователями и закрепляя в сознании потребителей принцип «Мы создаём то, что нужно людям»." },
      uz: { title: "Wuling · Loyihalar To'plami", desc: "SHENGSHI Wulingga har bosqichda hamrohlik qiladi: yiliga mingga yaqin ko'rgazma turlari va integratsiyalashgan kommunikatsiyalar onlayn-oflayn marketing tarmog'ini shakllantiradi, brend va foydalanuvchilar orasidagi masofani qisqartiradi va \"Xalq nima kerak bo'lsa, Wuling o'shani ishlab chiqaradi\" tamoyilini foydalanuvchilar qalbida mustahkamlaydi." }
    },
    v14: {
      en: { title: "FAW Toyota · Project Collection", desc: "SHENGSHI has partnered deeply with FAW Toyota for years, handling planning, design, and full delivery of dealer conferences and technology launches — providing solid offline execution for channel building and technology communication, powering the brand's systematic operations." },
      ru: { title: "FAW Toyota · Коллекция проектов", desc: "SHENGSHI много лет тесно сотрудничает с FAW Toyota, отвечая за планирование, дизайн и полную реализацию конференций дилеров и презентаций технологий, обеспечивая надёжное офлайн-исполнение для развития каналов и технологических коммуникаций и поддерживая системную работу бренда." },
      uz: { title: "FAW Toyota · Loyihalar To'plami", desc: "SHENGSHI yillar davomida FAW Toyota bilan chambarchas hamkorlik qilib, dilerlar konferensiyalari va texnologiya taqdimotlarining rejalashtirish, dizayn va to'liq amalga oshirilishini o'z zimmasiga olgan; kanallar qurish va texnologik kommunikatsiyalar uchun ishonchli oflayn ijroni ta'minlab, brendning tizimli ishlashini qo'llab-quvvatlaydi." }
    },
    v15: {
      en: { title: "CATL · Indoor & Outdoor Mall Exhibitions", desc: "To strengthen CATL's influence with C-end users as the battery industry leader, SHENGSHI builds brand-public dialogue interfaces in prime business districts — \"edutainment\" that reinforces brand and technology advantages and cements CATL as the top-of-mind choice." },
      ru: { title: "CATL · Выставки в ТЦ и на улице", desc: "Чтобы усилить влияние CATL — лидера отрасли аккумуляторов — на конечных потребителей, SHENGSHI создаёт интерфейсы диалога бренда с аудиторией в ключевых деловых районах, используя принцип «обучая — развлекаем», укрепляя восприятие преимуществ бренда и технологий и закрепляя позицию CATL как первого выбора." },
      uz: { title: "CATL · Ichki va Tashqi Savdo Markazi Ko'rgazmalari", desc: "Batareya sohasidagi yetakchi CATL brendining oxirgi foydalanuvchilarga ta'sirini kuchaytirish uchun SHENGSHI asosiy biznes tumanlarida brend va jamoatchilik o'rtasida muloqot interfeyslarini yaratadi — \"o'rgatib, zavqlantirish\" tamoyili brend va texnologiya ustunliklarini mustahkamlaydi hamda CATLni birinchi tanlov sifatida ongda o'rnatadi." }
    },
    v16: {
      en: { title: "GEELY · Global Dealer Conference", desc: "The conference drew 1,000+ dealer representatives from 100+ countries and regions. SHENGSHI handled the full process of planning, design, construction, and operations, ensuring a seamless event with professional coordination and high-standard execution, empowering GEELY's global strategy and image." },
      ru: { title: "GEELY · Глобальная конференция дилеров", desc: "Конференция собрала более 1000 представителей дилеров из 100+ стран и регионов. SHENGSHI отвечала за весь процесс: планирование, дизайн, строительство и эксплуатацию, обеспечив безупречное проведение мероприятия благодаря профессиональной координации и высоким стандартам исполнения, поддерживая глобальную стратегию и имидж GEELY." },
      uz: { title: "GEELY · Global Dilerlar Konferensiyasi", desc: "Konferensiya 100+ mamlakat va mintaqadan 1000+ diler vakilini jamladi. SHENGSHI rejalashtirish, dizayn, qurilish va boshqarishning to'liq jarayonini o'z zimmasiga oldi, professional muvofiqlashtirish va yuqori standartdagi ijro bilan tadbirning benuqson o'tishini ta'minlab, GEELYning global strategiyasi va imidjini qo'llab-quvvatladi." }
    },
    v17: {
      en: { title: "GAC Honda · Roadshow Collection", desc: "Leveraging its own IP and premium resources, SHENGSHI harnesses integration advantages to co-create a new entertainment-consumption ecosystem, building stickier user relationships in offline spaces and helping the brand break through market challenges." },
      ru: { title: "GAC Honda · Коллекция туров", desc: "Используя собственный IP и премиальные ресурсы, SHENGSHI создаёт новую экосистему развлекательного потребления, выстраивая более прочные отношения с пользователями в офлайн-пространстве и помогая бренду преодолеть рыночные трудности." },
      uz: { title: "GAC Honda · Ko'rgazma Turlari To'plami", desc: "O'zining IP va yuqori sifatli resurslaridan foydalanib, SHENGSHI o'yin-kulgi va iste'mol tajribasining yangi ekotizimini yaratadi, oflayn maydonlarda foydalanuvchilar bilan mustahkamroq munosabatlar o'rnatadi va brendga bozor qiyinchiliklarini yengishda yordam beradi." }
    },
    v18: {
      en: { title: "YADEA · Project Collection", desc: "SHENGSHI built several super-events for YADEA — live event streaming and creative viral videos reaching tens of millions of users, precisely targeting young consumers and helping YADEA retain its global sales championship." },
      ru: { title: "YADEA · Коллекция проектов", desc: "SHENGSHI провела для YADEA несколько суперсобытий: прямые трансляции и креативные вирусные видео охватили десятки миллионов пользователей, точно попадая в молодую целевую аудиторию и помогая YADEA удерживать мировое лидерство по продажам." },
      uz: { title: "YADEA · Loyihalar To'plami", desc: "SHENGSHI YADEA uchun bir nechta super-tadbirlar o'tkazdi — jonli translyatsiyalar va ijodiy virusli videolar o'n millionlab foydalanuvchilarni qamrab oldi, yosh maqsadli auditoriyani aniq nishonga oldi va YADEAga global sotuvlar bo'yicha yetakchilikni saqlab qolishga yordam berdi." }
    },
    v19: {
      en: { title: "SHENGSHI Overseas Cases", desc: "With global systematic operating standards and self-developed creative exhibit platforms, SHENGSHI helps brands create scenarios, build connections, and innovate value in markets at home and abroad." },
      ru: { title: "SHENGSHI — Зарубежные кейсы", desc: "Придерживаясь глобальных системных стандартов и используя собственные креативные выставочные платформы, SHENGSHI помогает брендам создавать сценарии, выстраивать связи и создавать инновационную ценность на внутренних и зарубежных рынках." },
      uz: { title: "SHENGSHI Xorijiy Holatlari", desc: "Global tizimli ishlash standartlari va o'zining ijodiy ko'rgazma platformalari bilan SHENGSHI brendlarga ichki va xorijiy bozorlarda sahnalar yaratish, aloqalar o'rnatish va yangi qiymat yaratishda yordam beradi." }
    },
    v20: {
      en: { title: "BYD · Uzbekistan VILLEXPO Five-City Roadshow", desc: "With systematic overseas operations, SHENGSHI helped BYD complete a five-city relay roadshow across Uzbekistan — a leap from single-point breakthroughs to systematic deployment in Central Asia, laying the strategic foundation for BYD's long-term growth in the region." },
      ru: { title: "BYD · Тур по пяти городам Узбекистана VILLEXPO", desc: "Благодаря системной зарубежной операционной деятельности SHENGSHI помогла BYD успешно провести эстафетный тур по пяти городам Узбекистана. Это стало переходом от точечных прорывов к системному присутствию в Центральной Азии, заложив стратегическую основу для долгосрочного развития BYD в регионе." },
      uz: { title: "BYD · O'zbekiston VILLEXPO Besh Shahar Ko'rgazma Turi", desc: "Tizimli xorijiy operatsion qobiliyati tufayli SHENGSHI BYDga O'zbekistonning besh shahrida estafeta ko'rgazma turini muvaffaqiyatli o'tkazishda yordam berdi. Bu Markaziy Osiyoda yakka nuqtali yutuqlardan tizimli joylashuvga o'tish bo'lib, BYDning mintaqada uzoq muddatli rivojlanishi uchun strategik poydevor yaratdi." }
    },
    v21: {
      en: { title: "BYD · Uzbekistan SHENGSHI Team", desc: "A dedicated team completed market research and risk assessment months in advance, ensuring flawless delivery with outstanding adaptability. The \"one city per week\" high-frequency rotation precisely hit the peak consumption season, quickly switching to local modes to blend into local culture, activating dealer collaboration and pioneering the brand's marketing in Uzbekistan." },
      ru: { title: "BYD · Команда SHENGSHI в Узбекистане", desc: "Специальная команда за несколько месяцев завершила исследование рынка и оценку рисков, обеспечив безупречную реализацию благодаря выдающейся адаптивности. Высокочастотная ротация «один город в неделю» точно попала в пик потребительского сезона, быстрая локализация позволила интегрироваться в местную культуру, активировать сотрудничество дилеров и открыть новую эру маркетинга бренда в Узбекистане." },
      uz: { title: "BYD · O'zbekistondagi SHENGSHI Jamoasi", desc: "Maxsus jamoa bozorni o'rganish va xavf baholashni bir necha oy oldin yakunlab, ajoyib moslashuvchanlik bilan loyihani benuqson amalga oshirdi. \"Haftada bitta shahar\" yuqori chastotali rotatsiyasi iste'mol mavsumining eng yuqori nuqtasini aniq nishonga oldi, tez mahalliylashuv mahalliy madaniyatga qo'shilish, dilerlar hamkorligini faollashtirish va O'zbekistonda brend marketingining yangi davrini ochish imkonini berdi." }
    },
    v22: {
      en: { title: "BYD · Brazil SHARK Launch Event", desc: "For BYD SHARK's Brazil launch, SHENGSHI built self-developed automated exhibits and a 24-hour dedicated overseas operations system, overturning traditional overseas experiences with localized innovative operations — strengthening dealer confidence and winning consumer favor." },
      ru: { title: "BYD · Презентация SHARK в Бразилии", desc: "Для презентации BYD SHARK в Бразилии SHENGSHI создала собственные автоматизированные стенды и круглосуточную специализированную зарубежную систему обслуживания, перевернув традиционный зарубежный опыт инновационными локальными решениями, укрепив доверие дилеров и завоевав расположение потребителей." },
      uz: { title: "BYD · Braziliya SHARK Taqdimoti", desc: "BYD SHARKning Braziliyadagi taqdimoti uchun SHENGSHI o'zining avtomatlashtirilgan jihozlarini va 24 soatlik maxsus xorijiy xizmat tizimini yaratdi; mahalliylashtirilgan innovatsion yechimlar bilan xorijiy tajribani tubdan o'zgartirib, dilerlar ishonchini mustahkamlaydi va iste'molchilar e'tiborini qozondi." }
    },
    v23: {
      en: { title: "BYD · Overseas Launch Events", desc: "Over nine months, SHENGSHI crafted self-developed automated exhibits and localized innovative operations for BYD SHARK's Brazil launch, and provided full-cycle professional services from creativity to execution for the Yuan PRO launch in Mexico. Both overseas launches earned high praise from clients and dealers, showcasing systematic overseas capabilities." },
      ru: { title: "BYD · Зарубежные презентации", desc: "За 9 месяцев SHENGSHI создала собственные автоматизированные стенды и локальные инновационные решения для презентации BYD SHARK в Бразилии и обеспечила полный цикл профессиональных услуг — от креатива до реализации — для презентации Yuan PRO в Мексике. Обе зарубежные презентации получили высокую оценку клиентов и дилеров, демонстрируя системные зарубежные возможности." },
      uz: { title: "BYD · Xorijiy Taqdimot Tadbirlari", desc: "SHENGSHI to'qqiz oy davomida BYD SHARKning Braziliyadagi taqdimoti uchun o'zining avtomatlashtirilgan jihozlari va mahalliy innovatsion yechimlarini yaratdi hamda Meksikadagi Yuan PRO taqdimoti uchun ijodkorlikdan ijroga qadar to'liq siklli professional xizmatlarni taqdim etdi. Ikkala xorijiy taqdimot ham mijozlar va dilerlar tomonidan yuqori baholanib, tizimli xorijiy salohiyatni namoyish etdi." }
    },
    v24: {
      en: { title: "BYD · UK Everything Electric Expo", desc: "SHENGSHI deeply decodes the UK consumer context, deploying modular automated exhibits for rapid setup and visual standards, and blending British sports culture with local media resources — successfully overcoming cultural barriers in a relaxed commercial atmosphere." },
      ru: { title: "BYD · Выставка Everything Electric в Великобритании", desc: "SHENGSHI глубоко анализирует британский потребительский контекст, используя модульные автоматизированные стенды для быстрого развёртывания и достижения визуальных стандартов, соединяя британскую спортивную культуру с местными медиаресурсами и успешно преодолевая культурные барьеры в непринуждённой деловой атмосфере." },
      uz: { title: "BYD · Buyuk Britaniya Everything Electric Ko'rgazmasi", desc: "SHENGSHI Britaniya iste'mol kontekstini chuqur tahlil qiladi, modulli avtomatlashtirilgan jihozlardan tez o'rnatish va vizual standartlarga erishish uchun foydalanadi, Britaniya sport madaniyatini mahalliy media resurslari bilan bog'lab, qulay biznes muhitida madaniy to'siqlarni muvaffaqiyatli yengadi." }
    },
    v25: {
      en: { title: "CATL · London Tech Day", desc: "Relying on its global exhibition chain capabilities, SHENGSHI provides one-stop solutions for the full process — venue coordination, construction, event services, media liaison, and rapid dismantling — with integrated cross-scenario management, consolidating the brand's European market presence and technology communication foundation." },
      ru: { title: "CATL · Tech Day в Лондоне", desc: "Опираясь на глобальные возможности выставочной цепочки, SHENGSHI предоставляет комплексные решения всего процесса: согласование площадки, строительство, организацию мероприятия, взаимодействие со СМИ и экстренный демонтаж, с единым управлением по всем сценариям, укрепляя европейское присутствие бренда и базу технологических коммуникаций." },
      uz: { title: "CATL · London Tech Day", desc: "Global ko'rgazma zanjiri imkoniyatlariga tayanib, SHENGSHI to'liq jarayon uchun yagona yechimlarni taqdim etadi: maydonni kelishish, qurilish, tadbir xizmatlari, media bilan aloqa va shoshilinch demontaj — barcha stsenariylar bo'yicha yagona boshqaruv bilan, brendning Yevropadagi mavqeini va texnologik kommunikatsiya poydevorini mustahkamlaydi." }
    },
    v26: {
      en: { title: "BYD · Automated Auto Show", desc: "With self-developed automated exhibits, SHENGSHI breaks traditional display logic, developing differentiated experience content for each brand's cycle and new-vehicle features, continuously expanding and refreshing experience spaces for efficient technology communication and brand perception." },
      ru: { title: "BYD · Автоматизированная автоярмарка", desc: "С помощью собственных автоматизированных стендов SHENGSHI ломает традиционную логику показа, разрабатывая дифференцированный опыт под циклы брендов и особенности новых автомобилей, постоянно расширяя и обновляя пространства впечатлений для эффективной передачи технологий и восприятия бренда." },
      uz: { title: "BYD · Avtomatlashtirilgan Avtoko'rgazma", desc: "O'zining avtomatlashtirilgan tajriba jihozlari bilan SHENGSHI an'anaviy namoyish mantiqini buzadi; har bir brend sikli va yangi avtomobil xususiyatlari uchun farqlanuvchi tajriba kontentini ishlab chiqadi, tajriba maydonlarini doimiy kengaytirib va yangilab, texnologiyalarni samarali yetkazish va brendni idrok etishni ta'minlaydi." }
    },
    v27: {
      en: { title: "FANGCHENGBAO · Dynamic Auto Show", desc: "Based on the brand's urban-off-road positioning and SHENGSHI's automated exhibit platform, this creates a large indoor-outdoor experience space full of dynamic tension, conveying the product's wild emotional value through immersive experiences and showcasing the brand's unique product appeal." },
      ru: { title: "FANGCHENGBAO · Динамическая автоярмарка", desc: "Основываясь на позиционировании бренда «городское бездорожье» и платформе автоматизированных стендов SHENGSHI, создаётся масштабное внутреннее и внешнее пространство впечатлений с динамичным напряжением, передающее эмоциональную ценность «дикого» продукта через иммерсивный опыт и демонстрирующее уникальную привлекательность продукта бренда." },
      uz: { title: "FANGCHENGBAO · Dinamik Avtoko'rgazma", desc: "Brendning shahar-offroad pozitsiyasi va SHENGSHI avtomatlashtirilgan ko'rgazma platformasiga asoslanib, dinamik taranglikka ega yirik ichki-tashqi tajriba maydoni yaratiladi; immersiv tajriba orqali mahsulotning \"yovvoyi\" hissiy qiymati yetkaziladi va brendning noyob mahsulot jozibasi namoyish etiladi." }
    },
    v28: {
      en: { title: "DENZA · Dynamic Auto Show", desc: "SHENGSHI uses automated exhibits to break traditional spatial narratives and redefine setup efficiency, breaking complex driving-control technology into a fluid, elegant dynamic performance — turning technological luxury from spec-sheet text into perceptible composure and precision." },
      ru: { title: "DENZA · Динамическая автоярмарка", desc: "SHENGSHI с помощью автоматизированных стендов ломает традиционное пространственное повествование и переопределяет эффективность монтажа, превращая сложные технологии управления в плавное элегантное динамическое шоу — технологическая роскошь становится не текстом в спецификации, а ощутимыми уверенностью и точностью." },
      uz: { title: "DENZA · Dinamik Avtoko'rgazma", desc: "SHENGSHI avtomatlashtirilgan jihozlar bilan an'anaviy fazoviy hikoyalarni buzadi va o'rnatish samaradorligini qayta belgilaydi; murakkab boshqaruv texnologiyalarini silliq, nafis dinamik shouga aylantiradi — texnologik hashamat konfiguratsiya varag'idagi matndan seziladigan ishonch va aniqlikka aylanadi." }
    },
    v29: {
      en: { title: "Overseas Roadshow Exhibits", desc: "SHENGSHI's overseas self-developed automated exhibit platform offers automated setup, efficient deployment, smart interaction, and flexible combinations — cutting operating costs, boosting delivery efficiency, adapting to all overseas scenarios, and helping brands sail across seas to win." },
      ru: { title: "Оборудование для зарубежных туров", desc: "Собственная зарубежная платформа автоматизированных стендов SHENGSHI предлагает автоматическую сборку, эффективное развёртывание, умное взаимодействие и гибкие комбинации — снижая операционные затраты, повышая эффективность реализации, адаптируясь к любым зарубежным сценариям и помогая брендам преодолевать моря и побеждать." },
      uz: { title: "Xorijiy Ko'rgazma Turlari Jihozlari", desc: "SHENGSHIning xorijdagi avtomatlashtirilgan ko'rgazma platformasi avtomatik o'rnatish, samarali joylashtirish, aqlli interaksiya va moslashuvchan kombinatsiyalarni taklif etadi — operatsion xarajatlarni kamaytiradi, amalga oshirish samaradorligini oshiradi, barcha xorijiy stsenariylarga moslashadi va brendlarga dengizlarni kezib g'alaba qozonishda yordam beradi." }
    },
    v30: {
      en: { title: "AI Creative Short Films", desc: "Combining professional filmmaking with cutting-edge AI technology, SHENGSHI creates more shareable video content for launches, product promotions, and event publicity — innovative expressions in tune with today's context and viewing habits that refresh brand communication value." },
      ru: { title: "AI Креативные короткометражки", desc: "Сочетая профессиональное производство видео с передовыми AI-технологиями, SHENGSHI создаёт более вирусный видеоконтент для презентаций, продвижения продуктов и рекламы мероприятий — инновационные форматы, соответствующие современному контексту и привычкам просмотра, обновляющие ценность брендовых коммуникаций." },
      uz: { title: "AI Ijodiy Qisqa Filmlar", desc: "Professional video ishlab chiqarishni ilg'or AI texnologiyalari bilan uyg'unlashtirib, SHENGSHI taqdimotlar, mahsulot targ'iboti va tadbir reklamasi uchun ko'proq tarqaladigan video kontent yaratadi — bugungi kontekst va tomosha odatlariga mos innovatsion ifodalar brend kommunikatsiyasi qiymatini yangilaydi." }
    }
  }
};
