import React from 'react';
import { BRAND_NAME, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream border-t border-brand-black/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-heading text-2xl font-bold text-brand-black uppercase">{BRAND_NAME}</p>
          <p className="text-xs text-brand-black/50 mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
          <p className="text-xs text-brand-black/50 mt-2">Registration: number CHI0002452446</p>
          <p className="text-xs text-brand-black/50 mt-2">ABN: 51 656 432 996 (zek chiropractic pty Ltd)</p>
        </div>
        
        <div className="flex gap-6">
           {SOCIAL_LINKS.map((social: { name: string; url: string }) => (
             <a 
               key={social.name}
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               className="text-xs uppercase tracking-widest text-brand-black/60 hover:text-brand-orange transition-colors"
             >
               {social.name}
             </a>
           ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;