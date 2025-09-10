import Image from 'next/image';
import { Button } from './ui/Button';
import { ArrowRight, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { PiUserLight } from 'react-icons/pi';

export default function Footer() {
  return (
    <footer className="bg-zarea-secondary text-white">
      <div className="container mx-auto 2xl:px-2 px-4 pt-10 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6">
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Image
                src="/images/logo-footer.svg"
                alt="Zarea Logo"
                width={136}
                height={29}
                className="w-[100px] sm:w-[136px] h-auto"
              />
            </div>
            <div className="my-6 sm:my-8">
              <p className="text-white text-base sm:text-lg lg:text-xl mb-2">
                Zarea is <span className="font-bold italic">Pakistan's leading digital B2B trade platform</span>, connecting verified buyers across high-impact sectors.
              </p>
            </div>
            <ul className='flex items-center gap-4 sm:gap-6 lg:gap-8'>
              <li>
              <Link href="#" className="text-white hover:text-zarea-primary-orange transition-colors">
                <Search className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1} />
                </Link>
              </li>
              <li>
              <Link href="#" className="text-white hover:text-zarea-primary-orange transition-colors">
             <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1} />
             </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-zarea-primary-orange transition-colors">
                <PiUserLight className="w-5 h-5 sm:w-6 sm:h-6" /></Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg font-medium">
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">Home</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">Trade with Zarea</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">Shop Now</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">Investor</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">News & Updates</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">How we Create Impact</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Social Links</h4>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg font-medium">
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">X (Twitter)</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-white hover:text-zarea-primary-orange transition-colors">Youtube</a></li>
            </ul>
          </div>

          {/* Registered Office */}
          <div className="lg:col-span-2">
            <h4 className="text-white/40 font-semibold text-base sm:text-lg mb-2">Registered Office</h4>
            <p className='text-white text-base sm:text-lg mb-4 sm:mb-6'>Zarea Limited, Delta 6 Office No. 204, Lahore Cantt.</p>

            <h4 className="text-white/40 font-semibold text-base sm:text-lg mb-2">Drop us a line</h4>
            <p className='text-white text-base sm:text-lg mb-4 sm:mb-6'>info@zarea.pk</p>

            <h4 className="text-white/40 font-semibold text-base sm:text-lg mb-2">Call us</h4>
                <p className='text-white text-base sm:text-lg'>+92 325 7111222</p>
          </div>

          {/* Mobile App Section */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="bg-zarea-accent-orange rounded-2xl sm:rounded-3xl relative overflow-hidden">
              <div className='p-4 sm:p-6'>
              <h4 className="text-[#FBEEEB] font-normal text-lg sm:text-xl mb-1.5">Zarea Mobile App</h4>
              <h5 className="text-white font-bold text-xl sm:text-2xl lg:text-[28px] mb-4">Pakistan's Leading B2B Commodity App</h5>
              <Button
                variant="outline"
                size="responsive"
                radius="full"
                rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                className="bg-white/10 border-white text-white hover:bg-white hover:text-zarea-primary-orange mb-6"
              >
                Download the App
              </Button>
              </div>
              <div className='text-center'>
                <Image
                  src="/images/happy-image.png"
                  alt="Zarea Mobile App"
                  width={300}
                  height={300}
                  className='inline-block max-w-[200px] sm:max-w-[250px] h-auto object-contain relative'
                />  
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8 mt-8 sm:mt-12 text-base sm:text-lg font-medium border-t border-[rgba(245,245,245,0.10)]">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mb-4 sm:mb-0">
            <a href="#" className="text-white hover:text-zarea-primary-orange transition-colors text-sm">Terms of Conditions</a>
            <a href="#" className="text-white hover:text-zarea-primary-orange transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white hover:text-zarea-primary-orange transition-colors text-sm">Cookie Policy</a>
          </div>
          <p className="text-white text-sm">
            © 2025 Zarea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}