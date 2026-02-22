"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../sections/Footer';

import { SERVICES_CONTENT } from '../../constants';
import { FadeIn } from '../../components/Section';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ServiceModal from '@/components/ServiceModal';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="text-center mb-20 px-6">
          {/* <FadeIn> */}
            <span className="text-brand-orange text-sm uppercase tracking-widest font-semibold block mb-3">Our Expertise</span>
            <h1 className="font-heading text-5xl md:text-6xl text-brand-black mb-6">Comprehensive Care</h1>
            <p className="max-w-2xl mx-auto text-brand-black/70 text-lg leading-relaxed">
              We offer a full spectrum of chiropractic services designed to restore your body's natural balance and optimize your health potential.
            </p>
          {/* </FadeIn> */}
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {SERVICES_CONTENT.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className="w-full flex flex-col lg:flex-row h-auto lg:h-[600px] group overflow-hidden">
                {/* Image Section */}
                <div className={`w-full lg:w-1/2 relative overflow-hidden h-[400px] lg:h-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="absolute inset-0 bg-brand-black/20 z-10 group-hover:bg-brand-black/0 transition-colors duration-700"></div>   
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className={`w-full lg:w-1/2 flex items-center p-8 md:p-16 lg:p-24 bg-white ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
                    <div className="flex items-center space-x-3 text-brand-orange">
                      <service.icon size={28} />
                      <span className="text-sm font-bold uppercase tracking-widest">0{index + 1}</span>
                    </div>
                    
                    <h2 className="font-heading text-4xl text-brand-black">{service.title}</h2>
                    <p className="text-brand-black/70 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="group/btn inline-flex items-center space-x-2 text-brand-black font-medium uppercase tracking-widest text-sm pt-4 border-b border-brand-black/20 pb-1 hover:border-brand-orange hover:text-brand-orange transition-all"
                    >
                      <span>View Details</span>
                      <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
      
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />
    </div>
  );
}
