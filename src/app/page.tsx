import RealEstateSection from "@/features/home/component/section/real-estate-section";
import DiscoverAiAgentSection from "@/features/home/component/section/discover-ai-agent-section";
import FeaturedProfessional from "@/features/home/component/section/featured-professional-section";
import HeroSection from "@/features/home/component/section/hero-section";
import Missions from "@/features/home/component/section/missions";
import MissionAccomplishedSection from "@/features/home/component/section/mission-accomplished-section";
import JoinTheNetworkSection from "@/features/home/component/section/join-the-network-section";

export default async function Home() {
    return (
        <div className="flex flex-col gap-10 md:gap-12 xl:gap-16">
            <HeroSection />
            <div className="flex flex-col gap-10 pb-10 md:gap-14 md:pb-14 xl:gap-24 xl:pb-24">
                <Missions />
                <RealEstateSection />
                <FeaturedProfessional />
                <DiscoverAiAgentSection />
                <MissionAccomplishedSection />
                <JoinTheNetworkSection />
            </div>
        </div>
    )
}
