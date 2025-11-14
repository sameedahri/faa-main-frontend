import { Badge } from "@/ui/badge";
import { cn } from "@/shared/lib/utils";
import { PropsWithChildren } from "react";
import { PropertyStatus } from "@/features/properties/types/properties.type";


export function PropertyStatusBade(props: { 
    status: PropertyStatus,
    className?: string
}) {

    const renderPropertyStatus = () => {
        switch(props.status) {
            case "Off-Plan":
                return "Off-Plan";
            case "Ready":
                return "Ready";
        }    
    }

    return (
        <Badge
            variant="muted"
            className={cn(
                "rounded-full bg-white backdrop-blur-md font-medium shadow-sm text-foreground",
                props.className
            )}
        >
            {renderPropertyStatus()}         
        </Badge>
    )
}