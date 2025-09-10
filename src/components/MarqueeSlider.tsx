"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MarqueeSliderProps {
  items: string[];
  backgroundColor?: string;
  textColor?: string;
  speed?: number;
  className?: string;
  itemClassName?: string;
  pauseOnHover?: boolean;
}

export default function MarqueeSlider({
  items,
  backgroundColor = "bg-accent-orange",
  textColor = "text-white",
  speed = 5000,
  className = "",
  itemClassName = "",
  pauseOnHover = false,
}: MarqueeSliderProps) {
  const [isClient, setIsClient] = useState(false);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseEnter = () => {
    if (pauseOnHover && sliderRef.current) {
      // Get the slider container and stop all animations immediately
      const sliderContainer = sliderRef.current.innerSlider?.list as HTMLElement;
      if (sliderContainer) {
        sliderContainer.style.animationPlayState = 'paused';
        sliderContainer.style.transitionDuration = '0s';
        
        // Also target the track element
        const trackElement = sliderContainer.querySelector('.slick-track') as HTMLElement;
        if (trackElement) {
          trackElement.style.animationPlayState = 'paused';
          trackElement.style.transitionDuration = '0s';
        }
      }
      sliderRef.current.slickPause();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && sliderRef.current) {
      // Resume all animations
      const sliderContainer = sliderRef.current.innerSlider?.list as HTMLElement;
      if (sliderContainer) {
        sliderContainer.style.animationPlayState = 'running';
        sliderContainer.style.transitionDuration = '';
        
        // Also target the track element
        const trackElement = sliderContainer.querySelector('.slick-track') as HTMLElement;
        if (trackElement) {
          trackElement.style.animationPlayState = 'running';
          trackElement.style.transitionDuration = '';
        }
      }
      sliderRef.current.slickPlay();
    }
  };

  const marqueeSettings = {
    speed: speed,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear' as const,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  if (!isClient) {
    return null;
  }

  return (
    <div 
      className={`${backgroundColor} ${textColor} py-3 overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Slider ref={sliderRef} {...marqueeSettings}>
        {items.map((item, index) => (
          <div key={index} className="px-[27px] border-r border-white">
            <span className={`text-xs whitespace-nowrap inline-block leading-6 font-mono ${itemClassName}`}>
              {item}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
}