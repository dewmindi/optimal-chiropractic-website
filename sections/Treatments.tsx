import React from 'react';
import { TREATMENTS_BENTO } from '../constants';
import { Section, FadeIn } from '../components/Section';

const Treatments: React.FC = () => {
  return (
    <Section id="treatments" className="bg-cream">
      <FadeIn className="mb-16 text-center">
        <h2 className="font-heading text-4xl md:text-5xl text-brand-black">Specialized Techniques</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        {TREATMENTS_BENTO.map((item, index) => (
          <FadeIn 
            key={item.id} 
            delay={index * 0.1}
            className={`relative group overflow-hidden rounded-md ${item.colSpan} ${item.rowSpan}`}
          >
            <div className="w-full h-full relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-brand-orange uppercase tracking-wider text-xs font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {item.subtitle}
                  </p>
                  <h3 className="font-heading text-3xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

export default Treatments;