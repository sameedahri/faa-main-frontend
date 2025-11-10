"use client"

import { ArrowLeft } from 'lucide-react'
import { Button, ButtonProps } from './ui/button'
import { useRouter } from 'next/navigation'
import { Route } from 'next'

interface BackButtonProps extends ButtonProps {
    backLink?: Route
}

function BackButton({ backLink, children, ...props }: BackButtonProps) {
    const router = useRouter()

    const handleBack = () => {
        if (backLink) {
            router.push(backLink)
        } else {
            router.back()
        }
    }

    return (
        <Button
            onClick={handleBack}
            type='button'
            variant='outline'
            size='icon'
            className='rounded-full'
            {...props}
        >
            <ArrowLeft />
            {children}
        </Button>
    )
}

export default BackButton