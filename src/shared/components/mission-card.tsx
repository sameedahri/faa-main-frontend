import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';

interface MissionCardProps {
    image: StaticImageData;
    title: string;
    upcoming?: boolean;
}

function MissionCard(props: MissionCardProps) {
    const { image, title, upcoming = false } = props;
    return (
        <Link
            href="#"
            className="flex items-center w-full gap-2 px-3 py-5 rounded-md group transition-all duration-400 border border-primary/10 bg-linear-to-br from-primary/4 via-transparent to-transparent hover:shadow-lg relative hover:scale-105 md:flex-col md:justify-center md:items-center md:py-7 md:px-7 md:gap-3"
        >
            {/* {upcoming && (
                <Badge
                    variant="default"
                    type="soft"
                    size="sm"
                    className="absolute top-1.5 right-1.5 md:top-2.5 md:right-2.5"
                >
                    Upcoming
                </Badge>
            )} */}
            {/* <div className='flex items-center justify-center rounded-md py-2 w-[40px] h-[40px] md:w-[80px] md:h-[80px]'> */}
                <Image
                    src={image}
                    alt={title}
                    className="opacity-80 group-hover:opacity-100 transition-all ease-out duration-700 object-contain w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                />
            {/* </div> */}
            <h3 className='font-medium text-foreground/70 group-hover:text-foreground tracking-wide text-base transition-colors duration-700 md:text-lg md:text-center'>{title}</h3>
            <ArrowRight className='size-4 ml-auto text-muted-foreground/50 group-hover:text-primary md:hidden' />  

        </Link>
    )
}

export default MissionCard