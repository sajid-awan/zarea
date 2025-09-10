"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import CustomCheckbox from '../ui/CustomCheckbox';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    companyName: '',
    interest: '',
    message: '',
    agreedToPolicy: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreedToPolicy: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-[linear-gradient(0deg,#F5F5F5_0%,#F5F5F5_100%,#FFF)] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className='pt-10 sm:pt-16 lg:pt-20 flex flex-col h-full'>
            <div className='flex-1'>
            <div className="mb-8 sm:mb-12 lg:mb-20">
              <h4 className="text-sm sm:text-base lg:text-xl text-zarea-gray uppercase mb-3 sm:mb-4 font-medium">CONTACT US</h4>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-zarea-black mb-2">
                Let's simplify your buying, selling, or investing journey
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-zarea-black leading-relaxed">
                Whether you're a supplier, buyer, or investor, our team 
                is here to guide you every step of the way
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-zarea-black leading-[150%] mb-2">Address</h3>
                <p className="text-zarea-black text-sm sm:text-base lg:text-lg leading-relaxed">
                  Zarea Limited, Delta 6 Office No. 6011,<br />
                  NASTP, Abid Majeed Road Lahore Cantt.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-zarea-black leading-[150%] mb-2">WhatsApp Support</h3>
                <p className="text-zarea-black text-sm sm:text-base lg:text-lg leading-relaxed">+92 325 7111222</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-zarea-black leading-[150%] mb-2">Landline Number</h3>
                <p className="text-zarea-black text-sm sm:text-base lg:text-lg leading-relaxed">042 32176455</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-zarea-black leading-[150%] mb-2">Email</h3>
                <p className="text-zarea-black text-sm sm:text-base lg:text-lg leading-relaxed">info@zarea.pk</p>
              </div>
            </div>
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-12">
              <Image
                src="/images/map.png"
                alt="Location Map"
                width={857}
                height={400}
                className="max-w-full h-auto object-contain relative -left-4 sm:-left-8 lg:-left-14"
              />
            </div>

          
          </div>
    <div className='py-10 sm:py-16 lg:py-20'>
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12.5 border border-graphite-navy-50">
            <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-zarea-black mb-4 sm:mb-6 lg:mb-8">Book a Schedule with Our Experts</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="First name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  rounded="full"
                  className="bg-black/[0.03]"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Your work email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  rounded="full"
                  className="bg-black/[0.03]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  rounded="full"
                  className="bg-black/[0.03]"
                  required
                />
                <Input
                  label="Location"
                  type="text"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  rounded="full"
                  className="bg-black/[0.03]"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Company Name"
                  type="text"
                  placeholder="xyz company"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  rounded="full"
                  className="bg-black/[0.03]"
                  required
                />
                <Select
                  label="I am Interested in"
                  value={formData.interest}
                  onChange={(e) => handleInputChange('interest', e.target.value)}
                  placeholder="Select"
                  rounded="full"
                  className="bg-black/[0.03]"
                  required
                  options={[
                    { value: "logistics", label: "Logistics Support" },
                    { value: "credit", label: "Credit & Financing" },
                    { value: "import-export", label: "Import/Export" },
                    { value: "analytics", label: "Data Analytics" },
                    { value: "buying", label: "Buying Commodities" },
                    { value: "selling", label: "Selling Commodities" },
                    { value: "investing", label: "Investment Opportunities" }
                  ]}
                />
              </div>

              <Textarea
                label="Message"
                placeholder="Feel Free to Write"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rounded="xl"
                rows={4}
                className="bg-black/[0.03]"
              />

              <CustomCheckbox
                id="privacy-policy"
                checked={formData.agreedToPolicy}
                onChange={handleCheckboxChange}
                label="I acknowledge, read, and understood Privacy Policy."
                className="mb-6"
              />

              <Button
                type="submit"
                variant="primary"
                size="responsive-lg"
                radius="full"
                className="w-full"
                rightIcon={<ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6'/>
                }
              >
                Book Your Free Consultation
              </Button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}