export type PropertyStatus = "Ready" | "Off-Plan"

export type Property = {
    id: string
    title: string
    image?: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    area: number
    amenities: string[]
    status: PropertyStatus
}