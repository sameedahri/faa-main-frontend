import { LucideIcon } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeadingProps {
    /**
     * Optional left icon to display
     */
    LeftIcon?: LucideIcon

    /**
     * Optional description to display
     */
    description?: React.ReactNode

    /**
     * Optional tailwind classes to apply to the description
     */
    descriptionClassName?: string

    /**
     * Optional tailwind classes to apply to the heading
     */
    headingClassName?: string

    /**
     * Optional heading to display
     */
    title: React.ReactNode

    wrapperClassName?: string
}

/**
 * ---------------------------------------
 * SectionHeading Component
 * ---------------------------------------
 * 
 * A reusable component for displaying a section heading.
 * 
 * @param {SectionHeadingProps} props - The props for the SectionHeading component.
 */
function SectionHeading({ title, LeftIcon, description, descriptionClassName, headingClassName, wrapperClassName }: SectionHeadingProps) {
    return (
        <div className={cn("flex flex-col gap-1 lg:gap-1.5", wrapperClassName)}>
            <h2
                className={cn(
                    'text-2xl tracking-normal font-semibold font-heading grid grid-cols-[auto_1fr] items-start justify-center gap-1.5 md:text-3xl xl:text-4xl',
                    headingClassName
                )}
            >
                {LeftIcon && <LeftIcon className='size-5 mt-1' />}
                {title}
            </h2>
            {description && <p className={cn('text-base text-muted-foreground lg:text-lg', descriptionClassName)}>{description}</p>}
        </div>
    )
}

export default SectionHeading