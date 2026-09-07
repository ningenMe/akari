import Image from 'next/image'
import { Profile } from '../organisms/home/Profile'
import { Creation } from '../organisms/home/Creation'
import { History } from '../organisms/home/History'
import styles from './Home.module.scss'
import { Activity } from '../organisms/home/Activity'
import { Container } from '@mui/material'
import { RecentBlog } from '../organisms/home/RecentBlog'
import { IllustrationPin } from '../organisms/home/IllustrationPin'
import { BlogData } from 'repository/BlogData'

interface HomeProps {
  blogList: BlogData[]
}

export const Home = ({ blogList }: HomeProps): JSX.Element => {
  return (
    <Container>
      <div className={styles.pageGrid}>
        <div className={styles.content}>
          <Profile />
          <RecentBlog blogList={blogList} />
          <Creation />
          <IllustrationPin />
          <div className={styles.grid}>
            <Activity />
            <History />
          </div>
        </div>
        <div className={styles.illustrationColumn}>
          <Image
            src='/ningenme-full.png'
            alt=''
            width={990}
            height={1400}
            priority
            className={styles.background}
          />
        </div>
      </div>
    </Container>
  )
}
