"use client"

import { CustomPageHeader } from '@/components/Elements';
import { AboutMeSummary, Vision } from '@/feature/about';


export default function About() {

    return (
        <>
            <CustomPageHeader title={'About Ud Developer'} link={'about'} path={'about'} />
            <AboutMeSummary />
            <Vision />
        </>
    );
}
