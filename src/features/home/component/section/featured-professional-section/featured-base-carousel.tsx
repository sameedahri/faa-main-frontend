"use client"

import { Button } from '@/shared/components/ui/button';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';
import React, { PropsWithChildren, useRef, useState } from 'react'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import { cn } from '@/shared/lib/utils';
import type { Swiper as SwiperType } from 'swiper';
import ViewMoreButton from '@/shared/components/buttons/view-more-button';

type FeaturedBaseCarouselProps = PropsWithChildren<{
    swiperProps?: SwiperProps,
    viewMoreLink?: Route,
    items: React.ReactNode[],
    swiperSlideProps?: SwiperSlideProps,
}>

export function FeaturedBaseCarousel(props: FeaturedBaseCarouselProps) {
    const nextButtonRef = useRef<HTMLButtonElement>(null);
    const prevButtonRef = useRef<HTMLButtonElement>(null);

    const [_, setIsInitialized] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className='relative w-full'>
            <div className='relative'>
                {/* Right and left fade overlay */}
                <CarouselFadeOverlay isBeginning={isBeginning} isEnd={isEnd} />
                
                <Swiper
                    modules={[Mousewheel, Keyboard, Navigation, Pagination]}
                    keyboard
                    mousewheel={{
                        forceToAxis: true,
                    }}
                    slidesPerView={1}
                    // spaceBetween={10}
                    slidesPerGroup={1}
                    draggable={false}
                    navigation={{
                        enabled: true,
                        nextEl: nextButtonRef.current,
                        prevEl: prevButtonRef.current,
                    }}
                    pagination={{
                        // el: paginationRef.current,
                        clickable: true,
                        enabled: true,
                        type: 'bullets',
                    }}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                            pagination: true,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: "auto",

                        },
                        1024: {
                            slidesPerView: "auto",
                        },
                        1280: {
                            slidesPerView: "auto",
                            spaceBetween: 20,
                            slidesPerGroup: 2,
                            allowTouchMove: false,
                            pagination: false,
                        },
                    }}
                    className='!pb-9 xl:!pb-0'
                    onInit={(swiper) => {
                        setIsInitialized(true);
                        handleSlideChange(swiper);
                    }}
                    onSlideChange={handleSlideChange}
                    {...props.swiperProps}
                >
                    {props.items.map((item, index) => (
                        <SwiperSlide
                            key={`${props.items.length}-${index}`}
                            className='w-full md:px-1 md:max-w-[340px]'
                            {...props.swiperSlideProps}
                        >
                            {item}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {<Button
                    ref={prevButtonRef}
                    variant={"outline"}
                    size={"icon"}
                    className={"hidden size-10 rounded-full absolute z-20 -left-2 top-1/2 -translate-y-1/2 disabled:hidden xl:flex"}
                >
                    <ChevronLeft />
                </Button>}
                {<Button
                    ref={nextButtonRef}
                    variant={"outline"}
                    size={"icon"}
                    className="hidden size-10 rounded-full absolute -right-2 z-20 top-1/2 -translate-y-1/2 disabled:hidden xl:flex"
                    disabled={isEnd}
                >
                    <ChevronRight />
                </Button>}

            </div>
            <ViewMoreButton 
                href='#' 
                className='mx-auto flex mt-2'
            />
        </div>
    )
}

function CarouselFadeOverlay({ isBeginning, isEnd }: {
    isBeginning: boolean,
    isEnd: boolean,
}) {
    const className = "absolute top-0 bottom-0 hidden from-background-light to-transparent z-10 pointer-events-none transition-opacity duration-300 md:block md:w-10 lg:w-12"
    return (
        <>
            <div
                className={cn(
                    className,
                    "bg-gradient-to-r left-0",
                    isBeginning ? "opacity-0" : "opacity-100"
                )}
            />

            {/* Right fade overlay */}
            <div
                className={cn(
                    className,
                    "bg-gradient-to-l right-0",
                    isEnd ? "opacity-0" : "opacity-100"
                )}
            />
        </>
    )
}


export function BaseCarouselCard(props: PropsWithChildren<{
    className?: string
}>) {
    return (
        <div 
            className={cn(
                'p-5 rounded-md border border-primary/10 my-2 w-full mx-auto md:mx-0 md:w-full bg-linear-to-br from-primary/5 via-transparent to-transparent',
                props.className
            )}
        >
            {props.children}
        </div>
    )
}