import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { Paper } from 'components/organisms/paper/Paper'
import { NextPage } from 'next'
import { PathConst } from 'constants/Const'
import { getCreationBody } from 'constants/creationList'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Paper' description={getCreationBody(PathConst.PAPER)} />
      <NingenmeNetHeader />
      <Paper />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
