// ブログ(プラットフォーム)ごとのテーマカラー。積み上げグラフとフィルターの凡例で共有する。
// 紫基調のサイトに馴染むよう彩度を少し落としつつ、隣り合う色が区別できる色相に散らしている。

export const BLOG_TYPE_FALLBACK_COLOR = '#9d97ab'

export const BLOG_TYPE_COLORS: Record<string, string> = {
  AMEBA: '#2b2b30',
  HATENA: '#3b82f6',
  QIITA: '#55b947',
  SIZU: '#ee6f9b',
  ZENN: '#1fb6c9',
  OLD_DIARY: '#a3a3ad'
}

// 積み上げ順(下から上)。投稿数の多いものを下に置く。
export const BLOG_TYPE_STACK_ORDER: string[] = ['AMEBA', 'HATENA', 'QIITA', 'SIZU', 'ZENN', 'OLD_DIARY']

export const getBlogColor = (blogType: string): string => BLOG_TYPE_COLORS[blogType] ?? BLOG_TYPE_FALLBACK_COLOR
