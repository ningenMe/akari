import styles from './OptionalHref.module.scss'

export const OptionalHref = ({body,href} : {body:string,href:string|null} ): JSX.Element => {
  if(href === null) {
    return (
      <>
        {body}
      </>
    );
  }
  else {
    return (
      <a href={href}>
        {body}
        <span className={styles.arrow} aria-hidden='true'>↗</span>
      </a>
    )
  }
}
