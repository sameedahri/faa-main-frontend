import { cn, getRelativeTimeString } from '@/shared/lib/utils'
import { Star } from 'lucide-react'
import React from 'react'

export interface AgentReviewCardProps {
    name: string
    review: string
    rating: number
    date: string
}

function AgentReviewCard(props: AgentReviewCardProps) {
    return (
        <div className='grid grid-cols-1 gap-4 p-5 rounded-md bg-background-light shadow-sm md:grid-cols-[1fr_auto]'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-0.5'>
                    <h2 className='font-semibold text-lg'>{props.name}</h2>
                    <p className='text-muted-foreground text-sm'>
                        {getRelativeTimeString(new Date(props.date))}
                    </p>
                </div>

                <p className='text-foreground/80 leading-relaxed'>{props.review}</p>
            </div>
            <div className='flex gap-1'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star 
                        key={index} 
                        className={cn(
                            'size-4  stroke-warning opacity-80',
                            index < props.rating ? 'opacity-100 fill-warning' : 'fill-transparent',
                        )} 
                    />
                ))}
            </div>
        </div>
    )
}

export default AgentReviewCard