import { Badge } from "@/ui/badge";
import { cn } from "@/shared/lib/utils";

export function ReadyToMoveInBadge({ className }: { className?: string }) {
    return (
        <Badge
            variant="muted"
            // type="gradient"
            className={cn(
                "rounded-full bg-white shadow-sm text-foreground",
                className,
            )}
        >
            Ready to Move In
        </Badge>
    )
}