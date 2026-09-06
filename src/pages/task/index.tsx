import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { Task } from 'components/organisms/task/Task'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Task' description='ningenMeが作った競技プログラミングの作問リスト。' />
      <NingenmeNetHeader />
      <Task />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
