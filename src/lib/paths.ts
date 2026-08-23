export function publicUrl(path: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}

export function routerBasename() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return base === '' ? '/' : base
}
