export type SphereId = 'industrial' | 'game' | 'vibe' | 'crypto'

export interface Sphere {
  id: SphereId
  path: string
  label: string
  title: string
  tagline: string
  description: string
  audience: string
  tools: string[]
}

export interface Site {
  name: string
  role: string
  email: string
  telegram: string
  artstation: string
  location: string
}

export interface Project {
  slug: string
  title: string
  year: number
  sphere: SphereId
  role: string
  context: string
  summary: string
  problem: string
  solution: string
  result: string
  tools: string[]
  tags: string[]
  hero: string
  gallery: string[]
  featured: boolean
  videoUrl?: string
}

export const site: Record<'ru' | 'en', Site> = {
  ru: {
    name: 'Имя Фамилия',
    role: 'Промышленный дизайн и 3D для игр',
    email: 'vaclav.design@gmail.com',
    telegram: 'https://t.me/MrFUZE',
    artstation: 'https://www.linkedin.com/in/viacheslav-popkov-463075350/',
    location: 'Россия',
  },
  en: {
    name: 'Name Surname',
    role: 'Industrial design and 3D for games',
    email: 'vaclav.design@gmail.com',
    telegram: 'https://t.me/MrFUZE',
    artstation: 'https://www.linkedin.com/in/viacheslav-popkov-463075350/',
    location: 'Russia',
  },
}

export const spheres: Record<'ru' | 'en', Record<'industrial' | 'game', Sphere>> = {
  ru: {
    industrial: {
      id: 'industrial',
      path: '/industrial-design',
      label: 'Industrial design',
      title: 'Industrial Design',
      tagline: 'Продукт, форма, производство',
      description:
        'Форма, эргономика и материал: от поиска силуэта до визуализации, которую можно показать инженеру и заказчику.',
      audience: 'Продуктовые команды, стартапы железа, дизайн-бюро',
      tools: ['Blender', 'CAD', 'KeyShot', 'Substance 3D', 'ZBrush', 'ShapeLab'],
    },
    game: {
      id: 'game',
      path: '/game-art',
      label: 'Game art',
      title: 'Game Art',
      tagline: 'Ассеты и окружение под пайплайн',
      description:
        'Hard-surface, пропсы и окружение с учётом полигонажа, UV, LOD и того, как ассет живёт в движке.',
      audience: 'Игровые студии, инди, аутсорс-пайплайны',
      tools: ['Blender', 'Marmoset Toolbag', 'Substance 3D Painter', 'ShapeLab', 'ZBrush', 'Unity', 'Unreal Engine', 'Photoshop'],
    },
  },
  en: {
    industrial: {
      id: 'industrial',
      path: '/industrial-design',
      label: 'Industrial design',
      title: 'Industrial Design',
      tagline: 'Product, form, production',
      description:
        'Form, ergonomics and material: from silhouette search to visualization that can be shown to an engineer and a client.',
      audience: 'Product teams, hardware startups, design bureaus',
      tools: ['Blender', 'CAD', 'KeyShot', 'Substance 3D', 'ZBrush', 'ShapeLab'],
    },
    game: {
      id: 'game',
      path: '/game-art',
      label: 'Game art',
      title: 'Game Art',
      tagline: 'Assets and environment for the pipeline',
      description:
        'Hard-surface, props and environment considering polycount, UV, LOD and how the asset lives in the engine.',
      audience: 'Game studios, indies, outsource pipelines',
      tools: ['Blender', 'Marmoset Toolbag', 'Substance 3D Painter', 'ShapeLab', 'ZBrush', 'Unity', 'Unreal Engine', 'Photoshop'],
    },
  },
}
