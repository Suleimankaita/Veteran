import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  Mail, Phone, ChevronDown, User, Play, ArrowRight, Users, Shield, 
  Archive, Handshake, Map, Landmark, Flag, MapPin, Menu, X, Sparkles, 
  CheckCircle2, ShieldCheck, Target, Eye, Heart, Building, Lightbulb, 
  Calendar, Newspaper, Image as ImageIcon, CreditCard, MessageSquare,
   ExternalLink
} from 'lucide-react';
import hero from '../assets/Member.png'; // Ensure you have this image in your assets folder
import gallary1 from "../assets/GL.png"
import gallary2 from "../assets/gl2.png"
import gallary3 from "../assets/gl3.png"
import gallary4 from "../assets/gl4.png"
// import gallary2 from "../assets/.png"
// --- Animated Number Counter Component ---
const AnimatedCounter = ({ value, className }: { value: string, className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract numbers and suffixes
  const numericString = value.replace(/[^0-9]/g, '');
  const isNumeric = numericString.length > 0;
  const numericValue = parseInt(numericString, 10);
  const suffix = value.replace(/[0-9,]/g, '').trim();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => 
    Math.round(latest).toLocaleString() + (suffix ? suffix : '')
  );

  useEffect(() => {
    if (isInView && isNumeric) {
      const controls = animate(count, numericValue, { 
        duration: 2.5, 
        ease: [0.22, 1, 0.36, 1] // Custom smooth easing
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count, isNumeric]);

  return (
    <span ref={ref} className={className}>
      {isNumeric ? <motion.span>{rounded}</motion.span> : value}
    </span>
  );
};

// --- Interfaces & Types ---
interface NavItem { label: string; href: string; }
interface FeatureCardData { icon: React.ReactNode; title: string; description: string; badge?: string; }
interface StatItemData { icon: React.ReactNode; value: string; label: string; subLabel?: string; }

// --- Constants & Data ---
const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#who-we-are' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'News & Events', href: '#news' },
];

const FEATURES: FeatureCardData[] = [
  {
    icon: <Users className="w-6 h-6 text-[#0b3d2e]" />,
    title: 'Grassroots Mobilization',
    description: 'Building a robust organizational structure from local polling units to the national tier.',
    badge: 'Structure'
  },
  {
    icon: <Shield className="w-6 h-6 text-[#c9a227]" />,
    title: 'Security & Development',
    description: 'Promoting peace, civic responsibility, and national security in communities across Nigeria.',
    badge: 'Impact'
  },
  {
    icon: <Archive className="w-6 h-6 text-[#c9a227]" />,
    title: 'Electoral Support',
    description: 'Ensuring strategic victory across all 176,000+ polling units nationwide.',
    badge: 'Strategy'
  },
  {
    icon: <Handshake className="w-6 h-6 text-[#0b3d2e]" />,
    title: 'Unity & Service',
    description: 'Uniting military veterans through dedicated service, discipline, integrity, and patriotism.',
    badge: 'Values'
  }
];

const STATS: StatItemData[] = [
  { icon: <Users className="w-7 h-7 text-[#c9a227]" />, value: '774', label: 'Local Government', subLabel: 'Areas' },
  { icon: <Landmark className="w-7 h-7 text-[#c9a227]" />, value: '8,809', label: 'Wards' },
  { icon: <Archive className="w-7 h-7 text-[#c9a227]" />, value: '176,000+', label: 'Polling Units' },
  { icon: <Map className="w-7 h-7 text-[#c9a227]" />, value: '36', label: 'States Nationwide', subLabel: '(36 + FCT)' },
  { icon: <Flag className="w-7 h-7 text-[#c9a227]" />, value: '1', label: 'A Renewed Hope', subLabel: 'Nigeria' },
];

const FAQS = [
  { question: "How can I join Renewed Hope Veterans?", answer: "You can join by clicking the 'Become a Member' button and filling out our registration form. Verification of veteran status or civic alignment may be required." },
  { question: "Are civilians allowed to participate?", answer: "While our core consists of veterans, we welcome patriotic citizens who align with our mission of security, development, and grassroots mobilization as volunteer partners." },
  { question: "Where are your headquarters located?", answer: "Our national headquarters is located in Abuja, FCT, with state chapters across all 36 states." },
];

// --- Animation Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function RenewedHopeVeterans() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Navbar blur on scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 selection:bg-[#c9a227] selection:text-[#0b3d2e] overflow-x-hidden">
      
      {/* --- Navbar --- */}
     

      {/* --- 1. Hero Section --- */}
      <section id="home" className=" bg-center bg-cover relative pt-32 pb-20 md:pt-10 md:pb-20 overflow-hidden bg-[#0b3d2e]">
        {/* Animated Background Elements */}
             <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img 
                    src={hero} 
                    // src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=2000" 
                    alt="Background Network Journey" 
                    className="w-full h-full object-cover object-center    animate-subtle-pan mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0F2744]/40 via-[#0F2744]/70 to-[#F8F9FA]"></div>
                </div>
        <div className=" pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #c9a227 1px, transparent 0) `, backgroundSize: "32px 32px" }} />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-40 top-[-10%] h-[600px] w-[600px] rounded-full bg-[#c9a227]/20 blur-[100px]" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.6, 0.5] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -left-40 bottom-[-20%] h-[500px] w-[500px] rounded-full bg-[#062018] blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#c9a227]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227]">Renewed Hope Veterans</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl font-extrabold leading-[1.1] text-white">
              Securing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-amber-200">Your Future</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
              Mobilizing the grassroots for a renewed hope Nigeria. United in service. Committed to nation-building. Together, we secure a stronger tomorrow.
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-[#c9a227] px-8 py-4 text-sm font-bold text-[#0b3d2e] shadow-[0_0_40px_-10px_rgba(201,162,39,0.5)] transition-all hover:scale-105 active:scale-95">
                <Users className="h-5 w-5" /> Join Our Movement
              </button>
              <button className="group flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-95">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </div>
                Watch Video
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative mx-auto hidden lg:flex aspect-square w-full max-w-lg items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-12 rounded-full border border-dashed border-[#c9a227]/20 animate-[spin_40s_linear_infinite_reverse]" />
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-b from-[#0b3d2e] to-[#062018] shadow-[0_0_80px_-20px_rgba(201,162,39,0.3)] ring-1 ring-[#c9a227]/30 backdrop-blur-xl"
            >
              <ShieldCheck className="h-32 w-32 text-[#c9a227] drop-shadow-[0_0_15px_rgba(201,162,39,0.5)]" strokeWidth={1} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Trusted By Partners (Marquee effect) --- */}
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-8">
  {/* Fade edges */}
  <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
  <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

  <div className="flex whitespace-nowrap">
    <div className="flex animate-marquee items-center gap-24">
      {[1, 2].map((set) => (
        <React.Fragment key={set}>
          <div className="flex items-center gap-3 text-xl font-extrabold text-slate-800">
            <ShieldCheck className="h-8 w-8 text-[#c9a227]" />
            Civic Union
          </div>

          <div className="flex items-center gap-3 text-xl font-extrabold text-slate-800">
            <Handshake className="h-8 w-8 text-[#0b3d2e]" />
            Veterans Trust
          </div>
        </React.Fragment>
      ))}
    </div>

    {/* Duplicate for seamless scrolling */}
    <div
      className="flex animate-marquee items-center gap-24 pl-24"
      aria-hidden="true"
    >
      {[1, 2].map((set) => (
        <React.Fragment key={set}>
          <div className="flex items-center gap-3 text-xl font-extrabold text-slate-800">
            <ShieldCheck className="h-8 w-8 text-[#c9a227]" />
            Civic Union
          </div>

          <div className="flex items-center gap-3 text-xl font-extrabold text-slate-800">
            <Handshake className="h-8 w-8 text-[#0b3d2e]" />
            Veterans Trust
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
</section>

      {/* --- 3. Who We Are --- */}
      <section id="who-we-are" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="lg:w-5/12 lg:sticky lg:top-32 h-fit">
              <motion.div variants={fadeUp} className="flex items-center space-x-3 mb-6">
                <span className="h-1 w-12 bg-[#c9a227] rounded-full"></span>
                <span className="text-[#0B3B18] font-bold tracking-[0.2em] text-xs uppercase">About Our Movement</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold text-[#0b3d2e] mb-6 leading-[1.1]">
                Who We Are
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 text-lg mb-6 leading-relaxed">
                <strong className="text-[#0b3d2e]">Renewed Hope Veterans (RHV)</strong> is a national movement of Nigerian Armed Forces veterans committed to supporting the leadership of President Bola Ahmed Tinubu, GCFR.
              </motion.p>
              <motion.p variants={fadeUp} className="text-slate-500 mb-8 leading-relaxed">
                From local wards to nationwide polling units, we are organizing, uniting, and mobilizing lawful grassroots support to secure a prosperous future for Nigeria.
              </motion.p>
              <motion.button variants={fadeUp} className="group flex items-center gap-2 text-[#0b3d2e] font-bold hover:text-[#c9a227] transition-colors">
                Learn our history <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="lg:w-7/12 grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feature, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_40px_-10px_rgba(11,61,46,0.1)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0b3d2e] to-[#c9a227] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0b3d2e]/5 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-3 py-1 rounded-full group-hover:bg-[#c9a227]/10 group-hover:text-[#c9a227] transition-colors">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B3B18] mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 4, 5, 6, 7. Mission, Vision, Values, Objectives --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mission */}
            <motion.div variants={fadeUp} className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#c9a227]/30 transition-all hover:shadow-xl">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0b3d2e] mb-4">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">To mobilize and empower veterans as catalysts for national security, grassroots development, and sustained democratic progress.</p>
            </motion.div>

            {/* Vision (Highlighted) */}
            <motion.div variants={fadeUp} className="group p-8 bg-gradient-to-br from-[#0b3d2e] to-[#062018] rounded-3xl text-white shadow-2xl shadow-[#0b3d2e]/20 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">A secure, united, and prosperous Nigeria where the disciplined service of veterans continues to shape a better future for all citizens.</p>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={fadeUp} className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#c9a227]/30 transition-all hover:shadow-xl">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0b3d2e] mb-4">Core Values</h3>
              <ul className="space-y-3 text-slate-600 text-sm font-medium">
                {['Patriotism', 'Integrity', 'Discipline', 'Grassroots Service'].map((val) => (
                  <li key={val} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#c9a227]" /> {val}</li>
                ))}
              </ul>
            </motion.div>

            {/* Objectives */}
            <motion.div variants={fadeUp} className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#c9a227]/30 transition-all hover:shadow-xl">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0b3d2e] mb-4">Objectives</h3>
              <p className="text-slate-600 text-sm leading-relaxed">To bridge the gap between national leadership and local communities through active civic engagement and veteran welfare programs.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 11. Impact Statistics (Animated Data Count) --- */}
      <section id="impact" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0b3d2e]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {STATS.map((stat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-md group-hover:-translate-y-2 transition-transform duration-300">
                  {stat.icon}
                </div>
                {/* Apply the custom AnimatedCounter here */}
                <AnimatedCounter 
                  value={stat.value} 
                  className="text-4xl lg:text-5xl font-black text-white mb-2 drop-shadow-md" 
                />
                <div className="text-[#c9a227] font-bold text-sm tracking-wide uppercase mt-1">{stat.label}</div>
                {stat.subLabel && <div className="text-slate-400 text-xs mt-1">{stat.subLabel}</div>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 8. Our Structure --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0b3d2e]">Organizational Structure</h2>
            <div className="h-1 w-20 bg-[#c9a227] mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="relative before:absolute before:inset-0 before:mx-auto before:w-0.5 before:bg-gradient-to-b before:from-[#0b3d2e] before:via-[#c9a227] before:to-transparent">
            {[
              'National Executive Council', 
              'Zonal Coordinators (6 Zones)', 
              'State Chapters (36 + FCT)', 
              'LGA Commands (774)', 
              'Ward Units (8,809)', 
              'Polling Cells (176,000+)'
            ].map((tier, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="relative z-10 flex justify-center mb-6 last:mb-0"
              >
                <div className="bg-white border-2 border-slate-100 hover:border-[#c9a227] py-4 px-8 rounded-2xl shadow-lg shadow-slate-200/50 w-full md:w-2/3 text-center font-bold text-[#0b3d2e] transition-colors group cursor-default">
                  <span className="inline-block w-8 h-8 bg-slate-50 text-[#c9a227] rounded-full leading-8 mr-3 group-hover:bg-[#c9a227] group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>
                  {tier}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 16. Gallery (Masonry style hover effects) --- */}
  
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-[#0b3d2e] mb-4">Impact Gallery</h2>
            <p className="text-slate-600">Visualizing our nationwide footprint and events.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-[#0b3d2e] font-bold hover:text-[#c9a227] transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {[
            { id: 1, col: 'col-span-2', row: 'row-span-2', img1: hero, img2: gallary1 },
            { id: 2, col: 'col-span-1', row: 'row-span-1', img1: gallary2, img2: gallary1 },
            { id: 3, col: 'col-span-1', row: 'row-span-1', img1: gallary3, img: gallary1 },
            { id: 4, col: 'col-span-2', row: 'row-span-1', img1: gallary4, img2: gallary1 },
          ].map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
              className={`relative rounded-3xl overflow-hidden group bg-slate-200 cursor-pointer ${item.col} ${item.row}`}
            >
              {/* Main Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img src={item.img1} alt="Impact background" className="object-cover w-full h-full" />
              </div>

              {/* Dark Gradient Overlay (Appears on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b3d2e]/90 via-[#0b3d2e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>

              {/* Hover Content Details */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-3">
                {/* Secondary Thumbnail / Avatar */}
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md overflow-hidden rounded-full border border-white/30 shrink-0">
                  <img src={item.img2} alt="Thumbnail" className="object-cover w-full h-full" />
                </div>
                <h4 className="text-white font-bold truncate">Community Outreach</h4>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>

      {/* --- 17. CTA / Donate Banner --- */}
      <section id="donate" className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-gradient-to-r from-[#06200D] via-[#0B3B18] to-[#072E13] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-[#0b3d2e]/30"
        >
          {/* Glassmorphism Orbs */}
          <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-[#c9a227]/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute left-10 top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
            <div className="text-center md:text-left lg:w-3/5">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                Take Action Today
              </span>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Stand With Us For A Better Nigeria</h3>
              <p className="text-slate-300 text-lg md:text-xl font-light">Join thousands of dedicated veterans or support our mission through a financial contribution.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="bg-[#c9a227] text-[#0b3d2e] px-8 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-amber-400 hover:shadow-[0_0_30px_-5px_rgba(201,162,39,0.5)] transition-all active:scale-95 text-lg">
                <User className="w-5 h-5" /> Become a Member
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/20 transition-all active:scale-95 text-lg">
                <CreditCard className="w-5 h-5" /> Donate Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 21. Footer --- */}
      
      {/* Required keyframes for tailwind marquee and spinning */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}