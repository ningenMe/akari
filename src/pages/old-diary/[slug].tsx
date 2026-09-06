import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { OldDiaryDetail } from 'components/organisms/old-diary/OldDiaryDetail'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { OldDiaryPostDetail } from 'interfaces/OldDiaryPost'
import { getOldDiaryDetail, getOldDiarySlugs } from 'repository/OldDiaryData'

interface Props {
  oldDiary: OldDiaryPostDetail
}

export const Page: NextPage<Props> = ({ oldDiary }) => {
  return (
    <>
      <HtmlHead title={`${oldDiary.title} - `} />
      <NingenmeNetHeader />
      <OldDiaryDetail oldDiary={oldDiary} />
      <NingenmeNetFooter />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getOldDiarySlugs().map((slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string
  return { props: { oldDiary: getOldDiaryDetail(slug) } }
}

export default Page
