import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { DiaryList } from 'components/organisms/diary/DiaryList'
import { GetStaticProps, NextPage } from 'next'
import { DiaryPost } from 'interfaces/DiaryPost'
import { getDiaryList } from 'repository/DiaryData'

interface Props {
  diaryList: DiaryPost[]
}

export const Index: NextPage<Props> = ({ diaryList }) => {
  return (
    <>
      <HtmlHead title='diaries - ' />
      <NingenmeNetHeader />
      <DiaryList diaryList={diaryList} />
      <NingenmeNetFooter />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { diaryList: getDiaryList() as DiaryPost[] } }
}

export default Index
