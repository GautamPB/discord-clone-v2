/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.pixabay.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                pathname: '**',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
