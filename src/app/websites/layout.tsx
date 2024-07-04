import { Layout } from '@/components/Layout';
import { headers } from 'next/headers';


export async function generateMetadata({ params }: { params: { slug: string } }) {

  return {
    title: " Websites | Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",
    description: "See great samples of great websites with Udendu Abasili, your expert freelance developer for web and mobile solutions in the US and Canada. Specializing in UI/UX design and SEO optimization, I craft engaging digital experiences that elevate your online presence and drive success. Let's collaborate to turn your vision into reality",
    url: "https://www.udabasili.online/websites",
    alternates: {
      canonical: "https://www.udabasili.online/websites"
    },
    openGraph: {
      title: " Websites | Udendu Portfolio | Expert Freelance Web Developer",
      description: "See great samples of great websites with Udendu Abasili, your expert freelance developer for web and mobile solutions in the US and Canada. Specializing in UI/UX design and SEO optimization, I craft engaging digital experiences that elevate your online presence and drive success. Let's collaborate to turn your vision into reality",
      url: "https://www.udabasili.online/websites",
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

  return (
    <Layout>
      {children}
    </Layout>
  );
}
