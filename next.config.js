/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'icons.vineelsai.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'vineelsai.com',
				pathname: '/**',
			},
		],
		dangerouslyAllowSVG: true,
	},
	swcMinify: true,
}

export default nextConfig
