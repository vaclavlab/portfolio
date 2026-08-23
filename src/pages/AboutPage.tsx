import { site, spheres } from '../content/site'
import { useTranslation } from '../i18n/context'

export function AboutPage() {
  const { t, lang } = useTranslation()

  return (
    <section className="prose">
      <p className="eyebrow">{t('about.eyebrow')}</p>
      <h1>{t('about.title')}</h1>
      <section style={{ marginTop: '2rem' }}>
        <h2>{t('about.bio.greeting-name')}</h2>
        <p className="lead">{t('about.bio.greeting-role')}</p>
        <p>{t('about.bio.intro')}</p>
        <ul>
          <li>
            <strong>{t('about.bio.focus-label')}</strong> {t('about.bio.focus-text')}
          </li>
          <li>
            <strong>{t('about.bio.impact-label')}</strong> {t('about.bio.impact-text')}
          </li>
        </ul>
        <h3 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>{t('about.bio.think-title')}</h3>
        <p>{t('about.bio.think-1')}</p>
        <p>{t('about.bio.think-2')}</p>
        <p className="lead" style={{ marginTop: '2rem' }}>{t('about.bio.closing')}</p>
      </section>

      <h2>{t('about.section-2')}</h2>
      <ul>
        <li>{t('about.tools-industrial', { tools: spheres[lang].industrial.tools.join(', ') })}</li>
        <li>{t('about.tools-game', { tools: spheres[lang].game.tools.join(', ') })}</li>
      </ul>
      <p className="muted">{t('about.location', { location: site[lang].location })}</p>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{t('about.experience-title')}</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', margin: '0' }}>{t('about.exp-rzd-title')}</h3>
            <p className="muted" style={{ fontSize: '0.9rem', margin: '0.2rem 0' }}>
              {t('about.exp-rzd-company')} | {t('about.exp-rzd-period')}
            </p>
            <p>{t('about.exp-rzd-desc')}</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.1rem', margin: '0' }}>{t('about.exp-led-title')}</h3>
            <p className="muted" style={{ fontSize: '0.9rem', margin: '0.2rem 0' }}>
              {t('about.exp-led-company')} | {t('about.exp-led-period')}
            </p>
            <p>{t('about.exp-led-desc')}</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.1rem', margin: '0' }}>{t('about.exp-urfu-title')}</h3>
            <p className="muted" style={{ fontSize: '0.9rem', margin: '0.2rem 0' }}>
              {t('about.exp-urfu-company')} | {t('about.exp-urfu-period')}
            </p>
            <p>{t('about.exp-urfu-desc')}</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.1rem', margin: '0' }}>{t('about.exp-upwork-title')}</h3>
            <p className="muted" style={{ fontSize: '0.9rem', margin: '0.2rem 0' }}>
              {t('about.exp-upwork-company')} | {t('about.exp-upwork-period')}
            </p>
            <p>{t('about.exp-upwork-desc')}</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{t('about.education-title')}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', margin: '0' }}>{t('about.edu-urfu-degree')}</h3>
            <p className="muted" style={{ fontSize: '0.9rem', margin: '0.2rem 0' }}>
              {t('about.edu-urfu-company')} | {t('about.edu-urfu-period')}
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}
