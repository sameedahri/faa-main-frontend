import React from 'react'
import { FeaturedBaseCarousel } from './featured-base-carousel'
import ServiceInfoCard from '../../../../shared/components/service-info-card'

function FeatureServicesCarousel() {
    return (
        <FeaturedBaseCarousel
            items={Array.from({ length: 10 }).map((_, index) => (
                <ServiceInfoCard
                    key={`agent-${index}`}
                />
            ))}
        />
    )
}

export default FeatureServicesCarousel