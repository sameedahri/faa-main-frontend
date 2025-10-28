import { agent } from '@/shared/constants/images'
import { FeaturedBaseCarousel } from './featured-base-carousel'
import AgencyInfoCard from './agency-info-card'


function FeaturedAgenciesCarousel() {
    return (
        <FeaturedBaseCarousel
            items={Array.from({ length: 10 }).map((_, index) => (
                <AgencyInfoCard
                    image={agent.agentImage1}
                    title={"Agency Name"}
                    description={"Deals in rent and property, offering a wide range of properties for sale and rent."}
                    badges={["Agency Badge 1", "Agency Badge 2"]}
                    location={"Agency Location"}
                    languages={["Agency Language 1", "Agency Language 2"]}
                    rating={4.5}
                    id={`agency-id-${index}`}
                    key={`agency-key-${index}`}
                />
            ))}
        />
    )
}

export default FeaturedAgenciesCarousel