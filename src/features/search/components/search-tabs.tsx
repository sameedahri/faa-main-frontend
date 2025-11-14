"use client"

import { TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { PAGE_ROUTES } from "@/shared/constants/page-routes"
import { INPUT_HEIGHT } from "@/shared/constants/styles"
import { SEARCH_TAB } from "@/shared/constants/tabs"
import { cn } from "@/shared/lib/utils"
import { SearchTabType } from "@/shared/types/tabs.type"
import { Route } from "next"
import { useRouter } from "next/navigation"

function SearchTabs() {
    const router = useRouter()

    const handleTabChange = (value: SearchTabType) => {
        router.push(`${PAGE_ROUTES.SEARCH}?tab=${value}` as Route);
    }
    return (
        <div className="py-6 top-0 sticky bg-background-light backdrop-blur-sm overflow-hidden">
            <TabsList className={`${INPUT_HEIGHT.DEFAULT} bg-background-dark w-full h-9 rounded-full p-0`}>
                {Object.values(SEARCH_TAB).map((tab) => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className={cn(
                            "rounded-full h-full data-[state=active]:bg-background-light data-[state=active]:text-primary data-[state=active]:shadow data-[state=active]:border-primary/60 data-[state=active]:font-semibold text-muted-foreground",
                        )}
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