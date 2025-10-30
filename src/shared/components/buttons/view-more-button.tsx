import { Button, ButtonProps } from '@/ui/button'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Route } from 'next'
import { cn } from '@/shared/lib/utils'

interface ViewMoreButtonProps extends ButtonProps {
    href: Route,
} 

function ViewMoreButton({
    href,
    className,
    children,
    ...rest
}: ViewMoreButtonProps) {
    return (
        <Button
            variant='ghost'
            asChild
            className={cn('underline underline-offset-4 decoration-primary/40 w-[130px] text-primary hover:text-primary group select-none',
                className
            )}
            {...rest}
        >
            <Link
                href={href}
            >
                {children || 'View More'}
                <ArrowUpRight />
            </Link>
        </Button>
    )
}

export default ViewMoreButton