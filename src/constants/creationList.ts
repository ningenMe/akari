import { Creation } from 'interfaces/Creation'
import { Link } from 'interfaces/Link'
import { PathConst, UrlConst } from './Const'

export const CREATION_LIST: ReadonlyArray<Creation> = [
  {
    href: PathConst.TASK,
    title: 'compro-task',
    body: '競技プログラミングの作問リスト。',
    isDone: true,
    category: 'writing',
  },
  {
    href: UrlConst.COMPRO_LIBRARY,
    title: 'compro-library',
    body: '競技プログラミングのライブラリ。',
    isDone: true,
    category: 'software',
  },
  {
    href: UrlConst.WORK,
    title: 'work',
    body: '描いた漫画一覧。',
    isDone: true,
    category: 'writing',
  },
  {
    href: PathConst.ILLUSTRATION,
    title: 'illustration',
    body: '描いたイラスト一覧。',
    isDone: true,
    category: 'writing',
  },
  {
    href: UrlConst.ROOM,
    title: 'room',
    body: 'All you do is ROAM in ROOM.',
    isDone: true,
    category: 'service',
    accentColor: '#111111',
    isProvidedService: true,
  },
  {
    href: PathConst.BLOG,
    title: 'blog',
    body: '日々。',
    isDone: true,
    category: 'writing',
  },
  {
    href: PathConst.PAPER,
    title: 'paper',
    body: '書いた論文一覧。',
    isDone: true,
    category: 'writing',
  },
  {
    href: UrlConst.LAST1TILE,
    title: 'last1tile',
    body: 'Solve the maze. Unravel the last tile.',
    isDone: true,
    category: 'service',
    accentColor: '#2b4a8a',
    isProvidedService: true,
  },
  {
    href: UrlConst.MEENGINEERING_NOTE,
    title: 'meengineering-note',
    body: '設計の選択肢を比較・記録するノート。',
    isDone: true,
    category: 'writing',
    isProvidedService: true,
  },
  {
    href: UrlConst.GEEQ,
    title: 'geeq',
    body: '技術知識を楽しく確認・学習できるWebサービス。',
    isDone: true,
    category: 'service',
    accentColor: '#f97316',
    isProvidedService: true,
  },
] as const

// 自サイト内にページを持つ作品のmeta descriptionを、creationカードの文言と一致させるために使う
export const getCreationBody = (href: string): string | undefined =>
  CREATION_LIST.find((creation) => creation.href === href)?.body

export const SERVICE_CREATION_LIST: ReadonlyArray<Creation> = CREATION_LIST.filter(
  (creation) => creation.category === 'service'
)

// Privacy/Terms/Contactの「ningenMeが提供するWebサイト・Webサービス」一覧(ProvidedServices)用。
// サービス名・URLの二重管理を避けるため、CREATION_LISTから導出する
export const PROVIDED_SERVICE_LIST: ReadonlyArray<Link> = CREATION_LIST
  .filter((creation) => creation.isProvidedService)
  .map((creation) => ({ name: creation.title, href: creation.href }))
