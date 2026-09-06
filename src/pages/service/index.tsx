import { HtmlHead } from 'components/organisms/HtmlHead'
import { ServiceHeader } from 'components/organisms/service/ServiceHeader'
import { ServiceFooter } from 'components/organisms/service/ServiceFooter'
import { Service } from 'components/organisms/service/Service'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Service' description='ningenMeが開発したサービス一覧。' />
      <ServiceHeader />
      <Service />
      <ServiceFooter />
    </>
  )
}

export default Index
