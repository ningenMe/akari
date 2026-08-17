import { formatBuildTime, getBuildTime } from 'utils/dateFormatter'
import styles from './LastUpdatedDesktop.module.scss'

interface LastUpdatedDesktopProps {
  className?: string
}

export const LastUpdatedDesktop = ({ className }: LastUpdatedDesktopProps): JSX.Element => {
  const buildTime = getBuildTime()
  const lastUpdated = formatBuildTime(buildTime)

  return (
    <div className={`${styles.lastUpdated} ${className || ''}`}>
      <div className={styles.label}>Last updated</div>
      <div className={styles.time}>{lastUpdated}</div>
    </div>
  )
}