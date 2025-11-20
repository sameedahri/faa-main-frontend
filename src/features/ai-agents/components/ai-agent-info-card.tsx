import { VerifiedBadge } from "@/shared/components/badges/verified-badges"
import { Award, BriefcaseBusiness, LanguagesIcon, MapPin, Star } from "lucide-react"
import { IconLicense } from "@tabler/icons-react"
import { Badge } from "@/shared/components/ui/badge"
import Image from 'next/image'
import { AiAgentCardProps } from '@/features/search/components/ai-agent-card'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { agent, aiAgent } from '@/shared/constants/images'
import { SurfaceCard } from '@/shared/components/ui/surface-card'
import { cn } from '@/shared/lib/utils'
import { EmailButton, PhoneButton, WebsiteButton, WhatsappButton } from '@/shared/components/action-buttons'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion'
import { aiAgentImage1 } from "@/shared/constants/images/ai-agent"
import { Separator } from "@/shared/components/ui/separator"
import { BaseCardRatingItem } from "@/features/search/components/base-card"


function AiAgentInfoCard(props: AiAgentCardProps) {
    const { agent } = props
    const SubscriptionBadge = getSubscriptionBadge(agent.subscription)

    return (
        <div
            className={cn(
                "flex flex-col gap-5",
                "overflow-y-auto overflow-x-hidden h-fit max-h-[calc(100vh-3rem)] sticky top-6 mt-6",
            )}
        >
            <div className="">
                <SurfaceCard
                    variant={"highlighted"}
                    className={cn(
                        "flex flex-col gap-4 items-center p-6 border-none bg-background-light"
                    )}
                >
                    <Image
                        src={aiAgent.aiAgentImage1}
                        alt="Agent Image"
                        className="w-30 aspect-square rounded-full shadow-sm"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 text-center pt-0">
                            <div className="relative w-fit mx-auto">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold font-heading">
                                        {agent.name}
                                    </h2>
                                    <p className="text-base text-muted-foreground">
                                        {agent.companyName}
                                    </p>
                                </div>
                                <div className="absolute -top-2 -right-4">
                                    {agent.subscription !== "Basic" && <VerifiedBadge className="size-4" />}
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-1 pb-1">
                                {SubscriptionBadge && <SubscriptionBadge />}
                            </div>

                        </div>
                    </div>



                    <div className="flex flex-wrap gap-5 text-sm">
                        <BaseCardRatingItem 
                            rating={agent.rating}
                            reviews={agent.reviews}
                            wrapperClassName='text-base [&_svg]:size-4 mb-1'
                        />
                    </div>
                    <Separator className="my-1.5 bg-border/50" />
                    <div className="grid grid-cols-3 gap-3 w-full *:w-full">
                        <EmailButton
                            email={agent.email}
                            className="rounded-md h-11 [&>svg]:size-4.5"
                        >
                        </EmailButton>
                        <WebsiteButton
                            websiteLink={"#"}
                            className=" rounded-md h-11 [&>svg]:size-4.5"
                        >
                        </WebsiteButton>

                        <WhatsappButton
                            whatsapp={agent.whatsapp}
                            className="rounded-md h-11  [&>svg]:size-5.5"
                        >
                        </WhatsappButton>
                    </div>
                </SurfaceCard>
            </div>

        </div>
    )
}

export default AiAgentInfoCard