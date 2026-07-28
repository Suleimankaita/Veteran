import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Mail, Phone, 
  ChevronDown, User, Play, ArrowRight, Users, Shield, 
  Archive, Handshake, Map, Landmark, Flag, MapPin, Menu, X, Sparkles, CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { Navigate, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'About Us', href: '/about' },
  { label: 'Our Structure', href: '/our-structure', hasDropdown: true },
  { label: 'Our Mission', href: '/our-mission' },
  { label: 'Programs', href: '/programs' },
  { label: 'Resources', href: '/resources', hasDropdown: true },
  { label: 'Gallery', href: '/gallery' },
];

const mobileMenuVariants: Variants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  open: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } }
};

const Header = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
      const pathname=useLocation()
      useEffect(()=>{
        console.log(pathname.pathname)
      },[pathname])
  return (
    <>
    <div className="bg-[#072B12] text-slate-200 text-xs py-3.5 px-4 md:px-12 border-b border-emerald-900/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
              <div className="flex items-center space-x-6">
                <a href="mailto:info@renewedhopeveterans.ng" className="flex items-center hover:text-amber-400 transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 mr-2 text-amber-400" />
                  <span>info@renewedhopeveterans.ng</span>
                </a>
                <a href="tel:+2348001234567" className="flex items-center hover:text-amber-400 transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 mr-2 text-amber-400" />
                  <span>+234 800 123 4567</span>
                </a>
              </div>
    
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  {/* {[
                    { icon: <Facebook className="w-3.5 h-3.5" />, href: '#' },
                    { icon: <Twitter className="w-3.5 h-3.5" />, href: '#' },
                    { icon: <Instagram className="w-3.5 h-3.5" />, href: '#' },
                    { icon: <Youtube className="w-3.5 h-3.5" />, href: '#' },
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      className="w-7 h-7 rounded-full bg-emerald-900/40 hover:bg-amber-400 hover:text-emerald-950 flex items-center justify-center transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))} */}
                </div>
    
                <div className="hidden md:flex items-center space-x-4 border-l border-emerald-800/60 pl-6 text-slate-300">
                  <a href="#" className="hover:text-amber-400 transition-colors duration-200">News & Updates</a>
                  <span className="text-emerald-800">•</span>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-200">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
     <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-3.5 flex justify-between items-center">
          
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative w-11 h-11 bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-xl flex items-center justify-center shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <Shield className="w-6 h-6 text-amber-400" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[#0B3B18] text-base leading-tight tracking-wider uppercase">
                Renewed Hope
              </span>
              <span className="text-[#0B3B18] text-xs font-bold tracking-widest uppercase flex items-center">
                Veterans
                <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            {NAV_LINKS.map((link, idx) => (
              <NavLink 
                key={idx} 
                to={link.href} 
                className={`relative py-1 flex items-center hover:text-emerald-800 transition-colors duration-200 ${
                    link.href===pathname.pathname ? 'text-emerald-900 font-bold' : ''
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1 opacity-70" />}
                {link.href===pathname.pathname && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                  />
                )}
              </NavLink>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0B3B18] hover:bg-emerald-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center shadow-md shadow-emerald-950/10 transition-all duration-300"
            >
              <User className="w-4 h-4 mr-2 text-amber-400" />
              Join Movement
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-emerald-900" /> : <Menu className="w-6 h-6 text-emerald-900" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col space-y-3">
                {NAV_LINKS.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    className="text-slate-800 font-medium py-2 flex justify-between items-center border-b border-slate-50 hover:text-emerald-800"
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </a>
                ))}
                <button className="w-full mt-2 bg-[#0B3B18] text-white py-3 rounded-lg font-semibold flex items-center justify-center shadow-md">
                  <User className="w-4 h-4 mr-2 text-amber-400" />
                  Join Movement
                </button>
              </div>
            </motion.div>
          )}
          
        </AnimatePresence>
      
      </nav>

  </>
  )
}

export default Header