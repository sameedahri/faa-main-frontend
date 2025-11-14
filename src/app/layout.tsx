import type { Metadata } from "next";
import { Merriweather_Sans, Noto_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/shared/components/navbar";
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import 'swiper/css/grid';
import Footer from "@/shared/components/footer";


const merriweatherSans = Merriweather_Sans({
    variable: "--font-merriweather-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["normal"],
});

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
    weight: [ "200", "300", "400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
    title: "Find Any Agent",
    description: "Find Any Agent",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <body
                className={` ${merriweatherSans.variable} ${notoSans.variable} ${plusJakartaSans.variable} antialiased relative`}
            >
                <div className="min-h-svh grid grid-rows-[auto_1fr_auto]">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
