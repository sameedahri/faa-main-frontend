import React, { PropsWithChildren } from 'react'
import { BaseCarouselCard } from './featured-base-carousel';
import { home } from '@/shared/constants/images';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/shared/components/ui/separator';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';

type EventInfoCardProps = {
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    location: string;
}


function EventInfoCard() {
    return (
        <BaseCarouselCard>
            <div className='rounded-md overflow-hidden aspect-[6/5] bg-background-dark'>
                <Image
                    src={home.heroImage}
                    alt="Agent Image"
                    className='object-cover w-full h-full'
                />
            </div>
            <div className='flex items-center gap-0.5 text-xs text-foreground pt-3'>
                <MapPin stroke={"var(--primary)"} strokeWidth={1} className='w-4' />
                Dubai UAE
            </div>
            <div className='pt-2 flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <Link
                        href={"#"}
                        className='text-lg font-semibold leading-tight hover:text-primary'
                    >
                        Al Saadiyat Island
                    </Link>
                    <p className='text-muted-foreground text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima error illo eaque ipsa nam neque?
                    </p>
                </div>

                <table className='text-sm w-full'>
                    <tbody>
                        <Tr>
                            <Td className='font-medium'>Event Type</Td>
                            <Td>Onsite</Td>
                        </Tr>
                        <Tr>
                            <Td className='font-medium'>Event Time</Td>
                            <Td>08:00 PM - 11:00 PM</Td>
                        </Tr>
                        <Tr className='border-b-0'>
                            <Td className='font-medium'>Event Date</Td>
                            <Td>Mon 12/12/2025</Td>
                        </Tr>
                    </tbody>
                </table>

                <Separator className='my-1' />

                <div className='grid grid-cols-2 gap-3'>
                    <Button
                        variant={"soft-muted"}
                        size={"sm"}
                        className='h-9 w-full shadow-sm hover:shadow-md'
                    >
                        Details
                    </Button>
                    <Button
                        variant={"soft-primary"}
                        size={"sm"}
                        className='h-9 text-primary hover:bg-primary/10 shadow-sm hover:shadow-md'
                    >
                        <Phone />
                        Contact
                    </Button>
                </div>
            </div>
        </BaseCarouselCard>
    )
}

function Tr({ children, className }: PropsWithChildren<{className?: string}>) {
    return (
        <tr className={cn('border-b border-border/70', className)}>
            {children}
        </tr>
    )
}

function Td({ children, className }: PropsWithChildren<{ className?: string }>) {
    return (
        <td className={cn("py-2", className)}>
            {children}
        </td>
    )
}


export default EventInfoCard