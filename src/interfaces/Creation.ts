import { CreationCategory } from 'interfaces/CreationCategory'

export interface Creation{
  readonly href:  string,
  readonly title: string,
  readonly body:  string,
  readonly isDone: boolean,
  readonly category: CreationCategory,
  readonly accentColor?: string
  // trueの場合、Privacy/Terms/Contactの「ningenMeが提供するWebサイト・Webサービス」一覧(ProvidedServices)にも掲載する
  readonly isProvidedService?: boolean
}
