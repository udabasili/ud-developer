"use client"

import { CustomPageHeader } from '@/components/Elements';
import { Layout } from '@/components/Layout';
import { ContactForm, ContactSummary } from '@/feature/contact';

export default function Contact() {
    return (
        <>
            <CustomPageHeader title={'Reach me '} link={'contact'} path={'contact'} />
            <ContactSummary />
            <ContactForm />
        </>
    );
}
