import { CldImage } from 'next-cloudinary';
import { CardContainer } from './index.styled';
import { Header3 } from '@/components/Elements';
import Link from 'next/link';

type ProjectCardProps = {
    name: string;
    imageUrl: string;
    index: number;
    summary: string;
    link: string;
    github: string;
    open: () => void;
};


export const ProjectCard = (props: ProjectCardProps) => {
    const { name, imageUrl, index, summary, link, open, github } = props;


    const url = encodeURIComponent(name.toLowerCase());

    return (
        <CardContainer className="w-full h-max  relative py-10">
            <div className="preview__content ">
                <span className="index">{index + 1}</span>
                <Header3 className="self-center">{name}</Header3>
                <p className=" text-lg lg:text-xl">{summary}</p>
                <div className="flex col-start-2 text-sm lg:text-md links">
                    <a href={link} target="_blank" title="github" rel="noopener noreferrer">
                        {' '}
                        <span className="website font-title font-normal text-white text-center mr-5 ">Visit Website</span>
                    </a>
                    <Link href={`/projects/${url}`} title="github" rel="noopener noreferrer">
                        {' '}
                        <span className="detail font-title font-normal text-black text-center">Visit Details</span>
                    </Link>
                </div>
            </div>
        </CardContainer>
    );
};