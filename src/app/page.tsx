import RealEstateSection from "@/features/home/component/real-estate-section";
import BannersSection from "@/features/home/component/section/banners-section";
import DiscoverAiAgentSection from "@/features/home/component/section/discover-ai-agent-section";
import FeaturedProfessional from "@/features/home/component/section/featured-professional";
import HeroSection from "@/features/home/component/section/hero-section";
import Missions from "@/features/home/component/section/missions";
import Footer from "@/shared/components/footer";


export default async function Home() {
    return (
        <div className="flex flex-col gap-10">
            <HeroSection />
            <Missions />
            <RealEstateSection />
            <FeaturedProfessional />
            {/* <BannersSection /> */}
            <DiscoverAiAgentSection />
            <Footer />
        </div>
    )
}
