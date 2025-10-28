import ViewMoreButton from '@/shared/components/buttons/view-more-button'
import SectionHeading from '@/shared/components/section-heading'
import { home } from '@/shared/constants/images'
import { cn } from '@/shared/lib/utils'
import { Building, Building2, Home, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



function RealEstateSection() {

    return (
        <div className='py-5 relative'>
            <div className='container grid grid-cols-1 gap-10 lg:grid-cols-2'>
                <div className="flex flex-col gap-6 relative md:gap-8">
                    <SectionHeading
                        title={`Real Estate Excellence`}
                        description="Your gateway to premier real estate market. Find agents, agencies, properties, and projects all in one place."
                    />
                    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                        {REAL_ESTATE_SECTION_CARDS.map((card) => (
                            <RealEstateSectionCard
                                key={card.title}
                                title={card.title}
                                description={card.description}
                                Icon={card.Icon}
                            />
                        ))}
                    </div>
                    <ViewMoreButton 
                        href='#'
                        // variant={"default"}
                        // className='text-primary-foreground decoration-transparent hover:text-primary-foreground'
                    />
                </div>
                <div className='rounded-md overflow-hidden shadow-sm hidden lg:block'>
                    <Image 
                        src={home.realEstateSectionImage}
                        alt="Real Estate Section"
                        className='w-full h-full object-cover rounded-md'
                        placeholder='blur'
                    />
                </div>
            </div>
        </div>
    )

}

function RealEstateSectionCard(props: typeof REAL_ESTATE_SECTION_CARDS[number]) {
    return (
        <Link 
            href={"#"}
            className={cn(
                'p-5 shadow-sm rounded-md flex flex-col gap-2.5 bg-linear-to-b from-primary/4 via-transparent to-transparent [&>svg]:text-primary/60 [&>svg]:transition-all [&>svg]:duration-400 [&>svg]:size-9 [&>svg]:stroke-[1.7]',
                "transition-all hover:border-primary/70 duration-400 group hover:[&>svg]:text-primary hover:shadow-lg"
            )}
        >
            <props.Icon  />
            <div className='flex flex-col gap-0.5'>
                <h1 className='text-lg font-semibold text-foreground/90'>{props.title}</h1>
                <p className='text-muted-foreground text-sm'>
                    {props.description}
                </p>
            </div>
        </Link>
    )
}

const REAL_ESTATE_SECTION_CARDS = [
    {
        title: "Agents",
        description: "Connect with verified Real Estate agents",
        Icon: User2,
    },
    {
        title: "Agencies",
        description: "Explore top related real estate agencies",
        Icon: Building2,
    },
    {
        title: "Properties",
        description: "Discover your dream property",
        Icon: Home,
    },
    {
        title: "Projects",
        description: "Browse upcoming developments",
        Icon: Building,
    },
]

export default RealEstateSection