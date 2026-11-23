import React, { useState } from 'react'
import { BlogData } from 'repository/BlogData'
import { Box, Container, List } from '@mui/material'
import { Title } from 'components/atoms/Title'
import { BlogChip } from 'components/atoms/blog/BlogChip'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import { BlogPostsChart } from 'components/organisms/blog/BlogPostsChart'
import { BlogTypeFilter } from 'components/organisms/blog/BlogTypeFilter'
import { BLOG_TYPE_DISPLAY_ORDER } from 'constants/BlogTheme'

interface BlogSearchProps {
  blogList: BlogData[]
}

export const BlogSearch = ({ blogList }: BlogSearchProps): JSX.Element => {
  // 各ブログ種別の表示/非表示。初期状態はすべて表示
  const [checked, setChecked] = useState<Record<string, boolean>>(
    () => Object.fromEntries(BLOG_TYPE_DISPLAY_ORDER.map((blogType) => [blogType, true]))
  )
  const toggle = (blogType: string): void => {
    setChecked((prev) => ({ ...prev, [blogType]: !prev[blogType] }))
  }

  if (blogList.length === 0) {
    return (
      <Container>
        <Title title='Blog' />
        <p>ブログデータの取得に失敗しました。しばらく時間をおいて再度アクセスしてください。</p>
      </Container>
    )
  }

  const filteredBlogList = blogList.filter((blog) => checked[blog.blogType] === true)
  const blogCardList = filteredBlogList.map((blog, idx) => (
    <BlogChip blog={blog} key={idx}/>
  ));

  return (
    <Container>
      <Title title='Blog' />
      <BlogPostsChart blogList={filteredBlogList} />

      <BlogTypeFilter items={BLOG_TYPE_DISPLAY_ORDER.map((blogType) => ({
        blogType,
        label: blogType,
        checked: checked[blogType],
        onToggle: () => toggle(blogType),
      }))} />

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
