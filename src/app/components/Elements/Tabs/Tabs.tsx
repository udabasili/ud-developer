import React, { useState } from 'react';
import { Container } from './Tabs.styled';



type TabComponentProps<T extends string> = {
    tabs: T[];
    activeTab: T;
    onTabChange: (tab: T) => void;
}

export const TabComponent = <T extends string>({ tabs, activeTab, onTabChange }: TabComponentProps<T>) => {


    return (
        <Container className="flex justify-center col-[full-start/full-end] my-5" cols={tabs.length}>
            {
                tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`py-2 px-40 
                        font-title border mobile:px-1
                        ${activeTab === tab ? 'bg-primary text-white' : 'bg-gray-200'
                            }`}
                        onClick={() => onTabChange(tab)}
                    >
                        {tab}
                    </button>
                ))
            }

        </Container>
    );
};

export default TabComponent;
