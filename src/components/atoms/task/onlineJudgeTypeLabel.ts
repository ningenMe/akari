import { OnlineJudgeType } from 'interfaces/OnlineJudgeType'

export const onlineJudgeTypeLabel = (onlineJudgeType: OnlineJudgeType): string => {
  if (onlineJudgeType === 'YUKICODER') return 'yukicoder'
  if (onlineJudgeType === 'AOJ') return 'AOJ'
  if (onlineJudgeType === 'HACKER_RANK') return 'HackerRank'
  return onlineJudgeType
}
