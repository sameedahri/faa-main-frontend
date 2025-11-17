import { cn } from '@/shared/lib/utils'
import React, { PropsWithChildren } from 'react'
import { Badge as BaseBade } from '@/shared/components/ui/badge'
import { Separator as BaseSeparator } from '@/shared/components/ui/separator'
import { CheckCircle } from 'lucide-react'

function TechnicalDetailsTabContent() {
    return (
        <div className='flex flex-col gap-4'>
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
                            className='text-muted-foreground shadow-none text-base border-none w-full h-auto p-0 justify-start'
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
            <h3 className='text-lg font-semibold text-foreground/80'>{props.value}</h3>
        </div>
    )
}

function InfoCard(props: {
    title: string,
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={cn("flex flex-col overflow-hidden border rounded-lg", props.className)}>
            <div className="p-4 bg-background">
                <h3 className='leading-tight font-semibold text-lg text-foreground/90'>{props.title}</h3>
            </div>
            <div className='p-4'>
                {props.children}
            </div>
        </div>
    )
}

function Separator() {
    return (
        <BaseSeparator className='my-4 bg-border/0' />
    )
}

function Badge(props: PropsWithChildren) {
    return (
        <BaseBade
            variant={'muted'}
            type={'outline'}
            size={"md"}
            className='border border-border/70 text-muted-foreground shadow-none text-base'
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