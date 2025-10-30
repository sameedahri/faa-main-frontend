import RealEstateSection from "@/features/home/component/section/real-estate-section";
import DiscoverAiAgentSection from "@/features/home/component/section/discover-ai-agent-section";
import FeaturedProfessional from "@/features/home/component/section/featured-professional-section";
import HeroSection from "@/features/home/component/section/hero-section";
import Missions from "@/features/home/component/section/missions";
import Footer from "@/shared/components/footer";
import MissionAccomplishedSection from "@/features/home/component/section/mission-accomplished-section";

export default async function Home() {
    return (
        <div className="flex flex-col gap-10 md:gap-14 xl:gap-20">
            <HeroSection />
            <Missions />
            <RealEstateSection />
            <FeaturedProfessional />
            <DiscoverAiAgentSection />
            <MissionAccomplishedSection />
            <Footer />
        </div>
    )
}
