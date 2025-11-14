import { PROPERTY_CARDS } from '@/features/agent/components/data'
import MortgageDetails from '@/features/properties/components/mortgage-details'
import RegulatoryInformation from '@/features/properties/components/regulatory-information'
import PropertyCard from '@/features/search/components/property-card'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'
import BackButton from '@/shared/components/back-button'
import { PropertyStatusBade } from '@/shared/components/badges/property-badges'
import { Separator } from '@/shared/components/ui/separator'
import { agent, home } from '@/shared/constants/images'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { cn } from '@/shared/lib/utils'
import { Bath, BedDouble, CircleSmall, Copy, Grid3x2, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'


function getPropertyDetails(id: string) {
    return PROPERTY_CARDS.find((property) => property.id === id)
}

async function PropertyDetailsPage(props: PageProps<"/property/[id]">) {
    const { id } = await props.params
    const propertyDetails = getPropertyDetails(id)

    if (!propertyDetails) {
        return notFound()
    }

    return (
        <div className="bg-background-light pb-10">
            <div className="container py-3">
                <BackButton />
            </div>
            <div className="container flex flex-col gap-5">
                {/* Property Images */}
                <div className={cn(
                    'grid grid-rows-2 grid-cols-3 gap-5',
                    "[&_img]:object-cover [&_img]:w-full [&_img]:h-full [&_img]:rounded-md",
                )}>
                    <div className='row-span-full col-start-1 col-end-3 relative'>
                        <PropertyStatusBade 
                            status={propertyDetails.status}
                            className='absolute left-3 top-3'
                        />
                        <Image
                            src={home.heroImage}
                            alt="Property Image"
                        />
                    </div>
                    <Image
                        src={home.heroImage}
                        alt="Property Image"
                        className='col-start-3 col-end-4 row-start-1 row-end-2'
                    />
                    <Image
                        src={home.heroImage}
                        alt="Property Image"
                        className='col-start-3 col-end-4 row-start-2 row-end-3'
                    />
                </div>

                {/* Content */}
                <div className="grid grid-cols-3 items-start gap-5 pb-7">
                    {/* Property Info */}
                    <div className="flex flex-col gap-0 col-start-1 col-end-3">
                        {/* Property Title, Price and Features */}
                        <div className="space-y-5">
                            {/* Property Title and Price */}
                            <div className='space-y-3'>
                                <div className='space-y-1'>
                                    <h1 className='text-xl font-medium font-heading'>{propertyDetails.title}</h1>
                                    <div className='flex items-center gap-1 text-muted-foreground text-sm'>
                                        <MapPin className='size-4' />
                                        <span>{propertyDetails.location}</span>
                                    </div>
                                </div>
                                <h2 className='text-3xl font-bold'>
                                    <small className='text-muted-foreground font-normal text-base'>AED </small>
                                    {propertyDetails.price.toLocaleString()}
                                </h2>
                            </div>

                            {/* Property Features */}
                            <div className='flex flex-wrap gap-4'>
                                <PropertyFeatureCard>
                                    <BedDouble />
                                    <span>{propertyDetails.bedrooms} Bedrooms</span>
                                </PropertyFeatureCard>
                                <PropertyFeatureCard>
                                    <Bath />
                                    <span>{propertyDetails.bathrooms} Bathrooms</span>
                                </PropertyFeatureCard>
                                <PropertyFeatureCard>
                                    <Grid3x2 />
                                    <span>{propertyDetails.area} sqft Area</span>
                                </PropertyFeatureCard>
                            </div>
                        </div>

                        <SectionSeparator />

                        {/* Property Description */}
                        <PropertyInfoCard title="Description">
                            <p className='text-muted-foreground text-base leading-relaxed'>
                                {/* {propertyDetails.description} */}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum error aspernatur ad exercitationem, iste sequi accusamus cum consequuntur iusto sunt quae quo suscipit ab quod cupiditate ipsam optio culpa.
                            </p>
                        </PropertyInfoCard>

                        <SectionSeparator />

                        {/* Features and Amenities */}
                        <PropertyInfoCard title="Features and Amenities">
                            <div className="grid grid-cols-3 gap-2 pt-1">
                                {propertyDetails.amenities.map((amenity, index) => (
                                    <div
                                        className='grid grid-cols-[auto_1fr] items-center gap-1.5 text-muted-foreground'
                                        key={amenity}
                                    >
                                        <CircleSmall className='size-3 mt-0.5 fill-primary/70 stroke-transparent' />
                                        <span>
                                            {amenity}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </PropertyInfoCard>

                        <SectionSeparator />

                        {/* Regulatory Information */}
                        <PropertyInfoCard title="Regulatory Information">
                            <RegulatoryInformation />
                        </PropertyInfoCard>

                        <SectionSeparator />

                        {/* Mortgage */}
                        <PropertyInfoCard title="Mortgage Calculator">
                            <MortgageDetails />
                        </PropertyInfoCard>
                    </div>

                    {/* Agent Info */}
                    <div className='col-start-3 col-end-4 p-5 rounded-lg flex flex-col gap-5 sticky top-5 bg-linear-to-b from-primary/5 via-transparent shadow to-transparent border border-primary/15'>
                        <Link href={PAGE_ROUTES.AGENT_DETAILS("1")} className='flex items-center gap-2'>
                            <div className='aspect-square w-[60px] rounded-full overflow-hidden'>
                                <Image
                                    src={agent.agentImage1}
                                    alt="Agent Image"
                                    className='w-full h-full'
                                />
                            </div>
                            <div className="flex flex-col gap-0">
                                <h3 className='font-semibold text-lg'>Ahmed Ali Farsi</h3>
                                <p className='text-muted-foreground text-sm'>
                                    Real Estate Agent
                                </p>
                            </div>
                        </Link>
                        <div className='grid grid-cols-2 gap-3'>
                            <EmailButton email={""} size={"default"}>
                                Email
                            </EmailButton>
                            <PhoneButton phone={""} size={"default"}>
                                Phone
                            </PhoneButton>
                            <WhatsappButton whatsapp={""} size={"default"} className='col-span-full'>
                                WhatsApp
                            </WhatsappButton>
                        </div>
                    </div>
                </div>
                
                <SectionSeparator className='max-w-full' />

                {/* Recommendation For You */}
                <PropertyInfoCard title="Recommendation For You" className='mt-0 gap-0'>
                    <div className='grid grid-cols-3 gap-7 pt-4'>
                        {PROPERTY_CARDS
                            .slice(0, 3)
                            .map((property) => (
                            <PropertyCard 
                                key={property.id} 
                                property={{...property}} 
                            />
                        ))}
                    </div>
                </PropertyInfoCard>
            </div>
        </div>
    )
}

function SectionSeparator(props: { className?: string }) {
    return (
        <Separator className={cn('my-10 max-w-[99%]', props.className)} />
    )
}

function PropertyFeatureCard(props: PropsWithChildren) {
    return (
        <div className='flex min-w-[150px] flex-col text-center items-center gap-1.5 [&>svg]:size-6 aspect-video shadow p-5 rounded-md'>
            {props.children}
        </div>
    )
}

function PropertyInfoCard(props: PropsWithChildren<{ title: string, className?: string }>) {
    return (
        <div className={cn('flex flex-col gap-2', props.className)}>
            <h3 className='text-xl font-semibold '>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default PropertyDetailsPage