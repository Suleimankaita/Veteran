import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, 
  ArrowRight, Shield, Heart, Flag, Users, TrendingUp, Hand, BookOpen, 
  Medal, Lock, User, UserCheck, GraduationCap, ShieldCheck, Quote, Star, 
  Upload, ChevronDown, Calendar, ArrowRightCircle
} from 'lucide-react';

import Member from '../assets/Member.png';
// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};




const Hero = () => (
  <div className="relative bg-white pt-8 pb-16 lg:py-20 px-4 sm:px-8 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={Member} alt="Veterans Community" className="w-full h-full object-cover opacity-60" />
    </div>
    <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
        <motion.p variants={fadeInUp} className="text-[#054226] font-bold tracking-wide text-sm uppercase">JOIN US TODAY</motion.p>
        <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-extrabold text-[#054226] leading-tight">
          Join the Renewed <br/> Hope Veterans <br/>
          <span className="text-[#c99e38]">Community</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-gray-600 text-lg max-w-lg leading-relaxed">
          Become part of a vibrant family of individuals committed to leadership, community development, collaboration, and creating lasting impact across Nigeria.
        </motion.p>
        <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
          <button className="bg-[#054226] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#032e1a] transition-all">
            <UserCheck size={18} /> Join Today
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
            Learn More <ArrowRightCircle size={18} />
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Features Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[#054226]/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-white space-y-6 max-w-md ml-auto"
      >
        {[
          { icon: Heart, title: "Make a Difference", desc: "Impact lives and communities" },
          { icon: TrendingUp, title: "Grow Your Leadership", desc: "Develop skills and lead change" },
          { icon: Users, title: "Build Connections", desc: "Network with like-minded people" },
          { icon: Shield, title: "Be Part of Something Big", desc: "Join a movement for a better Nigeria" }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="bg-[#c99e38]/20 p-3 rounded-full border border-[#c99e38]/50 text-[#c99e38]">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

const Stats = () => (
  <div className="bg-[#032e1a] py-8 px-4 relative z-20 shadow-xl rounded-t-3xl -mt-8 max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-green-800">
      {[
        { count: "15,000+", label: "Registered Members" },
        { count: "500+", label: "Community Projects" },
        { count: "36", label: "State Chapters" },
        { count: "10,000+", label: "Active Volunteers" },
        { count: "150+", label: "Partner Organizations" }
      ].map((stat, idx) => (
        <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-white px-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#c99e38]">{stat.count}</h2>
          <p className="text-xs md:text-sm mt-1 text-gray-300 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- MAIN LAYOUT COMPONENT ---
export default function RenewedHopeVeterans() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* <TopBar /> */}
      {/* <NavBar /> */}
      <Hero />
      <Stats />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Features, Info, Testimonials */}
          <div className="w-full lg:w-[45%] xl:w-[45%] space-y-16">
            
            {/* Why Join Us */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <h2 className="text-center font-bold text-xl mb-8 uppercase tracking-widest text-gray-800 border-b pb-4">Why Join Us?</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, title: "Community Impact", text: "Be part of meaningful projects that transform communities." },
                  { icon: Flag, title: "Leadership", text: "Develop leadership skills and take on impactful roles." },
                  { icon: Users, title: "Networking", text: "Connect with passionate individuals across Nigeria." },
                  { icon: TrendingUp, title: "Personal Growth", text: "Gain new skills, experience and opportunities for growth." },
                  { icon: Hand, title: "Volunteer", text: "Contribute your time and skills to support worthy causes." },
                  { icon: BookOpen, title: "Training & Development", text: "Access workshops, training and capacity building programs." },
                  { icon: Medal, title: "Recognition", text: "Get recognized for your contributions and achievements." },
                  { icon: Lock, title: "Exclusive Access", text: "Enjoy member-only resources, events and opportunities." }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                    <item.icon className="text-[#054226] mb-3 w-8 h-8 stroke-[1.5]" />
                    <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Membership Categories */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <h2 className="text-center font-bold text-xl mb-8 uppercase tracking-widest text-gray-800 border-b pb-4">Membership Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { icon: User, title: "Full Member", text: "Active members committed to the vision and mission." },
                  { icon: UserCheck, title: "Associate Member", text: "Supporters and partners contributing to our goals." },
                  { icon: Hand, title: "Volunteer", text: "Individuals who volunteer their time and skills." },
                  { icon: GraduationCap, title: "Youth Member", text: "Young leaders building their future and community." },
                  { icon: ShieldCheck, title: "Honorary Member", text: "Recognized for exceptional contributions." }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-between">
                    <div>
                      <item.icon className="text-[#054226] mb-2 w-8 h-8 stroke-[1.5] mx-auto" />
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-[10px] text-gray-500 mb-3">{item.text}</p>
                    </div>
                    <button className="w-full bg-[#054226] hover:bg-[#032e1a] text-white text-xs py-1.5 rounded transition-colors">Select</button>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <div className="flex items-center justify-between border-b pb-4 mb-8">
                <h2 className="font-bold text-xl uppercase tracking-widest text-gray-800">What Our Members Say</h2>
                <Quote className="text-[#c99e38] opacity-30 w-8 h-8" />
              </div>
              <div className="space-y-4">
                {[
                  { name: "Adekunle O.", chapter: "Lagos State Chapter", text: "Joining RHV gave me the opportunity to serve my community and grow as a leader.", img: "https://i.pravatar.cc/100?img=11" },
                  { name: "Maryam S.", chapter: "Kaduna State Chapter", text: "The training and support I received as a member has been life-changing.", img: "https://i.pravatar.cc/100?img=47" },
                  { name: "Ibrahim T.", chapter: "Kano State Chapter", text: "RHV is more than an organization, it's a family with a purpose.", img: "https://i.pravatar.cc/100?img=12" }
                ].map((test, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
                    <img src={test.img} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="text-sm text-gray-600 mb-2 italic">"{test.text}"</p>
                      <h4 className="font-bold text-sm">{test.name}</h4>
                      <p className="text-[10px] text-gray-400 mb-1">{test.chapter}</p>
                      <div className="flex text-[#c99e38] gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA Banner */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#054226] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Shield size={120} /></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold mb-3">Be the Change. Join Today!</h2>
                <p className="text-gray-300 mb-6 max-w-sm">Together, we can build stronger communities and a better Nigeria for all.</p>
                <button className="bg-[#c99e38] hover:bg-[#b58b29] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 shadow-lg transition-all">
                  Join Now <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Registration Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-[55%] xl:w-[55%]">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
              <div className="mb-8 border-b pb-4">
                <h2 className="text-2xl font-black text-[#054226] uppercase tracking-wide">Membership Registration</h2>
                <p className="text-gray-500 mt-1">Fill out the form below to become a member</p>
              </div>

              <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                
                {/* Personal Info */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <User size={16} className="text-[#054226]" /> Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <input type="text" placeholder="First Name *" className="form-input" />
                    <input type="text" placeholder="Last Name *" className="form-input" />
                    <div className="relative">
                      <input type="text" placeholder="Date of Birth *" className="form-input pr-10" />
                      <Calendar size={16} className="absolute right-3 top-3 text-gray-400" />
                    </div>
                    <select className="form-select text-gray-500"><option>Gender *</option></select>
                    <select className="form-select text-gray-500 lg:col-span-2"><option>Marital Status</option></select>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <Phone size={16} className="text-[#054226]" /> Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone Number *" className="form-input" />
                    <input type="email" placeholder="Email Address *" className="form-input" />
                    <input type="text" placeholder="Home Address *" className="form-input md:col-span-2" />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <MapPin size={16} className="text-[#054226]" /> Location
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select className="form-select text-gray-500"><option>Country * (Nigeria)</option></select>
                    <select className="form-select text-gray-500"><option>State *</option></select>
                    <select className="form-select text-gray-500"><option>Local Government Area *</option></select>
                    <select className="form-select text-gray-500"><option>Ward *</option></select>
                  </div>
                </div>

                {/* Professional Info */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <GraduationCap size={16} className="text-[#054226]" /> Professional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Occupation *" className="form-input" />
                    <input type="text" placeholder="Organization (if any)" className="form-input" />
                    <input type="text" placeholder="Skills / Expertise" className="form-input" />
                    <select className="form-select text-gray-500"><option>Highest Education</option></select>
                  </div>
                </div>

                {/* Membership Details */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <ShieldCheck size={16} className="text-[#054226]" /> Membership Details
                  </h3>
                  <select className="form-select text-gray-500 w-full mb-4"><option>Membership Category *</option></select>
                  
                  <p className="text-sm font-semibold text-gray-700 mb-3">Areas of Interest (Select all that apply) *</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                    {[
                      "Community Development", "Welfare & Support", "Leadership & Governance",
                      "Healthcare Outreach", "Education & Training", "Environmental Projects",
                      "Youth Development", "Event Planning"
                    ].map(interest => (
                      <label key={interest} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#054226] focus:ring-[#054226]" />
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <Phone size={16} className="text-[#054226]" /> Emergency Contact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" placeholder="Contact Name *" className="form-input" />
                    <input type="text" placeholder="Relationship *" className="form-input" />
                    <input type="tel" placeholder="Contact Phone *" className="form-input" />
                  </div>
                </div>

                {/* Upload & Agreement */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase mb-4 tracking-wide">
                    <Upload size={16} className="text-[#054226]" /> Upload & Agreement
                  </h3>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-1/3 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                      <Upload className="w-6 h-6 text-gray-400 mb-2" />
                      <span className="text-sm font-bold text-gray-700">Upload Photo</span>
                      <span className="text-[10px] text-gray-400 mt-1">JPG, PNG (Max 2MB)</span>
                    </div>
                    <div className="w-full md:w-2/3 space-y-4">
                      <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#054226] focus:ring-[#054226]" />
                        <span>I agree to the <span className="font-bold text-gray-800">Terms and Conditions</span> *</span>
                      </label>
                      <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#054226] focus:ring-[#054226]" />
                        <span>I have read and accept the <span className="font-bold text-gray-800">Privacy Policy</span> *</span>
                      </label>
                      <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#054226] focus:ring-[#054226]" />
                        <span>I confirm that the information provided is accurate.</span>
                      </label>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#054226] hover:bg-[#032e1a] text-white py-4 rounded-md font-bold text-lg flex justify-center items-center gap-2 transition-all shadow-lg">
                  Submit Application <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

   
      {/* Globals / Reusable CSS utilities for form */}
      <style>{`
        .form-input, .form-select {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          outline: none;
          background-color: #fcfcfc;
          transition: all 0.2s;
        }
        .form-input:focus, .form-select:focus {
          border-color: #054226;
          box-shadow: 0 0 0 2px rgba(5, 66, 38, 0.1);
          background-color: #ffffff;
        }
        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
        }
      `}</style>
    </div>
  );
}