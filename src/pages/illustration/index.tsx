import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { IllustrationGallery } from 'components/organisms/illustration/IllustrationGallery'
import { NextPage } from 'next'
import illustrationList from 'data/illustration.json'
import { Illustration } from 'interfaces/Illustration'
import { PathConst } from 'constants/Const'
import { getCreationBody } from 'constants/creationList'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Illustration' description={getCreationBody(PathConst.ILLUSTRATION)} />
      <NingenmeNetHeader />
      <IllustrationGallery illustrationList={illustrationList as ReadonlyArray<Illustration>} />
      <NingenmeNetFooter />
    </>
  )
}

export default Index
