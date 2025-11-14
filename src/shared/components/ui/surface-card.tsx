import { cn } from "@/shared/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot"


const surfaceCardVariants = cva(
    "p-5 rounded-md border",
    {
        variants: {
            variant: {
                default: "bg-background-light",
                highlighted: "bg-linear-to-br from-primary/4 via-transparent to-transparent border-border-highlight",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export type SurfaceCardProps = React.ComponentProps<"div"> &
    VariantProps<typeof surfaceCardVariants> & {
        asChild?: boolean
    }

export function SurfaceCard({
    variant,
    asChild = false,
    className,
    ...props
}: SurfaceCardProps) {

    const Comp = asChild ? Slot : "div"

    return (
        <Comp
            data-slot="surface-card"
            className={cn(
                surfaceCardVariants({ variant }),
                className
            )}
            {...props} 
        />
    )
}