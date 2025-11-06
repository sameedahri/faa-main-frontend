/**
 * Base Card Component,
 */

import { cn } from "@/shared/lib/utils";
import Image, { ImageProps } from "next/image";
import { PropsWithChildren } from "react";

/**
 * Base Card Wrapper Component,
 * @param props - { children: React.ReactNode }
 */
export function BaseCard(props: PropsWithChildren) {
    return (
        <div className={cn(
            'p-4 rounded-md bg-background-light cursor-pointer grid grid-cols-[140px_1fr_auto] gap-5',
            'transition-all duration-300 hover:shadow-lg'
        )}>
            {props.children}
        </div>
    )
}


export function BaseCardTitle(props: PropsWithChildren) {
    return (
        <h2 className='text-lg font-semibold'>{props.children}</h2>
    )
}

export function BaseCardImage({className, ...props}: ImageProps) {
    return (
        <div className={cn('rounded-md overflow-hidden aspect-[11/10] shadow-sm', className)}>
            <Image
                placeholder={"blur"}
                className={cn('object-cover w-full h-full')}
                {...props}
            />
        </div>
    )
}