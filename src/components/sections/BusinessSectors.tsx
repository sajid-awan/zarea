"use client";

import { IconPaper, IconPowerPlant, IconCement, IconChemical, IconCattle, IconTextile, IconFood, IconFlour, IconDairy, IconRice, IconFeed, IconCorporate, IconBuilder, IconRetail, IconPharma, IconFMCG } from "../icons";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function BusinessSectors() {
  const sectors = [
    { title: "Paper Manufacture", desc: "Reliable raw material sourcing to support continuous operations.", icon: <IconPaper  /> },
    { title: "Power Plants", desc: "Timely procurement of critical supplies for uninterrupted energy.", icon: <IconPowerPlant  /> },
    { title: "Cement Plants", desc: "Streamlined logistics for heavy industrial material handling.", icon: <IconCement  /> },
    { title: "Chemical Industry", desc: "Secure and compliant commodity procurement at scale.", icon: <IconChemical  /> },
    { title: "Cattle Farms", desc: "Quality feed and essentials delivered with reliability.", icon: <IconCattle  /> },
    { title: "Textile Mills", desc: "Consistent access to essential inputs for textile production.", icon: <IconTextile  /> },
    { title: "Food Industry", desc: "Bulk commodity sourcing tailored to your food production needs.", icon: <IconFood  /> },
    { title: "Flour Mills", desc: "High-quality grains and timely delivery for optimized output.", icon: <IconFlour  /> },
    { title: "Dairy Farms", desc: "Access to nutritious feed and farm essentials at scale.", icon: <IconDairy  /> },
    { title: "Rice Mills", desc: "Trusted supplier network for steady raw rice intake.", icon: <IconRice  /> },
    { title: "Feed Mills", desc: "Top-grade ingredients for livestock feed production.", icon: <IconFeed  /> },
    { title: "Corporate Farms", desc: "Procurement support and logistics built for scale and speed.", icon: <IconCorporate  /> },
    { title: "Builder and Contractors", desc: "On-time delivery of materials to keep your sites active.", icon: <IconBuilder  /> },
    { title: "Retail Shops", desc: "Flexible supply options to manage bulk and repeat orders.", icon: <IconRetail  /> },
    { title: "Pharmaceutical", desc: "Trusted sourcing and quality checks to support.", icon: <IconPharma  /> },
    { title: "FMCG", desc: "Seamless procurement and fast delivery to keep your shelves.", icon: <IconFMCG  /> }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h4 className="text-base sm:text-lg lg:text-xl text-zarea-gray uppercase mb-3 sm:mb-4 font-medium">Business zarea cater to</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zarea-black mb-2 sm:mb-4">
          Serving Pakistan's Diverse Business Sectors
          </h2>
          <p className="text-zarea-black max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4 sm:px-0">Whether you're a small shop or a large-scale enterprise, Zarea delivers tailored supply solutions for your industry needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {sectors.map((sector, i) => (
            <div
              key={i}
              role="button"
              className="group bg-white rounded-2xl p-4 sm:p-6 border border-zarea-light-gray hover:bg-zarea-primary-orange/5 hover:border-zarea-primary-orange transition-all cursor-pointer"
            >
              <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  {sector.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-zarea-black mb-2 text-lg sm:text-xl lg:text-2xl transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg font-medium text-zarea-black/50 mt-1">{sector.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <Button variant="primary" radius="full" size="responsive-lg" rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}>Talk to a Specialist</Button>
          <Button variant="outline-secondary" radius="full" size="responsive-lg">Start Sourcing Today</Button>
        </div>
      </div>
    </section>
  );
}