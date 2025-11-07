import { AGENTS } from "@/app/search/page"
import { Button } from "@/shared/components/ui/button"
import { VerifiedBadge } from "@/shared/components/badges/verified-badges"
import { agent } from "@/shared/constants/images"
import { getSubscriptionBadge } from "@/shared/lib/helpers"
import { Award, BriefcaseBusiness, LanguagesIcon, Mail, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { IconBrandWhatsapp, IconLicense } from "@tabler/icons-react"
import Link from "next/link"
import { Badge } from "@/shared/components/ui/badge"
import { Tabs } from "@/shared/components/ui/tabs"
import { TabsList, TabsTrigger } from "@/ui/tabs"
import { AGENT_DETAILS_TAB } from "@/shared/constants/tabs"
import { Separator } from "@/shared/components/ui/separator"

function getAgentDetails(id: string) {
    return AGENTS.find((agent) => agent.id === id)
}

async function AgentDetailsPage(props: PageProps<"/agent/[id]">) {
    const { id } = await props.params
    const agentDetails = getAgentDetails(id)

    if (!agentDetails) {
        return notFound()
    }

    const SubscriptionBadge = getSubscriptionBadge(agentDetails.subscription)

    return (
        <div className="bg-background">
            <div className="container grid grid-cols-[400px_1fr] gap-7 py-7">
                {/* Agent Profile Info Side */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4 items-center bg-background-light rounded-md p-6 relative">
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
                                <p className="text-muted-foreground">{agentDetails?.profession.join(' | ')}</p>
                                {agentDetails.isTeamMember && (
                                    <div className="flex items-center gap-1 justify-center text-muted-foreground text-sm">
                                        <BriefcaseBusiness className="size-4" />
                                        <p className="text-muted-foreground text-sm">Dubai Elite Properties</p>
                                    </div>
                                )}
                            </div>
                        </div>



                        <div className="flex flex-wrap gap-5 text-sm">
                            <div className='flex items-center gap-1 text-foreground'>
                                <Star className='size-4 text-muted-foreground fill-warning stroke-transparent' />
                                <span className="">{agentDetails.rating} <small className="text-muted-foreground font-normal">({agentDetails.reviews})</small></span>
                            </div>
                            <div className='flex items-center gap-1 text-foreground'>
                                <MapPin className='size-4 text-muted-foreground fill-destructive stroke-white' />
                                <span className="" >{agentDetails.location}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 w-full">
                            <Button
                                variant={"outline"}
                                className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                            // onClick={(e) => {
                            //     e.stopPropagation()
                            //     e.preventDefault()
                            //     // router.push(`mailto:${agentDetails.email}`)
                            // }}
                            >
                                <Mail />
                                {/* Email */}
                            </Button>
                            <Button
                                variant={"outline"}
                                className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                            // onClick={(e) => {
                            //     e.stopPropagation()
                            //     e.preventDefault()
                            //     // router.push(`tel:1234567890`, {})
                            // }}
                            >
                                <Phone />
                                {/* Call */}
                            </Button>
                            <Button
                                variant={"soft-success"}
                                asChild
                            // onClick={(e) => {
                            //     e.stopPropagation()
                            // }}
                            >
                                <Link href="https://wa.me/1234567890" target="_blank">
                                    <IconBrandWhatsapp className='size-5' />
                                    {/* WhatsApp */}
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-background-light rounded-md p-6 flex flex-col gap-1">
                        <h3 className="text-lg font-bold font-heading">About</h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim consequuntur aliquid praesentium iste autem! Voluptate temporibus aliquid illum dolorem.
                        </p>
                    </div>
                    <div className="bg-background-light rounded-md p-6 flex flex-col gap-1">
                        <h3 className="text-lg font-bold font-heading">Professional Information</h3>
                        <div className="flex flex-col gap-5 pt-2">
                            <div className="flex flex-col gap-0.5">
                                <h4 className="text-sm flex items-center gap-0.5 font-base text-muted-foreground font-medium">
                                    <IconLicense className="size-4" />
                                    License
                                </h4>
                                <p>8979812</p>
                            </div>
                            {/* <Separator /> */}
                            <div className="flex flex-col gap-0.5">
                                <h4 className="text-sm flex items-center gap-0.5 font-base font-medium text-muted-foreground">
                                    <Award className="size-4" />
                                    Experience
                                </h4>
                                <p>12 years</p>
                            </div>
                            {/* <Separator /> */}
                            <div className="flex flex-col gap-0.5">
                                <h4 className=" text-sm flex items-center gap-0.5 font-base text-muted-foreground font-medium">
                                    <LanguagesIcon className="size-4" />
                                    Languages
                                </h4>
                                <p>English, Arabic</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background-light rounded-md p-6 flex flex-col gap-2">
                        <h3 className="text-lg font-bold font-heading">Specialization</h3>
                        <div className="flex flex-wrap gap-2">
                            {agentDetails.specialization.map((specialization, index) => (
                                <Badge key={index} variant={"muted"} type={"outline"} className="rounded-full border h-6">
                                    {specialization}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Agent Services Side */}
                <Tabs defaultValue={AGENT_DETAILS_TAB.PROPERTIES.value}>
                    <div className="flex flex-col gap-2">
                        <TabsList className="bg-background-light w-full p-1 shadow-sm">
                            {Object.values(AGENT_DETAILS_TAB).map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    className="rounded-sm h-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:font-medium text-muted-foreground"
                                    value={tab.value}

                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default AgentDetailsPage