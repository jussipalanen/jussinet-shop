/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'plus.unsplash.com'],
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
