import { Container } from '@mui/material'
import { SERVICE_CREATION_LIST } from 'constants/creationList'
import { ServiceCard } from './ServiceCard'
import styles from './Service.module.scss'

export const Service = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <Container sx={{ pt: 8, pb: 12 }}>
        <p className={styles.eyebrow}>Service</p>
        <div className={styles.grid}>
          {SERVICE_CREATION_LIST.map((creation) => (
            <ServiceCard creation={creation} key={creation.href} />
          ))}
        </div>
      </Container>
    </div>
  )
}
