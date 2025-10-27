import { home } from '@/shared/constants/images'
import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { MapPin, Search } from 'lucide-react'
import { NativeSelect, NativeSelectOption } from '@/shared/components/ui/native-select'
import { Button } from '@/shared/components/ui/button'

function HeroSection() {
    return (
        <div className="relative py-10 min-h-svh overflow-hidden grid md:min-h-[650px]">
            <Image
                src={home.heroImage}
                alt="Hero"
                fill
                className="object-cover object-[0%_30%] w-full h-full -z-10"
                priority
                placeholder="blur"
            />
            {/* Fade gradient overlay */}
            {/* <div 
                className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/98 -z-[5] pointer-events-none "
            ></div> */}
            <div className="container h-full relative w-full flex items-center">
                <div className={cn(
                    "rounded-md px-6 py-6 flex flex-col gap-5 mx-auto w-full mb-nav md:mb-0 md:py-10 md:px-10 xl:w-[60%] xl:gap-8",
                    "backdrop-blur-sm order bg-linear-to-b from-primary/10 to-white/80 "
                )}>
                    <h1 className="text-3xl text-center font-bold font-heading  text-white text-shadow-lg text-shadow-primary/50 md:text-5xl lg:text-5xl xl:text-6xl">Find. Connect. <strong className=''>Succeed.</strong></h1>
                    <HeroFilters />
                    {/* <Tabs defaultValue="agents" className='items-center gap-5'>
                        <TabsList className='bg-background-light/60 backdrop-blur-2xl'>
                            <TabsTrigger value="agents">Agents</TabsTrigger>
                            <TabsTrigger value="agencies">Agencies</TabsTrigger>
                            <TabsTrigger value="services">Services</TabsTrigger>
                            <TabsTrigger value="events">Events</TabsTrigger>
                        </TabsList>
                        <TabsContent value="agents" className='w-full'>
                            <HeroFilters />
                        </TabsContent>
                        <TabsContent value="agencies" className='w-full'>
                            <HeroFilters />
                        </TabsContent>
                        <TabsContent value="services" className='w-full'>
                            <HeroFilters />
                        </TabsContent>
                        <TabsContent value="events" className='w-full'>
                            <HeroFilters />
                        </TabsContent>
                    </Tabs> */}
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
                <Button size={"sm"} className='h-11 w-full lg:w-full'>
                    <Search />
                    Search
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