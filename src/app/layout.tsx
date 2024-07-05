import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import 'aos/dist/aos.css';
import StyledJsxRegistry from './lib/registry';
import { header, paragraph } from './constant/font';
import colors from './constant/color';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AOSInit } from './lib/aos';

export const metadata: Metadata = {
  title: 'Home | UDDeveloper - Professional Web Development Services in Canada and the US',
  description: 'UD Developer offers expert freelance web development services to clients in the US and Canada. Specializing in custom websites, e-commerce solutions, SEO optimization, and responsive design.',
  keywords: [
    "freelance web developer US Canada",
    "custom website development",
    "e-commerce solutions",
    "SEO optimization",
    "responsive web design",
    "front-end development",
    "back-end development",
    "WordPress developer",
    "e-commerce websites",
    "mobile-friendly websites",
    "website maintenance services",
    "hire freelance web developer",
    "PHP developer",
    "JavaScript developer",
    "HTML CSS development",
    "web application development",
  ],
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Udendu Abasili', url: 'https://www.udabasili.com/' }],
  creator: 'Udendu Abasili',
  publisher: 'Ud Developer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'android-chrome-192x192',
      url: '/android-chrome-192x192.png',

    },
  },
  openGraph: {
    title: 'UdDeveloper - Professional Web Development Services in Canada and the US',
    description: 'UD Developer offers expert freelance web development services to clients in the US and Canada. Specializing in custom websites, e-commerce solutions, SEO optimization, and responsive design.',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />

      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            --title: ${header.style.fontFamily};
						--content: ${paragraph.style.fontFamily};
						--primary: ${colors.primary};
            --background: ${colors.background};
            --paragraph: ${colors.paragraph};
            --secondary: ${colors.secondary};
}
                    `,
          }}
        />
        <meta name="trustpilot-one-time-domain-verification-id" content="ea1ac607-0dd2-4ae5-a8d7-1db1ae6da6c7" />

      </head>
      <body>
        <Analytics />
        <SpeedInsights />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
