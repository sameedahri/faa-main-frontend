import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge } from './ui/badge';

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
            className="flex flex-col items-center justify-center w-full gap-3 p-7 rounded-md group transition-all duration-700 border border-background border-t border-t-highlight bg-gradient-hover shadow-sm hover:shadow-lg h-[-webkit-fill-available] aspect-video relative"
        >
            {upcoming && (
                <Badge
                    variant="default"
                    type="soft"
                    size="sm"
                    className="absolute top-2.5 right-2.5"
                >
                    Upcoming
                </Badge>
            )}
            <div className='flex items-center justify-center rounded-md py-2 w-[80px] h-[80px]'>
                <Image
                    src={image}
                    alt={title}
                    className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all ease-out duration-700 w-full h-full object-contain"
                />
            </div>
            <h3 className='text-center font-medium text-foreground/70 group-hover:text-foreground tracking-wide text-lg transition-colors duration-700'>{title}</h3>
        </Link>
    )
}

export default MissionCard