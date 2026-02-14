import React from 'react';
import { SERVICES_CONTENT } from '../constants';
import { Section, FadeIn } from '../components/Section';

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <FadeIn>
          <span className="text-brand-orange text-sm uppercase tracking-widest font-semibold block mb-4">Our Expertise</span>
          <h2 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">Precision Chiropractic Treatments</h2>
          <p className="text-slate font-light">Holistic, non-invasive therapies tailored to restore your body's natural balance.</p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {SERVICES_CONTENT.map((service, index) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.id} delay={index * 0.1} className="group">
              <div className="h-full p-8 md:p-10 bg-cream border border-transparent hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate/5 transition-all duration-500 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-brand-orange group-hover:h-full transition-all duration-500"></div>
                
                <div className="mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm text-brand-orange group-hover:text-brand-black transition-colors">
                    <Icon strokeWidth={1.5} size={24} />
                  </div>
                </div>
                
                <h3 className="font-heading text-2xl text-brand-black mb-4">{service.title}</h3>
                <p className="text-brand-black/70 font-light leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <span className="text-xs uppercase tracking-widest text-brand-orange">Learn More</span>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;