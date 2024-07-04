import { Layout } from '@/components/Layout';

export async function generateMetadata({ params }: { params: { slug: string } }) {

  return {
    title: " About | UDDeveloper - Expert Web Development Services | Modern & Scalable Solutions",
    description: `
      UDDeveloper offers professional web development services, specializing in modern, scalable solutions. Transforming ideas into high-performance websites and applications. Contact Uddeveloper for a seamless digital experience.
`,
    url: "https://www.uddeveloper.com/about",
    alternates: {
      canonical: "https://www.uddeveloper.com/about"
    },
    openGraph: {
      title: " About | UDDeveloper - Expert Web Development Services | Modern & Scalable Solutions",
      description: "UDDeveloper offers professional web development services, specializing in modern, scalable solutions. Transforming ideas into high-performance websites and applications. Contact Uddeveloper for a seamless digital experience.",
      url: "https://www.uddeveloper.com/about",
      site_name: "UDDeveloper",
      locale: "en_US",
      type: "website",
    },
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
