import { Badge } from '@/shared/components/ui/badge'
import { Button } from '@/shared/components/ui/button'
import { agent } from '@/shared/constants/images'
import { cn } from '@/shared/lib/utils'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { Mail, MapPin, Phone, Star } from 'lucide-react'
import Image from 'next/image'

function AgentCard() {
    return (
        <div className={cn(
            'p-4 rounded-md bg-background-light  cursor-pointer grid grid-cols-[130px_1fr] gap-5',
            'transition-all duration-300 hover:shadow-lg'

        )}>
            <div className='aspect-square bg-red-300 rounded-md overflow-hidden'>
                <Image
                    src={agent.agentImage1}
                    alt="Agent Image"
                    className='object-cover w-full h-full'
                    placeholder='blur'
                />
            </div>
            <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-1">
                    <h2 className='text-lg font-semibold'>John Smith</h2>
                    <p className='text-muted-foreground text-sm'>
                        Estate Agent | Real Estate Broker
                    </p>
                    {/* <div className='flex gap-2'>
                        <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>Estate Agent</Badge>
                        <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>Legal Services</Badge>
                    </div> */}
                </div>
                {/* Location */}
                <div className="flex gap-5">
                    <div className='flex items-center gap-1 text-xs text-foreground  w-auto'>
                        <MapPin className='w-4 h-4' />
                        <span>Dubai UAE</span>
                    </div>
                    {/* Rating */}
                    <div className='flex items-center gap-1 text-xs text-foreground'>
                        <Star stroke={'transparent'} fill='var(--warning)' className='w-4 h-4' />
                        <span>4.5 <small>(100)</small></span>
                    </div>
                </div>
                <div className='flex justify-between mt-auto'>
                    <div className='flex gap-2'>
                        <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>Estate Agent</Badge>
                        <Badge variant={'muted'} type={'outline'} className='rounded-full border h-6'>Legal Services</Badge>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant={"outline"}
                            className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                            size={"icon"}
                        >
                            <Mail className='w-4 h-4' />
                            {/* Email */}
                        </Button>
                        <Button
                            variant={"outline"}
                            className='bg-white text-primary hover:bg-primary/5 hover:text-primary'
                            size={"icon"}
                        >
                            <Phone className='w-4 h-4' />
                            {/* Call */}
                        </Button>
                        <Button
                            variant={"soft-success"}
                            size={"icon"}
                        >
                            <IconBrandWhatsapp className='w-4 h-4' />
                            {/* Whatsapp */}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentCard