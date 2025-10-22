import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs'
import { home } from '@/shared/constants/images'
import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import React from 'react'
import FeaturedAgentsTab from './featured-agents-tab'
import FeaturedAgenciesTab from './featured-agencies-tab'
import FeaturedServicesTab from './featured-services-tab'
import { Input } from '@/shared/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/components/ui/input-group'
import { Locate, LocationEdit, MapPin, Search } from 'lucide-react'
import { NativeSelect, NativeSelectOption } from '@/shared/components/ui/native-select'
import { Button } from '@/shared/components/ui/button'

function HeroSection() {
    return (
        <div className="relative py-10 min-h-[800px] overflow-hidden grid">
            <Image
                src={home.heroImage}
                alt="Hero"
                fill
                className="object-cover object-[0%_30%] w-full h-full -z-10"
                priority
                placeholder="blur"
            />
            {/* Fade gradient overlay */}
            <div 
                // className="absolute inset-0 -z-[5] pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.05)_60%,rgba(255,255,255,0.12)_100%)]"
                className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/98 -z-[5] pointer-events-none "
            ></div>
            <div className="container h-full relative w-full flex items-center">
                <div className={cn(
                    "rounded-md px-6 py-6 flex flex-col gap-5 mx-auto w-full md:py-10 md:px-10 xl:w-[80%]",
                    
                    // "shadow-[0px_0px_10px_0px_rgba(255,255,255, 0.5)]",
                    "backdrop-blur-sm border bg-linear-to-b to-transparent from-white/10 border-white/10 border-t-white/5 border-l-white/5 "
                )}>
                    <h1 className="text-3xl text-center font-bold font-heading  text-white text-shadow-lg md:text-5xl lg:text-5xl xl:text-6xl">Find. Connect. <strong className=''>Succeed.</strong></h1>
                    <Tabs defaultValue="agents" className='items-center gap-5'>
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
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

function HeroFilters() {
    return (
        <div className='flex flex-wrap gap-3 bg-background-light/60 backdrop-blur-2xl rounded-md p-5 lg:flex-nowrap'>
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
            <NativeSelect className='bg-white w-full'>
                <NativeSelectOption value={""}>All Mission</NativeSelectOption>
                <NativeSelectOption value={"Visa & Immigration"}>Visa & Immigration</NativeSelectOption>
                <NativeSelectOption value={"IT & TECH"}>IT & Tech</NativeSelectOption>
                <NativeSelectOption value={"Mortgage and Finance"}>Mortgage and Finance</NativeSelectOption>
            </NativeSelect>
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
            <Button size={"sm"} className='h-11 w-32'>
                <Search />
                Search
            </Button>
        </div>
    )
}

export default HeroSection