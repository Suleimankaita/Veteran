import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Shield, Users, Map as MapIcon, Building, Briefcase, Award,
  CheckCircle, ChevronDown, Mail, Phone, MapPin, Target,
  Globe, Lock, Eye, Flag, Network, Database, Heart, Monitor, Rss,
  UserCheck, AlignEndHorizontal, ChevronRight, FileText, Sparkles
} from 'lucide-react';

// --- IMAGES ---
const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920",
  overview: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  mapPlaceholder: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
  avatar1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
  avatar2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
  avatar3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
  avatar4: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&q=80&w=300",
  avatar5: "https://images.unsplash.com/photo-1583994033306-05995536109f?auto=format&fit=crop&q=80&w=300",
  avatar6: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
};

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// --- STATE MAP DATA ---
interface StateData {
  name: string;
  chairman: string;
  members: string;
  projects: number;
  office: string;
  coords: { x: string; y: string };
}

const NIGERIA_STATES: Record<string, StateData> = {
  Katsina: {
    name: "Katsina State",
    chairman: "Alh. Ibrahim Kabir",
    members: "4,250",
    projects: 12,
    office: "Secretariat Complex, Katsina City Center",
    coords: { x: "42%", y: "20%" }
  },
  Kano: {
    name: "Kano State",
    chairman: "Capt. Usman Bello (Rtd)",
    members: "6,800",
    projects: 18,
    office: "Zoo Road Executive Suites, Kano",
    coords: { x: "55%", y: "25%" }
  },
  Abuja: {
    name: "FCT Abuja (HQ)",
    chairman: "Gen. Abubakar (Rtd)",
    members: "9,100",
    projects: 25,
    office: "National Veterans Headquarters, Central Business District",
    coords: { x: "48%", y: "48%" }
  },
  Lagos: {
    name: "Lagos State",
    chairman: "Cmdr. Babatunde Sanusi",
    members: "8,400",
    projects: 22,
    office: "Victoria Island Veterans Center, Lagos",
    coords: { x: "20%", y: "78%" }
  },
  Rivers: {
    name: "Rivers State",
    chairman: "Lt. Col. Chidi Nnamdi",
    members: "5,100",
    projects: 14,
    office: "GRA Phase 2 Secretariat, Port Harcourt",
    coords: { x: "45%", y: "85%" }
  },
  Enugu: {
    name: "Enugu State",
    chairman: "Maj. Emeka Okoh",
    members: "3,900",
    projects: 9,
    office: "Independence Layout, Enugu",
    coords: { x: "58%", y: "70%" }
  }
};

export default function OurStructureAnimated() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedState, setSelectedState] = useState<string>("Katsina");

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen overflow-x-hidden">
      
      {/* NAVBAR */}
  
