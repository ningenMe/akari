import { CSSProperties } from 'react'
import { Creation } from 'interfaces/Creation'
import fontStyles from 'styles/Font.module.scss'
import styles from './ServiceCard.module.scss'

export const ServiceCard = ({ creation }: { creation: Creation }): JSX.Element => {
  const cardStyle = { '--brand': creation.accentColor } as CSSProperties
  const url = new URL(creation.href).host

  return (
    <a href={creation.href} className={styles.card} style={cardStyle}>
      <div className={styles.top}>
        <span className={styles.title}>{creation.title}</span>
        <span className={styles.arrow}>&#8599;</span>
      </div>
      <p className={`${styles.body} ${fontStyles.body}`}>{creation.body}</p>
      <div className={styles.foot}>
        <span className={`${styles.url} ${fontStyles.body}`}>{url}</span>
      </div>
    </a>
  )
}
