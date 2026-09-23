import { HtmlHead } from 'components/organisms/HtmlHead'
import { ServiceHeader } from 'components/organisms/service/ServiceHeader'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { Terms } from 'components/organisms/legal/Terms'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Terms' description='ningenMe が提供する Web サイト・Web サービス共通の利用規約です。' />
      <ServiceHeader />
      <Terms />
      <NingenmeNetFooter />
    </>
  )
}

export default Index
