"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../sections/Footer';
import { Section, FadeIn } from '../../components/Section';
import { CONTACT_INFO } from '../../constants';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Side: Info & Map */}
            <div className="space-y-16">
              {/* <FadeIn> */}
                <span className="text-brand-orange text-sm uppercase tracking-widest font-semibold block mb-3">Get in Touch</span>
                <h1 className="font-heading text-5xl md:text-6xl text-brand-black mb-8">We're Here to Help</h1>
                <p className="text-brand-black/70 text-lg leading-relaxed mb-12">
                  Have questions about our treatments or ready to book your first appointment? Reach out to us using the form or contact details below.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <MapPin size={24} className="text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-brand-black mb-1">Visit Us</h4>
                      <p className="text-brand-black/60">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <Clock size={24} className="text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-brand-black mb-1">Opening Hours</h4>
                      <p className="text-brand-black/60">{CONTACT_INFO.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <Phone size={24} className="text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-brand-black mb-1">Call Us</h4>
                      <p className="text-brand-black/60">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <Mail size={24} className="text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-brand-black mb-1">Email Us</h4>
                      <p className="text-brand-black/60">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                </div>
              {/* </FadeIn> */}
              
              {/* Map Integration */}
              <FadeIn delay={0.2} className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.958112839891!2d144.8465024!3d-37.7910214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65f7c2105d6c9%3A0x6b90dd529b072cfd!2sOptimal%20Chiropractic%20Braybrook!5e0!3m2!1sen!2slk!4v1771358444287!5m2!1sen!2slk" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade">
                 </iframe>
              </FadeIn>
            </div>

            {/* Right Side: X-Ray Form */}
            <FadeIn delay={0.3}>
              <div className="bg-black p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
                {/* X-Ray Effect Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/30 blur-[100px]"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-heading text-3xl text-white mb-2">Send a Message</h3>
                  <p className="text-white/50 mb-8 text-sm">Fill out the form below and our team will get back to you shortly.</p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-brand-orange font-semibold">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-brand-orange font-semibold">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-brand-orange font-semibold">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs uppercase tracking-widest text-brand-orange font-semibold">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs uppercase tracking-widest text-brand-orange font-semibold">Message</label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all placeholder:text-white/20 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(244,148,33,0.4)]"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Decorative Elements for X-Ray Feel */}
                <div className="absolute top-4 right-4 text-white/10 font-mono text-xs tracking-widest">
                   IMG_001.RAW
                </div>
                <div className="absolute bottom-4 left-4 text-white/10 font-mono text-xs tracking-widest">
                   EXP: 1/200 ISO: 800
                </div>
                
                {/* Scan line effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10 animate-scan pointer-events-none"></div>
              </div>
            </FadeIn>
          </div>
        </Section>
      </main>

      <Footer />
      
      <style jsx global>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
