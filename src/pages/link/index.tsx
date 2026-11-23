import { HtmlHead } from 'components/organisms/HtmlHead'
import { ServiceHeader } from 'components/organisms/service/ServiceHeader'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { Link } from 'components/organisms/link/Link'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Link' description='ningenMe の SNS・関連アカウントへのリンク集です。' />
      <ServiceHeader />
      <Link />
      <NingenmeNetFooter />
    </>
  )
}

export default Index
