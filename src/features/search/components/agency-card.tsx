import { agency } from '@/constants/images'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { MapPin, Star, User } from 'lucide-react'
import { BaseCard, BaseCardActionButtons, BaseCardImage, BaseCardTitle } from './base-card'
import { SubscriptionName } from '@/shared/types/subscription.type'
import { VerifiedBadge } from '@/shared/components/badges/verified-badges'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { Badge } from '@/shared/components/ui/badge'

export interface AgencyCardProps {
    id: string
    name: string
    profession: string[]
    location: string
    rating: number
    reviews: number
    subscription: SubscriptionName
    specialization: string[]
    noOfAgents: number
    email: string
}

function AgencyCard(props: AgencyCardProps) {
    const SubscriptionBadge = getSubscriptionBadge(props.subscription)
    return (
        <BaseCard href={PAGE_ROUTES.AGENCY_DETAILS(props.id)}>
            <BaseCardImage 
                src={agency.demoAgencyLogoImg}
                alt="Agency Image"
            />
            <div className='flex flex-col gap-4 justify-between'>
                <div className="flex flex-col gap-0.5">
                    <div className='flex items-center gap-2.5'>
                        <BaseCardTitle>{props.name}</BaseCardTitle>
                        <div className='flex gap-1'>
                            {props.subscription !== "Basic" && <VerifiedBadge />}
                            {SubscriptionBadge && <SubscriptionBadge />}
                        </div>
                    </div>
                    <p className='text-muted-foreground text-sm'>
                        {props.profession.join(' | ')}
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <div className='flex items-center gap-1 text-xs text-foreground  w-auto'>
                        <MapPin className='w-4 h-4' />
                        <span>{props.location}</span>
                    </div>
                    {/* Rating */}
                    <div className='flex items-center gap-1 text-xs text-foreground'>
                        <Star stroke={'transparent'} fill='var(--warning)' className='w-4 h-4' />
                        <span>{props.rating} <small>({props.reviews})</small></span>
                    </div>
                    <div className='flex items-center gap-1 text-xs text-foreground'>
                        <User className='w-4 h-4' />
                        <span>{props.noOfAgents}</span>
                    </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                    {props.specialization.map((profession, index) => (
                        <Badge
                            key={index}
                            variant={'muted'}
                            type={'outline'}
                            className='rounded-full h-6 border-border/70 text-muted-foreground/90'
                        >
                            {profession}
                        </Badge>
                    ))}
                </div>
            </div>
            <BaseCardActionButtons
                phone={""}
                email={""}
                whatsapp={""}
                className="items-end"
            />
        </BaseCard>
    )
}

export default AgencyCard