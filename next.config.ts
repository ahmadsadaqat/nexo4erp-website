import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['www.paypalobjects.com', 'www.vectorlogo.zone', 'upload.wikimedia.org'],
    // Alternatively, for more granular control you can use remotePatterns:
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "www.paypalobjects.com",
    //     pathname: "/**",
    //   },
    // ],
  },
}

export default nextConfig
