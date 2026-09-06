import { Container, Typography } from '@mui/material'
import { Title } from 'components/atoms/Title'
import React from 'react'
import { PAPER_LIST } from 'constants/paperList'
import { CustomLinkCard } from '../CustomCard'
import styles from './Paper.module.scss'

export const Paper = (): JSX.Element => {
  const cardList = PAPER_LIST.map((paper) =>
    <CustomLinkCard href={paper.href} key={paper.href}>
      <h5 className={styles.title}>
        {paper.title}
      </h5>
    </CustomLinkCard>
  )

  return (
    <Container>
      <Title title='Paper' />
      <Typography variant='body2'>ningenMeの書いた論文一覧</Typography>
      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
