import { CREATION_LIST } from 'constants/creationList'
import React from 'react'
import { SubTitle } from 'components/atoms/Title'
import styles from './Creation.module.scss'
import { CustomLinkCard, CustomNormalCard } from '../CustomCard'
import fontStyles from 'styles/Font.module.scss'
import { creationCategoryLabel } from 'components/atoms/creation/creationCategoryLabel'
import { IllustrationPin } from './IllustrationPin'

export const Creation = (): JSX.Element => {

  const cards = CREATION_LIST.map((creation) =>
  {
    if (creation.isDone) {
      return (
        <div className={styles.cardSlot} key={creation.href}>
          <CustomLinkCard href={creation.href}>
            <h5 className={styles.title}>
              {creation.title}
            </h5>
            <p className={fontStyles.body}>
              {creation.body}
            </p>
            <span className={styles.category}>
              {creationCategoryLabel(creation.category)}
            </span>
          </CustomLinkCard>
        </div>
      )
    }
    return (
      <div className={styles.cardSlot} key={creation.href}>
        <CustomNormalCard>
          <h5 className={styles.title}>
            {creation.title}
          </h5>
          <p className={fontStyles.body}>
            準備中...
          </p>
          <span className={styles.category}>
            {creationCategoryLabel(creation.category)}
          </span>
        </CustomNormalCard>
      </div>
    )
  }
  )

  // カードの間にイラストを適当な位置で散らす。挿入位置は固定でよい。
  const pins = IllustrationPin()
  const items: JSX.Element[] = []
  let pinIndex = 0
  cards.forEach((card, i) => {
    items.push(card)
    if (i % 2 === 0 && pinIndex < pins.length) {
      items.push(pins[pinIndex])
      pinIndex++
    }
  })
  items.push(...pins.slice(pinIndex))

  return (
    <>
      <SubTitle title='Creation' />
      <div className={styles.grid}>
        {items}
      </div>
    </>
  )
}
