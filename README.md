# Путь компании к AI-Native

Интерактивная версия книги coMind о переходе компании к AI-Native операционной модели.

Публичный сайт: https://book.my.comind.space/

Резервная публикация через GitHub Pages: https://comind-space.github.io/ai-native-book/

## Локальный запуск

```bash
npm install
npm run start
```

## Проверка сборки

```bash
npm run build
```

## Как устроен репозиторий

- `docs/` — исходные страницы книги в MDX.
- `sidebars.ts` — структура левого меню.
- `src/css/custom.css` — визуальный стиль сайта.
- `.github/workflows/build.yml` — проверка сборки на pull request.

Правки книги лучше вносить через отдельную ветку и pull request.
