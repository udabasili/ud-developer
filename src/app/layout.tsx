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
  title: " Home | UDDeveloper - Expert Web Development Services | Modern & Scalable Solutions",
  description: `
      UD Developer offers professional web development services, specializing in modern, scalable solutions. Transforming ideas into high-performance websites and applications. Contact Uddeveloper for a seamless digital experience.
`,
  applicationName: 'Next.js',
  alternates: {
    canonical: 'https://www.uddeveloper.com/',
  },
  referrer: 'origin-when-cross-origin',
  keywords: ["Freelance Web Developer Canada", "Freelance Web Developer United States", "JavaScript Developer Canada", "JavaScript Developer United States", "C# Developer Canada", "C# Developer United States", "Java Developer Canada", "Java Developer United States", "Node.js Developer Canada", "Node.js Developer United States"],
  authors: [{ name: 'Udendu Abasili', url: 'https://www.uddeveloper.com/' }],
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
    title: ' Home | UDDeveloper - Expert Web Development Services | Modern & Scalable Solutions',
    description: 'UD Developer offers professional web development services, specializing in modern, scalable solutions. Transforming ideas into high-performance websites and applications. Contact Uddeveloper for a seamless digital experience.',
    url: 'https://www.uddeveloper.com/',
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
