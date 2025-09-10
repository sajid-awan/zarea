"use client";

import React, { useEffect, useState, useRef } from "react";
import { User, CheckCircle, Search, FileText, CreditCard } from "lucide-react";

export default function JourneySteps() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      step: "STEP 1",
      title: "Register & Verify",
      subtitle: "Create your business profile and get verified to access the full marketplace.",
      getIcon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 50 50"
          className="transition-all duration-500"
        >
          <g clipPath="url(#clip0_4039_56)">
            <path
              stroke={isActive ? "#F46600" : "#0E2437"}
              strokeLinejoin="round"
              strokeWidth="3.333"
              d="m13.333 25 10 8.333 13.334-16.666M25 1.667 1.667 15v2.4A32.17 32.17 0 0 0 25 48.333 32.17 32.17 0 0 0 48.333 17.4V15z"
              className="transition-all duration-500"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_4039_56">
              <path fill="#fff" d="M0 0h50v50H0z"></path>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      step: "STEP 2",
      title: "Explore & Connect",
      subtitle: "Explore a wide range of verified commodities tailored to your business needs.",
      getIcon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 50 50"
          className="transition-all duration-500"
        >
          <path
            fill={isActive ? "#F46600" : "#0E2437"}
            d="M6.25 25q0-3.884 1.48-7.304t4.014-5.952q2.53-2.535 5.952-4.015Q21.116 6.25 25 6.25q6.855 0 11.938 4.267 5.082 4.266 6.343 10.729.126.525-.073.99t-.683.537a.95.95 0 0 1-.808-.256 1.57 1.57 0 0 1-.448-.792 16.4 16.4 0 0 0-3.392-7.383q-2.627-3.255-6.627-4.836v.91q0 1.72-1.223 2.944-1.222 1.226-2.944 1.223h-4.166v4.167q0 .885-.6 1.485t-1.484.598h-4.166V25h2.164q.723 0 1.202.48.48.479.48 1.203v4.567H18.75l-10-10q-.157.938-.285 1.875A14 14 0 0 0 8.333 25q0 6.596 4.454 11.396t11.126 5.248q.475.023.78.32a1 1 0 0 1 .307.744.96.96 0 0 1-.337.744 1.1 1.1 0 0 1-.813.275q-7.408-.462-12.504-5.846Q6.25 32.498 6.25 25m36.813 17.452-6.453-6.37a7.9 7.9 0 0 1-2.023 1.04 7 7 0 0 1-2.295.378q-3.065 0-5.177-2.112Q25 33.27 25 30.208t2.115-5.177q2.115-2.114 5.177-2.114t5.179 2.114 2.112 5.177q0 1.246-.395 2.355a7.6 7.6 0 0 1-1.105 2.043l6.452 6.371a.92.92 0 0 1 .334.717q0 .425-.334.758a.97.97 0 0 1-.716.292q-.424 0-.757-.292m-10.771-7.035q2.187 0 3.698-1.51 1.51-1.511 1.51-3.699t-1.51-3.698Q34.48 25 32.292 25t-3.698 1.51-1.51 3.698 1.51 3.698q1.51 1.51 3.698 1.51"
            className="transition-all duration-500"
          ></path>
        </svg>
      )
    },
    {
      step: "STEP 3",
      title: "Transact with Confidence",
      subtitle: "Engage with trusted suppliers, negotiate deals, and finalize contracts seamlessly.",
      getIcon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 50 50"
          className="transition-all duration-500"
        >
          <path
            stroke={isActive ? "#F46600" : "#0E2437"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.125"
            d="M39.583 21.875v-1.042c0-7.856 0-11.785-2.441-14.225-2.442-2.44-6.37-2.441-14.225-2.441-7.857 0-11.786 0-14.225 2.441-2.44 2.442-2.442 6.37-2.442 14.225v9.375c0 6.848 0 10.273 1.892 12.58q.52.633 1.154 1.154c2.308 1.891 5.729 1.891 12.579 1.891m-7.292-31.25H31.25m-16.667 8.334h8.334"
            className="transition-all duration-500"
          ></path>
          <path
            stroke={isActive ? "#F46600" : "#0E2437"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.125"
            d="m37.5 38.542-3.125-1.146v-5.104M25 36.458a9.376 9.376 0 0 0 18.036 3.588 9.376 9.376 0 0 0-15.29-10.217A9.38 9.38 0 0 0 25 36.46"
            className="transition-all duration-500"
          ></path>
        </svg>
      )
    },
    {
      step: "STEP 4",
      title: "Pay & Grow",
      subtitle: "Manage logistics, track deliveries, and settle payments — all in one platform.",
      getIcon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 50 50"
          className="transition-all duration-500"
        >
          <path
            stroke={isActive ? "#F46600" : "#0E2437"}
            strokeWidth="3.125"
            d="M4.167 25c0-7.856 0-11.785 2.441-14.225 2.442-2.44 6.369-2.442 14.225-2.442h8.334c7.856 0 11.785 0 14.225 2.442S45.833 17.144 45.833 25s0 11.785-2.441 14.225c-2.442 2.44-6.37 2.442-14.225 2.442h-8.334c-7.856 0-11.785 0-14.225-2.442S4.167 32.856 4.167 25Z"
            className="transition-all duration-500"
          ></path>
          <path
            stroke={isActive ? "#F46600" : "#0E2437"}
            strokeLinecap="round"
            strokeWidth="3.125"
            d="M20.833 33.333H12.5m16.667 0h-3.125m-21.875-12.5h41.666"
            opacity="0.5"
            className="transition-all duration-500"
          ></path>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          let stepIndex = 0;
          const interval = setInterval(() => {
            setActiveStep(stepIndex);
            stepIndex++;
            if (stepIndex >= steps.length) {
              clearInterval(interval);
            }
          }, 800); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto 2xl:px-2 px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 lg:mb-20 max-w-[800px]">
          <h4 className="text-sm sm:text-base lg:text-xl text-zarea-gray uppercase mb-3 sm:mb-4 font-medium">Business with Zarea</h4>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">Start your journey in 4 simple steps to scale smarter and faster.</h2>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            {steps.map((item, i) => {
              const isActive = activeStep >= i;
              
              return (
                <div 
                  key={i} 
                  className={`w-full md:w-1/4 flex flex-col items-center md:items-start md:text-left text-center p-4 sm:p-6 lg:p-8 relative after:absolute after:content-[''] after:block after:w-full after:h-[3px] after:top-8 sm:after:top-10 lg:after:top-12 last-of-type:after:content-[none] transition-all duration-500 ${
                    isActive ? "after:bg-zarea-primary-orange after:opacity-100" : "after:bg-zarea-primary-orange/5 after:opacity-30"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 border-[4px] mb-3 transition-all duration-500 ${
                      isActive ? "bg-white border-zarea-primary-orange" : "bg-white border-zarea-secondary"
                    }`}
                    aria-hidden
                  >
                  </div>
                  <div className={`mt-2 sm:mt-3 text-sm sm:text-base font-medium transition-all duration-500 ${
                    isActive ? "text-zarea-primary-orange" : "text-zarea-gray"
                  }`}>
                    {item.step}
                  </div>
                  <div className="mt-3 sm:mt-4 lg:mt-6 transition-all duration-500">
                    {item.getIcon(isActive)}
                  </div>
                  <div className="max-w-xs">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold my-2 text-zarea-black">{item.title}</h3>
                    <p className="text-sm sm:text-base lg:text-xl font-medium text-zarea-black/50">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}