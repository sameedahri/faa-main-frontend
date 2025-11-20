import { VerifiedBadge } from "@/shared/components/badges/verified-badges"
import { Award, BriefcaseBusiness, LanguagesIcon, MapPin, Star } from "lucide-react"
import { IconLicense } from "@tabler/icons-react"
import { Badge } from "@/shared/components/ui/badge"
import Image from 'next/image'
import { AgentCardProps } from '@/features/search/components/agent-card'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { agent } from '@/shared/constants/images'
import { SurfaceCard } from '@/shared/components/ui/surface-card'
import { cn } from '@/shared/lib/utils'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion'
import { Separator } from "@/shared/components/ui/separator"
import { BaseCardLocationItem, BaseCardRatingItem } from "@/features/search/components/base-card"
import { Agent } from "../types/agent.type"


function AgentInfoSection(props: Agent) {
    const SubscriptionBadge = getSubscriptionBadge(props.subscription)
    const agentDetails = props

    return (
        <div 
            className={cn(
                "flex flex-col gap-5",
                "overflow-y-auto overflow-x-hidden h-fit max-h-[calc(100vh-3rem)] sticky top-6 mt-section-space",
            )}
        >
            <div className="backdrop-blur-sm">
                <SurfaceCard
                    className={cn(
                        "",
                        "flex flex-col gap-4 items-center px-4 py-5 rounded-lg border-none",
                    )}
                >
                    <Image
                        src={agentDetails.image}
                        alt="Agent Image"
                        className="w-24 aspect-square rounded-full shadow-sm object-cover"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 text-center pt-0">
                            <div className="relative w-fit mx-auto">
                                <h2 className="text-xl font-bold font-heading">{agentDetails?.name}</h2>
                                <div className="absolute -top-2 -right-4">
                                    {agentDetails.subscription !== "Basic" && <VerifiedBadge className="size-4" />}
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-1 pb-1">
                                {SubscriptionBadge && <SubscriptionBadge />}
                            </div>

                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-sm">
                                {agentDetails?.profession.join(' | ')}
                            </p>
                            {agentDetails.isTeamMember && (
                                <div className="flex items-center gap-1 justify-center text-muted-foreground">
                                    <BriefcaseBusiness className="size-3" />
                                    <p className="text-sm">Dubai Elite Properties</p>
                                </div>
                            )}
                        </div>
                    </div>



                    <div className="flex flex-wrap gap-5 text-sm">
                        <BaseCardRatingItem 
                            rating={agentDetails.rating} 
                            reviews={agentDetails.reviews} 
                        />
                        <BaseCardLocationItem 
                            location={agentDetails.location} 
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-3 w-full pt-2 *:w-full">
                        <EmailButton 
                            email={agentDetails.email}
                            className="rounded-md h-9 [&>svg]:size-4"
                        />
                        <PhoneButton
                            phone={"213123123"}
                            className="rounded-md h-9 [&>svg]:size-4"
                        />
                        <WhatsappButton
                            whatsapp={"213123123"}
                            className="rounded-md h-9  [&>svg]:size-5"
                        />
                    </div>
                </SurfaceCard>
            </div>

            <Accordion 
                type='single' 
                collapsible
                className='w-full px-3'
                defaultValue="about"
            >
                <AccordionItem value='about' className="border-border/50">
                    <AccordionTrigger className='cursor-pointer'>
                        <h3 className="font-bold font-heading text-base">About</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-muted-foreground text-base leading-loose">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim consequuntur aliquid praesentium iste autem! Voluptate temporibus aliquid illum dolorem.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='professional-information' className="border-border/50">
                    <AccordionTrigger className='cursor-pointer'>
                        <h3 className="font-bold font-heading text-base">
                            Professional Information
                        </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-0.5">
                                <h4 className="text-sm flex items-center gap-0.5 text-muted-foreground">
                                    <IconLicense className="size-3" />
                                    License
                                </h4>
                                <p className="font-medium text-base">8979812</p>
                            </div>
                            {/* <Separator /> */}
                            <div className="flex flex-col gap-0.5 text-sm">
                                <h4 className="text-sm flex items-center gap-0.5 text-muted-foreground">
                                    <Award className="size-3" />
                                    Experience
                                </h4>
                                <p className="font-medium text-base">12 years</p>
                            </div>
                            {/* <Separator /> */}
                            <div className="flex flex-col gap-0.5">
                                <h4 className=" text-sm flex items-center gap-0.5 text-muted-foreground">
                                    <LanguagesIcon className="size-3" />
                                    Languages
                                </h4>
                                <p className="font-medium text-base">English, Arabic</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='specialization'>
                    <AccordionTrigger className='cursor-pointer'>
                        <h3 className="font-bold font-heading text-base">
                            Specialization
                        </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-wrap gap-2">
                            {agentDetails.specialization.map((specialization, index) => (
                                <Badge key={index} variant={"muted"} type={"outline"} className="rounded-sm border h-6 text-foreground">
                                    {specialization}
                                </Badge>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AgentInfoSection