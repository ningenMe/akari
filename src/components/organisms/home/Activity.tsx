import { ACTIVITY_LIST } from 'constants/activityList'
import { OptionalHref } from 'components/atoms/OptionalHref'
import React from 'react'
import { SubTitle } from 'components/atoms/Title'
import { CustomNormalCard } from '../CustomCard'
import fontStyles from 'styles/Font.module.scss'
import styles from './Activity.module.scss'

export const Activity = (): JSX.Element => {
  const contents = ACTIVITY_LIST.map((activity, idx) =>
    <div key={idx} className={`${styles.row} ${fontStyles.body}`}>
      <span className={styles.year}>{activity.year}</span>
      <span className={styles.body}>
        <OptionalHref body={activity.body} href={activity.href} />
      </span>
    </div>
  )

  return (
    <div>
      <SubTitle title='Activitiy' />
      <CustomNormalCard>
        {contents}
      </CustomNormalCard>
    </div>
  )
}
