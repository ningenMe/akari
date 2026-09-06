export type IllustrationCategory = 'color' | 'mono'

export interface Illustration {
  readonly category: IllustrationCategory
  readonly file: string
  readonly width: number
  readonly height: number
}
