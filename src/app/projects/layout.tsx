
import { Layout } from '@/components/Layout';

export async function generateMetadata() {


  return {
    title: " Projects | Expert Freelance Web Developer | JavaScript, C#, Java, Node.js | Canada & US",
    description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life",
    url: "https://www.udabasili.online/projects",
    alternates: {
      canonical: "https://www.udabasili.online/projects"
    },
    openGraph: {
      title: " Projects | Udendu Portfolio | Expert Freelance Web Developer",
      description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life",
      url: "https://www.udabasili.online/projects",
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
      {children}
    </Layout>
  );
}
