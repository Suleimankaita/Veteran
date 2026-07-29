import React, { useState } from 'react';
import {
  Shield,
  Heart,
  Award,
  Users,
  CheckCircle,
  BookOpen,
  Briefcase,
  Building,
  ChevronDown,
  Play,
  Star,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Compass,
  Target,
  Globe,
  Lock,
  Eye,
  Flag
} from 'lucide-react';

// Selected image URLs for Veterans, Leadership, and Community Development
const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920",
  missionPhoto: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800",
  whyMattersPhoto: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
  videoThumb: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200",
  avatar1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
  avatar2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
  avatar3: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
  organizationSeal: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200",
};

export default function RenewedHopeVeterans() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen selection:bg-emerald-800 selection:text-white">
      
      {/* NAVBAR */}
    

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative bg-emerald-950 text-white min-h-[85vh] flex ">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroBg}
            alt="Veterans performing community service"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/80 to-black/60" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block bg-amber-500/20 text-amber-400 border border-amber-500/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Our Mission
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Empowering Veterans. <br />
              <span className="text-amber-400">Transforming</span> Communities. <br />
              Building a Better Nigeria.
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Our mission is to unite veterans, promote community development, strengthen leadership, and improve the lives of those who have served our nation through sustainable programs, partnerships, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
                Become a Member
              </button>
              <button className="border-2 border-white/80 hover:bg-white hover:text-emerald-950 text-white font-semibold px-8 py-4 rounded-lg transition-all text-center">
                Support Our Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION STATEMENT */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Letter/Seal Card */}
            <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-emerald-950">Mission Statement</h2>
                  <div className="w-16 h-1 bg-amber-500 mt-2 rounded-full" />
                </div>
                <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center p-2">
                  <Shield className="w-full h-full text-emerald-900" />
                </div>
              </div>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                Renewed Hope Veterans exists to empower military veterans by providing opportunities for leadership, community service, economic empowerment, healthcare support, education, and social development. We believe that the discipline, courage, and sacrifice demonstrated during military service should continue to benefit society for generations to come.
              </p>

              <div className="border-t border-slate-200 pt-6 flex justify-between items-end">
                <div>
                  <p className="font-serif italic text-2xl text-slate-800">Samuel Yusuf</p>
                  <p className="text-sm font-semibold text-emerald-900">National Chairman</p>
                  <p className="text-xs text-slate-500">Renewed Hope Veterans</p>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-widest text-amber-600 font-bold block">Official Seal</span>
                  <span className="text-xs text-slate-400">Federal Republic of Nigeria</span>
                </div>
              </div>
            </div>

            {/* Right Image & Quote */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-900/10">
                <img
                  src={IMAGES.missionPhoto}
                  alt="Veterans mentoring youth"
                  className="w-full h-80 object-cover"
                />
              </div>
              <blockquote className="p-6 bg-emerald-900 text-white rounded-2xl shadow-md">
                <p className="text-amber-400 font-semibold text-lg italic text-center">
                  "For core inspiration to mentoring youth from success."
                </p>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY OUR MISSION MATTERS */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Side */}
            <div className="relative">
              <img
                src={IMAGES.whyMattersPhoto}
                alt="Community collaboration"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-slate-950 p-6 rounded-xl shadow-lg hidden sm:block max-w-xs">
                <p className="font-black text-2xl">36 States + FCT</p>
                <p className="text-xs font-bold uppercase tracking-wider">Active Nationwide Outreach</p>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950">
                Why Our Mission Matters
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Veterans possess unmatched training, resilience, and dedication. Channeling this experience back into civil society creates a lasting ripple effect across communities.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Veterans still have valuable experience to offer national development.",
                  "Communities directly benefit from disciplined veteran leadership.",
                  "Unity and peace require active, structured citizen participation.",
                  "Supporting veterans strengthens society and honors national service."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-800 font-medium text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Core Values</h2>
            <p className="text-slate-600 mt-3">The foundational principles guiding every initiative and member action.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", icon: Lock, desc: "We uphold honesty and accountability in everything we do." },
              { title: "Service", icon: Heart, desc: "We continue serving our communities beyond military duty." },
              { title: "Leadership", icon: Award, desc: "We inspire positive change through experienced leadership." },
              { title: "Unity", icon: Users, desc: "We build stronger communities by working together." },
              { title: "Respect", icon: Eye, desc: "We honor every veteran and every citizen." },
              { title: "Excellence", icon: Target, desc: "We strive for the highest standards in all our programs." },
              { title: "Patriotism", icon: Flag, desc: "We remain committed to Nigeria's growth and stability." },
              { title: "Transparency", icon: Globe, desc: "We manage our resources responsibly and openly." },
            ].map((val, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-emerald-700 hover:shadow-lg transition duration-300 group">
                <div className="w-12 h-12 bg-emerald-900 text-amber-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition transform">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-2">{val.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MISSION PILLARS */}
      <section id="pillars" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Mission Pillars</h2>
            <p className="text-slate-400 mt-3">Comprehensive focus areas designed to empower veterans and build society.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Veteran Welfare",
                icon: Shield,
                items: ["Healthcare Access", "Mental Wellness", "Housing Support", "Emergency Assistance"]
              },
              {
                title: "Education & Skills",
                icon: BookOpen,
                items: ["Scholarships", "Technical Training", "Digital Skills", "Career Development"]
              },
              {
                title: "Community Development",
                icon: Building,
                items: ["Outreach Programs", "Environmental Projects", "Public Health Initiatives", "Infrastructure Support"]
              },
              {
                title: "Peace & Security",
                icon: Compass,
                items: ["Community Awareness", "Civic Education", "Conflict Prevention", "Youth Engagement"]
              },
              {
                title: "Economic Empowerment",
                icon: Briefcase,
                items: ["Entrepreneurship Grants", "Business Support", "Employment Opportunities", "Cooperative Grants"]
              },
              {
                title: "National Partnerships",
                icon: Users,
                items: ["Government Agencies", "NGO Collaborations", "Private Sector Alignment", "Educational Institutions"]
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl hover:border-amber-400 transition">
                <div className="w-14 h-14 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                <ul className="space-y-2.5">
                  {pillar.items.map((item, subIdx) => (
                    <li key={subIdx} className="flex items-center text-slate-300 text-sm">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR COMMITMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Our Commitment</h2>
            <p className="text-slate-600 mt-2">What we promise to every registered veteran and community member.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Support every registered veteran with dignity.",
              "Promote equal opportunities across all regions.",
              "Strengthen national unity and patriotic spirit.",
              "Deliver measurable and sustainable community impact.",
              "Build strong, transparent strategic partnerships.",
              "Encourage lifelong service to the Federal Republic."
            ].map((item, idx) => (
              <div key={idx} className="flex items-start p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <div className="w-8 h-8 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-slate-800 font-semibold text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IMPACT GOALS */}
      <section id="impact" className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Impact Goals</h2>
            <p className="text-slate-600 mt-2">Driven by key performance metrics for national transformation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { val: "100,000+", label: "Veterans Empowered", pct: 85 },
              { val: "5,000", label: "Community Projects Completed", pct: 70 },
              { val: "1 Million", label: "Citizens Reached Nationwide", pct: 90 },
              { val: "36 States + FCT", label: "Operational Footprint", pct: 100 },
              { val: "50,000", label: "Youth Trained & Mentored", pct: 65 },
              { val: "500+", label: "National Strategic Partners", pct: 80 }
            ].map((goal, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-3xl font-black text-emerald-900">{goal.val}</p>
                  <p className="text-sm font-medium text-slate-600 mt-1">{goal.label}</p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-amber-400 border-t-emerald-800 flex items-center justify-center text-xs font-bold text-slate-700">
                  {goal.pct}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SUCCESS STORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Success Stories</h2>
            <p className="text-slate-600 mt-2">Real impact on real lives across Nigeria.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: IMAGES.avatar1,
                name: "Sgt. Nkem Nwachukwu",
                role: "Retired Infantryman",
                text: "Through the technical skills program, I launched a solar installation business that now employs five young graduates."
              },
              {
                img: IMAGES.avatar2,
                name: "Capt. Ibrahim Bello",
                role: "Community Director",
                text: "The unity projects brought peace and civic awareness to our local community, building lifelong collaboration."
              },
              {
                img: IMAGES.avatar3,
                name: "Lt. Fatima Usman",
                role: "Beneficiary Leader",
                text: "Renewed Hope Veterans gave me a second career path in digital technology after 12 years of military service."
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed">"{story.text}"</p>
                </div>
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-200 mt-6">
                  <img src={story.img} alt={story.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-400" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{story.name}</p>
                    <p className="text-xs text-slate-500">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VIDEO SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">See Our Mission in Action</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Watch how veteran-led outreach programs are transforming lives in rural and urban communities across Nigeria.
          </p>

          <div className="relative rounded-3xl overflow-hidden border-4 border-slate-700 shadow-2xl group cursor-pointer">
            <img src={IMAGES.videoThumb} alt="Video Thumbnail" className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 shadow-2xl group-hover:scale-110 transition transform">
                <Play className="w-8 h-8 fill-slate-950 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-left">
              <p className="font-bold text-lg text-white">Documentary: Renewed Hope Veterans Outreach</p>
              <p className="text-xs text-slate-300">Run Time: 4 mins • Federal Capital Territory Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">How Our Mission Becomes Action</h2>
            <p className="text-slate-600 mt-2">A clear, structured execution path for impactful results.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center relative">
            {[
              "Mission Definition",
              "Member Registration",
              "Skills Training",
              "Community Outreach",
              "Project Execution",
              "Impact Measurement"
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-900 text-amber-400 font-bold flex items-center justify-center shadow-md border-2 border-amber-400 mb-4">
                  {idx + 1}
                </div>
                <p className="font-bold text-slate-800 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-emerald-950">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-2">Find answers regarding membership, volunteering, and donations.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Who can join Renewed Hope Veterans?", a: "All honorably discharged personnel of the Nigerian Armed Forces, active reserves, and designated civilian supporters are eligible to join." },
              { q: "How do I become an official member?", a: "Click on the 'Become a Member' button, complete the registration form with your military service details or national ID, and submit required documentation." },
              { q: "How can non-veterans support or volunteer?", a: "Civilians can join as Associate Supporters, participate in community outreach projects, or contribute through donations and corporate partnerships." },
              { q: "Where do you currently operate?", a: "We have active chapters and community programs operating across all 36 States and the Federal Capital Territory (FCT)." },
              { q: "How are donations utilized?", a: "100% of public donations directly fund healthcare assistance, youth mentorship programs, technical training, and emergency relief." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-800 transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CALL TO ACTION (CTA) */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Together, We Can Build <span className="text-amber-400">Stronger Communities</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Join a nationwide movement dedicated to serving veterans, empowering communities, and creating lasting impact across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition">
              Become a Member
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition">
              Volunteer
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-bold px-8 py-4 rounded-xl transition">
              Donate
            </button>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
    

    </div>
  );
}