import SectionHeading from '@/shared/components/section-heading'
import { IconClock24 } from '@tabler/icons-react'
import { Award, Badge, Equal, EqualApproximately, User2, VerifiedIcon, Zap } from 'lucide-react'
import { BaseCard } from './featured-professional-section/base-card'
import { Route } from 'next'
import { Icon } from '@/shared/types/icon.type'

function MissionAccomplishedSection() {
    return (
        <div className='container flex flex-col gap-6 relative md:gap-8'>
            <SectionHeading 
                title="Mission Accomplished -- Every Time"
                description="From real estate to legal, finance to design — we connect you with verified agents across every field. Fast, simple, and trustworthy — that's our mission."
                descriptionClassName='text-center'
                wrapperClassName='items-center'
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {MISSION_ACCOMPLISHED_CARDS_CONTENT.map((card) => (
                    <BaseCard
                        key={card.title}
                        {...card}
                        href={card.href as Route}
                        Icon={card.Icon as unknown as Icon}
                        className='bg-linear-0'
                    />
                ))}
            </div>
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
        Icon: IconClock24,
    },
    {
        title: "Best Match Guarantee",
        description: "Our smart matching system connects you with the most suitable professionals for your needs.",
        href: "#",
        Icon: Equal,
    },
] as const

export default MissionAccomplishedSection