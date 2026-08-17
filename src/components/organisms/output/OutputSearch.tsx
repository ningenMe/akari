import React, {useEffect, useState } from 'react'
import { BlogData } from 'repository/BlogData'
import { Container, List } from '@mui/material'
import { Output } from 'interfaces/Output'
import { OutputChip } from 'components/atoms/output/OutputChip'
import { TASK_LIST } from 'constants/taskList'
import { ACTIVITY_LIST } from 'constants/activityList'

export const OutputSearch = (): JSX.Element => {

  const [blogList, setBlogList] = useState<BlogData[]>([])

  useEffect(
    () => {
      // TODO: Implement server-side fetch for output page
      // Temporarily using empty array to avoid client-side gRPC issues
      setBlogList([])
    },
    [])

  const blogOutputList: Output[] = blogList.map((blog) => {
    return {
      date: blog.date,
      title: blog.blogTitle,
      href: blog.url,
      type: 'blog'
    }
  });
  const taskOutputList: Output[] = TASK_LIST.map((task) => {
    return {
      date: task.date,
      title: task.title,
      href: task.href,
      type: 'task'
    }
  })
  const activityTaskOutputList: Output[] = ACTIVITY_LIST.map((activity) => {
    return {
      date: activity.year.toString(),
      title: activity.body,
      href: activity.href,
      type: 'activity'
    }
  })

  const outputList = [...blogOutputList,...taskOutputList,...activityTaskOutputList].sort((l, r) => r.date.localeCompare(l.date))

  const outputChipList = outputList.map((output, idx) => (
    <OutputChip output={output} key={idx}/>
  ));

  return (
    <Container>
      <List>
        {outputChipList}
      </List>
    </Container>      
  )
}
