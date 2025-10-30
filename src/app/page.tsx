import RealEstateSection from "@/features/home/component/section/real-estate-section";
import DiscoverAiAgentSection from "@/features/home/component/section/discover-ai-agent-section";
import FeaturedProfessional from "@/features/home/component/section/featured-professional-section";
import HeroSection from "@/features/home/component/section/hero-section";
import Missions from "@/features/home/component/section/missions";
import Footer from "@/shared/components/footer";
import AiSection from "@/features/home/component/section/ai-section";
import Image from "next/image";
import { home } from "@/shared/constants/images";
import MissionAccomplishedSection from "@/features/home/component/section/mission-accomplished-section";
import { Separator } from "@/shared/components/ui/separator";


export default async function Home() {
    return (
        <div className="flex flex-col gap-10 md:gap-14 xl:gap-20">
            <HeroSection />
            <Missions />
            {/* <Separator className="bg-gray-200 container data-[orientation=horizontal]:w-10/12 " /> */}
            <RealEstateSection />
            {/* <Separator className="bg-gray-200 container data-[orientation=horizontal]:w-10/12 " /> */}
            {/* <AiSection /> */}
            {/* <Separator className="bg-gray-200 container data-[orientation=horizontal]:w-10/12 " /> */}
            <FeaturedProfessional />
            {/* <Separator className="bg-gray-200 container data-[orientation=horizontal]:w-10/12 " /> */}
            <DiscoverAiAgentSection />

            <MissionAccomplishedSection />
            {/* <Separator className="bg-gray-200 container data-[orientation=horizontal]:w-10/12 " /> */}
            {/* <BannersSection /> */}
            <Footer />
        </div>
    )
}
