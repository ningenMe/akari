/**
 * ビルド時刻を日本時間でフォーマットする
 * @param buildTime - ビルド時刻のタイムスタンプ（ミリ秒）またはISO 8601文字列
 * @returns フォーマットされた日時文字列 "YYYY/MM/DD HH:mm"
 */
export const formatBuildTime = (buildTime: string): string => {
  // ISO 8601形式（GitHub Actions）または数値文字列（ローカル）を処理
  const date = isNaN(Number(buildTime)) 
    ? new Date(buildTime)  // ISO 8601形式
    : new Date(parseInt(buildTime, 10))  // タイムスタンプ
  
  return date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).replace(/\//g, '/')
}

/**
 * 現在のビルド時刻を取得
 * @returns ビルド時刻文字列、または取得失敗時は現在時刻
 */
export const getBuildTime = (): string => {
  return process.env.BUILD_TIME || Date.now().toString()
}