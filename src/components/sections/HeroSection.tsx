"use client";

import { Button } from "../ui";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-end py-8 sm:py-14">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Video Overlay - Multiple layers for complex gradient effect */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-32">
       
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-bold leading-tight sm:leading-normal lg:leading-[77px] mb-3 sm:mb-4">
                  Simplifying Commodity Trade
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>for Modern Businesses
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white max-w-xs sm:max-w-md lg:max-w-lg">
                  Explore opportunities and expand your reach in global markets.
                </p>
              </div>
              <div className="flex items-center justify-start sm:justify-end">
                <Button 
                  variant="primary" 
                  size="lg"
                  radius={"full"}
                  className="pl-[14px] pr-2 py-2"
                  rightIcon={
                    <Image 
                      src="/images/logo-white.png" 
                      alt="Arrow Right" 
                      width={32} 
                      height={32}
                      className="w-8 h-8"
                    />
                  }
                >
                 Ask Zarea AI
                </Button>
              </div>
            </div>
       
      </div>
    </section>
  );
}