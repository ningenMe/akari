export interface OldDiaryPost {
  readonly slug: string
  readonly date: string
  readonly title: string
}

export interface OldDiaryPostDetail extends OldDiaryPost {
  readonly html: string
  readonly description: string
}
