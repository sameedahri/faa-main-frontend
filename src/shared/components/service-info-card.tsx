import React from 'react'
import { BaseCarouselCard } from '@/features/home/component/section/featured-base-carousel'
import { Badge } from '@/shared/components/ui/badge'
import { Button } from '@/shared/components/ui/button'
import { MapPin, Phone, UserRoundPen } from 'lucide-react'
import { Separator } from '@/shared/components/ui/separator'
import Link from 'next/link'

function ServiceInfoCard() {
    return (
        <BaseCarouselCard> 
            <div className='rounded-md overflow-hidden aspect-[6/5] bg-background-dark'>
                {/* <Image
                    src={agent.agentImage1}
                    alt="Agent Image"
                    className='object-cover'
                /> */}
            </div>
            <div className='flex items-center gap-0.5 text-xs text-foreground pt-3'>
                <MapPin stroke={"var(--primary)"} strokeWidth={1} className='w-4' />
                Dubai UAE
            </div>
            <div className='pt-2 flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <Link 
                        href={"#"}
                        className='text-lg font-semibold leading-tight hover:text-primary'
                    >
                        Consultation and needs assessment
                    </Link>
                    <p className='text-muted-foreground text-sm'>
                        Tailored investment advice to help you find high-yield properties and build a strong real estate portfolio.
                    </p>
                </div>

                <div className="flex gap-2">
                    <Badge
                        variant={"muted"}
                        className='rounded-[4px] shadow-sm bg-transparent h-6'
                    >
                        Real Estate Consultant
                    </Badge>
                </div>

                <div>
                    <h2 className='font-medium text-foreground/90 text-lg'>AED 5,000</h2>
                </div>

                <Separator className='my-1' />

                <div className='grid grid-cols-2 gap-3'>
                    <Button
                        variant={"soft-muted"}
                        size={"sm"}
                        className='h-9 w-full shadow-sm hover:shadow-md'
                    >
                        Details
                    </Button>
                    <Button
                        variant={"soft-primary"}
                        size={"sm"}
                        className='h-9 text-primary hover:bg-primary/10 shadow-sm hover:shadow-md'
                    >
                        <Phone />
                        Contact
                    </Button>
                </div>
            </div>
        </BaseCarouselCard>
    )
}

export default ServiceInfoCard