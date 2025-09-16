"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui";
import TeamHighlights from "../ui/SliderWithArrows";

const slideData1 = [
  {
    id: '1',
    title: 'HIGHLIGHTED',
    image: '/images/highlight.png',
    type: 'highlight' as const
  },
  {
    id: '2', 
    title: 'FEATURED PROJECT',
    image: '/images/highlight.png',
    type: 'highlight' as const
  },
  {
    id: '3',
    title: 'SUCCESS STORY',
    image: '/images/highlight.png',
    type: 'highlight' as const
  }
];

const slideData2 = [
  {
    id: '4',
    title: 'ZAREA TEAM',
    image: '/images/team.png',
    type: 'team' as const
  },
  {
    id: '5', 
    title: 'OUR LEADERSHIP',
    image: '/images/team.png',
    type: 'team' as const
  },
  {
    id: '6',
    title: 'ACHIEVEMENTS',
    image: '/images/team.png',
    type: 'highlight' as const
  }
];

export default function MissionStatement() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto 2xl:px-2 px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-[50px] items-center">
          <div>
            <div className="space-y-8 sm:space-y-12 lg:space-y-14 max-w-[594px]">
              <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-xl text-zarea-gray uppercase font-medium  mb-4">
                  MISSION
                </p>
                <h2 className="text-[32px] md:text-4xl lg:text-5xl font-bold text-zarea-black leading-[120%]">
                  Our Mission Statement
                </h2>
                <p className="text-lg lg:text-xl text-zarea-black leading-[125%]">
                  We empower Pakistan's buyers and suppliers with cutting-edge, tech-driven 
                  solutions that simplify trade, unlock capital, and spark long-term, 
                  sustainable growth — reshaping how industries connect and thrive.
                </p>
              </div>
              <Button
                variant="primary"
                size="responsive-lg"
                radius={"full"}
                className="px-4 py-3"
                rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
              >
                Contact us
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <TeamHighlights slides={slideData1} />
            <TeamHighlights slides={slideData2} />
          </div>
        </div>
      </div>
    </section>
  );
}