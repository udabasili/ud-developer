import { portfolioDetails } from '@/feature/projects/components/portfolioDetails';
import { ResolvingMetadata, Metadata } from 'next';

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata({ params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {


    let title = "";
    let description = "";

    // If the slug is not provided, return the default metadata
    if (!params.slug) {
        title = " Services | UdDeveloper - Professional Web Development Services in Canada and the US";
        description = 'Discover the comprehensive web development services offered by UdDeveloper. We specialize in creating modern, responsive, and SEO-friendly websites for businesses in the US and Canada. Partner with Udendu to enhance your online presence with our expert web development solutions tailored to your unique needs.';
    } else {
        // Find the project with the given slug
        const url = decodeURIComponent(params.slug);
        const portfolioData = portfolioDetails.find((project) => project['Project name'].toLowerCase() === url);

        // If the project is not found, return the default metadata
        if (!portfolioData) {
            title = " Services | UdDeveloper - Professional Web Development Services in Canada and the US";
            description = 'Discover the comprehensive web development services offered by UdDeveloper. We specialize in creating modern, responsive, and SEO-friendly websites for businesses in the US and Canada. Partner with Udendu to enhance your online presence with our expert web development solutions tailored to your unique needs.';
        } else {
            title = `${portfolioData['Project name']} | Udendu Portfolio | Expert Freelance Web Developer`;
            description = portfolioData.Summary;
        }
    }


    return {
        title: `${title} | UdDeveloper - Professional Web Development Services in Canada and the US`,

        openGraph: {
            title: `${title}| Udendu Portfolio | Expert Freelance Web Developer`,
            description: "Udendu Abasili: Your Trusted Freelance Web Developer for US & Canada. With a passion for crafting dynamic, user-centric websites, I bring expertise in JavaScript, C#, Java, Node.js, and more. Let's collaborate to bring your digital vision to life",
        },
    }
}


export default function WebsitesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
