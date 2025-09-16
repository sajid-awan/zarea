"use client";

import { Icon } from "@iconify/react";
import { Target, CheckCircle, Lightbulb, Handshake } from "lucide-react";

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const coreValues: CoreValue[] = [
  {
    title: "Transparency",
    description: "We believe in open, honest communication. From pricing to partnerships, clarity first.",
    icon: <Icon icon="solar:eye-linear"  className="w-full h-full text-zarea-primary-orange" />
  },
  {
    title: "Reliability in Every Deal",
    description: "We're obsessed with consistency. Buyers, suppliers, and investors count on us to deliver every time.",
    icon: <Icon icon="solar:shield-check-linear" className="w-full h-full text-zarea-primary-orange"/>
  },
  {
    title: "Innovation with Invention",
    description: "We solve real problems with real solutions. Technology is a tool, not a gimmick.",
    icon: <Icon icon="mage:light-bulb" className="w-full h-full text-zarea-primary-orange" />
  },
  {
    title: "People-first Partnerships",
    description: "We treat every relationship with respect, empathy, and long-term thinking.",
    icon:<Icon icon="lineicons:hand-shake" className="w-full h-full text-zarea-primary-orange"/>
  }
];

export default function CoreValues() {
  return (
    <section className="py-6 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-left mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zarea-black mb-2 sm:mb-4">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-4 sm:p-6 border border-zarea-light-gray hover:bg-zarea-primary-orange/5 hover:border-zarea-primary-orange transition-all cursor-pointer"
            >
              <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  {value.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-zarea-black mb-2 text-lg sm:text-xl lg:text-2xl transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg font-medium text-zarea-black/50 mt-1">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}