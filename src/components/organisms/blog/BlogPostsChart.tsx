import React, { useMemo, useState } from 'react'
import { BlogData } from 'repository/BlogData'
import fontStyles from 'styles/Font.module.scss'
import styles from './BlogPostsChart.module.scss'

interface BlogPostsChartProps {
  blogList: BlogData[]
}

const CHART_WIDTH = 760
const CHART_HEIGHT = 220
const MARGIN = { top: 28, right: 12, bottom: 28, left: 30 }
const BAR_MAX_WIDTH = 24
const BAR_RADIUS = 4
const START_YEAR = 2017

const niceStep = (max: number, targetTicks = 4): number => {
  if (max <= 0) return 1
  const rough = max / targetTicks
  const magnitude = Math.pow(10, Math.floor(Math.log10(rough)))
  const normalized = rough / magnitude
  let step = 10
  if (normalized < 1.5) step = 1
  else if (normalized < 3) step = 2
  else if (normalized < 7) step = 5
  return step * magnitude
}

const barPath = (x: number, y: number, width: number, height: number, radius: number): string => {
  if (height <= 0) return ''
  const r = Math.min(radius, width / 2, height)
  return `M${x},${y + height} L${x},${y + r} Q${x},${y} ${x + r},${y} L${x + width - r},${y} Q${x + width},${y} ${x + width},${y + r} L${x + width},${y + height} Z`
}

export const BlogPostsChart = ({ blogList }: BlogPostsChartProps): JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const yearCounts = useMemo(() => {
    const years = blogList.map((blog) => Number(blog.date.slice(0, 4)))
    const endYear = Math.max(new Date().getFullYear(), START_YEAR, ...years)
    const counts = new Map<number, number>()
    years.forEach((year) => counts.set(year, (counts.get(year) ?? 0) + 1))
    const result: Array<{ year: number, count: number }> = []
    for (let year = START_YEAR; year <= endYear; year++) {
      result.push({ year, count: counts.get(year) ?? 0 })
    }
    return result
  }, [blogList])

  return (
    <div className={`${styles.card} ${fontStyles.body}`}>
      <BlogPostsChartBody yearCounts={yearCounts} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
    </div>
  )
}

interface BlogPostsChartBodyProps {
  yearCounts: Array<{ year: number, count: number }>
  hoveredIndex: number | null
  setHoveredIndex: (updater: number | null | ((current: number | null) => number | null)) => void
}

const BlogPostsChartBody = ({ yearCounts, hoveredIndex, setHoveredIndex }: BlogPostsChartBodyProps): JSX.Element => {
  const innerWidth = CHART_WIDTH - MARGIN.left - MARGIN.right
  const innerHeight = CHART_HEIGHT - MARGIN.top - MARGIN.bottom
  const maxCount = Math.max(...yearCounts.map((d) => d.count))
  const step = niceStep(maxCount)
  const niceMax = Math.max(step, Math.ceil(maxCount / step) * step)
  const tickCount = niceMax / step
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => i * step)

  const bandWidth = innerWidth / yearCounts.length
  const barWidth = Math.min(BAR_MAX_WIDTH, bandWidth * 0.55)

  const barGeometry = (count: number): { y: number, height: number } => {
    const height = (count / niceMax) * innerHeight
    return { height, y: MARGIN.top + innerHeight - height }
  }

  const hovered = hoveredIndex !== null ? yearCounts[hoveredIndex] : null

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
      className={styles.svg}
      role='img'
      aria-label={`年別の投稿数。${yearCounts.map((d) => `${d.year}年は${d.count}件`).join('、')}。`}
    >
      {ticks.map((tick) => {
        const y = MARGIN.top + innerHeight - (tick / niceMax) * innerHeight
        return (
          <g key={tick}>
            <line x1={MARGIN.left} x2={CHART_WIDTH - MARGIN.right} y1={y} y2={y} className={styles.gridline} />
            <text x={MARGIN.left - 8} y={y} className={styles.tickLabel} textAnchor='end' dominantBaseline='middle'>
              {tick}
            </text>
          </g>
        )
      })}

      {yearCounts.map((d, idx) => {
        const bandX = MARGIN.left + idx * bandWidth
        const x = bandX + (bandWidth - barWidth) / 2
        const { y, height } = barGeometry(d.count)
        const isHovered = hoveredIndex === idx
        return (
          <g key={d.year}>
            <rect
              x={bandX}
              y={MARGIN.top}
              width={bandWidth}
              height={innerHeight}
              fill='transparent'
              tabIndex={0}
              role='img'
              aria-label={`${d.year}年: ${d.count}件`}
              onPointerEnter={() => setHoveredIndex(idx)}
              onPointerLeave={() => setHoveredIndex((current) => (current === idx ? null : current))}
              onFocus={() => setHoveredIndex(idx)}
              onBlur={() => setHoveredIndex((current) => (current === idx ? null : current))}
              className={styles.hitArea}
            />
            <path d={barPath(x, y, barWidth, height, BAR_RADIUS)} className={isHovered ? styles.barHovered : styles.bar} />
            <text x={bandX + bandWidth / 2} y={MARGIN.top + innerHeight + 16} textAnchor='middle' className={styles.axisLabel}>
              {d.year}
            </text>
          </g>
        )
      })}

      {hovered !== null && hoveredIndex !== null && (() => {
        const bandX = MARGIN.left + hoveredIndex * bandWidth
        const barCenterX = bandX + bandWidth / 2
        const { y: barTopY } = barGeometry(hovered.count)
        const label = `${hovered.year}年: ${hovered.count}件`
        const tooltipWidth = Math.max(70, 24 + label.length * 8)
        const tooltipHeight = 26
        const tooltipX = Math.max(MARGIN.left, Math.min(barCenterX - tooltipWidth / 2, CHART_WIDTH - MARGIN.right - tooltipWidth))
        const tooltipY = Math.max(2, barTopY - tooltipHeight - 8)
        return (
          <g className={styles.tooltip}>
            <rect x={tooltipX} y={tooltipY} width={tooltipWidth} height={tooltipHeight} rx={6} className={styles.tooltipBg} />
            <text x={tooltipX + tooltipWidth / 2} y={tooltipY + tooltipHeight / 2} textAnchor='middle' dominantBaseline='middle' className={styles.tooltipText}>
              {label}
            </text>
          </g>
        )
      })()}
    </svg>
  )
}
