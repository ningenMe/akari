import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { DiaryDetail } from 'components/organisms/diary/DiaryDetail'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { DiaryPostDetail } from 'interfaces/DiaryPost'
import { getDiaryDetail, getDiarySlugs } from 'repository/DiaryData'

interface Props {
  diary: DiaryPostDetail
}

export const Page: NextPage<Props> = ({ diary }) => {
  return (
    <>
      <HtmlHead title={`${diary.title} - `} />
      <NingenmeNetHeader />
      <DiaryDetail diary={diary} />
      <NingenmeNetFooter />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getDiarySlugs().map((slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string
  return { props: { diary: getDiaryDetail(slug) } }
}

export default Page
