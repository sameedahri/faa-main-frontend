import { AGENTS, services } from "@/app/search/page"
import { Filter } from "lucide-react"
import { notFound } from "next/navigation"
import { Tabs, TabsContent } from "@/shared/components/ui/tabs"
import { TabsList, TabsTrigger } from "@/ui/tabs"
import { AGENT_DETAILS_TAB } from "@/shared/constants/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectTriggerProps, SelectValue } from "@/shared/components/ui/select"
import PropertyCard from "@/features/search/components/property-card"
import AgentReviewCard from "@/features/agent/components/agent-review-card"
import AgentInfoSection from "@/features/agent/components/agent-info-section"
import { AGENT_REVIEWS, PROPERTY_CARDS } from "@/features/agent/components/data"
import BackButton from "@/shared/components/back-button"
import ServiceCard from "@/features/search/components/service-card"
import { OutlineTabsList, OutlineTabsTrigger } from "@/shared/components/ui/tabs/outline-tabs"

function getAgentDetails(id: string) {
    return AGENTS.find((agent) => agent.id === id)
}

async function AgentDetailsPage(props: PageProps<"/agent/[id]">) {
    const { id } = await props.params
    const agentDetails = getAgentDetails(id)

    if (!agentDetails) {
        return notFound()
    }

    return (
        <div className="bg-background-light pb-16">
            <div className="container grid grid-cols-[350px_1fr] gap-12 relative">
                {/* Agent Profile Info Side */}
                <AgentInfoSection {...agentDetails} />

                {/* Agent Services Side */}
                <Tabs defaultValue={AGENT_DETAILS_TAB.PROPERTIES.value}>
                    <div className="flex flex-col gap-0">
                        <div className="py-6 top-0 sticky bg-background-light backdrop-blur-sm overflow-hidden z-30">
                            <OutlineTabsList>
                                {Object.values(AGENT_DETAILS_TAB).map((tab) => (
                                    <OutlineTabsTrigger
                                        key={tab.value}
                                        value={tab.value}
                                    >
                                        {tab.label}
                                    </OutlineTabsTrigger>
                                ))}
                            </OutlineTabsList>
                        </div>


                        {/* List of Properties */}
                        <TabsContent
                            value={AGENT_DETAILS_TAB.PROPERTIES.value}
                        >
                            <>
                                {/* Filter Card */}
                                <div className="bg-background- border-t w-full py-5 flex flex-col gap-4 mb-2">
                                    <h3 className="text-base font-medium font-heading flex items-center gap-1.5">
                                        <Filter className="size-4.5" />
                                        Filters Properties
                                    </h3>
                                    <div className="grid grid-cols-4 gap-3">
                                        <Select>
                                            <FilterSelectTrigger>
                                                <SelectValue placeholder="All Type" />
                                            </FilterSelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sale">Sale</SelectItem>
                                                <SelectItem value="rent">Rent</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Select>
                                            <FilterSelectTrigger>
                                                <SelectValue placeholder="All Property Type" />
                                            </FilterSelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="apartment">Apartment</SelectItem>
                                                <SelectItem value="villa">Villa</SelectItem>
                                                <SelectItem value="townhouse">Townhouse</SelectItem>
                                                <SelectItem value="plot">Plot</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Select>
                                            <FilterSelectTrigger>
                                                <SelectValue placeholder="Any Beds" />
                                            </FilterSelectTrigger>
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
                                            <FilterSelectTrigger>
                                                <SelectValue placeholder="Any Price" />
                                            </FilterSelectTrigger>
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

                                {/* Property Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    {PROPERTY_CARDS.map((property, index) => (
                                        <PropertyCard
                                            key={index}
                                            property={{ ...property }}
                                            className="from-background-light bg-background-light"
                                            orientation="horizontal"
                                        />
                                    ))}
                                </div>
                            </>
                        </TabsContent>

                        <TabsContent
                            value={AGENT_DETAILS_TAB.SERVICES.value}
                            className="grid grid-cols-1 md:grid-cols-1 gap-6"
                        >
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
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

function FilterSelectTrigger(props: SelectTriggerProps) {
    return (
        <SelectTrigger
            size={"default"}
            className="bg-background-light border-border"
            {...props}
        />
    )
}



export default AgentDetailsPage