import React from 'react'
import Image from 'next/image'
import { getBlogIconPath } from 'components/atoms/blog/BlogChip'
import fontStyles from 'styles/Font.module.scss'
import styles from './BlogTypeFilter.module.scss'

interface BlogTypeFilterItem {
  blogType: string
  label: string
  checked: boolean
  onToggle: () => void
}

interface BlogTypeFilterProps {
  items: BlogTypeFilterItem[]
}

export const BlogTypeFilter = ({ items }: BlogTypeFilterProps): JSX.Element => {
  return (
    <div className={`${styles.row} ${fontStyles.body}`}>
      {items.map((item) => (
        <button
          key={item.blogType}
          type='button'
          aria-pressed={item.checked}
          onClick={item.onToggle}
          className={`${styles.pill} ${item.checked ? styles.pillActive : ''}`}
        >
          <Image src={`/${getBlogIconPath(item.blogType)}`} alt='' width={16} height={16} className={styles.icon} />
          {item.label}
        </button>
      ))}
    </div>
  )
}
