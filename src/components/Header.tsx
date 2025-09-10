"use client";

import { Search, Bell, User, Menu, X, ShoppingCart, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MarqueeSlider from "./MarqueeSlider";
import { PiUserLight } from "react-icons/pi";
import { Button } from "./ui";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigationLinks = [
    { href: "/", label: "Home" },
    { 
      href: "/about", 
      label: "About Us", 
      hasDropdown: true,
      dropdownItems: [
        { href: "/about/company", label: "Our Company" },
        { href: "/about/team", label: "Our Team" },
        { href: "/about/mission", label: "Mission & Vision" },
        { href: "/about/history", label: "Our History" },
      ]
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
    <header className="w-full absolute top-0 left-0 z-50">
      {/* Top Marquee Slider */}
      <MarqueeSlider 
        items={marketPrices}
        backgroundColor="bg-accent-orange"
        textColor="text-white"
        speed={5000}
        pauseOnHover={true}
      />

      {/* Main Header */}
      <div className=" py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
              <Image
                src="/Logo.svg"
                alt="Zarea Logo"
                width={132}
                height={28}
              />
              
            <div className="hidden lg:flex items-center space-x-8 ms-auto me-8">
              <button className="text-white hover:text-orange-500 transition-colors cursor-pointer">
                <Search className="w-6 h-6" strokeWidth={1} />
              </button>
              <button className="text-white hover:text-orange-500 transition-colors cursor-pointer">
                <ShoppingCart className="w-6 h-6" strokeWidth={1} />
              </button>
              <button className="text-white hover:text-orange-500 transition-colors cursor-pointer">
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
                variant="outline-white" 
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
                className="xl:hidden text-white hover:text-zarea-primary-orange"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/*  MENU LINKS - Desktop */}
      <div className="hidden xl:block border-t border-b border-zarea-border-light/10">
        <div className="container mx-auto 2xl:px-2 px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {navigationLinks.map((link) => {
                const isActive = isClient && (pathname === link.href || 
                  (link.hasDropdown && pathname.startsWith(link.href)));
                
                if (link.hasDropdown) {
                  return (
                    <div key={link.href} className="relative group">
                      <Link 
                        href={link.href}
                        className={`flex items-center 2xl:text-lg text-sm font-medium py-6 transition-colors ${
                          isActive 
                            ? "text-zarea-primary-orange" 
                            : "text-white hover:text-zarea-primary-orange"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isClient && pathname === item.href
                                  ? "text-zarea-primary-orange bg-orange-50"
                                  : "text-gray-700 hover:text-zarea-primary-orange hover:bg-orange-50"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
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
                        : "text-white hover:text-zarea-primary-orange"
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
                  isClient && pathname === "/login"
                    ? "text-white"
                    : "text-zarea-primary-orange hover:text-white"
                }`}
              >
                Login
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-white 2xl:text-base text-sm">EN</span>
                <ChevronDown className="w-4 h-4 text-white" />
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-black/20 z-50 animate-in fade-in duration-300" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-all duration-300 ease-in-out animate-in slide-in-from-right">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <Button 
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <nav className="p-6">
              <div className="space-y-4">
                {navigationLinks.map((link) => {
                  const isActive = isClient && (pathname === link.href || 
                    (link.hasDropdown && pathname.startsWith(link.href)));
                  
                  if (link.hasDropdown) {
                    return (
                      <div key={link.href} className="space-y-2">
                        <Link 
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                            isActive 
                              ? "text-zarea-primary-orange bg-orange-50" 
                              : "text-gray-700 hover:text-zarea-primary-orange hover:bg-orange-50"
                          }`}
                        >
                          {link.label}
                          <ChevronDown className="ml-1 w-4 h-4" />
                        </Link>
                        
                        {/* Mobile Dropdown Items */}
                        <div className="ml-4 space-y-1">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block py-2 px-4 text-sm rounded-lg transition-colors ${
                                isClient && pathname === item.href
                                  ? "text-zarea-primary-orange bg-orange-50"
                                  : "text-gray-600 hover:text-zarea-primary-orange hover:bg-orange-50"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition-colors ${
                        isActive 
                          ? "text-zarea-primary-orange bg-orange-50" 
                          : "text-gray-700 hover:text-zarea-primary-orange hover:bg-orange-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              
              {/* Mobile Login and Language Selector */}
              <div className="mt-8 pt-6 border-t space-y-4">
                <Link 
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isClient && pathname === "/login"
                      ? "text-zarea-primary-orange bg-orange-50"
                      : "text-gray-700 hover:text-zarea-primary-orange hover:bg-orange-50"
                  }`}
                >
                  Login
                </Link>
                <div className="flex items-center justify-between py-3 px-4">
                  <span className="text-gray-700">Language</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-900 font-medium">EN</span>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
      
    </header>
  );
}