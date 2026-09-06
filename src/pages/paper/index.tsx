import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { Paper } from 'components/organisms/paper/Paper'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='paper - ' />
      <NingenmeNetHeader />
      <Paper />
      <NingenmeNetFooter />
    </>
  )
}
export default Index
