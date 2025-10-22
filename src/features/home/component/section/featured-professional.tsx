"use client"

import SectionHeading from '@/shared/components/section-heading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs'
import React, { useState } from 'react'
import FeaturedAgentsTab from './featured-agents-tab'
import { FEATURED_PROFESSIONALS_TAB } from '@/shared/constants/tabs'
import FeaturedAgenciesTab from './featured-agencies-tab'
import { FeaturedTabType } from '@/shared/types/tabs.type'
import FeatureServicesCarousel from './featured-services-carousel'
import { cn } from '@/shared/lib/utils'
import FeaturedEventsCarousel from './featured-events-carousel'


function FeaturedProfessional() {

    const [activeTab, setActiveTab] = useState<FeaturedTabType>(FEATURED_PROFESSIONALS_TAB.AGENTS.value);

    const handleTabChange = (value: FeaturedTabType) => {
        setActiveTab(value);
    }

    return (
        // TODO: Remove this pb-40 after implementing
        <div className='container flex flex-col gap-5 pb-40'>
            <SectionHeading 
                title={`Featured ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
                description="Discover verified professionals across multiple industries, all in one platform"
                wrapperClassName='text-center items-center'
            />
            <Tabs 
                defaultValue={activeTab} 
                onValueChange={(value) => handleTabChange(value as FeaturedTabType)}
                className="gap-6"
            >
                <TabsList className={cn(
                    'items-center justify-center self-center',
                    // 'bg-linear-to-b from-primary/5 to-transparent bg-transparent border border-primary/5',
                    'bg-primary/5',
                )}>
                    {Object.values(FEATURED_PROFESSIONALS_TAB).map((tab) => (
                        <TabsTrigger 
                            key={tab.value} 
                            value={tab.value}
                            className='data-[state=active]:text-primary text-muted-foreground/90'
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent 
                    value={FEATURED_PROFESSIONALS_TAB.AGENTS.value}
                >
                    <FeaturedAgentsTab />
                </TabsContent>
                <TabsContent value={FEATURED_PROFESSIONALS_TAB.AGENCIES.value}>
                    <FeaturedAgenciesTab />
                </TabsContent>
                <TabsContent value={FEATURED_PROFESSIONALS_TAB.SERVICES.value}>
                    <FeatureServicesCarousel />
                </TabsContent>
                <TabsContent value={FEATURED_PROFESSIONALS_TAB.EVENTS.value}>
                    <FeaturedEventsCarousel />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default FeaturedProfessional