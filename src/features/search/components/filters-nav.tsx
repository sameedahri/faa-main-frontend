"use client"

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group"
import { TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { PAGE_ROUTES } from "@/shared/constants/page-routes"
import { INPUT_HEIGHT } from "@/shared/constants/styles"
import { SEARCH_TAB } from "@/shared/constants/tabs"
import { SearchTabType } from "@/shared/types/tabs.type"
import { MapPin, Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

const tabTriggerClassName = "rounded-sm h-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:font-medium text-muted-foreground"

function FiltersNav() {
    const router = useRouter()
    const searchParams = useSearchParams()
    
    const handleTabChange = (value: SearchTabType) => {
        router.push(`${PAGE_ROUTES.SEARCH}?tab=${value}`);
    }
    return (
        <div className="border-b bg-background-light h-[calc(var(--height-nav)+1rem)] flex items-center sticky top-0 z-10">
            <div className="container grid grid-cols-[auto_1fr_1fr] gap-5">
                <TabsList className={`${INPUT_HEIGHT.DEFAULT} p-1 bg-background-light shadow-sm border rounded-md w-full`}>
                    {Object.values(SEARCH_TAB).map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className={tabTriggerClassName}
                            onClick={() => handleTabChange(tab.value)}
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
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

export default FiltersNav