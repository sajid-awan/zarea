"use client";

import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

export default function IndustryLeaders() {
  const partners: Partner[] = [
    { name: "Partner 1", logo: "/images/image70.png" },
    { name: "Partner 2", logo: "/images/image72.png" },
    { name: "Partner 3", logo: "/images/image73.png" },
    { name: "Partner 4", logo: "/images/image74.png" },
    { name: "Partner 5", logo: "/images/image75.png" },
    { name: "Partner 6", logo: "/images/image76.png" },
    { name: "Partner 7", logo: "/images/image77.png" },
    { name: "Partner 8", logo: "/images/image78.png" },
    { name: "Partner 9", logo: "/images/image83.png" },
    { name: "Partner 10", logo: "/images/image70.png" },
    { name: "Partner 11", logo: "/images/image72.png" },
    { name: "Partner 12", logo: "/images/image73.png" },
    { name: "Partner 13", logo: "/images/image74.png" },
    { name: "Partner 14", logo: "/images/image75.png" },
    { name: "Partner 15", logo: "/images/image76.png" },
    { name: "Partner 16", logo: "/images/image77.png" },
    { name: "Partner 17", logo: "/images/image78.png" },
    { name: "Partner 18", logo: "/images/image83.png" },
    { name: "Partner 19", logo: "/images/image70.png" },
    { name: "Partner 20", logo: "/images/image72.png" },
    { name: "Partner 21", logo: "/images/image73.png" },
    { name: "Partner 22", logo: "/images/image83.png" },
    { name: "Partner 23", logo: "/images/image70.png" },
    { name: "Partner 24", logo: "/images/image72.png" },
    { name: "Partner 25", logo: "/images/image73.png" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-[1172px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-2xl font-bold text-zarea-gray mb-4">Trusted by Industry Leaders</p>
        </div>

        <div className="flex flex-wrap text-center items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
        className="w-[14.28%]"     >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={110}
                className="max-w-full max-h-full h-full object-contain inline-block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,' + btoa(`
                    <svg width="120" height="80" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="#f3f4f6"/>
                      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="12" fill="#6b7280">
                        ${partner.name}
                      </text>
                    </svg>
                  `);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}