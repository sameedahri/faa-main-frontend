import { cn } from "@/shared/lib/utils";
import { Icon } from "@/shared/types/icon.type";
import { Route } from "next";
import Link from "next/link";

export function BaseCard(props: {
    title: string;
    description: string;
    Icon: Icon;
    href: Route;
    className?: string;
}) {
    return (
        <Link
            href={props.href}
            className={cn(
                'p-5 shadow-sm rounded-md flex flex-col gap-2.5 bg-linear-to-b from-primary/4 via-transparent to-transparent [&>svg]:text-primary/60 [&>svg]:transition-all [&>svg]:duration-400 [&>svg]:size-9 [&>svg]:stroke-[1.7]',
                "transition-all hover:border-primary/70 duration-400 group hover:[&>svg]:text-primary hover:shadow-lg",
                props.className
            )}
        >
            <props.Icon />
            <div className='flex flex-col gap-0.5 lg:gap-1'>
                <h1 className='text-lg font-semibold text-foreground/90 lg:text-xl'>{props.title}</h1>
                <p className='text-muted-foreground text-sm leading-relaxed lg:text-base'>
                    {props.description}
                </p>
            </div>
        </Link>
    )
}