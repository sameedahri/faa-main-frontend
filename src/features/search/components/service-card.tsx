"use client"

import { Badge, } from '@/components/ui/badge'
import { agency, service as ServiceImages } from '@/constants/images'
import { MapPin, Star } from 'lucide-react'
import { BaseCard, BaseCardActionButtons, BaseCardActionButtonsWrapper, BaseCardContentWrapper, BaseCardImage, BaseCardLocationItem, BaseCardMetaWrapper, BaseCardPoster, BaseCardPrice, BaseCardRatingItem, BaseCardRoles, BaseCardSpecialization, BaseCardSpecializationWrapper, BaseCardTitle, BaseCardTitleWrapper, Orientation } from './base-card'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { Service } from '@/features/services/types/services.type'
import { cn } from '@/shared/lib/utils'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'
import { PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'
import { Route } from 'next'
import Image from 'next/image'


export interface ServiceCardProps {
    service: Service
    orientation?: Orientation
}

function ServiceCard(props: ServiceCardProps) {
    const { service, orientation = "horizontal" } = props

    return (
        <BaseCard
            href={PAGE_ROUTES.SERVICE_DETAILS(service.id)}
            orientation={orientation}
        >
            {/* Image */}
            <BaseCardImage
                src={service.image}
                alt="Service Image"
            />

            {/* Content */}
            <BaseCardContentWrapper>
                {/* Title And Industries */}
                <BaseCardTitleWrapper>
                    {/* Title */}
                    <BaseCardTitle>
                        {service.name}
                    </BaseCardTitle>

                    {/* Industries */}
                    <BaseCardRoles roles={service.industries} />

                    
                </BaseCardTitleWrapper>

                {/* Rating And Location */}
                <BaseCardMetaWrapper>
                    <BaseCardLocationItem
                        location={service.location}
                        wrapperClassName='text-muted-foreground'
                    />
                    <BaseCardRatingItem
                        rating={service.rating}
                        reviews={service.reviews}
                        wrapperClassName='text-muted-foreground'
                    />
                </BaseCardMetaWrapper>


                <div
                    className={cn({
                        "flex justify-between items-end": orientation === "vertical",
                    })}
                >
                    {/* Pricing */}
                    <BaseCardPrice 
                        price={service.price}
                        className='mb-1'
                    />

                    {/* Company Link */}
                    <BaseCardPoster
                        href={PAGE_ROUTES.AGENCY_DETAILS("1")}
                        image={agency.demoAgencyLogoImg}
                        className={cn({
                            "rounded-full": orientation === "vertical",
                            "hidden": orientation === "horizontal",
                        })}
                    />
                </div>
            </BaseCardContentWrapper>

            {/* Action Buttons and Company Link */}
            <div
                className={cn(
                    "",
                    {
                        "flex flex-col gap-2 justify-between items-end": orientation === "horizontal",
                    }
                )}
            >
                {/* Company Link */}
                <BaseCardPoster
                    href={PAGE_ROUTES.AGENCY_DETAILS("1")}
                    image={agency.demoAgencyLogoImg}
                    className={cn({
                        "hidden": orientation === "vertical",
                    })}
                />
                {/* Action Buttons */}
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
            </div>
        </BaseCard>
    )
}


export default ServiceCard