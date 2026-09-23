import { HtmlHead } from 'components/organisms/HtmlHead'
import { ServiceHeader } from 'components/organisms/service/ServiceHeader'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { Privacy } from 'components/organisms/legal/Privacy'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Privacy' description='ningenMe が提供する Web サイト・Web サービス共通のプライバシーポリシーです。' />
      <ServiceHeader />
      <Privacy />
      <NingenmeNetFooter />
    </>
  )
}

export default Index
