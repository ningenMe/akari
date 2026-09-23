import { HtmlHead } from 'components/organisms/HtmlHead'
import { ServiceHeader } from 'components/organisms/service/ServiceHeader'
import { ServiceFooter } from 'components/organisms/service/ServiceFooter'
import { Privacy } from 'components/organisms/legal/Privacy'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Privacy' description='ningenMe が提供する Web サイト・Web サービス共通のプライバシーポリシーです。' />
      <ServiceHeader />
      <Privacy />
      <ServiceFooter />
    </>
  )
}

export default Index
