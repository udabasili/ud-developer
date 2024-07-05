import { Layout } from '@/components/Layout';
import Head from 'next/head';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: " Services | UdDeveloper - Professional Web Development Services in Canada and the US",
    description: 'Discover the comprehensive web development services offered by UdDeveloper. We specialize in creating modern, responsive, and SEO-friendly websites for businesses in the US and Canada. Partner with Udendu to enhance your online presence with our expert web development solutions tailored to your unique needs.',
    openGraph: {
      title: " Services | UdDeveloper - Professional Web Development Services in Canada and the US",
      description: 'Discover the comprehensive web development services offered by UdDeveloper. We specialize in creating modern, responsive, and SEO-friendly websites for businesses in the US and Canada. Partner with Udendu to enhance your online presence with our expert web development solutions tailored to your unique needs.',
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
