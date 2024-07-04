/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	images: {
		domains: [
			'images.unsplash.com',
			'www.random.imagecdn.app',
			'www.freepngimg.com',
			'www.nicepng.com',
			'pngimg.com',
			'w7.pngwing.com',
			'user-images.githubusercontent.com',
			'dummyimage.com',
		],
	},
};

export default nextConfig;
