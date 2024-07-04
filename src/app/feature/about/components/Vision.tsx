import Image from 'next/image';
import React from 'react';

import { Header2 } from '@/components/Elements/Headers';
import { AboutMePhoto, AboutSection, AboutMeSummaryText, GridItem, GridRow } from './index.styled';

export const Vision = () => {

    return (
        <AboutSection>
            <GridRow cols={2} className="gap-x-5">
                <GridItem className="pb-0">
                    <AboutMeSummaryText className="">

                        <Header2 className="u-margin-bottom-medium">Why Choose Us?</Header2>
                        <ul className="max-w-md space-y-1 list-inside u-margin-bottom-medium">
                            <li className="mb-4">
                                <strong className="">Experience & Expertise: </strong>
                                <span className="ml-2">We have years of experience in the industry and a proven track record of success.</span>
                            </li>
                            <li className="mb-4">
                                <strong className="">Client-Centric Approach: </strong>
                                <span className="ml-2"> Your satisfaction is our priority. We work closely with you to understand your needs and deliver results that exceed expectations.</span>
                            </li>
                            <li className="mb-4">
                                <strong className="">Innovative Solutions: </strong>
                                <span className="ml-2">We stay ahead of the curve with the latest technologies and trends to provide innovative solutions that drive results.</span>
                            </li>
                            <li className="mb-4">
                                <strong className="">Affordable Pricing: </strong>
                                <span className="ml-2">We offer competitive pricing to fit your budget without compromising on quality.</span>
                            </li>

                        </ul>

                    </AboutMeSummaryText>

                </GridItem>
                <GridItem>
                    <AboutMeSummaryText >
                        <Header2 className="u-margin-bottom-medium">Our Process</Header2>
                        <ul className="max-w-md space-y-1 list-inside">
                            <li className="mb-4">
                                <strong className="">Consultation: </strong>
                                <span className="ml-2">We start by understanding your goals and requirements to create a customized plan that meets your needs.</span>
                            </li>
                            <li className="mb-4">
                                <strong className="">Design & Development: </strong>
                                <span className="ml-2">Our team of experts will design and develop a website that reflects your brand and engages your audience.</span>
                            </li>
                            <li className="mb-4">
                                <strong className="">Testing & Launch: </strong>
                                <span className="ml-2">We rigorously test your website to ensure it meets our high standards before launching it to the public.</span>
                            </li>
                            <li className="mb-4">
                                <strong className="">Support & Maintenance: </strong>
                                <span className="ml-2">We provide ongoing support and maintenance to keep your website running smoothly and up-to-date.</span>
                            </li>
                        </ul>
                    </AboutMeSummaryText>
                </GridItem>
            </GridRow>


        </AboutSection>
    );
};
