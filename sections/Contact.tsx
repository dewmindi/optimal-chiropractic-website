import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Section, FadeIn } from '../components/Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-brand-black text-cream py-32">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <FadeIn>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
            Start Your Journey Toward a <span className="text-brand-orange italic">Pain-Free</span> Life.
          </h2>
          <p className="text-lg font-light text-cream/70 mb-10 max-w-md">
            Schedule your comprehensive assessment today and take the first step towards optimal wellness.
          </p>
          <a 
            href="https://optimal-chiropractic-braybrook.au5.cliniko.com/bookings?embedded=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-brand-orange text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-brand-black transition-colors shadow-lg shadow-brand-orange/20"
          >
            Book Appointment
          </a>
        </FadeIn>

        <FadeIn delay={0.2} className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 rounded-sm">
           <h3 className="font-heading text-3xl mb-8">Visit Us</h3>
           <div className="space-y-6 font-light">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-orange mb-2">Location</p>
                <p className="text-lg">{CONTACT_INFO.address}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-orange mb-2">Hours</p>
                <p className="text-lg">{CONTACT_INFO.hours}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-orange mb-2">Contact</p>
                <p className="text-lg">{CONTACT_INFO.phone}</p>
                <p className="text-lg">{CONTACT_INFO.email}</p>
              </div>
           </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default Contact;