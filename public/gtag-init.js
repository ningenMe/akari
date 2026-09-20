// CSPでインラインスクリプトを許可しないため、_app.tsxのインラインから外出ししている。
// 計測IDは_app.tsxのGA_MEASUREMENT_IDと揃えること。
window.dataLayer = window.dataLayer || []
function gtag () { window.dataLayer.push(arguments) }
window.gtag = gtag
gtag('js', new Date())
gtag('config', 'G-J4EFBSZ2D4')
