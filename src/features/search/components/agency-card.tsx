import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { agency, agent } from '@/constants/images'
import { getSubscriptionBadge, getSubscriptionVariant } from '@/shared/lib/helpers'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { Mail, MapPin, Phone, Star, User } from 'lucide-react'
import { BaseCard, BaseCardActionButtons, BaseCardImage, BaseCardTitle } from './base-card'
import { SubscriptionName } from '@/shared/types/subscription.type'
import { VerifiedBadge } from '@/shared/components/badges/verified-badges'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'

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
}

function AgencyCard(props: AgencyCardProps) {
    const SubscriptionBadge = getSubscriptionBadge(props.subscription)
    return (
        <BaseCard href={"#"}>
            <BaseCardImage 
                src={agency.demoAgencyLogoImg}
                alt="Agency Image"
            />
            <div className='flex flex-col gap-4 justify-between'>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center gap-2'>
                        <BaseCardTitle>{props.name}</BaseCardTitle>
                        <div className='flex gap-1.5'>
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
                        <Badge key={index} variant={'muted'} type={'outline'} className='rounded-full border h-6'>{profession}</Badge>
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