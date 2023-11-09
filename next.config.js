/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ipfs.filebase.io",
            },
        ],
    },
};

module.exports = nextConfig;
