import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { Task } from 'components/organisms/task/Task'
import { NextPage } from 'next'
import { PathConst } from 'constants/Const'
import { getCreationBody } from 'constants/creationList'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Task' description={getCreationBody(PathConst.TASK)} />
      <NingenmeNetHeader />
      <Task />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
