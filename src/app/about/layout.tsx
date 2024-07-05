import { Layout } from '@/components/Layout';

export async function generateMetadata({ params }: { params: { slug: string } }) {

  return {
    title: " About | UdDeveloper - Professional Web Development Services in Canada and the US",
    description: 'Discover UdDeveloper, your go-to freelance web development business. Specializing in modern, responsive websites, we cater to clients across the US and Canada. Get top-tier web development services from Udendu, your expert developer for custom solutions and online success.',

    openGraph: {
      title: " About | UDDeveloper - Expert Web Development Services | Modern & Scalable Solutions",
      description: 'Discover UdDeveloper, your go-to freelance web development business. Specializing in modern, responsive websites, we cater to clients across the US and Canada. Get top-tier web development services from Udendu, your expert developer for custom solutions and online success.',
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