{/* 
bg-emerald-950 text-white min-h-[85vh] flex items-center">
*/}
      {/* 1. HERO SECTION */}
      <section className="relative bg-emerald-950 min-h-[80vh] flex items-center pt-10 pb-20 overflow-hidden">
        {/* Background Overlay & Floating Accents */}
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.heroBg} alt="Conference background" className="w-full h-full object-cover opacity-20" />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-950/80" /> */}
          {/* Animated Background Glow Orbs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Our Structure</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                A Transparent <br />
                <span className="text-amber-400 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Leadership Framework</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                Designed to ensure effective coordination, accountability, and nationwide service delivery from the National Executive Council down to local polling unit leaders.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#leadership" 
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-xl transition text-center"
                >
                  View Leadership
                </motion.a>
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border-2 border-white/80 hover:bg-white hover:text-emerald-950 text-white font-bold px-8 py-4 rounded-xl transition text-center"
                >
                  Become a Member
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Hero Right Stat Cards (Grid) */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {[
                { label: "States + FCT", val: "36", icon: MapPin },
                { label: "LGAs", val: "774", icon: Building },
                { label: "Polling Units", val: "8,000+", icon: Target },
                { label: "Active Members", val: "50,000+", icon: Users }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center shadow-lg transition"
                >
                  <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <p className="text-3xl font-black text-white">{stat.val}</p>
                  <p className="text-xs font-semibold text-emerald-100 uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ORGANIZATION OVERVIEW */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 bg-emerald-100 text-emerald-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
              <AlignEndHorizontal className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Organization Overview</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed pt-2">
              Renewed Hope Veterans operates through a clearly defined organizational hierarchy that promotes accountability, transparency, and effective communication from the National Executive Council down to local community leaders. This structure enables efficient coordination of programs, member engagement, and community development initiatives across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. ORGANIZATIONAL HIERARCHY (Interactive / Flow Tree) */}
      <section id="hierarchy" className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Chain of Command</h2>
            <p className="text-slate-600 mt-2">Visualizing our unbroken structure from national patrons to members.</p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Animated Connecting Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-emerald-300 hidden sm:block" />

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-5 relative z-10"
            >
              {[
                { title: "National Patron", desc: "Vision, Strategic Advice & Integrity Oversight", style: "bg-slate-950 text-white border-2 border-slate-800" },
                { title: "National Chairman", desc: "Executive Leadership & General Direction", style: "bg-emerald-900 text-white border-2 border-amber-400 shadow-lg" },
                { title: "National Executive Council", desc: "National Directors, Secretaries & Officers", style: "bg-white text-emerald-950 border-2 border-emerald-900" },
                { title: "State Coordinators", desc: "36 States + FCT Administrative Oversight", style: "bg-white text-slate-800 border border-slate-300" },
                { title: "LGA Coordinators", desc: "774 Local Government Area Command", style: "bg-white text-slate-800 border border-slate-300" },
                { title: "Ward Coordinators", desc: "Grassroots Administration & Community Outreach", style: "bg-white text-slate-800 border border-slate-300" },
                { title: "Polling Unit Leaders", desc: "Neighborhood Engagement & Support Delivery", style: "bg-white text-slate-800 border border-slate-300" },
                { title: "Registered Members", desc: "The Patriotic Backbone of our Mission", style: "bg-amber-100 text-slate-900 border-2 border-amber-400 font-bold" }
              ].map((node, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  className="flex justify-center"
                >
                  <div className={`w-full sm:w-3/4 p-4 rounded-xl text-center shadow-sm cursor-pointer transition ${node.style}`}>
                    <h3 className="text-lg font-bold">{node.title}</h3>
                    <p className="text-xs opacity-80 mt-0.5 uppercase tracking-wider">{node.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. NATIONAL EXECUTIVE COUNCIL */}
      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">National Executive Council</h2>
            <p className="text-slate-600 mt-2">Principal officers tasked with executing our strategic agenda.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {[
              { role: "National Chairman", name: "Gen. Abubakar (Rtd)", img: IMAGES.avatar1 },
              { role: "Vice Chairman", name: "Capt. Musa Bello", img: IMAGES.avatar2 },
              { role: "Secretary General", name: "Dr. Ngozi Okafor", img: IMAGES.avatar3 },
              { role: "Director of Programs", name: "Major David Mark", img: IMAGES.avatar4 },
              { role: "Women Affairs", name: "Lt. Fatima Usman", img: IMAGES.avatar5 },
              { role: "Director of ICT", name: "Engr. Suleiman", img: IMAGES.avatar6 },
            ].map((leader, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {leader.role}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-emerald-950 mb-2">{leader.name}</h3>
                  <p className="text-xs text-slate-500 mb-4">Renewed Hope Veterans Executive Council</p>
                  
                  <div className="flex space-x-3 text-slate-400 mb-4">
                    <button className="hover:text-emerald-700 transition p-2 bg-white rounded-lg border border-slate-200"><Mail className="w-4 h-4" /></button>
                    <button className="hover:text-emerald-700 transition p-2 bg-white rounded-lg border border-slate-200"><Phone className="w-4 h-4" /></button>
                  </div>

                  <button className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-xl text-sm transition">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5, 6, 7, 8. GRASSROOTS STRUCTURE */}
      <section className="py-20 bg-emerald-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black">Grassroots Command Structure</h2>
            <p className="text-emerald-200 mt-2">Delivering impact directly into every neighborhood.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "State Chapters",
                icon: MapPin,
                sub: "36 States + FCT",
                roles: ["State Chairman", "State Exec Council", "Project Officers"]
              },
              {
                title: "LGA Structure",
                icon: Building,
                sub: "774 Local Areas",
                roles: ["LGA Chairman", "Secretary & Treasurer", "Committee Chairs"]
              },
              {
                title: "Ward Structure",
                icon: Users,
                sub: "8,000+ Wards",
                roles: ["Ward Chairman", "Welfare Officer", "Community Mobilizers"]
              },
              {
                title: "Polling Unit",
                icon: Target,
                sub: "Grassroots Base",
                roles: ["Unit Leader", "Assistant Leader", "Registered Volunteers"]
              }
            ].map((level, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-emerald-900/40 border border-emerald-800/80 p-6 rounded-2xl relative overflow-hidden backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-4">
                  <level.icon className="w-6 h-6" />
                </div>
                <p className="text-xs text-amber-400 font-bold uppercase tracking-widest">{level.sub}</p>
                <h3 className="text-xl font-bold text-white mb-4">{level.title}</h3>
                
                <div className="space-y-2 pt-2 border-t border-emerald-800">
                  {level.roles.map((r, rIdx) => (
                    <div key={rIdx} className="flex items-center text-xs text-emerald-100">
                      <UserCheck className="w-3.5 h-3.5 mr-2 text-emerald-400" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DEPARTMENTS & COMMITTEES */}
      <section id="departments" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Departments & Committees</h2>
            <p className="text-slate-600 mt-2">Operational divisions dedicated to specialized programs.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { name: "Membership Dept", icon: Database, items: ["Registration Engine", "Identity Verification", "Member Database"] },
              { name: "Welfare Dept", icon: Heart, items: ["Veteran Aid Funds", "Emergency Response", "Healthcare Access"] },
              { name: "Programs Dept", icon: Briefcase, items: ["Community Projects", "Skills & Training", "National Outreach"] },
              { name: "Finance Dept", icon: FileText, items: ["Budget Allocation", "Grants & Donations", "Auditing & Reports"] },
              { name: "ICT Dept", icon: Monitor, items: ["Web Portal System", "Digital Onboarding", "Cyber Security"] },
              { name: "Media & PR", icon: Rss, items: ["Press Releases", "Social Media Campaigns", "Civic Education"] },
            ].map((dept, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-900 rounded-xl flex items-center justify-center">
                    <dept.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{dept.name}</h3>
                </div>
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {dept.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600">
                      <ChevronRight className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. RESPONSIBILITIES & 11. WORKFLOW */}
      <section id="workflow" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Leadership Responsibilities */}
            <div>
              <h2 className="text-3xl font-black text-emerald-950 mb-6">Leadership Roles</h2>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-emerald-950 text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold">Position</th>
                      <th className="px-6 py-4 font-bold">Core Responsibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { pos: "Chairman", resp: "Strategic leadership & executive representation" },
                      { pos: "Secretary", resp: "Administrative coordination & records" },
                      { pos: "Treasurer", resp: "Financial oversight & transparent auditing" },
                      { pos: "Welfare Officer", resp: "Veteran emergency aid & support programs" },
                      { pos: "ICT Director", resp: "Digital infrastructure & member portal" },
                      { pos: "PR Officer", resp: "Public relations & media strategy" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white transition">
                        <td className="px-6 py-4 font-bold text-emerald-950">{row.pos}</td>
                        <td className="px-6 py-4 text-slate-600">{row.resp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Animated Workflow Steps */}
            <div>
              <h2 className="text-3xl font-black text-emerald-950 mb-6">Decision & Action Workflow</h2>
              <div className="space-y-4">
                {[
                  "Community Need Identified at Polling Unit",
                  "Ward Level Escalation & Documentation",
                  "LGA Review & Strategic Assessment",
                  "State Coordination & Resource Mapping",
                  "National Executive Council Approval",
                  "On-Ground Project Execution",
                  "Impact Audit & Report Publishing"
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-center space-x-4 bg-slate-50 border border-slate-200 p-4 rounded-xl hover:border-emerald-700 transition"
                  >
                    <div className="w-8 h-8 bg-emerald-900 text-amber-400 font-black rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="font-semibold text-slate-800 text-sm">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. INTERACTIVE NIGERIA MAP SYSTEM */}
      <section id="presencemap" className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black">Interactive National Map</h2>
            <p className="text-slate-400 mt-2">Click on a state to view local leadership and project statistics.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            
            {/* Left: State Selector Buttons & Graphic */}
            <div className="lg:col-span-7 bg-slate-950 p-8 relative flex flex-col justify-between min-h-[420px]">
              <img src={IMAGES.mapPlaceholder} alt="Nigeria Map" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay" />
              
              <div className="relative z-10 mb-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">Select Region</span>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(NIGERIA_STATES).map((stateKey) => (
                    <button
                      key={stateKey}
                      onClick={() => setSelectedState(stateKey)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                        selectedState === stateKey
                          ? "bg-amber-500 text-slate-950 shadow-lg scale-105"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {stateKey}
                    </button>
                  ))}
                </div>
              </div>

              {/* Animated Map Pins Graphic */}
              <div className="relative z-10 my-auto text-center py-8">
                <div className="relative inline-block">
                  <Network className="w-32 h-32 text-emerald-500/30 mx-auto" />
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-amber-400 rounded-full opacity-75"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-500 rounded-full" />
                </div>
                <p className="text-xs text-slate-400 mt-4">Active Node: <span className="text-amber-400 font-bold">{NIGERIA_STATES[selectedState].name}</span></p>
              </div>

              <p className="relative z-10 text-xs text-slate-500">Representing 36 States and the Federal Capital Territory.</p>
            </div>

            {/* Right: Selected State Animated Panel */}
            <div className="lg:col-span-5 bg-slate-900 p-8 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedState}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-black text-white">{NIGERIA_STATES[selectedState].name}</h3>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs px-3 py-1 rounded-full font-bold">
                      Active Chapter
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">State Coordinator</p>
                    <div className="flex items-center space-x-3 bg-slate-800 p-3.5 rounded-xl border border-slate-700">
                      <UserCheck className="w-5 h-5 text-amber-400" />
                      <p className="font-bold text-slate-100">{NIGERIA_STATES[selectedState].chairman}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                      <p className="text-xs text-slate-400 mb-1">Members</p>
                      <p className="text-2xl font-black text-amber-400">{NIGERIA_STATES[selectedState].members}</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                      <p className="text-xs text-slate-400 mb-1">Community Projects</p>
                      <p className="text-2xl font-black text-amber-400">{NIGERIA_STATES[selectedState].projects}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Office Location</p>
                    <p className="text-xs text-slate-300 flex items-start leading-relaxed bg-slate-800/50 p-3 rounded-xl border border-slate-800">
                      <MapPin className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      {NIGERIA_STATES[selectedState].office}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition">
                Contact {selectedState} Office
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 13. LEADERSHIP PRINCIPLES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Leadership Principles</h2>
            <p className="text-slate-600 mt-2">Values that govern every level of our command hierarchy.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", icon: Lock },
              { title: "Accountability", icon: Eye },
              { title: "Transparency", icon: Globe },
              { title: "Service", icon: Heart },
              { title: "Unity", icon: Users },
              { title: "Respect", icon: Shield },
              { title: "Professionalism", icon: Briefcase },
              { title: "Innovation", icon: Target }
            ].map((val, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm hover:border-emerald-600 transition"
              >
                <val.icon className="w-8 h-8 text-emerald-900 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900">{val.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Structure FAQs</h2>
            <p className="text-slate-600 mt-2">Answers regarding leadership selection and chapter management.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How are leaders selected?", a: "Leadership positions are selected through a democratic voting and constitutional vetting process overseen by the National Executive Council." },
              { q: "How long is a leadership term?", a: "Standard leadership terms are 4 years, after which re-election is permitted based on performance and constitutional guidelines." },
              { q: "Can members become leaders?", a: "Yes. Active, verified members can run for leadership roles at the Ward, LGA, and State levels after meeting tenure requirements." },
              { q: "How are state chapters formed?", a: "State chapters are officially inaugurated by the National Executive Council after establishing a minimum threshold of registered members." },
              { q: "How can I contact my state coordinator?", a: "Select your state in the Interactive Map section above or log into the Member Portal for direct contact details." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-100 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-900 transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. CALL TO ACTION */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Lead With Purpose. <br />
            <span className="text-amber-400">Serve With Integrity.</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Become part of a leadership network dedicated to empowering veterans, strengthening communities, and building a better Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition">
              Become a Member
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition">
              Volunteer
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-bold px-8 py-4 rounded-xl transition">
              Contact Leadership
            </motion.button>
          </div>
        </div>
      </section>



    </div>
  );
}