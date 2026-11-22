import { HtmlHead } from 'components/organisms/HtmlHead'
import { ServiceHeader } from 'components/organisms/service/ServiceHeader'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { Links } from 'components/organisms/links/Links'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Links' description='ningenMe の SNS・関連アカウントへのリンク集です。' />
      <ServiceHeader />
      <Links />
      <NingenmeNetFooter />
    </>
  )
}

export default Index
