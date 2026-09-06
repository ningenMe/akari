import { AppBar } from '@mui/material'
import styles from './ServiceFooter.module.scss'

export const ServiceFooter = (): JSX.Element => {
  return (
    <AppBar position='static' className={styles.appbar}>
      <span className={styles.text}>&copy; 2023 Furuta Taishi</span>
    </AppBar>
  )
}
