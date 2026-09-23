import { HtmlHead } from 'components/organisms/HtmlHead'
import { ServiceHeader } from 'components/organisms/service/ServiceHeader'
import { ServiceFooter } from 'components/organisms/service/ServiceFooter'
import { Terms } from 'components/organisms/legal/Terms'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Terms' description='ningenMe が提供する Web サイト・Web サービス共通の利用規約です。' />
      <ServiceHeader />
      <Terms />
      <ServiceFooter />
    </>
  )
}

export default Index
