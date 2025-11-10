import { Award } from "lucide-react";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function ProBadge() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Badge
                    variant={"pro"}
                    type={'gradient'}
                    className='rounded-full min-w-[45px]'
                >
                    <Award />
                    Pro
                </Badge>
            </TooltipTrigger>
            <TooltipContent 
                className='bg-linear-to-r from-pro/70 via-pro to-pro/60 text-white shadow-sm font-medium max-w-[250px]' 
                arrowClassName="bg-pro fill-pro"
            >
                <h2 className="font-base text-base font-semibold flex items-center gap-1 pb-1">
                    Pro
                </h2>
                <p className="text-sm">
                    This badge indicates an active Pro Subscription, offering advanced tools, enhanced visibility, and premium listing options.
                </p>
            </TooltipContent>
        </Tooltip>
    )
}

export function EliteBadge() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Badge
                    variant={"elite"}
                    type={'gradient'}
                    className='rounded-full min-w-[45px]'
                >
                    <Award />
                    Elite
                </Badge>
            </TooltipTrigger>
            <TooltipContent 
                className='bg-linear-to-r from-elite/70 via-elite to-elite/60 text-white font-medium max-w-[250px] shadow-sm'
                arrowClassName="bg-elite fill-elite"
            >
                <h2 className="font-base text-base font-semibold flex items-center gap-1 pb-1">
                    Elite
                </h2>
                <p className="text-sm leading-normal">
                    This badge represents the Elite Subscription Plan, which includes top-tier features, maximum exposure, and exclusive access to platform benefits.
                </p>
            </TooltipContent>
        </Tooltip>
    )
}