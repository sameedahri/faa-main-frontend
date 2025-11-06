"use client"

import Loader from '@/shared/components/ui/loader'
import React from 'react'

function LoadingPage() {
    return (
        <div className='flex items-center justify-center min-h-svh'>
            <Loader className='size-7'/>
        </div>
    )
}

export default LoadingPage