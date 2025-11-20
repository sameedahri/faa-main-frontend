import { cn } from '@/shared/lib/utils'
import React, { PropsWithChildren } from 'react'
import { Badge as BaseBade } from '@/shared/components/ui/badge'
import { Separator as BaseSeparator } from '@/shared/components/ui/separator'
import { CheckCircle } from 'lucide-react'

function TechnicalDetailsTabContent() {
    return (
        <div className='flex flex-col gap-2'>
            <InfoCard title="Model Details">
                <div className="grid grid-cols-3 gap-4">
                    <ModelInfoCard label='Model' value='GPT 4' />
                    <ModelInfoCard label='Response Time' value={`< 1 Second`} />
                    <ModelInfoCard label='Uptime' value='99.9%' />
                </div>
            </InfoCard>

            <InfoCard
                title="Integration Options"
            >
                <div className="grid grid-cols-3 gap-5">
                    {INTEGRATION_OPTIONS.map((integrationOption) => (
                        <BaseBade
                            key={integrationOption}
                            variant={'muted'}
                            type={'outline'}
                            size={"md"}
                            className='text-muted-foreground shadow-none text-base border-none w-full h-auto p-0 justify-start font-normal'
                        >
                            <div className='grid grid-cols-[auto_1fr] items-center gap-2'>
                                <CheckCircle className='text-primary size-4' />
                                {integrationOption}
                            </div>
                        </BaseBade>
                    ))}
                </div>
            </InfoCard>

            <InfoCard title='Languages'>
                <BadgeWrapper>
                    {LANGUAGES.map((language) => (
                        <Badge key={language}>
                            {language}
                        </Badge>
                    ))}
                </BadgeWrapper>
            </InfoCard>
        </div >
    )
}

function ModelInfoCard(props: { label: string, value: string }) {
    return (
        <div className='border-border/70 rounded-md gap-0.5 flex flex-col justify-center'>
            <h2 className='text-sm text-muted-foreground'>{props.label}</h2>
            <h3 className='text-lg text-foreground'>{props.value}</h3>
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

function Badge(props: PropsWithChildren) {
    return (
        <BaseBade
            variant={'muted'}
            type={'outline'}
            size={"md"}
            className='border border-border/70 text-muted-foreground shadow-none text-base font-normal'
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

const INTEGRATION_OPTIONS = [
    "WhatsApp Business API",
    "Salesforce",
    "HubSpot",
    "Website Chat",
    "Email",
    "REST API",
]

const LANGUAGES = [
    "English",
    "Arabic",
    "French",
    "Spanish",
    "German",
]

export default TechnicalDetailsTabContent