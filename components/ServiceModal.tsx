"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: any;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  // No longer need useEffect to control body scroll as the modal won't need it.

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-brand-black/40 backdrop-blur-sm"
          />
          
          {/* Modal Centering Container */}
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
            onClick={onClose} // Allow closing by clicking outside the modal content
          >
            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
              className="bg-cream/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl max-w-6xl w-full overflow-hidden relative"
            >
              <button 
                onClick={onClose}
                className="absolute top-3 right-3 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors z-20"
              >
                <X size={20} className="text-brand-black" />
              </button>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-5">
                
                {/* Left Side: Image (Stays Fixed) */}
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-l-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Right Side: Content */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col">
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-brand-orange/10 rounded-lg">
                        <service.icon className="w-6 h-6 text-brand-orange" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">Service Details</span>
                    </div>
                    
                    <h2 className="font-heading text-3xl md:text-4xl text-brand-black mb-4">{service.title}</h2>
                    
                    <p className="text-brand-black/80 leading-relaxed mb-6">
                      {service.detailedDescription}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-heading text-xl text-brand-black border-b border-brand-black/10 pb-2">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit: string, index: number) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-brand-black/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-auto">
                     <Link 
                      href="/contact" 
                      onClick={onClose}
                      className="inline-block w-full text-center bg-brand-black text-cream py-4 uppercase tracking-widest text-sm font-medium rounded-lg hover:bg-brand-orange transition-colors duration-300"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
