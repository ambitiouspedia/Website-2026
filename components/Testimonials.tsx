import React from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    text: "Delivered beyond Expectations",
    subText: "Ambitious pedia gave our startup the digital face it needed. We've grown 3x since the launch!",
    author: "Sneha Reddy",
    role: "Founder of Healthlink"
  },
  {
    text: "Delivered beyond Expectations",
    subText: "The hardware solutions provided were top-notch. Our productivity increased by 40% instantly.",
    author: "Sneha Reddy",
    role: "Founder of Healthlink"
  },
  {
    text: "Delivered beyond Expectations",
    subText: "Ambitious pedia gave our startup the digital face it needed. We've grown 3x since the launch!",
    author: "Sneha Reddy",
    role: "Founder of Healthlink"
  }
];

const bgImage = "https://698e0805b7349d44aaf2a091.imgix.net/WhatsApp%20Image%202026-02-12%20at%2010.48.16%20PM.jpeg";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-brand-dark transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Layout: Left Heading, Right Description + Arrows */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10 lg:gap-20">
           
           {/* Left: Heading */}
           <div className="lg:w-5/12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-brand-black dark:text-white leading-tight">
                What Clients Say <br /> About Us
              </h2>
           </div>

           {/* Right: Description & Navigation */}
           <div className="lg:w-7/12 flex flex-col items-start">
              <p className="text-brand-gray dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-light">
                We take pride in the trust our clients place in us. Every testimonial is a reflection of the value we create and helping businesses optimize operations, embrace innovation, and achieve measurable growth through smart technology solutions.
              </p>
              
              <div className="flex gap-4">
                 <button className="w-12 h-12 rounded bg-[#A020F0] hover:bg-purple-700 text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-purple-500/20 active:scale-95">
                    <ArrowLeft size={24} />
                 </button>
                 <button className="w-12 h-12 rounded bg-[#A020F0] hover:bg-purple-700 text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-purple-500/20 active:scale-95">
                    <ArrowRight size={24} />
                 </button>
              </div>
           </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-light dark:bg-brand-card p-8 md:p-10 rounded-none md:rounded-lg transition-all duration-300 relative group hover:shadow-xl dark:border dark:border-gray-800 overflow-hidden flex flex-col h-full">
              
              {/* Background Image Logic */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img 
                      src={bgImage} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Overlay: Slightly darker to ensure text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <h4 className="text-2xl font-normal text-brand-black dark:text-white mb-6 group-hover:text-white transition-colors duration-300">"{t.text}"</h4>
                
                <p className="text-brand-gray dark:text-gray-300 mb-10 text-base leading-relaxed font-light group-hover:text-gray-100 transition-colors duration-300">
                  {t.subText}
                </p>
                
                <div className="mt-auto">
                  <p className="font-medium text-base text-brand-black dark:text-white mb-1 group-hover:text-white transition-colors duration-300">{t.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-300">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};