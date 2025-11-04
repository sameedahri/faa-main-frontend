import type { Metadata } from "next";
import { Merriweather_Sans, Noto_Sans } from "next/font/google";
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
                className={` ${merriweatherSans.variable} ${notoSans.variable} antialiased relative`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
