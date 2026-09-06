import { BlogData } from 'repository/BlogData'
import { SubTitle } from 'components/atoms/Title'
import { PathConst } from 'constants/Const'
import { List } from '@mui/material'
import { BlogChip } from 'components/atoms/blog/BlogChip'
import { CustomNormalCard } from '../CustomCard'
import styles from './RecentBlog.module.scss'

interface RecentBlogProps {
  blogList: BlogData[]
}

export const RecentBlog = ({ blogList }: RecentBlogProps): JSX.Element => {
  if (blogList.length === 0) {
    return (
      <div>
        <SubTitle title={'Recent Blog'}></SubTitle>
        <p>ブログデータの取得に失敗しました。</p>
      </div>
    )
  }

  const recentBlogList = blogList.slice(0, 5)
  const blogCardList = recentBlogList.map((blog, idx) => (
    <BlogChip blog={blog} key={idx}/>
  ));

  return (
    <div>
      <SubTitle title={'Recent Blog'}></SubTitle>
      <CustomNormalCard>
        <List disablePadding>
          {blogCardList}
        </List>
      </CustomNormalCard>
      <a href={PathConst.BLOG} className={styles.more}>もっと見る →</a>
    </div>
  )
}
