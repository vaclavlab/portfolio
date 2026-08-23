import { site } from '../content/site'
import { useTranslation } from '../i18n/context'

export function ContactPage() {
  const { t, lang } = useTranslation()

  return (
    <section className="prose">
      <p className="eyebrow">{t('contact.eyebrow')}</p>
      <h1>{t('contact.lead')}</h1>
      <ul className="contact-list">
        <li>
          <a href={`mailto:${site[lang].email}`}>{site[lang].email}</a>
        </li>
        <li>
          <a href={site[lang].telegram} target="_blank" rel="noreferrer">
            {t('contact.telegram')}
          </a>
        </li>
        <li>
          <a href={site[lang].artstation} target="_blank" rel="noreferrer">
            {t('contact.artstation')}
          </a>
        </li>
      </ul>
    </section>
  )
}
