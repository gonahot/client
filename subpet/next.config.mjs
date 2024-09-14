/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 导出静态站点
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
