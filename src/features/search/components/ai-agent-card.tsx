import { BaseCard, BaseCardActionButtonsWrapper, BaseCardContentWrapper, BaseCardDescription, BaseCardImage, BaseCardPoster, BaseCardRatingItem, BaseCardSpecialization, BaseCardSpecializationWrapper, BaseCardTitle, ORIENTATION, Orientation } from './base-card'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { EmailButton, PhoneButton, WebsiteButton, WhatsappButton } from '@/shared/components/action-buttons'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { agency, aiAgent } from '@/shared/constants/images'
import { VerifiedBadge } from '@/shared/components/badges/verified-badges'
import { cn } from '@/shared/lib/utils'
import { AiAgent } from '@/features/ai-agents/types/ai-agent.type'

export type AiAgentCardProps = {
    agent: AiAgent
    orientation?: Orientation
}

function AiAgentCard(props: AiAgentCardProps) {
    const { agent, orientation = "horizontal" } = props
    const SubscriptionBadge = getSubscriptionBadge(agent.subscription)
    return (
        <BaseCard 
            className="data-[orientation='horizontal']:grid-cols-[160px_1fr_auto]" 
            href={PAGE_ROUTES.AI_AGENT_DETAILS(agent.id)}
            orientation={orientation}
        >

            {/* Image */}
            <BaseCardImage 
                src={aiAgent.aiAgentImage1}
                alt="AI Agent Image"
                className='h-full w-full'
            />
            
            {/* Content */}
            <BaseCardContentWrapper>
                <div className="flex flex-col gap-1.5">
                    {/* Title */}
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

                    {/* Description */}
                    <BaseCardDescription>
                        {agent.description}
                    </BaseCardDescription>

                    {/* Industries */}
                    <BaseCardSpecializationWrapper className='pt-1'>
                        {agent.industries.map((industry, index) => (
                            <BaseCardSpecialization
                                key={index}
                            >
                                {industry}
                            </BaseCardSpecialization>
                        ))}
                    </BaseCardSpecializationWrapper>
                </div>
                
                <div
                    className={cn({
                        "flex justify-between items-end": orientation === "vertical",
                    })}
                >
                    {/* Rating */}
                    <BaseCardRatingItem 
                        rating={agent.rating}
                        reviews={agent.reviews}
                        wrapperClassName='text-base [&_svg]:size-4 mb-1'
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
            
            <div
                className={cn(
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
                    <EmailButton
                        email={agent.email}
                        className={cn(
                            {
                                "rounded-md": orientation === "vertical",
                            }
                        )}
                    />
                    <WebsiteButton
                        websiteLink={"#"}
                        className={cn(
                            {
                                "rounded-md": orientation === "vertical",
                            }
                        )}
                    >
                    </WebsiteButton>
                    <WhatsappButton
                        whatsapp={agent.whatsapp}
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

export default AiAgentCard