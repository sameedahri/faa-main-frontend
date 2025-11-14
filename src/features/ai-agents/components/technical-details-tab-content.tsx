import { cn } from '@/shared/lib/utils'
import React, { PropsWithChildren } from 'react'
import { Badge as BaseBade } from '@/shared/components/ui/badge'
import { Separator as BaseSeparator } from '@/shared/components/ui/separator'
import { Check, CheckCircle, CheckCircle2 } from 'lucide-react'
import { SeparatorProps } from '@radix-ui/react-separator'

function TechnicalDetailsTabContent() {
    return (
        <div className='flex flex-col gap-0'>
            <InfoCard
                title="Model"
            >
                <div className='space-y-1'>
                    <h2 className='text-2xl font-semibold font-heading'>GPT 4</h2>
                    <p className='text-muted-foreground'>
                        Powered by the latest AI technology for optimal performance
                    </p>
                </div>
            </InfoCard>
            <Separator />
            <InfoCard
                title="Response Time"
            >
                <h2 className='text-lg'>
                    {`< 1 second`}
                </h2>
            </InfoCard >
            <Separator />
            <InfoCard
                title="Uptime Guarantee"
            >
                <h2 className='text-lg'>
                    {`99.9%`}
                </h2>
            </InfoCard >
            <Separator />
            <InfoCard
                title="Integration Options"
            >
                <div className="grid grid-cols-2 gap-4">
                    {INTEGRATION_OPTIONS.map((integrationOption) => (
                        <BaseBade
                            key={integrationOption}
                            variant={'muted'}
                            type={'outline'}
                            size={"md"}
                            className='border border-border/70 text-muted-foreground shadow-none text-base rounded-md w-full h-12 justify-start'
                        >
                            <div className='grid grid-cols-[auto_1fr] items-center gap-2'>
                                <CheckCircle className='text-primary size-4' />
                                {integrationOption}
                            </div>
                        </BaseBade>
                    ))}
                </div>
            </InfoCard>
            <Separator />
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

function InfoCard(props: {
    title: string,
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={cn("flex flex-col overflow-hidden shadow rounded-lg", props.className)}>
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