import React, { useState, useEffect } from 'react';
import { X, Check, ChevronDown } from 'lucide-react';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose, initialService = '' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
        setFormData(prev => ({
            ...prev,
            service: initialService || ''
        }));
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  return (
    // Updated z-index to z-[100] to ensure it appears above the navbar
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-brand-card rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 font-sans flex flex-col max-h-[90dvh] md:max-h-[95vh]">
        
        {/* Header - Purple Background with Close Button */}
        <div className="bg-[#C266E5] px-5 py-4 md:px-6 md:py-5 flex justify-between items-start shrink-0">
            <h3 className="text-lg md:text-2xl font-semibold text-white max-w-[85%] leading-snug">
                Ready for a Tech Upgrade? Schedule Your Call Now
            </h3>
            <button 
              onClick={onClose} 
              className="bg-white hover:bg-gray-100 text-brand-black p-1.5 rounded-md transition-colors shadow-sm"
              aria-label="Close modal"
            >
                <X size={20} strokeWidth={2.5} />
            </button>
        </div>

        {/* Body */}
        <div className="p-5 md:p-8 overflow-y-auto">
            {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                        <Check size={32} />
                    </div>
                    <h4 className="text-xl font-semibold text-brand-black dark:text-white">Request Sent!</h4>
                    <p className="text-brand-gray dark:text-gray-400 font-light">We will get back to you shortly to confirm the schedule.</p>
                </div>
            ) : (
                <>
                    <p className="text-[#515151] dark:text-gray-300 mb-6 md:mb-8 text-sm md:text-base font-light">
                        Fill out the form below and we'll respond within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                        {/* Row 1: Name & Email ID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                            <div className="space-y-1.5 md:space-y-2">
                                <label className="text-xs md:text-sm font-bold text-brand-black dark:text-white">Name</label>
                                <input 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                    type="text" 
                                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-brand-dark dark:text-white focus:border-[#C266E5] focus:ring-1 focus:ring-[#C266E5] outline-none transition-all placeholder-gray-400 text-sm" 
                                    placeholder="John" 
                                />
                            </div>
                            <div className="space-y-1.5 md:space-y-2">
                                <label className="text-xs md:text-sm font-bold text-brand-black dark:text-white">Email ID</label>
                                <input 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    type="email" 
                                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-brand-dark dark:text-white focus:border-[#C266E5] focus:ring-1 focus:ring-[#C266E5] outline-none transition-all placeholder-gray-400 text-sm" 
                                    placeholder="johnabc@gmail.com" 
                                />
                            </div>
                        </div>

                        {/* Phone Number - Full Width */}
                        <div className="space-y-1.5 md:space-y-2">
                            <label className="text-xs md:text-sm font-bold text-brand-black dark:text-white">Phone Number</label>
                            <input 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required 
                                type="tel" 
                                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-brand-dark dark:text-white focus:border-[#C266E5] focus:ring-1 focus:ring-[#C266E5] outline-none transition-all placeholder-gray-400 text-sm" 
                                placeholder="9877654789" 
                            />
                        </div>

                        {/* Service Needed - Full Width */}
                        <div className="space-y-1.5 md:space-y-2">
                            <label className="text-xs md:text-sm font-bold text-brand-black dark:text-white">Service Needed</label>
                            <div className="relative">
                                <select 
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-brand-dark dark:text-white focus:border-[#C266E5] focus:ring-1 focus:ring-[#C266E5] outline-none transition-all appearance-none cursor-pointer text-sm text-gray-500 dark:text-gray-300"
                                >
                                    <option value="" disabled>Select a service</option>
                                    <option value="Hardware Services">Hardware Services</option>
                                    <option value="Software Services">Software Services</option>
                                    <option value="Consulting">Consulting</option>
                                    <option value="Other">Other</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </div>

                        {/* Message - Full Width */}
                        <div className="space-y-1.5 md:space-y-2">
                            <label className="text-xs md:text-sm font-bold text-brand-black dark:text-white">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-brand-dark dark:text-white focus:border-[#C266E5] focus:ring-1 focus:ring-[#C266E5] outline-none transition-all placeholder-gray-400 text-sm resize-none" 
                                placeholder="Write your message"
                            />
                        </div>

                        <div className="pt-2 sticky bottom-0 bg-white dark:bg-brand-card pb-1">
                            <button 
                                type="submit" 
                                className="w-full bg-[#C266E5] hover:bg-[#a74ce9] text-white font-medium py-3 md:py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg text-sm md:text-base mt-2"
                            >
                                Book a call
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
      </div>
    </div>
  );
};