import { Button } from '@/shared/components/ui/button'
import { home } from '@/shared/constants/images'
import Image from 'next/image'
import React from 'react'

function BannersSection() {
    return (
        <div className="container py-7">
            <div className='bg-background rounded-md flex justify-center overflow-hidden flex-col lg:flex-row'>
                <div className='p-5 flex flex-col gap-1.5 items-start w-full order-2 md:p-6 lg:p-7 lg:order-1'>
                    <h2 className='text-lg font-medium leading-snug'>Discover properties by Agents, Agencies or Developers</h2>
                    <p className='text-sm text-muted-foreground'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, ratione.</p>
                    <Button
                        className='mt-3'
                    >
                        Explore Now
                    </Button>
                </div>
                <div 
                    className='h-auto lg:[clip-path:polygon(10%_0,100%_0%,100%_100%,0_100%)] order-1 lg:order-2'
                    // style={{
                    //     clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
                    // }}
                >
                    <Image
                        src={home.bannerImage}
                        alt="Banner"
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default BannersSection