import Image from 'next/image'
import { ReactNode } from 'react'
import { Container } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import TerminalIcon from '@mui/icons-material/Terminal'
import WorkIcon from '@mui/icons-material/Work'
import { Title } from 'components/atoms/Title'
import { UrlConst } from 'constants/Const'
import styles from './Links.module.scss'

type LinkItem = {
  href: string,
  name: string,
  icon: ReactNode,
  // 表示名（screen name）。未確認のものは省略
  displayName?: string,
  // ハンドル名（アカウントIDでないものは省略）
  handle?: string,
  // そのサービスでの用途。仮文言なので要確認
  purpose: string,
}

// 既存の定数（UrlConst）を参照するだけで、リンク先の定義は増やさない
const LINK_ITEMS: ReadonlyArray<LinkItem> = [
  { href: UrlConst.GITHUB, name: 'GitHub', icon: <GitHubIcon />, displayName: 'taishi', handle: '@ningenMe', purpose: '開発' },
  { href: UrlConst.TWITTER, name: 'Twitter', icon: <TwitterIcon />, displayName: 'taishi', handle: '@ningenMe', purpose: '発信・日々のつぶやき' },
  { href: UrlConst.BLUESKY, name: 'Bluesky', icon: <WorkIcon />, displayName: 'taishi', handle: '@ningenme.bsky.social', purpose: '発信（Twitterと同じ用途）' },
  { href: UrlConst.DEV_NULL, name: 'dev-null.sh', icon: <TerminalIcon />, displayName: 'taishi', handle: '@ningenMe', purpose: '技術系の投稿' },
  { href: UrlConst.MIXI2, name: 'mixi2', icon: <Image src='/mixi.png' alt='' width={18} height={18} />, displayName: 'taishi', handle: '@ningenMe', purpose: '発信（仮）' },
  { href: UrlConst.FACEBOOK, name: 'Facebook', icon: <FacebookIcon />, displayName: 'taishi', handle: 'taishi.furuta.0511', purpose: '知人との近況' },
  { href: UrlConst.INSTAGRAM, name: 'Instagram', icon: <InstagramIcon />, displayName: 'taishi', handle: '@taishi.furuta', purpose: '写真・日常' },
  { href: UrlConst.YOUTRUST, name: 'YOUTRUST', icon: <WorkIcon />, displayName: 'taishi', purpose: '評価・信頼の確認' },
]

export const Links = (): JSX.Element => {
  return (
    <Container className={styles.root}>
      <Title title='Links' />
      <div className={styles.profile}>
        <Image src='/taishi.jpg' alt='' width={96} height={96} className={styles.avatar} />
        <h2 className={styles.name}>taishi / ningenMe</h2>
      </div>
      <ul className={styles.list}>
        {LINK_ITEMS.map((item) => (
          <li key={item.name}>
            <a href={item.href} target='_blank' rel='noreferrer noopener' className={styles.link}>
              <span className={styles.linkIcon}>{item.icon}</span>
              <span className={styles.linkBody}>
                <span className={styles.serviceName}>{item.name}</span>
                {(item.displayName || item.handle) && (
                  <span className={styles.linkName}>
                    {item.displayName}
                    {item.handle && <span className={styles.handle}>{item.handle}</span>}
                  </span>
                )}
              </span>
              <span className={styles.purpose}>{item.purpose}</span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  )
}
