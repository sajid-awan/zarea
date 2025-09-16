"use client";

import { Button } from "../ui/Button";
import Image from "next/image";

export default function ZareaServices() {
  const services = [
    {
      title: "Logistics Support",
      desc: "Reliable delivery and end-to-end tracking to simplify your supply chain.",
      buttonText: "Learn More",
      bgColor: "bg-gray-50",
      textColor: "text-zarea-black",
      image: "/images/z-1.png"
    },
    {
      title: "Credit & Financing",
      desc: "Flexible credit solutions to help your business grow without cash delays.",
      buttonText: "Apply Now",
      bgColor: "bg-zarea-success/10",
      textColor: "text-zarea-black",
      image: "/images/z-2.png"
    },
    {
      title: "Import/Export",
      desc: "Global trade to facilitate seamless importing and exporting of commodities.",
      buttonText: "Request Quote",
      bgColor: "bg-zarea-primary-orange/5",
      textColor: "text-zarea-black",
      image: "/images/z-3.png"
    },
    {
      title: "Data Analytics",
      desc: "Gain valuable insights to drive informed decisions with our data analytics services.",
      buttonText: "Contact us",
      bgColor: "bg-zarea-secondary/10",
      textColor: "text-zarea-black",
      image: "/images/z-4.png"
    }
  ];

  return (
    <section className="py-6 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 lg:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4">
          <div>
          <h4 className="text-sm sm:text-base lg:text-xl text-zarea-gray uppercase mb-3 sm:mb-4 font-medium">SERVICE WE PROVIDE</h4>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-zarea-black mb-2">
            Zarea Services – Built for Scale, Speed & Trust
          </h2>
          </div>
          <Button 
            variant="primary" 
            size="responsive-lg" 
            radius="full" 
            className="min-w-[160px] sm:min-w-[198px] px-4 self-start lg:self-center lg:justify-self-end mt-4 lg:mt-0"
          >
          Contact us 
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <div key={i} className={`rounded-3xl  flex items-start flex-col h-full border border-graphite-navy-50 hover:border-accent-orange-50 bg-[linear-gradient(180deg,#FFF_0%,#E7E9EB_100%)] group hover:bg-[linear-gradient(180deg,#FFF_0%,#FBEEEB_100%)] hover:-translate-y-1 transition-all`}>
              <div className="flex-1 mb-8">
                <div className="px-4 sm:px-6 pt-4 sm:pt-6">
                <h3 className={`text-xl sm:text-2xl text-zarea-black font-bold mb-3 sm:mb-4`}>
                  {service.title}
                </h3>
                <p className={`text-sm sm:text-base lg:text-lg font-medium text-zarea-black/50 leading-relaxed`}>
                  {service.desc}
                </p>
                </div>
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <Image
                    src={service.image}
                    alt=""
                    width={200}
                    height={150}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="mt-auto px-4 sm:px-6 pb-4 sm:pb-6 text-center w-full">
                <Button 
                  variant="secondary" 
                  radius="full" 
                  size="responsive"
                  className="min-w-[160px] sm:min-w-[204px] group-hover:bg-zarea-primary-orange"
                >
                  {service.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}