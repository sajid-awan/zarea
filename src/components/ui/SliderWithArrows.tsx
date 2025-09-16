"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import CustomSlider from "./Slider";
import Image from "next/image";

interface SlideData {
  id: string;
  title: string;
  image: string;
  type?: 'highlight' | 'team';
}

interface SlideItemProps {
  slide: SlideData;
}

const SlideItem: React.FC<SlideItemProps> = ({ slide }) => {
  return (
    <div className="px-2">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[300px] sm:h-[350px] lg:h-[600px] w-full group cursor-pointer">
        <Image
          src={slide.image}
          alt={slide.title}
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[2]" />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-4 sm:p-4 pb-[94px] sm:pb-[94px] lg:pb-[94px] z-10">
          <h3 className="text-white text-lg sm:text-xl lg:text-[32px] uppercase text-center">
            {slide.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

interface TeamHighlightsProps {
  slides: SlideData[];
  className?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

const TeamHighlights: React.FC<TeamHighlightsProps> = ({
  slides,
  className = "",
  autoplay = true,
  autoplaySpeed = 4000
}) => {
  const sliderRef = useRef<any>(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className={`relative ${className}`}>
      <CustomSlider
        ref={sliderRef}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed}
        customArrows={false}
        className="mission-slider"
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]}
      >
        {slides.map((slide) => (
          <SlideItem 
            key={slide.id} 
            slide={slide} 
          />
        ))}
      </CustomSlider>
      
      {/* Arrow controls */}
      <div className="absolute bottom-[30px] left-0 right-0 flex items-center justify-center gap-2 z-10">
        <button 
          onClick={handlePrev}
          className="h-12 px-6 rounded-full border border-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
          aria-label="Previous slide"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white rotate-180" />
        </button>
        <button 
          onClick={handleNext}
          className="h-12 px-6 rounded-full border border-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
          aria-label="Next slide"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TeamHighlights;