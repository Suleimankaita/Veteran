import React from 'react';
import { motion } from 'framer-motion';
import { 
  Medal, BookOpen, Heart, Rocket, Users, ChevronRight, 
  CheckCircle2, ShieldCheck, Target, Briefcase, GraduationCap, 
  ArrowRight, FileText, Activity
} from 'lucide-react';

// --- Shared Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

export default function VeteranProgramsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-700 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529148482759-b35b25c56c20?auto=format&fit=crop&q=80&w=2000" 
            alt="Veterans transitioning" 
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center pb-32">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 text-emerald-400 font-bold text-sm mb-6 border border-emerald-700/50 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5" />
              <span className="tracking-wide uppercase">No Veteran Left Behind</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Programs That <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                Continue The Mission
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Supporting veterans beyond service through career development, wellness, education, and community. We continue serving those who served.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/50 flex items-center justify-center gap-2">
                Explore Programs
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/20 rounded-xl font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                Apply For Support
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Statistics Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20 px-6"
        >
          <div className="max-w-5xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8 backdrop-blur-xl grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700 text-center">
            {[
              { label: "Veterans Supported", value: "50,000+" },
              { label: "Community Programs", value: "200+" },
              { label: "Countries Reached", value: "25+" }
            ].map((stat, i) => (
              <div key={i} className="pt-4 md:pt-0">
                <h3 className="text-4xl font-black text-white mb-1">{stat.value}</h3>
                <p className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2. VETERAN PROGRAM CATEGORIES */}
      <section className="pt-48 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Dedicated Support Programs</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Career Transition", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100", border: "hover:border-blue-500", desc: "Helping veterans transition from military careers into civilian employment.", features: ["Resume Development", "Interview Preparation", "Job Placement", "Technical Training", "Professional Networking"] },
              { title: "Education & Skills", icon: GraduationCap, color: "text-emerald-600", bg: "bg-emerald-100", border: "hover:border-emerald-500", desc: "Providing access to education and modern skills.", features: ["Software Development", "Cybersecurity", "Engineering", "Certifications", "Scholarships"] },
              { title: "Mental Wellness", icon: Heart, color: "text-rose-600", bg: "bg-rose-100", border: "hover:border-rose-500", desc: "Supporting emotional resilience and mental wellbeing.", features: ["Counseling", "Peer Support", "Wellness Activities", "Family Support"] },
              { title: "Entrepreneurship", icon: Rocket, color: "text-amber-600", bg: "bg-amber-100", border: "hover:border-amber-500", desc: "Helping veterans build scalable businesses.", features: ["Business Training", "Startup Mentorship", "Funding Guidance", "Business Network"] },
              { title: "Brotherhood", icon: Users, color: "text-indigo-600", bg: "bg-indigo-100", border: "hover:border-indigo-500", desc: "Creating connections between veterans.", features: ["Veteran Network", "Local Events", "Mentorship", "Community Integration"] }
            ].map((cat, i) => (
              <motion.div key={i} variants={fadeUp} className={`bg-white p-8 rounded-2xl border-2 border-transparent shadow-md transition-all duration-300 hover:shadow-xl ${cat.border} flex flex-col h-full`}>
                <div className={`w-14 h-14 ${cat.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <cat.icon className={`w-7 h-7 ${cat.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{cat.desc}</p>
                
                <ul className="space-y-2 mb-8">
                  {cat.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED PROGRAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
            className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            <motion.div variants={fadeIn} className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Training" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900 lg:block hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent lg:hidden block"></div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-xs mb-4">
                <Target className="w-4 h-4" /> Featured Program
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Veteran Digital Career Academy
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Transform your military experience and discipline into a high-paying career in the modern technology sector.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["Full Stack Development", "Cloud Engineering", "Cybersecurity", "AI Technologies"].map((item, i) => (
                  <div key={i} className="flex items-center text-white bg-slate-800/50 border border-slate-700 p-4 rounded-xl backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div>
                <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                  Join Program <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. PROGRAM JOURNEY */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">The Veteran Journey</h2>
            <p className="text-slate-600 text-lg">A structured, mission-oriented path to your next success.</p>
          </div>

          <div className="relative border-l-4 border-slate-200 ml-4 md:ml-0 md:pl-0 space-y-16">
            {[
              { step: "01", title: "Assessment", desc: "Understand veteran goals, existing skills, and immediate needs." },
              { step: "02", title: "Personal Plan", desc: "Create a customized, tactical development roadmap." },
              { step: "03", title: "Training & Support", desc: "Access top-tier education, mentorship, and critical resources." },
              { step: "04", title: "Opportunity", desc: "Connect with employers, businesses, and veteran communities." },
              { step: "05", title: "Success & Beyond", desc: "Continue growing after the program as part of our alumni." }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }}
                key={i} className="relative pl-10 md:pl-16 group"
              >
                <div className="absolute w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-slate-300 -left-[26px] top-0 border-4 border-slate-50 transition-colors group-hover:bg-emerald-600">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VETERAN IMPACT DASHBOARD */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Activity className="w-8 h-8 text-emerald-400" /> Veteran Impact Dashboard
            </h2>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl space-y-10">
            {[
              { label: "Programs Delivered", target: 90 },
              { label: "Veterans Graduated", target: 80 },
              { label: "Employment Success", target: 95 }
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between text-white font-bold mb-3 uppercase tracking-wide text-sm">
                  <span>{stat.label}</span>
                  <span className="text-emerald-400">{stat.target}%</span>
                </div>
                <div className="h-4 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-700">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: `${stat.target}%` }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full relative"
                  >
                    {/* Dashboard scanning line effect */}
                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-white/20 blur-sm animate-[pulse_2s_infinite]"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-slate-600 text-lg">Real veterans. Real transitions. Real careers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between"
            >
              <div className="mb-8 relative">
                <span className="text-6xl text-slate-200 absolute -top-4 -left-2 leading-none font-serif">"</span>
                <p className="text-slate-700 text-lg relative z-10 font-medium italic">
                  After 10 years of service, transitioning was daunting. This program helped me translate my leadership skills into tech. I now build applications professionally.
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="John Smith" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-600" />
                <div>
                  <h4 className="font-bold text-slate-900">John Smith</h4>
                  <p className="text-sm font-semibold text-slate-500">Former Military Officer</p>
                  <p className="text-sm text-emerald-600 font-bold">Software Engineer</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between"
            >
              <div className="mb-8 relative">
                <span className="text-6xl text-slate-200 absolute -top-4 -left-2 leading-none font-serif">"</span>
                <p className="text-slate-700 text-lg relative z-10 font-medium italic">
                  The entrepreneurship track gave me the funding guidance and mentorship I needed to launch my logistics business. The brotherhood here is real.
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150" alt="Sarah Davis" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Sarah Davis</h4>
                  <p className="text-sm font-semibold text-slate-500">Army Veteran</p>
                  <p className="text-sm text-emerald-600 font-bold">Logistics Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. APPLICATION PROCESS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Application Process</h2>
            <p className="text-slate-600 text-lg">A simple, secure workflow to get you started.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { step: "Step 1", title: "Create Profile", icon: FileText },
              { step: "Step 2", title: "Verify Status", icon: ShieldCheck },
              { step: "Step 3", title: "Choose Program", icon: Target },
              { step: "Step 4", title: "Meet Advisor", icon: Users },
              { step: "Step 5", title: "Begin Journey", icon: Rocket }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                key={i} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 relative group"
              >
                <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">{item.step}</p>
                <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                
                {/* Arrow to next step (hidden on last item and mobile) */}
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-300 z-10">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-24 bg-emerald-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 opacity-50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574762956272-9844be7ce51b?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Begin Your Next Mission?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            You served us. Now let us serve you. Apply today to access exclusive training, mentorship, and career placement.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-900 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-xl">
              Start Application
            </button>
            <button className="px-8 py-4 bg-emerald-900/50 text-white border border-emerald-400/30 rounded-xl font-bold hover:bg-emerald-900 transition-colors backdrop-blur-md">
              Speak to an Advisor
            </button>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}