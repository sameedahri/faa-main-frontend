import { agent } from '@/shared/constants/images'
import Image from 'next/image'
import React from 'react'
import { Badge } from '@/ui/badge'
import { IdCard, Languages, MapPin, Phone, Star, UserRoundPen } from 'lucide-react'
import { Button } from '@/ui/button'
import { Separator } from '@/ui/separator'
import Link from 'next/link'
import { BaseCarouselCard } from './featured-base-carousel'

function AgentInfoCard() {
    return (
        <BaseCarouselCard>
            <div className='aspect-square bg-background rounded-md overflow-hidden'>
                <Image
                    src={agent.agentImage1}
                    alt="Agent Image"
                    className='object-cover'
                    placeholder='blur'
                />
            </div>
            <div className='pt-3 flex flex-col gap-3'>
                <div>
                    <Link 
                        href={"#"} 
                        className='text-lg font-semibold hover:text-primary transition-colors duration-300'
                    >
                        Ahmad Ali Farsi
                    </Link>
                    <p className='text-muted-foreground text-sm'>
                        Deals in rent and property
                    </p>
                </div>

                <div className="flex gap-2">
                    <Badge
                        variant={"muted"}
                        className='shadow-s bg-transparent h-6 border-border rounded-full'
                        type={"outline"}
                    >
                        Estate Agent
                    </Badge>
                    <Badge
                        variant={"muted"}
                        type={"outline"}
                        className='shadow-s border-border bg-transparent h-6 rounded-full'
                    >
                        Legal Services
                    </Badge>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between pt-1'>
                        <div className='flex items-center gap-1 text-xs text-foreground'>
                            <IdCard
                                // stroke={"var(--primary)"}
                                strokeWidth={1}
                                className='w-5'
                            />
                            <span>892334</span>
                        </div>
                        <div className='text-xs flex items-center gap-1 text-foreground'>
                            <Star
                                stroke={"transparent"}
                                strokeWidth={1}
                                className='w-4'
                                fill='var(--warning)'
                            />
                            <span>4.5</span>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1 text-xs text-foreground'>
                            <MapPin
                                strokeWidth={1}
                                className='w-4'
                            />
                            <span>Dubai UAE</span>
                        </div>
                        <div className='text-xs flex items-center gap-1 text-foreground'>
                            <Languages
                                strokeWidth={1}
                                className='w-4'
                            />
                            <span>EN, AR</span>
                        </div>
                    </div>
                </div>

                <Separator className='my-1' />

                <div className='grid grid-cols-2 gap-3'>
                    <Button
                        variant={"soft-muted"}
                        size={"sm"}
                        className='h-9 w-full shadow-sm hover:shadow-md'
                    >
                        <UserRoundPen />
                        View Profile
                    </Button>
                    <Button
                        variant={"outline"}
                        size={"sm"}
                        className='h-9 text-primary hover:bg-primary/10 hover:text-primary shadow-sm hover:shadow-md'
                    >
                        <Phone />
                        Contact Now
                    </Button>
                </div>
            </div>
        </BaseCarouselCard>
    )
}

export default AgentInfoCard