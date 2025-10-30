import SectionHeading from '@/shared/components/section-heading'
import { Button } from '@/shared/components/ui/button'
import { Bot, MoveRight, Sparkles, User, WandSparkles, Zap } from 'lucide-react'
import React from 'react'

function DiscoverAiAgentSection() {
    return (
        <div className='container pt-5 pb-5'>
            <section className='relative shadow-[0px_1px_5px_2px] shadow-primary/40 p-5 mx-auto rounded-md bg-linear-to-br from-background-light/20 via-background-light to-primary/10 grid gap-6 md:gap-6 md:max-w-[1100px] md:p-8 lg:p-10 lg:grid-cols-2 '>
                <div className='flex flex-col gap-2 justify-center relative md:gap-3'>
                    <SectionHeading 
                        title={<>Discover AI Agents</>}
                        wrapperClassName='text-primary'
                    />
                    <p className='text-base text-muted-foreground leading-relaxed lg:text-lg'>
                        Explore cutting-edge AI agents designed to revolutionize your workflow. From intelligent automation to smart assistance, find the perfect AI solution tailored to your needs.
                    </p>
                    <Button className='w-fit hidden lg:mt-3 lg:flex'>
                        Explore All Agents
                        <MoveRight />
                    </Button>
                </div>
                <div className='flex flex-col gap-8 md:gap-9'>
                    {DISCOVER_AI_AGENT_POINTS.map((props) => (
                        <DiscoverAiAgentPoint 
                            key={props.title}
                            {...props}
                        />
                    ))}
                    <Button className='md:w-fit lg:hidden'>
                        Explore All Agents
                        <MoveRight />
                    </Button>
                </div>
            </section>
        </div>
    )
}

function DiscoverAiAgentPoint(props: typeof DISCOVER_AI_AGENT_POINTS[number]) {
    return (
        <div className='flex gap-4 items-start'>
            <div className='aspect-square min-w-12 flex items-center justify-center bg-primary/10 rounded-full mt-0.5'>
                <props.Icon className='size-5 text-primary' />
            </div>
            <div>
                <h1 className='text-base font-medium lg:text-lg'>{props.title}</h1>
                <p className='text-muted-foreground'>{props.description}</p>
            </div>
        </div>
    )
}

const DISCOVER_AI_AGENT_POINTS = [
    {
        title: "Smart Automation",
        description: "Automate complex tasks with intelligent AI agents",
        Icon: Bot,
    },
    {
        title: "Lightning Fast",
        description: "Get instant results powered by advanced AI technology",
        Icon: Zap,
    },
    {
        title: "Tailored Solutions",
        description: "Find AI agents customized for your industry",
        Icon: Sparkles,
    },
]

export default DiscoverAiAgentSection