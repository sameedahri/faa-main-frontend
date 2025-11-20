import AgencyCard from "@/features/search/components/agency-card"
import AgentCard from "@/features/search/components/agent-card"
import AiAgentCard from "@/features/search/components/ai-agent-card"
import FiltersSidebar from "@/features/search/components/filters-sidebar"
import ServiceCard from "@/features/search/components/service-card"
import { Tabs, TabsContent } from "@/shared/components/ui/tabs"
import { SearchTabType } from "@/shared/types/tabs.type"
import { SEARCH_TAB } from "@/shared/constants/tabs"
import SearchTabs from "@/features/search/components/search-tabs"
import { AiAgent } from "@/features/ai-agents/types/ai-agent.type"
import { AGENCIES, AGENTS, SERVICES } from "@/features/agent/components/data"



export default async function SearchPage(props: PageProps<"/search">) {
    const searchParams = await props.searchParams
    const tab = searchParams["tab"] as SearchTabType || SEARCH_TAB.AGENTS.value

    return (
        <Tabs defaultValue={tab}>
            <div className="pb-10 relative flex flex-col gap-0 bg-background-dark">
                <div className="container grid grid-cols-[300px_1fr] items-start gap-section-space relative">
                    {/* Filter Sidebar */}
                    <FiltersSidebar tab={tab} />

                    {/* Navigation and Search Results */}
                    <div>
                        <SearchTabs />
                        <div className="grid grid-cols-1 gap-0 pt-0">
                            {/* Agent Results */}
                            <TabsContent value={SEARCH_TAB.AGENTS.value}>
                                <div className="grid grid-cols-1 gap-card-list-space">
                                    {AGENTS.map((agent, index) => (
                                        <AgentCard
                                            key={index}
                                            agent={agent}
                                        />
                                    ))}
                                </div>
                            </TabsContent>

                            {/* Agency Results */}
                            <TabsContent value={SEARCH_TAB.AGENCIES.value}>
                                <div className="grid grid-cols-1 gap-card-list-space">
                                    {AGENCIES.map((agency, index) => (
                                        <AgencyCard
                                            key={index}
                                            agency={agency}
                                        />
                                    ))}
                                </div>
                            </TabsContent>

                            {/* Service Results */}
                            <TabsContent value={SEARCH_TAB.SERVICES.value}>
                                <div className="grid grid-cols-1 gap-card-list-space">
                                    {SERVICES.map((service, index) => (
                                        <ServiceCard
                                            key={index}
                                            service={service}
                                        />
                                    ))}
                                </div>
                            </TabsContent>

                            {/* AI Agent Results */}
                            <TabsContent value={SEARCH_TAB.AI_AGENTS.value}>
                                <div className="grid grid-cols-1 gap-card-list-space">
                                    {AI_AGENTS.map((aiAgent, index) => (
                                        <AiAgentCard
                                            key={index}
                                            agent={aiAgent}
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        </div>
                    </div>
                </div>
            </div>
        </Tabs>
    )
}





export const AI_AGENTS: AiAgent[] = [
    {
        id: "1",
        name: "Property Valuation",
        industries: ["Real Estate", "Valuation", "Consulting"],
        rating: 4.8,
        reviews: 156,
        description: "Our AI agent is designed to provide accurate property valuations based on market data and expert analysis.",
        subscription: "Pro",
        companyName: "ValuPro Analytics",
        email: "property.valuation@company.com",
        phone: "+971 50 123 4567",
        whatsapp: "+971 50 123 4567"
    },
    {
        id: "2",
        name: "Property Valuation",
        industries: ["Real Estate", "Valuation", "Consulting"],
        rating: 4.8,
        reviews: 156,
        description: "Our AI agent is designed to provide accurate property valuations based on market data and expert analysis.",
        subscription: "Pro",
        companyName: "EstateValue AI",
        email: "property.valuation@company.com",
        phone: "+971 50 123 4567",
        whatsapp: "+971 50 123 4567"
    },
    {
        id: "3",
        name: "Home Staging & Interior Design",
        industries: ["Interior Design", "Home Staging", "Real Estate"],
        rating: 4.9,
        reviews: 203,
        description: "Our AI agent is designed to provide accurate home staging and interior design services based on market data and expert analysis.",
        subscription: "Elite",
        companyName: "StageRight Interiors",
        email: "home.staging.interior.design@company.com",
        phone: "+971 50 123 4567",
        whatsapp: "+971 50 123 4567"
    },
    {
        id: "4",
        name: "Mortgage Advisory",
        industries: ["Finance", "Mortgage", "Consulting"],
        rating: 4.6,
        reviews: 142,
        description: "Our AI agent is designed to provide accurate mortgage advisory services based on market data and expert analysis.",
        subscription: "Pro",
        companyName: "HomeLoan Experts",
        email: "mortgage.advisory@company.com",
        phone: "+971 50 123 4567",
        whatsapp: "+971 50 123 4567"
    },
    {
        id: "5",
        name: "Property Legal Documentation",
        industries: ["Legal", "Real Estate", "Documentation"],
        rating: 4.7,
        reviews: 98,
        description: "Our AI agent is designed to provide accurate property legal documentation services based on market data and expert analysis.",
        subscription: "Pro",
        companyName: "LegalEstate Partners",
        email: "property.legal.documentation@company.com",
        phone: "+971 50 123 4567",
        whatsapp: "+971 50 123 4567"
    },
    {
        id: "6",
        name: "Real Estate Photography & Videography",
        industries: ["Photography", "Videography", "Marketing"],
        rating: 4.9,
        reviews: 287,
        description: "Our AI agent is designed to provide accurate real estate photography and videography services based on market data and expert analysis.",
        subscription: "Elite",
        companyName: "VisualSpace Media",
        email: "real.estate.photography.videography@company.com",
        phone: "+971 50 123 4567",
        whatsapp: "+971 50 123 4567"
    },
    {
        id: "7",
        name: "Property Management Solutions",
        industries: ["Property Management", "Maintenance", "Real Estate"],
        rating: 4.5,
        reviews: 124,
        description: "Our AI agent is designed to provide accurate property management solutions based on market data and expert analysis.",
        subscription: "Pro",
        companyName: "PropTech Management",
        email: "property.management.solutions@company.com",
        phone: "+971 50 123 4567",
        whatsapp: "+971 50 123 4567"
    },
    {
        id: "8",
        name: "Investment Portfolio Analysis",
        industries: ["Investment", "Finance", "Consulting"],
        rating: 4.8,
        reviews: 167,
        description: "Our AI agent is designed to provide accurate investment portfolio analysis services based on market data and expert analysis.",
        subscription: "Elite",
        companyName: "WealthWise Investments",
        email: "investment.portfolio.analysis@company.com",
        phone: "+971 50 123 4567",
        whatsapp: "+971 50 123 4567"
    }
];