# public/data/ — статические JSON/CSV для fetch()

## Назначение

Копия рабочих данных карты для браузера: файлы отдаются как статика рядом с `index.html`. Обновляется командой **`npm run sync:data`** из каталога `data/`.

## Для кого

- Frontend (`app.js` — `fetch('data/...')`).
- Разработчик данных после правок в `data/`.

## Содержимое

| Файл / папка | Зачем |
|--------------|--------|
| `stores_final.csv` | Точки Ленты (копия из `data/stores_final.csv`) |
| `projects/` | JSON потребности по проектам (Лента, Ozon, …) |
| `vkusvill/` | Geocoded склады ВкусВилл для карты |

## Куда дальше

- [../../data/README.md](../../data/README.md) — исходники до sync.
- [../README.md](../README.md) — весь каталог `public/`.
- [../../scripts/README.md](../../scripts/README.md) — `sync-public-data.js`.
- [../../docs/02_Архитектура/gh-pages-gas-architecture.md](../../docs/02_Архитектура/gh-pages-gas-architecture.md) — зачем статика на Pages.

## Осторожно

- **Не править вручную** как источник правды — правки в `data/`, затем `npm run sync:data`.
- На GitHub Pages пути с учётом `BASE_PATH` в `config.js`.

## Связанные документы

- [maps-provider.md](../../docs/05_Данные_и_карты/maps-provider.md)
- [repo-navigation-standard.md](../../docs/repo-navigation-standard.md)
