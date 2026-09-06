import { useRouter } from 'next/router'
import Head from 'next/head'
import { ImageConst, UrlConst } from '../../constants/Const'

interface HtmlHeadProps {
  title: string
  description: string
  type?: 'website' | 'article'
  publishedTime?: string
}

export const HtmlHead = ({ title, description, type = 'website', publishedTime }: HtmlHeadProps): JSX.Element => {
  const router = useRouter()
  const siteName = 'ningenMe.net'
  const pageTitle = title ? `${title} | ${siteName}` : siteName
  const socialTitle = title || siteName
  const url = UrlConst.ORIGIN + router.asPath
  const image = ImageConst.NINGENME_NET

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#453a6b' />
      <link rel='canonical' href={url} />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json' />

      <meta property='og:type' content={type} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:locale' content='ja_JP' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={socialTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      {type === 'article' && publishedTime && (
        <meta property='article:published_time' content={publishedTime} />
      )}

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={socialTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Head>
  )
}
