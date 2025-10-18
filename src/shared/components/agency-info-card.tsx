import { agent } from '@/shared/constants/images'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Badge } from '@/ui/badge'
import { IdCard, Languages, MapPin, Phone, Star, UserRoundPen } from 'lucide-react'
import { Button } from '@/ui/button'
import { Separator } from '@/ui/separator'
import { BaseCarouselCard } from '@/features/home/component/section/featured-base-carousel'

type AgenciesInfoCardProps = {
    image: StaticImageData;
    title: string;
    description: string;
    badges: string[];
    location: string;
    languages: string[];
    rating: number;
    id: string;
}

function AgencyInfoCard(props: AgenciesInfoCardProps) {
    return (
        <BaseCarouselCard>
            <div className='flex items-center gap-3'>
                <div className='aspect-square w-13 rounded-full overflow-hidden'>
                    <Image
                        src={agent.agentImage1}
                        alt="Agent Image"
                        className='object-cover'
                        placeholder='blur'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-lg font-semibold'>{props.title}</h2>
                    <div className='flex gap-2'>
                        <Badge 
                            variant={"success"}
                            type={"outline"}
                            size={"sm"}
                        >
                            Verified
                        </Badge>
                        <Badge 
                            variant={"pro"}
                            type={"outline"}
                            size={"sm"}
                        >
                            Pro
                        </Badge>
                    </div>
                </div>
            </div>
            <div className='pt-3 flex flex-col gap-3'>
                <p className='text-muted-foreground text-sm'>
                    {props.description}
                </p>

                <div className="flex gap-2">
                    <Badge
                        variant={"muted"}
                        className='rounded-[4px] shadow-sm bg-transparent h-6'
                    >
                        Estate Agent
                    </Badge>
                    <Badge
                        variant={"muted"}
                        className='rounded-[4px] shadow-sm bg-transparent h-6'
                    >
                        Legal Services
                    </Badge>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between pt-1'>
                        <div className='flex items-center gap-1 text-xs text-foreground'>
                            <IdCard
                                stroke={"var(--primary)"}
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
                                stroke={"var(--destructive)"}
                                strokeWidth={1}
                                className='w-4'
                            />
                            <span>Dubai UAE</span>
                        </div>
                        <div className='text-xs flex items-center gap-1 text-foreground'>
                            <Languages
                                stroke={"var(--success)"}
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
                        variant={"soft-success"}
                        size={"sm"}
                        className='h-9'
                    >
                        <Phone />
                        Contact Now
                    </Button>
                    <Button
                        variant={"soft-primary"}
                        size={"sm"}
                        className='h-9'
                    >
                        <UserRoundPen />
                        View Profile
                    </Button>
                </div>
            </div>
        </BaseCarouselCard>
    )
}

export default AgencyInfoCard