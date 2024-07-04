import React from 'react'
import { ServiceCardContainer } from './index.styled'
import { Header3 } from '@/components/Elements';
import { ServiceProps } from '../types';




export const ServiceCard = ({ title, content, Icon }: ServiceProps) => {
    return (
        <ServiceCardContainer>
            <Icon className="text-black text-6xl" />
            <Header3 >{title}</Header3>
            <ul>
                {content ? content.split(',').map((item, index) => (
                    <li key={index}>{item}</li>
                )) : null}
            </ul>

        </ServiceCardContainer>
    )
}
