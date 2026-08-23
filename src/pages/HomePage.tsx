import { Link } from 'react-router-dom'
import { spheres } from '../content/site'
import { featuredProjects } from '../lib/projects'
import { ProjectCard } from '../components/ProjectCard'
import { useTranslation } from '../i18n/context'

export function HomePage() {
  const { t, lang } = useTranslation()
  const featured = featuredProjects(lang)

  return (
    <>
      <section className="hero">
        <p className="eyebrow">{t('home.eyebrow')}</p>
        <h1>
          VACLAVLAB
          <span className="hero-sub">Bridging Digital Art & Industrial Fabrication</span>
        </h1>
      </section>

      <section className="doors" aria-label="Сферы">
        <Link to={spheres[lang].industrial.path} className="door door-industrial">
          <p className="eyebrow">01</p>
          <h2>{spheres[lang].industrial.title}</h2>
          <p>{spheres[lang].industrial.tagline}</p>
        </Link>
        <Link to={spheres[lang].game.path} className="door door-game">
          <p className="eyebrow">02</p>
          <h2>{spheres[lang].game.title}</h2>
          <p>{spheres[lang].game.tagline}</p>
        </Link>
      </section>

      <section>
        <div className="section-head">
          <h2>{t('home.section-head-featured')}</h2>
          <p className="muted">{t('home.section-head-featured-description')}</p>
        </div>
        <div className="grid">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="split-note">
        <Link className="btn" to="/contact">
          {t('home.back-row-contact')}
        </Link>
      </section>
    </>
  )
}
