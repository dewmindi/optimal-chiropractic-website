"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../sections/Footer';
import { Section, FadeIn } from '../../components/Section';
import { TREATMENT_HERO, CONDITIONS_TREATED, TREATMENT_APPROACH, TREATMENT_FAQ } from '../../TreatmentConstants';
import Link from 'next/link';

export default function TreatmentsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <Section className="pb-20">
          <div className="text-center max-w-4xl mx-auto px-6">
            {/* <FadeIn> */}
              <span className="text-brand-orange text-sm uppercase tracking-widest font-semibold block mb-3">Holistic Healing</span>
              <h1 className="font-heading text-5xl md:text-6xl text-brand-black mb-6">{TREATMENT_HERO.title}</h1>
              <p className="text-xl md:text-2xl text-brand-black/60 font-light mb-8">{TREATMENT_HERO.subtitle}</p>
              <p className="text-brand-black/80 leading-relaxed text-lg max-w-2xl mx-auto">
                {TREATMENT_HERO.description}
              </p>
            {/* </FadeIn> */}
          </div>
        </Section>

        {/* Conditions Grid */}
        <Section className="bg-white/50 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONDITIONS_TREATED.map((condition, index) => (
              <FadeIn key={condition.id} delay={index * 0.1} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <condition.icon size={24} className="text-brand-orange group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="font-heading text-2xl text-brand-black mb-3">{condition.title}</h3>
                <p className="text-brand-black/60 text-sm mb-4 leading-relaxed">{condition.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-black/40 mb-2 block">Symptoms</span>
                    <div className="flex flex-wrap gap-2">
                      {condition.symptoms.slice(0, 3).map((symptom, i) => (
                        <span key={i} className="text-xs bg-cream px-2 py-1 rounded-md text-brand-black/70 border border-brand-black/5">{symptom}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                     <p className="text-sm text-brand-black/80 italic">"{condition.approach}"</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Approach Section */}
        <Section className="bg-brand-black text-cream py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-brand-orange text-sm uppercase tracking-widest font-semibold block mb-2">The Process</span>
              <h2 className="font-heading text-4xl md:text-5xl text-cream mb-6">{TREATMENT_APPROACH.title}</h2>
              <p className="text-cream/60 text-lg font-light leading-relaxed mb-8">
                Healing is a journey, not a destination. We guide you through three distinct phases of care to ensure lasting results.
              </p>
              <Link href="/contact" className="inline-flex items-center space-x-2 text-brand-orange border-b border-brand-orange pb-1 hover:text-white hover:border-white transition-colors">
                <span>Start Your Journey</span>
                <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <div className="space-y-8">
              {TREATMENT_APPROACH.steps.map((step, index) => (
                <FadeIn key={index} delay={0.2 + (index * 0.1)} className="flex space-x-6 group">
                  <span className="font-heading text-5xl text-brand-orange/20 group-hover:text-brand-orange transition-colors duration-500">{step.number}</span>
                  <div>
                    <h3 className="font-heading text-2xl text-cream mb-2 group-hover:text-brand-orange transition-colors">{step.title}</h3>
                    <p className="text-cream/60 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="py-24 max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl text-brand-black mb-4">Common Questions</h2>
            <p className="text-brand-black/60">Everything you need to know about your treatment.</p>
          </FadeIn>

          <div className="space-y-4">
            {TREATMENT_FAQ.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="border border-brand-black/10 rounded-xl overflow-hidden bg-white hover:border-brand-orange/30 transition-colors">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className="font-heading text-xl text-brand-black">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <Minus size={20} className="text-brand-orange flex-shrink-0" />
                    ) : (
                      <Plus size={20} className="text-brand-black/40 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-brand-black/70 leading-relaxed border-t border-gray-50 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
