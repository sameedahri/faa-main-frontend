import { Button } from '@/shared/components/ui/button';
import { Label } from '@/shared/components/ui/label'
import { NativeSelect, NativeSelectOption } from '@/shared/components/ui/native-select';
import { Filter, X } from 'lucide-react';
import React, { PropsWithChildren } from 'react'

function FiltersSidebar() {
    return (
        <div className="flex flex-col gap-6 p-5 rounded-md bg-background-light sticky top-[calc(var(--height-nav)+2rem)]">
            <h2 className='flex items-center gap-1 font-semibold text-lg'>
                <Filter className='size-4.5' />  
                Filters
            </h2>
            <SearchFilterInputGroup label="Industry">
                <NativeSelect className='bg-background-light w-full border-border'>
                    {INDUSTRIES_OPTIONS.map((option) => (
                        <NativeSelectOption key={option.value} value={option.value}>{option.label}</NativeSelectOption>
                    ))}
                </NativeSelect>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Emirates">
                <NativeSelect className='bg-background-light w-full border-border'>
                    {EMIRATES_OPTIONS.map((option) => (
                        <NativeSelectOption
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </NativeSelectOption>
                    ))}
                </NativeSelect>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Languages">
                <NativeSelect className='bg-background-light w-full border-border'>
                    {LANGUAGES_OPTIONS.map((option) => (
                        <NativeSelectOption key={option.value} value={option.value}>{option.label}</NativeSelectOption>
                    ))}
                </NativeSelect>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Rating">
                <NativeSelect className='bg-background-light w-full border-border'>
                    {RATING_OPTIONS.map((option) => (
                        <NativeSelectOption key={option.value} value={option.value}>{option.label}</NativeSelectOption>
                    ))}
                </NativeSelect>
            </SearchFilterInputGroup>
            <SearchFilterInputGroup label="Availability">
                <NativeSelect className='bg-background-light w-full border-border'>
                    {AVAILABILITY_OPTIONS.map((option) => (
                        <NativeSelectOption key={option.value} value={option.value}>{option.label}</NativeSelectOption>
                    ))}
                </NativeSelect>
            </SearchFilterInputGroup>
            <div className="grid grid-cols-1 gap-3">
                <Button
                    size={"sm"}
                    className='h-9 border w-full'
                    variant={"outline"}
                >
                    Clear
                </Button>
            </div>
        </div>
    )
}

function SearchFilterInputGroup(props: PropsWithChildren<{ label: string }>) {
    return (
        <div className="flex flex-col gap-2">
            <Label>{props.label}</Label>
            {props.children}
        </div>
    )
}

const INDUSTRIES_OPTIONS = [
    { value: "", label: "All" },
    { value: "Visa & Immigration", label: "Visa & Immigration" },
    { value: "IT & TECH", label: "IT & Tech" },
    { value: "Mortgage and Finance", label: "Mortgage and Finance" },
] as const;

const EMIRATES_OPTIONS = [
    { value: "", label: "All" },
    { value: "Dubai", label: "Dubai" },
    { value: "Abu Dhabi", label: "Abu Dhabi" },
    { value: "Sharjah", label: "Sharjah" },
    { value: "Ajman", label: "Ajman" },
    { value: "Ras Al Khaimah", label: "Ras Al Khaimah" },
    { value: "Umm Al Quwain", label: "Umm Al Quwain" },
] as const;

const LANGUAGES_OPTIONS = [
    { value: "", label: "All" },
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
    { value: "French", label: "French" },
    { value: "Spanish", label: "Spanish" },
    { value: "German", label: "German" },
    { value: "Italian", label: "Italian" },
    { value: "Portuguese", label: "Portuguese" },
] as const;

const RATING_OPTIONS = [
    { value: "", label: "All" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
] as const;

const AVAILABILITY_OPTIONS = [
    { value: "", label: "All" },
    { value: "Available", label: "Available" },
    { value: "Not Available", label: "Not Available" },
] as const;

const SORT_BY_OPTIONS = [
    { value: "", label: "All" },
    { value: "Name", label: "Name" },
    { value: "Rating", label: "Rating" },
    { value: "Availability", label: "Availability" },
] as const;

const SERVICE_TYPES_OPTIONS = [
    { value: "", label: "All" },
    { value: "Agents", label: "Agents" },
    { value: "Agencies", label: "Agencies" },
    { value: "Services", label: "Services" },
    { value: "Events", label: "Events" },
    { value: "AI Agents", label: "AI Agents" },
] as const;

export default FiltersSidebar