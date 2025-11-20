import { PropsWithChildren } from "react";
import { TabsList, TabsTrigger } from ".";
import { TabsListProps, TabsTriggerProps } from "@radix-ui/react-tabs";
import { cn } from "@/shared/lib/utils";
import { SurfaceCard } from "../surface-card";

function OutlineTabsList(props: TabsListProps) {
    const { className, ...rest } = props
    return (
        <TabsList
            className={cn(
                "bg-background-light w-full h-11 rounded-lg p-1",
                className
            )} 
            {...rest}
        >
            {props.children}
        </TabsList>
    )
}

function OutlineTabsTrigger(props: TabsTriggerProps) {
    return (
        <TabsTrigger
            {...props}
            className={cn(
                "rounded-sm hover:text-primary-500 h-full border border-transparent data-[state=active]:bg-primary-50 data-[state=active]:text-primary-600/90 data-[state=active]:border-none data-[state=active]:font-medium data-[state=active]:shadow-none text-muted-foreground",
                props.className
            )}
        />
    )
}

export { OutlineTabsList, OutlineTabsTrigger }