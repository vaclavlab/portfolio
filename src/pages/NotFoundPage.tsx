import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/context'

export function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <section>
      <h1>{t('not-found.title')}</h1>
      <p className="muted">{t('not-found.description')}</p>
      <p>
        <Link to="/">{t('not-found.home')}</Link>
      </p>
    </section>
  )
}
