import { SubscriptionName } from "@/shared/types/subscription.type"
import { StaticImageData } from "next/image"

export type Agent = {
    name: string
    profession: string[]
    location: string
    rating: number
    reviews: number
    subscription: SubscriptionName
    specialization: string[]
    className?: string
    isTeamMember?: boolean
    id: string
    email: string
    isFeatured?: boolean
    image: StaticImageData
}