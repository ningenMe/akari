import { Container, Typography } from '@mui/material'
import { SubTitle, Title } from 'components/atoms/Title'
import Image from 'next/image'
import React from 'react'
import { Illustration, IllustrationCategory } from 'interfaces/Illustration'
import fontStyles from 'styles/Font.module.scss'
import styles from './IllustrationGallery.module.scss'

const CATEGORY_LABEL: Record<IllustrationCategory, string> = {
  color: 'Color',
  mono: 'Mono',
}

const IllustrationSection = (
  { category, illustrationList }: { category: IllustrationCategory, illustrationList: ReadonlyArray<Illustration> },
): JSX.Element => {
  const items = illustrationList.filter((illustration) => illustration.category === category)
  if (items.length === 0) return <></>

  return (
    <>
      <SubTitle title={CATEGORY_LABEL[category]} />
      <div className={styles.grid}>
        {items.map((illustration) => (
          <Image
            key={illustration.file}
            src={`/illustration/${illustration.category}/${illustration.file}`}
            alt={`illustration ${illustration.category} ${illustration.file}`}
            width={illustration.width}
            height={illustration.height}
            className={styles.image}
            sizes='(max-width: 600px) 50vw, (max-width: 960px) 33vw, 240px'
          />
        ))}
      </div>
    </>
  )
}

export const IllustrationGallery = (
  { illustrationList }: { illustrationList: ReadonlyArray<Illustration> },
): JSX.Element => {
  return (
    <Container>
      <Title title='Illustration' />
      <Typography variant='body2' className={`${styles.description} ${fontStyles.body}`}>
        過去に描いたイラストのアーカイブ
      </Typography>
      <IllustrationSection category='color' illustrationList={illustrationList} />
      <IllustrationSection category='mono' illustrationList={illustrationList} />
    </Container>
  )
}
