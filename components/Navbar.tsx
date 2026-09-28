import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { NavLink } from '../types';
import { Logo } from './Logo';

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

interface NavbarProps {
  onBookCall: () => void;
  navigate: (path: string) => void;
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCall, navigate, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    setIsOpen(false);
    navigate(href);
  };

  // Routes that have a dark background behind the navbar at the top (Hero image or dark layout)
  const isDarkHeroRoute = currentPath === '/' || currentPath === '' || currentPath === '/contact';

  // Ensure navbar is NOT transparent when menu is open, so controls are visible against white drawer
  const isTransparent = isDarkHeroRoute && !scrolled && !isOpen;

  const textColorClass = isTransparent 
    ? 'text-white hover:text-purple-300' 
    : 'text-brand-gray dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400';

  const activeColorClass = isTransparent
    ? 'text-purple-300'
    : 'text-purple-600 dark:text-purple-400';

  // Navbar background logic
  const navBackgroundClass = isOpen
    ? 'bg-white dark:bg-brand-dark shadow-sm py-2' 
    : scrolled 
      ? 'bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md shadow-lg py-2' 
      : 'bg-transparent py-4';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="flex items-center">
           <a href="/" onClick={(e) => handleNavClick(e, '/')} className="hover:opacity-90 transition-opacity">
             <Logo light={isTransparent} />
           </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-medium transition-colors text-base relative group ${currentPath === link.href ? activeColorClass : textColorClass}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-300 ${currentPath === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Book a Call Button - Always Purple (Primary) as per request */}
          <Button 
            variant="primary" 
            onClick={onBookCall} 
            className="px-6 py-2.5 text-sm md:text-base shadow-lg hover:shadow-purple-500/50"
          >
             Book a call
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`p-2 focus:outline-none ${isTransparent ? 'text-white' : 'text-brand-black dark:text-white'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 h-[100dvh] bg-white dark:bg-brand-dark z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 pt-28 gap-6 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xl font-semibold border-b border-gray-100 dark:border-gray-800 pb-4 hover:text-purple-600 dark:hover:text-purple-400 ${currentPath === link.href ? 'text-purple-600 dark:text-purple-400' : 'text-brand-black dark:text-gray-200'}`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2">
            <Button fullWidth variant="primary" onClick={() => { setIsOpen(false); onBookCall(); }} className="shadow-none">
              <span className="mr-2">Book a call</span>
              <Phone size={18} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};