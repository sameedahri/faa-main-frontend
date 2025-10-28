'use client'

import SectionHeading from '@/shared/components/section-heading'
import { missions } from '@/shared/constants/mission'
import MissionCard from '@/shared/components/mission-card'
import ViewMoreButton from '@/shared/components/buttons/view-more-button'

function Missions() {
    return (
        <div className='container flex flex-col gap-6 relative md:gap-8'>
            <div className='flex w-full justify-center'>
                <SectionHeading
                    title="Choose Your Mission"
                    description='Discover verified professionals across multiple industries, all in one platform'
                    descriptionClassName='text-center'
                    wrapperClassName='items-center'
                />
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {Array.from({ length: 8 }).map((_, index) => (
                    <MissionCard
                        key={missions[index].title}
                        image={missions[index].image}
                        title={missions[index].title}
                        upcoming={missions[index].upcoming}
                    />
                ))}
            </div>
            <ViewMoreButton  
                href='#'
                className='self-center'
            />
        </div>
    )
}



export default Missions