import { Creation } from 'interfaces/Creation'
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
  // {
  //   href: PathConst.CONTRIBUTION,
  //   title: 'contribution',
  //   body: '日々のgithubのcontribution。',
  //   isDone: true,
  //   category: 'software',
  // },
  {
    href: UrlConst.WORK,
    title: 'work',
    body: '描いた漫画一覧。大学時代に漫研で活動していました。',
    isDone: true,
    category: 'writing',
  },
  {
    href: UrlConst.ROOM,
    title: 'room',
    body: 'All you do is ROM in ROOM.',
    isDone: true,
    category: 'service',
    accentColor: '#111111',
  },
  {
    href: PathConst.BLOG,
    title: 'blog',
    body: '日々',
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
  },
  // {
  //   href: PathConst.DIARIES,
  //   title: '今日のITドカタ',
  //   body: '殴り書きに近めのブログ。主に業務のwebの話。',
  // },
  // {
  //   href: PathConst.SYSTEMS,
  //   title: 'システム構成図',
  //   body: '趣味開発システム構成図',
  // },
] as const

export const SERVICE_CREATION_LIST: ReadonlyArray<Creation> = CREATION_LIST.filter(
  (creation) => creation.category === 'service'
)
