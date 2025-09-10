"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaArrowLeftSolid,LiaArrowRightSolid } from "react-icons/lia";

type GenericCarouselProps = {
  items: any[];
  renderItem: (item: any, idx: number) => React.ReactNode;
  settings?: any;
  className?: string;
};

export default function GenericCarousel({ items, renderItem, settings = {}, className = "" }: GenericCarouselProps) {
  const sliderRef = useRef<any>(null);

  const defaultSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    ...settings,
  };

  return (
    <div className={className}>
      <Slider ref={sliderRef} {...defaultSettings}>
        {items.map((it, idx) => (
          <div key={idx} className="px-5">
            {renderItem(it, idx)}
          </div>
        ))}
      </Slider>

      <div className="container mx-auto 2xl:px-2 px-4">
      <div className="mt-[50px] flex justify-end gap-3">
        <button
          aria-label="previous"
          onClick={() => sliderRef.current?.slickPrev()}
          className="cursor-pointer h-10 md:h-12 px-6 rounded-full border border-white text-white flex items-center justify-center bg-transparent  transition hover:bg-zarea-primary-orange hover:border-zarea-primary-orange"
        >
         <LiaArrowLeftSolid className="w-6 h-6"/>
        </button>

        <button
          aria-label="next"
          onClick={() => sliderRef.current?.slickNext()}
          className="cursor-pointer h-10 md:h-12 px-6 rounded-full border border-white text-white flex items-center justify-center bg-transparent  transition hover:bg-zarea-primary-orange hover:border-zarea-primary-orange"
        >
          
         <LiaArrowRightSolid className="w-6 h-6"/>
        </button>
      </div>
      </div>
    </div>
  );
}
