import Image from 'next/image';
import React from 'react';

import { SectionHeader } from '@/components/Elements/Headers';

import { ProjectSummaryWrapper } from './index.styled';

const images = [
    '/designs/cars.webp',
    '/designs/Culinary.webp',
    '/designs/woman.webp',
    '/designs/dress.webp',
    '/designs/peace.webp',
];

export const ProjectSummary = () => {
    return (
        <ProjectSummaryWrapper id="designs">
            <div className="u-center-text u-margin-bottom-big">
                <SectionHeader title="Samples" subText='Just a few of my works' />
            </div>
            <div className="gallery">
                {images.map((image, index) => (
                    <figure className={`gallery__item gallery__item--${index + 1}`} key={index + 1} >
                        <Image
                            src={image}
                            alt={`gallery__item--${index + 1}`}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					33vw"
                        />
                    </figure>
                ))}
            </div>
        </ProjectSummaryWrapper>
    );
};
