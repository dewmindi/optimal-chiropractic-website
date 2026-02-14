import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { Section, FadeIn } from '../components/Section';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image Side */}
        <FadeIn className="relative">
          <div className="absolute top-4 left-4 w-full h-full border border-brand-orange/30 z-0"></div>
          <div className="relative z-10 overflow-hidden aspect-[3/4]">
             <img 
               src={ABOUT_CONTENT.image} 
               alt="Dr. Zekirovski" 
               className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
             />
             <div className="absolute bottom-0 left-0 w-full bg-glass backdrop-blur-md p-6 border-t border-white/20">
               <p className="font-heading text-2xl text-brand-black">Dr. Jengis Zekirovski</p>
               <p className="text-xs uppercase tracking-widest text-slate mt-1">Lead Chiropractor</p>
             </div>
          </div>
        </FadeIn>

        {/* Text Side */}
        <FadeIn delay={0.2} className="space-y-8">
          <div>
            <span className="text-brand-orange text-sm uppercase tracking-widest font-semibold block mb-2">{ABOUT_CONTENT.title}</span>
            <h2 className="font-heading text-4xl md:text-5xl text-brand-black leading-tight">{ABOUT_CONTENT.subtitle}</h2>
          </div>
          
          <div className="space-y-6 text-brand-black/80 font-light leading-relaxed text-lg">
            {ABOUT_CONTENT.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-4">
             <div className="h-px w-24 bg-brand-orange/50 mb-8"></div>
             <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-heading text-3xl text-brand-black">15+</h4>
                  <p className="text-xs uppercase tracking-widest text-slate mt-1">Years Experience</p>
                </div>
                <div>
                  <h4 className="font-heading text-3xl text-brand-black">5k+</h4>
                  <p className="text-xs uppercase tracking-widest text-slate mt-1">Patients Healed</p>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default About;