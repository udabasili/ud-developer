
"use client"
import { ParsedUrlQuery } from 'querystring';

import { useEffect } from 'react';

import { CustomPageHeader } from '@/components/Elements/Headers';
import { portfolioDetails } from '@/feature/projects';
import { Layout } from '@/components/Layout';
import { PortfolioDetailsContainer, Summary, Description, MainImage, Goal, WebStack, ThoughtProcess, LessonLearnt } from '@/feature/portfolios-details';
import { notFound } from 'next/navigation';
import { Video } from '@/components/Elements';


type PortfolioDetail = typeof portfolioDetails[0];

interface CtxCustom extends ParsedUrlQuery {
    pid: string;
}



export default function PortfolioDetail({ params }: { params: { slug: string } }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { slug } = params;

    if (!slug) {
        return notFound()
    }
    const url = decodeURIComponent(slug);
    const portfolioData = portfolioDetails.find((project) => project['Project name'].toLowerCase() === url);

    return (
        portfolioData ? (
            < >
                {Object.keys(portfolioData).length > 0 ? (
                    <>
                        <CustomPageHeader
                            title={portfolioData['Project name']}
                            link={`projects*${portfolioData['Project name']}`}
                            path={`projects/${slug}`}
                        />
                        <PortfolioDetailsContainer>
                            <Summary
                                title={portfolioData['Project name']}
                                github={portfolioData['GitHub Link']}
                                link={portfolioData['Project Link']}
                                technologies={portfolioData['Tech Stack']}
                            />
                            <Description text={portfolioData.Summary} />

                            {
                                portfolioData['Video'] ? (
                                    <Video src={portfolioData['Video']} />
                                ) : <MainImage images={portfolioData['Screenshots or animated GIFs']} />
                            }
                            <Goal text={portfolioData['Project Purpose and Goal']} />
                            <WebStack
                                tech={portfolioData['Tech Stack']}
                                info={portfolioData['Web Stack and Explanation']}
                            />
                            {portfolioData['Problems and Thought Process'] ? (
                                <ThoughtProcess text={portfolioData['Problems and Thought Process']} />
                            ) : null}

                            <LessonLearnt text={portfolioData['Lesson Learned']} />
                        </PortfolioDetailsContainer>
                    </>
                ) : null}
            </>
        ) : notFound()
    )
}


