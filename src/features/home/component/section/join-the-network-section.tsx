import SectionHeading from '@/shared/components/section-heading'
import { Button } from '@/shared/components/ui/button'
import { ArrowRight, Check, CheckCircle } from 'lucide-react'
import React from 'react'

function JoinTheNetworkSection() {
    return (
        <div className='container flex flex-col gap-8 max-w-inner-container items-center px-5 py-10 rounded-md bg-linear-to-t from-primary/6 via-primary/2 to-white md:py-16 md:px-10'>
            <SectionHeading 
                title="Your Mission Awaits: Join the Network"
                description="Join the UAE's fastest-growing network of verified professionals. Get more clients, build your reputation, and scale your business—all in one place."
                wrapperClassName='text-center items-center'
                descriptionClassName='max-w-[80ch]'
            />
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10'>
                {JOIN_THE_NETWORK_CARDS_CONTENT.map((card) => (
                    <JoinTheNetworkCard key={card.title} {...card} />
                ))}
            </div>
            <Button className='w-fit'>
                Start Getting Clients Today
                <ArrowRight />
            </Button>
        </div>
    )
}


export function JoinTheNetworkCard(props: typeof JOIN_THE_NETWORK_CARDS_CONTENT[number]) {
    return (
        <div className='p-0 bg-linear-to- from-primary/4 via-transparent to-transparent backdrop-blur-3xl border-primary/10 rounded-md flex flex-col text-center items-center gap-3'>
            <div className='p-2 rounded-full bg-primary/5'>
                <Check className='text-primary size-7 mt-1' />
            </div>
            <div className='flex flex-col gap-1.5 md:gap-2'>
                <h2 className='text-lg  font-heading lg:text-xl'>{props.title}</h2>
                <p className='text-muted-foreground text-sm w-10/12 mx-auto lg:text-base'>{props.description}</p>
            </div>
        </div>
    )
}

const JOIN_THE_NETWORK_CARDS_CONTENT = [
    {
        title: "Connect with high-quality clients instantly",
        description: "Get matched with pre-verified clients actively searching for your services",
    },
    {
        title: "Boost credibility with verified badges",
        description: "Stand out with official certifications and client reviews that build trust",
    },
    {
        title: "Manage everything in one dashboard",
        description: "Track leads, schedule appointments, and grow your business with powerful tools",
    },
    {
        title: "Expand your reach with smart marketing",
        description: "Promote your services to a wider audience through targeted campaigns and insights",
    }
]

export default JoinTheNetworkSection