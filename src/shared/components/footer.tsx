import Image from 'next/image'
import React from 'react'
import { shared } from '../constants/images'
import { Icon } from '../types/icon.type'
import { MapPin, Phone, Mail, Send, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { Route } from 'next'
import { Button } from './ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group'

function Footer() {
    return (
        <footer className='bg-primary-800 text-primary-foreground py-10'>
            <div className="container grid grid-cols-1 gap-5 lg:grid-cols-[15%_1fr_25%] lg:gap-10 xl:gap-20">
                <div className="flex flex-col gap-5 justify-between">
                    <div>
                        <Image 
                            src={shared.logoWhiteImage}
                            alt="Logo"
                           className='w-20 lg:w-24'
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <TextWithIcon
                            Icon={MapPin}
                            text="123 Main St, Anytown, USA"
                        />
                        <TextWithIcon
                            Icon={Phone}
                            text="+123 456 7890"
                        />
                        <TextWithIcon
                            Icon={Mail}
                            text="info@example.com"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
                    <LinksWithHeader
                        header="Menu"
                        links={menuLinks}
                    />
                    <LinksWithHeader
                        header="Useful Links"
                        links={usefulLinks}
                    />
                    <LinksWithHeader
                        header="Real Estate Links"
                        links={readEstateLinks}
                    />
                </div>
                <div className='flex flex-col gap-4 justify-between'>
                    <div className="flex flex-col gap-4">
                        <p className='text-lg font-semibold leading-snug'>
                            Get the latest information from
                            FindAnyAgent
                        </p>
                        <InputGroup>
                            <InputGroupInput 
                                placeholder='Enter your email'
                                className=''
                            />
                            <InputGroupAddon align={"inline-end"}>
                                <Button
                                    size={"sm"}
                                    className=''
                                >
                                    <Send />
                                    Subscribe
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div className='flex justify-end'>
                        <Button 
                            variant={"outline"} 
                            size={"icon"}
                            className='text-foreground rounded-full hover:text-primary'
                        >
                            <ArrowUp />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function LinksWithHeader (props: {
    header: string,
    links: readonly{
        label: string,
        href: Route,
    }[],
}) {
    return (
        <div className='flex flex-col gap-2.5'>
            <h3 className="text-lg font-semibold text-primary leading-tight">
                {props.header}
            </h3>
            <ul className="flex flex-col gap-2">
                {props.links.map((link) => (
                    <li key={link.label}>
                        <Link 
                            href={link.href}
                            className='hover:text-primary transition-colors'
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}  

// Menu Items
export const menuLinks = [
    {
        label: 'Home',
        href: '#',
    },
    {
        label: 'Missions',
        href: '#',
    },
    {
        label: 'Find Any Agent',
        href: '#',
    },
    {
        label: 'Agencies',
        href: '#',
    },
    {
        label: 'Developers',
        href: '#',
    },
    {
        label: 'Pricing',
        href: '#',
    },
    {
        label: 'About',
        href: '#',
    },
    {
        label: 'Contact',
        href: '#',
    },
] as const

// Useful Links
export const usefulLinks = [
    {
        label: 'User Login',
        href: '#',
    },
    {
        label: 'Agent Login',
        href: '#',
    },
    {
        label: 'Agent Portal',
        href: '#',
    },
    {
        label: 'Support',
        href: '#',
    },
] as const

// Real Estate Links
export const readEstateLinks = [
    {
        label: 'Agents',
        href: '#',
    },
    {
        label: 'Agencies',
        href: '#',
    },
    {
        label: 'Developers',
        href: '#',
    },
    {
        label: 'Properties',
        href: '#',
    },
    {
        label: 'Projects',
        href: '#',
    },
    {
        label: 'Events',
        href: '#',
    },
    {
        label: 'Services',
        href: '#',
    },
] as const

function TextWithIcon(props: {
    Icon: Icon,
    text: string
}) {
    return (
        <Link 
            href={"#"}
            className="flex items-center gap-2 text-white/75 hover:text-white transition-colors"
        >
            <props.Icon className='w-4'/>
            <p className="text-sm">
                <span className="font-medium">{props.text}</span>
            </p>
        </Link>
    )
}

export default Footer