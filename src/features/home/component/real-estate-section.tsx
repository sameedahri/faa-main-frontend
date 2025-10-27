import SectionHeading from '@/shared/components/section-heading'
import { Button } from '@/shared/components/ui/button'
import { home } from '@/shared/constants/images'
import { PAGE_ROUTES } from '@/shared/constants/page-routes'
import { cn } from '@/shared/lib/utils'
import { Icon as IconType } from '@/shared/types/icon.type'
import { ArrowUpRight, Building, Building2, Home, Icon, Projector, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



function RealEstateSection() {

    return (
        // <div className='pt-16 pb-20 bg-primary/5 relative'>
        <div className='pt-10 pb-12 bg-primary/7 relative lg:pt-16 lg:pb-20'>
            {/* <Image 
                src={home.realEstateSectionImage}
                alt="Real Estate Section"
                className='object-cover absolute top-0 left-0 w-full h-full -z-10'
                placeholder='blur'
            /> */}
            <div className='container grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]'>
                <div className="flex flex-col gap-5 relative">
                    <SectionHeading
                        title={`Real Estate Excellence`}
                        description="Your gateway to premier real estate market. Find agents, agencies, properties, and projects all in one place."
                        // wrapperClassName='text-center items-center'
                    />
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-[350px_350px]">
                        {REAL_ESTATE_SECTION_CARDS.map((card) => (
                            <RealEstateSectionCard
                                key={card.title}
                                title={card.title}
                                description={card.description}
                                Icon={card.Icon}
                            />
                        ))}
                    </div>
                    <Button
                        // variant='soft-primary'
                        asChild
                        className='w-full mt-1.5 lg:w-[130px]'
                    >
                        <Link
                            href={PAGE_ROUTES.MISSIONS}
                        >
                            View More
                            <ArrowUpRight />
                        </Link>
                    </Button>
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

    return (
        <div className='pt-16 pb-20 bg-primary/5 relative'>
            <div className="grid grid-cols-[1fr_auto] gap-10 container">
                <div className="flex flex-col gap-5 relative">
                    <SectionHeading 
                        title={`Real Estate Excellence`}
                        description="Your gateway to premier real estate market. Find agents, agencies, properties, and projects all in one place."
                        // wrapperClassName='text-center items-center'
                    />
                    <div className="grid grid-cols-[350px_350px] gap-5">
                        {REAL_ESTATE_SECTION_CARDS.map((card) => (
                            <RealEstateSectionCard
                                key={card.title}
                                title={card.title}
                                description={card.description}
                                Icon={card.Icon}
                            />
                        ))}
                    </div>
                    <Button className='max-w-[150px]'>
                        View More
                    </Button>
                </div>
                <div className='w-full h-full rounded-md overflow-hidden'>
                    <Image 
                        src={home.realEstateSectionImage}
                        alt="Real Estate Section"
                        className='w-full h-full object-cover'
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
                'p-5 rounded-md flex flex-col border border-border/20 shadow-s gap-2.5 bg-background-light aspect-vide [&>svg]:text-primary/60 [&>svg]:transition-all [&>svg]:duration-400 [&>svg]:size-9 [&>svg]:stroke-[1.7]',
                "transition-all hover:border-primary/70 duration-400 group hover:[&>svg]:text-primary"
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

// function RealEstateSection() {
//     return (
//         // <div className='relative bg-radial-[at_50%_150%] from-transparent via-transparent to-primary/10 py-16'>
//         <div className='relative bg-primary/5 py-16'>
//             {/* <div className="absolute inset-0">
//                 <Image 
//                     src={home.realEstateSvg}
//                     alt="Real Estate Section"
//                     className='w-10/12 h-10/12 opacity-5 -z-10'
//                 />
//             </div> */}
//             <div className='container flex flex-col gap-8 relative z-10'>
//                 <SectionHeading
//                     title={`Real Estate Excellence`}
//                     description="Your gateway to premier real estate market. Find agents, agencies, properties, and projects all in one place."
//                     wrapperClassName='text-center items-center'
//                 />
//                 <div className="grid grid-cols-2 gap-5 items-center">
//                     <Image
//                         src={home.realEstateSectionImage}
//                         alt="Real Estate Section"
//                         className='rounded-md object-cover w-full h-full'
//                     />
//                     <div className='flex flex-col gap-4'>
//                         <div className="grid grid-cols-1 gap-5">
//                             {REAL_ESTATE_SECTION_CARDS.map((card) => (
//                                 <RealEstateSectionCard
//                                     key={card.title}
//                                     title={card.title}
//                                     description={card.description}
//                                     Icon={card.Icon}
//                                 />
//                             ))}
//                         </div>
//                         <Button
//                             variant='bootstrap-primary'
//                             className='w-full mt-2.5'
//                         >
//                             View More
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function RealEstateSectionCard(props: {
//     title: string,
//     description: string,
//     Icon: IconType
// }) {
//     return (
//         <div className='p-3 rounded-md w-full flex flex-col gap-1 '>
//             {/* <div className="flex items-end gap-2">
//             <props.Icon className='text-primary size-8' />
//         </div> */}
//             <h1 className='text-xl font-semibold text-primary'>{props.title}</h1>
//             <p className='text-muted-foreground'>
//                 {props.description}
//             </p>
//         </div>
//     )
// }

// function RealEstateSection() {
//     return (
//         <div className='bg-radial-[at_50%_150%] from-transparent via-transparent to-primary/10 py-16'>
//             <div className='container flex flex-col gap-8 '>
//                 <SectionHeading
//                     title={`Real Estate Excellence`}
//                     description="Your gateway to premier real estate market. Find agents, agencies, properties, and projects all in one place."
//                     wrapperClassName='text-center items-center'
//                 />
//                 <div className="grid grid-cols-2 gap-5">
//                     {REAL_ESTATE_SECTION_CARDS.map((card) => (
//                         <RealEstateSectionCard
//                             key={card.title}
//                             title={card.title}
//                             description={card.description}
//                             Icon={card.Icon}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// function RealEstateSectionCard(props: {
//     title: string,
//     description: string,
//     Icon: IconType
// }) {
//     return (
//         // <div className='p-5 rounded shadow-sm w-full backdrop-blur-3xl bg-background-light  flex flex-col gap-1  items-center text-center'>
//         <div className='p-5 rounded-md w-full shadow-sm bg-background-light backdrop-blur-3xl border-primary/20 flex flex-col gap-1  items-center text-center'>
//             <div className="flex items-end gap-2">
//             </div>
//             <props.Icon className='text-primary size-8' />
//             <h1 className='text-xl font-semibold'>{props.title}</h1>
//             <p className='text-muted-foreground'>
//                 {props.description}
//             </p>
//         </div>
//     )
// }

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