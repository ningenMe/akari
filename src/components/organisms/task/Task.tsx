import { Container, Typography } from '@mui/material'
import { Title } from 'components/atoms/Title'
import React from 'react'
import { TASK_LIST } from 'constants/taskList'
import { CustomLinkCard } from '../CustomCard'
import styles from './Task.module.scss'
import fontStyles from 'styles/Font.module.scss'
import { onlineJudgeIconPath } from 'components/atoms/task/onlineJudgeIconPath'
import { onlineJudgeTypeLabel } from 'components/atoms/task/onlineJudgeTypeLabel'

export const Task = (): JSX.Element => {
  const cardList = TASK_LIST.map((task) =>
    <CustomLinkCard href={task.href} key={task.href}>
      <div className={styles.head}>
        <img className={styles.icon} src={onlineJudgeIconPath(task.type)} width={36} height={36} alt={task.type} />
        <h5 className={styles.title}>
          {task.title}
        </h5>
      </div>
      <div className={styles.meta}>
        <span className={styles.date}>{task.date}</span>
        <span className={styles.type}>{onlineJudgeTypeLabel(task.type)}</span>
      </div>
    </CustomLinkCard>
  )

  return (
    <Container>
      <Title title='Task' />
      <Typography variant='body2' className={`${styles.description} ${fontStyles.body}`}>
        ningenMeの作った問題一覧
      </Typography>
      <div className={styles.grid}>
        {cardList}
      </div>
    </Container>
  )
}
