import { Property } from "@/features/properties/types/properties.type"
import { EmailButton, PhoneButton, WhatsappButton } from "@/shared/components/action-buttons"
import { PropertyStatusBade } from "@/shared/components/badges/property-badges"
import { Badge } from "@/shared/components/ui/badge"
import { Button } from "@/shared/components/ui/button"
import { Separator } from "@/shared/components/ui/separator"
import { SurfaceCard, SurfaceCardProps } from "@/shared/components/ui/surface-card"
import { home } from "@/shared/constants/images"
import { PAGE_ROUTES } from "@/shared/constants/page-routes"
import { cn } from "@/shared/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { Bath, BedDouble, Grid3x2, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const propertyCardVariants = cva(
    "h-full group grid transition-all duration-200",
    {
        variants: {
            variant: {
                default: "bg-background-light",
            },
            orientation: {
                horizontal: "grid-cols-[auto_1fr_auto] gap-3 p-3 rounded-lg",
                vertical: "grid-rows-[auto_1fr] gap-3 p-4 rounded-lg",
            }
        },
        defaultVariants: {
            variant: "default",
            orientation: "vertical",
        }
    }
)

export type PropertyCardProps = VariantProps<typeof propertyCardVariants> & {
    property: Property,
    className?: string,
    highlighted?: boolean
}

function PropertyCard({
    variant,
    orientation = "vertical",
    highlighted,
    className,
    property,
}: PropertyCardProps) {
    return (
        <SurfaceCard
            asChild
            variant={highlighted ? "highlighted" : "default"}
            className={cn(
                propertyCardVariants({ variant, orientation }),
                className
            )}
        >
            <Link
                href={PAGE_ROUTES.PROPERTY_DETAILS(property.id)}
            >
                <div 
                    className={cn(
                        "relative rounded-md overflow-hidden",
                        {
                            "w-full aspect-video  relative": orientation === "vertical",
                            "w-[200px] min-h-[180px]": orientation === "horizontal",
                        }
                    )}
                >
                    <div className="absolute top-2 left-2">
                        {property.status === "Off-Plan" && <PropertyStatusBade status={property.status} />}
                        {property.status === "Ready" && <PropertyStatusBade status={property.status} />}
                    </div>
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
                        <h2 className="text-base font-semibold font-base transition-all duration-200 group-hover:underline underline-offset-4 decoration-1">{property.title}</h2>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className='size-4' />
                            <span>{property.location}</span>
                        </div>
                    </div>

                    {/* Bedrooms, Bathrooms, Area */}
                    <div className="flex flex-wrap gap-2">
                        <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>
                            <BedDouble />
                            <span>{property.bedrooms}</span>
                        </Badge>
                        <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>
                            <Bath />
                            <span>{property.bathrooms}</span>
                        </Badge>
                        <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>
                            <Grid3x2 />
                            <span>{property.area} sqft</span>
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
                        {property.price.toLocaleString()}
                    </h3>

                    <Separator className={cn(
                        {
                            "hidden": orientation === "horizontal",
                        }
                    )} />
                </div>
                <div 
                    className={cn(
                        "grid grid-cols-3 gap-3.5",
                        {
                            "self-end": orientation === "horizontal",
                            "*:w-full": orientation === "vertical",
                        }
                    )}
                >
                    <PhoneButton
                        phone={""}
                        className={cn(
                            {
                                "rounded-md": orientation === "vertical",
                            }
                        )}
                    />
                    <EmailButton 
                        email={""} 
                        className={cn(
                            {
                                "rounded-md": orientation === "vertical",
                            }
                        )} 
                    />
                    <WhatsappButton 
                        whatsapp={""} 
                        className={cn(
                            {
                                "rounded-md": orientation === "vertical",
                            }
                        )} 
                    />
                </div>
            </Link>
        </SurfaceCard>
    );
}

export default PropertyCard;