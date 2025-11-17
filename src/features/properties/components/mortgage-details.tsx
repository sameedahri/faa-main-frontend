import { Button } from '@/shared/components/ui/button'
import { Label } from '@/shared/components/ui/label'
import { Separator } from '@/shared/components/ui/separator'
import { Slider } from '@/shared/components/ui/slider'
import { cn } from '@/shared/lib/utils'
import { CheckCircle, SeparatorVertical } from 'lucide-react'
import React, { HTMLProps } from 'react'

function MortgageDetails() {
    return (
        <div className='grid grid-cols-[1fr_300px] gap-10 rounded-lg mt-3.5'>
            <div className="grid gap-5">
                <div className=''>
                    <MortgageInputWrapper
                        labelProps={{
                            children: "Resident Type"
                        }}
                        className='gap-2.5'
                    >
                        <div className='grid grid-cols-3 gap-2 [&>button]:rounded-sm'>
                            <Button
                                variant="outline"
                                size={"sm"}
                                className='text-muted-foreground'
                            >
                                UAE National
                            </Button>
                            <Button
                                variant="bootstrap-primary"
                                size={"sm"}
                            >
                                <CheckCircle />
                                Resident
                            </Button>
                            <Button
                                variant="outline"
                                size={"sm"}
                                className='text-muted-foreground'
                            >
                                Non-resident
                            </Button>
                        </div>
                    </MortgageInputWrapper>
                </div>
                <MortgageInputSeparator />
                <div className="space-y-6">
                    <MortgageInputWrapper labelProps={{
                        children: (
                            <div className='flex justify-between items-center w-full'>
                                Down payment
                                <span className='font-normal'>
                                    20%
                                </span>
                            </div>
                        )
                    }}>
                        <Slider />
                    </MortgageInputWrapper>
                    <MortgageInputSeparator />
                    <MortgageInputWrapper labelProps={{
                        children: (
                            <div className='flex justify-between items-center w-full'>
                                Loan Tenure
                                <span className='font-normal'>
                                    25 years
                                </span>
                            </div>
                        )
                    }}>
                        <Slider />
                    </MortgageInputWrapper>
                    <MortgageInputSeparator />
                    <MortgageInputWrapper labelProps={{
                        children: (
                            <div className='flex justify-between items-center w-full'>
                                Interest Rate
                                <span className='font-normal'>
                                    5%
                                </span>
                            </div>
                        )
                    }}>
                        <Slider />
                    </MortgageInputWrapper>
                </div>
            </div>
            <div className='shadow-md rounded-md p-5 flex flex-col gap-5 justify-start'>
                <div className='flex flex-col  text-center gap-0.5'>
                    <small className='text-foreground text-sm'>
                        Monthly Payment
                    </small>
                    <h2 className='text-3xl font-bold'>
                        <small className='text-muted-foreground text-sm font-normal'>AED </small>
                        10,000
                    </h2>
                </div>
                <div className='space-y-2'>
                    {/* <div className="flex justify-between items-center">
                        <div></div>
                        <span className='text-sm font-medium'>AED</span>
                    </div> */}
                    <MortgageDataRow label="" value="AED" valueProps={{className: "text-xs"}} />
                    <MortgageDataRow label="Property Price" value="25,000,000" />
                    <MortgageDataRow label="Down Payment" value="5,000,000" />
                    <MortgageDataRow label="Loan Amount" value="20,000,000" />
                    <MortgageDataRow label="Total Interest (5%)" value="1,250,000" />
                    <MortgageDataRow label="Total Payment" value="26,250,000" className='border-b-0 pb-0' valueProps={{
                        className: "font-bold text-sm"
                    }}/>
                </div>
            </div>
        </div>
    )
}

function MortgageDataRow(props: { 
    label: string, 
    value: string,
    labelProps?: React.ComponentProps<typeof Label>,
    valueProps?: HTMLProps<HTMLSpanElement>,
    className?: string
}) {
    return (
        <div className={cn('flex justify-between items-center border-b pb-2', props.className)}>
            <Label className='text-sm text-muted-foreground font-normal' {...props.labelProps}>
                {props.label}
            </Label>
            <span className='text-sm font-medium' {...props.valueProps}>
                {props.value}
            </span>
        </div>
    )
}

function MortgageInputWrapper(props: {
    labelProps: React.ComponentProps<typeof Label>,
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div className={cn('flex flex-col gap-3', props.className)}>
            <Label
                className='text-sm font-medium text-foreground'
                {...props.labelProps}
            />
            <div className=''>
                {props.children}
            </div>
        </div>
    )
}

function MortgageInputSeparator() {
    return (
        <Separator className='bg-border/50'/>
    )
}

export default MortgageDetails