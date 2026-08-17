import { BlogData } from 'repository/BlogData'
import { SubTitle } from 'components/atoms/Title'
import { PathConst } from 'constants/Const'
import { List } from '@mui/material'
import { BlogChip } from 'components/atoms/blog/BlogChip'

interface RecentBlogProps {
  blogList: BlogData[]
}

export const RecentBlog = ({ blogList }: RecentBlogProps): JSX.Element => {
  if (blogList.length === 0) {
    return (
      <>
        <SubTitle title={'recent blog'}></SubTitle>
        <p>ブログデータの取得に失敗しました。</p>
      </>
    )
  }

  const recentBlogList = blogList.slice(0, 5)
  const blogCardList = recentBlogList.map((blog, idx) => (
    <BlogChip blog={blog} key={idx}/>
  ));

  return (
    <>
      <SubTitle title={'recent blog'}></SubTitle>
        <List>
          {blogCardList}
        </List>
        {">"} <a href={PathConst.BLOG}> もっと見る </a>
    </>
  )
}
