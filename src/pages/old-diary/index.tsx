import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { OldDiaryList } from 'components/organisms/old-diary/OldDiaryList'
import { GetStaticProps, NextPage } from 'next'
import { OldDiaryPost } from 'interfaces/OldDiaryPost'
import { getOldDiaryList } from 'repository/OldDiaryData'

interface Props {
  oldDiaryList: OldDiaryPost[]
}

export const Index: NextPage<Props> = ({ oldDiaryList }) => {
  return (
    <>
      <HtmlHead title='Old Diary' description='ningenMeが昔つけていた日記のアーカイブ。' />
      <NingenmeNetHeader />
      <OldDiaryList oldDiaryList={oldDiaryList} />
      <NingenmeNetFooter />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { oldDiaryList: getOldDiaryList() as OldDiaryPost[] } }
}

export default Index
