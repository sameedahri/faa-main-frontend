import React from 'react'
import { FeaturedBaseCarousel } from './featured-base-carousel'
import EventInfoCard from './event-info-card'

function FeaturedEventsCarousel() {
    return (
        <FeaturedBaseCarousel
            items={Array.from({ length: 10 }).map((_, index) => (
                <EventInfoCard
                    key={`agent-${index}`}
                />
            ))}
        />
    )
}

export default FeaturedEventsCarousel