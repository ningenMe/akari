import { HtmlHead } from 'components/organisms/HtmlHead'
import { NingenmeNetFooter } from 'components/organisms/Footer'
import { NingenmeNetHeader } from 'components/organisms/Header'
import { NextPage } from 'next'
import { BlogSearch } from 'components/organisms/blog/BlogSearch'
import blogList from 'data/blog.json'

export const Index: NextPage = () => {
  return (
    <>
      <HtmlHead title='blog - ' />
      <NingenmeNetHeader />
      <BlogSearch blogList={blogList} />
      <NingenmeNetFooter />
    </>
  )
}

export default Index
