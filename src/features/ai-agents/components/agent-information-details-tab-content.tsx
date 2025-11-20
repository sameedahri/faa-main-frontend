import React, { PropsWithChildren } from 'react'
import { cn } from '@/shared/lib/utils'
import { AiAgentCardProps } from '@/features/search/components/ai-agent-card'
import { Badge as BaseBade } from '@/shared/components/ui/badge'
import { Separator as BaseSeparator } from '@/shared/components/ui/separator'
import { AiAgent } from '../types/ai-agent.type'

function AgentInformationDetailsTabContent(props: AiAgent) {
    return (
        <div className="flex flex-col gap-card-list-space">
            <InfoCard title="About">
                <p className='text-muted-foreground text-base leading-loose'>
                    LeadBot Pro is an advanced AI-powered agent designed specifically for the Dubai real estate market. It automates lead qualification, schedules property viewings, and provides instant responses to potential buyers 24/7. With seamless integration into popular CRM systems and WhatsApp Business API, it helps real estate professionals convert more leads into customers.
                </p>
            </InfoCard>


            <InfoCard
                title="Industries"
            >
                <BadgeWrapper>
                    {props.industries.map((industry) => (
                        <Badge
                            key={industry}
                        >
                            {industry}
                        </Badge>
                    ))}
                </BadgeWrapper>
            </InfoCard>


            <InfoCard
                title="Use Cases"
            >
                <BadgeWrapper>
                    {USE_CASES.map((useCase) => (
                        <Badge
                            key={useCase}
                        >
                            {useCase}
                        </Badge>
                    ))}
                </BadgeWrapper>
            </InfoCard>


            <InfoCard
                title="Key Capabilities"
            >
                <BadgeWrapper>
                    {KEY_CAPABILITIES.map((keyCapability) => (
                        <Badge
                            key={keyCapability}
                        >
                            {keyCapability}
                        </Badge>
                    ))}
                </BadgeWrapper>
            </InfoCard>
        </div>
    )
}

function InfoCard(props: {
    title: string,
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={cn("flex flex-col overflow-hidden rounded-lg", props.className)}>
            <div className="p-3 bg-background-light border-b border-border-light">
                <h3 className='leading-tight font-semibold text-base text-foreground'>{props.title}</h3>
            </div>
            <div className='p-3 bg-background-light'>
                {props.children}
            </div>
        </div>
    )
}


function Separator() {
    return (
        <BaseSeparator className='my-3 bg-border/0' />
    )
}

function Badge(props: PropsWithChildren) {
    return (
        <BaseBade
            variant={'muted'}
            type={'outline'}
            size={"md"}
            className='border bg-background-light border-border/70 text-muted-foreground shadow-none text-base font-normal'
        >
            {props.children}
        </BaseBade>
    )
}

function BadgeWrapper(props: PropsWithChildren) {
    return (
        <div className="flex flex-wrap gap-3">
            {props.children}
        </div>
    )
}

const USE_CASES = [
    "Lead Generation",
    "Custom Support",
    "Appointment Scheduling",
]

const KEY_CAPABILITIES = [
    "Whatsapp Integration",
    "Voice Support",
    "Multi - language",
    "24 / 7 Availability",
]

export default AgentInformationDetailsTabContent