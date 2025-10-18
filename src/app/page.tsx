import BannersSection from "@/features/home/component/section/banners-section";
import FeaturedProfessional from "@/features/home/component/section/featured-professional";
import Missions from "@/features/home/component/section/missions";
import { home } from "@/shared/constants/images";
import Image from "next/image";


export default async function Home(props: PageProps<"/">) {
    return (
        <div className="flex flex-col gap-10">
            <div className="relative min-h-[650px] overflow-hidden grid">
                <Image
                    src={home.heroImage}
                    alt="Hero"
                    fill
                    className="object-cover absolute top-0 left-0 w-full h-full -z-10"
                    priority
                    placeholder="blur"
                />
                <div className="container">
                    <div className="grid h-full relative w-full place-content-center">
                        <h1 className="text-3xl text-center font-bold backdrop-blur-md bg-white/85  rounded-md px-6 py-4 text-primary md:text-4xl">Find. Connect. Succeed.</h1>
                    </div>
                </div>
            </div>
            <Missions />
            <BannersSection />
            <FeaturedProfessional />
        </div>
    )
}
