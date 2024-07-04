import { Layout } from '@/components/Layout';
import Head from 'next/head';
import { headers } from 'next/headers';



export async function generateMetadata({ params }: { params: { slug: string } }) {


  return {
    title: " Services | Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",
    description: "Udendu Abasili, your expert freelance developer for web and mobile solutions in the US and Canada. Specializing in UI/UX design and SEO optimization, I craft engaging digital experiences that elevate your online presence and drive success. Let's collaborate to turn your vision into reality",
    url: "https://www.udabasili.online/services",
    alternates: {
      canonical: "https://www.udabasili.online/services"
    },
    openGraph: {
      title: " Services | Udendu Portfolio | Expert Freelance Web Developer",
      description: "Udendu Abasili, your expert freelance developer for web and mobile solutions in the US and Canada. Specializing in UI/UX design and SEO optimization, I craft engaging digital experiences that elevate your online presence and drive success. Let's collaborate to turn your vision into reality",
      url: "https://www.udabasili.online/services",
      site_name: "Udendu Portfolio",
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
      <Head>
        <link rel="canonical" href="https://www.udabasili.online/services" />
      </Head>
      {children}
    </Layout>
  );
}
