import { useRouter } from 'next/router'
import Head from 'next/head'
import { UrlConst } from '../../constants/Const'

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
  // faviconと同じ素材を使い回す暫定対応。専用の1200x630 OGP画像を用意したら差し替える
  const image = `${UrlConst.ORIGIN}/icon-512.png`

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
      <meta property='og:image:width' content='512' />
      <meta property='og:image:height' content='512' />
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
