import Image from 'next/image'
import React from 'react'
import illustrationList from 'data/illustration.json'
import { Illustration } from 'interfaces/Illustration'
import styles from './IllustrationPin.module.scss'

const PICKS: ReadonlyArray<{ file: string, rotate: number }> = [
  { file: '4.jpg', rotate: -6 },
  { file: '5.jpg', rotate: 5 },
  { file: '6.jpg', rotate: -3 },
  { file: '7.jpg', rotate: 6 },
  { file: '10.jpg', rotate: -5 },
]

const byFile = new Map(
  (illustrationList as ReadonlyArray<Illustration>)
    .filter((illustration) => illustration.category === 'color')
    .map((illustration) => [illustration.file, illustration])
)

export const IllustrationPin = (): JSX.Element => {
  const pins = PICKS
    .map(({ file, rotate }) => {
      const illustration = byFile.get(file)
      return illustration ? { illustration, rotate } : null
    })
    .filter((pin): pin is { illustration: Illustration, rotate: number } => pin !== null)

  if (pins.length === 0) return <></>

  return (
    <div className={styles.board}>
      {pins.map(({ illustration, rotate }) => (
        <span
          key={illustration.file}
          className={styles.pin}
          style={{ '--rotate': `${rotate}deg` } as React.CSSProperties}
        >
          <Image
            src={`/illustration/${illustration.category}/${illustration.file}`}
            alt=''
            width={illustration.width}
            height={illustration.height}
            sizes='120px'
            className={styles.photo}
          />
        </span>
      ))}
    </div>
  )
}
