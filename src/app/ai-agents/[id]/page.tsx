import React from 'react'
import { AGENTS, AI_AGENTS, SERVICES } from "@/app/search/page"
import { Filter } from "lucide-react"
import { notFound } from "next/navigation"
import { Tabs, TabsContent } from "@/shared/components/ui/tabs"
import { TabsList, TabsTrigger } from "@/ui/tabs"
import { AGENT_DETAILS_TAB, AI_AGENT_DETAILS_TAB } from "@/shared/constants/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectTriggerProps, SelectValue } from "@/shared/components/ui/select"
import PropertyCard from "@/features/search/components/property-card"
import AgentReviewCard from "@/features/agent/components/agent-review-card"
import AgentInfoSection from "@/features/agent/components/agent-info-section"
import { AGENT_REVIEWS, PROPERTY_CARDS } from "@/features/agent/components/data"
import BackButton from "@/shared/components/back-button"
import ServiceCard from "@/features/search/components/service-card"
import { OutlineTabsList, OutlineTabsTrigger } from "@/shared/components/ui/tabs/outline-tabs"
import AiAgentInfoCard from '@/features/ai-agents/components/ai-agent-info-card'
import AgentInformationDetailsTabContent from '@/features/ai-agents/components/agent-information-details-tab-content'
import TechnicalDetailsTabContent from '@/features/ai-agents/components/technical-details-tab-content'

function getAiAgentDetails(id: string) {
    return AI_AGENTS.find((aiAgent) => aiAgent.id === id)
}

async function AiAgentDetailsPage(props: PageProps<"/ai-agents/[id]">) {
    const { id } = await props.params
    const aiAgentDetails = getAiAgentDetails(id)

    if (!aiAgentDetails) {
        return notFound()
    }

    return (
        <div className="bg-background-light pb-16">
            <div className="container grid grid-cols-[350px_1fr] gap-6 relative">
                {/* Agent Profile Info Side */}
                <AiAgentInfoCard {...aiAgentDetails} />

                {/* Agent Services Side */}
                <Tabs defaultValue={AI_AGENT_DETAILS_TAB.AGENT_INFORMATION.value}>
                    <div className="flex flex-col gap-0">
                        <div className="py-6 top-0 sticky bg-background-light backdrop-blur-sm overflow-hidden z-30">
                            <OutlineTabsList>
                                {Object.values(AI_AGENT_DETAILS_TAB).map((tab) => (
                                    <OutlineTabsTrigger
                                        key={tab.value}
                                        value={tab.value}
                                    >
                                        {tab.label}
                                    </OutlineTabsTrigger>
                                ))}
                            </OutlineTabsList>
                        </div>


                        {/* Agent Information Content */}
                        <TabsContent
                            value={AI_AGENT_DETAILS_TAB.AGENT_INFORMATION.value}
                        >
                            <AgentInformationDetailsTabContent 
                                {...aiAgentDetails}
                            />
                        </TabsContent>
                        
                        {/* Technical Details Content */}
                        <TabsContent
                            value={AI_AGENT_DETAILS_TAB.TECHNICAL_DETAILS.value}
                            className="grid grid-cols-1 md:grid-cols-1 gap-6"
                        >
                            <TechnicalDetailsTabContent />
                        </TabsContent>
                        
                        {/* Pricing Content */}
                        <TabsContent
                            value={AI_AGENT_DETAILS_TAB.PRICING.value}
                            className="grid grid-cols-1 md:grid-cols-1 gap-6"
                        >
                            
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default AiAgentDetailsPage