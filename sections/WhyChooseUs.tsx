import React from 'react';
import { WHY_CHOOSE_US_CONTENT } from '../constants';
import { Section, FadeIn } from '../components/Section';

const WhyChooseUs: React.FC = () => {
  return (
    <Section className="bg-brand-black text-cream relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Header */}
        <div className="lg:col-span-4">
          <FadeIn>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 leading-tight">
              Why Patients Trust <br/> <span className="text-brand-orange">Optimal Chiropractic</span>
            </h2>
            <p className="text-cream/70 font-light text-lg mb-10">
              We combine the art of healing with the science of medicine to provide a superior standard of care.
            </p>
            <button className="px-8 py-4 border border-cream/20 hover:bg-cream hover:text-brand-black transition-colors uppercase tracking-widest text-xs">
              Book Consultation
            </button>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_CHOOSE_US_CONTENT.map((item, index) => {
             const Icon = item.icon;
             return (
              <FadeIn key={index} delay={0.2 + (index * 0.1)}>
                <div className="flex flex-col gap-4 p-6 border-l border-white/10 hover:border-brand-orange transition-colors duration-300">
                  <Icon className="text-brand-orange mb-2" size={32} strokeWidth={1} />
                  <h3 className="font-heading text-2xl text-cream">{item.title}</h3>
                  <p className="text-cream/60 font-light text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
             );
          })}
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;