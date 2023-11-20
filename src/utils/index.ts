export * from './check-email'
export * from './check-message'
export * from './check-name'
export * from './date'
export * from './tw'

export const unique = <T, Key extends keyof T>(array: Array<T> | T[], property?: Key): Array<T> => {
  if (!property) return Array.from(new Set([...array]))

  const set = new Set()
  return array.filter((o: T) => {
    return !set.has(o[property]) && set.add(o[property])
  })
}

export const kebabCase = (str?: string) =>
  str
    ?.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join('-')

export const getDomainFromUrl = (url?: string | null): string | null => {
  if (!url) return null
  const inx = url.lastIndexOf('/')
  const cleanUrl = url.substring(0, inx + 1)
  return cleanUrl
    .replace(/(^\w+:|^)\/\//, '')
    .replace(/\//g, '')
    .toLocaleLowerCase()
}

export const getBaseUrl = () => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  return isDevelopment ? 'http://localhost:5100' : 'https://meaganwaller.com'
}

export const isClient = typeof window !== 'undefined'
export const isServer = typeof window === 'undefined'
