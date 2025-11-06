import { BaseCard, BaseCardTitle } from './base-card'
import { SubscriptionName } from '@/shared/types/subscription.type'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { Badge } from '@/shared/components/ui/badge'
import { BotIcon, Mail, Phone, Star } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { IconBrandWhatsapp } from '@tabler/icons-react'

export type AiAgentCardProps = {
    name: string
    industries: string[]
    rating: number
    reviews: number
    description: string
    subscription: SubscriptionName
}

function AiAgentCard(props: AiAgentCardProps) {
    const SubscriptionBadge = getSubscriptionBadge(props.subscription)
    return (
        <BaseCard>
            <div className='shadow-sm rounded-md flex items-center justify-center bg-primary/2'>
                <BotIcon className='text-primary size-10' />
            </div>
            <div className='flex flex-col gap-3.5 justify-between'>
                <div className="flex flex-col gap-1">
                    <div className='flex items-center gap-2'>
                        <BaseCardTitle>{props.name}</BaseCardTitle>
                        <div className='flex gap-2'>
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
            <div className="flex gap-2 items-end">
                <Button
                    variant={"outline"}
                    className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                    size={"icon"}
                >
                    <Mail />
                </Button>
                <Button
                    variant={"outline"}
                    className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                    size={"icon"}
                >
                    <Phone />
                </Button>
                <Button
                    variant={"soft-success"}
                    size={"icon"}
                >
                    <IconBrandWhatsapp className='size-5' />
                </Button>
            </div>
        </BaseCard>
    )
}

export default AiAgentCard