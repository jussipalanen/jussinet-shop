"use client"

import type { FlowbiteCarouselTheme } from 'flowbite-react';
import { Carousel } from 'flowbite-react'
import Image from 'next/image'

const customTheme: FlowbiteCarouselTheme = {
    root: {
      base: "relative w-full",
      leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800"
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: "relative h-56 overflow-hidden h-96 w-full flex-shrink-0 transform cursor-grab snap-center"
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
      snap: "snap-x"
    }
};

export default function BannerCarousel() {
    return (
        <>
            {/*         
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image src="/download.jpg" width={400} height={300} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=''/>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image src="/download.jpg" width={400} height={300} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=''/>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                         <Image src="/download.jpg" width={400} height={300} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=''/>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image src="/download.jpg" width={400} height={300} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=''/>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <Image src="/download.jpg" width={400} height={300} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=''/>
                    </div>
                </div>

                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>

                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div> */}

            <Carousel slideInterval={3000} theme={customTheme} >
                <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" width={0} height={96} sizes="100vw" alt='' />
                <Image src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80" width={0} height={96} sizes="100vw" alt='' />
                <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" width={0} height={96} sizes="100vw" alt='' />
                <Image src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" width={0} height={96} sizes="100vw" alt='' />
            </Carousel>
        </>
    )
}