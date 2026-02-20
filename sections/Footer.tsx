import React from 'react';
import Image from 'next/image';
import { NAVIGATION_LINKS } from '../constants';
import Link from 'next/link';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/share/1ATsAbvsYz/?mibextid=wwXIfr' },
    { name: 'Instagram', url: 'https://www.instagram.com/optimalchiro_?igsh=dzZ3ZmV3YjEzNG80&utm_source=qr' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/company/optimalchiropractic/' },
    { name: 'TikTok', url: 'www.tiktok.com/@optimalchiropractic' },
  ];

  const getHref = (link: string) => {
    if (link === 'About') return '/about';
    if (link === 'Services') return '/services';
    if (link === 'Treatments') return '/treatments';
    if (link === 'Contact') return '/contact';
    if (link === 'Stories') return `/#${link.toLowerCase()}`;
    return '#';
  };

  return (
    <footer className="bg-cream border-t border-brand-black/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        {/* Logo */}
        <Image 
          src="/optimal-chiropractic-logo.webp" 
          alt="Optimal Chiropractic Logo" 
          width={200} 
          height={45} 
        />

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAVIGATION_LINKS.map((link) => (
            <Link 
              key={link.name} 
              href={getHref(link.name)}
              className="text-sm uppercase tracking-widest text-brand-black/80 hover:text-brand-orange transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
           {socialLinks.map((social) => (
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

        {/* Legal and Address */}
        <div className="text-center text-xs text-brand-black/50 border-t border-brand-black/10 w-full pt-8 mt-4">
          <p>107 South Road, Braybrook, Victoria, 3019</p>
          <p className="mt-2">© {new Date().getFullYear()} Optimal Chiropractic. All Rights Reserved.</p>
          <p className="mt-1">Registration: CHI0002452446 | ABN: 51 656 432 996 (Zek Chiropractic Pty Ltd)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;