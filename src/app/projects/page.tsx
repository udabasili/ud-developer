"use client"
import { CustomPageHeader } from '@/components/Elements';
import { Project } from '@/feature/projects';


export default function Projects() {
    return (
        <>
            <CustomPageHeader title={'Projects'} link={'projects'} path={'projects'} />
            <Project />
        </>
    );
}
