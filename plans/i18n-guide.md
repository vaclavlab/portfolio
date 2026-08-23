# i18n Guide

This project uses a custom lightweight internationalization system based on React Context.

## Adding New Translations

### 1. Update JSON Files
Add the new string to both `src/locales/ru.json` and `src/locales/en.json`. Use a nested structure for organization.

Example:
```json
"home": {
  "welcome": "Welcome to my portfolio"
}
```

### 2. Use in Components
Import the `useTranslation` hook and use the `t` function with the key path.

```tsx
import { useTranslation } from '../i18n/context';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('home.welcome')}</h1>;
}
```

### 3. Dynamic Parameters
To pass dynamic values into a translation string, use curly braces in the JSON and pass an object as the second argument to `t()`.

JSON:
```json
"about": {
  "greeting": "Hello, my name is {name}"
}
```

TSX:
```tsx
{t('about.greeting', { name: 'Ivan' })}
```

## Translating Dynamic Content

Content files in `src/content/` are structured as records indexed by language:

```ts
export const site: Record<'ru' | 'en', Site> = {
  ru: { ... },
  en: { ... }
}
```

To access the correct version in a component:
```tsx
const { lang } = useTranslation();
const siteData = site[lang];
```

## Language Persistence
The selected language is automatically saved to `localStorage` under the key `portfolio-language`.