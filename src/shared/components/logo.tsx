import Image, { ImageProps } from 'next/image'
import React from 'react'
import { shared } from '@/shared/constants/images'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface LogoProps {
    imageProps?: ImageProps
}

function Logo({ imageProps }: LogoProps) {
    return (
        <Link href="/" className='hover:scale-105 transition-all duration-300'>
            <Image
                src={shared.logoImage}
                alt="Logo"
                priority
                {...imageProps}
                className={cn(
                    'w-16',
                    imageProps?.className,
                )}
            />
        </Link>
    )
}

export default Logo