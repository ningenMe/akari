module.exports = {
  output: 'standalone',
  transpilePackages: [
    '@mui/material',
    '@mui/system',
    '@mui/icons-material',
    '@mui/styles'
  ],
  env: {
    BUILD_TIME: process.env.BUILD_TIME || Date.now().toString()
  },
  images: {
    // 最適化済み画像のデフォルトTTL(60秒)だと再訪時にほぼ毎回再検証になるため延ばす
    minimumCacheTTL: 60 * 60 * 24 * 30
  },
  async headers () {
    return [
      {
        source: '/:path*',
        headers: [
          // includeSubDomains/preloadは他サブドメインへの影響と取り消しの難しさから付けない
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' }
        ]
      },
      {
        // public配下の画像はファイル名にハッシュが付かないので、immutableにはせず1日キャッシュにする
        source: '/:all*(png|jpg|jpeg|svg|ico|webp|gif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' }
        ]
      }
    ]
  }
}
