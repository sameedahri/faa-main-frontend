import { PropsWithChildren } from "react";
import { TabsList, TabsTrigger } from ".";
import { TabsListProps, TabsTriggerProps } from "@radix-ui/react-tabs";
import { cn } from "@/shared/lib/utils";

function OutlineTabsList(props: TabsListProps) {
    return (
        <TabsList
            className={cn(
                "bg-background-dark w-full h-9 rounded-full p-0",
                props.className
            )} {...props}
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
                "rounded-full hover:text-foreground h-full data-[state=active]:bg-background-light data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-primary/60 data-[state=active]:border-2 data-[state=active]:font-semibold text-muted-foreground",
                props.className
            )}
        />
    )
}

export { OutlineTabsList, OutlineTabsTrigger }