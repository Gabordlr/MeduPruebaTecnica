/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'streamcoimg-a.akamaihd.net',
        },
        {//https://www.altavod.com/assets/images/poster-placeholder.png
          protocol: 'https',
          hostname: 'www.altavod.com',
        }
      ],
    },
}

