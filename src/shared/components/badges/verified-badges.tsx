import { Badge } from "@/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { ShieldCheck, ThumbsUp } from "lucide-react";

export function VerifiedBadge() {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Badge
                    variant={"default"}
                    type={'outline'}
                    className='rounded-full min-w-[45px]'
                >
                    <ThumbsUp />
                    Verified
                </Badge>
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