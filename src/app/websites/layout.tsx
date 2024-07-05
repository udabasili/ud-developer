import { Layout } from '@/components/Layout';

export async function generateMetadata({ params }: { params: { slug: string } }) {

  return {
    title: " Websites | UDDeveloper - Professional Web Development Services in Canada and the US",
    description: "Discover the innovative web development projects by UdDeveloper. We specialize in creating modern, responsive websites for businesses in the US and Canada. View our portfolio and see how we can help elevate your online presence with custom web solutions",

    openGraph: {
      title: " Websites | UDDeveloper - Professional Web Development Services in Canada and the US",
      description: "Discover the innovative web development projects by UdDeveloper. We specialize in creating modern, responsive websites for businesses in the US and Canada. View our portfolio and see how we can help elevate your online presence with custom web solutions",
    },
  }
}

export default function WebsitesLayout({
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
