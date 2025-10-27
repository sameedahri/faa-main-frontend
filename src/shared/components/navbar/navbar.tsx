import React from 'react'
import Logo from '@/components/logo'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/ui/navigation-menu'
import { NAV_MENU } from '@/shared/constants/nav-menu'
import Link from 'next/link'
import MobileMenuButton from './mobile-menu-button'

function Navbar() {
    return (
        <div className='z-20 sticky top-0 backdrop-blur-md bg-background-light/70'>
            <div className='container h-nav flex items-center justify-between'>
                <Logo />
                <MobileMenuButton />
                <NavigationMenu 
                    viewport={false}
                    className='hidden md:block'
                >
                    <NavigationMenuList>
                        {NAV_MENU.map((item) => (
                            <NavigationMenuItem key={item.label}>
                                {(item.subMenu && item.subMenu.length > 0) ? (
                                    <>
                                        <NavigationMenuTrigger
                                            className='hover:text-primary px-2 bg-transparent font-normal hover:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary focus:bg-transparent cursor-pointer'
                                        >
                                            {item.label}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className='grid w-[200px] gap-0'>
                                                {item.subMenu.map((subItem) => (
                                                    <li key={subItem.label}>
                                                        <NavigationMenuLink
                                                            asChild
                                                        >
                                                            <Link href={subItem.href}>
                                                                {subItem.label}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink
                                        asChild
                                        className='hover:text-primary hover:bg-transparent data-[active=true]:focus:bg-transparent data-[active=true]:bg-transparent data-[active=active]:text-primary focus:bg-transparent cursor-pointer'
                                    >
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </NavigationMenuLink>
                                )}

                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}


export default Navbar