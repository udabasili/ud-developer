import { Montserrat, Poppins } from 'next/font/google';

// header font
export const header = Montserrat({
	weight: ['900'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-title',
});

// paragraph font
export const paragraph = Poppins({
	weight: '400',
	subsets: ['latin'],
	style: ['normal', 'italic'],
	display: 'swap',
	variable: '--font-paragraph',
});
