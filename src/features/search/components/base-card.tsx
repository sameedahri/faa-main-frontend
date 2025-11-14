"use client"

/**
 * Base Card Component,
 */

import { cn } from "@/shared/lib/utils";
import Image, { ImageProps } from "next/image";
import { PropsWithChildren } from "react";
import { Route } from "next";
import Link from "next/link";
import { EmailButton, PhoneButton, WhatsappButton } from "@/shared/components/action-buttons";
import { SurfaceCard } from "@/shared/components/ui/surface-card";

/**
 * Base Card Wrapper Component,
 * @param props - { children: React.ReactNode }
 */
export function BaseCard(props: PropsWithChildren<{ className?: string, href: Route }>) {
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation()
    }

    return (
        <SurfaceCard
            asChild
            className={cn(
                'p-4 cursor-pointer group',
                "grid grid-cols-[140px_1fr_auto] gap-5",
                'transition-all duration-300',
                // "shadow-none    ",
                "shadow-sm",
                props.className
            )}
            style={{
                // boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.15)",
            }}
        >
            <Link
                onClick={handleClick}
                href={props.href}
            >
                {props.children}
            </Link>
        </SurfaceCard>
    )
}


export function BaseCardTitle(props: PropsWithChildren) {
    return (
        <h2 className='text-lg font-semibold transition-all group-hover:underline underline-offset-4 decoration-1 duration-200'>{props.children}</h2>
    )
}

export function BaseCardImage({ className, ...props }: ImageProps) {
    return (
        <div className={cn('rounded-md overflow-hidden aspect-[11/10]', className)}>
            <Image
                placeholder={"blur"}
                className={cn('object-cover w-full h-full')}
                {...props}
            />
        </div>
    )
}

export function BaseCardActionButtons(props: {
    phone: string
    email: string
    whatsapp: string
    className?: string
}) {
    return (
        <div className={cn("flex gap-3", props.className)}>
            <PhoneButton  phone={props.phone} />
            <EmailButton email={props.email} />
            <WhatsappButton whatsapp={props.whatsapp} />
        </div>
    )
}