import styles from './Footer.module.scss'
import { AppBar } from '@mui/material'
import { PathConst } from '../../constants/Const'

const Copy = () => {
  return (
    <span className={styles.text}>&copy; 2023 Furuta Taishi</span>
  )
}

const LegalLinks = () => {
  return (
    <span className={styles.legalLinks}>
      <a href={PathConst.PRIVACY} className={styles.legalLink}>Privacy</a>
      <a href={PathConst.TERMS} className={styles.legalLink}>Terms</a>
    </span>
  )
}

export const NingenmeNetFooter = (): JSX.Element => {
  return (
    <AppBar position='static' className={styles.ningenmeNetAppbar}>
      <div className={styles.inner}>
        <Copy />
        <LegalLinks />
      </div>
    </AppBar>
  )
}
export const ComproCategoryFooter = (): JSX.Element => {
  return (
    <AppBar position='static' className={styles.comproCategoryAppbar}>
      <Copy />
    </AppBar>
  )
}
