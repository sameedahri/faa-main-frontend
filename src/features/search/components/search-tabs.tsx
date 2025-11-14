"use client"

import { TabsList, TabsTrigger } from "@/shared/components/ui/tabs"
import { OutlineTabsList, OutlineTabsTrigger } from "@/shared/components/ui/tabs/outline-tabs"
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
            <OutlineTabsList>
                {Object.values(SEARCH_TAB).map((tab) => (
                    <OutlineTabsTrigger
                        key={tab.value}
                        value={tab.value}
                        onClick={() => handleTabChange(tab.value)}
                    >
                        {tab.label}
                    </OutlineTabsTrigger>
                ))}
            </OutlineTabsList>
        </div>
    )
}

export default SearchTabs