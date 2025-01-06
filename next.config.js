/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['s3-ap-northeast-1.amazonaws.com','picsum.photos','bandaihobby.tw','i.ebayimg.com'],
  },
  output: 'standalone',
}

module.exports = nextConfig