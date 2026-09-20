// 本番のみ。開発時はReact Refreshがevalを使うためCSPで塞がないようにする。
// style-srcの'unsafe-inline'はMUI(emotion)とnext/imageのstyle属性のために必要。
// GA4(gtag.js)とGoogle Fontsだけを外部として許可している。
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://www.google-analytics.com https://*.googletagmanager.com https://*.google-analytics.com https://*.g.doubleclick.net https://www.google.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'"
].join('; ')

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
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          // frame-ancestorsに未対応の古いブラウザ向け
          { key: 'X-Frame-Options', value: 'DENY' },
          ...(process.env.NODE_ENV === 'production'
            ? [{ key: 'Content-Security-Policy', value: contentSecurityPolicy }]
            : [])
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
