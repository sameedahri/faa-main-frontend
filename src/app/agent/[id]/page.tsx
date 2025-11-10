import { AGENTS } from "@/app/search/page"
import { Button } from "@/shared/components/ui/button"
import { VerifiedBadge } from "@/shared/components/badges/verified-badges"
import { agent } from "@/shared/constants/images"
import { getSubscriptionBadge } from "@/shared/lib/helpers"
import { Award, BriefcaseBusiness, Filter, LanguagesIcon, Mail, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { IconBrandWhatsapp, IconLicense } from "@tabler/icons-react"
import Link from "next/link"
import { Badge } from "@/shared/components/ui/badge"
import { Tabs, TabsContent } from "@/shared/components/ui/tabs"
import { TabsList, TabsTrigger } from "@/ui/tabs"
import { AGENT_DETAILS_TAB } from "@/shared/constants/tabs"
import { Separator } from "@/shared/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select"
import PropertyCard, { PropertyCardProps } from "@/features/search/components/property-card"
import AgentServiceCard, { AgentServiceCardProps } from "@/features/agent/components/agent-service-card"
import AgentReviewCard, { AgentReviewCardProps } from "@/features/agent/components/agent-review-card"

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
            <div className="container grid grid-cols-[350px_1fr] gap-7 py-7">
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
                        <div className="grid grid-cols-3 gap-2 w-full">
                            <Button
                                variant={"outline"}
                                className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                                asChild
                            >
                                <Link href={`mailto:${agentDetails.email}`} target="_blank">
                                    <Mail />
                                </Link>
                            </Button>
                            <Button
                                variant={"outline"}
                                className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                                asChild
                            >
                                <Link href={`tel:1234567890`}>
                                    <Phone />
                                </Link>
                            </Button>
                            <Button
                                variant={"soft-success"}
                                asChild
                            >
                                <Link href="https://wa.me/1234567890" target="_blank">
                                    <IconBrandWhatsapp className='size-5' />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-background-light/70 rounded-md p-6 flex flex-col gap-1">
                        <h3 className="font-bold font-heading">About</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim consequuntur aliquid praesentium iste autem! Voluptate temporibus aliquid illum dolorem.
                        </p>
                    </div>
                    <div className="bg-background-light/70 rounded-md p-6 flex flex-col gap-1">
                        <h3 className="font-bold font-heading">Professional Information</h3>
                        <div className="flex flex-col gap-5 pt-2">
                            <div className="flex flex-col gap-0.5">
                                <h4 className="text-sm flex items-center gap-0.5 font-medium text-foreground ">
                                    <IconLicense className="size-4" />
                                    License
                                </h4>
                                <p className="text-sm">8979812</p>
                            </div>
                            {/* <Separator /> */}
                            <div className="flex flex-col gap-0.5 text-sm">
                                <h4 className="text-sm flex items-center gap-0.5 text-foreground font-medium">
                                    <Award className="size-4" />
                                    Experience
                                </h4>
                                <p className="text-sm">12 years</p>
                            </div>
                            {/* <Separator /> */}
                            <div className="flex flex-col gap-0.5">
                                <h4 className=" text-sm flex items-center gap-0.5 text-foreground font-medium">
                                    <LanguagesIcon className="size-4" />
                                    Languages
                                </h4>
                                <p className="text-sm">English, Arabic</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background-light/70 rounded-md p-6 flex flex-col gap-3">
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

                {/* Agent Services Side */}
                <Tabs defaultValue={AGENT_DETAILS_TAB.PROPERTIES.value}>
                    <div className="flex flex-col gap-6">
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

                        {/* Filter Card */}
                        <div className="bg-background-light w-full rounded-md p-4 flex flex-col gap-4">
                            <h3 className="text-base font-semibold font-heading flex items-center gap-1.5">
                                <Filter className="size-4.5" />
                                Filters Properties
                            </h3>
                            <div className="grid grid-cols-4 gap-3">
                                <Select>
                                    <SelectTrigger size={"sm"} className="border-border">
                                        <SelectValue placeholder="All Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="sale">Sale</SelectItem>
                                        <SelectItem value="rent">Rent</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger size={"sm"} className="border-border">
                                        <SelectValue placeholder="All Property Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="apartment">Apartment</SelectItem>
                                        <SelectItem value="villa">Villa</SelectItem>
                                        <SelectItem value="townhouse">Townhouse</SelectItem>
                                        <SelectItem value="plot">Plot</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger size={"sm"} className="border-border">
                                        <SelectValue placeholder="Any Beds" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1 bedroom">1 Bedroom</SelectItem>
                                        <SelectItem value="2 bedroom">2 Bedroom</SelectItem>
                                        <SelectItem value="3 bedroom">3 Bedroom</SelectItem>
                                        <SelectItem value="4 bedroom">4 Bedroom</SelectItem>
                                        <SelectItem value="5 bedroom">5 Bedroom</SelectItem>
                                        <SelectItem value="6 bedroom">6 Bedroom</SelectItem>
                                        <SelectItem value="7 bedroom">7 Bedroom</SelectItem>
                                        <SelectItem value="8 bedroom">8 Bedroom</SelectItem>
                                        <SelectItem value="9 bedroom">9 Bedroom</SelectItem>
                                        <SelectItem value="10 bedroom">10 Bedroom</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger size={"sm"} className="border-border">
                                        <SelectValue placeholder="Any Price" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="100000">100,000</SelectItem>
                                        <SelectItem value="200000">200,000</SelectItem>
                                        <SelectItem value="300000">300,000</SelectItem>
                                        <SelectItem value="400000">400,000</SelectItem>
                                        <SelectItem value="500000">500,000</SelectItem>
                                        <SelectItem value="600000">600,000</SelectItem>
                                        <SelectItem value="700000">700,000</SelectItem>
                                        <SelectItem value="800000">800,000</SelectItem>
                                        <SelectItem value="900000">900,000</SelectItem>
                                        <SelectItem value="1000000">1,000,000</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* List of Properties */}
                        <TabsContent 
                            value={AGENT_DETAILS_TAB.PROPERTIES.value}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {PROPERTY_CARDS.map((property, index) => (
                                <PropertyCard key={index} {...property} />
                            ))}
                        </TabsContent>
                        <TabsContent
                            value={AGENT_DETAILS_TAB.SERVICES.value}
                            className="grid grid-cols-1 md:grid-cols-1 gap-6"
                        >
                            {AGENT_SERVICES.map((service, index) => (
                                <AgentServiceCard key={index} {...service} />
                            ))}
                        </TabsContent>
                        <TabsContent
                            value={AGENT_DETAILS_TAB.REVIEWS.value}
                            className="grid grid-cols-1 md:grid-cols-1 gap-6"
                        >
                            {AGENT_REVIEWS.map((review, index) => (
                                <AgentReviewCard key={index} {...review} />
                            ))}
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

