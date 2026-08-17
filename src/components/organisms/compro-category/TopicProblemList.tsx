import React from 'react'
import { Container, Typography } from '@mui/material'

export const TopicProblemList = (): JSX.Element => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Topic Problem List
      </Typography>
      <Typography variant="body1" color="text.secondary">
        API接続が無効化されています。機能を使用するにはAPI接続を復旧してください。
      </Typography>
    </Container>
  )
}