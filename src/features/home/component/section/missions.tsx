'use client'

import SectionHeading from '@/shared/components/section-heading'
import { Button } from '@/shared/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { missions } from '@/shared/constants/mission'
import MissionCard from '@/shared/components/mission-card'

function Missions() {
    return (
        <div className='container flex flex-col gap-5 relative'>
            <div className='flex w-full justify-center'>
                <SectionHeading
                    title="Choose Your Mission"
                    description='Discover verified professionals across multiple industries, all in one platform'
                    descriptionClassName='text-center'
                    wrapperClassName='items-center'
                />
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {Array.from({ length: 8 }).map((_, index) => (
                    <MissionCard
                        key={missions[index].title}
                        image={missions[index].image}
                        title={missions[index].title}
                        upcoming={missions[index].upcoming}
                    />
                ))}
            </div>
            <div className='grid grid-cols-4 grid-rows-1 pt-0'>
                <Button
                    variant='outline'
                    asChild
                    className='col-span-full row-span-full w-[130px] self-center justify-self-center text-muted-foreground hover:text-foreground group'
                >
                    <Link
                        href={PAGE_ROUTES.MISSIONS}
                    >
                        View More
                        <ArrowUpRight />
                    </Link>
                </Button>
            </div>
        </div>
    )
}



export default Missions