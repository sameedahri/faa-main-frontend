import { Badge } from "@/shared/components/ui/badge"
import { Button } from "@/shared/components/ui/button"
import { Separator } from "@/shared/components/ui/separator"
import { home } from "@/shared/constants/images"
import { IconBrandWhatsapp } from "@tabler/icons-react"
import { Bath, BedDouble, Grid3x2, Mail, MapPin, Phone, Square } from "lucide-react"
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
                <h3 className='text-xl font-bold text-foreground my-1'> 
                    <small className='text-foreground/80 text-sm font-normal'>AED {" "}</small> 
                    {props.price.toLocaleString() }
                </h3>
                <div className="grid grid-cols-3 gap-3 *:w-full *:shadow-sm pt-1">
                    <Button
                        variant={"outline"}
                        className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                        size={"icon"}
                    >
                        <Mail />
                        Email
                    </Button>
                    <Button
                        variant={"outline"}
                        className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                        size={"icon"}
                    >
                        <Phone />
                        Call
                    </Button>
                    <Button
                        variant={"soft-success"}
                        size={"icon"}
                    >
                        <IconBrandWhatsapp className='size-5' />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;