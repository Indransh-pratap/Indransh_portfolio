/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },

      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },

      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;