import { Badge } from '@/shared/components/ui/badge'
import { Button } from '@/shared/components/ui/button'
import { SubscriptionName } from '@/shared/types/subscription.type'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface AgentServiceCardProps {
    image: StaticImageData,
    title: string,
    description: string,
    price: number,
}

function AgentServiceCard(props: AgentServiceCardProps) {
    return (
        <Link href={`#`} className='gap-4 p-5 rounded-md bg-background-light shadow-sm grid grid-cols-[auto_1fr]'>
            <div className='w-[130px] aspect-video h-full rounded-md overflow-hidden'>
                <Image 
                    src={props.image} 
                    alt={props.title} 
                    className='w-full h-full object-cover'
                />
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <h2 className='text-lg font-semibold'>{props.title}</h2>
                    <p className='text-base text-muted-foreground leading-relaxed'>{props.description}</p>
                </div>
                <div className='mt-1'>
                    {props.price > 0
                        ? <h2 className='text-xl font-bold text-primary'><small className='text-muted-foreground text-sm font-normal'>AED</small> {props.price.toLocaleString()}</h2>
                        : <h2>Free</h2>
                    }
                </div>
            </div>
        </Link>
    )
}

export default AgentServiceCard