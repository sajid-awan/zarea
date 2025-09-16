"use client";

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  children: React.ReactNode;
  slidesToShow?: number;
  slidesToScroll?: number;
  dots?: boolean;
  arrows?: boolean;
  customArrows?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  infinite?: boolean;
  className?: string;
  responsive?: Array<{
    breakpoint: number;
    settings: {
      slidesToShow?: number;
      slidesToScroll?: number;
    };
  }>;
}

const CustomSlider = forwardRef<Slider, SliderProps>(({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
  dots = false,
  arrows = false,
  customArrows = false,
  autoplay = false,
  autoplaySpeed = 3000,
  infinite = true,
  className = "",
  responsive
}, ref) => {
  const sliderRef = useRef<Slider>(null);

  useImperativeHandle(ref, () => ({
    slickNext: () => sliderRef.current?.slickNext(),
    slickPrev: () => sliderRef.current?.slickPrev(),
    slickGoTo: (slide: number) => sliderRef.current?.slickGoTo(slide),
  } as any));

  const settings = {
    dots,
    infinite,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    arrows,
    autoplay,
    autoplaySpeed,
    responsive: responsive || [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
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
    ]
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className={`relative ${className}`}>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      
      {customArrows && (
        <div className="flex gap-2 mt-4 justify-center lg:justify-start">
          <button
            onClick={goToPrev}
            className="w-12 h-12 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm flex items-center justify-center transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm flex items-center justify-center transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
});

CustomSlider.displayName = 'CustomSlider';

export default CustomSlider;