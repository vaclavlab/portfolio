import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../i18n/context'

const languages = [
  { code: 'ru', label: 'Русский', flag: '/assets/flags/ru.png' },
  { code: 'en', label: 'English', flag: '/assets/flags/en.png' },
] as const

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang = languages.find((l) => l.code === lang) || languages[0]

  return (
    <div className="lang-switcher" ref={dropdownRef}>
      <button 
        className="lang-switcher-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <img src={currentLang.flag} className="lang-flag" alt={currentLang.code} />
        <span className="lang-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <ul className="lang-dropdown">
          {languages.map((l) => (
            <li 
              key={l.code} 
              className={`lang-option ${lang === l.code ? 'active' : ''}`}
              onClick={() => {
                setLang(l.code)
                setIsOpen(false)
              }}
            >
              <img src={l.flag} className="lang-flag" alt={l.code} />
              <span className="lang-label">{l.label.toUpperCase()}</span>
              {lang === l.code && <span className="lang-check">✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher