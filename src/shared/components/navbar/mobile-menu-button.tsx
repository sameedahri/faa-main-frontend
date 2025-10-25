"use client"

import React, { useState } from 'react'
import { Button } from '@/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { NAV_MENU } from '@/shared/constants/nav-menu'
import Link from 'next/link'

function MobileMenuButton() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button 
                    variant={"ghost"} 
                    size={"icon"} 
                    className='text-foreground rounded-full hover:text-primary md:hidden'
                    // onClick={() => setIsMenuOpen(true)}
                >
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className='border-l-0' >
                {/* <div className='absolute inset-0 bg-black/50'></div> */}
                <SheetHeader>
                    <SheetTitle className='sr-only'>Menu</SheetTitle>
                    <div className='flex flex-col gap-4 pt-9'>
                        {NAV_MENU.map((item) => (
                            <SheetClose asChild key={item.label}>
                                <Link href={item.href}
                                    className='font-medium text-base border border-primary/20 w-full px-2 py-2 rounded-md bg-linear-to-br from-transparent to-primary/10 transition-all duration-150 active:scale-95 active:shadow-inner'
                                >
                                    {item.label}
                                </Link>
                            </SheetClose>
                        ))}
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenuButton