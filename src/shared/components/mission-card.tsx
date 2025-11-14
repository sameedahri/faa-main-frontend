import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import { SurfaceCard } from './ui/surface-card';
import { cn } from '../lib/utils';

interface MissionCardProps {
    image: StaticImageData;
    title: string;
    upcoming?: boolean;
}

function MissionCard(props: MissionCardProps) {
    const { image, title, upcoming = false } = props;
    return (
        <SurfaceCard
            variant="highlighted"
            asChild
            className={cn(
                'relative group',
                "w-full px-3 py-5 md:py-7 md:px-3",
                "flex items-center gap-2 md:flex-col md:gap-3 md:justify-center md:items-center",
                "transition-all duration-400",
                "hover:shadow-lg hover:scale-105",
            )}
        >
            <Link
                href="#"
            >
                <Image
                    src={image}
                    alt={title}
                    className="opacity-80 group-hover:opacity-100 transition-all ease-out duration-700 object-contain w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                />
                <h3 className='font-medium font-heading text-foreground/90 group-hover:text-foreground tracking-wide text-base transition-colors duration-700 md:text-base md:text-center'>{title}</h3>
                <ArrowRight className='size-4 ml-auto text-muted-foreground/50 group-hover:text-primary md:hidden' />
            </Link>
        </SurfaceCard>
    )
}

export default MissionCard