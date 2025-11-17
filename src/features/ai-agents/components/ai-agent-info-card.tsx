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


function AiAgentInfoCard(props: AiAgentCardProps) {
    const SubscriptionBadge = getSubscriptionBadge(props.subscription)
    const aiAgentDetails = props

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
                        // " bg-linear-to-b from-primary/10 to-background-light backdrop-blur-3xl shadow",
                        "flex flex-col gap-4 items-center p-6 border-border from-transparent"
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
                                        {aiAgentDetails?.name}
                                    </h2>
                                    <p className="text-base text-muted-foreground">
                                        {aiAgentDetails?.companyName}
                                    </p>
                                </div>
                                <div className="absolute -top-2 -right-4">
                                    {aiAgentDetails.subscription !== "Basic" && <VerifiedBadge className="size-4" />}
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-1 pb-1">
                                {SubscriptionBadge && <SubscriptionBadge />}
                                {/* {agentDetails.subscription !== "Basic" && <VerifiedBadge />} */}
                            </div>

                        </div>
                    </div>



                    <div className="flex flex-wrap gap-5 text-sm">
                        <div className='flex items-center gap-0.5 text-foreground'>
                            <Star className='size-4 text-muted-foreground fill-warning stroke-transparent' />
                            <span className="">{aiAgentDetails.rating} <small className="text-muted-foreground font-normal">({aiAgentDetails.reviews})</small></span>
                        </div>
                    </div>
                    <Separator className="my-1.5 bg-border/50" />
                    <div className="grid grid-cols-3 gap-3 w-full *:w-full">
                        <EmailButton
                            email={aiAgentDetails.email}
                            className="rounded-md h-11 [&>svg]:size-4.5 shadow-sm from-background"
                        >
                        </EmailButton>
                        <WebsiteButton
                            websiteLink={"#"}
                            className=" rounded-md h-11 [&>svg]:size-8 shadow-sm from-background"
                        >
                        </WebsiteButton>

                        <WhatsappButton
                            whatsapp={aiAgentDetails.whatsapp}
                            className="rounded-md h-11  [&>svg]:size-5.5 shadow-sm"
                        >
                        </WhatsappButton>
                    </div>
                </SurfaceCard>
            </div>

        </div>
    )
}

export default AiAgentInfoCard