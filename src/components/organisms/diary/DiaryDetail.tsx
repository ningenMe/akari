import { Container, Typography } from '@mui/material'
import { Title } from 'components/atoms/Title'
import React from 'react'
import { DiaryPostDetail } from 'interfaces/DiaryPost'
import { PathConst } from 'constants/Const'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import fontStyles from 'styles/Font.module.scss'
import styles from './DiaryDetail.module.scss'

export const DiaryDetail = ({ diary }: { diary: DiaryPostDetail }): JSX.Element => {
  return (
    <Container>
      <Title title={diary.title} />
      <Typography variant='body2' className={`${styles.date} ${fontStyles.body}`}>
        {diary.date}
      </Typography>
      <CustomNormalCard>
        <div className={`${styles.article} ${fontStyles.body}`} dangerouslySetInnerHTML={{ __html: diary.html }} />
      </CustomNormalCard>
      <a href={PathConst.DIARIES} className={`${styles.back} ${fontStyles.body}`}>← 一覧へ戻る</a>
    </Container>
  )
}
