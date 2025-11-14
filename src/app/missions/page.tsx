import MissionCard from '@/shared/components/mission-card'
import SectionHeading from '@/shared/components/section-heading'
import { home } from '@/shared/constants/images'
import { missions } from '@/shared/constants/mission'
import Image from 'next/image'

function MissionsPage() {
    return (
        <div className="flex flex-col gap-10">
            <div className="relative min-h-[650px] overflow-hidden grid">
                <Image
                    src={home.heroImage}
                    alt="Hero"
                    fill
                    className="object-cover absolute top-0 left-0 w-full h-full -z-10"
                />
                <div className="container">
                    <div className="grid h-full relative w-full place-content-center">
                        <h1 className="text-4xl text-center font-bold backdrop-blur-md bg-white/80  rounded-md px-6 py-4 text-primary">Find. Connect. Succeed.</h1>
                    </div>
                </div>
            </div>
            
            <div className='container flex flex-col gap-1 relative'>
                <div className='flex items-center justify-center pb-4'>
                    <SectionHeading
                        title="Choose Your Mission"
                    />
                </div>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
                    {missions.map((mission) => (
                        <MissionCard
                            key={mission.title}
                            image={mission.image}
                            title={mission.title}
                            upcoming={mission.upcoming}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MissionsPage