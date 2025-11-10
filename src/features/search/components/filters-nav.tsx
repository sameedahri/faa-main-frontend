"use client"

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/shared/components/ui/input-group"
import { TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { PAGE_ROUTES } from "@/shared/constants/page-routes"
import { INPUT_HEIGHT } from "@/shared/constants/styles"
import { SEARCH_TAB } from "@/shared/constants/tabs"
import { SearchTabType } from "@/shared/types/tabs.type"
import { MapPin, Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Route } from "next"

const tabTriggerClassName = "rounded-sm h-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:font-semibold text-muted-foreground"

function FiltersNav() {
    const router = useRouter()
    
    const handleTabChange = (value: SearchTabType) => {
        router.push(`${PAGE_ROUTES.SEARCH}?tab=${value}` as Route);
    }
    return (
        <div className="bg-background-light/10 backdrop-blur-3xl h-[calc(var(--height-nav)+1.8rem)] flex items-center sticky top-0 z-10">
            <div className="container flex">
                <TabsList className={`${INPUT_HEIGHT.DEFAULT} p-1 bg-background-light border rounded-md w-full max-w-fit`}>
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
            </div>
        </div>
    )
}

export default FiltersNav