"use client";

import {
  Search,
  Menu,
  X,
  ShoppingCart,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MarqueeSlider from "./MarqueeSlider";
import { PiUserLight } from "react-icons/pi";
import { Button } from "./ui";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isMegaMenuHovered, setIsMegaMenuHovered] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const renderIcon = (iconType: string) => {
    const iconClass = "w-5 h-5 text-orange-500";

    switch (iconType) {
      case "circle-dashed":
        return (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 91 91"
        >
          <path
            fill="#D45A33"
            d="m32.63 48.22-9.94-8.31L9.46 69.77 21.69 85.5l12.33-3.97-12.23-15.74z"
          ></path>
          <path
            fill="#D45A33"
            d="m16.05 39.01 20.49-2.48.31-12.96-31.6 8.28L.57 51.22l10.8 7.16z"
          ></path>
          <path
            fill="#D45A33"
            d="M33.41 17.82 48.12 32.3l10.32-7.84L32.28 4.91l-18.07 8.42 1.14 12.91z"
          ></path>
          <path
            fill="#D45A33"
            d="m58.66 38.71 12.56 3.18-1.03-32.64L52.34.38l-9.39 8.93 17.85 8.87z"
          ></path>
          <path
            fill="#D45A33"
            d="m60.21 50.95 5.34 11.8 24.88-21.16-4.19-19.49-12.84-1.76 4.19 19.48z"
          ></path>
          <path
            fill="#D45A33"
            d="m71.15 66.44-19.54-6.65-5.9 11.54 32.06 6.25 12.62-15.42-6.62-11.14z"
          ></path>
          <path
            fill="#D45A33"
            d="m39.33 58.58-12.7 2.58 15.1 28.96 19.93.26 4.58-12.13L46.31 78z"
          ></path>
        </svg>
        );
      case "shield":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#000911"
              strokeWidth="1.5"
              d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"
            ></path>
            <path
              stroke="#000911"
              strokeWidth="1.5"
              d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 15c0 1.105 0 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2Z"
            ></path>
          </svg>
        );
      case "user":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000911"
              fillRule="evenodd"
              d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c0 1.162-.002 2.62 1.277 3.662.63.512 1.51.877 2.7 1.117 1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117 1.28-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836-1.58-.888-3.71-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528 1.316-.74 3.184-1.222 5.29-1.222 2.104 0 3.972.482 5.288 1.222 1.34.753 1.961 1.677 1.961 2.528 0 1.308-.04 2.044-.724 2.6-.37.302-.99.597-2.05.811-1.057.214-2.502.339-4.476.339s-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81-.684-.557-.724-1.293-.724-2.601"
              clipRule="evenodd"
            ></path>
          </svg>
        );
      case "star":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#000911"
              strokeWidth="1.5"
              d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.69.835 3.982 1.776.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18-.107.345-.07.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.98-.452-1.328-.452-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46-.106-.345-.345-.624-.82-1.18l-.435-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.7-.158 1.048-.237 1.33-.45.28-.213.46-.536.82-1.182z"
            ></path>
          </svg>
        );
      case "users":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000911"
              d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547 9.005 9.005 0 0 1 5.9 8.18.751.751 0 0 1-1.5.045 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.044 9.005 9.005 0 0 1 5.9-8.181A5.5 5.5 0 0 1 3.5 8M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m8.29 4q-.22 0-.434.03a.75.75 0 1 1-.212-1.484 4.53 4.53 0 0 1 3.38 8.097 6.69 6.69 0 0 1 3.956 6.107.75.75 0 0 1-1.5 0 5.19 5.19 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8"
            ></path>
          </svg>
        );
      case "location":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#000911"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12.56 20.82a.96.96 0 0 1-1.12 0C6.61 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181 5.18 5.116.056 12.195-4.773 15.639"
            ></path>
            <path
              stroke="#000911"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            ></path>
          </svg>
        );
      default:
        return <div className="w-5 h-5 bg-orange-500 rounded-full"></div>;
    }
  };

  const navigationLinks = [
    { href: "/", label: "Home" },
    {
      href: "/about",
      label: "About Us",
      hasDropdown: true,
      dropdownItems: [
        {
          href: "/about/who-we-are",
          label: "Who We Are",
          description: "Zarea's journey, mission, and values.",
          icon: "circle-dashed",
        },
        {
          href: "/about/board-of-directors",
          label: "Board of Directors",
          description: "Meet the leaders shaping Zarea's",
          icon: "shield",
        },
        {
          href: "/about/management",
          label: "Our Management",
          description: "Get to know the team",
          icon: "user",
        },
        {
          href: "/about/impact",
          label: "Our Impact",
          description: "See how Zarea Impact",
          icon: "star",
        },
        {
          href: "/about/communities",
          label: "Our Communities",
          description: "Ecosystems & Zarea Networks",
          icon: "users",
        },
        {
          href: "/about/offices",
          label: "Offices & Locations",
          description: "Find our presence",
          icon: "location",
        },
      ],
    },
    { href: "/business", label: "Business with Zarea" },
    { href: "/shop", label: "Shop Now" },
    { href: "/investor", label: "Investor Relation" },
    { href: "/services", label: "Services" },
    { href: "/daily-price", label: "Daily Price" },
    { href: "/news", label: "News & Updates" },
    { href: "/impact", label: "How we Create Impact" },
  ];

  const marketPrices = [
    "Wheat (PKR/40kg) 3,200 ↑ +1.8%",
    "Cotton (PKR/maund) 19,500 ↓ -0.5%",
    "Sugar (PKR/50kg) 9,200 ↑ +2.1%",
    "Fertilizer - Urea (PKR/bag) 3,100 — 0.0%",
    "Maize (PKR/40kg) 2,850 ↑ +1.3%",
    "Paddy Rice (PKR/40kg) 2,600 ↓ -0.8%",
  ];

  return (
    <header className={`w-full ${pathname === '/' ? 'absolute' : 'relative'} top-0 left-0 z-50`}>
      <MarqueeSlider
        items={marketPrices}
        backgroundColor="bg-accent-orange"
        textColor="text-white"
        speed={5000}
        pauseOnHover={true}
      />
      <div className={`py-4 transition-colors duration-200 ${isMegaMenuHovered || openSubmenu ? 'bg-white' : ''}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Image 
              src={isMegaMenuHovered || openSubmenu ? "/zarea-logo.svg" : isHomePage ? "/Logo.svg" : "/zarea-logo.svg"} 
              alt="Zarea Logo" 
              width={132} 
              height={28} 
            />

            <div className="hidden lg:flex items-center space-x-8 ms-auto me-8">
              <button className={`${isMegaMenuHovered || openSubmenu ? 'text-zarea-black' : isHomePage ? 'text-white' : 'text-zarea-black'} hover:text-orange-500 transition-colors cursor-pointer`}>
                <Search className="w-6 h-6" strokeWidth={1} />
              </button>
              <button className={`${isMegaMenuHovered || openSubmenu ? 'text-zarea-black' : isHomePage ? 'text-white' : 'text-zarea-black'} hover:text-orange-500 transition-colors cursor-pointer`}>
                <ShoppingCart className="w-6 h-6" strokeWidth={1} />
              </button>
              <button className={`${isMegaMenuHovered || openSubmenu ? 'text-zarea-black' : isHomePage ? 'text-white' : 'text-zarea-black'} hover:text-orange-500 transition-colors cursor-pointer`}>
                <PiUserLight className="w-6 h-6" />
              </button>
            </div>

            <div className="inline-flex items-center gap-2 lg:gap-3">
              <Button
                variant="primary"
                radius="full"
                size="xl"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="hidden md:flex"
              >
                Talk to Expert
              </Button>
              <Button
                variant={isMegaMenuHovered || openSubmenu ? "outline" : isHomePage ? "outline-white" : "outline"}
                radius="full"
                size="xl"
                className="hidden sm:flex"
              >
                Create an Account
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`xl:hidden ${isHomePage ? 'text-white' : 'text-zarea-black'} hover:text-zarea-primary-orange`}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={`hidden relative xl:block border-t ${isMegaMenuHovered ? 'bg-white' :''} border-b border-zarea-border-light/10 transition-colors duration-200`}>
        <div className="container mx-auto 2xl:px-2 px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {navigationLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.hasDropdown && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.href} 
                      className="group"
                      onMouseEnter={() => setIsMegaMenuHovered(true)}
                      onMouseLeave={() => setIsMegaMenuHovered(false)}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center 2xl:text-lg text-sm font-medium py-6 transition-colors ${
                          isActive
                            ? "text-zarea-primary-orange"
                            : isMegaMenuHovered || openSubmenu
                              ? "text-zarea-black hover:text-zarea-primary-orange"
                              : isHomePage
                                ? "text-white hover:text-zarea-primary-orange"
                                : "text-zarea-black hover:text-zarea-primary-orange"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </Link>
                      <div className={`absolute top-full left-0 right-0  bg-white shadow-xl transition-all duration-200 z-50 ${isMegaMenuHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                       <div className="container mx-auto">
                        <div className="px-6 py-4 grid grid-cols-3 gap-6 group-hover:bg-white transition-colors duration-200">
                          <div className="space-y-8 col-span-2">
                            <div>
                            <h2 className="text-zarea-black text-[32px] font-bold leading-[120%] mb-3">About Zarea</h2>
                            <p className="text-zarea-black text-xl leading-[125%]">shaping the future of trade and commerce with Zarea.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            {link.dropdownItems?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-start gap-4 py-3 px-3 rounded transition-colors group/item hover:bg-accent-orange-50"
                              >
                                <div className="w-12 h-12 rounded-lg bg-zarea-light-gray flex items-center justify-center flex-shrink-0">
                                  {renderIcon(item.icon || "default")}
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-medium text-lg text-zarea-black">
                                    {item.label}
                                  </h3>
                                  <p className="text-sm text-[#7A7E84]">{item.description}</p>
                                </div>
                              </Link>
                            ))}
                            </div>
                            </div>
                            <div className="mt-8 p-6 bg-zarea-accent-orange min-h-[409px] rounded-3xl text-white relative overflow-hidden">
                              <div className="relative z-10">
                                <p className="text-xl font-medium mb-2">Over <span className="italic font-bold">10,000+</span> Users</p>
                                <h3 className="text-[28px] font-bold leading-[120%]  max-w-[300px] mb-2">
                                  Built to Bridge the Gap Between Buyers and Suppliers.
                                </h3>
                                <Button
                                  variant="outline-white"
                                  size="lg"
                                  radius="full"
                                  href="/join"
                                  className="inline-flex items-center gap-2 mt-4 text-white font-medium hover:text-zarea-primary-orange transition-colors"
                                >
                                  Join Zarea
                                  <ArrowRight className="w-5 h-5" />
                                </Button>
                              </div>
                              <div className="absolute bottom-0 right-0">
                                <Image
                                  src="/images/menu-image.png"
                                  alt="Menu background"
                                  width={400}
                                  height={232}
                                  className="object-cover"
                                />
                              </div>
                            </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`2xl:text-lg text-sm  py-6 font-medium transition-colors ${
                      isActive
                        ? "text-zarea-primary-orange"
                        : isMegaMenuHovered || openSubmenu
                          ? "text-zarea-black hover:text-zarea-primary-orange"
                          : isHomePage
                            ? "text-white hover:text-zarea-primary-orange"
                            : "text-zarea-black hover:text-zarea-primary-orange"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center 2xl:space-x-8 space-x-4 p-8 min-h-[86px] border-l border-zarea-border-light/10 h-full">
              <Link
                href="/login"
                className={`2xl:text-lg text-sm  font-medium transition-colors ${
                  pathname === "/login"
                    ? isHomePage ? "text-white" : "text-zarea-black"
                    : isHomePage ? "text-zarea-primary-orange hover:text-white" : "text-zarea-primary-orange hover:text-zarea-black"
                }`}
              >
                Login
              </Link>
              <div className="flex items-center space-x-2">
                <span className={`${isHomePage ? 'text-white' : 'text-zarea-black'} 2xl:text-base text-sm`}>EN</span>
                <ChevronDown className={`w-4 h-4 ${isHomePage ? 'text-white' : 'text-zarea-black'}`} />
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        className={`xl:hidden fixed inset-0 bg-black/20 z-50 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className={`fixed top-0 right-0 h-full sm:w-80 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out overflow-y-auto flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
            <div className="flex items-center justify-between py-6 px-4">
              <Image
                src="/Logo2.svg"
                alt="Zarea Logo"
                width={100}
                height={22}
              />
              <div className="flex items-center gap-4">
                <button className=" hover:text-orange-500 transition-colors cursor-pointer">
                  <Search className="w-6 h-6" strokeWidth={1} />
                </button>
                <button className=" hover:text-orange-500 transition-colors cursor-pointer">
                  <ShoppingCart className="w-6 h-6" strokeWidth={1} />
                </button>
                <button className=" hover:text-orange-500 transition-colors cursor-pointer">
                  <PiUserLight className="w-6 h-6" />
                </button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className=" hover:text-orange-500  transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <nav className="flex-1 flex flex-col">
              <div className="px-4">
                {navigationLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.hasDropdown && pathname.startsWith(link.href));

                  if (link.hasDropdown) {
                    return (
                      <div key={link.href}>
                        <button
                          onClick={() => setOpenSubmenu(link.href)}
                          className={`w-full flex items-center py-3 border-b border-zarea-border-light  rounded-lg transition-colors ${
                            isActive
                              ? "text-zarea-primary-orange"
                              : "text-gray-700 hover:text-zarea-primary-orange "
                          }`}
                        >
                          {link.label}
                          <ChevronRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 border-b border-zarea-border-light last-of-type:border-b-0   transition-colors ${
                        isActive
                          ? "text-zarea-primary-orange"
                          : "text-gray-700 hover:text-zarea-primary-orange hover:bg-orange-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-auto">
                <div className="flex flex-col items-center justify-center py-3 px-4 gap-3">
                  <button className="flex items-center space-x-2">
                    <span className="text-gray-900 font-medium">EN</span>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </button>
                  <Button
                    variant="primary"
                    radius="full"
                    size="lg"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Talk To Expert
                  </Button>

                  <Button
                    variant="outline"
                    radius="full"
                    size="lg"
                    className="w-full"
                  >
                    Create an Account
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>

      {/* Mobile Submenu Full Screen Overlay */}
      <div
        className={`xl:hidden fixed inset-0 bg-black/50 z-[60] transition-all duration-300  ${
          openSubmenu ? "opacity-100 translate-x-0 visible" : "opacity-0 invisible translate-x-full"
        }`}
        onClick={() => setOpenSubmenu(null)}
      >
        <div
          className={`fixed top-0 px-4 right-0 h-full w-full bg-white shadow-lg transform overflow-auto transition-all duration-300 ease-in-out ${
            openSubmenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between  py-3 border-b border-zarea-border-light bg-white sticky z-10 top-0">
            <div className="inline-flex items-center gap-2">
              <button onClick={() => {
                setOpenSubmenu(null);
                setIsMenuOpen(true);
              }}>
                <ArrowLeft className="w-6 h-6 text-zarea-black " />
              </button>
              <h2 className="text-xl font-bold text-zarea-black">
                About Zarea
              </h2>
            </div>
            <button onClick={() => setOpenSubmenu(null)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className=" py-4">
            {navigationLinks
              .find((link) => link.href === openSubmenu)
              ?.dropdownItems?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setOpenSubmenu(null);
                  }}
                  className="flex items-start gap-4 py-3 rounded-xl transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-zarea-light-gray  flex items-center justify-center flex-shrink-0">
                    {renderIcon(item.icon || "default")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg text-zarea-black group-hover:text-zarea-primary-orange">
                      {item.label}
                    </h3>
                    <p className="text-sm text-[#7A7E84]">{item.description}</p>
                  </div>
                </Link>
              ))}

            <div className="mt-8 p-6 bg-zarea-accent-orange rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-sm font-medium mb-2">Over <span className="italic font-bold">10,000+</span> Users</p>
                <h3 className="text-xl font-bold mb-2 tracking-[-0.6px] mb-1">
                  Built to Bridge the Gap Between Buyers and Suppliers.
                </h3>
                <Link
                  href="/join"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setOpenSubmenu(null);
                  }}
                  className="inline-flex items-center gap-2 mt-4 text-white font-medium hover:text-zarea-primary-orange transition-colors"
                >
                  Join Zarea
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 ">
                <Image
                  src="/images/menu-image.png"
                  alt="Menu background"
                  width={190}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
      
    </header>
  );
}
