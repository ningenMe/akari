import { GetServerSideProps } from 'next'
import { PathConst, UrlConst } from 'constants/Const'
import { getOldDiarySlugs } from 'repository/OldDiaryData'

const STATIC_PATHS: ReadonlyArray<string> = [
  PathConst.HOME,
  PathConst.TASK,
  PathConst.PAPER,
  PathConst.BLOG,
  PathConst.SERVICE,
  PathConst.OLD_DIARY,
  PathConst.ILLUSTRATION
]

const buildSitemap = (paths: ReadonlyArray<string>): string => {
  const urls = paths
    .map((path) => `  <url><loc>${UrlConst.ORIGIN}${path}</loc></url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

// next/head を経由せずres.writeで直接XMLを返すため、コンポーネント自体は使われない
const SiteMap = (): null => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const oldDiaryPaths = getOldDiarySlugs().map((slug) => `${PathConst.OLD_DIARY}/${slug}`)
  const sitemap = buildSitemap([...STATIC_PATHS, ...oldDiaryPaths])

  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default SiteMap
