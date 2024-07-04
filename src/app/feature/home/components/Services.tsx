import React from 'react'
import { GridItem, GridRow, ServicesCard, ServicesContent, ServicesHeading, ServicesWrapper } from './index.styled'
import { Header6, Header3, Button } from '@/components/Elements'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from 'next/image';
import { servicesData } from '@/feature/services';
import Link from 'next/link';


type Services = {
    title: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    image: string;
}

export const Services = () => {
    return (
        <ServicesWrapper>
            <GridRow cols={3} className="gap-x-4">
                <GridItem className='bg-background'>
                    <ServicesHeading>
                        <Header6 className="u-margin-bottom-small text-primary flex">
                            <MdKeyboardDoubleArrowRight />
                            <span className="u-margin-left-small">Services Offered</span>
                        </Header6>
                        <Header3 className="u-margin-bottom-medium capitalize">here to bring your concepts to life</Header3>
                        <p className="mb-4">
                            At Ud Developers, we offer comprehensive web development services designed to meet the diverse needs of businesses across North America. With a focus on innovation and quality, we leverage our expertise in CSS, web security, and cutting-edge technologies to deliver exceptional digital solutions
                        </p>
                        <Button size="md" variant="primary">
                            <Link href="/services">View All Services</Link>
                        </Button>
                    </ServicesHeading>
                </GridItem>
                <GridItem className='col-span-2'>
                    <ServicesContent>
                        {
                            servicesData.map((service, index) => (
                                <ServicesCard key={index}>
                                    <Header3 className="u-margin-bottom-medium capitalize">{service.title}</Header3>
                                    <figure className="img relative">
                                        <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					33vw"/>

                                    </figure>
                                </ServicesCard>
                            ))
                        }
                    </ServicesContent>

                </GridItem>
            </GridRow>
        </ServicesWrapper>
    )
}
