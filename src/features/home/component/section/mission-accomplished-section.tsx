import SectionHeading from '@/shared/components/section-heading'
import { IconClock24 } from '@tabler/icons-react'
import { ArrowRight, Award, Badge, Clock, Equal, EqualApproximately, TrendingUp, User2, VerifiedIcon, Zap } from 'lucide-react'
import { BaseCard } from './featured-professional-section/base-card'
import { Route } from 'next'
import { Icon } from '@/shared/types/icon.type'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import ViewMoreButton from '@/shared/components/buttons/view-more-button'

function MissionAccomplishedSection() {
    return (
        <div className='container flex flex-col gap-6 relative pt-5 md:gap-8'>
            <SectionHeading
                title={<>Mission Accomplished Every Time</>}
                // description="From real estate to legal, finance to design — we connect you with verified agents across every field. Fast, simple, and trustworthy — that's our mission."
                descriptionClassName='max-w-[70ch]'
                wrapperClassName='md:text-center md:items-center'
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {MISSION_ACCOMPLISHED_CARDS_CONTENT.map((card) => (
                    <Link
                        key={card.title}
                        href={card.href}
                        className={cn(
                            'px-5 py-8 border rounded-md flex flex-col gap-4 bg-linear-to-b from-primary/4 via-transparent to-transparent',
                        )}
                    >
                        <card.Icon className='size-10 stroke-[1.7] duration-400 transition-all text-primary/80 lg:size-12' />
                        <div className='flex flex-col gap-0.5 lg:gap-1.5'>
                            <h1 className='text-lg font-semibold text-foreground/90 lg:text-xl'>{card.title}</h1>
                            <p className='text-muted-foreground text-sm leading-relaxed lg:text-base'>
                                {card.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <ViewMoreButton
                href='#'
                className='-mt-3 w-auto self-start md:self-center'
                children={"Discover More"}
            />
        </div>
    )
}


const MISSION_ACCOMPLISHED_CARDS_CONTENT = [
    {
        title: "100% Verified Professionals",
        description: "Every service provider is thoroughly vetted and verified to ensure quality and trustworthiness.",
        href: "#",
        Icon: VerifiedIcon,
    },
    {
        title: "Instant Connections",
        description: "Connect directly with professionals in minutes, not days. Get responses fast and start working immediately.",
        href: "#",
        Icon: Zap,
    },
    {
        title: "Diverse Expertise",
        description: "Access thousands of professionals across real estate, business services, consulting, and more.",
        href: "#",
        Icon: User2,
    },
    {
        title: "Trusted Reviews",
        description: "Make informed decisions with authentic reviews and ratings from real clients.",
        href: "#",
        Icon: Award,
    },
    {
        title: "24/7 Availability",
        description: "Browse, search, and connect with professionals anytime, anywhere in the UAE.",
        href: "#",
        Icon: Clock,
    },
    {
        title: "Best Match Guarantee",
        description: "Our smart matching system connects you with the most suitable professionals for your needs.",
        href: "#",
        Icon: TrendingUp,
    },
] as const

export default MissionAccomplishedSection