const AGENT_REVIEWS: AgentReviewCardProps[] = [
    {
        name: "John Doe",
        review: "Absolutely outstanding service! The agent went above and beyond to find me the perfect property in Downtown Dubai. Their knowledge of the market, attention to detail, and negotiation skills saved me both time and money. Highly professional and always responsive. I couldn't have asked for a better experience!",
        rating: 5,
        date: "2021-01-01",
    },
    {
        name: "Jane Doe",
        review: "Great experience overall. The agent was knowledgeable and helped me find a beautiful apartment in Dubai Marina. The process was smooth and they were always available to answer my questions. Only minor issue was some delays in paperwork, but everything worked out in the end. Would definitely recommend!",
        rating: 4,
        date: "2021-01-02",
    },
    {
        name: "Jim Doe",
        review: "Decent service, but there's room for improvement. The agent showed me several properties and was generally helpful, but I felt the communication could have been better. Some viewings were not well organized and I had to follow up multiple times. Eventually found a property that works for me.",
        rating: 3,
        date: "2021-01-03",
    },
    {
        name: "Jill Doe",
        review: "Disappointed with the service. The agent seemed more interested in closing deals quickly rather than understanding my needs. Several properties shown were not what I asked for, and there was a lack of transparency about additional fees. Expected better professionalism.",
        rating: 2,
        date: "2021-01-04",
    },
    {
        name: "Jack Doe",
        review: "Very poor experience. The agent was unprofessional, frequently late for viewings, and provided inaccurate information about properties. When issues arose, they were unresponsive and unhelpful. Had to find another agent to complete my property search. Would not recommend.",
        rating: 1,
        date: "2021-01-05",
    },
    {
        name: "Sarah Ahmed",
        review: "Not satisfied with the level of service. While the agent was polite, they lacked knowledge about the areas I was interested in and couldn't answer basic questions about the properties. The follow-up was inconsistent and I felt my concerns weren't taken seriously.",
        rating: 2,
        date: "2021-01-06",
    },
    {
        name: "Michael Chen",
        review: "Extremely unprofessional and unreliable. Appointments were cancelled last minute without proper explanation, and the agent showed properties that were completely out of my budget despite clear instructions. Wasted several weeks before switching to another agent. Not recommended at all.",
        rating: 1,
        date: "2021-01-07",
    },
]

