import React from 'react'
import { Button } from "@/shared/components/ui/button"
import { VerifiedBadge } from "@/shared/components/badges/verified-badges"
import { Award, BriefcaseBusiness, Filter, LanguagesIcon, Mail, MapPin, Phone, Star } from "lucide-react"
import { IconBrandWhatsapp, IconLicense } from "@tabler/icons-react"
import { Badge } from "@/shared/components/ui/badge"
import Image from 'next/image'
import { AgentCardProps } from '@/features/search/components/agent-card'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { agent } from '@/shared/constants/images'
import Link from 'next/link'
import { SurfaceCard } from '@/shared/components/ui/surface-card'
import { cn } from '@/shared/lib/utils'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'


function AgentInfoSection(props: AgentCardProps) {
    const SubscriptionBadge = getSubscriptionBadge(props.subscription)
    const agentDetails = props

    return (
        <div className="flex flex-col gap-12">
            <div className="pt-6 sticky z-20 top-0 bg-background-light/80 backdrop-blur-sm">
                <SurfaceCard
                    variant={"highlighted"}
                    className={cn(
                        " bg-linear-to-b from-primary/10 to-background-light backdrop-blur-3xl shadow shadow-primary/20",
                        "flex flex-col gap-4 items-center p-6 border-primary/10"
                    )}
                >
                    <Image
                        src={agent.agentImage1}
                        alt="Agent Image"
                        className="w-30 aspect-square rounded-full shadow-sm"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1 text-center pt-0">
                            <div className="relative w-fit mx-auto">
                                <h2 className="text-xl font-bold font-heading">{agentDetails?.name}</h2>
                                <div className="absolute -top-2 -right-4">
                                    {agentDetails.subscription !== "Basic" && <VerifiedBadge className="size-4" />}
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-1 pb-1">
                                {SubscriptionBadge && <SubscriptionBadge />}
                                {/* {agentDetails.subscription !== "Basic" && <VerifiedBadge />} */}
                            </div>

                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-sm">
                                {agentDetails?.profession.join(' | ')}
                            </p>
                            {agentDetails.isTeamMember && (
                                <div className="flex items-center gap-1 justify-center text-muted-foreground">
                                    <BriefcaseBusiness className="size-3" />
                                    <p className="text-muted-foreground text-xs">Dubai Elite Properties</p>
                                </div>
                            )}
                        </div>
                    </div>



                    <div className="flex flex-wrap gap-5 text-sm">
                        <div className='flex items-center gap-0.5 text-foreground'>
                            <Star className='size-4 text-muted-foreground fill-warning stroke-transparent' />
                            <span className="">{agentDetails.rating} <small className="text-muted-foreground font-normal">({agentDetails.reviews})</small></span>
                        </div>
                        <div className='flex items-center gap-0.5 text-foreground'>
                            <MapPin className='size-4 text-muted-foreground fill-primary stroke-white' />
                            <span className="" >{agentDetails.location}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 w-full *:w-full">
                        <EmailButton 
                            email={agentDetails.email}
                        />
                        <PhoneButton
                            phone={"213123123"}
                        />
                        <WhatsappButton
                            whatsapp={"213123123"}
                        />
                    </div>
                </SurfaceCard>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="font-bold font-heading">About</h3>
                <p className="text-muted-foreground text-sm leading-loose ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim consequuntur aliquid praesentium iste autem! Voluptate temporibus aliquid illum dolorem.
                </p>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="font-bold font-heading">Professional Information</h3>
                <div className="flex flex-col gap-5 pt-2">
                    <div className="flex flex-col gap-0.5">
                        <h4 className="text-sm flex items-center gap-0.5 text-muted-foreground">
                            <IconLicense className="size-3" />
                            License
                        </h4>
                        <p className="text-sm font-medium">8979812</p>
                    </div>
                    {/* <Separator /> */}
                    <div className="flex flex-col gap-0.5 text-sm">
                        <h4 className="text-sm flex items-center gap-0.5 text-muted-foreground">
                            <Award className="size-3" />
                            Experience
                        </h4>
                        <p className="text-sm font-medium">12 years</p>
                    </div>
                    {/* <Separator /> */}
                    <div className="flex flex-col gap-0.5">
                        <h4 className=" text-sm flex items-center gap-0.5 text-muted-foreground">
                            <LanguagesIcon className="size-3" />
                            Languages
                        </h4>
                        <p className="text-sm font-medium">English, Arabic</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold font-heading">Specialization</h3>
                <div className="flex flex-wrap gap-2">
                    {agentDetails.specialization.map((specialization, index) => (
                        <Badge key={index} variant={"muted"} type={"outline"} className="rounded-full border h-6">
                            {specialization}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AgentInfoSection