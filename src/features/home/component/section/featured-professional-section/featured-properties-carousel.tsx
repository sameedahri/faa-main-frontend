import React from 'react'
import { FeaturedBaseCarousel } from './featured-base-carousel'
import EventInfoCard from './event-info-card'
import PropertyCard from '@/features/search/components/property-card'
import { PROPERTY_CARDS } from '@/features/agent/components/data'

function FeaturedPropertiesCarousel() {
    return (
        <FeaturedBaseCarousel
            items={Array.from({ length: 5 }).map((_, index) => (
                <PropertyCard
                    {...PROPERTY_CARDS[index]}
                    key={`agent-${index}`}
                />
            ))}
        />
    )
}

export default FeaturedPropertiesCarousel