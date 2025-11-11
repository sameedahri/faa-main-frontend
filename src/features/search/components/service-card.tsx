import { Badge,  } from '@/components/ui/badge'
import { home } from '@/constants/images'
import { MapPin, Star } from 'lucide-react'
import { BaseCard, BaseCardActionButtons, BaseCardImage, BaseCardTitle } from './base-card'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'

export interface ServiceCardProps {
    name: string
    industries: string[]
    location: string
    rating: number
    reviews: number
    price: number
}

function ServiceCard(props: ServiceCardProps) {
    return (
        <BaseCard href={"#"}>
            {/* Image */}
            <BaseCardImage src={home.heroImage} alt="Service Image" />
            
            {/* Content */}
            <div className='flex flex-col gap-4 justify-between'>
                {/* Title And Industries */}
                <div className="flex flex-col gap-1">
                    <div className='flex items-center gap-2'>
                        <BaseCardTitle>{props.name}</BaseCardTitle>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {props.industries.map((industry, index) => (
                            <Badge key={index} variant={'muted'} type={'outline'} className='rounded-full border h-6'>{industry}</Badge>
                        ))}
                    </div>
                </div>
                
                {/* Rating And Location */}
                <div className="flex flex-wrap gap-4">
                    <div className='flex items-center gap-1 text-xs text-foreground  w-auto'>
                        <MapPin className='w-4 h-4' />
                        <span>{props.location}</span>
                    </div>
                    <div className='flex items-center gap-1 text-xs text-foreground'>
                        <Star stroke={'transparent'} fill='var(--warning)' className='w-4 h-4' />
                        <span>{props.rating} <small>({props.reviews})</small></span>
                    </div>
                </div>
                
                {/* Pricing */}
                <h2 className='text-base text-foreground font-semibold'> <small className='text-muted-foreground text-sm font-normal'>AED</small> {props.price.toLocaleString()}</h2>
            </div>
            
            {/* Action Buttons */}
            <BaseCardActionButtons
                phone={""}
                email={""}
                whatsapp={""}
                className="items-end"
            />
        </BaseCard>
    )
}

export default ServiceCard