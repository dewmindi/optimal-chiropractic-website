"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: any;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
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
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div className="bg-cream/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative scrollbar-hide">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-brand-black/5 hover:bg-brand-black/10 rounded-full transition-colors z-10"
              >
                <X size={24} className="text-brand-black" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-black/10 mix-blend-multiply"></div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 space-y-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-brand-orange/10 rounded-lg">
                      <service.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">Service Details</span>
                  </div>
                  
                  <h2 className="font-heading text-3xl md:text-4xl text-brand-black">{service.title}</h2>
                  
                  <p className="text-brand-black/80 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  <div className="space-y-4 pt-4">
                    <h4 className="font-heading text-xl text-brand-black border-b border-brand-black/10 pb-2">Key Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                          <span className="text-brand-black/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link 
                      href="/#contact" 
                      onClick={onClose}
                      className="inline-block w-full text-center bg-brand-black text-cream py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-orange transition-colors duration-300"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
