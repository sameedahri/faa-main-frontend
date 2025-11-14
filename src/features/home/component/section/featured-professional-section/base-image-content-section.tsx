import ViewMoreButton from '@/shared/components/buttons/view-more-button'
import SectionHeading from '@/shared/components/section-heading'
import { cn } from '@/shared/lib/utils'
import { Route } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { BaseCard } from './base-card'
import { ArrowRight } from 'lucide-react'

interface BaseImageContentSectionProps {
    /**
     * The image to display in the section
     */
    image: {
        path: StaticImageData,
        alt: string
    }
    /**
     * The heading to display in the section
     */
    sectionHeading: ComponentProps<typeof SectionHeading>
    /**
     * The link to the view more page
     */
    viewMoreProps: {
        href: Route
        className?: string
        children?: React.ReactNode
    }
    /**
     * If true, the content will be switched between the cards and the image
     */
    switchContent?: boolean,

    /**
     * The props to display in the cards list
     */
    cardsList: readonly ComponentProps<typeof BaseCard>[],
}

export function BaseImageContentSection(props: BaseImageContentSectionProps) {
    return (
        <div className='py-5 relative flex flex-col gap-8'>
            <div className="container">
                <SectionHeading
                    {...props.sectionHeading}
                />
            </div>
            <div className='relative container grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center'>
                <div className={cn(
                    "flex flex-col gap-6 relative md:gap-8",
                    props.switchContent && "lg:order-2"
                )}>
                    <div className="grid gap-5 grid-cols-1">
                        {props.cardsList.map((card) => (
                            <Link
                                key={card.title}
                                href={card.href}
                                className={cn(
                                    'p-3 shadow-s border border-border-highlight rounded-md justify-between flex gap-5 items-center bg-linear-to-br from-primary/4 via-transparent to-transparent',
                                    "transition-all hover:scale-105 duration-400 group hover:[&>svg]:text-primary hover:shadow-lg md:p-5",
                                    card.className
                                )}
                            >
                                <div className='flex gap-5 items-center'>
                                    <div className='bg-primary/5 p-3 rounded-md  border-transparent aspect-square transition-all duration-200 flex items-center justify-center [&>svg]:text-primary/60 [&>svg]:transition-all [&>svg]:duration-200 [&>svg]:size-7 [&>svg]:stroke-[1.7] group-hover:[&>svg]:text-primary group-hover:border-primary/80'>
                                        <card.Icon />
                                    </div>
                                    <div className='flex flex-col gap-0'>
                                        <h1 className='text-lg font-bold text-foreground/90 group-hover:text-primary font-heading lg:text-xl'>{card.title}</h1>
                                        <p className='text-muted-foreground text-sm leading-relaxed lg:text-base'>
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                                <ArrowRight className='size-5 transition-all duration-400 stroke-2 text-muted-foreground/50' />
                            </Link>
                        ))}
                    </div>
                    {/* <ViewMoreButton
                        {...props.viewMoreProps}
                        className={cn('-mt-3', props.viewMoreProps.className)}
                    /> */}
                </div>
                <div className={cn(
                    "rounded-md overflow-hidden shadow-sm hidden w-full h-full lg:block",
                    props.switchContent && "lg:order-1"
                )}>
                    <Image
                        src={props.image.path}
                        alt={props.image.alt}
                        className='w-full h-full object-cover rounded'
                        placeholder='blur'
                    />
                </div>
            </div>
            <div className="container -mt-3">
                <ViewMoreButton
                    {...props.viewMoreProps}
                    className={cn(props.viewMoreProps.className)}
                />
            </div>
        </div>
    )
}



export default BaseImageContentSection