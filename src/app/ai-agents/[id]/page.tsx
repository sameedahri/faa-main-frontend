import { AI_AGENTS } from "@/app/search/page"
import { notFound } from "next/navigation"
import { Tabs, TabsContent } from "@/shared/components/ui/tabs"
import { AI_AGENT_DETAILS_TAB } from "@/shared/constants/tabs"
import { OutlineTabsList, OutlineTabsTrigger } from "@/shared/components/ui/tabs/outline-tabs"
import AiAgentInfoCard from '@/features/ai-agents/components/ai-agent-info-card'
import AgentInformationDetailsTabContent from '@/features/ai-agents/components/agent-information-details-tab-content'
import TechnicalDetailsTabContent from '@/features/ai-agents/components/technical-details-tab-content'
import { Separator } from '@/shared/components/ui/separator'
import AiAgentCard from '@/features/search/components/ai-agent-card'

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
        <div className="bg-background-dark pb-16">
            <div className="container grid grid-cols-[350px_1fr] gap-section-space relative">
                {/* Agent Profile Info Side */}
                <AiAgentInfoCard agent={aiAgentDetails} />

                {/* Agent Services Side */}
                <Tabs defaultValue={AI_AGENT_DETAILS_TAB.AGENT_INFORMATION.value}>
                    <div className="flex flex-col gap-0">
                        <div className="py-section-space top-0 sticky bg-background-dark backdrop-blur-sm overflow-hidden z-30">
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
            
            {/* Recommendation For You */}
            <div className="container">
                <Separator className='max-w-full mt-22 mb-10' />
                <div className={'flex flex-col gap-2'}>
                    <h3 className='text-xl font-semibold '>Recommendation For You</h3>
                    <div className='grid grid-cols-3 gap-3'>
                        {AI_AGENTS
                            .slice(0, 3)
                            .map((aiAgent) => (
                                <AiAgentCard
                                    key={aiAgent.id}
                                    agent={aiAgent}
                                    orientation={"vertical"}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiAgentDetailsPage