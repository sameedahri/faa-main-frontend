"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select';
import { SEARCH_TAB } from '@/shared/constants/tabs';
import { SearchTabType } from '@/shared/types/tabs.type';
import { Check, CheckIcon, Filter, SearchIcon, XIcon } from 'lucide-react';
import { PropsWithChildren, ReactNode } from 'react'
import * as Checkbox from "@radix-ui/react-checkbox";
import { Separator } from '@/shared/components/ui/separator';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/components/ui/input-group';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/components/ui/dialog';

type FiltersSidebarProps = {
    tab: SearchTabType
}

function FiltersSidebar(props: FiltersSidebarProps) {
    const { tab } = props

    const renderFilters = () => {
        switch (tab) {
            case SEARCH_TAB.AI_AGENTS.value:
                return <AiAgentsFilters />
            default:
                return <BaseFilters />
        }
    }

    return (
        <form
            className="h-fit max-h-[calc(100vh-var(--height-nav)-3rem)] overflow-y-auto flex flex-col gap-0 rounded-lg p-5 bg-background-light sticky top-6 mt-6"
            onSubmit={e => e.preventDefault()}
        >
            {/* <h2 className='flex items-center gap-1.5 font-medium text-lg pb-3'>
                <Filter className='size-4' />
                Filters
            </h2> */}
            {/* <div className='bg-background-light p-3 border-b-5 border-background-dark'> */}
            <div className='bg-background-light pb-4'>
                <InputGroup className='shadow-none bg-background-light h-10  has-[[data-slot=input-group-control]:focus-visible]:ring-[0px] focus-visible:border-primary-200 has-[[data-slot=input-group-control]:focus-visible]:border-primary-400 rounded-full'>

                    <InputGroupInput
                        placeholder='Search by keyword'
                        className='placeholder:text-muted-foreground'
                    />
                    <InputGroupAddon align={"inline-end"} className='hover:text-primary cursor-pointer'>
                        <SearchIcon className='size-4' />
                    </InputGroupAddon>
                </InputGroup>
            </div>
            {renderFilters()}
        </form>
    )
}

