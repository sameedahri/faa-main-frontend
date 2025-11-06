import { BadgeProps } from "@/components/ui/badge";
import { SubscriptionName } from "@/types/subscription.type";
import { EliteBadge, ProBadge } from "../components/badges/subscription-badges";

const subscriptionVariants: Record<SubscriptionName, BadgeProps["variant"]> = {
    Pro: "pro",
    Elite: "elite",
    Basic: "muted",
    Standard: "default",
}

export function getSubscriptionVariant(subscriptionName: SubscriptionName) {
    return subscriptionVariants[subscriptionName]
}

export function getSubscriptionBadge(subscriptionName: SubscriptionName) {
    switch (subscriptionName) {
        case "Pro":
            return ProBadge
        case "Elite":
            return EliteBadge
        default:
            return null

    }
}
        