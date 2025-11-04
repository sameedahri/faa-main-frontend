import AgentCard from "@/features/search/components/agent-card"
import FiltersNav from "@/features/search/components/filters-nav"
import FiltersSidebar from "@/features/search/components/filters-sidebar"
import Footer from "@/shared/components/footer"
import { Label } from "@/shared/components/ui/label"
import { Tabs, TabsContent } from "@/shared/components/ui/tabs"
import { PropsWithChildren } from "react"


export default function SearchPage() {
    return (
        <Tabs defaultValue="agents">
            <div className="pb-10 relative flex flex-col gap-7 bg-background">
                <FiltersNav />
               
                <div className="container grid grid-cols-[300px_1fr] items-start gap-7 relative">
                    <FiltersSidebar />
                    <div className="grid grid-cols-1 gap-5">
                        <h1 className="text-2xl font-semibold">Search Results <span className="text-muted-foreground text-base">(12)</span></h1>
                        <TabsContent value="agents">
                            <div className="grid grid-cols-1 gap-7">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <AgentCard key={index} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="agencies">
                            <div className="grid grid-cols-1 gap-5">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <AgentCard key={index} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="services">
                            <div className="grid grid-cols-1 gap-5">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <AgentCard key={index} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="events">
                            <div className="grid grid-cols-1 gap-5">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <AgentCard key={index} />
                                ))}
                            </div>
                        </TabsContent>
                    </div>
                </div>
            </div>
            <Footer />
        </Tabs>
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

function SearchFilterInputGroup(props: PropsWithChildren<{ label: string }>) {
    return (
        <div className="flex flex-col gap-2">
            <Label>{props.label}</Label>
            {props.children}
        </div>
    )
}