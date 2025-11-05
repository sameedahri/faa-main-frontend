import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center justify-center font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden leading-none",
    {
        variants: {
            type: {
                soft: "border-none",
                solid: "border-transparent",
                outline: "border bg-transparent text-inherit",
                bootstrap: "border text-inherit",
                ghost: "border-none bg-transparent",
                gradient: "bg-linear-to-r text-white"
            },
            variant: {
                default: "",
                secondary: "",
                destructive: "",
                warning: "",
                success: "",
                muted: "",
                pro: "",
                elite: "",
            },
            size: {
                default: "text-xs px-2 py-0.5 rounded-full",
                sm: "text-[0.7rem] px-2 py-0.5 rounded-full",
                md: "tex-sm px-3 py-1 rounded-full",
                none: "px-0 py-0 text-xs",
            },
        },
        compoundVariants: [
            // Soft variants
            {
                type: "soft",
                variant: "default",
                class: "border-primary/20 bg-primary/10 text-primary"
            },
            {
                type: "soft",
                variant: "secondary",
                class: "border-secondary/20 bg-secondary/10 text-secondary"
            },
            {
                type: "soft",
                variant: "destructive",
                class: "border-destructive/20 bg-destructive/10 text-destructive"
            },
            {
                type: "soft",
                variant: "warning",
                class: "border-amber-600/20 bg-amber-600/10 text-amber-600"
            },
            {
                type: "soft",
                variant: "success",
                class: "border-success/20 bg-success/10 text-success"
            },
            {
                type: "soft",
                variant: "muted",
                class: "border-muted-foreground/10 bg-muted-foreground/5 text-muted-foreground/90"
            },
            {
                type: "soft",
                variant: "pro",
                class: "border-pro/20 bg-pro/10 text-pro"
            },
            {
                type: "soft",
                variant: "elite",
                class: "border-elite/20 bg-elite/10 text-elite"
            },
            // Solid variants
            {
                type: "solid",
                variant: "default",
                class: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90"
            },
            {
                type: "solid",
                variant: "secondary",
                class: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90"
            },
            {
                type: "solid",
                variant: "destructive",
                class: "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60"
            },
            {
                type: "solid",
                variant: "warning",
                class: "bg-warning text-white [a&]:hover:bg-warning/90 focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40 dark:bg-warning/60"
            },
            {
                type: "solid",
                variant: "success",
                class: "bg-success text-white [a&]:hover:bg-success/90 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success/60"
            },
            {
                type: "solid",
                variant: "muted",
                class: "bg-muted text-muted-foreground [a&]:hover:bg-muted/90"
            },
            {
                type: "solid",
                variant: "pro",
                class: "bg-pro text-white [a&]:hover:bg-pro/90"
            },
            {
                type: "solid",
                variant: "elite",
                class: "bg-elite text-white [a&]:hover:bg-elite/90"
            },
            // Outline variants
            {
                type: "outline",
                variant: "default",
                class: "border-primary/30 text-primary [a&]:hover:bg-primary/10"
            },
            {
                type: "outline",
                variant: "secondary",
                class: "border-secondary/30 text-secondary [a&]:hover:bg-secondary/10"
            },
            {
                type: "outline",
                variant: "destructive",
                class: "border-destructive/30 text-destructive [a&]:hover:bg-destructive/10"
            },
            {
                type: "outline",
                variant: "warning",
                class: "border-warning/30 text-warning [a&]:hover:bg-warning/10"
            },
            {
                type: "outline",
                variant: "success",
                class: "border-success/30 text-success [a&]:hover:bg-success/10"
            },
            {
                type: "outline",
                variant: "muted",
                class: "border-muted-foreground/30 text-muted-foreground [a&]:hover:bg-muted/10"
            },
            {
                type: "outline",
                variant: "pro",
                class: "border-pro/30 text-pro [a&]:hover:bg-pro/10"
            },
            {
                type: "outline",
                variant: "elite",
                class: "border-elite/30 text-elite [a&]:hover:bg-elite/10"
            },
            // Bootstrap variants
            {
                type: "bootstrap",
                variant: "default",
                class: "border-primary/20 bg-primary/10 text-primary [a&]:hover:bg-primary/10"
            },
            {
                type: "bootstrap",
                variant: "secondary",
                class: "border-secondary/20 bg-secondary/10 text-secondary [a&]:hover:bg-secondary/10"
            },
            {
                type: "bootstrap",
                variant: "destructive",
                class: "border-destructive/20 bg-destructive/10 text-destructive [a&]:hover:bg-destructive/10"
            },
            {
                type: "bootstrap",
                variant: "warning",
                class: "border-warning/20 bg-warning/10 text-warning [a&]:hover:bg-warning/10"
            },
            {
                type: "bootstrap",
                variant: "success",
                class: "border-success/20 bg-success/10 text-success [a&]:hover:bg-success/10"
            },
            {
                type: "bootstrap",
                variant: "muted",
                class: "border-muted-foreground/20 bg-muted-foreground/10 text-muted-foreground [a&]:hover:bg-muted/10"
            },
            {
                type: "bootstrap",
                variant: "pro",
                class: "border-pro/20 bg-pro/10 text-pro [a&]:hover:bg-pro/10"
            },
            {
                type: "bootstrap",
                variant: "elite",
                class: "border-elite/20 bg-elite/10 text-elite [a&]:hover:bg-elite/10"
            },
            // Ghost variants
            {
                type: "ghost",
                variant: "default",
                class: "text-primary [a&]:hover:bg-primary/10"
            },
            {
                type: "ghost",
                variant: "secondary",
                class: "text-secondary [a&]:hover:bg-secondary/10"
            },

            {
                type: "ghost",
                variant: "destructive",
                class: "text-destructive [a&]:hover:bg-destructive/10"
            },

            {
                type: "ghost",
                variant: "warning",
                class: "text-warning [a&]:hover:bg-warning/10"
            },

            {
                type: "ghost",
                variant: "success",
                class: "text-success [a&]:hover:bg-success/10"
            },

            {
                type: "ghost",
                variant: "muted",
                class: "text-muted-foreground [a&]:hover:bg-muted/10"
            },
            {
                type: "ghost",
                variant: "pro",
                class: "text-pro [a&]:hover:bg-pro/10"
            },
            {
                type: "ghost",
                variant: "elite",
                class: "text-elite [a&]:hover:bg-elite/10"
            },
            {
                type: "gradient",
                variant: "default",
                class: "from-primary/70 via-primary to-primary/60 text-white"
            },
            {
                type: "gradient",
                variant: "secondary",
                class: "from-secondary/70 via-secondary to-secondary/60 text-secondary"
            },
            {
                type: "gradient",
                variant: "destructive",
                class: "from-destructive/70 via-destructive to-destructive/60 text-destructive"
            },
            {
                type: "gradient",
                variant: "warning",
                class: "from-warning/70 via-warning to-warning/60 text-warning"
            },
            {
                type: "gradient",
                variant: "success",
                class: "from-success/70 via-success to-success/60 text-success"
            },
            {
                type: "gradient",
                variant: "muted",
                class: "from-muted-foreground/70 via-muted-foreground to-muted-foreground/60"
            },
            {
                type: "gradient",
                variant: "pro",
                class: "from-pro/70 via-pro to-pro/60 text-pro text-white"
            },
            {
                type: "gradient",
                variant: "elite",
                class: "from-elite/70 via-elite to-elite/60 text-pro text-white"
            },
        ],
        defaultVariants: {
            type: "solid",
            variant: "default",
            size: "default",
        },
    }
)

export type BadgeProps = React.ComponentProps<"span"> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean }

function Badge({
    className,
    variant,
    type,
    asChild = false,
    size = "default",
    ...props
}: BadgeProps) {
    const Comp = asChild ? Slot : "span"

    return (
        <Comp
            data-slot="badge"
            className={cn(badgeVariants({ variant, type, size }), className)}
            {...props}
        />
    )
}

export { Badge, badgeVariants }
