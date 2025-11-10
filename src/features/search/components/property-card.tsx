import { Badge } from "@/shared/components/ui/badge"
import { Separator } from "@/shared/components/ui/separator"
import { home } from "@/shared/constants/images"
import { Bath, BedDouble, Grid3x2, MapPin, Square } from "lucide-react"
import Image from "next/image"

export type PropertyCardProps = {
    title: string
    image?: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    area: number
}
function PropertyCard(props: PropertyCardProps) {
    return (
        <div className="bg-background-light rounded-md p-4 flex flex-col gap-3.5 shadow-sm">
            <div className="w-full aspect-video rounded-md overflow-hidden">
                <Image
                    src={home.heroImage}
                    alt="Property Image"
                    className="w-full h-full object-cover"
                    placeholder="blur"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-base font-semibold font-heading">{props.title}</h2>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className='size-4' />
                        <span>{props.location}</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>
                        <BedDouble />
                        <span>{props.bedrooms}</span>
                    </Badge>
                    <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>
                        <Bath />
                        <span>{props.bathrooms}</span>
                    </Badge>
                    <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>
                        <Grid3x2 />
                        <span>{props.area} sqft</span>
                    </Badge>
                    {/* <br />
                    <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>
                        <MapPin />
                        <span>{props.location}</span>
                    </Badge> */}
                </div>
                <h3 className='text-xl font-bold text-primary'> <small className='text-muted-foreground text-sm font-normal'>AED</small> {props.price.toLocaleString()}</h3>
            </div>
        </div>
    )
}

export default PropertyCard