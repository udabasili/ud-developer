import React, { useState } from 'react';

import { Header2 } from '@/components/Elements/Headers';

import { ProjectSection } from './index.styled';
import { useDisclosure } from '@/hooks/useDisclosure';
import { ProjectCard } from './ProjectCard';
import { portfolioDetails } from './portfolioDetails';

const imagePaths = [
    'portfolio/sample-portfolio/whax7gbm8huekiqp0kz8',
    'portfolio/sample-portfolio/pjnynvdp79tqobygmzeb',
    'portfolio/sample-portfolio/gi5dk98hts8dkwymsm5m',
    'portfolio/sample-portfolio/whax7gbm8huekiqp0kz8',
    'portfolio/sample-portfolio/pjnynvdp79tqobygmzeb',
    'portfolio/sample-portfolio/gi5dk98hts8dkwymsm5m',
];


export const Project = () => {
    const { open, close, isOpen } = useDisclosure();
    const [name, setName] = useState('');

    function openModal(name: string) {
        setName(name);
        open();
    }
    return (
        <ProjectSection id="apps">
            <>
                {portfolioDetails
                    .map((item, index) => (
                        <ProjectCard
                            key={index}
                            summary={item.Summary}
                            name={item['Project name']}
                            imageUrl={imagePaths[index]}
                            link={item['Project Link']}
                            github={item['GitHub Link']}
                            index={index}
                            open={() => openModal(item['Project name'])}
                        />
                    ))}
            </>
        </ProjectSection>
    );
};
