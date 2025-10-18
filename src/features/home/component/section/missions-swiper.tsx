import MissionCard from '@/shared/components/mission-card'
import { missions } from '@/shared/constants/mission'
import React from 'react'
import { Navigation, Mousewheel, Keyboard, Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

function MissionSwiper(props: {
    nextButtonRef: React.RefObject<HTMLButtonElement | null>;
    prevButtonRef: React.RefObject<HTMLButtonElement | null>;
}) {
    const { nextButtonRef, prevButtonRef } = props;
    const [isBeginning, setIsBeginning] = React.useState(true);
    const [isEnd, setIsEnd] = React.useState(false);

    // const renderMask = () => {
    //     const DEFAULT_LEFT_OPACITY = 15
    //     const DEFAULT_RIGHT_OPACITY = 85
    //     let rightOpacity = DEFAULT_RIGHT_OPACITY
    //     let leftOpacity = DEFAULT_LEFT_OPACITY
        
    //     if(isBeginning && !isEnd) {
    //         leftOpacity = 0
    //         rightOpacity = DEFAULT_RIGHT_OPACITY
    //     } else if(!isBeginning && isEnd) {
    //         rightOpacity = 100
    //         leftOpacity = DEFAULT_LEFT_OPACITY
    //     }

    //     return `linear-gradient(to right, transparent 0%, black ${leftOpacity}%, black ${rightOpacity}%, transparent 100%)`;
    // }

    return (
        <div 
            className="w-full relative"
            // Un comment to apply mask to the swiper
            // style={{
            //     maskImage: renderMask(),
            //     maskSize: "100% 100%",
            //     maskPosition: "center",
            //     maskRepeat: "no-repeat",
            //     maskClip: "content-box",
            //     maskOrigin: "content-box",
            //     maskComposite: "source-in",
            //     maskMode: "alpha",
            // }}
        >
            <Swiper
                modules={[Mousewheel, Keyboard, Navigation, Grid]}
                grid={{
                    fill: 'row',
                    rows: 2,
                }}
                keyboard
                mousewheel={{
                    forceToAxis: true,
                }}
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                draggable={false}
                navigation={{
                    enabled: true,
                    nextEl: nextButtonRef.current,
                    prevEl: prevButtonRef.current,
                }}
                speed={1000}
                onSwiper={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onResize={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                    },
                    1280: {
                        slidesPerView: 4,
                        slidesPerGroup: 3,
                    },

                }}
            >
                {Array.from({ length: 20 }).map((_, index) => (
                    <SwiperSlide
                        key={missions[index].title}
                        className='px-2 !h-auto'
                    >
                        <MissionCard
                            image={missions[index].image}
                            title={missions[index].title}
                            upcoming={missions[index].upcoming}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MissionSwiper;