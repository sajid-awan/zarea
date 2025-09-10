"use client";

import Image from "next/image";

export default function TrustedPartners() {
  const logoImages = [
    "/images/image70.png",
    "/images/image72.png", 
    "/images/image73.png",
    "/images/image74.png",
    "/images/image75.png",
    "/images/image76.png",
    "/images/image77.png",
    "/images/image78.png",
    "/images/image83.png"
  ];

  const logos = logoImages.map((src, i) => (
    <div key={i} className="flex-shrink-0 px-3 sm:px-4 lg:px-6">
      <div className="bg-white rounded flex opacity-50 hover:opacity-100 transition-opacity duration-300 items-center justify-center">
        <Image 
          src={src} 
          alt={`Partner logo ${i + 1}`}
          width={120}
          height={60}
          className="max-w-full w-24 sm:w-32 lg:w-42 h-16 sm:h-20 lg:h-24 max-h-full object-contain"
        />
      </div>
    </div>
  ));

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto 2xl:px-2 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="font-bold text-lg sm:text-xl lg:text-2xl text-black/50">Trusted by leading businesses across Pakistan</p>
        </div>
     
      </div>
      <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos}
            {/* Duplicate set for seamless loop */}
            {logos}
          </div>
        </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}