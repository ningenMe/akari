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
  github: { href: UrlConst.GITHUB, name: 'GitHub', displayName: 'taishi', handle: '@ningenMe', purpose: '開発' },
  twitter: { href: UrlConst.TWITTER, name: 'Twitter', displayName: 'taishi', handle: '@ningenMe', purpose: '発信' },
  bluesky: { href: UrlConst.BLUESKY, name: 'Bluesky', displayName: 'taishi', handle: '@ningenme.bsky.social', purpose: '日常' },
  devNull: { href: UrlConst.DEV_NULL, name: 'dev-null.sh', displayName: 'taishi', handle: '@ningenMe', purpose: '技術発信' },
  mixi2: { href: UrlConst.MIXI2, name: 'mixi2', displayName: 'taishi', handle: '@ningenMe', purpose: '日常' },
  facebook: { href: UrlConst.FACEBOOK, name: 'Facebook', displayName: 'taishi', handle: 'taishi.furuta.0511', purpose: '知人との近況' },
  instagram: { href: UrlConst.INSTAGRAM, name: 'Instagram', displayName: 'taishi', handle: '@taishi.furuta', purpose: '写真・日常' },
  youtrust: { href: UrlConst.YOUTRUST, name: 'YOUTRUST', displayName: 'taishi', purpose: '発信' },
}
