import { home } from '@/shared/constants/images'
import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { MapPin, Search } from 'lucide-react'
import { NativeSelect, NativeSelectOption } from '@/shared/components/ui/native-select'
import { Button } from '@/shared/components/ui/button'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import Link from 'next/link'
import { INPUT_HEIGHT } from '@/shared/constants/styles'

function HeroSection() {
    return (
        <div className="relative py-16 overflow-hidden grid bg-linear-to-r from-black/80 via-black/50 to-black/10 md:min-h-[650px]">
            <Image
                src={home.heroImage}
                alt="Hero"
                fill
                className="object-cover object-[0%_30%] w-full h-full -z-10"
                priority
                placeholder="blur"
            />
            <div className="container h-full relative w-full flex flex-col justify-center items-center gap-6">
                <div className={cn(
                    "rounded-md px-6 border border-border/5 py-6 flex flex-col gap-5 mx-auto w-full md:mb-0 md:py-10 md:px-10 xl:max-w-[850px] xl:gap-8",
                    "backdrop-blur-sm order"
                )}>
                    <div className='flex flex-col items-center gap-1 text-center'>
                        <h1 className="text-3xl text-center font-bold font-heading  text-white text-shadow-lg  md:text-4xl lg:text-6xl">Find. Connect. <strong className=''>Succeed.</strong></h1>
                        <p className='text-white font-medium leading-relaxed text-lg text-shadow-lg  md:text-xl lg:text-2xl'>
                            Discover verified service providers across multiple industries
                        </p>
                    </div>
                    <HeroFilters />
                </div>
            </div>
        </div>
    )
}

function HeroFilters() {
    return (
        <div className='flex flex-col gap-5'>
            {/* <div className='flex flex-wrap gap-3 bg-background-light/60 backdrop-blur-2xl rounded-md p-5 lg:flex-nowrap'> */}
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4'>
                <InputGroup
                    className='bg-white'
                >
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    <InputGroupInput
                        placeholder='Search by specialty or name'
                    // className=' w-full'
                    />
                </InputGroup>
                <InputGroup
                    className='bg-white'
                >
                    <InputGroupAddon>
                        <MapPin />
                    </InputGroupAddon>
                    <InputGroupInput
                        placeholder='Search by location'
                    // className=' w-full'
                    />
                </InputGroup>
                <NativeSelect className='bg-white w-full'>
                    <NativeSelectOption value={""}>All Mission</NativeSelectOption>
                    <NativeSelectOption value={"Visa & Immigration"}>Visa & Immigration</NativeSelectOption>
                    <NativeSelectOption value={"IT & TECH"}>IT & Tech</NativeSelectOption>
                    <NativeSelectOption value={"Mortgage and Finance"}>Mortgage and Finance</NativeSelectOption>
                </NativeSelect>
                <Button
                    asChild
                    size={"sm"} className={`${INPUT_HEIGHT.DEFAULT} w-full text-base font-semibold lg:w-full`}>
                    <Link href={PAGE_ROUTES.SEARCH}>
                        <Search className='size-4.5' />
                        Search
                    </Link>
                </Button>
            </div>
            {/* <div className='flex flex-wrap gap-3 justify-center'>
                {commonServices.map((service) => (
                    <Button 
                        asChild 
                        key={service.title}
                        variant={"outline"}
                        className='text-primary shadow-sm rounded-full'
                        size={"sm"}
                    >
                        <Link href={service.href} key={service.title}>
                            {service.title}
                        </Link>
                    </Button>
                ))}
            </div> */}
        </div>
    )
}

// Tax Agents
// Real Estate
// Marketing Services
// Consultants
// Accounting
const commonServices = [
    {
        title: "Tax Agents",
        href: "#"
    },
    {
        title: "Real Estate",
        href: "#"
    },
    {
        title: "Marketing Services",
        href: "#"
    },

    {
        title: "Consultants",
        href: "#"
    },
    {
        title: "Accounting",
        href: "#"
    }
] as const

export default HeroSection