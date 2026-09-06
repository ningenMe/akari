import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { IllustrationGallery } from 'components/organisms/illustration/IllustrationGallery'
import { NextPage } from 'next'
import illustrationList from 'data/illustration.json'
import { Illustration } from 'interfaces/Illustration'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='Illustration' description='ningenMeが過去に描いたイラストのアーカイブ。' />
      <NingenmeNetHeader />
      <IllustrationGallery illustrationList={illustrationList as ReadonlyArray<Illustration>} />
      <NingenmeNetFooter />
    </>
  )
}

export default Index
