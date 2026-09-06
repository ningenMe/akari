export interface DiaryPost {
  readonly slug: string
  readonly date: string
  readonly title: string
}

export interface DiaryPostDetail extends DiaryPost {
  readonly html: string
}
