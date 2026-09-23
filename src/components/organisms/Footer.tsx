import styles from './Footer.module.scss'
import { AppBar } from '@mui/material'
import { PathConst } from '../../constants/Const'

const Copy = () => {
  return (
    <span className={styles.text}>&copy; 2023 Furuta Taishi</span>
  )
}

const FooterLinks = () => {
  return (
    <span className={styles.footerLinks}>
      <a href={PathConst.SERVICE} className={styles.footerLink}>Service</a>
      <a href={PathConst.PRIVACY} className={styles.footerLink}>Privacy</a>
      <a href={PathConst.TERMS} className={styles.footerLink}>Terms</a>
    </span>
  )
}

export const NingenmeNetFooter = (): JSX.Element => {
  return (
    <AppBar position='static' className={styles.ningenmeNetAppbar}>
      <div className={styles.inner}>
        <Copy />
        <FooterLinks />
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
