"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { agency, agent } from '@/constants/images'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { Mail, MapPin, Phone, Star } from 'lucide-react'
import { BaseCard, BaseCardImage, BaseCardTitle } from './base-card'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { VerifiedBadge } from '@/shared/components/badges/verified-badges'
import { SubscriptionName } from '@/shared/types/subscription.type'
import Image from 'next/image'
import Link from 'next/link'
import { INDUSTRY_NAMES } from '@/shared/constants/industry'
import { Separator } from '@/shared/components/ui/separator'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { Route } from 'next'
import { useRouter } from 'next/navigation'

export interface AgentCardProps {
    name: string
    profession: string[]
    location: string
    rating: number
    reviews: number
    subscription: SubscriptionName
    specialization: string[]
    className?: string
    isTeamMember?: boolean
    id: string
    email: string
}

function AgentCard({ className, ...props }: AgentCardProps) {
    const router = useRouter()
    const isRealEstateBroker = props.profession.includes(INDUSTRY_NAMES.REAL_ESTATE_BROKER) || props.profession.includes(INDUSTRY_NAMES.REAL_ESTATE)

    const SubscriptionBadge = getSubscriptionBadge(props.subscription)
    return (
        <BaseCard className={className} href={PAGE_ROUTES.AGENT_DETAILS(props.id)}>
            <BaseCardImage src={agent.agentImage1} alt="Agent Image" />
            <div className='flex flex-col gap-4 justify-between'>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center gap-2'>
                        <BaseCardTitle>{props.name}</BaseCardTitle>
                        <div className='flex gap-2'>
                            {props.subscription !== "Basic" && <VerifiedBadge />}
                            {SubscriptionBadge && <SubscriptionBadge />}
                        </div>
                    </div>
                    <p className='text-muted-foreground text-sm'>
                        {props.profession.join(' | ')}
                    </p>
                </div>

                <div className="flex gap-5">
                    <div className='flex items-center gap-1 text-xs text-foreground  w-auto'>
                        <MapPin className='w-4 h-4' />
                        <span>{props.location}</span>
                    </div>
                    {/* Rating */}
                    <div className='flex items-center gap-1 text-xs text-foreground'>
                        <Star stroke={'transparent'} fill='var(--warning)' className='w-4 h-4' />
                        <span>{props.rating} <small>({props.reviews})</small></span>
                    </div>
                    {/* <div className='flex flex-wrap gap-3 items-center text-sm'> */}
                        <div className='flex items-center gap-1 text-xs'>
                            <span className=''>Rent</span>
                            <span>(10)</span>
                        </div>
                        <div className='flex items-center gap-1 text-xs'>
                            <span className=''>Sale</span>
                            <span>(10)</span>
                        </div>
                    {/* </div> */}
                </div>

                {/* <div className='flex flex-wrap gap-3 items-center text-sm'>
                    <div className='flex items-center gap-1'>
                        <span className='font-medium'>Rent</span>
                        <span>(10)</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span className='font-medium'>Sale</span>
                        <span>(10)</span>
                    </div>
                </div> */}

                <div className='flex flex-wrap gap-2'>
                    {props.specialization.map((profession, index) => (
                        <Badge key={index} variant={'muted'} type={'outline'} className='rounded-full border h-6'>{profession}</Badge>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-between items-end">
                {props.isTeamMember ? (
                    <Link
                        className='aspect-square w-15 overflow-hidden rounded-md border transition hover:border-primary/50'
                        href={"#"}
                    >
                        <Image
                            src={agency.demoAgencyLogoImg}
                            alt="Agent Image"
                        />
                    </Link>
                ) : (
                    <div>
                    </div>
                )}

                <div className="flex gap-2">
                    <Button
                        variant={"outline"}
                        className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                        size={"icon"}
                        onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            router.push(`mailto:${props.email}`)
                        }}
                    >
                        <Mail />
                    </Button>
                    <Button
                        variant={"outline"}
                        className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                        size={"icon"}
                        onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            router.push(`tel:1234567890`, {})
                        }}
                    >
                        <Phone />
                    </Button>
                    <Button
                        variant={"soft-success"}
                        size={"icon"}
                        asChild
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        <Link href="https://wa.me/1234567890" target="_blank">
                            <IconBrandWhatsapp className='size-5' />
                        </Link>
                    </Button>
                </div>
            </div>
        </BaseCard>
    )
}

export default AgentCard