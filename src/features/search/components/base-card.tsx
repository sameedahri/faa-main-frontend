"use client"

/**
 * Base Card Component,
 */

import { cn } from "@/shared/lib/utils";
import Image, { ImageProps, StaticImageData } from "next/image";
import { createContext, PropsWithChildren, ReactNode, useContext } from "react";
import { Route } from "next";
import Link from "next/link";
import { EmailButton, PhoneButton, WhatsappButton } from "@/shared/components/action-buttons";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/shared/constants/page-routes";
import { MapPin, Star, User, User2 } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";

export const ORIENTATION = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical",
} as const

export type Orientation = (typeof ORIENTATION)[keyof typeof ORIENTATION]

type BaseCardProps = {
    orientation?: Orientation
    className?: string
    href: Route
}

const BaseCardContext = createContext<BaseCardProps>({
    orientation: ORIENTATION.HORIZONTAL,
    className: "",
    href: "#",
})


function useBaseCardContext() {
    const context = useContext(BaseCardContext)
    if (!context) {
        throw new Error("useBaseCardContext must be used within a BaseCard")
    }
    return context
}

/**
 * Base Card Wrapper Component,
 * @param props - { orientation: "horizontal" | "vertical", className?: string, href: Route, children: React.ReactNode }
 */
export function BaseCard(props: PropsWithChildren<BaseCardProps>) {
    const {
        orientation = ORIENTATION.HORIZONTAL,
        className,
        href
    } = props

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation()
    }

    return (
        <BaseCardContext.Provider
            value={{
                orientation,
                className,
                href
            }}
        >
            <SurfaceCard
                asChild
                data-orientation={orientation}
                className={cn(
                    "p-3 cursor-pointer group border-none relative",
                    "grid gap-4",
                    "transition-all duration-300",
                    "shadow-none",
                    "data-[orientation='horizontal']:grid-cols-[140px_1fr_auto]",
                    `data-[orientation='vertical']:grid-rows-[auto_1fr]`,
                    props.className
                )}
            >
                <Link
                    onClick={handleClick}
                    href={props.href}
                >
                    {props.children}
                </Link>
            </SurfaceCard>
        </BaseCardContext.Provider>
    )
}

export function BaseCardContentWrapper(props: PropsWithChildren) {
    return (
        <div className='flex flex-col gap-4 justify-between'>
            {props.children}
        </div>
    )
}

export function BaseCardTitleWrapper(props: PropsWithChildren<{
    className?: string
}>) {
    return (
        <div className={cn(
            "flex flex-col gap-0.5",
            props.className
        )}>
            {props.children}
        </div>
    )
}

export function BaseCardTitle(props: PropsWithChildren<{
    badges?: React.ReactNode
}>) {
    return (
        <div className='flex items-center gap-2.5'>
            <h2
                className='text-lg font-semibold transition-all hover:underline underline-offset-4 decoration-1 duration-200'
            >
                {props.children}
            </h2>
            {props.badges && (
                <div className='flex gap-1'>
                    {props.badges}
                </div>
            )}
        </div>
    )
}

export function BaseCardDescription(props: PropsWithChildren<{
    className?: string
}>) {
    return (
        <p className={cn(
            "text-sm text-muted-foreground leading-relaxed",
            props.className
        )}>
            {props.children}
        </p>
    )
}

export function BaseCardMetaWrapper(props: PropsWithChildren) {
    return (
        <div className="flex gap-4 flex-wrap">
            {props.children}
        </div>
    )
}

export function BaseCardMetaItem(props: PropsWithChildren<{
    className?: string
}>) {
    return (
        <div className={cn(
            "flex items-center gap-1 text-foreground text-sm [&_svg]:size-3.5",
            props.className
        )}>
            {props.children}
        </div>
    )
}

export function BaseCardLocationItem(props: {
    location: string
    wrapperClassName?: string
}) {
    return (
        <BaseCardMetaItem
            className={cn(
                "gap-0.5 [&_svg]:size-4.5",
                props.wrapperClassName
            )}
        >
            <MapPin className="fill-red-400/70 stroke-background-light" />
            <span>{props.location}</span>
        </BaseCardMetaItem>
    )
}

