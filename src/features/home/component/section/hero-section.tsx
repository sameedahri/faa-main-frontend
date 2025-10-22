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
        <div className="relative min-h-[850px] overflow-hidden grid">
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
            <div className="container  h-full relative w-full flex items-center">
                <div className={cn(
                    "backdrop-blur-md bg-white/75 rounded-md px-10 py-10 flex flex-col gap-5 w-[80%] mx-auto",
                    "shadow-[0px_0px_10px_0px_rgba(255,255,255, 0.5)]"
                )}>
                    <h1 className="text-3xl text-center font-bold  text-primary md:text-4xl">Find. Connect. Succeed.</h1>
                    <Tabs defaultValue="agents" className='items-center gap-5'>
                        <TabsList className='bg-background-light/60'>
                            <TabsTrigger value="agents">Agents</TabsTrigger>
                            <TabsTrigger value="agencies">Agencies</TabsTrigger>
                            <TabsTrigger value="services">Services</TabsTrigger>
                            <TabsTrigger value="events">Events</TabsTrigger>
                        </TabsList>
                        <TabsContent value="agents" className='w-full'>
                            <div className='flex gap-3'>
                                <InputGroup
                                    className='bg-white'
                                >
                                    <InputGroupAddon>
                                        <Search />
                                    </InputGroupAddon>
                                    <InputGroupInput
                                        placeholder='Search by name' 
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
                                <Button size={"sm"} className='h-9'>
                                    <Search />
                                    Search
                                </Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="agencies">
                            Agencies Content
                        </TabsContent>
                        <TabsContent value="services">
                            Services Content
                        </TabsContent>
                        <TabsContent value="events">
                            Events Content
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default HeroSection