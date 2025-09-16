"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui";
import Image from "next/image";

export default function VisionStatement() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto 2xl:px-2 px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-[50px] items-center">
          <div>
            <div className="space-y-8 sm:space-y-12 lg:space-y-14 max-w-[594px]">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-xl text-zarea-gray uppercase font-medium  mb-4">
                  ZAREA VISION
                </p>
                <h2 className="text-[32px] md:text-4xl lg:text-5xl font-bold text-zarea-black leading-[120%]">
                  Our Vision Statement
                </h2>
                <p className="text-lg lg:text-xl text-zarea-black leading-[125%]">
                  To digitize and modernize Pakistan's entire commodity ecosystem — building a 
                  faster, smarter, and radically transparent trade infrastructure that fuels 
                  economic progress and levels the playing field for all.
                </p>
              </div>
              <Button
                variant="primary"
                size="responsive-lg"
                radius={"full"}
                className="px-4 py-3"
                rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              >
                Join Zarea
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl  overflow-hidden border border-gray-50 bg-gradient-to-b from-[#FBEEEB] to-[#FFF] flex justify-between">
             <div className="py-4 pl-4 sm:py-6 sm:pl-6 lg:py-12 lg:pl-16">
              <div className="flex items-start h-[30px] sm:h-[40px] lg:h-[58px] relative">
                <span className="font-broad text-[60px] sm:text-[80px] lg:text-[120px] leading-[30px] sm:leading-[40px] lg:leading-[58px] absolute top-2 sm:top-3 lg:top-5 text-zarea-black">"</span>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-12 flex-1 text-zarea-black leading-[125%] max-w-[345px]">
                Transforming commerce by unlocking Pakistan's{" "}
                <span className="font-bold">$50B</span> commodities market 
                empowering SMEs, boosting output, enabling capital access, and 
                driving digital growth.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm sm:text-base lg:text-xl mb-2 sm:mb-3 lg:mb-4 text-zarea-accent-orange font-medium">
                    OUR CEO
                  </p>
                  <div className="font-broetown-signature text-[20px] sm:text-[25px] lg:text-[35px] text-zarea-black">
                    Ali Alam Qamar
                  </div>
                  </div>
                </div>
              </div>
                <div className="overflow-hidden ml-4">
                  <Image 
                    src={"/images/ceo.png"} 
                    alt="Ali Alam Qamar - CEO" 
                    width={96} 
                    height={96} 
                    className="object-cover w-full h-full" 
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}