const AGENT_SERVICES: AgentServiceCardProps[] = [
    {
        title: "Property Inspection",
        description: "Comprehensive property inspection service covering structural integrity, electrical systems, plumbing, and overall condition assessment.",
        price: 1000,
        image: agent.agentImage1,
    },
    {
        title: "Property Valuation",
        description: "Professional property valuation based on current market trends, comparable sales, and location analysis for accurate pricing.",
        price: 1500,
        image: agent.agentImage1,
    },
    {
        title: "Home Staging Consultation",
        description: "Expert advice on preparing your property for sale including furniture arrangement, decor suggestions, and presentation tips.",
        price: 800,
        image: agent.agentImage1,
    },
    {
        title: "Mortgage Advisory",
        description: "Get connected with the best mortgage providers and receive guidance on financing options tailored to your budget.",
        price: 500,
        image: agent.agentImage1,
    },
    {
        title: "Legal Documentation Assistance",
        description: "Complete support with all legal paperwork including contracts, NOCs, title deeds, and transfer documentation.",
        price: 1200,
        image: agent.agentImage1,
    },
    {
        title: "Property Marketing Package",
        description: "Full marketing service including professional photography, video tours, social media promotion, and listing on premium platforms.",
        price: 2000,
        image: agent.agentImage1,
    },
    {
        title: "Virtual Property Tour",
        description: "High-quality 3D virtual tours and video walkthroughs allowing buyers to explore properties remotely.",
        price: 750,
        image: agent.agentImage1,
    },
    {
        title: "Relocation Services",
        description: "Complete relocation support including area tours, school information, utility setup, and community orientation.",
        price: 1800,
        image: agent.agentImage1,
    },
    {
        title: "Investment Consultation",
        description: "Strategic investment advice on property portfolios, ROI analysis, rental yield projections, and market opportunities.",
        price: 2500,
        image: agent.agentImage1,
    },
    {
        title: "Property Management Setup",
        description: "Assistance with setting up property management including tenant screening, lease agreements, and maintenance coordination.",
        price: 1500,
        image: agent.agentImage1,
    },
]

const PROPERTY_CARDS: PropertyCardProps[] = [
    {
        title: "Luxury Villa in Palm Jumeirah",
        price: 100000,
        location: "Palm Jumeirah, Dubai",
        bedrooms: 3,
        bathrooms: 2,
        area: 1000,
    },
    {
        title: "Modern Apartment in Downtown Dubai",
        price: 200000,
        location: "Downtown Dubai, Dubai",
        bedrooms: 4,
        bathrooms: 3,
        area: 1500,
    },
    {
        title: "Spacious Townhouse in Arabian Ranches",
        price: 300000,
        location: "Arabian Ranches, Dubai",
        bedrooms: 5,
        bathrooms: 4,
        area: 2000,
    },
    {
        title: "Penthouse in Dubai Marina",
        price: 400000,
        location: "Dubai Marina, Dubai",
        bedrooms: 6,
        bathrooms: 5,
        area: 2500,
    },
    {
        title: "Beachfront Villa in Jumeirah Beach Residence",
        price: 500000,
        location: "Jumeirah Beach Residence, Dubai",
        bedrooms: 7,
        bathrooms: 6,
        area: 3000,
    },
    {
        title: "Contemporary Apartment in Business Bay",
        price: 600000,
        location: "Business Bay, Dubai",
        bedrooms: 8,
        bathrooms: 7,
        area: 3500,
    },
    {
        title: "Elegant Villa in Emirates Hills",
        price: 700000,
        location: "Emirates Hills, Dubai",
        bedrooms: 9,
        bathrooms: 8,
        area: 4000,
    },
]


export default AgentDetailsPage