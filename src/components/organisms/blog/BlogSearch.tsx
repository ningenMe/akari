import React, { useState } from 'react'
import { BlogData } from 'repository/BlogData'
import { Box, Checkbox, Container, List } from '@mui/material'
import { BlogChip, BlogNingenmeUrlChip } from 'components/atoms/blog/BlogChip'

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

  if (blogList.length === 0) {
    return (
      <Container>
        <p>ブログデータの取得に失敗しました。しばらく時間をおいて再度アクセスしてください。</p>
      </Container>
    )
  }

  const blogCardList = blogList.filter((blog) => {
    if (isSizu && blog.blogType === 'SIZU') return true
    if (isZenn && blog.blogType === 'ZENN') return true
    if (isQiita && blog.blogType === 'QIITA') return true
    if (isHatena && blog.blogType === 'HATENA') return true
    if (isAmeba && blog.blogType === 'AMEBA') return true
    return false
  }).map((blog, idx) => (
    <BlogChip blog={blog} key={idx}/>
  ));

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox checked={isSizu} onChange={toggleSizu} /> <BlogNingenmeUrlChip blogType={'SIZU'} clickable={false} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox checked={isZenn} onChange={toggleZenn} /> <BlogNingenmeUrlChip blogType={'ZENN'} clickable={false} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox checked={isQiita} onChange={toggleQiita} /> <BlogNingenmeUrlChip blogType={'QIITA'} clickable={false} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox checked={isHatena} onChange={toggleHatena} /> <BlogNingenmeUrlChip blogType={'HATENA'} clickable={false} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox checked={isAmeba} onChange={toggleAmeba} /> <BlogNingenmeUrlChip blogType={'AMEBA'} clickable={false} />
        </Box>
      </Box>

      <List>
        {blogCardList}
      </List>
    </Container>      
  )
}
