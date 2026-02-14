import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Section, FadeIn } from '../components/Section';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="stories" className="bg-cream">
      <FadeIn className="text-center mb-16">
        <span className="text-brand-orange text-sm uppercase tracking-widest font-semibold block mb-4">Patient Stories</span>
        <h2 className="font-heading text-4xl md:text-5xl text-brand-black">Journeys to Recovery</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((story, index) => (
          <FadeIn key={story.id} delay={index * 0.1}>
            <div className="h-full bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 relative">
              <Quote className="text-brand-orange/20 absolute top-8 left-8" size={60} />
              <div className="relative z-10 pt-8">
                 <p className="font-heading text-xl text-brand-black/90 italic mb-8 leading-relaxed">
                   "{story.text}"
                 </p>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-[1px] bg-brand-orange"></div>
                   <div>
                     <p className="text-sm font-bold text-brand-black uppercase tracking-wider">{story.name}</p>
                     <p className="text-xs text-slate">{story.role}</p>
                   </div>
                 </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;