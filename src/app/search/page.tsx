import AgencyCard, { AgencyCardProps } from "@/features/search/components/agency-card"
import AgentCard, { AgentCardProps } from "@/features/search/components/agent-card"
import AiAgentCard, { AiAgentCardProps } from "@/features/search/components/ai-agent-card"
import FiltersNav from "@/features/search/components/filters-nav"
import FiltersSidebar from "@/features/search/components/filters-sidebar"
import ServiceCard, { ServiceCardProps } from "@/features/search/components/service-card"
import Footer from "@/shared/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { SearchTabType } from "@/shared/types/tabs.type"
import { SEARCH_TAB } from "@/shared/constants/tabs"
import { cn } from "@/shared/lib/utils"
import { INPUT_HEIGHT } from "@/shared/constants/styles"
import SearchTabs from "@/features/search/components/search-tabs"


export default async function SearchPage(props: PageProps<"/search">) {
    const searchParams = await props.searchParams
    const tab = searchParams["tab"] as SearchTabType || SEARCH_TAB.AGENTS.value

    return (
        <Tabs defaultValue={tab}>
            <div className="pb-10 relative flex flex-col gap-0  bg-background">
                <FiltersNav />
                {/* <SearchTabs /> */}
                <div className="container grid grid-cols-[300px_1fr] items-start gap-7 relative">
                    <FiltersSidebar tab={tab} />
                    <div className="grid grid-cols-1 gap-5">
                        
                        <TabsContent value={SEARCH_TAB.AGENTS.value}>
                            <div className="grid grid-cols-1 gap-7">
                                {AGENTS.map((agent, index) => (
                                    <AgentCard 
                                        key={index}
                                        className={cn({
                                            "shadow-[0px_0px_5px_1px] shadow-primary/30 border border-primary/40 hover:shadow-[0px_0px_10px_1px] hover:shadow-primary/60": index < 3,
                                        })} 
                                        {...agent}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value={SEARCH_TAB.AGENCIES.value}>
                            <div className="grid grid-cols-1 gap-7">
                                {agencies.map((agent, index) => (
                                    <AgencyCard
                                        key={index}
                                        {...agent}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value={SEARCH_TAB.SERVICES.value}>
                            <div className="grid grid-cols-1 gap-7">
                                {services.map((service, index) => (
                                    <ServiceCard
                                        key={index}
                                        {...service}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value={SEARCH_TAB.AI_AGENTS.value}>
                            <div className="grid grid-cols-1 gap-7">
                                {aiAgents.map((aiAgent, index) => (
                                    <AiAgentCard
                                        key={index}
                                        {...aiAgent}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                    </div>
                </div>
            </div>
        </Tabs>
    )
}

export const AGENTS: AgentCardProps[] = [
    {
        id: "1",
        name: "John Smith",
        email: "john.smith@example.com",
        profession: ["Estate Agent", "Real Estate Broker"],
        location: "Dubai UAE",
        rating: 4.5,
        reviews: 100,
        subscription: "Pro",
        specialization: ["Residential Properties", "Luxury Villas", "Downtown Apartments"],
        isTeamMember: true,
    },
    {
        id: "2",
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        profession: ["Property Consultant", "Investment Advisor"],
        location: "Abu Dhabi UAE",
        rating: 4.8,
        reviews: 156,
        subscription: "Elite",
        specialization: ["Commercial Real Estate", "Investment Properties", "Portfolio Management"]
    },
    {
        id: "3",
        name: "Mohammed Al-Rashid",
        email: "mohammed.al-rashid@example.com",
        profession: ["Commercial Real Estate Agent"],
        location: "Riyadh Saudi Arabia",
        rating: 4.6,
        reviews: 89,
        subscription: "Pro",
        specialization: ["Office Spaces", "Retail Properties", "Industrial Buildings"],
        isTeamMember: true,
    },
    {
        id: "4",
        name: "Emily Chen",
        email: "emily.chen@example.com",
        profession: ["Residential Property Specialist"],
        location: "Singapore",
        rating: 4.9,
        reviews: 203,
        subscription: "Elite",
        specialization: ["Condominiums", "HDB Flats", "Landed Properties"]
    },
    {
        id: "5",
        name: "David Martinez",
        email: "david.martinez@example.com",
        profession: ["Luxury Real Estate Advisor"],
        location: "London UK",
        rating: 4.7,
        reviews: 142,
        subscription: "Pro",
        specialization: ["Penthouses", "Prime Central London", "Historic Properties"]
    },
    {
        id: "6",
        name: "Fatima Hassan",
        email: "fatima.hassan@example.com",
        profession: ["Real Estate Broker", "Legal Consultant"],
        location: "Doha Qatar",
        rating: 4.3,
        reviews: 67,
        subscription: "Basic",
        specialization: ["Residential Sales", "Property Law", "Contract Negotiation"]
    },
    {
        id: "7",
        name: "James Wilson",
        email: "james.wilson@example.com",
        profession: ["Property Investment Manager"],
        location: "Toronto Canada",
        rating: 4.5,
        reviews: 98,
        subscription: "Standard",
        specialization: ["Multi-Family Properties", "REITs", "Property Development"],
        isTeamMember: true,
    },
    {
        id: "8",
        name: "Aisha Abdullah",
        email: "aisha.abdullah@example.com",
        profession: ["Real Estate Agent", "Mortgage Advisor"],
        location: "Kuwait City Kuwait",
        rating: 4.8,
        reviews: 178,
        subscription: "Elite",
        specialization: ["First-Time Buyers", "Mortgage Solutions", "Waterfront Properties"]
    },
    {
        id: "9",
        name: "Robert Thompson",
        email: "robert.thompson@example.com",
        profession: ["Commercial Property Specialist"],
        location: "New York USA",
        rating: 4.4,
        reviews: 124,
        subscription: "Pro",
        specialization: ["Manhattan Office Buildings", "Co-working Spaces", "Mixed-Use Developments"]
    },
    {
        id: "10",
        name: "Layla Ahmed",
        email: "layla.ahmed@example.com",
        profession: ["Estate Agent", "Property Developer"],
        location: "Sharjah UAE",
        rating: 4.6,
        reviews: 91,
        subscription: "Basic",
        specialization: ["New Developments", "Off-Plan Properties", "Family Homes"]
    }
];

const agencies: AgencyCardProps[] = [
    {
        id: "1",
        name: "Prime Properties Dubai",
        profession: ["Real Estate Agency", "Property Management"],
        location: "Dubai UAE",
        rating: 4.7,
        reviews: 234,
        subscription: "Elite",
        specialization: ["Luxury Villas", "Commercial Spaces", "Investment Properties"],
        noOfAgents: 45
    },
    {
        id: "2",
        name: "Global Realty Group",
        profession: ["International Real Estate", "Relocation Services"],
        location: "London UK",
        rating: 4.8,
        reviews: 412,
        subscription: "Elite",
        specialization: ["Prime Central London", "Corporate Housing", "Expat Services"],
        noOfAgents: 78
    },
    {
        id: "3",
        name: "Metro Real Estate Solutions",
        profession: ["Residential Sales", "Rental Services"],
        location: "New York USA",
        rating: 4.5,
        reviews: 189,
        subscription: "Pro",
        specialization: ["Manhattan Apartments", "Brooklyn Properties", "Co-op Sales"],
        noOfAgents: 32
    },
    {
        id: "4",
        name: "Al Sahara Properties",
        profession: ["Real Estate Brokerage", "Investment Advisory"],
        location: "Riyadh Saudi Arabia",
        rating: 4.6,
        reviews: 156,
        subscription: "Pro",
        specialization: ["Commercial Real Estate", "Residential Compounds", "Land Development"],
        noOfAgents: 28
    },
    {
        id: "5",
        name: "Skyline Property Consultants",
        profession: ["Property Consultancy", "Valuation Services"],
        location: "Singapore",
        rating: 4.9,
        reviews: 327,
        subscription: "Elite",
        specialization: ["Condominiums", "Landed Properties", "Commercial Leasing"],
        noOfAgents: 52
    },
    {
        id: "6",
        name: "Coastal Realty Partners",
        profession: ["Real Estate Agency"],
        location: "Miami USA",
        rating: 4.4,
        reviews: 98,
        subscription: "Standard",
        specialization: ["Waterfront Properties", "Luxury Condos", "Vacation Homes"],
        noOfAgents: 18
    },
    {
        id: "7",
        name: "Heritage Properties Ltd",
        profession: ["Estate Agency", "Property Sales"],
        location: "Abu Dhabi UAE",
        rating: 4.3,
        reviews: 145,
        subscription: "Standard",
        specialization: ["Residential Properties", "Off-Plan Sales", "Property Management"],
        noOfAgents: 22
    },
    {
        id: "8",
        name: "Maple Leaf Realty",
        profession: ["Real Estate Brokerage", "Mortgage Services"],
        location: "Toronto Canada",
        rating: 4.5,
        reviews: 203,
        subscription: "Pro",
        specialization: ["Residential Sales", "New Developments", "Investment Properties"],
        noOfAgents: 35
    },
    {
        id: "9",
        name: "Pearl Real Estate",
        profession: ["Property Agency"],
        location: "Doha Qatar",
        rating: 4.2,
        reviews: 87,
        subscription: "Basic",
        specialization: ["Apartments", "Villas", "Commercial Spaces"],
        noOfAgents: 12
    },
    {
        id: "10",
        name: "Prestige International Realty",
        profession: ["Luxury Real Estate", "Portfolio Management", "Concierge Services"],
        location: "Monaco",
        rating: 4.9,
        reviews: 178,
        subscription: "Elite",
        specialization: ["Ultra-Luxury Properties", "Penthouses", "International Investments"],
        noOfAgents: 24
    }
];

const services: ServiceCardProps[] = [
    {
        name: "Professional Property Valuation",
        industries: ["Real Estate", "Valuation", "Consulting"],
        location: "Dubai UAE",
        rating: 4.8,
        reviews: 156,
        price: 2500
    },
    {
        name: "Home Staging & Interior Design",
        industries: ["Interior Design", "Home Staging", "Real Estate"],
        location: "London UK",
        rating: 4.9,
        reviews: 203,
        price: 3500
    },
    {
        name: "Mortgage Advisory Services",
        industries: ["Finance", "Mortgage", "Consulting"],
        location: "New York USA",
        rating: 4.6,
        reviews: 142,
        price: 1500
    },
    {
        name: "Property Legal Documentation",
        industries: ["Legal", "Real Estate", "Documentation"],
        location: "Riyadh Saudi Arabia",
        rating: 4.7,
        reviews: 98,
        price: 2000
    },
    {
        name: "Real Estate Photography & Videography",
        industries: ["Photography", "Videography", "Marketing"],
        location: "Singapore",
        rating: 4.9,
        reviews: 287,
        price: 800
    },
    {
        name: "Property Management Solutions",
        industries: ["Property Management", "Maintenance", "Real Estate"],
        location: "Abu Dhabi UAE",
        rating: 4.5,
        reviews: 124,
        price: 5000
    },
    {
        name: "Investment Portfolio Analysis",
        industries: ["Investment", "Finance", "Consulting"],
        location: "Toronto Canada",
        rating: 4.8,
        reviews: 167,
        price: 3000
    },
    {
        name: "Architectural Consultation",
        industries: ["Architecture", "Design", "Construction"],
        location: "Doha Qatar",
        rating: 4.4,
        reviews: 89,
        price: 4500
    },
    {
        name: "Property Inspection & Survey",
        industries: ["Inspection", "Surveying", "Real Estate"],
        location: "Miami USA",
        rating: 4.7,
        reviews: 178,
        price: 1200
    },
    {
        name: "Real Estate Marketing & PR",
        industries: ["Marketing", "PR", "Digital Marketing"],
        location: "Monaco",
        rating: 4.9,
        reviews: 234,
        price: 6000
    }
];

const aiAgents: AiAgentCardProps[] = [
    {
        name: "Property Valuation AI Agent",
        industries: ["Real Estate", "Valuation", "Consulting"],
        rating: 4.8,
        reviews: 156,
        description: "Our AI agent is designed to provide accurate property valuations based on market data and expert analysis.",
        subscription: "Pro"
    },
    {
        name: "Property Valuation AI Agent",
        industries: ["Real Estate", "Valuation", "Consulting"],
        rating: 4.8,
        reviews: 156,
        description: "Our AI agent is designed to provide accurate property valuations based on market data and expert analysis.",
        subscription: "Pro"
    },
    {
        name: "Home Staging & Interior Design AI Agent",
        industries: ["Interior Design", "Home Staging", "Real Estate"],
        rating: 4.9,
        reviews: 203,
        description: "Our AI agent is designed to provide accurate home staging and interior design services based on market data and expert analysis.",
        subscription: "Elite"
    },
    {
        name: "Mortgage Advisory AI Agent",
        industries: ["Finance", "Mortgage", "Consulting"],
        rating: 4.6,
        reviews: 142,
        description: "Our AI agent is designed to provide accurate mortgage advisory services based on market data and expert analysis.",
        subscription: "Pro"
    },
    {
        name: "Property Legal Documentation AI Agent",
        industries: ["Legal", "Real Estate", "Documentation"],
        rating: 4.7,
        reviews: 98,
        description: "Our AI agent is designed to provide accurate property legal documentation services based on market data and expert analysis.",
        subscription: "Pro"
    },
    {
        name: "Real Estate Photography & Videography AI Agent",
        industries: ["Photography", "Videography", "Marketing"],
        rating: 4.9,
        reviews: 287,
        description: "Our AI agent is designed to provide accurate real estate photography and videography services based on market data and expert analysis.",
        subscription: "Elite"
    },
    {
        name: "Property Management Solutions AI Agent",
        industries: ["Property Management", "Maintenance", "Real Estate"],
        rating: 4.5,
        reviews: 124,
        description: "Our AI agent is designed to provide accurate property management solutions based on market data and expert analysis.",
        subscription: "Pro"
    },
    {
        name: "Investment Portfolio Analysis AI Agent",
        industries: ["Investment", "Finance", "Consulting"],
        rating: 4.8,
        reviews: 167,
        description: "Our AI agent is designed to provide accurate investment portfolio analysis services based on market data and expert analysis.",
        subscription: "Elite"
    }
];