function AiAgentsFilters() {
    return (
        <Accordion type='multiple' className='flex flex-col gap-0' defaultValue={["Industries", "Emirates"]}>
            <InputWrapper label='Industries'>
                {INDUSTRIES_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper label='Use Cases'>
                {USE_CASE_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper label='Base Models'>
                {BASE_MODEL_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper label='Key Capabilities'>
                {KEY_CAPABILITIES_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper label='Integration Options'>
                {INTEGRATION_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper label='Pricing Models'>
                {PRICING_MODEL_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper label='Price Range (AED)' hideViewMore>
                <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Min" type='number' className='border-border' />
                    <Input placeholder="Max" type='number' className='border-border' />
                </div>
            </InputWrapper>

            <InputWrapper label='Language Support'>
                {LANGUAGE_SUPPORT_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>
        </Accordion>
    )
}

function BaseFilters() {
    return (
        <Accordion type='multiple' className='flex flex-col gap-0' defaultValue={["Industries", "Emirates"]}>
            {/* <SearchFilterInputGroup label="Search">
                <Input placeholder="Search by name or email" />
            </SearchFilterInputGroup>

            <SearchFilterInputGroup label="Location">
                <Input placeholder="Search by location" />
            </SearchFilterInputGroup> */}
            <InputWrapper
                label="Industries"
            >
                {INDUSTRIES_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper
                label="Emirates"
            >
                {EMIRATES_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper
                label="Languages"
            >
                {LANGUAGES_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper
                label="Ratings"
            >
                {RATING_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

            <InputWrapper
                label="Availability"
            >
                {AVAILABILITY_OPTIONS.map((option) => (
                    <CheckboxInput
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </InputWrapper>

        </Accordion>
    )
}

function InputWrapper(props: PropsWithChildren<{
    label: string
    children: ReactNode
    hideViewMore?: boolean
}>) {
    return (
        <AccordionItem value={props.label} className='border-b-1 border-background-dark'>
            <AccordionTrigger className='rounded-none bg-background-light cursor-pointer py-3 text-foreground font-medium underline-offset-4 decoration-muted-foreground'>
                {props.label}
            </AccordionTrigger>
            <AccordionContent className='px-3 pt-0 flex flex-col gap-2 bg-background-light'>
                {props.children}
                {!props.hideViewMore && (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                size={"sm"}
                                variant={"ghost"}
                                className='w-fit mt-2 h-auto text-center p-0 text-primary-400 decoration-1 underline-offset-4 decoration-primary-100 hover:bg-transparent  underline hover:text-primary-500 hover:decoration-primary-300'
                            >
                                View More
                            </Button>
                        </DialogTrigger>
                        <DialogContent className='max-h-[600px] grid grid-rows-[auto_1fr_auto] p-4 gap-4' showCloseButton={false}>
                            <DialogHeader className='flex items-center justify-between flex-row p-0'>
                                <DialogTitle>{props.label}</DialogTitle>
                                <DialogClose asChild>
                                    <button className='text-foreground/80 cursor-pointer hover:text-foreground'>
                                        <XIcon className='size-4' />
                                    </button>
                                </DialogClose>
                            </DialogHeader>
                            <Separator className='bg-border/50' />
                            <DialogDescription className='sr-only'>
                            </DialogDescription>
                            <div className='grid grid-cols-2 gap-3 overflow-y-auto'>
                                {props.children}
                            </div>
                            <Separator className='bg-border/50' />
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button
                                        variant={"ghost"}
                                        className='bg-transparent border-border'
                                    >
                                        Clear
                                    </Button>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Button
                                        variant={"soft-primary"}
                                    >
                                        Submit
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            </AccordionContent>
        </AccordionItem>
    )
}

function CheckboxInput(props: {
    label: string
}) {
    return (
        <label
            // key={option.id}
            className="flex items-center gap-2 cursor-pointer"
        >
            <Checkbox.Root
                // checked={selected.includes(option.id)}
                // onCheckedChange={() => toggle(option.id)}
                className="rounded size-4 border border-input data-[state=checked]:bg-primary-400 data-[state=checked]:border-none flex items-center justify-center group"
            >
                <Checkbox.Indicator>
                    <CheckIcon className="size-3 group-data-[state=checked]:text-primary-foreground" />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <span className='text-sm text-muted-foreground'>{props.label}</span>
        </label>
    )
}

function SearchFilterInputGroup(props: PropsWithChildren<{ label?: ReactNode }>) {
    return (
        <div className="flex flex-col gap-2">
            {props.label && <Label>{props.label}</Label>}
            {props.children}
        </div>
    )
}

const INDUSTRIES_OPTIONS = [
    { value: "Visa & Immigration", label: "Visa & Immigration" },
    { value: "IT & TECH", label: "IT & Tech" },
    { value: "Mortgage and Finance", label: "Mortgage and Finance" },
] as const;

const EMIRATES_OPTIONS = [
    { value: "Dubai", label: "Dubai" },
    { value: "Abu Dhabi", label: "Abu Dhabi" },
    { value: "Sharjah", label: "Sharjah" },
    { value: "Ajman", label: "Ajman" },
    { value: "Ras Al Khaimah", label: "Ras Al Khaimah" },
    { value: "Umm Al Quwain", label: "Umm Al Quwain" },
] as const;

const LANGUAGES_OPTIONS = [
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
    { value: "French", label: "French" },
    { value: "Spanish", label: "Spanish" },
    { value: "German", label: "German" },
    { value: "Italian", label: "Italian" },
    { value: "Portuguese", label: "Portuguese" },
] as const;

const RATING_OPTIONS = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
] as const;

const AVAILABILITY_OPTIONS = [
    { value: "Available", label: "Available" },
    { value: "Not Available", label: "Not Available" },
] as const;

const USE_CASE_OPTIONS = [
    { value: "Use Case 1", label: "Use Case 1" },
    { value: "Use Case 2", label: "Use Case 2" },
    { value: "Use Case 3", label: "Use Case 3" },
    { value: "Use Case 4", label: "Use Case 4" },
    { value: "Use Case 5", label: "Use Case 5" },
    { value: "Use Case 6", label: "Use Case 6" },
    { value: "Use Case 7", label: "Use Case 7" },
    { value: "Use Case 8", label: "Use Case 8" },
    { value: "Use Case 9", label: "Use Case 9" },
    { value: "Use Case 10", label: "Use Case 10" },
    { value: "Use Case 11", label: "Use Case 11" },
    { value: "Use Case 12", label: "Use Case 12" },
    { value: "Use Case 13", label: "Use Case 13" },
    { value: "Use Case 14", label: "Use Case 14" },
    { value: "Use Case 15", label: "Use Case 15" },
    { value: "Use Case 16", label: "Use Case 16" },
    { value: "Use Case 17", label: "Use Case 17" },
    { value: "Use Case 18", label: "Use Case 18" },
    { value: "Use Case 19", label: "Use Case 19" },
    { value: "Use Case 20", label: "Use Case 20" },
    { value: "Use Case 21", label: "Use Case 21" },
    { value: "Use Case 22", label: "Use Case 22" },
    { value: "Use Case 23", label: "Use Case 23" },
    { value: "Use Case 24", label: "Use Case 24" },
    { value: "Use Case 25", label: "Use Case 25" },
    { value: "Use Case 26", label: "Use Case 26" },
    { value: "Use Case 27", label: "Use Case 27" },
    { value: "Use Case 28", label: "Use Case 28" },
    { value: "Use Case 29", label: "Use Case 29" },
    { value: "Use Case 30", label: "Use Case 30" },
] as const;

const BASE_MODEL_OPTIONS = [
    { value: "Base Model 1", label: "Base Model 1" },
    { value: "Base Model 2", label: "Base Model 2" },
    { value: "Base Model 3", label: "Base Model 3" },
] as const;

const KEY_CAPABILITIES_OPTIONS = [
    { value: "Key Capability 1", label: "Key Capability 1" },
    { value: "Key Capability 2", label: "Key Capability 2" },
    { value: "Key Capability 3", label: "Key Capability 3" },
] as const;

const INTEGRATION_OPTIONS = [
    { value: "Integration 1", label: "Integration 1" },
    { value: "Integration 2", label: "Integration 2" },
    { value: "Integration 3", label: "Integration 3" },
] as const;

const PRICING_MODEL_OPTIONS = [
    { value: "Pricing Model 1", label: "Pricing Model 1" },
    { value: "Pricing Model 2", label: "Pricing Model 2" },
    { value: "Pricing Model 3", label: "Pricing Model 3" },
] as const;

const LANGUAGE_SUPPORT_OPTIONS = [
    { value: "Language Support 1", label: "Language Support 1" },
    { value: "Language Support 2", label: "Language Support 2" },
    { value: "Language Support 3", label: "Language Support 3" },
] as const;

export default FiltersSidebar