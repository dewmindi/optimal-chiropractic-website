"use client";

import React from 'react';
import About from '../../sections/About';
import Navbar from '../../components/Navbar';
import Footer from '../../sections/Footer';
import { ABOUT_CONTENT } from '../../constants';
import { Section, FadeIn } from '../../components/Section';

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <main className="pt-20">
        <About />

        {/* Philosophy Section */}
        <Section id="philosophy" className="bg-white/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="space-y-6">
              <span className="text-brand-orange text-sm uppercase tracking-widest font-semibold block mb-2">Philosophy</span>
              <h2 className="font-heading text-4xl text-brand-black">{ABOUT_CONTENT.philosophy.title}</h2>
              <p className="text-brand-black/80 font-light leading-relaxed text-lg">
                {ABOUT_CONTENT.philosophy.content}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {ABOUT_CONTENT.philosophy.points.map((point, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                    <span className="text-brand-black/90 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative p-8 bg-glass rounded-2xl border border-white/40 shadow-xl">
              <h3 className="font-heading text-2xl text-brand-black mb-6 border-b border-brand-black/10 pb-4">Qualifications</h3>
              <div className="space-y-6">
                {ABOUT_CONTENT.qualifications.map((qual, index) => (
                  <div key={index} className="flex justify-between items-baseline group hover:bg-white/30 p-3 rounded-lg transition-colors">
                    <div>
                      <p className="font-bold text-brand-black group-hover:text-brand-orange transition-colors">{qual.degree}</p>
                      <p className="text-sm text-slate">{qual.institution}</p>
                    </div>
                    <span className="text-sm font-mono text-brand-black/60">{qual.year}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Team Section */}
        <Section id="team" className="bg-cream">
          <div className="text-center mb-16">
            <span className="text-brand-orange text-sm uppercase tracking-widest font-semibold block mb-2">Our Team</span>
            <h2 className="font-heading text-4xl text-brand-black">Meet the Professionals</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {ABOUT_CONTENT.team.map((member, index) => (
               <FadeIn key={index} delay={index * 0.1} className="group relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-glass-dark backdrop-blur-md p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-heading text-xl text-white">{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-brand-orange mt-1">{member.role}</p>
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
