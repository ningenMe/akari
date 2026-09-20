import styles from './Title.module.scss'

export const Title = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        {title}
      </h1>
    </div>
  )
}

export const SubTitle = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.subtitle}>
        {title}
      </span>
    </div>
  )
}
