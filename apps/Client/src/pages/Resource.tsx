import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Users, BookOpen, Monitor, DollarSign, Handshake, Network, 
  Building, Laptop, Heart, ShieldCheck, FileText, BarChart3, 
  Download, ArrowRight, CheckCircle2, Building2, 
  Briefcase, GraduationCap, Globe, X, Loader2
} from 'lucide-react';

// --- Advanced Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 12 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50, damping: 15 } }
};

export default function OrganizationalResourcesPage() {
  // --- Functionality State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadingId, setDownloadingId] = useState<number | null>(null);
  const [downloadedItems, setDownloadedItems] = useState<number[]>([]);

  // --- Scroll Parallax ---
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // --- Interactive Functions ---
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = (id: number) => {
    if (downloadedItems.includes(id)) return;
    setDownloadingId(id);
    // Simulate network request
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadedItems(prev => [...prev, id]);
    }, 2000);
  };

  const teamMembers = [
    { name: "General (Ret.) A. Ibrahim", role: "Board Chairman", bio: "20 years military leadership and strategic planning.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" },
    { name: "Dr. Sarah Yusuf", role: "Head of Wellness", bio: "Clinical psychologist specializing in transition care.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
    { name: "Marcus Johnson", role: "Tech Director", bio: "Enterprise software architect and platform lead.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" },
    { name: "Hassan Ali", role: "Regional Coordinator", bio: "Community organizer managing northern operations.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#5E6B78] font-sans selection:bg-[#2F6B4F] selection:text-white overflow-x-hidden">
      
      {/* --- 1. HERO SECTION (Parallax Video) --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0F2744]">
        
        {/* Parallax Video Background */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
            poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2500"
          >
            <source src="https://cdn.coverr.co/videos/coverr-business-meeting-in-an-office-4395/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2744]/70 via-[#0F2744]/80 to-[#0F2744]"></div>
          
          {/* Animated particles/shapes overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-20 flex flex-col items-center">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C8A24A]/10 text-[#C8A24A] font-black tracking-widest uppercase mb-8 border border-[#C8A24A]/20 backdrop-blur-md shadow-[0_0_20px_rgba(200,162,74,0.15)] text-xs md:text-sm">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A24A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8A24A]"></span>
              </span>
              Organizational Capacity
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Resources That Strengthen <br className="hidden md:block"/> Our Organization
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Every successful mission depends on strong people, reliable systems, trusted partnerships, and sustainable resources. These are the foundations that enable us to serve.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button 
                onClick={() => scrollToSection('core-resources')}
                className="w-full sm:w-auto px-8 py-4 bg-[#2F6B4F] hover:bg-[#24523c] text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(47,107,79,0.4)] hover:shadow-[0_0_30px_rgba(47,107,79,0.6)] flex items-center justify-center gap-2 group"
              >
                Explore Resources <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/10 backdrop-blur-md rounded-xl font-bold text-lg transition-all flex items-center justify-center"
              >
                Support Our Mission
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. OUR RESOURCES AT A GLANCE (Dashboard Stats) --- */}
      <section className="relative -mt-20 z-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, type: "spring" }}
          className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-[#0F2744]/15 p-8 md:p-12 border border-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-x divide-gray-200/60">
            {[
              { value: "15+", label: "Programs" },
              { value: "120+", label: "Volunteers" },
              { value: "25+", label: "Partners" },
              { value: "5", label: "Offices" },
              { value: "8", label: "Years" },
              { value: "10k+", label: "Veterans" }
            ].map((stat, i) => (
              <motion.div whileHover={{ scale: 1.1 }} key={i} className={`flex flex-col items-center justify-center text-center cursor-default ${i % 2 !== 0 ? 'pl-8' : ''} ${i !== 0 ? 'lg:pl-8' : ''}`}>
                <span className="text-3xl md:text-5xl font-black text-[#0F2744] mb-2">{stat.value}</span>
                <span className="text-xs md:text-sm font-bold text-[#5E6B78] uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- 3. CORE RESOURCES --- */}
      <section id="core-resources" className="py-32 max-w-7xl mx-auto px-6 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#0F2744] mb-6 tracking-tight">The Pillars of Operation</h2>
          <p className="text-lg text-[#5E6B78] font-medium">Our capacity to serve is built upon six foundational resources that drive everything we do.</p>
        </div>

        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { icon: Users, title: "People", desc: "Our greatest strength is our volunteers, mentors, dedicated staff, and leaders." },
            { icon: BookOpen, title: "Knowledge", desc: "Policies, operational guides, institutional research, and industry best practices." },
            { icon: Monitor, title: "Technology", desc: "Digital member portals, communication systems, and secure databases." },
            { icon: DollarSign, title: "Funding", desc: "Community donations, strategic grants, and responsible financial management." },
            { icon: Handshake, title: "Partnerships", desc: "Relationships with nonprofits, businesses, and healthcare providers." },
            { icon: Network, title: "Network", desc: "Local chapters, regional ambassadors, and integrated support groups." }
          ].map((core, i) => (
            <motion.div 
              key={i} variants={scaleIn}
              className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2F6B4F]/5 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="w-16 h-16 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0F2744] transition-colors duration-300 shadow-inner">
                <core.icon className="w-8 h-8 text-[#2F6B4F] group-hover:text-[#C8A24A] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-black text-[#0F2744] mb-4">{core.title}</h3>
              <p className="text-[#5E6B78] leading-relaxed font-medium">{core.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 4. HUMAN RESOURCES (Interactive Modal Trigger) --- */}
      <section className="py-32 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8A24A]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F2744] mb-6 tracking-tight">Human Infrastructure</h2>
              <p className="text-lg text-[#5E6B78] font-medium">A dedicated network of leaders driving operational success.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-[#0F2744] text-white rounded-xl font-bold hover:bg-[#2F6B4F] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            >
              View Full Directory <Users className="w-5 h-5" />
            </button>
          </div>

          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((person, i) => (
              <motion.div variants={fadeUp} key={i} className="bg-[#F8F9FA] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-72 overflow-hidden relative">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="text-white font-bold flex items-center gap-2 hover:text-[#C8A24A]">Connect <ArrowRight className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-black text-[#0F2744] text-xl mb-1">{person.name}</h4>
                  <p className="text-[#C8A24A] font-black text-xs uppercase tracking-widest mb-4">{person.role}</p>
                  <p className="text-[#5E6B78] text-sm leading-relaxed font-medium">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 5. TRANSPARENCY (Interactive Downloads) --- */}
      <section className="py-32 bg-[#0F2744] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C8A24A]/20 rounded-3xl mb-8 border border-[#C8A24A]/30">
            <BarChart3 className="w-10 h-10 text-[#C8A24A]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Radical Transparency</h2>
          <p className="text-gray-300 text-lg mb-16 font-medium max-w-2xl mx-auto">
            We build trust through complete operational transparency. Access our financial summaries, impact audits, and governance frameworks instantly.
          </p>
          
          <div className="space-y-4 max-w-3xl mx-auto text-left">
            {[
              { id: 1, name: "2025 Annual Impact Report", size: "4.2 MB", type: "PDF" },
              { id: 2, name: "Financial Summary (Q1-Q4)", size: "1.8 MB", type: "XLSX" },
              { id: 3, name: "Governance & Code of Ethics", size: "850 KB", type: "PDF" }
            ].map((doc) => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                key={doc.id} 
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{doc.name}</h4>
                    <p className="text-sm text-gray-400">{doc.size} • Secure {doc.type}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleDownload(doc.id)}
                  disabled={downloadedItems.includes(doc.id) || downloadingId === doc.id}
                  className={`px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all min-w-[160px]
                    ${downloadedItems.includes(doc.id) 
                      ? 'bg-[#2F6B4F]/20 text-[#2F6B4F] border border-[#2F6B4F]/50 cursor-default' 
                      : downloadingId === doc.id
                        ? 'bg-[#2F6B4F]/50 text-white cursor-wait'
                        : 'bg-[#2F6B4F] hover:bg-[#24523c] text-white shadow-lg'
                    }`}
                >
                  {downloadedItems.includes(doc.id) ? (
                    <><CheckCircle2 className="w-5 h-5" /> Downloaded</>
                  ) : downloadingId === doc.id ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Fetching...</>
                  ) : (
                    <><Download className="w-5 h-5" /> Download</>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CALL TO ACTION --- */}
      <section id="cta" className="py-40 bg-[#C8A24A] text-[#0F2744] text-center relative overflow-hidden rounded-t-[4rem]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2500')] opacity-10 bg-cover bg-center mix-blend-multiply"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            Help Us Build <br className="hidden md:block"/> Stronger Resources
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-bold opacity-80">
            Whether you volunteer, donate, or share your expertise, your support strengthens our ability to serve veterans.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-6 bg-[#0F2744] text-white rounded-2xl font-black text-lg hover:bg-[#1a3a63] transition-all shadow-xl hover:-translate-y-1">
              Become a Partner
            </button>
            <button className="px-10 py-6 bg-transparent border-4 border-[#0F2744] text-[#0F2744] rounded-2xl font-black text-lg hover:bg-[#0F2744] hover:text-white transition-all hover:-translate-y-1">
              Make a Donation
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- INTERACTIVE MODAL (Directory) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#0F2744]/80 backdrop-blur-sm z-50 cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-white rounded-[2rem] shadow-2xl z-50 overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-[#F8F9FA]">
                <div>
                  <h3 className="text-2xl font-black text-[#0F2744]">Full Organizational Directory</h3>
                  <p className="text-sm text-[#5E6B78] font-medium">Leadership, Staff, and Regional Coordinators</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-500 hover:text-red-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...teamMembers, 
                    { name: "Dr. Amina Bello", role: "Head of Education", bio: "Curriculum designer and academic liaison.", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=300" },
                    { name: "David Okafor", role: "Financial Director", bio: "CPA managing grant allocations and transparent funding.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" }
                  ].map((person, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:border-[#2F6B4F]/30 hover:bg-[#F8F9FA] transition-colors cursor-pointer group">
                      <img src={person.img} alt={person.name} className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-bold text-[#0F2744] group-hover:text-[#2F6B4F] transition-colors">{person.name}</h4>
                        <p className="text-xs font-black text-[#C8A24A] uppercase mb-1">{person.role}</p>
                        <p className="text-xs text-[#5E6B78] line-clamp-1">{person.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
    </div>
  );
}