# public/ — legacy vanilla + mobile prod

## Назначение

**Legacy vanilla-фронт** (HTML/CSS/JS) — **prod mobile-клиент** на GitHub Pages (`/Ankara/mobile/`).

**Desktop prod** — React [`frontend/`](../frontend/) (`/Ankara/desktop/`).

Единая точка входа: `/Ankara/` → bootstrap ([`pages-bootstrap.html`](pages-bootstrap.html)) выбирает mobile или desktop.

Стратегия: [mobile-strategy.md](../docs/04_Продукт/mobile-strategy.md) · Журнал попыток: [mobile-incident-log.md](../docs/04_Продукт/mobile-incident-log.md)

## Для кого

- Исправления **mobile** map, меню, фильтров, «Рядом», стажировок на телефоне.
- Агент — **mobile prod правки здесь**; desktop — в `frontend/`.

## Содержимое

| Файл / папка | Зачем |
|--------------|--------|
| `pages-bootstrap.html` | Редирект mobile/desktop (копируется в корень Ankara как `index.html`) |
| `index.html` | Legacy SPA entry |
| [_legacy/](_legacy/README.md) | `app.js` — логика vanilla |
| `style.css` | Стили экранов (в т.ч. mobile `@media 767px`) |
| `colors_and_type.css` | Design tokens «Графит» (использует и React) |
| `config.js` | GAS URL, `BASE_PATH` (на Pages dual: генерируется `/Ankara/mobile/`) |
| `config.example.js` | Шаблон |
| [data/](data/README.md) | JSON/CSV для карты (копия из `data/` через `sync:data`) |

## Локальный запуск

```bash
npm run dev    # server.js :8080, открыть http://localhost:8080
```

## Деплой

```bash
npm run pages:push          # dual (default): mobile/ + desktop/ + bootstrap
npm run pages:push:legacy   # только legacy в корне (отладка)
```

## Куда дальше

- [../docs/03_Деплой/deploy-dual-clients-pages.md](../docs/03_Деплой/deploy-dual-clients-pages.md)
- [../frontend/README.md](../frontend/README.md) — desktop React
- [../scripts/README.md](../scripts/README.md)

## Осторожно

- **`config.js`** виден в браузере — не кладите секреты.
- На Pages не попадают `server.js`, `external/`, `.env`.
- UI: без offset-теней «ушами» — [.cursor/rules/no-hard-offset-shadows.mdc](../.cursor/rules/no-hard-offset-shadows.mdc).

## Связанные документы

- [deploy-gh-pages.md](../docs/03_Деплой/deploy-gh-pages.md)
- [../brandbook/README.md](../brandbook/README.md)
