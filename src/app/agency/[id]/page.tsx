import AgencyInfoSection from '@/features/agencies/components/agency-info-section'
import AgentReviewCard from '@/features/agent/components/agent-review-card'
import { AGENCIES, AGENT_REVIEWS, AGENTS, PROPERTY_CARDS, SERVICES } from '@/features/agent/components/data'
import AgentCard from '@/features/search/components/agent-card'
import PropertyCard from '@/features/search/components/property-card'
import ServiceCard from '@/features/search/components/service-card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectTriggerProps, SelectValue } from '@/shared/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs'
import { OutlineTabsList, OutlineTabsTrigger } from '@/shared/components/ui/tabs/outline-tabs'
import { AGENCY_DETAILS_TABS } from '@/shared/constants/tabs'
import { Filter } from 'lucide-react'
import { notFound } from 'next/navigation'


function getAgencyDetails(id: string) {
    return AGENCIES.find((agency) => agency.id === id)
}

async function AgencyDetailsPage(props: PageProps<"/agency/[id]">) {
    const { id } = await props.params
    const agencyDetails = getAgencyDetails(id)

    if (!agencyDetails) {
        return notFound()
    }

    return (
        <div className="bg-background-dark relative pb-16">
            <div className="container grid grid-cols-[350px_1fr] gap-section-space">
                {/* Agent Profile Info Side */}
                <AgencyInfoSection {...agencyDetails} />

                {/* Agent Services Side */}
                <Tabs defaultValue={AGENCY_DETAILS_TABS.PROPERTIES.value}>
                    <div className="flex flex-col gap-0">
                        <div className="py-section-space top-0 sticky bg-background-dark backdrop-blur-sm overflow-hidden z-30">
                            <OutlineTabsList className='border-none'>
                                {Object.values(AGENCY_DETAILS_TABS).map((tab) => (
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
                            value={AGENCY_DETAILS_TABS.PROPERTIES.value}
                        >
                            <div className="flex flex-col gap-card-list-space">
                                {/* Filter Card */}
                                <div className="w-full p-3 rounded-md bg-background-light flex flex-col gap-2">
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
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-card-list-space">
                                    {PROPERTY_CARDS.map((property, index) => (
                                        <PropertyCard
                                            key={index}
                                            property={{ ...property }}
                                            className="from-background-light bg-background-light"
                                            orientation="horizontal"
                                        />
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* List of Services */}
                        <TabsContent
                            value={AGENCY_DETAILS_TABS.SERVICES.value}
                            className="grid grid-cols-1 md:grid-cols-1 gap-card-list-space"
                        >
                            {SERVICES.map((service, index) => (
                                <ServiceCard key={index} service={service} />
                            ))}
                        </TabsContent>

                        {/* List of Agents */}
                        <TabsContent
                            value={AGENCY_DETAILS_TABS.AGENTS.value}
                            className="grid grid-cols-1 md:grid-cols-1 gap-card-list-space"
                        >
                            {AGENTS.map((agent, index) => (
                                <AgentCard 
                                    key={index} 
                                    agent={agent} 
                                />
                            ))}
                        </TabsContent>

                        {/* List of Reviews */}
                        <TabsContent
                            value={AGENCY_DETAILS_TABS.REVIEWS.value}
                            className="grid grid-cols-1 md:grid-cols-1 gap-card-list-space"
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

export default AgencyDetailsPage