export function BaseCardUsersItems(props: {
    numberOfUser: number
    wrapperClassName?: string
}) {
    return (
        <BaseCardMetaItem
            className={cn(
                "gap-0.5 [&_svg]:size-4.5",
                props.wrapperClassName
            )}
        >
            <User2 className="fill-primary-400/80 stroke-background-light" />
            <span>{props.numberOfUser}</span>
        </BaseCardMetaItem>
    )
}

export function BaseCardRatingItem(props: {
    rating: number
    reviews: number
    wrapperClassName?: string
}) {
    return (
        <BaseCardMetaItem className={props.wrapperClassName}>
            <Star className="stroke-warning/60 fill-warning/70" />
            <span>{props.rating} <small className="text-muted-foreground">({props.reviews})</small></span>
        </BaseCardMetaItem>
    )
}

export function BaseCardSpecializationWrapper(props: PropsWithChildren<{
    className?: string
}>) {
    return (
        <div className={cn(
            "flex flex-wrap gap-2",
            props.className
        )}>
            {props.children}
        </div>
    )
}

export function BaseCardSpecialization(props: PropsWithChildren<{
    className?: string
}>) {
    return (
        <Badge
            variant={'muted'}
            type={'outline'}
            className={cn(
                'rounded-full h-6',
                props.className
            )}
        >
            {props.children}
        </Badge>


    )
}

export function BaseCardRoles(props: {
    roles: string[]
}) {
    return (
        <p className='text-muted-foreground text-sm'>
            {props.roles.join(' | ')}
        </p>
    )
}

export function BaseCardImage({ className, ...props }: ImageProps) {
    const { orientation } = useBaseCardContext()
    return (
        <div
            data-orientation={orientation}
            className={cn(
                'rounded-md overflow-hidden',
                "[&_img]:object-cover [&_img]:w-full [&_img]:h-full",
                "data-[orientation='horizontal']:aspect-[11/10]",
                "data-[orientation='vertical']:aspect-video",
                className,
            )}
        >
            <Image
                placeholder={"blur"}
                {...props}
            />
        </div>
    )
}

export function BaseCardPoster(props: PropsWithChildren<{
    href: Route
    image: StaticImageData
    className?: string
}>) {
    const router = useRouter()
    return (
        <button
            className={cn(
                'aspect-square w-12 overflow-hidden rounded-lg border border-border/50 transition cursor-pointer hover:border-primary/50',
                props.className
            )}
            onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                router.push(props.href)
            }}
        >
            <Image
                src={props.image}
                alt="Poster Image"
            />
        </button>
    )
}

export function BaseCardActionButtonsWrapper(props: PropsWithChildren<{
    className?: string
}>) {
    const { orientation } = useBaseCardContext()
    return (
        <div
            data-orientation={orientation}
            className={cn(
                "grid grid-cols-3 gap-3.5",
                "data-[orientation='horizontal']:self-end",
                "data-[orientation='vertical']:*:w-full data-[orientation='vertical']:pt-4 data-[orientation='vertical']:border-border/50 data-[orientation='vertical']:border-t",
            )}
        >
            {props.children}
        </div>
    )
}

export function BaseCardActionButtons(props: {
    phone: string
    email: string
    whatsapp: string
    className?: string
}) {
    const { orientation } = useBaseCardContext()
    return (
        <div className={cn("flex gap-3", props.className)}>
            <PhoneButton phone={props.phone} />
            <EmailButton email={props.email} />
            <WhatsappButton whatsapp={props.whatsapp} />
        </div>
    )
}

export function BaseCardPrice(props: PropsWithChildren<{
    className?: string,
    price: number
}>) {
    return (
        <h2 className='text-xl text-foreground font-semibold'>
            <small
                className='text-muted-foreground text-sm font-normal'
            >
                AED
            </small>
            {` `}
            {props.price.toLocaleString()}
        </h2>
    )
}