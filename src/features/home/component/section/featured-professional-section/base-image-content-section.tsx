import ViewMoreButton from '@/shared/components/buttons/view-more-button'
import SectionHeading from '@/shared/components/section-heading'
import { cn } from '@/shared/lib/utils'
import { Icon } from '@/shared/types/icon.type'
import { Route } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { ComponentProps } from 'react'
import { BaseCard } from './base-card'

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
    viewMoreLink?: Route
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
        <div className='py-5 relative'>
            <div className='container grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center'>
                <div className={cn(
                    "flex flex-col gap-6 relative md:gap-8",
                    props.switchContent && "lg:order-2"
                )}>
                    <SectionHeading
                        {...props.sectionHeading}
                    />
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                        {props.cardsList.map((card) => (
                            <BaseCard
                                key={card.title}
                                {...card}
                            />
                        ))}
                    </div>
                    <ViewMoreButton
                        href={props.viewMoreLink ?? "#"}
                        className='-mt-2'
                    />
                </div>
                <div className={cn(
                    "rounded-md overflow-hidden shadow-sm hidden w-full h-full max-h-[550px] lg:block",
                    props.switchContent && "lg:order-1"
                )}>
                    <Image
                        src={props.image.path}
                        alt={props.image.alt}
                        className='w-full h-full object-cover '
                        placeholder='blur'
                    />
                </div>
            </div>
        </div>
    )
}



export default BaseImageContentSection