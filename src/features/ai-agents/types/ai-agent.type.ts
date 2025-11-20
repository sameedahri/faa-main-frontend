import { SubscriptionName } from "@/shared/types/subscription.type"

export type AiAgent = {
    id: string
    name: string
    industries: string[]
    rating: number
    reviews: number
    description: string
    subscription: SubscriptionName
    companyName: string
    email: string
    phone: string
    whatsapp: string
}