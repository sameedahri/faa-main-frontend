"use client"

import { agency, agent as agentImage } from '@/constants/images'
import { BaseCard, BaseCardActionButtonsWrapper, BaseCardContentWrapper, BaseCardImage, BaseCardLocationItem, BaseCardMetaItem, BaseCardMetaWrapper, BaseCardRatingItem, BaseCardRoles, BaseCardSpecialization, BaseCardSpecializationWrapper, BaseCardTitle, BaseCardTitleWrapper, Orientation } from './base-card'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { VerifiedBadge } from '@/shared/components/badges/verified-badges'
import Image from 'next/image'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { Route } from 'next'
import { useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'
import { cn } from '@/shared/lib/utils'
import { Agent } from '@/features/agent/types/agent.type'

export interface AgentCardProps {
   agent: Agent
   orientation?: Orientation
   className?: string
}

function AgentCard(props: AgentCardProps) {
    const { agent, orientation = "horizontal", className } = props
    const SubscriptionBadge = getSubscriptionBadge(agent.subscription)

    return (
        <BaseCard
            className={className}
            href={PAGE_ROUTES.AGENT_DETAILS(agent.id)}
        >
            {/* Image */}
            <BaseCardImage 
                src={agent.image} 
                alt="Agent Image"
            />

            {/* Content */}
            <BaseCardContentWrapper>
                {/* Title And Profession */}
                <BaseCardTitleWrapper>
                    <BaseCardTitle
                        badges={
                            <>
                                {agent.subscription !== "Basic" && <VerifiedBadge />}
                                {SubscriptionBadge && <SubscriptionBadge />}
                            </>
                        }
                    >
                        {agent.name}
                    </BaseCardTitle>
                    <BaseCardRoles roles={agent.profession} />
                </BaseCardTitleWrapper>

                {/* Location And Rating */}
                <BaseCardMetaWrapper>
                    {/* Location */}
                    <BaseCardLocationItem 
                        location={agent.location}
                    />

                    {/* Rating */}
                    <BaseCardRatingItem 
                        rating={agent.rating}
                        reviews={agent.reviews}
                    />

                    {/* Rent */}
                    <BaseCardMetaItem>
                        <span className=''>Rent</span>
                        <span>(10)</span>
                    </BaseCardMetaItem>

                    {/* Sale */}
                    <BaseCardMetaItem>
                        <span className=''>Sale</span>
                        <span>(10)</span>
                    </BaseCardMetaItem>
                </BaseCardMetaWrapper>

                {/* Specialization */}
                <BaseCardSpecializationWrapper>
                    {agent.specialization.map((profession, index) => (
                        <BaseCardSpecialization key={`agent-card-specialization-${profession}-${index}`}>
                            {profession}
                        </BaseCardSpecialization>
                    ))}
                </BaseCardSpecializationWrapper>
            </BaseCardContentWrapper>

            {/* Action Buttons and Company Link */}
            <div className="flex flex-col gap-2 justify-between items-end">
                {agent.isTeamMember ? (
                    <CompanyLink href={"#"} />
                ) : (
                    <div>
                    </div>
                )}

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

function CompanyLink(props: PropsWithChildren<{ href: Route }>) {
    const router = useRouter()
    return (
        <button
            className='aspect-square w-12 overflow-hidden rounded-lg border border-border/50 transition cursor-pointer hover:border-primary/50'
            onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                router.push(props.href)
            }}
        >
            <Image
                src={agency.demoAgencyLogoImg}
                alt="Agent Image"
            />
        </button>
    )
}

export default AgentCard