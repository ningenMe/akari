import Image from 'next/image'
import { ReactNode } from 'react'
import { Container } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import TerminalIcon from '@mui/icons-material/Terminal'
import WorkIcon from '@mui/icons-material/Work'
import ArticleIcon from '@mui/icons-material/Article'
import { Title } from 'components/atoms/Title'
import { SNS_ACCOUNTS, SnsId } from 'constants/SnsAccounts'
import styles from './Links.module.scss'

// このページで表示する順番。データ自体は constants/SnsAccounts にある
const ORDER: ReadonlyArray<SnsId> = [
  'github',
  'twitter',
  'bluesky',
  'mixi2',
  'facebook',
  'instagram',
  'youtrust',
  'devNull',
  'sizu',
  'hatena',
  'qiita',
  'zenn',
  'ameba',
  'atcoder',
  'codeforces',
  'yukicoder',
  'toki',
  'csacademy',
]

// アイコンはこのページの見せ方なので、ページ側で持つ
const ICONS: Readonly<Record<SnsId, ReactNode>> = {
  github: <GitHubIcon />,
  twitter: <TwitterIcon />,
  bluesky: <WorkIcon />,
  devNull: <TerminalIcon />,
  mixi2: <Image src='/mixi.png' alt='' width={18} height={18} />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  youtrust: <WorkIcon />,
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

export const Links = (): JSX.Element => {
  return (
    <Container className={styles.root}>
      <Title title='Links' />
      <div className={styles.profile}>
        <Image src='/taishi.jpg' alt='' width={96} height={96} className={styles.avatar} />
        <h2 className={styles.name}>taishi / ningenMe</h2>
      </div>
      <ul className={styles.list}>
        {ORDER.map((id) => {
          const account = SNS_ACCOUNTS[id]
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
