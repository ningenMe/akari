import { CreationCategory } from 'interfaces/CreationCategory'

export interface Creation{
  readonly href:  string,
  readonly title: string,
  readonly body:  string,
  readonly isDone: boolean,
  readonly category: CreationCategory,
  readonly accentColor?: string
}
