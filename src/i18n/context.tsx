import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'ru' | 'en'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'portfolio-language'

function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored === 'ru' || stored === 'en') return stored
  const navLang = window.navigator.language?.split('-')[0]
  return navLang === 'en' ? 'en' : 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')
  const [translations, setTranslations] = useState<Record<string, any>>({})

  useEffect(() => {
    setLangState(detectLanguage())
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  useEffect(() => {
    let active = true
    import(`../locales/${lang}.json`)
      .then((mod) => {
        if (active) setTranslations(mod.default)
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [lang])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
  }, [])

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const keys = key.split('.')
      let value: any = translations
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          value = undefined
          break
        }
      }
      if (typeof value !== 'string') return key
      if (!params) return value
      return Object.entries(params).reduce((acc, [k, v]) => acc.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v)), value)
    },
    [translations],
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export function useTranslation() {
  const { lang, t, setLang } = useLanguage()
  return { lang, t, setLang }
}