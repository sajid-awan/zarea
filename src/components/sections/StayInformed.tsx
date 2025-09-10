"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

export default function StayInformed() {

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-zarea-light-gray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-6 sm:mb-8 max-w-[501px]">
              <span className="text-zarea-success text-sm sm:text-base lg:text-xl font-medium">Stock Price Live</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-zarea-black mt-2 mb-4 sm:mb-6">
                Stay Informed, Invest with Confidence
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8">
            <Button
                variant="primary"
                size="responsive-lg"
                radius="full"
                className="flex items-center gap-2"
                rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              >
                Explore Full Investor Relations
              </Button>
              <Image
                src="/images/img-min.png"
                alt="Stock Exchange"
                width={64}
                height={64}
                className="object-contain w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
              />  
            </div>

          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Image src={'/images/company-details.png'} alt="" width={100} height={100} className="w-full h-full"/>
          <div className="bg-zarea-accent-orange rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-white h-full">
          <h3 className="text-base sm:text-lg lg:text-xl font-normal leading-[125%] mb-2">Contact </h3>
          <h2 className="text-lg sm:text-xl lg:text-[28px] font-bold leading-[120%] mb-4 sm:mb-6 lg:mb-9">Investor Relation Contact</h2>
           <h4 className="text-xs sm:text-sm font-medium mb-2">Investor Relations Manager</h4>
           <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Afnan Khalid</h3>
           <h4 className="text-xs sm:text-sm font-medium mb-2">Phone Number</h4>
           <h3 className="text-lg sm:text-xl font-semibold">042-32176455</h3>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}