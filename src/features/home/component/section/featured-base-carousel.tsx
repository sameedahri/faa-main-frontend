"use client"

import { Button } from '@/shared/components/ui/button';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Route } from 'next';
import Link from 'next/link';
import React, { PropsWithChildren, useRef, useState } from 'react'
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import { cn } from '@/shared/lib/utils';
import type { Swiper as SwiperType } from 'swiper';

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
        <div className='relative'>
            <div className='relative'>
                {/* Right and left fade overlay */}
                <CarouselFadeOverlay isBeginning={isBeginning} isEnd={isEnd} />
                
                <Swiper
                    modules={[Mousewheel, Keyboard, Navigation]}
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
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: "auto",
                        },
                        1024: {
                            slidesPerView: "auto",
                            allowTouchMove: false,
                        },
                        1280: {
                            slidesPerView: "auto",
                            spaceBetween: 20,
                            slidesPerGroup: 2,
                            allowTouchMove: false,
                        },
                    }}
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
                            className='w-full md:px-1 md:max-w-[320px]'
                            {...props.swiperSlideProps}
                        >
                            {item}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='grid grid-cols-4 grid-rows-1 pt-2'>
                <Button
                    variant='outline'
                    asChild
                    className='col-span-full row-span-full w-[130px] self-center justify-self-center text-muted-foreground hover:text-foreground group select-none'
                >
                    <Link
                        href={props.viewMoreLink ?? "#"}
                    >
                        View More
                        <ArrowUpRight />
                    </Link>
                </Button>
                <div className="flex gap-2 items-center col-span-full row-span-full justify-self-end">
                    <Button
                        ref={prevButtonRef}
                        variant={"outline"}
                        size={"icon"}
                        className="size-9 rounded-full"
                    >
                        <ChevronLeft />
                    </Button>
                    <Button
                        ref={nextButtonRef}
                        variant={"outline"}
                        size={"icon"}
                        className="size-9 rounded-full"
                    >
                        <ChevronRight />
                    </Button>

                </div>
            </div>
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
                'p-5 rounded-md shadow-sm my-2 w-[95%] mx-auto md:mx-0 md:w-full md:max-w-[320px] bg-linear-to-b from-primary/5 via-transparent to-transparent',
                props.className
            )}
        >
            {props.children}
        </div>
    )
}