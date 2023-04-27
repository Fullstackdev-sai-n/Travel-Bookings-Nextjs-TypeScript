/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async headers() {
		return [
			{
				source: "/favicon.ico",
				headers: [
					{
						key: "Content-Type",
						value: "image/svg+xml",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
