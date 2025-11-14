import { VerifiedBadge } from "@/shared/components/badges/verified-badges"
import {
    Award,
    LanguagesIcon,
    MapPin,
    Star
} from "lucide-react"
import { IconLicense } from "@tabler/icons-react"
import { Badge } from "@/shared/components/ui/badge"
import Image from 'next/image'
import { getSubscriptionBadge } from '@/shared/lib/helpers'
import { agent } from '@/shared/constants/images'
import { SurfaceCard } from '@/shared/components/ui/surface-card'
import { cn } from '@/shared/lib/utils'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'
import { AgencyCardProps } from '@/features/search/components/agency-card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion'



function AgencyInfoSection(props: AgencyCardProps) {
    const SubscriptionBadge = getSubscriptionBadge(props.subscription)
    const agencyDetails = props

    return (
        <div
            className={cn(
                "flex flex-col gap-5",
                "overflow-y-auto overflow-x-hidden h-fit max-h-[calc(100vh-3rem)] sticky top-6 mt-6",
            )}
        >
            <div className="bg-background-light/80 backdrop-blur-sm">
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
                                <h2 className="text-xl font-bold font-heading">{agencyDetails?.name}</h2>
                                <div className="absolute -top-2 -right-4">
                                    {agencyDetails.subscription !== "Basic" && <VerifiedBadge className="size-4" />}
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-1 pb-1">
                                {SubscriptionBadge && <SubscriptionBadge />}
                                {/* {agentDetails.subscription !== "Basic" && <VerifiedBadge />} */}
                            </div>

                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-sm">
                                {agencyDetails?.profession.join(' | ')}
                            </p>
                        </div>
                    </div>



                    <div className="flex flex-wrap gap-5 text-sm">
                        <div className='flex items-center gap-0.5 text-foreground'>
                            <Star className='size-4 text-muted-foreground fill-warning stroke-transparent' />
                            <span className="">{agencyDetails.rating} <small className="text-muted-foreground font-normal">({agencyDetails.reviews})</small></span>
                        </div>
                        <div className='flex items-center gap-0.5 text-foreground'>
                            <MapPin className='size-4 text-muted-foreground fill-primary stroke-white' />
                            <span className="" >{agencyDetails.location}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 w-full *:w-full">
                        <EmailButton
                            email={agencyDetails.email}
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

            <Accordion
                type='single'
                collapsible
                className='w-full'
            >
                <AccordionItem value='about'>
                    <AccordionTrigger className='cursor-pointer'>
                        <h3 className="font-bold font-heading text-base">About</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-muted-foreground text-base leading-loose">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim consequuntur aliquid praesentium iste autem! Voluptate temporibus aliquid illum dolorem.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='professional-information'>
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
                                <p className="text-sm font-medium text-base">English, Arabic</p>
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
                            {agencyDetails.specialization.map((specialization, index) => (
                                <Badge key={index} variant={"muted"} type={"outline"} className="rounded-sm border h-6">
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

export default AgencyInfoSection