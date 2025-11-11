import { EmailButton, PhoneButton, WhatsappButton } from "@/shared/components/action-buttons"
import { Badge } from "@/shared/components/ui/badge"
import { Button } from "@/shared/components/ui/button"
import { Separator } from "@/shared/components/ui/separator"
import { home } from "@/shared/constants/images"
import { PAGE_ROUTES } from "@/shared/constants/page-routes"
import { IconBrandWhatsapp } from "@tabler/icons-react"
import { Bath, BedDouble, Grid3x2, Mail, MapPin, Phone, Square } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export type PropertyCardProps = {
    id: string
    title: string
    image?: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    area: number
    amenities: string[]
}
function PropertyCard(props: PropertyCardProps) {
    return (
        <Link 
            href={PAGE_ROUTES.PROPERTY_DETAILS(props.id)} 
            className="bg-background-light rounded-md p-4 grid grid-rows-[auto_1fr] gap-3.5 shadow-s border transition-all duration-200 hover:shadow-lg"
        >
            <div className="w-full aspect-video rounded-md overflow-hidden">
                <Image
                    src={home.heroImage}
                    alt="Property Image"
                    className="w-full h-full object-cover"
                    placeholder="blur"
                />
            </div>
            <div className="flex flex-col gap-4.5">
                {/* Title And Location */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-base font-semibold font-heading">{props.title}</h2>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className='size-4' />
                        <span>{props.location}</span>
                    </div>
                </div>

                {/* Bedrooms, Bathrooms, Area */}
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

                {/* Price */}
                <h3 className='text-xl font-bold text-foreground mt-auto'> 
                    <small className='text-foreground/80 text-sm font-normal'>AED {" "}</small> 
                    {props.price.toLocaleString() }
                </h3>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-3 *:w-full  pt-1">
                    <EmailButton email={""} className="shadow-none" />
                    <PhoneButton phone={""} className="shadow-none"/>
                    <WhatsappButton whatsapp={""} className="" />
                </div>
            </div>
        </Link>
    );
}

export default PropertyCard;