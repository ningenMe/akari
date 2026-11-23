import Image from 'next/image'
import { ReactNode } from 'react'
import { Container } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import TerminalIcon from '@mui/icons-material/Terminal'
import WorkIcon from '@mui/icons-material/Work'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArticleIcon from '@mui/icons-material/Article'
import { Title } from 'components/atoms/Title'
import { LINK_ACCOUNTS, LinkId } from 'constants/LinkAccounts'
import { BLOG_TYPE_DISPLAY_ORDER } from 'constants/BlogTheme'
import styles from './Link.module.scss'

// ブログ種別 → リンク先のid。OLD_DIARY は自サイト内のページなので、リンク集には載せない
const BLOG_TYPE_TO_LINK_ID: Readonly<Record<string, LinkId>> = {
  SIZU: 'sizu',
  HATENA: 'hatena',
  QIITA: 'qiita',
  ZENN: 'zenn',
  AMEBA: 'ameba',
}
// ブログ系の並びは BLOG_TYPE_DISPLAY_ORDER に従う
const BLOG_LINK_IDS: ReadonlyArray<LinkId> = BLOG_TYPE_DISPLAY_ORDER.flatMap((blogType) => {
  const linkId = BLOG_TYPE_TO_LINK_ID[blogType]
  return linkId ? [linkId] : []
})

// このページで表示する順番。データ自体は constants/LinkAccounts にある
const ORDER: ReadonlyArray<LinkId> = [
  'github',
  'twitter',
  'bluesky',
  'mixi2',
  'facebook',
  'instagram',
  'youtrust',
  'linkedin',
  'devNull',
  ...BLOG_LINK_IDS,
  'atcoder',
  'codeforces',
  'yukicoder',
  'toki',
  'csacademy',
]

// アイコンはこのページの見せ方なので、ページ側で持つ
const ICONS: Readonly<Record<LinkId, ReactNode>> = {
  github: <GitHubIcon />,
  twitter: <TwitterIcon />,
  bluesky: <WorkIcon />,
  devNull: <TerminalIcon />,
  mixi2: <Image src='/mixi.png' alt='' width={18} height={18} />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  youtrust: <WorkIcon />,
  linkedin: <LinkedInIcon />,
  qiita: <Image src='/qiita.png' alt='' width={18} height={18} />,
  zenn: <Image src='/zenn.svg' alt='' width={18} height={18} />,
  hatena: <Image src='/hatena.svg' alt='' width={18} height={18} />,
  ameba: <ArticleIcon />,
  sizu: <Image src='/sizu.png' alt='' width={18} height={18} />,
  atcoder: <Image src='/atcoder.png' alt='' width={18} height={18} />,
  codeforces: <Image src='/codeforces.png' alt='' width={18} height={18} />,
  yukicoder: <Image src='/yukicoder.jpg' alt='' width={18} height={18} />,
  toki: <Image src='/toki.png' alt='' width={18} height={18} />,
  csacademy: <Image src='/csacademy.png' alt='' width={18} height={18} />,
}

export const Link = (): JSX.Element => {
  return (
    <Container className={styles.root}>
      <Title title='Link' />
      <div className={styles.profile}>
        <Image src='/taishi.jpg' alt='' width={96} height={96} className={styles.avatar} />
        <h2 className={styles.name}>taishi / ningenMe</h2>
      </div>
      <ul className={styles.list}>
        {ORDER.map((id) => {
          const account = LINK_ACCOUNTS[id]
          return (
            <li key={id}>
              <a href={account.href} target='_blank' rel='noreferrer noopener' className={styles.link}>
                <span className={styles.linkIcon}>{ICONS[id]}</span>
                <span className={styles.linkBody}>
                  <span className={styles.serviceName}>{account.name}</span>
                  {(account.displayName || account.handle) && (
                    <span className={styles.linkName}>
                      {account.displayName}
                      {account.handle && <span className={styles.handle}>{account.handle}</span>}
                    </span>
                  )}
                </span>
                {account.purpose && <span className={styles.purpose}>{account.purpose}</span>}
              </a>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
