import { Container, Typography } from '@mui/material'
import { Title } from 'components/atoms/Title'
import React from 'react'
import { PAPER_LIST } from 'constants/paperList'
import { PathConst } from 'constants/Const'
import { getCreationBody } from 'constants/creationList'
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
      <Typography variant='body2'>{getCreationBody(PathConst.PAPER)}</Typography>
      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
