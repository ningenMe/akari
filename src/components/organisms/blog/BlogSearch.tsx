import React, { useState } from 'react'
import { BlogData } from 'repository/BlogData'
import { Box, Container, List } from '@mui/material'
import { BlogChip } from 'components/atoms/blog/BlogChip'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import { BlogPostsChart } from 'components/organisms/blog/BlogPostsChart'
import { BlogTypeFilter } from 'components/organisms/blog/BlogTypeFilter'

const useBool = (): [boolean, () => void] => {
  const [value, setValue] = useState(true);
  return [value, () => setValue(value => !value)];
}

interface BlogSearchProps {
  blogList: BlogData[]
}

export const BlogSearch = ({ blogList }: BlogSearchProps): JSX.Element => {
  const [isSizu, toggleSizu] = useBool()
  const [isZenn, toggleZenn] = useBool()
  const [isQiita, toggleQiita] = useBool()
  const [isHatena, toggleHatena] = useBool()
  const [isAmeba, toggleAmeba] = useBool()
  const [isOldDiary, toggleOldDiary] = useBool()

  if (blogList.length === 0) {
    return (
      <Container>
        <p>ブログデータの取得に失敗しました。しばらく時間をおいて再度アクセスしてください。</p>
      </Container>
    )
  }

  const filteredBlogList = blogList.filter((blog) => {
    if (isSizu && blog.blogType === 'SIZU') return true
    if (isZenn && blog.blogType === 'ZENN') return true
    if (isQiita && blog.blogType === 'QIITA') return true
    if (isHatena && blog.blogType === 'HATENA') return true
    if (isAmeba && blog.blogType === 'AMEBA') return true
    if (isOldDiary && blog.blogType === 'OLD_DIARY') return true
    return false
  })
  const blogCardList = filteredBlogList.map((blog, idx) => (
    <BlogChip blog={blog} key={idx}/>
  ));

  return (
    <Container>
      <BlogPostsChart blogList={filteredBlogList} />

      <BlogTypeFilter items={[
        { blogType: 'SIZU', label: 'SIZU', checked: isSizu, onToggle: toggleSizu },
        { blogType: 'ZENN', label: 'ZENN', checked: isZenn, onToggle: toggleZenn },
        { blogType: 'QIITA', label: 'QIITA', checked: isQiita, onToggle: toggleQiita },
        { blogType: 'HATENA', label: 'HATENA', checked: isHatena, onToggle: toggleHatena },
        { blogType: 'AMEBA', label: 'AMEBA', checked: isAmeba, onToggle: toggleAmeba },
        { blogType: 'OLD_DIARY', label: 'OLD_DIARY', checked: isOldDiary, onToggle: toggleOldDiary }
      ]} />

      <Box sx={{ mt: 3 }}>
        <CustomNormalCard>
          <List disablePadding>
            {blogCardList}
          </List>
        </CustomNormalCard>
      </Box>
    </Container>
  )
}
