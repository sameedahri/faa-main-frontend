"use client"

import { IconBrandWhatsapp } from "@tabler/icons-react"
import { Button, ButtonProps } from "@/ui/button"
import { Globe, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"


/**
 * WhatsApp Action Button
 * @param whatsapp - The WhatsApp number to open in the browser.
 * @param className - The className to apply to the button.
 * @param children - The children to render inside the button.
 * @param props - The props to apply to the button.
 */
export function WhatsappButton({
    whatsapp,
    className,
    children,
    ...props
}: ButtonProps & { whatsapp: string }) {
    return (
        <Button
            variant={"bootstrap-success"}
            size={"icon"}
            className={cn(
                "[&_svg]:size-5",
                className
            )}
            onClick={e => {
                e.stopPropagation()
                window.open(`https://wa.me/${whatsapp}`, '_blank')
            }}
            {...props}
        >
            {/***** 
                WARNING: I don't why, but by removing this "size-" className, 
                the above class "[&_svg]:size-5" not works.
            *****/}
            <IconBrandWhatsapp  />
            {children}
        </Button>
    )
}

/**
 * Email Action Button
 * @param email - The email address to open in the browser.
 * @param className - The className to apply to the button.
 * @param children - The children to render inside the button.
 * @param props - The props to apply to the button.
 */
export function EmailButton({
    email,
    className,
    children,
    ...props
}: ButtonProps & { email: string }) {
    const router = useRouter()
    return (
        <Button
            variant={"muted"}
            size={"icon"}
            className={cn(
                "text-primary border border-primary/20 hover:bg-primary/10 hover:text-primary",
                className
            )}
            onClick={e => {
                e.stopPropagation()
                router.push(`mailto:${email}`)
            }}
            {...props}
        >
            <Mail  />
            {children}
        </Button>
    )
}

/**
 * Phone Action Button
 * @param phone - The phone number to open in the browser.
 * @param className - The className to apply to the button.
 * @param children - The children to render inside the button.
 * @param props - The props to apply to the button.
 */
export function PhoneButton({
    phone,
    className,
    children,
    ...props
}: ButtonProps & { phone: string }) {
    const router = useRouter()
    return (
        <Button
            variant={"muted"}
            size={"icon"}
            className={cn(
                "text-primary border border-primary/20 hover:bg-primary/10 hover:text-primary",
                className
            )}
            onClick={e => {
                e.stopPropagation()
                router.push(`tel:${phone}`)
            }}
            {...props}
        >
            <Phone  />
            {children}
        </Button>
    )
}

/**
 * Phone Action Button
 * @param phone - The phone number to open in the browser.
 * @param className - The className to apply to the button.
 * @param children - The children to render inside the button.
 * @param props - The props to apply to the button.
 */
export function WebsiteButton({
    websiteLink,
    className,
    children,
    ...props
}: ButtonProps & { websiteLink: string }) {
    return (
        <Button
            variant={"muted"}
            size={"icon"}
            className={cn(
                "text-primary border border-primary/20 hover:bg-primary/10 hover:text-primary",
                className
            )}
            onClick={e => {
                e.stopPropagation()
                window.open(websiteLink, '_blank')
            }}
            {...props}
        >
            <Globe />
            {children}
        </Button>
    )
}