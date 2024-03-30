/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/400/**",
      },
    ],
    domains: ['placehold.co', 'picsum.photos', 'thelantern.s3.amazonaws.com']
  },
  reactStrictMode: true,
};
