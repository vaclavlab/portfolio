# Internationalization (i18n) Architecture Plan

## Overview
This document outlines the approach for implementing language switching between English and Russian in the portfolio website.

## Translation Files Structure
Create JSON files in `src/locales/`:
- `en.json` - English translations
- `ru.json` - Russian translations (existing content)

## Implementation Approach
1. **Language Context**: Create a React context to manage current language state
2. **Translation Hook**: Custom `useTranslation` hook for accessing translated strings
3. **Language Persistence**: Store selected language in `localStorage`
4. **Language Switcher**: UI component in Header for toggling languages
5. **Content Translation**: Handle both static UI strings and dynamic content (site.ts, projects.ts)

## Translation Files Content

### English Translations (en.json)
```json
{
  "header": {
    "brand-name": "Name Surname",
    "brand-role": "Industrial design and 3D for games",
    "nav-industrial": "Industrial",
    "nav-game": "Game art",
    "nav-about": "About",
    "nav-contact": "Contact"
  },
  "home": {
    "eyebrow": "3D artist · portfolio",
    "lead": "Two separate showcases: product and production — separate, game assets — separate. This makes it easier for the client to understand which role they are viewing works in.",
    "section-head-featured": "Featured",
    "section-head-featured-description": "Placeholders. Replace with renders in public/work and text in src/content.",
    "back-row-contact": "Write"
  },
  "about": {
    "eyebrow": "About",
    "title": "Who's behind the works",
    "lead-placeholder": "{name}. Biography placeholder: short about your path, how you work with briefs and what you don't take.",
    "section-1": "Industrial and game art live on separate pages. Vibe and crypto spheres will appear in Labs when there are cases.",
    "section-2": "Stack",
    "tools-industrial": "Industrial: {tools}",
    "tools-game": "Game: {tools}",
    "location": "Location: {location}. Languages: RU / EN (EN pages — next step)."
  },
  "contact": {
    "eyebrow": "Contact",
    "lead": "No server needed: email, Telegram, ArtStation.",
    "mailto": "mailto",
    "telegram": "Telegram",
    "artstation": "ArtStation",
    "section-2": "What to write in the message",
    "item-1": "Sphere: industrial or game art",
    "item-2": "Timeline, scope, references",
    "item-3": "Engine / production, if known"
  },
  "not-found": {
    "title": "404",
    "description": "Page not found.",
    "home": "Home"
  },
  "footer": {
    "name": "{name} · portfolio · {year}",
    "description": "Static site. Content in repository."
  },
  "project-card": {
    "eyebrow": "{sphere} · {year}",
    "title": "{title}"
  },
  "sphere-page": {
    "eyebrow": "{label}",
    "title": "{title}",
    "audience": "For whom: {audience}",
    "back": "{other} →"
  },
  "work-page": {
    "eyebrow": "{sphere} · {year}",
    "title": "{title}",
    "role": "Role: {role}",
    "context": "Context: {context}",
    "video": "Video / showreel",
    "section-task": "Task",
    "section-solution": "Solution",
    "section-result": "Result",
    "tool-list": "Tools",
    "gallery": "Gallery",
    "nav-prev": "← {title}",
    "nav-next": "{title} →"
  }
}
```

### Russian Translations (ru.json)
Will contain the existing Russian content from the codebase.

## Component Integration Plan
1. **Chrome.tsx** - Header and Footer components
2. **HomePage.tsx** - Hero section, doors, featured projects, split note
3. **AboutPage.tsx** - About section with biography and stack
4. **ContactPage.tsx** - Contact information and form hints
5. **SpherePage.tsx** - Sphere hero, project list, navigation
6. **WorkPage.tsx** - Project details, process, gallery, navigation
7. **ProjectCard.tsx** - Project card display
8. **NotFoundPage.tsx** - 404 page

## Content Translation Strategy
For `src/content/site.ts` and `src/content/projects.ts`:
- Option 1: Create parallel English versions of these files
- Option 2: Embed translations within the JSON files and reference by keys
- Option 3: Keep content in TypeScript files but create translation wrappers

Recommended approach: Create English versions of content files (`site.en.ts`, `projects.en.ts`) and import based on language.

## Language Persistence
- Store selected language in `localStorage` under key `portfolio-language`
- Default to browser language or Russian if not set
- Update URL or use query parameter for language? (Optional - can keep clean URLs)

## Implementation Steps
1. Create translation JSON files
2. Implement LanguageContext and useTranslation hook
3. Create LanguageSwitcher component
4. Update Header to include language switcher
5. Integrate translations into all components
6. Handle content file translations
7. Add language persistence
8. Test across all pages
9. Update documentation

## Dependencies
No additional dependencies required - will use React Context API.

## File Structure After Implementation
```
src/
├── locales/
│   ├── en.json
│   └── ru.json
├── context/
│   └── LanguageContext.tsx
├── components/
│   └── LanguageSwitcher.tsx
├── content/
│   ├── site.ts (Russian)
│   ├── site.en.ts (English)
│   ├── projects.ts (Russian)
│   └── projects.en.ts (English)
└── (other files remain unchanged)