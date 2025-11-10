"use client"

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select';
import { SEARCH_TAB } from '@/shared/constants/tabs';
import { SearchTabType } from '@/shared/types/tabs.type';
import { Filter } from 'lucide-react';
import { PropsWithChildren, ReactNode } from 'react'

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
            className="overflow-y-auto h-fit max-h-[calc(100vh-var(--height-nav)-4rem)] flex flex-col gap-6 p-5 rounded-md bg-background-light sticky top-[calc(var(--height-nav)+2.6rem)]"
            onSubmit={e => e.preventDefault()}
        >
            <h2 className='flex items-center gap-1.5 font-semibold text-lg'>
                <Filter className='size-4' />
                Filters
            </h2>
            {renderFilters()}
        </form>
    )
}

function AiAgentsFilters() {
    return (
        <>
            <SearchFilterInputGroup label="Industry">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {INDUSTRIES_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Use Case">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {USE_CASE_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Base Model">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {BASE_MODEL_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Key Capabilities">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {KEY_CAPABILITIES_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Integration Options">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {PRICING_MODEL_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Pricing Model">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {PRICING_MODEL_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Price Range (AED)">
                <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Min" type='number' className='border-border' />
                    <Input placeholder="Max" type='number' className='border-border' />
                </div>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Language Support">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {LANGUAGE_SUPPORT_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>

            <div className="grid grid-cols-1 gap-3">
                <Button
                    size={"sm"}
                    className='h-9 border w-full'
                    variant={"outline"}
                    type='reset'
                >
                    Clear
                </Button>
            </div>
        </>
    )
}

function BaseFilters() {
    return (
        <>
            <SearchFilterInputGroup label="Search">
                <Input placeholder="Search by name or email" />
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Location">
                <Input placeholder="Search by location" />
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Industry">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {INDUSTRIES_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Emirates">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {EMIRATES_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Languages">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {LANGUAGES_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Rating">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {RATING_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Availability">
                <Select>
                    <SelectTrigger className='border-border'>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        {AVAILABILITY_OPTIONS.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </SearchFilterInputGroup>
            <div className="grid grid-cols-1 gap-3">
                <Button
                    size={"sm"}
                    className='h-9 border w-full'
                    variant={"outline"}
                    type='reset'
                >
                    Clear
                </Button>
            </div>
        </>
    )
}

function SearchFilterInputGroup(props: PropsWithChildren<{ label: ReactNode }>) {
    return (
        <div className="flex flex-col gap-2">
            <Label>{props.label}</Label>
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