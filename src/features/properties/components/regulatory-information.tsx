import React from 'react'
import { cn } from '@/shared/lib/utils'

function RegulatoryInformation() {
    return (
        <div className='grid grid-cols-3 gap-2.5 pt-2'>
            <RegulatoryInformationRow label="Ads Permit Number" value="1234567890" />
            <RegulatoryInformationRow label="Company License Number" value="1234567890" />
            <RegulatoryInformationRow label="Agent License Number" value="868762683" className='border-b-0 pb-0' />
        </div>
    )
}

function RegulatoryInformationRow(props: {
    label: string,
    value: string,
    className?: string,
}) {
    return (
        <div className={cn('flex flex-col gap-1', props.className)}>
            <span className='text-muted-foreground text-sm'>{props.label}</span>
            <span className='font-medium'>{props.value}</span>
        </div>
    )
}

export default RegulatoryInformation