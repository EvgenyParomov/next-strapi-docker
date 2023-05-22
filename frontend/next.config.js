/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${process.env.API_URL}/uploads/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
