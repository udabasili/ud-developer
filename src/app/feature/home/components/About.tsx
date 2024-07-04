import React from 'react'
import { AboutContent, AboutImage, AboutWrapper, GridItem, GridRow } from './index.styled'
import { Header3, Header6 } from '@/components/Elements'
import Image from 'next/image';


export const About = () => {
    return (
        <AboutWrapper>
            <GridRow cols={2} className="">
                <GridItem>
                    <AboutImage>
                        <figure className="img-1  " data-aos="fade-right">
                            <Image src="/home/about.webp"
                                alt="about"
                                fill
                                className='img-1'
                                priority
                                sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					33vw"/>
                        </figure>

                    </AboutImage>
                </GridItem>
                <GridItem>
                    <AboutContent>
                        <Header6 className="u-margin-bottom-small text-primary">About Ud Developers</Header6>
                        <Header3 className="u-margin-bottom-medium  capitalize">here to bring your concepts to life</Header3>
                        <div>
                            <p >
                                Welcome to Ud Developers! Ud Developers is a dedicated freelance web Developers based in North America. Specializing in responsive and user-friendly website design, Ud Developers brings extensive experience in CSS, web security, and modern web technologies to every project
                            </p>
                            <p className="pt-6">
                                The mission of Ud Developers is to bring your vision to life through innovative and effective web solutions. Whether you&apos;re a small business in the United States or Canada looking to establish an online presence or an established brand needing a website redesign, Ud Developers is here to help
                            </p>
                        </div>

                    </AboutContent>
                </GridItem>

            </GridRow>
        </AboutWrapper>
    )
}
