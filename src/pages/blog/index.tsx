import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { GetStaticProps, NextPage } from 'next'
import { BlogSearch } from 'components/organisms/blog/BlogSearch'
import { BlogData } from 'repository/BlogData'
import { PathConst } from 'constants/Const'
import { getOldDiaryList } from 'repository/OldDiaryData'
import staticBlogList from 'data/blog.json'

interface Props {
  blogList: BlogData[]
}

export const Index: NextPage<Props> = ({ blogList }) => {
  return (
    <>
      <HtmlHead title='blog - ' />
      <NingenmeNetHeader />
      <BlogSearch blogList={blogList} />
      <NingenmeNetFooter />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const oldDiaryBlogList: BlogData[] = getOldDiaryList().map((oldDiary) => {
    return {
      url: `${PathConst.OLD_DIARY}/${oldDiary.slug}`,
      date: oldDiary.date,
      blogType: 'OLD_DIARY',
      blogTitle: oldDiary.title
    }
  })
  const blogList = [...staticBlogList, ...oldDiaryBlogList].sort((l, r) => r.date.localeCompare(l.date))
  return { props: { blogList } }
}

export default Index
