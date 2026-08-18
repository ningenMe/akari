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
  }
}
