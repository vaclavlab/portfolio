import { Link } from 'react-router-dom'
import { spheres } from '../content/site'
import { projectsBySphere } from '../lib/projects'
import { ProjectCard } from '../components/ProjectCard'
import { useTranslation } from '../i18n/context'

type SphereKey = 'industrial' | 'game'

export function SpherePage({ sphere }: { sphere: SphereKey }) {
  const { t, lang } = useTranslation()
  const meta = spheres[lang][sphere]
  const list = projectsBySphere(sphere, lang)

  return (
    <>
      <section className={`sphere-hero sphere-${sphere}`}>
        <p className="eyebrow">{t('sphere-page.eyebrow', { label: meta.label })}</p>
        <h1>{t('sphere-page.title', { title: meta.title })}</h1>
        <p className="lead">{meta.description}</p>
        <p className="muted">{t('sphere-page.audience', { audience: meta.audience })}</p>
        <ul className="tool-list">
          {meta.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <section>
        <div className="grid">
          {list.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <p className="back-row">
        <Link to={sphere === 'industrial' ? spheres[lang].game.path : spheres[lang].industrial.path}>
          {t('sphere-page.back', { other: sphere === 'industrial' ? spheres[lang].game.title : spheres[lang].industrial.title })}
        </Link>
      </p>
    </>
  )
}
