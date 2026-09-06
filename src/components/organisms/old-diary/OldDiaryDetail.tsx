import { Container, Typography } from '@mui/material'
import { Title } from 'components/atoms/Title'
import React from 'react'
import { OldDiaryPostDetail } from 'interfaces/OldDiaryPost'
import { PathConst } from 'constants/Const'
import { CustomNormalCard } from 'components/organisms/CustomCard'
import fontStyles from 'styles/Font.module.scss'
import styles from './OldDiaryDetail.module.scss'

export const OldDiaryDetail = ({ oldDiary }: { oldDiary: OldDiaryPostDetail }): JSX.Element => {
  return (
    <Container>
      <Title title={oldDiary.title} />
      <Typography variant='body2' className={`${styles.date} ${fontStyles.body}`}>
        {oldDiary.date}
      </Typography>
      <CustomNormalCard>
        <div className={`${styles.article} ${fontStyles.body}`} dangerouslySetInnerHTML={{ __html: oldDiary.html }} />
      </CustomNormalCard>
      <a href={PathConst.OLD_DIARY} className={`${styles.back} ${fontStyles.body}`}>← 一覧へ戻る</a>
    </Container>
  )
}
