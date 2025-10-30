import { home } from '@/shared/constants/images'
import { Bot, Brain, Sparkles, Zap } from 'lucide-react'
import BaseImageContentSection from './featured-professional-section/base-image-content-section'


function AiSection() {
    return (
        <BaseImageContentSection
            image={{
                path: home.missionAiSection,
                alt: "Mission AI Section"
            }}
            sectionHeading={{
                title: "Mission AI",
                description: "Explore cutting-edge AI agents designed to revolutionize your workflow. From intelligent automation to smart assistance, find the perfect AI solution."
            }}
            viewMoreLink="#"
            cardsList={AI_SECTION_CARDS}
            switchContent={true}
        />
    )
}

const AI_SECTION_CARDS = [
    {
        title: "Smart Automation",
        description: "Automate complex tasks with intelligent AI agents",
        Icon: Bot,
        href: "#",
    },
    {
        title: "Lightning Fast",
        description: "Get instant results powered by advanced AI technology",
        Icon: Zap,
        href: "#",
    },
    {
        title: "Tailored Solutions",
        description: "Find AI agents customized for your industry",
        Icon: Sparkles,
        href: "#",
    },
    {
        title: "Advanced Intelligence",
        description: "Leverage cutting - edge machine learning capabilities",
        Icon: Brain,
        href: "#",
    },
] as const 

export default AiSection