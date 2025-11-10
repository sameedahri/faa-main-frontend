"use client"

import { TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { PAGE_ROUTES } from "@/shared/constants/page-routes"
import { INPUT_HEIGHT } from "@/shared/constants/styles"
import { SEARCH_TAB } from "@/shared/constants/tabs"
import { SearchTabType } from "@/shared/types/tabs.type"
import { Route } from "next"
import { useRouter } from "next/navigation"

const tabTriggerClassName = "rounded-sm h-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:font-medium text-muted-foreground"

function SearchTabs() {
    const router = useRouter()

    const handleTabChange = (value: SearchTabType) => {
        router.push(`${PAGE_ROUTES.SEARCH}?tab=${value}` as Route);
    }
    return (
        <div className="py-6 top-0 sticky bg-background/90 backdrop-blur-sm overflow-hidden">
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
        </div>
    )
}

export default SearchTabs