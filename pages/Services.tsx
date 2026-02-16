import React, { useState, useEffect } from 'react';
import { CTA } from '../components/CTA';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesPageProps {
  onBookCall: (serviceName?: string) => void;
  navigate: (path: string) => void;
}

export const Services: React.FC<ServicesPageProps> = ({ onBookCall, navigate }) => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'software'>('hardware');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentList = servicesData[activeTab];

  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark font-sans transition-colors duration-300">
      
      {/* 
         Header & Hero Section
      */}
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-12">
        <div className="rounded-[3rem] p-8 md:p-12 lg:p-16 bg-white dark:bg-brand-card/30 relative">
            
            {/* Header Content */}
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-brand-black dark:text-white font-sans tracking-tight">
                Explore Our Services
                </h1>
                <p className="text-brand-gray dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg font-light mb-8">
                Delivering customized, high-quality solutions that align with your business goals and drive measurable results. We offer end-to-end solutions that ensure efficiency, growth, and long-term success
                </p>
                {/* Pink Separator Line */}
                <div className="w-12 h-1 bg-[#EA4C89] mx-auto rounded-full"></div>
            </div>

            {/* Hero Image */}
            <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                src="https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.34.08%20AM.jpeg" 
                alt="Service Highlights" 
                className="w-full h-[300px] md:h-[500px] object-cover"
                />
            </div>
        </div>
      </div>

      {/* Sub Text */}
      <div className="container mx-auto px-4 md:px-8 text-center mb-12">
        <p className="text-brand-gray dark:text-gray-300 max-w-3xl mx-auto text-lg font-light">
          At Ambitiouspedia Tech & Services, we are providing top-quality products from renowned manufacturers, ensuring performance, durability and compatibility.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-16 px-4">
        <div className="inline-flex border border-purple-300 dark:border-purple-900 rounded-lg p-1 bg-white dark:bg-brand-card">
          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'hardware' 
                ? 'bg-[#bc61f5] text-white' 
                : 'text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10'
            }`}
          >
            Hardware Services
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'software' 
                ? 'bg-[#bc61f5] text-white' 
                : 'text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10'
            }`}
          >
            Software Services
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentList.map((service, index) => {
             const IconComponent = service.icon;
             return (
                <div 
                  key={service.id} 
                  className="group cursor-pointer relative overflow-hidden bg-white dark:bg-brand-card rounded-2xl transition-all duration-300 flex flex-col h-full border border-gray-200 dark:border-gray-800 hover:border-transparent hover:shadow-2xl hover:-translate-y-1"
                >
                   {/* Top Image Section */}
                   <div className="relative h-56 w-full overflow-hidden shrink-0">
                       <img 
                           src={service.image} 
                           alt={service.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                       />
                       {/* Subtle Overlay */}
                       <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500"></div>
                       
                       {/* Floating Icon */}
                       <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 dark:bg-brand-dark/90 backdrop-blur-sm flex items-center justify-center text-[#A020F0] shadow-sm">
                           {IconComponent && <IconComponent size={24} />}
                       </div>
                   </div>

                   {/* Content Section */}
                   <div className="p-6 md:p-8 flex flex-col flex-grow">
                       <div className="flex justify-between items-start mb-3">
                           <h3 className="text-xl font-semibold text-brand-black dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                             {service.title}
                           </h3>
                           <ArrowUpRight className="text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                       </div>
                       
                       <p className="text-sm text-brand-gray dark:text-gray-400 leading-relaxed mb-6 font-light line-clamp-3 flex-grow">
                         {service.description}
                       </p>
                       
                       {/* Button */}
                       <button 
                         onClick={(e) => { e.stopPropagation(); onBookCall(service.title); }}
                         className="w-full py-3 mt-auto bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-300 rounded-xl font-medium transition-all hover:bg-[linear-gradient(90deg,#C266E5_0%,#A74CE9_75%,#8C32EC_100%)] hover:text-white hover:shadow-lg border border-purple-100 dark:border-purple-900"
                       >
                         Get a Service
                       </button>
                   </div>
                </div>
             );
          })}
          
          {/* Navigation Card (6th item) */}
          <div 
             onClick={() => setActiveTab(activeTab === 'hardware' ? 'software' : 'hardware')}
             className="relative rounded-2xl overflow-hidden h-full min-h-[400px] cursor-pointer group shadow-sm border border-gray-200 dark:border-gray-800"
          >
             <img 
               src="https://698e0805b7349d44aaf2a091.imgix.net/WhatsApp%20Image%202026-02-15%20at%201.02.16%20AM.jpeg" 
               alt="Explore Other" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
             />
             {/* Updated overlay: Reduced opacity to bg-black/20 for clearer HD image */}
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center p-6 text-center">
                 <div className="flex items-center gap-2 text-white drop-shadow-md">
                    <span className="text-xl font-semibold">
                      Explore {activeTab === 'hardware' ? 'Software' : 'Hardware'} Services
                    </span>
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </div>
             </div>
          </div>
        </div>
      </div>

      <CTA onBookCall={() => onBookCall()} navigate={navigate} />
    </div>
  );
};