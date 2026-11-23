import { UrlConst } from './Const'

export type SnsId =
  | 'github'
  | 'twitter'
  | 'bluesky'
  | 'devNull'
  | 'mixi2'
  | 'facebook'
  | 'instagram'
  | 'youtrust'
  | 'qiita'
  | 'zenn'
  | 'hatena'
  | 'ameba'
  | 'sizu'
  | 'atcoder'
  | 'codeforces'
  | 'yukicoder'
  | 'toki'
  | 'csacademy'

export type SnsAccount = {
  readonly href: string,
  readonly name: string,
  // 表示名（screen name）。未確認のものは省略
  readonly displayName?: string,
  // ハンドル名（アカウントIDでないものは省略）
  readonly handle?: string,
  // そのサービスでの用途
  readonly purpose?: string,
}

// SNSアカウントの情報を1か所に集める。並び順や表示の仕方はここでは決めない（各ページが決める）
export const SNS_ACCOUNTS: Readonly<Record<SnsId, SnsAccount>> = {
  github: { href: UrlConst.GITHUB, name: 'GitHub', displayName: 'taishi', handle: 'ningenMe', purpose: '開発' },
  twitter: { href: UrlConst.TWITTER, name: 'Twitter', displayName: 'taishi', handle: '@ningenMe', purpose: '発信' },
  bluesky: { href: UrlConst.BLUESKY, name: 'Bluesky', displayName: 'taishi', handle: '@ningenme.bsky.social', purpose: '日常' },
  devNull: { href: UrlConst.DEV_NULL, name: 'dev-null.sh', displayName: 'taishi', handle: '@ningenMe', purpose: '技術発信' },
  mixi2: { href: UrlConst.MIXI2, name: 'mixi2', displayName: 'taishi', handle: '@ningenMe', purpose: '日常' },
  facebook: { href: UrlConst.FACEBOOK, name: 'Facebook', displayName: 'taishi', handle: 'taishi.furuta.0511', purpose: '写真・日常' },
  instagram: { href: UrlConst.INSTAGRAM, name: 'Instagram', displayName: 'taishi', handle: 'taishi.furuta', purpose: '写真・日常' },
  youtrust: { href: UrlConst.YOUTRUST, name: 'YOUTRUST', displayName: 'taishi', purpose: '技術発信' },
  qiita: { href: UrlConst.QIITA, name: 'Qiita', handle: 'ningenMe' },
  zenn: { href: UrlConst.ZENN, name: 'Zenn', handle: 'ningenme' },
  hatena: { href: UrlConst.HATENA, name: 'はてなブログ', handle: 'ningenme.hatenablog.com' },
  ameba: { href: UrlConst.AMEBA, name: 'Ameba', handle: 'ningenme' },
  sizu: { href: UrlConst.SIZU, name: 'sizu', handle: 'ningenme' },
  atcoder: { href: UrlConst.ATCODER, name: 'AtCoder', handle: 'ningenMe', purpose: '競技プログラミング' },
  codeforces: { href: UrlConst.CODEFORCES, name: 'Codeforces', handle: 'ningenMe', purpose: '競技プログラミング' },
  yukicoder: { href: UrlConst.YUKICODER, name: 'yukicoder', handle: '4145', purpose: '競技プログラミング' },
  toki: { href: UrlConst.TOKI, name: 'TOKI', handle: 'ningenMe', purpose: '競技プログラミング' },
  csacademy: { href: UrlConst.CSACADEMY, name: 'CS Academy', handle: 'ningenMe', purpose: '競技プログラミング' },
}
