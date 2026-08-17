import { formatBuildTime, getBuildTime } from 'utils/dateFormatter'
import styles from './LastUpdatedMobile.module.scss'

export const LastUpdatedMobile = (): JSX.Element => {
  const buildTime = getBuildTime()
  const lastUpdated = formatBuildTime(buildTime)

  return (
    <div className={styles.lastUpdatedMobile}>
      <div className={styles.label}>Last updated</div>
      <div className={styles.time}>{lastUpdated}</div>
    </div>
  )
}