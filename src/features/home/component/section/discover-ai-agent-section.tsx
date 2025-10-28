import { Button } from '@/shared/components/ui/button'
import { Bot, MoveRight, Sparkles, User, Zap } from 'lucide-react'
import React from 'react'

function DiscoverAiAgentSection() {
    return (
        <div className='container pb-5'>
            <section className='shadow-[0px_1px_3px_1px] shadow-primary/20 p-5 mx-auto rounded-md bg-linear-to-br from-background-light/20 via-background-light to-primary/10 grid gap-6 md:max-w-9/12 md:gap-8 md:p-8 lg:p-10 lg:grid-cols-2 '>
                <div className='flex flex-col gap-2 justify-center md:gap-3'>
                    <h1 className='text-2xl font-semibold leading-tight font-heading md:text-3xl lg:text-4xl'>Discover AI Agents</h1>
                    <p className='text-base text-muted-foreground leading-relaxed lg:text-lg'>
                        Explore cutting-edge AI agents designed to revolutionize your workflow. From intelligent automation to smart assistance, find the perfect AI solution tailored to your needs.
                    </p>
                    <Button className='mt-4 w-fit'>
                        Explore All Agents
                        <MoveRight />
                    </Button>
                </div>
                <div className='flex flex-col gap-5'>
                    {DISCOVER_AI_AGENT_POINTS.map((props) => (
                        <DiscoverAiAgentPoint 
                            key={props.title}
                            {...props}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

function DiscoverAiAgentPoint(props: typeof DISCOVER_AI_AGENT_POINTS[number]) {
    return (
        <div className='flex gap-2 items-center p-3'>
            <div className='aspect-square min-w-12 flex items-center justify-center bg-primary/10 rounded-md'>
                <props.Icon className='size-5 text-primary' />
            </div>
            <div>
                <h1 className='text-lg font-semibold'>{props.title}</h1>
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