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
      <div className='flex justify-center mt-4'>
        <a 
              href="https://www.google.com/search?sca_esv=4ae20d8bd47daad1&rlz=1C5CHFA_enLK1153LK1153&sxsrf=ANbL-n6OFWnbxJ4jUQ6iYbEblOjMKUSUyQ:1773750231619&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTpJ0zpcVfgvYFHhgKVdhYBcVR-dMoCIuwnhIQO5pdFVJjYzs4RcgI1xIlKEuBeuVnNrHA2gNi7dEjjUYYwnz95a-L3VguWadFtfbbRz2iZpRp4kxw%3D%3D&q=Optimal+Chiropractic+Braybrook+Reviews&sa=X&ved=2ahUKEwikiOfD9qaTAxXA3zQHHdrBN_8Q0bkNegQISRAH&cshid=1773750258705180&biw=1920&bih=958&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-cream/20 bg-brand-orange text-white uppercase hover:bg-white hover:text-brand-black transition-colors  tracking-widest text-xs"
            >
              View More
            </a>
      </div>
    </Section>
  );
};

export default Testimonials;