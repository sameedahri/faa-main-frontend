import Image, { ImageProps } from 'next/image'
import React from 'react'
import { shared } from '@/shared/constants/images'
import { cn } from '@/lib/utils'

interface LogoProps {
    imageProps?: ImageProps
}

function Logo({ imageProps }: LogoProps) {
    return (
        <Image 
            src={shared.logoImage}
            alt="Logo"
            priority
            {...imageProps}
            className={cn(
                'w-18',
                imageProps?.className,
            )}
        />
    )
}

export default Logo