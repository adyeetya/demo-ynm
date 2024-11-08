/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "yesnmore.s3.ap-south-1.amazonaws.com",
      "yesnmore.s3.amazonaws.com",
      "cdn.sanity.io",
      "via.placeholder.com",
    ],
  },
};

export default nextConfig;
