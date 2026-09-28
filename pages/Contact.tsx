import React, { useState } from 'react';
import { Mail, MapPin, Phone, Check, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';

interface ContactProps {
  onBookCall?: () => void;
  navigate?: (path: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onBookCall }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API submission
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 flex flex-col items-center justify-center bg-[#121212] font-sans">
      
      {/* Background with texture/overlay - Reduced overlay opacity and removed blur for HD look */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://698cd7bfb7349d44aaf1f497.imgix.net/Screenshot%202026-02-12%20014614.png" 
          alt="Motherboard Technology Background" 
          className="w-full h-full object-cover"
        />
        {/* Lighter overlay (20%) and NO blur so the background is crisp/HD */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        
        {/* Page Header - Reduced text sizes */}
        <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight drop-shadow-md">
                Reach Out to Our Team
            </h1>
            <p className="text-gray-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-md font-light">
                Let’s bring your ideas to life. Reach out to our team and discover how we can collaborate to build solutions that inspire growth and innovation.
            </p>
        </div>

        {/* Main Card - Glassmorphism
            Updated: More transparent background (bg-black/30) and blur (backdrop-blur-md) 
            to make the background "more visible" while maintaining readability.
        */}
        <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/20 backdrop-blur-md bg-black/30">
          
          {/* Left Panel: Contact Info - Distinct Purple Panel */}
          <div className="lg:w-5/12 bg-[#b66dff]/90 p-8 md:p-10 text-white flex flex-col justify-between backdrop-blur-sm">
             
             <div>
                <h2 className="text-2xl font-semibold mb-3">Contact Info</h2>
                <p className="text-purple-100 text-sm leading-relaxed mb-8 font-light">
                  Connect with us today and take the first step toward creating something extraordinary together.
                </p>
                
                <div className="space-y-6">
                   {/* Email */}
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm text-[#b66dff]">
                         <Mail size={20} />
                      </div>
                      <div className="pt-0.5">
                         <p className="text-xs font-semibold text-purple-100 mb-0.5 uppercase tracking-wide">Email</p>
                         <p className="text-base font-medium break-all">ambitiouspedia@gmail.com</p>
                      </div>
                   </div>

                   {/* Location */}
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm text-[#b66dff]">
                         <MapPin size={20} />
                      </div>
                      <div className="pt-0.5">
                         <p className="text-xs font-semibold text-purple-100 mb-0.5 uppercase tracking-wide">Location</p>
                         <p className="text-base font-medium leading-snug">123 Tech Street, San Francisco, CA 94102</p>
                      </div>
                   </div>

                   {/* Book a Call */}
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm text-[#b66dff]">
                         <Phone size={20} />
                      </div>
                      <div className="pt-0.5">
                         <p className="text-xs font-semibold text-purple-100 mb-0.5 uppercase tracking-wide">Book a Call</p>
                         <p className="text-base font-medium">9876543225</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Panel: Form - Transparent to show parent glass effect */}
          <div className="lg:w-7/12 p-8 md:p-10 bg-transparent relative">
              <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-white mb-2">Book a Call</h2>
                  <p className="text-gray-200 text-sm font-light">
                      Fill out the form below and we'll respond within 24 hours.
                  </p>
              </div>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-[350px] bg-white/5 rounded-2xl animate-in fade-in zoom-in duration-300 border border-white/10">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent</h3>
                  <p className="text-gray-300 text-center max-w-xs text-sm">We've received your details and will contact you shortly.</p>
                  <Button variant="ghost" onClick={() => setSubmitted(false)} className="mt-6 text-[#b66dff] hover:text-[#a05ce0]">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-300 uppercase tracking-wide ml-1">Name</label>
                      <input 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-[#b66dff] focus:ring-1 focus:ring-[#b66dff] focus:bg-white/10 outline-none transition-all text-sm font-light backdrop-blur-sm" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-gray-300 uppercase tracking-wide ml-1">Email ID</label>
                      <input 
                        required 
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-[#b66dff] focus:ring-1 focus:ring-[#b66dff] focus:bg-white/10 outline-none transition-all text-sm font-light backdrop-blur-sm" 
                        placeholder="johnabc@gmail.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300 uppercase tracking-wide ml-1">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-[#b66dff] focus:ring-1 focus:ring-[#b66dff] focus:bg-white/10 outline-none transition-all text-sm font-light backdrop-blur-sm" 
                      placeholder="9877654789" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300 uppercase tracking-wide ml-1">Service Needed</label>
                    <div className="relative">
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-[#b66dff] focus:ring-1 focus:ring-[#b66dff] focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer text-sm font-light backdrop-blur-sm">
                            <option value="" disabled selected>Select a service</option>
                            <option value="hardware" className="bg-[#1a1a1a]">Hardware</option>
                            <option value="software" className="bg-[#1a1a1a]">Software</option>
                            <option value="both" className="bg-[#1a1a1a]">Both</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300 uppercase tracking-wide ml-1">Message</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:border-[#b66dff] focus:ring-1 focus:ring-[#b66dff] focus:bg-white/10 outline-none transition-all min-h-[100px] resize-none text-sm font-light backdrop-blur-sm" 
                      placeholder="Write your message"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                      <button type="submit" className="w-full bg-[#b66dff] hover:bg-[#a05ce0] text-white font-semibold py-3.5 rounded-lg transition-colors shadow-lg hover:shadow-purple-500/30 text-sm tracking-wide">
                        Book a call
                      </button>
                  </div>
                </form>
              )}
          </div>

        </div>
      </div>
    </div>
  );
};