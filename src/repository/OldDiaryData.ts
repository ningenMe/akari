import fs from 'fs'
import path from 'path'
import MarkdownIt from 'markdown-it'
import { OldDiaryPost, OldDiaryPostDetail } from 'interfaces/OldDiaryPost'

const OLD_DIARY_DIR = path.join(process.cwd(), 'public', 'markdown')
const md = new MarkdownIt({ html: true, linkify: true })

const readSlugs = (): string[] => {
  return fs.readdirSync(OLD_DIARY_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

const splitTitleAndBody = (content: string): { title: string, body: string } => {
  const lines = content.split('\n')
  const title = lines[0].replace(/^#\s*/, '').trim()
  const body = lines.slice(1).join('\n').trim()
  return { title, body }
}

const DESCRIPTION_LENGTH = 100

const buildDescription = (html: string): string => {
  const plainText = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
  if (plainText.length <= DESCRIPTION_LENGTH) return plainText
  return `${plainText.slice(0, DESCRIPTION_LENGTH)}…`
}

export const getOldDiarySlugs = (): string[] => readSlugs()

export const getOldDiaryList = (): ReadonlyArray<OldDiaryPost> => {
  return readSlugs().map((slug) => {
    const content = fs.readFileSync(path.join(OLD_DIARY_DIR, `${slug}.md`), 'utf-8')
    const { title } = splitTitleAndBody(content)
    return { slug, date: slug, title }
  }).sort((l, r) => r.date.localeCompare(l.date))
}

export const getOldDiaryDetail = (slug: string): OldDiaryPostDetail => {
  const content = fs.readFileSync(path.join(OLD_DIARY_DIR, `${slug}.md`), 'utf-8')
  const { title, body } = splitTitleAndBody(content)
  const html = md.render(body)
  return { slug, date: slug, title, html, description: buildDescription(html) }
}
