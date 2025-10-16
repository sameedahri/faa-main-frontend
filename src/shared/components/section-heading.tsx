import { LucideIcon } from 'lucide-react'
import React, { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeadingProps {
    /**
     * Optional left icon to display
     */
    LeftIcon?: LucideIcon

    /**
     * Optional description to display
     */
    description?: string

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
    title: string

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
        <div className={cn("flex flex-col gap-0.5", wrapperClassName)}>
            <h2
                className={cn(
                    'text-3xl font-bold font-heading grid grid-cols-[auto_1fr] items-start justify-center gap-1.5',
                    headingClassName
                )}
            >
                {LeftIcon && <LeftIcon className='size-5 mt-1' />}
                {title}
            </h2>
            {description && <p className={cn('text-base text-muted-foreground', descriptionClassName)}>{description}</p>}
        </div>
    )
}

export default SectionHeading