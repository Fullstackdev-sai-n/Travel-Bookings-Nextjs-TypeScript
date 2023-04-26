/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async headers() {
		return [
			{
				// add this code to include the custom SVG favicon
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
