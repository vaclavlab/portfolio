import { projects } from '../content/projects'
import type { ProjectContent } from '../content/projects'
import type { SphereId } from '../content/site'

export function publishedProjects(lang: 'ru' | 'en') {
  return projects[lang]
}

export function projectsBySphere(sphere: SphereId, lang: 'ru' | 'en') {
  return publishedProjects(lang).filter((p: ProjectContent) => p.sphere === sphere)
}

export function featuredProjects(lang: 'ru' | 'en') {
  return publishedProjects(lang).filter((p: ProjectContent) => p.featured)
}

export function getProject(slug: string, lang: 'ru' | 'en') {
  return publishedProjects(lang).find((p: ProjectContent) => p.slug === slug)
}

export function neighbors(project: ProjectContent, lang: 'ru' | 'en') {
  const list = projectsBySphere(project.sphere, lang)
  const i = list.findIndex((p) => p.slug === project.slug)
  return {
    prev: i > 0 ? list[i - 1] : undefined,
    next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined,
  }
}
