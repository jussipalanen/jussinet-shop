/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            'images.unsplash.com', 
            'plus.unsplash.com', 
            'jussinet.dev.localhost'
        ],
    },
    async rewrites() {
        return [
            {
                source: '/products',
                destination: '/category'
            },
            {
                source: '/products/[...slug]',
                destination: '/category/[...slug]'
            },
        ]
    }
}

module.exports = nextConfig
