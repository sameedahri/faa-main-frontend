import { agency as agencyImages } from '@/constants/images'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { MapPin, Star, User } from 'lucide-react'
import { BaseCard, BaseCardActionButtons, BaseCardActionButtonsWrapper, BaseCardContentWrapper, BaseCardImage, BaseCardLocationItem, BaseCardMetaWrapper, BaseCardRatingItem, BaseCardRoles, BaseCardSpecialization, BaseCardSpecializationWrapper, BaseCardTitle, BaseCardTitleWrapper, BaseCardUsersItems, Orientation } from './base-card'
import { SubscriptionName } from '@/shared/types/subscription.type'
import { VerifiedBadge } from '@/shared/components/badges/verified-badges'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { Badge } from '@/shared/components/ui/badge'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'
import { cn } from '@/shared/lib/utils'
import { StaticImageData } from 'next/image'

export interface Agency {
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
    image: StaticImageData
}

export interface AgencyCardProps {
    agency: Agency
    orientation?: Orientation
}

function AgencyCard(props: AgencyCardProps) {
    const { agency, orientation } = props
    const SubscriptionBadge = getSubscriptionBadge(agency.subscription)

    return (
        <BaseCard href={PAGE_ROUTES.AGENCY_DETAILS(agency.id)}>

            {/* Image */}
            <BaseCardImage
                src={agency.image}
                alt="Agency Image"
                className='border border-border-light'
            />

            {/* Content */}
            <BaseCardContentWrapper>
                {/* Title And Profession */}
                <BaseCardTitleWrapper>
                    <BaseCardTitle
                        badges={
                            <>
                                {agency.subscription !== "Basic" && <VerifiedBadge />}
                                {SubscriptionBadge && <SubscriptionBadge />}
                            </>
                        }
                    >
                        {agency.name}
                    </BaseCardTitle>
                    <BaseCardRoles roles={agency.profession} />
                </BaseCardTitleWrapper>

                {/* Location, Rating and User */}
                <BaseCardMetaWrapper>
                    {/* Location */}
                    <BaseCardLocationItem
                        location={agency.location}
                    />

                    {/* Rating */}
                    <BaseCardRatingItem
                        rating={agency.rating}
                        reviews={agency.reviews}
                    />

                    {/* User */}
                    <BaseCardUsersItems
                        numberOfUser={agency.noOfAgents}
                    />
                </BaseCardMetaWrapper>

                {/* Specialization */}
                <BaseCardSpecializationWrapper>
                    {agency.specialization.map((profession, index) => (
                        <BaseCardSpecialization key={index}>
                            {profession}
                        </BaseCardSpecialization>
                    ))}
                </BaseCardSpecializationWrapper>
            </BaseCardContentWrapper>
            
            <BaseCardActionButtonsWrapper>
                <PhoneButton
                    phone={""}
                    className={cn(
                        {
                            "rounded-md": orientation === "vertical",
                        }
                    )}
                />
                <EmailButton
                    email={""}
                    className={cn(
                        {
                            "rounded-md": orientation === "vertical",
                        }
                    )}
                />
                <WhatsappButton
                    whatsapp={""}
                    className={cn(
                        {
                            "rounded-md": orientation === "vertical",
                        }
                    )}
                />
            </BaseCardActionButtonsWrapper>
        </BaseCard>
    )
}

export default AgencyCard