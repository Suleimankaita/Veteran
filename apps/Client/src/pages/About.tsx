import React from 'react';
import {
  CheckCircle2, Users, Target, ShieldCheck, Heart, 
  Flag, Award, Lock, Users2, Mail, Check,
  ChevronRight, 
} from 'lucide-react';

// --- DATA CONSTANTS ---

const CORE_VALUES = [
  { icon: ShieldCheck, title: 'Integrity' },
  { icon: Heart, title: 'Service' },
  { icon: Target, title: 'Leadership' },
  { icon: Flag, title: 'Patriotism' },
  { icon: Users, title: 'Respect' },
  { icon: Users2, title: 'Unity' },
  { icon: Award, title: 'Excellence' },
  { icon: Lock, title: 'Transparency' },
];

const LEADERSHIP = [
  { role: 'National Chairman', name: 'Major Ibrahim (Rtd)', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&q=80' },
  { role: 'Vice Chairman', name: 'Col. Sarah Johnson', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=300&q=80' },
  { role: 'Secretary', name: 'Capt. David Okon', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=300&q=80' },
  { role: 'Treasurer', name: 'Lt. Amina Yusuf', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1b88ce?fit=crop&w=300&q=80' },
];

const TIMELINE = [
  { year: '2018', title: 'Organization Founded', desc: 'The initial concept and founding members came together to form the core of Renewed Hope Veterans.' },
  { year: '2019', title: 'First National Conference', desc: 'Held in Abuja to establish structural framework and elect the first interim leadership council.' },
  { year: '2021', title: 'Nationwide Expansion', desc: 'Successfully opened chapters across all 36 states and the FCT, mobilizing thousands of veterans.' },
  { year: '2023', title: 'Community Projects Integration', desc: 'Shifted focus to active community development, launching grassroots initiatives nationwide.' },
];

// --- MAIN COMPONENT ---

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* HEADER / NAVIGATION */}
      

      {/* 1. ABOUT HERO SECTION */}
      <section className="relative bg-emerald-950 text-white pt-40 pb-24 flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593113565694-c6b758835848?auto=format&fit=crop&q=80" 
            alt="Veterans Community" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-950/90 to-emerald-950"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-4xl space-y-6">
          <div className="flex items-center justify-center space-x-2 text-amber-500 text-sm font-bold uppercase tracking-widest mb-4">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-emerald-200">About Us</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
            Who We Are
          </h1>
          <p className="text-lg lg:text-xl text-emerald-100 leading-relaxed font-light">
            Dedicated to empowering military veterans, strengthening communities, and contributing to national development through leadership, unity, and service.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-emerald-950 mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-amber-500 rounded"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Renewed Hope Veterans was established to bring together retired military personnel and patriotic citizens in support of community development, veteran welfare, and national unity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Built on the values of discipline, sacrifice, and service, the organization continues to empower veterans while contributing meaningfully to Nigeria's future. Our history is rooted in the undeniable truth that those who defended the nation are uniquely positioned to rebuild it.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-2xl font-bold text-emerald-950">50,000+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Registered Members</p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="text-2xl font-bold text-emerald-950">36 States</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Nationwide Chapters</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1594244589945-885ec37d38cc?auto=format&fit=crop&q=80" alt="Old military" className="rounded-2xl shadow-lg h-72 object-cover w-full grayscale" />
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80" alt="Current community project" className="rounded-2xl shadow-lg h-72 object-cover w-full mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY WE EXIST & IDENTITY STRIP */}
      <section className="py-24 bg-emerald-950 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1594244589945-885ec37d38cc?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-amber-500 uppercase tracking-widest mb-10">Why We Exist</h2>
          <p className="text-3xl lg:text-4xl text-white font-light leading-snug">
            Military veterans possess <span className="font-bold text-amber-400">experience, discipline, leadership,</span> and <span className="font-bold text-amber-400">sacrifice.</span>
          </p>
          <p className="text-xl lg:text-2xl text-emerald-200 font-light leading-relaxed max-w-3xl mx-auto mt-6">
            These qualities should continue benefiting society long after military service. Renewed Hope Veterans exists to ensure that happens.
          </p>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-24 bg-gray-50 relative -mt-10 z-20">
        <div className="container mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
              <Target className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-bold text-emerald-950 mb-6 uppercase tracking-wider">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become Nigeria's most trusted veterans organization, promoting unity, leadership, service, and sustainable national development.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6">
              <Flag className="w-10 h-10 text-amber-500" />
            </div>
            <h3 className="text-3xl font-bold text-emerald-950 mb-6 uppercase tracking-wider">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To mobilize veterans, empower communities, support national initiatives, and improve the welfare of former service members through innovative programs and strategic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-950">Our Core Values</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">The foundational principles that guide our organization's actions, decisions, and relationships within the community.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:bg-emerald-50 hover:border-emerald-200 transition-colors group">
                <div className="w-16 h-16 bg-white shadow-sm text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:text-amber-500 transition-colors">
                  <val.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950">{val.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ORGANIZATION STRUCTURE */}
      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-4xl font-bold text-emerald-950 mb-6">Organization Structure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-16">Our hierarchical framework ensures efficient communication, localized execution of projects, and nationwide cohesion.</p>
          
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <div className="bg-emerald-900 text-white px-10 py-5 rounded-xl shadow-lg font-bold text-xl w-full max-w-sm">National Chairman</div>
            <div className="h-8 w-1 bg-amber-500"></div>
            <div className="bg-emerald-800 text-white px-10 py-4 rounded-xl shadow-lg font-bold text-lg w-full max-w-md">National Executive Council</div>
            <div className="h-8 w-1 bg-amber-500"></div>
            <div className="bg-emerald-700 text-white px-10 py-4 rounded-xl shadow-lg font-bold text-lg w-full max-w-lg">State Coordinators</div>
            <div className="h-8 w-1 bg-amber-500"></div>
            <div className="bg-emerald-600 text-white px-10 py-4 rounded-xl shadow-lg font-bold text-lg w-full max-w-xl">LGA Coordinators</div>
            <div className="h-8 w-1 bg-amber-500"></div>
            <div className="w-full flex flex-col md:flex-row justify-center gap-4">
               <div className="bg-emerald-500 text-white px-6 py-4 rounded-xl shadow-md font-semibold text-md w-full md:w-1/2">Ward Coordinators</div>
               <div className="bg-emerald-500 text-white px-6 py-4 rounded-xl shadow-md font-semibold text-md w-full md:w-1/2">Polling Unit Leaders</div>
            </div>
            <div className="h-8 w-1 bg-amber-500 mt-4"></div>
            <div className="bg-amber-500 text-emerald-950 px-12 py-5 rounded-xl shadow-lg font-black text-2xl w-full max-w-3xl uppercase tracking-widest">Registered Members</div>
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP TEAM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-950">Our Leadership</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">Meet the dedicated veterans guiding our national movement and ensuring the execution of our core mission.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-72 overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-6 bg-white relative -mt-4 rounded-t-2xl border-t border-gray-100">
                  <h4 className="text-xl font-bold text-emerald-950">{leader.name}</h4>
                  <p className="text-amber-600 font-medium mb-4">{leader.role}</p>
                  <div className="flex justify-start space-x-3">
                    {/* <a href="#" className="p-2 bg-emerald-50 rounded-full hover:bg-emerald-100 text-emerald-800 transition-colors"><Linkedin className="w-4 h-4" /></a> */}
                    <a href="#" className="p-2 bg-emerald-50 rounded-full hover:bg-emerald-100 text-emerald-800 transition-colors"><Mail className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TIMELINE */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="container mx-auto px-6 lg:px-16">
           <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white">Our Journey</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-emerald-800 before:via-amber-500 before:to-emerald-800">
              {TIMELINE.map((event, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-emerald-950 bg-amber-500 text-emerald-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-emerald-900/40 p-8 rounded-2xl border border-emerald-800/50 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
                    <div className="mb-2">
                      <h4 className="font-black text-amber-400 text-2xl">{event.year}</h4>
                    </div>
                    <h5 className="text-xl font-bold text-white mb-3">{event.title}</h5>
                    <p className="text-emerald-100/80 text-base leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
  
    </div>
  );
}