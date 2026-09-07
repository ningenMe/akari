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

// Creationのグリッドにそのまま差し込む前提のため、
// 単体のCustomCardではなくgridアイテム相当のdivを直接返す。
// (cardSlotを介さないので、Creationカードの固定サイズの対象外になる)
export const IllustrationPin = (): ReadonlyArray<JSX.Element> => {
  const pins = PICKS
    .map(({ file, rotate }) => {
      const illustration = byFile.get(file)
      return illustration ? { illustration, rotate } : null
    })
    .filter((pin): pin is { illustration: Illustration, rotate: number } => pin !== null)

  return pins.map(({ illustration, rotate }) => (
    <div
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
    </div>
  ))
}
