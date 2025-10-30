import { home } from '@/shared/constants/images'
import { Building, Building2, Home, User2 } from 'lucide-react'
import BaseImageContentSection from './featured-professional-section/base-image-content-section'


function RealEstateSection() {

    return (
        <BaseImageContentSection
            image={{
                path: home.realEstateSectionImage,
                alt: "Real Estate Section"
            }}
            sectionHeading={{
                title: "Real Estate Excellence",
                description: "Your gateway to premier real estate market. Find agents, agencies, properties, and projects all in one place."
            }}
            viewMoreLink="#"
            cardsList={REAL_ESTATE_SECTION_CARDS}
        />
    )
}


const REAL_ESTATE_SECTION_CARDS = [
    {
        title: "Agents",
        description: "Connect with verified Real Estate agents",
        Icon: User2,
        href: "#",
    },
    {
        title: "Agencies",
        description: "Explore top related real estate agencies",
        Icon: Building2,
        href: "#",
    },
    {
        title: "Properties",
        description: "Discover your dream property",
        Icon: Home,
        href: "#",
    },
    {
        title: "Projects",
        description: "Browse upcoming developments",
        Icon: Building,
        href: "#",
    },
] as const

export default RealEstateSection