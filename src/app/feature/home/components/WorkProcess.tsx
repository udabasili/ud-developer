import React from 'react'
import { GridItem, GridRow, WorkProcessCard, WorkProcessWrapper } from './index.styled'
import { Header3, SectionHeader } from '@/components/Elements'

const workProcessData = [
    {
        title: 'Research',
        description: 'I do a thorough research on the project to understand the requirements and the target audience.',
    },
    {
        title: 'Design',
        description: 'I design the project with the information gathered from the research.',
    },
    {
        title: 'Development',
        description: 'I develop the project using the best technologies and frameworks.',
    },
    {
        title: 'Testing',
        description: 'I test the project to ensure that it meets the requirements and is bug free.',
    },

]
export const WorkProcess = () => {
    return (
        <WorkProcessWrapper>
            <SectionHeader title="Work Process" subText="How I work" />
            <GridRow cols={4} className="gap-x-3">

                {workProcessData.map((data, index) => (
                    <GridItem key={index}>
                        <WorkProcessCard >
                            <Header3 className="text-primary u-margin-bottom-small">{data.title}</Header3>
                            <p className='text-white'>{data.description}</p>
                        </WorkProcessCard>
                    </GridItem>
                ))}
            </GridRow>
        </WorkProcessWrapper>
    )
}
