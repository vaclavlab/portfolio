# Portfolio 3D Artist Project

## Overview
A static portfolio website built with Vite + React for showcasing industrial design and game art projects. No server required, suitable for GitHub Pages deployment.

## Key Features
- Responsive layout with dark mode
- Project categorization by sphere (industrial design/game art)
- Interactive navigation with React Router
- Customizable hero sections for each project
- GitHub Actions deployment

## Technologies
- Vite (build tool)
- React (frontend framework)
- TypeScript (type safety)
- React Router (navigation)
- GitHub Pages (deployment)

## Setup Instructions
### Local Development
1. Clone repository
2. Run `npm install`
3. Start development server with `npm run dev`
4. Visit `http://localhost:5173`

### Deployment
1. Push changes to `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Custom domain setup requires updating `VITE_BASE` in `.github/workflows/deploy.yml`

## Project Structure
- `src/content/site.ts`: Site metadata (name, role, contact)
- `src/content/projects.ts`: Project database
- `public/work/`: Project visual assets (SVG placeholders)
- `vite.config.ts`: Build configuration with GitHub Pages fallback

## Customization Notes
- Replace SVG placeholders in `public/work/` with actual project visuals
- Update `VITE_BASE` in deployment config for custom domains
- Modify project cards in `src/components/ProjectCard.tsx` for new projects