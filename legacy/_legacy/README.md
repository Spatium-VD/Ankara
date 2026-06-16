# public/_legacy/ — архив vanilla-клиента

## Назначение

Исходный монолит **`app.js`** (~7 000 строк) до миграции на React. Сохранён для сравнения поведения и точечного переноса логики.

## Для кого

- Разработчик миграции — эталон `sectionNavigate`, GAS-вызовов, edge cases.
- **Не** для GitHub Pages и **не** для новых фич.

## Содержимое

| Файл | Зачем |
|------|--------|
| `app.js` | Legacy SPA: карта, стажировки, роли, promotion, users, … |

Локальный запуск legacy (если нужен): открыть `public/index.html` через `npm run dev` — скрипт подключается как `_legacy/app.js`.

## Куда дальше

- [../../frontend/README.md](../../frontend/README.md) — **прод-клиент**
- [../../docs/07_Плейбуки/react-migration-parity.md](../../docs/07_Плейбуки/react-migration-parity.md) — таблица паритета
- [../../docs/03_Деплой/deploy-gh-pages-react.md](../../docs/03_Деплой/deploy-gh-pages-react.md) — деплой React

## Осторожно

- **`npm run pages:push`** публикует **`frontend/dist/`**, не эту папку.
- Legacy vanilla push: **`npm run pages:push:legacy`** (только по явной необходимости).
- Не править `app.js` для прода — переносить изменения в `frontend/src/`.

## Связанные документы

- [prompt-playbook-react-migration.md](../../docs/07_Плейбуки/prompt-playbook-react-migration.md) — фаза R6
