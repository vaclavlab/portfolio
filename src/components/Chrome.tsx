import { NavLink } from 'react-router-dom'
import { spheres } from '../content/site'
import { useTranslation } from '../i18n/context'
import LanguageSwitcher from './LanguageSwitcher'

export function Header() {
  const { t, lang } = useTranslation()

  return (
    <header className="site-header">
      <NavLink to="/" className="brand">
        <span className="brand-name">{t('header.brand-name')}</span>
        <span className="brand-role">{t('header.brand-role')}</span>
      </NavLink>
      <nav className="nav" aria-label="Основное">
        <LanguageSwitcher />
        <NavLink to={spheres[lang].industrial.path}>
          {t('header.nav-industrial')}
        </NavLink>
        <NavLink to={spheres[lang].game.path}>
          {t('header.nav-game')}
        </NavLink>
        <NavLink to="/about">
          {t('header.nav-about')}
        </NavLink>
        <NavLink to="/contact">
          {t('header.nav-contact')}
        </NavLink>
      </nav>
    </header>
  )
}

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <p>
        {t('footer.name')}
      </p>
    </footer>
  )
}
