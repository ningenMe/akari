import { HtmlHead } from 'components/organisms/HtmlHead'
import { ServiceHeader } from 'components/organisms/service/ServiceHeader'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { Contact } from 'components/organisms/contact/Contact'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Contact' description='ningenMe が提供する Web サイト・Web サービス共通のお問い合わせ窓口です。' />
      <ServiceHeader />
      <Contact />
      <NingenmeNetFooter />
    </>
  )
}

export default Index
