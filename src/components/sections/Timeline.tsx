"use client";

import { useState } from 'react';
import { Tabs, Tab } from '../ui/Tabs';
import Image from 'next/image';

interface TimelineEvent {
  id: string;
  year: string;
  highlight: string;
  title: string;
  description: string;
  image: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: '2020',
    year: '2020',
    highlight: '2020 - FOUNDATION',
    title: 'Zarea was founded with a vision to digitize Pakistan\'s commodity trade.',
    description: 'Started with a small team focused on building the core platform and establishing initial partnerships in the commodity trading sector.',
    image: '/images/timeline.png' 
  },
  {
    id: '2021',
    year: '2021',
    highlight: '2021 - HIGHLIGHT',
    title: 'Onboarded 50+ suppliers, strengthening a diverse and robust supply chain.',
    description: 'Expanded our network significantly by bringing verified suppliers across multiple commodity categories, creating a strong foundation for growth.',
    image: '/images/timeline.png' 
  },
  {
    id: '2022',
    year: '2022',
    highlight: '2022 - EXPANSION',
    title: 'Expanded operations to 15+ cities across Pakistan.',
    description: 'Scaled our operations nationwide, establishing local presence and partnerships to serve customers across major Pakistani cities.',
    image: '/images/timeline.png' 
  },
  {
    id: '2023',
    year: '2023',
    highlight: '2023 - GROWTH',
    title: 'Achieved 10,000+ successful transactions and partnerships.',
    description: 'Reached a major milestone in transaction volume while forming strategic partnerships with leading industry players and financial institutions.',
    image: '/images/timeline.png' 
  },
  {
    id: '2024',
    year: '2024',
    highlight: '2024 - INNOVATION',
    title: 'Launched advanced AI-powered trade matching and analytics.',
    description: 'Introduced cutting-edge technology solutions including AI-driven supplier matching, predictive analytics, and automated trade facilitation.',
    image: '/images/timeline.png' 
  },
  {
    id: '2025',
    year: '2025',
    highlight: '2025 - FUTURE',
    title: 'Expanding internationally and launching new financial products.',
    description: 'Setting our sights on regional expansion while introducing innovative financial solutions to further empower SMEs in commodity trading.',
    image: '/images/timeline.png' 
  }
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('2021');

  const tabs: Tab[] = timelineData.map(event => ({
    id: event.id,
    label: event.year
  }));

  const activeEvent = timelineData.find(event => event.id === activeTab);

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto 2xl:px-2 px-4">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="max-w-3xl">
            <h2 className="text-[32px] md:text-4xl lg:text-5xl font-bold text-zarea-black leading-[120%] mb-8 sm:mb-12">
              Our Timeline
            </h2>
            
            {/* Timeline Tabs */}
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              variant="underline"
              size="default"
              className="mb-8 sm:mb-12"
            />
          </div>

          {/* Timeline Content */}
          {activeEvent && (
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-[50px] items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="">
                  <p className="text-sm sm:text-xl text-zarea-primary-orange uppercase font-medium mb-4">
                    {activeEvent.highlight}
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-zarea-black leading-[120%]">
                    {activeEvent.title}
                  </h3>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-zarea-secondary h-[300px] sm:h-[400px] lg:h-[500px]">
                  <Image 
                    src={activeEvent.image} 
                    alt={`Timeline ${activeEvent.year}`} 
                    width={600} 
                    height={500} 
                    className="object-cover w-full h-full transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,' + btoa(`
                        <svg width="600" height="500" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#f3f4f6"/>
                          <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="24" fill="#6b7280">
                            ${activeEvent.year} Timeline
                          </text>
                        </svg>
                      `);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}