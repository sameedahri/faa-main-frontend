import { BaseCard, BaseCardActionButtons, BaseCardImage, BaseCardTitle } from './base-card'
import { SubscriptionName } from '@/shared/types/subscription.type'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { Badge } from '@/shared/components/ui/badge'
import { BotIcon, Mail, Phone, Star } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { aiAgent } from '@/shared/constants/images'

export type AiAgentCardProps = {
    id: string
    name: string
    industries: string[]
    rating: number
    reviews: number
    description: string
    subscription: SubscriptionName
    companyName: string
    email: string
    phone: string
    whatsapp: string
}

function AiAgentCard(props: AiAgentCardProps) {
    const SubscriptionBadge = getSubscriptionBadge(props.subscription)
    return (
        <BaseCard className='grid-cols-[160px_1fr_auto]' href={PAGE_ROUTES.AI_AGENT_DETAILS(props.id)}>
            <BaseCardImage 
                src={aiAgent.aiAgentImage1}
                alt="AI Agent Image"
            />
            <div className='flex flex-col gap-3.5 justify-between'>
                <div className="flex flex-col gap-1">
                    <div className='flex items-start gap-2'>
                        <BaseCardTitle>{props.name}</BaseCardTitle>
                        <div className='flex gap-2 pt-1'>
                            {SubscriptionBadge && <SubscriptionBadge />}
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {props.industries.map((industry, index) => (
                            <Badge
                                key={index}
                                variant={'muted'}
                                type={'outline'}
                                className='rounded-full border h-6'
                            >
                                {industry}
                            </Badge>
                        ))}
                    </div>

                </div>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                    {props.description}
                </p>
                <div className="flex gap-5">
                    {/* Rating */}
                    <div className='flex items-center gap-1 text-base text-foreground'>
                        <Star stroke={'transparent'} fill='var(--warning)' className='size-4.5' />
                        <span className='font-medium text-foreground'>{props.rating} <small className='text-muted-foreground'>({props.reviews})</small></span>
                    </div>

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

export default AiAgentCard