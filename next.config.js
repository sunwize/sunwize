const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'i.ibb.co', 'cdn.iconscout.com', 'seeklogo.com'],
  }
}
