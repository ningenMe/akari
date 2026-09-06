import { AppBar, Toolbar } from '@mui/material'
import { LinkConst } from 'constants/Const'
import styles from './ServiceHeader.module.scss'

export const ServiceHeader = (): JSX.Element => {
  return (
    <AppBar position='static' className={styles.appbar}>
      <Toolbar disableGutters className={styles.inner}>
        <a href={LinkConst.NINGENME_NET.href} className={styles.brand}>
          {LinkConst.NINGENME_NET.name}
        </a>
      </Toolbar>
    </AppBar>
  )
}
