import React from 'react';
import { Button } from './Button';

interface CTAProps {
  onBookCall: () => void;
  navigate?: (path: string) => void;
}

export const CTA: React.FC<CTAProps> = ({ onBookCall }) => {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-brand-dark transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8">
        {/* 
          Updated container:
          - Added 'group' for hover states to trigger the background animation.
        */}
        <div className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#d687fc] px-6 py-16 md:py-28 text-center shadow-xl cursor-default transform transition-transform duration-300 hover:shadow-2xl">
          
          {/* Background Image with Moving Effect on Hover */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             <img 
               src="https://698e0805b7349d44aaf2a091.imgix.net/Property%201=Frame%202147203615.png" 
               alt="Background Pattern" 
               className="w-full h-full object-cover opacity-90 transition-transform duration-[2500ms] ease-in-out group-hover:scale-110 group-hover:translate-x-2 group-hover:rotate-1" 
             />
             {/* Overlay for text readability */}
             <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white mb-8 md:mb-10 tracking-tight leading-snug drop-shadow-md">
              Ready to Take Your Business to the<br className="hidden md:block"/> Next Level?
            </h2>
            
            <Button 
              variant="white" 
              onClick={onBookCall} 
              className="px-8 py-3 md:px-12 md:py-4 text-base md:text-lg text-[#A020F0] font-semibold hover:bg-white/95 transition-all shadow-lg hover:shadow-purple-900/10 hover:-translate-y-1"
            >
              Book a call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};