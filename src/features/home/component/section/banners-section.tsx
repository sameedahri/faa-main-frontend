import { Button } from '@/shared/components/ui/button'
import { home } from '@/shared/constants/images'
import Image from 'next/image'
import React from 'react'

function BannersSection() {
    return (
        <div className="container py-7">
            <div className='bg-background rounded-md flex items-center justify-center'>
                <div className='p-7 flex flex-col gap-1 items-start w-full'>
                    <h2 className='text-lg font-medium'>Discover properties by Agents, Agencies or Developers</h2>
                    <p className='text-sm text-muted-foreground'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, ratione.</p>
                    <Button
                        className='mt-3'
                    >
                        Explore Now
                    </Button>
                </div>
                <div 
                    className=''
                    style={{
                        clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
                    }}
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