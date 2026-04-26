// Скопируйте в config.js или подключайте только локально (не коммитьте секреты).
// Для GitHub Pages правьте config.js напрямую или подставляйте значения в CI.

const CONFIG = {
    APP_NAME: 'Платформа Потребность',
    MAP_CENTER: [55.75, 37.61],
    MAP_ZOOM: 10,

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

    BASE_PATH: '',

    SHEETS_API_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
    VV_SHEETS_API_URL: '',
    // На статическом хостинге без Node: URL прокси POST→GAS (см. docs/gas-browser-post.md). Локально оставьте пустым.
    GAS_POST_PROXY: '',

    CANDIDATE_NEAREST_COUNT: 5,
    ROUTE_MAP_PROVIDER: 'yandex',
    BOT_HANDLE: '@your_bot',
    CANDIDATE_MESSAGE_TEMPLATE:
        'Здравствуйте! Ближайшая к вам точка: {{workTitle}} ({{workAddress}}), примерно {{distanceKm}} км.\n' +
        'Маршрут: {{routeUrl}}\n' +
        'Подробности — в боте: {{bot}}',

    DEBUG_STAJ_LIST: false,

    _localApiKey: '',

    MATERIALS_DOC_URL: 'https://docs.google.com/document/d/YOUR_DOC_ID/edit'
};
