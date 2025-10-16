'use client'

import SectionHeading from '@/shared/components/section-heading'
import { Button } from '@/shared/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'

const MissionSwiper = dynamic(() => import('./missions-swiper'), {
    ssr: false,
    loading() {
        return (
            <div className='grid grid-cols-4 gap-5'>
                <Skeleton className='aspect-video my-2 p-7' />
                <Skeleton className='aspect-video my-2 p-7' />
                <Skeleton className='aspect-video my-2 p-7' />
                <Skeleton className='aspect-video my-2 p-7' />
            </div>
        )
    },
})

function Missions() {
    const nextButtonRef = useRef<HTMLButtonElement>(null);
    const prevButtonRef = useRef<HTMLButtonElement>(null);

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
            <MissionSwiper 
                nextButtonRef={nextButtonRef} 
                prevButtonRef={prevButtonRef} 
            />
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