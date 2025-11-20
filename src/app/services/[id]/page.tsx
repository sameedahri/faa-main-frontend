import { SERVICES } from '@/features/agent/components/data'
import ServiceCard from '@/features/search/components/service-card'
import { EmailButton, PhoneButton, WhatsappButton } from '@/shared/components/action-buttons'
import BackButton from '@/shared/components/back-button'
import { ProBadge } from '@/shared/components/badges/subscription-badges'
import { VerifiedBadge } from '@/shared/components/badges/verified-badges'
import { Badge } from '@/shared/components/ui/badge'
import { Separator } from '@/shared/components/ui/separator'
import { SurfaceCard } from '@/shared/components/ui/surface-card'
import { agent, service } from '@/shared/constants/images'
import { cn } from '@/shared/lib/utils'
import { BriefcaseBusiness, MapPin, Star } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React, { PropsWithChildren } from 'react'

function getServiceDetails(id: string) {
    return SERVICES.find((service) => service.id === id)
}

async function ServiceDetailsPage(props: PageProps<"/services/[id]">) {
    const { id } = await props.params
    const serviceDetails = getServiceDetails(id)

    if (!serviceDetails) {
        return notFound()
    }

    return (
        <div className='bg-background-dark pb-16'>
            <div className="container py-3">
                <BackButton />
            </div>

            <div className="container flex flex-col gap-2">
                {/* Property Images */}
                <div className={cn(
                    'grid grid-rows-2 grid-cols-3 gap-2',
                    "[&_img]:object-cover [&_img]:w-full [&_img]:h-full [&_img]:rounded-md [&_img]:aspect-video",
                )}>
                    <div className='row-span-full col-start-1 col-end-3 relative'>
                        <Image
                            src={service.serviceImage4}
                            alt="Service Image"
                        />
                    </div>
                    <Image
                        src={service.serviceImage5}
                        alt="Property Image"
                        className='col-start-3 col-end-4 row-start-1 row-end-2'
                    />
                    <Image
                        src={service.serviceImage1}
                        alt="Property Image"
                        className='col-start-3 col-end-4 row-start-2 row-end-3'
                    />
                </div>

                {/* Content */}
                <div className="grid grid-cols-3 items-start gap-2">

                    {/* Service Info */}
                    <div className="h-full flex flex-col gap-4 col-start-1 col-end-3 bg-background-light p-5 rounded-md">
                        <div className="space-y-1">
                            <h1 className='text-xl font-semibold font-heading'>
                                {serviceDetails.name}
                            </h1>
                            <div className='flex items-center gap-0.5 text-muted-foreground text-sm'>
                                <MapPin className='size-4.5 fill-primary-400 stroke-primary-50' />
                                <span>{serviceDetails.location}</span>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {serviceDetails.industries.map((industry, index) => (
                                <Badge key={index} variant={'muted'} type={'outline'} className='rounded-full h-6 border-border text-muted-foreground/90 font-normal'>
                                    {industry}
                                </Badge>
                            ))}
                        </div>
                        <p className='text-muted-foreground text-base leading-relaxed'>
                            Our comprehensive property valuation service provides you with an accurate assessment of your property's market value. Our experienced professionals use advanced market analysis tools and comparable sales data to deliver a detailed valuation report. This service is essential for sellers, buyers, and investors who need to make informed decisions about their real estate transactions. We analyze market trends, property conditions, and comparable sales to give you the most accurate valuation possible.
                        </p>
                        <h2 className='text-2xl font-bold pt-1'>
                            <small className='text-muted-foreground font-normal text-base'>AED </small>
                            {serviceDetails.price.toLocaleString()}
                        </h2>
                    </div>

                    {/* Agent Info */}
                    <SurfaceCard
                        className={cn(
                            "sticky top-6",
                            "flex flex-col gap-4 items-center px-4 py-5 rounded-lg border-none shadow-sm",
                        )}
                    >
                        <Image
                            src={agent.agentImage1}
                            alt="Agent Image"
                            className="w-24 aspect-square rounded-full shadow-sm"
                        />
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2 text-center pt-0">
                                <div className="relative w-fit mx-auto">
                                    <h2 className="text-xl font-bold font-heading">
                                        {"John Doe"}
                                    </h2>
                                    <div className="absolute -top-2 -right-4">
                                        <VerifiedBadge className="size-4" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-1 pb-1">
                                    <ProBadge />

                                </div>

                            </div>
                            <div className="flex flex-col gap-1.5 text-center">
                                <p className="text-sm">
                                    {`Real Estate Agent | Property Management`}
                                </p>
                                <div className="flex items-center gap-1 justify-center text-muted-foreground">
                                    <BriefcaseBusiness className="size-3" />
                                    <p className="text-sm">Dubai Elite Properties</p>
                                </div>
                            </div>
                        </div>



                        <div className="flex flex-wrap gap-5 text-sm">
                            <div className='flex items-center gap-0.5 text-foreground'>
                                <Star className='size-4 text-muted-foreground fill-warning stroke-transparent' />
                                <span className="">{4} <small className="text-muted-foreground font-normal">(29)</small></span>
                            </div>
                            <div className='flex items-center gap-0.5 text-foreground'>
                                <MapPin className='size-4 text-muted-foreground fill-primary stroke-white' />
                                <span className="" >{"Dubai UAE"}</span>
                            </div>
                        </div>
                        {/* <Separator className="my-1.5 bg-border/50" /> */}
                        <div className="grid grid-cols-3 gap-3 w-full pt-2 *:w-full">
                            <EmailButton
                                email={"test@gmail.com"}
                                className="rounded-md h-9 [&>svg]:size-4"
                            />
                            <PhoneButton
                                phone={"213123123"}
                                className="rounded-md h-9 [&>svg]:size-4"
                            />
                            <WhatsappButton
                                whatsapp={"213123123"}
                                className="rounded-md h-9  [&>svg]:size-5"
                            />
                        </div>
                    </SurfaceCard>
                </div>
            </div>



            {/* Recommendation For You */}
            <div className="container">
                <Separator className='max-w-full mt-22 mb-10' />
                <ServiceInfoCard title="Recommendation For You" className='gap-3'>
                    <div className='grid grid-cols-3 gap-3'>
                        {SERVICES
                            .slice(0, 3)
                            .map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    orientation={"vertical"}
                                />
                            ))}
                    </div>
                </ServiceInfoCard>
            </div>
        </div>
    )
}

function ServiceInfoCard(props: PropsWithChildren<{ title: string, className?: string }>) {
    return (
        <div className={cn('flex flex-col gap-2', props.className)}>
            <h3 className='text-xl font-semibold '>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default ServiceDetailsPage