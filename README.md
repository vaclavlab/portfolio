# Портфолио 3D-художника

Статический сайт на Vite + React. Сервер не нужен. Подходит для GitHub Pages, позже тот же `dist` можно положить на свой домен.

## Локально

```bash
npm install
npm run dev
```

## Сборка как на Pages

```bash
# Windows PowerShell
$env:VITE_BASE="/portfolio/"; npm run build
npm run preview
```

Имя репозитория должно совпадать с `VITE_BASE` в `.github/workflows/deploy.yml` (сейчас `/portfolio/`). Для корня домена поставьте `VITE_BASE=/`.

## Контент

- Имя, почта, ссылки: `src/content/site.ts`
- Кейсы: `src/content/projects.ts`
- Картинки: `public/work/` (сейчас SVG-плейсхолдеры)

В настройках GitHub: Settings → Pages → Source: GitHub Actions.
