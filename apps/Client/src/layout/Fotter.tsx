import { Mail, MapPin, Phone, Shield, ShieldCheck } from 'lucide-react'
import React from 'react'

const Fotter = () => {
  return (
       <footer className="bg-[#051F0D] text-white pt-16 pb-8 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/60">
            
            {/* Col 1: Brand Info */}
             <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-[#0b3d2e]" />
                          </div>
                          <span className="font-extrabold text-2xl tracking-wider text-white">RH<span className="text-[#c9a227]">V</span></span>
                        </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Organizing, uniting, and mobilizing grassroots support across Nigeria for a brighter, more secure future.
              </p>

              <div className="flex space-x-2">
                {/* {[<Facebook key="1" className="w-4 h-4" />, <Twitter key="2" className="w-4 h-4" />, <Instagram key="3" className="w-4 h-4" />, <Youtube key="4" className="w-4 h-4" />].map((socialIcon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-lg bg-emerald-900/40 hover:bg-amber-400 hover:text-emerald-950 flex items-center justify-center transition-all duration-300">
                    {socialIcon}
                  </a>
                ))} */}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-amber-400 mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {['Home', 'About Us', 'Our Structure', 'Our Mission', 'Programs', 'Gallery', 'Contact Us'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-amber-400 transition-colors duration-200 flex items-center">
                      <span className="text-emerald-700 mr-1.5">•</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Resources */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-amber-400 mb-4">Resources</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {['News & Updates', 'Documents', 'Training Materials', 'Reports', 'FAQs'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-amber-400 transition-colors duration-200 flex items-center">
                      <span className="text-emerald-700 mr-1.5">•</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Get Involved */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-amber-400 mb-4">Get Involved</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {['Become a Member', 'Volunteer', 'Partner With Us', 'Donate', 'Events'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-amber-400 transition-colors duration-200 flex items-center">
                      <span className="text-emerald-700 mr-1.5">•</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Contact Info */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-amber-400 mb-4">Contact Us</h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Federal Capital Territory,<br />Abuja, Nigeria</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>+234 800 123 4567</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>info@renewedhopeveterans.ng</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
            <p>© 2026 Renewed Hope Veterans. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>

        </div>
      </footer>

  )
}

export default Fotter