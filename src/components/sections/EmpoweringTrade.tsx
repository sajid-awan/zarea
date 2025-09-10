"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}

function AnimatedCounter({ end, prefix = "", suffix = "", duration = 2000, isVisible }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutCubic);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return (
    <span>{prefix}{count}{suffix}</span>
  );
}

export default function EmpoweringTrade() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto 2xl:px-2 px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-[50px] items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8 sm:space-y-12 lg:space-y-14 max-w-[594px]">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zarea-black leading-[120%]">
                  Empowering Commodity Trade, Fueling Business Growth
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-zarea-black leading-[125%]">
                  Zarea is Pakistan's leading digital B2B trade platform, connecting verified buyers and suppliers across high-impact sectors. We simplify sourcing, strengthen trust, and deliver business intelligence — all in one seamless ecosystem.
                </p>
              </div>
              <Button
                variant="primary"
                size="responsive-lg"
                radius={"full"}
                className="px-4 py-3 min-w-[140px] sm:min-w-[165px]"
                rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            {/* Mobile Layout - Stack Vertically */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-zarea-secondary h-[250px] sm:h-auto">
                <Image src={"/images/ceo.jpg"} alt="Empowering Trade" width={500} height={600} className="object-cover w-full h-full" />
              </div>

              <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden bg-zarea-accent-orange text-white flex flex-col min-h-[250px]">
                <div className="flex items-center h-[30px] sm:h-[40px] lg:h-[58px] relative">
                  <span className="font-broad text-[60px] sm:text-[80px] lg:text-[120px] leading-[30px] sm:leading-[40px] lg:leading-[58px] absolute top-2 sm:top-3 lg:top-5">"</span>
                </div>

                <p className="text-sm sm:text-lg lg:text-2xl mb-6 sm:mb-12 lg:mb-16 flex-1">
                  Transforming commerce by unlocking Pakistan's $<AnimatedCounter end={50} suffix="B" isVisible={isVisible} /> commodities market empowering SMEs, boosting output, enabling capital access, and driving digital growth.
                </p>

                <div className="mt-auto">
                  <p className="text-sm sm:text-base lg:text-xl mb-3 sm:mb-4 lg:mb-6">CEO & Founder</p>
                  <div className="font-broetown-signature text-[20px] sm:text-[25px] lg:text-[35px]">
                    Ali Alam Qamar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}