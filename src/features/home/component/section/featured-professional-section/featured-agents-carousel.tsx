"use client"


import AgentInfoCard from './agent-info-card'
import { FeaturedBaseCarousel } from './featured-base-carousel'



function FeaturedAgentsCarousel() {
    return (
        <FeaturedBaseCarousel
            items={Array.from({ length: 10 }).map((_, index) => (
                <AgentInfoCard
                    key={`agent-${index}`}
                />
            ))}
        />
    )
}

export default FeaturedAgentsCarousel