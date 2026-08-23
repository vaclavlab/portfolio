import { Link } from 'react-router-dom'
import type { ProjectContent } from '../content/projects'
import { publicUrl } from '../lib/paths'
import { useTranslation } from '../i18n/context'

export function ProjectCard({ project }: { project: ProjectContent }) {
  const { t } = useTranslation()

  return (
    <Link to={`/work/${project.slug}`} className={`card card-${project.sphere}`}>
      <div className="card-media">
        <img src={publicUrl(project.hero)} alt="" />
      </div>
      <div className="card-body">
        <p className="eyebrow">
          {project.year}
        </p>
        <h3>{t('project-card.title', { title: project.title })}</h3>
      </div>
    </Link>
  )
}
