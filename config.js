// Конфигурация для GitHub Pages и локального открытия.
// На production (Pages) укажите URL веб-приложения Apps Script.

const CONFIG = {
    APP_NAME: 'Платформа Потребность',
    MAP_CENTER: [55.75, 37.61],
    MAP_ZOOM: 10,

    // Подложка Leaflet (ТЗ G1). См. docs/maps-provider.md
    MAP_TILE_URL: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    MAP_TILE_SUBDOMAINS: 'abcd',
    MAP_TILE_ATTRIBUTION: '© OpenStreetMap © CARTO',
    MAP_TILE_MAX_ZOOM: 19,
    MAP_TILE_MIN_ZOOM: 5,
    SHEET_DEMAND_NAME: 'Потребность',
    OUR_OFFICE: 'Максутов',
    USER_NAME: 'Менеджер',
    COLORS: {
        OUR: '#10B981',
        OTHER: '#3B82F6',
        NONE: '#9CA3AF'
    },

    // Если сайт на GitHub Pages в подпапке репозитория: '/имя-репо/' (со слэшем в конце или без — см. assetUrl в app.js)
    BASE_PATH: '',

    // Единая таблица: один деплой Apps Script (…/exec)
    SHEETS_API_URL: 'https://script.google.com/macros/s/AKfycbzsMiC9PsUaSIqExoNbDKiZzySJt9XPAVOUDK5X_0-e1vvxzk6cYjFrOSRqlNMJUx7TRA/exec',
    // Пусто = тот же скрипт, что и SHEETS_API_URL
    VV_SHEETS_API_URL: '',
    // Пусто на localhost: POST в GAS идёт через /api/gas. На GitHub Pages укажите URL прокси (см. docs/gas-browser-post.md).
    GAS_POST_PROXY: '',

    // Кандидат: ближайшие точки на карте «Потребность» (геокод через GAS mode=geocode)
    CANDIDATE_NEAREST_COUNT: 5,
    /** Провайдер ссылки «маршрут»: yandex | 2gis | google */
    ROUTE_MAP_PROVIDER: 'yandex',
    /** Подстановка для {{bot}} в шаблоне сообщения кандидату */
    BOT_HANDLE: '@your_bot',
    CANDIDATE_MESSAGE_TEMPLATE:
        'Здравствуйте! Ближайшая к вам точка: {{workTitle}} ({{workAddress}}), примерно {{distanceKm}} км.\n' +
        'Маршрут: {{routeUrl}}\n' +
        'Подробности — в боте: {{bot}}',

    /** Временно: console + ?debug=1 у GAS при загрузке списка стажировок. Перед продом — false. */
    DEBUG_STAJ_LIST: false,

    _localApiKey: '',

    // URL Google Doc с материалами для кандидатов
    MATERIALS_DOC_URL: '',

    // ========= ИНТЕГРАЦИЯ: Google-форма Лента Офф + Пикеры =========
    // true  — после записи Лента офф/Пикеры тихо POST'им в Google-форму (no-cors)
    // false — отключить интеграцию (только внутренняя запись в GAS)
    LENTA_GFORM_ENABLED: true,
    // Название вашей компании ТОЧНО как в списке Google-формы (поле «Выберите название вашей компании»)
    // Пример: 'ООО "Сапфир"'  |  '' = не заполнять поле компании
    LENTA_COMPANY_NAME: 'ВИМАРТ'
};
