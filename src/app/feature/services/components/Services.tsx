import React from 'react'
import { ServiceProps } from '../types'
import { ServicesWrapper } from './index.styled'
import { ServiceCard } from './ServiceCard'

type ServicesProps = {
    serviceList: Array<ServiceProps>
}

export const Services = ({ serviceList }: ServicesProps) => {
    return (
        <ServicesWrapper>
            {serviceList.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </ServicesWrapper>
    )
}
