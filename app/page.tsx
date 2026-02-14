"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import WhyChooseUs from '../sections/WhyChooseUs';
import Treatments from '../sections/Treatments';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Treatments />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
