import { HtmlHead } from 'components/organisms/HtmlHead'
import { ServiceHeader } from 'components/organisms/service/ServiceHeader'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { Service } from 'components/organisms/service/Service'
import { NextPage } from 'next'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Service' />
      <ServiceHeader />
      <Service />
      <NingenmeNetFooter />
    </>
  )
}

export default Index
