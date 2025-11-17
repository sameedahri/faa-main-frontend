"use client"

import { IconBrandWhatsapp } from "@tabler/icons-react"
import { Button, ButtonProps } from "@/ui/button"
import { Globe, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"


function ActionBaseButton(props: ButtonProps) {
    const { className, variant, size, ...rest } = props
    return (
        <Button
            variant={variant || "muted"}
            size={size || "icon"}
            className={cn(
                "[&>svg]:size-4 rounded-full size-9.5 text-primary-500 transition-all duration-250",
                "shadow",
                "bg-linear-to-br from-background-dark via-background-light to-background-light",
                "hover:shadow-lg hover:from-background",
                className
            )}
            {...rest}
        />
    )
}

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
    variant,
    ...props
}: ButtonProps & { whatsapp: string }) {
    return (

        <ActionBaseButton
            variant={variant || "soft-success"}
            onClick={e => {
                e.stopPropagation()
                window.open(`https://wa.me/${whatsapp}`, '_blank')
            }}
            className={cn(
                "[&>svg]:size-5 text-success",
                className
            )}
            {...props}
        >
            {/***** 
                        WARNING: I don't why, but by removing this "size-" className, 
                        the above class "[&_svg]:size-5" not works.
                    *****/}
            <IconBrandWhatsapp className="size-" />
            {children}
        </ActionBaseButton>
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
    children,
    className,
    ...props
}: ButtonProps & { email: string }) {
    const router = useRouter()
    return (
        <ActionBaseButton
            onClick={e => {
                e.stopPropagation()
                router.push(`mailto:${email}`)
            }}
            className={cn(
                className
            )}
            {...props}
        >
            <Mail className="size-" />
            {children}
        </ActionBaseButton>
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
    children,
    className,
    ...props
}: ButtonProps & { phone: string }) {
    const router = useRouter()
    return (
        <ActionBaseButton
            onClick={e => {
                e.stopPropagation()
                router.push(`tel:${phone}`)
            }}
            className={cn(
                className
            )}
            {...props}
        >
            <Phone className="size-" />
            {children}
        </ActionBaseButton>
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
        <ActionBaseButton
            onClick={e => {
                e.stopPropagation()
                window.open(websiteLink, '_blank')
            }}
            className={cn(
                className
            )}
            {...props}
        >
            <Globe />
            {children}
        </ActionBaseButton>
    )
}