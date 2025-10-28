"use client"

import SectionHeading from '@/shared/components/section-heading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs'
import { Suspense, useState } from 'react'
import { FEATURED_PROFESSIONALS_TAB } from '@/shared/constants/tabs'
import { FeaturedTabType } from '@/shared/types/tabs.type'
import { cn } from '@/shared/lib/utils'
import Loader from '@/shared/components/ui/loader'
import FeatureServicesCarousel from './featured-services-carousel'
import FeaturedEventsCarousel from './featured-events-carousel'
import FeaturedAgentsCarousel from './featured-agents-carousel'
import FeaturedAgenciesCarousel from './featured-agencies-carousel'


function FeaturedProfessional() {

    const [activeTab, setActiveTab] = useState<FeaturedTabType>(FEATURED_PROFESSIONALS_TAB.AGENTS.value);

    const handleTabChange = (value: FeaturedTabType) => {
        setActiveTab(value);
    }

    return (
        // TODO: Remove this pb-40 after implementing
        <div className='container flex flex-col gap-6 pt-5 md:gap-6'>
            <SectionHeading
                title={`Featured ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
                description="Discover verified professionals across multiple industries, all in one platform"
                wrapperClassName='text-center items-center'
            />
            <Suspense
                fallback={<Loader className='my-5 mx-auto' />}
            >
                <Tabs
                    defaultValue={activeTab}
                    onValueChange={(value) => handleTabChange(value as FeaturedTabType)}
                    className="gap-6"
                >
                    <TabsList className={cn(
                        'items-center justify-center self-center',
                        'bg-background',
                    )}>
                        {Object.values(FEATURED_PROFESSIONALS_TAB).map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className={cn(
                                    'data-[state=active]:text-white data-[state=active]:bg-primary/70 text-muted-foreground/90',
                                    {
                                        "hidden md:block": tab.value === FEATURED_PROFESSIONALS_TAB.EVENTS.value,
                                    }
                                )}
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <TabsContent
                        value={FEATURED_PROFESSIONALS_TAB.AGENTS.value}
                    >
                        <FeaturedAgentsCarousel />
                    </TabsContent>
                    <TabsContent value={FEATURED_PROFESSIONALS_TAB.AGENCIES.value}>
                        <FeaturedAgenciesCarousel />
                    </TabsContent>
                    <TabsContent value={FEATURED_PROFESSIONALS_TAB.SERVICES.value}>
                        <FeatureServicesCarousel />
                    </TabsContent>
                    <TabsContent value={FEATURED_PROFESSIONALS_TAB.EVENTS.value}>
                        <FeaturedEventsCarousel />
                    </TabsContent>
                </Tabs>
            </Suspense>
        </div>
    )
}

export default FeaturedProfessional