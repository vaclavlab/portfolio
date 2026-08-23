import { Link, useParams } from 'react-router-dom'
import { spheres } from '../content/site'
import { publicUrl } from '../lib/paths'
import { getProject, neighbors } from '../lib/projects'
import { useTranslation } from '../i18n/context'

export function WorkPage() {
  const { t, lang } = useTranslation()
  const { slug } = useParams()
  const project = slug ? getProject(slug, lang) : undefined

  if (!project) {
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

  const sphere =
    project.sphere === 'industrial' || project.sphere === 'game' ? spheres[lang][project.sphere] : null
  const { prev, next } = neighbors(project, lang)

  return (
    <article className={`case case-${project.sphere}`}>
      <p className="eyebrow">
        {sphere ? (
          <Link to={sphere.path}>
            {t('spheres.' + project.sphere + '.label')}
          </Link>
        ) : project.sphere} · {project.year}
      </p>
      <h1>{project.title}</h1>
      <p className="lead">{project.summary}</p>
      <p className="muted">
        {project.role} · {project.context}
      </p>

      <div className="hero-frame">
        <img src={publicUrl(project.hero)} alt="" />
      </div>

      {project.videoUrl ? (
        <p>
          <a href={project.videoUrl} target="_blank" rel="noreferrer">
            {t('work-page.video')}
          </a>
        </p>
      ) : null}

      <div className="process">
        <div>
          <h2>{t('work-page.section-task')}</h2>
          <p>{project.problem}</p>
        </div>
        <div>
          <h2>{t('work-page.section-solution')}</h2>
          <p>{project.solution}</p>
        </div>
        <div>
          <h2>{t('work-page.section-result')}</h2>
          <p>{project.result}</p>
        </div>
      </div>

      <ul className="tool-list">
        {project.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>

      <div className="gallery">
        {project.gallery.map((src) => {
          const isVideo = src.endsWith('.mp4') || src.endsWith('.webm')
          return isVideo ? (
            <video key={src} src={publicUrl(src)} controls loop muted playsInline />
          ) : (
            <img key={src} src={publicUrl(src)} alt="" />
          )
        })}
      </div>

      <nav className="case-nav" aria-label="Соседние работы">
        {prev ? <Link to={`/work/${prev.slug}`}>{t('work-page.nav-prev', { title: prev.title })}</Link> : <span />}
        {next ? <Link to={`/work/${next.slug}`}>{t('work-page.nav-next', { title: next.title })}</Link> : <span />}
      </nav>
    </article>
  )
}
