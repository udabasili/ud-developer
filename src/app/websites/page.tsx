"use client"

import { CustomPageHeader, TabComponent } from '@/components/Elements';
import { Layout } from '@/components/Layout';
import { WebDevelopment, WebDesign } from '@/feature/websites';
import { useState } from 'react';



export default function Projects() {

    const tabs = ['Web Development', 'Web Design'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <>
            <CustomPageHeader title={activeTab} link={'websites'} path={'websites'} />
            <TabComponent tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
            {
                activeTab === 'Web Development' ? (
                    <WebDevelopment />
                ) : (
                    <WebDesign />
                )

            }
        </>
    );
}
