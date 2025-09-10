"use client";

import React from "react";
import Image from "next/image";
import GenericCarousel from "../ui/GenericCarousel";
import { Button } from "../ui";
import { ShoppingCart } from "lucide-react";

export default function ProductCategories() {
  const categories = [
    { title: "Agriculture Biomass", image: "/images/slide1.png" },
    { title: "Building Material", image: "/images/slide2.png" },
    { title: "Cement", image: "/images/slide3.png" },
    { title: "Chemicals", image: "/images/slide4.png" },
    { title: "Coal", image: "/images/slide5.png" },
    { title: "Building Material", image: "/images/slide1.png" },
    { title: "Cement", image: "/images/slide3.png" },
    { title: "Chemicals", image: "/images/slide4.png" },
    { title: "Coal", image: "/images/slide5.png" }
  ];

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "236px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, centerPadding: '120px' } },
      { breakpoint: 1024, settings: { slidesToShow: 1, centerPadding: '80px' } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: '30px' } }
    ]
  };

  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-zarea-secondary">
      <div className="container mx-auto 2xl:px-2 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-6 sm:mb-8 lg:mb-10 gap-4 md:gap-0">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
              Explore Product Categories
            </h2>
            <p className="text-white text-sm sm:text-base lg:text-xl max-w-3xl">Find everything from raw materials to ready-to-sell goods — tailored for every business type, in one streamlined marketplace.</p>
          </div>

          <div className="hidden md:block">
            <Button
              variant="primary"
              size="responsive-lg"
              radius="full"
              className="min-w-[130px] sm:min-w-[156px] px-3 sm:px-4"
              rightIcon={<ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
            >
              Shop Now
            </Button>
          </div>
        </div>

        </div>
        <div>
          <GenericCarousel
            items={categories}
            settings={settings}
            renderItem={(cat) => (
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] bg-gray-800">
                <Image src={cat.image} alt={cat.title} fill style={{ objectFit: 'cover' }} className="block" />

                <div className="absolute left-0 bottom-0 right-0 text-center text-white bg-[linear-gradient(180deg,rgba(14,36,55,0)_0%,#0E2437)_100%)] min-h-50 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">{cat.title}</h3>
                </div>
              </div>
            )}
          />
        </div>
    </section>
  );
}