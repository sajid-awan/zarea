"use client";

import React from "react";
import { Button } from "../ui";
import { FileText, ShoppingBag, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";

const HighlightsSection: React.FC = () => {
  const highlights = [
    {
      title: "Powering Pakistan's B2B Trade Ecosystem",
      buttonText: "Quote Now",
      backgroundImage: "/images/B2B.png"
    },
    {
      title: "Everyday Essentials, Delivered Smarter",
      buttonText: "Shop Now",
      backgroundImage: "/images/B2C.png"
    },
    {
      title: "Invest in the Future of Digital Commodities",
      description: "Share Price",
      amount: "+16.38 PKR",
      buttonText: "Invest Now",
      backgroundImage: "/images/Investor.png",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-[50px] bg-white">
      <div className="container mx-auto 2xl:px-2 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-6 transition-all duration-300 min-h-[200px] sm:min-h-[240px] flex flex-col justify-between border border-graphite-navy-50 hover:border-zarea-primary-orange group"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(231,233,235,0.7) 100%)'
              }}
             >
            <div 
              className="absolute inset-0 z-0 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(180deg, #FFF 0%, var(--Colors-Secondary-Graphite-Navy-50, #E7E9EB) 100%)'
              }}
            ></div>
            <div 
              className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(180deg, #FFF 0%, var(--Colors-Primary-Accent-Orange-50, #FBEEEB) 100%)'
              }}
            ></div>
            <Image 
              src={item.backgroundImage} 
              alt={item.title} 
              fill
              className="object-cover absolute inset-0 z-5" 
            />
              <div className="relative z-10 max-w-[280px] sm:max-w-[300px]">
              
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-zarea-black mb-3 sm:mb-4 leading-tight">{item.title}</h3>
                {item.description && item.icon && item.amount &&(
                  <div className="flex items-center gap-2 mb-3 text-base sm:text-lg">
                    <span className="text-zarea-black">{item.description}</span>
                    <span className="font-bold text-zarea-success">{item.amount}</span>
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-zarea-success" />
                  </div>
                )}
              </div>
              <div className="relative z-10 mt-auto">
                <Button 
                  variant="primary" 
                  size="responsive"
                  radius="full"
                  className="px-3 min-w-[140px] sm:min-w-[158px]"
                  rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
                >
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
