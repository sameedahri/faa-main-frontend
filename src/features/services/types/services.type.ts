import { StaticImageData } from "next/image"

export interface Service {
    id: string
    name: string
    industries: string[]
    location: string
    rating: number
    reviews: number
    price: number
    image: StaticImageData
}