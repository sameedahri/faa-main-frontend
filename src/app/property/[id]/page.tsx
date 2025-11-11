import { PROPERTY_CARDS } from '@/features/agent/components/data'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'
import BackButton from '@/shared/components/back-button'
import { Badge } from '@/shared/components/ui/badge'
import { agent, home } from '@/shared/constants/images'
import { cn } from '@/shared/lib/utils'
import { Bath, BedDouble, Check, CircleCheck, Copy, Grid3x2, MapPin } from 'lucide-react'
import Image from 'next/image'
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
                    'grid grid-rows-2 grid-cols-3 gap-3',
                    "[&_img]:object-cover [&_img]:w-full [&_img]:h-full [&_img]:rounded-md",
                )}>
                    <Image
                        src={home.heroImage}
                        alt="Property Image"
                        className='row-span-full col-start-1 col-end-3'
                    />
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
                <div className="grid grid-cols-3 items-start gap-3 pb-7">
                    {/* Property Info */}
                    <div className="flex flex-col gap-10 col-start-1 col-end-3">
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
                            <div className='flex gap-4'>
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

                        <div className="space-y-16">
                            {/* Property Description */}
                            <PropertyInfoCard title="Description">
                                <p className='text-muted-foreground text-base leading-relaxed'>
                                    {/* {propertyDetails.description} */}
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum error aspernatur ad exercitationem, iste sequi accusamus cum consequuntur iusto sunt quae quo suscipit ab quod cupiditate ipsam optio culpa.
                                </p>
                            </PropertyInfoCard>

                            {/* Features and Amenities */}
                            <PropertyInfoCard title="Features and Amenities">
                                <div className="grid grid-cols-3 gap-3 pt-1">
                                    {propertyDetails.amenities.map((amenity, index) => (
                                        <div
                                            // variant={"muted"}
                                            // className='h-8 border-border/60 border bg-transparent  gap-2 rounded-md w-full text-start justify-start '
                                            // size={"md"}
                                            className='flex items-center gap-2'
                                            key={amenity}
                                        >
                                            {/* <Check className='text-primary stroke-2.5' /> */}
                                            <div className='size-1.5 rounded-full bg-primary'></div>
                                            {amenity}
                                        </div>
                                    ))}
                                </div>
                            </PropertyInfoCard>
                            
                            {/* Regulatory Information */}
                            <PropertyInfoCard title="Regulatory Information">
                                <div className="grid grid-cols-2 gap-3 pt-1">
                                    <table className='table-auto w-full'>
                                        <tbody className='w-full'>
                                            <tr>
                                                <td className={tdClassName}>Ads Permit Number</td>
                                                <td className={cn(tdClassName, "border- font-normal")}>
                                                    <div className="flex items-start gap-3">
                                                        1234567890
                                                        <Copy className='size-3' />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={tdClassName}>Company License Number</td>
                                                <td className={cn(tdClassName, "border- font-normal")}>
                                                    <div className="flex items-start gap-3">
                                                        1234567890
                                                        <Copy className='size-3' />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={cn(tdClassName, "border-b-0")}>Agent License Number</td>
                                                <td className={cn(tdClassName, "border- border-b-0 font-normal")}>
                                                    <div className="flex items-start gap-3">
                                                        8979812
                                                        <Copy className='size-3' />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </PropertyInfoCard>
                        </div>
                    </div>

                    {/* Agent Info */}
                    <div className='col-start-3 col-end-4 p-5 rounded-md bg-background-light flex flex-col gap-5 border'>
                        <div className='flex items-center gap-2'>
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
                        </div>
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

            </div>
        </div>
    )
}

const tdClassName = 'border-b p-3 w-full whitespace-nowrap font-medium'

function PropertyFeatureCard(props: PropsWithChildren) {
    return (
        <div className='flex flex-col text-center items-center gap-1.5 [&>svg]:size-6 aspect-video bg-background p-6 rounded-md'>
            {props.children}
        </div>
    )
}

function PropertyInfoCard(props: PropsWithChildren<{ title: string, className?: string }>) {
    return (
        <div className={cn('flex flex-col gap-1.5', props.className)}>
            <h3 className='text-xl font-bold'>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default PropertyDetailsPage