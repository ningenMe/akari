import React, { useMemo, useState } from 'react'
import { BlogData } from 'repository/BlogData'
import { BLOG_TYPE_STACK_ORDER, getBlogColor } from 'constants/BlogTheme'
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
const SEGMENT_GAP = 1

interface YearCount {
  year: number
  total: number
  // 積み上げ順(下から上)。0件の種別は含まない
  segments: Array<{ blogType: string, count: number }>
}

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
    const counts = new Map<number, Map<string, number>>()
    blogList.forEach((blog) => {
      const year = Number(blog.date.slice(0, 4))
      const byType = counts.get(year) ?? new Map<string, number>()
      byType.set(blog.blogType, (byType.get(blog.blogType) ?? 0) + 1)
      counts.set(year, byType)
    })
    // 未知のblogTypeも落とさないよう、既知の順序の後ろに続ける
    const knownTypes = new Set(BLOG_TYPE_STACK_ORDER)
    const extraTypes = Array.from(new Set(blogList.map((blog) => blog.blogType))).filter((t) => !knownTypes.has(t))
    const stackOrder = [...BLOG_TYPE_STACK_ORDER, ...extraTypes]
    const result: YearCount[] = []
    for (let year = START_YEAR; year <= endYear; year++) {
      const byType = counts.get(year)
      const segments = stackOrder
        .map((blogType) => ({ blogType, count: byType?.get(blogType) ?? 0 }))
        .filter((segment) => segment.count > 0)
      result.push({ year, total: segments.reduce((sum, segment) => sum + segment.count, 0), segments })
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
  yearCounts: YearCount[]
  hoveredIndex: number | null
  setHoveredIndex: (updater: number | null | ((current: number | null) => number | null)) => void
}

const BlogPostsChartBody = ({ yearCounts, hoveredIndex, setHoveredIndex }: BlogPostsChartBodyProps): JSX.Element => {
  const innerWidth = CHART_WIDTH - MARGIN.left - MARGIN.right
  const innerHeight = CHART_HEIGHT - MARGIN.top - MARGIN.bottom
  const maxCount = Math.max(...yearCounts.map((d) => d.total))
  const step = niceStep(maxCount)
  const niceMax = Math.max(step, Math.ceil(maxCount / step) * step)
  const tickCount = niceMax / step
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => i * step)

  const bandWidth = innerWidth / yearCounts.length
  const barWidth = Math.min(BAR_MAX_WIDTH, bandWidth * 0.55)

  const valueToY = (value: number): number => MARGIN.top + innerHeight - (value / niceMax) * innerHeight

  const hovered = hoveredIndex !== null ? yearCounts[hoveredIndex] : null

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
      className={styles.svg}
      role='img'
      aria-label={`年別の投稿数。${yearCounts.map((d) => `${d.year}年は${d.total}件`).join('、')}。`}
    >
      {ticks.map((tick) => {
        const y = valueToY(tick)
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
        const isHovered = hoveredIndex === idx
        let stacked = 0
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
              aria-label={`${d.year}年: ${d.total}件(${d.segments.map((segment) => `${segment.blogType} ${segment.count}件`).join('、')})`}
              onPointerEnter={() => setHoveredIndex(idx)}
              onPointerLeave={() => setHoveredIndex((current) => (current === idx ? null : current))}
              onFocus={() => setHoveredIndex(idx)}
              onBlur={() => setHoveredIndex((current) => (current === idx ? null : current))}
              className={styles.hitArea}
            />
            {d.segments.map((segment, segmentIdx) => {
              const bottomY = valueToY(stacked)
              stacked += segment.count
              const topY = valueToY(stacked)
              const isTop = segmentIdx === d.segments.length - 1
              // 下の区画との間に隙間を空けて境界を見せる(最下段は軸に接するので空けない)
              const gap = segmentIdx === 0 ? 0 : SEGMENT_GAP
              const height = bottomY - topY - gap
              return (
                <path
                  key={segment.blogType}
                  d={barPath(x, topY, barWidth, height, isTop ? BAR_RADIUS : 0)}
                  fill={getBlogColor(segment.blogType)}
                  className={isHovered ? styles.barHovered : styles.bar}
                />
              )
            })}
            <text x={bandX + bandWidth / 2} y={MARGIN.top + innerHeight + 16} textAnchor='middle' className={styles.axisLabel}>
              {d.year}
            </text>
          </g>
        )
      })}

      {hovered !== null && hoveredIndex !== null && (() => {
        const bandX = MARGIN.left + hoveredIndex * bandWidth
        const barCenterX = bandX + bandWidth / 2
        const titleLabel = `${hovered.year}年: ${hovered.total}件`
        const rowLabels = [...hovered.segments].reverse().map((segment) => ({ ...segment, label: `${segment.blogType} ${segment.count}` }))
        const longest = Math.max(titleLabel.length, ...rowLabels.map((row) => row.label.length + 2))
        const tooltipWidth = Math.max(70, 24 + longest * 8)
        const rowHeight = 16
        const tooltipHeight = 26 + rowLabels.length * rowHeight
        // 積み上げ棒の上に重ならないよう、棒の右隣に出す。右端で収まらなければ左隣に回す
        const rightX = barCenterX + barWidth / 2 + 8
        const leftX = barCenterX - barWidth / 2 - 8 - tooltipWidth
        const tooltipX = Math.max(MARGIN.left, rightX + tooltipWidth <= CHART_WIDTH - MARGIN.right ? rightX : leftX)
        const tooltipY = Math.max(2, Math.min(valueToY(hovered.total) - 8, MARGIN.top + innerHeight - tooltipHeight))
        return (
          <g className={styles.tooltip}>
            <rect x={tooltipX} y={tooltipY} width={tooltipWidth} height={tooltipHeight} rx={6} className={styles.tooltipBg} />
            <text x={tooltipX + 12} y={tooltipY + 13} dominantBaseline='middle' className={styles.tooltipText}>
              {titleLabel}
            </text>
            {rowLabels.map((row, rowIdx) => {
              const rowY = tooltipY + 26 + rowIdx * rowHeight
              return (
                <g key={row.blogType}>
                  <circle cx={tooltipX + 15} cy={rowY} r={4} fill={getBlogColor(row.blogType)} stroke='rgba(255, 255, 255, 0.4)' strokeWidth={1} />
                  <text x={tooltipX + 25} y={rowY} dominantBaseline='middle' className={styles.tooltipRowText}>
                    {row.label}
                  </text>
                </g>
              )
            })}
          </g>
        )
      })()}
    </svg>
  )
}
