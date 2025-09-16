"use client";

import React, { useEffect, useState, useRef } from "react";
import { ShoppingBag, MapPin, Package, Users } from "lucide-react";

export { ShoppingBag, MapPin, Package, Users };

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

interface StatisticItemProps {
  value: number;
  suffix?: string;
  label: string;
  isVisible: boolean;
  icon: React.ComponentType<{ className?: string }> | React.ReactElement;
}

function StatisticItem({ value, suffix = "", label, isVisible, icon }: StatisticItemProps) {
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return <div className="w-12 h-12 text-accent [&>svg]:w-full [&>svg]:h-full">{icon}</div>;
    } else {
      const IconComponent = icon as React.ComponentType<{ className?: string }>;
      return <IconComponent className="w-12 h-12  text-accent" />;
    }
  };

  return (
    <div>
      <div className="mb-4">
        {renderIcon()}
      </div>
      <div className="text-[64px] font-bold text-zarea-black mb-4 leading-[120%]">
        <AnimatedCounter end={value} suffix={suffix} isVisible={isVisible} />
      </div>
      <p className="text-xl text-zarea-black leading-[125%]">{label}</p>
    </div>
  );
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }> | React.ReactElement;
}

interface StatisticsProps {
  stats: StatItem[];
}

export default function Statistics({ stats }: StatisticsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 2xl:px-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatisticItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}