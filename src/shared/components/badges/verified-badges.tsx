import { Badge } from "@/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { BadgeCheck, ShieldCheck, ThumbsUp } from "lucide-react";

export function VerifiedBadge() {
    return (
        <Tooltip>
            <TooltipTrigger>
                <BadgeCheck className="size-4.5 text-primary stroke-1.5"/>
            </TooltipTrigger>
            <TooltipContent 
                className='bg-primary/90 backdrop-blur-md text-primary-foreground shadow-sm font-medium max-w-[250px]' 
                arrowClassName="bg-primary/90 fill-primary/90"
            >
                <h2 className="font-base text-base font-semibold flex items-center gap-1 pb-1">
                    Verified
                </h2>
                <p className="text-sm">
                    Identity and credentials verified by our team for your peace of mind.
                </p>
            </TooltipContent>
        </Tooltip>
    )
}