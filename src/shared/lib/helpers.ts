import { BadgeProps } from "@/components/ui/badge";
import { SubscriptionName } from "@/types/subscription.type";

const subscriptionVariants: Record<SubscriptionName, BadgeProps["variant"]> = {
    Pro: "pro",
    Elite: "elite",
    Basic: "muted",
    Standard: "default",
}

export function getSubscriptionVariant(subscriptionName: SubscriptionName) {
    return subscriptionVariants[subscriptionName]
}