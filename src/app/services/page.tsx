"use client"
import { CustomPageHeader } from '@/components/Elements';
import { Services, servicesData } from '@/feature/services';

export default function ServicePage() {
    return (
        <>
            <CustomPageHeader title={'Services '} link={'service'} path={'services'} />
            <Services serviceList={servicesData} />
        </>
    );
}
