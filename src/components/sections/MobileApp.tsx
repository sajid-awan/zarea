"use client";

import Image from "next/image";

export default function MobileApp() {
  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/mobile-call.png)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
            <div className="p-4 sm:p-6 lg:p-8 xl:p-20 text-white">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <span className="text-sm sm:text-base lg:text-xl font-medium uppercase block mb-3 sm:mb-4">
                  ZAREA MOBILE APPLICATION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                  Pakistan's Leading B2B Commodity App
                </h2>
                <p className="text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 lg:mb-12.5">
                  From sourcing to delivery, Zarea simplifies your procurement lifecycle.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/app-store.png"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="h-10 sm:h-12 w-auto"
                  />
                </a>
                <a
                  href="#"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <Image
                    src="/images/google-play.png"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="h-10 sm:h-12 w-auto"
                  />
                </a>
              </div>
            </div>
            <div className="relative h-full flex flex-col justify-end items-end pl-4 sm:pl-6 lg:pl-8 pr-8 sm:pr-16 lg:pr-28 pt-8 lg:pt-0">              
                <Image
                  src="/images/phone-mockup.png"
                  alt="Zarea Mobile App Screenshots"
                  width={260}
                  height={600}
                  className="max-w-[200px] sm:max-w-[260px] lg:max-w-[340px] w-full h-auto drop-shadow-2xl"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}