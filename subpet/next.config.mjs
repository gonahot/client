/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:  '/subpet' ,
    assetPrefix:  '/subpet' ,
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './image-loader.ts',
    },
};

export default nextConfig;
