import { Container, Typography } from '@mui/material'
import { Title } from 'components/atoms/Title'
import React from 'react'
import { DiaryPost } from 'interfaces/DiaryPost'
import { PathConst } from 'constants/Const'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import fontStyles from 'styles/Font.module.scss'
import styles from './DiaryList.module.scss'

export const DiaryList = ({ diaryList }: { diaryList: ReadonlyArray<DiaryPost> }): JSX.Element => {
  const rows = diaryList.map((diary) => (
    <a key={diary.slug} href={`${PathConst.DIARIES}/${diary.slug}`} className={`${styles.row} ${fontStyles.body}`}>
      <span className={styles.date}>{diary.date}</span>
      <span className={styles.title}>{diary.title}</span>
    </a>
  ))

  return (
    <Container>
      <Title title='Diaries' />
      <Typography variant='body2' className={`${styles.description} ${fontStyles.body}`}>
        昔つけていた日記のアーカイブ
      </Typography>
      <CustomNormalCard>
        {rows}
      </CustomNormalCard>
    </Container>
  )
}
