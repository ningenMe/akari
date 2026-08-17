import { Profile } from '../organisms/home/Profile'
import { Creation } from '../organisms/home/Creation'
import { History } from '../organisms/home/History'
import styles from './Home.module.scss'
import { Activity } from '../organisms/home/Activity'
import { Container } from '@mui/material'
import { RecentBlog } from '../organisms/home/RecentBlog'
import { BlogData } from 'repository/BlogData'

interface HomeProps {
  blogList: BlogData[]
}

export const Home = ({ blogList }: HomeProps): JSX.Element => {
  return (
    <Container>
      <Profile />
      <RecentBlog blogList={blogList} />
      <Creation />
      <div className={styles.grid}>
        <Activity />
        <History />
      </div>
    </Container>
  )
}
