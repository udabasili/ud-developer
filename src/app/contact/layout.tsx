import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { Layout } from '@/components/Layout';

export async function generateMetadata({ params }: { params: { slug: string } }) {

  return {
    title: " Contact | UDDeveloper - Expert Web Development Services | Modern & Scalable Solutions",
    description: 'Contact UdDeveloper for professional freelance web development services in the US and Canada. Get in touch with Udendu for modern, responsive websites, custom web solutions, and expert development support. Reach out today to discuss your project and receive a quote.',
    url: "https://www.udabasili.online/contact",
    alternates: {
      canonical: "https://www.udabasili.online/contact"
    },
    openGraph: {
      title: " Contact | Udendu Portfolio | Expert Freelance Web Developer",
      description: 'Contact UdDeveloper for professional freelance web development services in the US and Canada. Get in touch with Udendu for modern, responsive websites, custom web solutions, and expert development support. Reach out today to discuss your project and receive a quote.',
    },
  }
}

export default function WebsitesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "description": "Contact UdDeveloper for professional freelance web development services in the US and Canada. Get in touch with Udendu for modern, responsive websites, custom web solutions, and expert development support. Reach out today to discuss your project and receive a quote.",
    "url": "https://www.udabasili.online/contact",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-506-874-1776",
      "contactType": "Contact",
      "areaServed": [
        "US",
        "Canada"
      ],
      "availableLanguage": [
        "English",
      ],
      "hoursAvailable": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/uddeveloper?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    ]
  }


  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToastContainer />
      {children}
    </Layout>
  );
}
