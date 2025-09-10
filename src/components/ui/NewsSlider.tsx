"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia';

export interface NewsItem {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date?: string;
}

export interface NewsSliderProps {
  title: string;
  items: NewsItem[];
  readMoreText?: string;
  onReadMore?: () => void;
}

// Custom Arrow Components
const CustomArrow = ({ direction, onClick, disabled }: { 
  direction: 'prev' | 'next';
  onClick?: () => void;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`h-10 sm:h-12 px-4 sm:px-6 rounded-full border bg-white flex items-center justify-center transition-all hover:border-zarea-primary-orange hover:bg-zarea-primary-orange hover:text-white ${
      disabled ? 'opacity-50 cursor-not-allowed border-zarea-black/20' : 'cursor-pointer border-zarea-black'
    }`}
  >
    {direction === 'prev' ? (
      <LiaArrowLeftSolid className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"/>
    ) : (
      <LiaArrowRightSolid className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"/>
    )}
  </button>
);

const NewsSlider = ({
  title,
  items,
  readMoreText = "Read More",
  onReadMore
}: NewsSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current)
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className='p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-[#C3C5C8] shadow-[0_1px_3px_0_rgba(13,13,18,0.05)]'>
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-zarea-black">{title}</h3>
        {onReadMore && (
          <button 
            onClick={onReadMore}
            className="text-zarea-primary-orange text-sm sm:text-base lg:text-lg font-medium hover:underline"
          >
            {readMoreText}
          </button>
        )}
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...sliderSettings}>
          {items.map((item, index) => (
            <div key={index} >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 overflow-hidden">
                <div className="relative w-full sm:w-[120px] md:w-[155px] h-[120px] sm:h-[120px] md:h-[155px] rounded-lg sm:rounded-xl flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full rounded-lg sm:rounded-xl"
                  />
                </div>
                <div className="flex-1">
                  <span className="py-1 sm:py-[3px] px-3 sm:px-4 h-6 sm:h-7 inline-flex items-center justify-center rounded-full bg-zarea-light-gray text-xs sm:text-sm font-medium">
                    {item.category}
                  </span>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-zarea-black mt-2 mb-2 max-w-[443px]">
                    {item.title}
                  </h4>
                  <p className="text-zarea-black/50 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {item.excerpt}
                  </p>
                  {item.date && (
                    <p className="text-zarea-black/50 text-xs mt-2">{item.date}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Arrows at bottom */}
      <div className="flex justify-center sm:justify-end gap-2 sm:gap-[10px] mt-3 sm:mt-4">
        <CustomArrow 
          direction="prev" 
          onClick={goToPrev}
          disabled={currentSlide === 0}
        />
        <CustomArrow 
          direction="next" 
          onClick={goToNext}
          disabled={currentSlide >= items.length - 1}
        />
      </div>
    </div>
  );
};

NewsSlider.displayName = "NewsSlider";

export { NewsSlider };