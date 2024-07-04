import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import { Layout } from '@/components/Layout';



export async function generateMetadata({ params }: { params: { slug: string } }) {


  return {
    title: " Contact | Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",
    description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life",
    url: "https://www.udabasili.online/contact",
    alternates: {
      canonical: "https://www.udabasili.online/contact"
    },
    openGraph: {
      title: " Contact | Udendu Portfolio | Expert Freelance Web Developer",
      description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life",
      url: "https://www.udabasili.online/contact",
      site_name: "Udendu Portfolio",
      locale: "en_US",
      type: "website",
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
    "description": "Get in touch with us for any inquiries or questions.",
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
      "https://www.linkedin.com/in/udenduabasili/"
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
