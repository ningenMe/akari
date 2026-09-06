import { Container, Typography } from '@mui/material'
import { Title } from 'components/atoms/Title'
import React from 'react'
import { OldDiaryPost } from 'interfaces/OldDiaryPost'
import { PathConst } from 'constants/Const'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import fontStyles from 'styles/Font.module.scss'
import styles from './OldDiaryList.module.scss'

export const OldDiaryList = ({ oldDiaryList }: { oldDiaryList: ReadonlyArray<OldDiaryPost> }): JSX.Element => {
  const rows = oldDiaryList.map((oldDiary) => (
    <a key={oldDiary.slug} href={`${PathConst.OLD_DIARY}/${oldDiary.slug}`} className={`${styles.row} ${fontStyles.body}`}>
      <span className={styles.date}>{oldDiary.date}</span>
      <span className={styles.title}>{oldDiary.title}</span>
    </a>
  ))

  return (
    <Container>
      <Title title='Old Diary' />
      <Typography variant='body2' className={`${styles.description} ${fontStyles.body}`}>
        昔つけていた日記のアーカイブ
      </Typography>
      <CustomNormalCard>
        {rows}
      </CustomNormalCard>
    </Container>
  )
}
