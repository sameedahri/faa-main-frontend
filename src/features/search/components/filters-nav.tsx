import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group"
import { Label } from "@/shared/components/ui/label"
import { TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { MapPin, Search } from "lucide-react"
import { PropsWithChildren } from "react"

const tabTriggerClassName = "rounded-sm h-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:font-medium text-muted-foreground"

function FiltersNav() {
    return (
        <div className="border-b bg-background-light h-[calc(var(--height-nav)+1rem)] flex items-center sticky top-0 z-20">
            <div className="container grid grid-cols-[auto_1fr_1fr] gap-5">
                <TabsList className="h-11 p-1 bg-background-light shadow-sm border rounded-md w-full">
                    <TabsTrigger value="agents" className={tabTriggerClassName}>Agents</TabsTrigger>
                    <TabsTrigger value="agencies" className={tabTriggerClassName}>Agencies</TabsTrigger>
                    <TabsTrigger value="services" className={tabTriggerClassName}>Services</TabsTrigger>
                    <TabsTrigger value="aiAgents" className={tabTriggerClassName}>AI Agents</TabsTrigger>
                </TabsList>
                <InputGroup className="shadow-sm">
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    <InputGroupInput
                        placeholder='Search by specialty or name'
                    />
                </InputGroup>
                <InputGroup className="shadow-sm">
                    <InputGroupAddon>
                        <MapPin />
                    </InputGroupAddon>
                    <InputGroupInput
                        placeholder='Location'
                    />
                </InputGroup>
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


export default FiltersNav