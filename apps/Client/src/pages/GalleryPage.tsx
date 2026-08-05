import React, { useState, useEffect, useRef } from 'react';
import { Play, Share2, ArrowRight, X, ChevronLeft, ChevronRight, Calendar, Users, Heart, ExternalLink, Filter, Check, Copy } from 'lucide-react';
import hero from '../assets/Gl.png';
// --- Types ---
interface Photo {
  id: number;
  url: string;
  title: string;
  date: string;
  category: string;
  height: string;
}

interface Video {
  id: number;
  title: string;
  duration: string;
  thumb: string;
  category: string;
  embedUrl: string;
  date: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  category: string;
  desc: string;
}

// --- Enhanced Mock Data with Categories mapping ---
const categories = [
  { id: 'all', title: 'All Moments', count: 140, desc: 'Complete mosaic of our journey.', img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800' },
  { id: 'events', title: 'Community Events', count: 42, desc: 'Gatherings that bring us together.', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800' },
  { id: 'workshops', title: 'Workshops', count: 18, desc: 'Skill-building and education.', img: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800' },
  { id: 'volunteer', title: 'Volunteer Activities', count: 56, desc: 'Hands-on community service.', img: 'https://images.unsplash.com/photo-1593113565694-c8f7127b561d?auto=format&fit=crop&q=80&w=800' },
  { id: 'leadership', title: 'Leadership Meetings', count: 24, desc: 'Planning the future of our mission.', img: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800' },
];

const galleryPhotos: Photo[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800', title: 'Veterans Leadership Workshop', date: 'March 2026', category: 'workshops', height: 'h-96' },
  { id: 2, url: 'https://images.unsplash.com/photo-1593113565694-c8f7127b561d?auto=format&fit=crop&q=80&w=800', title: 'Community Food Drive', date: 'April 2026', category: 'volunteer', height: 'h-64' },
  { id: 3, url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', title: 'Mentorship Strategy Session', date: 'May 2026', category: 'leadership', height: 'h-80' },
  { id: 4, url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800', title: 'Annual Gala & Awards Celebration', date: 'June 2026', category: 'events', height: 'h-72' },
  { id: 5, url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800', title: 'Youth Outreach Camp', date: 'July 2026', category: 'events', height: 'h-96' },
  { id: 6, url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800', title: 'Executive Board Strategy Meet', date: 'August 2026', category: 'leadership', height: 'h-64' },
  { id: 7, url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', title: 'Tech Skills Accelerator Program', date: 'September 2026', category: 'workshops', height: 'h-80' },
  { id: 8, url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', title: 'Renovating the Local Center', date: 'October 2026', category: 'volunteer', height: 'h-72' },
];

const videos: Video[] = [
  { id: 1, title: 'Annual Community Event 2026 Highlights', duration: '4:12', thumb: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800', category: 'events', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', date: 'June 2026' },
  { id: 2, title: 'Volunteer Spotlight: Journey of Impact', duration: '2:45', thumb: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800', category: 'volunteer', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', date: 'July 2026' },
  { id: 3, title: 'Strategic Vision & Leadership Summit Pitch', duration: '1:30', thumb: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800', category: 'leadership', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', date: 'August 2026' },
];

const timelineEvents: TimelineEvent[] = [
  { year: 'Feb 2026', title: 'Career Fair Expansion', category: 'workshops', desc: 'Connected 500+ professionals with tier-1 enterprise mentorship paths.' },
  { year: 'Apr 2026', title: 'Volunteer Appreciation Fest', category: 'volunteer', desc: 'Celebrating thousands of global operational volunteer hours.' },
  { year: 'Jun 2026', title: 'Global Leadership Summit', category: 'leadership', desc: 'Gathered core organizers together to map out initiatives through 2030.' },
  { year: 'Oct 2026', title: 'Annual Impact Fundraising Gala', category: 'events', desc: 'Exceeded alternative foundational goals, raising over $2.5M for grassroots operations.' },
];

export default function GalleryPage() {
  // --- States for Functional Control ---
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [storyOpen, setStoryOpen] = useState<boolean>(false);

  // --- Refs for Smooth Navigation Elements ---
  const photoSectionRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // --- Filter Logic ---
  const filteredPhotos = activeCategory === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === activeCategory);

  const filteredVideos = activeCategory === 'all'
    ? videos
    : videos.filter(v => v.category === activeCategory);

  // --- Handlers ---
  const handleScrollTo = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleShare = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  // Drag interaction calculation for Before & After comparison slider
  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button held down
      handleSliderMove(e.clientX);
    }
  };

  // Listen to keyboard arrow keys during Lightbox engagement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos]);

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans text-gray-800 selection:bg-[#C8A24A] selection:text-white overflow-x-hidden">
      
      {/* Dynamic Keyframe Injection for Ultra-Premium Custom Fluid Animations */}
      <style>{`
        @keyframes subtlePan {
          0% { transform: scale(1.02) translate(0px, 0px); }
          50% { transform: scale(1.05) translate(-10px, 5px); }
          100% { transform: scale(1.02) translate(0px, 0px); }
        }
        @keyframes floatEffect {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-subtle-pan { animation: subtlePan 20s ease-in-out infinite; }
        .animate-float { animation: floatEffect 5s ease-in-out infinite; }
        .reveal-delay-1 { animation: fadeInRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .reveal-delay-2 { animation: fadeInRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .reveal-delay-3 { animation: fadeInRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; opacity: 0; }
        
        @keyframes fadeInRise {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-[#0F2744]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={hero} 
            // src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=2000" 
            alt="Background Network Journey" 
            className="w-full h-full object-cover object-center scale-105 opacity-55  animate-subtle-pan mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2744]/40 via-[#0F2744]/70 to-[#F8F9FA]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <div className="reveal-delay-1 bg-white/10 backdrop-blur-md text-[#C8A24A] font-bold tracking-widest text-xs uppercase px-4 py-1.5 mb-6 border border-white/20 rounded-full shadow-inner">
            Interactive Experience Portfolio
          </div>
          <h1 className="reveal-delay-1 text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none drop-shadow-sm">
            Our Journey in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] via-[#dfba63] to-[#C8A24A]">Pictures</span>
          </h1>
          <p className="reveal-delay-2 text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl font-light leading-relaxed">
            Every snapshot frames an authentic milestone of strategic service, foundational community leadership, and the real people bringing our shared mission to life.
          </p>
          <div className="reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <button 
              onClick={() => handleScrollTo(photoSectionRef)}
              className="group relative w-full sm:w-auto px-10 py-5 bg-[#C8A24A] text-white font-bold tracking-wide overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[#C8A24A]/30"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
              View Immersive Photos
            </button>
            <button 
              onClick={() => handleScrollTo(videoSectionRef)}
              className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0F2744] font-bold tracking-wide shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Watch Stories
            </button>
          </div>
        </div>

        {/* Floating Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
          <div className="p-2 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm" onClick={() => handleScrollTo(photoSectionRef)}>
            <ChevronDown className="text-white w-5 h-5" />
          </div>
        </div>
      </section>

      {/* 2. Featured Story */}
      <section className="py-28 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-10 text-9xl font-black text-gray-200/40 select-none z-0 tracking-widest pointer-events-none font-mono">
          SPOTLIGHT
        </div>
        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <div className="w-full lg:w-7/12 relative group rounded-2xl overflow-hidden shadow-2xl bg-black">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Leadership Summit Main Frame" 
              className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/70 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 text-sm font-medium rounded-lg">
              Cover Capture • Event Hub Primary
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[#C8A24A] font-bold tracking-widest uppercase text-xs mb-4 bg-[#C8A24A]/10 px-3 py-1.5 rounded-md w-max">
              <Calendar size={14} /> June 2026 Summit
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F2744] mb-6 leading-none tracking-tight">
              Community Leadership Summit
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              More than 300 veterans, operational volunteers, and diverse local community leaders gathered globally to share innovative frameworks, establish scaling partnerships, and profoundly strengthen our localized support network layers.
            </p>
            <button 
              onClick={() => setStoryOpen(true)}
              className="group flex items-center gap-3 text-[#0F2744] font-bold hover:text-[#C8A24A] transition-all w-max bg-white border-2 border-[#0F2744]/10 hover:border-[#C8A24A] px-6 py-3.5 shadow-sm hover:shadow-md"
            >
              <span>Read Full Executive Story</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Gallery Categories */}
      <section className="bg-white py-28 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#C8A24A] font-extrabold tracking-widest text-xs uppercase block mb-2">Deep Filtering Ecosystem</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0F2744] tracking-tight">Browse Dynamic Categories</h2>
            </div>
            {/* Quick Interactive State Summary */}
            <div className="text-sm text-gray-500 font-medium bg-gray-50 px-4 py-2 border border-gray-100 rounded-lg">
              Currently displaying: <span className="text-[#0F2744] font-bold uppercase">{activeCategory}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                onClick={() => {
                  setActiveCategory(cat.id);
                  setTimeout(() => handleScrollTo(photoSectionRef), 100);
                }}
                className={`group relative h-80 overflow-hidden cursor-pointer shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  activeCategory === cat.id ? 'ring-4 ring-[#C8A24A] scale-[1.02]' : 'ring-1 ring-black/5'
                }`}
              >
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                  activeCategory === cat.id ? 'from-[#0F2744]/95 via-[#0F2744]/60' : 'from-[#0F2744]/90 via-[#0F2744]/40 to-transparent'
                }`}></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#C8A24A] text-xs font-black tracking-widest uppercase">{cat.count} Artifacts</span>
                    {activeCategory === cat.id && (
                      <span className="bg-[#C8A24A] text-white p-1 rounded-full text-xs">
                        <Check size={12} strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight mb-2 group-hover:text-[#C8A24A] transition-colors">{cat.title}</h3>
                  <p className="text-gray-300 text-xs font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Photo Gallery (Dynamic Masonry Layout) */}
      <section ref={photoSectionRef} className="py-28 px-6 max-w-7xl mx-auto scroll-mt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Filter size={14} className="text-[#C8A24A]" />
              <span className="text-[#C8A24A] font-extrabold tracking-widest text-xs uppercase">Responsive Mosaic Node</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0F2744] tracking-tight">Immersive Captured Moments</h2>
          </div>
          
          {/* Quick inline Filter Chips */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 border border-gray-200 shadow-sm rounded-xl">
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 text-xs font-bold transition-all ${
                  activeCategory === c.id 
                    ? 'bg-[#0F2744] text-white rounded-lg shadow-sm' 
                    : 'text-gray-600 hover:text-[#0F2744] hover:bg-gray-50 rounded-lg'
                }`}
              >
                {c.title.split(' ')[0]} {/* Short name */}
              </button>
            ))}
          </div>
        </div>

        {filteredPhotos.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-gray-200 text-center py-20 rounded-2xl">
            <p className="text-gray-400 font-medium">No photos cataloged under this specific category configuration yet.</p>
            <button onClick={() => setActiveCategory('all')} className="mt-4 text-[#C8A24A] text-sm font-bold underline">Reset Filter Grid</button>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 transition-all duration-500">
            {filteredPhotos.map((photo, index) => (
              <div 
                key={photo.id} 
                onClick={() => setLightboxIndex(index)}
                className={`break-inside-avoid relative group overflow-hidden bg-gray-900 shadow-lg cursor-pointer transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl rounded-xl ${photo.height}`}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-70" 
                />
                
                {/* Micro-Interaction Hover Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/90 via-[#0F2744]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end transform translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={(e) => handleShare(e, photo.title)}
                      className="p-2.5 bg-white/10 hover:bg-[#C8A24A] rounded-full text-white backdrop-blur-md transition-colors"
                      title="Copy gallery link"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#C8A24A] text-xs font-bold uppercase tracking-widest block mb-1">{photo.category}</span>
                    <h4 className="text-white font-black text-xl mb-2 leading-snug">{photo.title}</h4>
                    <p className="text-gray-300 text-xs flex items-center gap-2 font-medium">
                      <Calendar size={12} className="text-[#C8A24A]" /> {photo.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. Video Gallery */}
      <section ref={videoSectionRef} className="bg-[#0F2744] py-28 px-6 text-white relative overflow-hidden scroll-mt-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,162,74,0.08),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-20">
            <span className="text-[#C8A24A] font-extrabold tracking-widest text-xs uppercase block mb-2">Cinematic Documentation Nodes</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Stories in Motion</h2>
            <div className="w-20 h-1 bg-[#C8A24A] mx-auto rounded-full"></div>
          </div>

          {filteredVideos.length === 0 ? (
            <p className="text-center text-gray-400 py-10">No broadcast footage mapped under this component scope filter.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div 
                  key={video.id} 
                  onClick={() => setActiveVideo(video)}
                  className="group cursor-pointer bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-xl"
                >
                  <div className="relative h-60 overflow-hidden mb-5 shadow-inner rounded-xl bg-black">
                    <img src={video.thumb} alt={video.title} className="w-full h-full object-cover opacity-75 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#C8A24A] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:bg-white group-hover:text-[#0F2744] group-hover:scale-110">
                        <Play className="ml-1" size={24} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 text-xs font-mono font-bold tracking-wider rounded text-white">
                      {video.duration}
                    </div>
                  </div>
                  <span className="text-[#C8A24A] text-xs font-bold tracking-widest uppercase block mb-1">{video.category} • {video.date}</span>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 tracking-tight group-hover:text-[#C8A24A] transition-colors">{video.title}</h3>
                  <div className="text-xs text-gray-400 font-medium flex items-center gap-1.5 group-hover:text-white transition-colors">
                    <Play size={12} /> Launch Strategic Video Broadcast
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. Event Highlights (Interactive Timeline Roadmap) */}
      <section className="py-28 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#C8A24A] font-extrabold tracking-widest text-xs uppercase block mb-2">Chronological Milestones Map</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0F2744] tracking-tight">Operational Year Timeline</h2>
            <div className="w-20 h-1 bg-[#C8A24A] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="relative border-l-2 border-gray-200/80 ml-4 md:ml-6 space-y-12">
            {timelineEvents.map((event, idx) => (
              <div 
                key={idx} 
                onClick={() => {
                  setActiveCategory(event.category);
                  handleScrollTo(photoSectionRef);
                }}
                className="relative pl-8 group cursor-pointer"
              >
                {/* Anchor Node Ring */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-white border-4 border-[#C8A24A] rounded-full group-hover:bg-[#C8A24A] group-hover:scale-125 transition-all duration-300 shadow-sm"></div>
                
                <div className="bg-[#F8F9FA] p-6 rounded-xl border-l-4 border-transparent group-hover:border-[#C8A24A] group-hover:bg-gray-50/50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[#C8A24A] font-black text-xs tracking-widest uppercase bg-[#C8A24A]/10 px-2.5 py-1 rounded">
                      {event.year}
                    </span>
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider group-hover:text-[#0F2744]">
                      Click to Filter Gallery ➜
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#0F2744] mb-2 tracking-tight group-hover:text-[#C8A24A] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Community Moments & 8. Before / After Progressive Slider */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Authentic Community Moments Layer (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <span className="text-[#C8A24A] font-extrabold tracking-widest text-xs uppercase block mb-1">Human Centric Unposed Artifacts</span>
              <h2 className="text-3xl font-black text-[#0F2744] tracking-tight flex items-center gap-3">
                <Heart className="text-[#C8A24A]" fill="currentColor" size={24} /> Community Moments
              </h2>
            </div>
            <p className="text-gray-600 mb-6 font-light text-sm leading-relaxed">
              We focus heavily on capturing pure, unposed organizational synergy. These represent organic planning spaces, raw mentorship exchanges, and active field service.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xl shadow-sm bg-gray-100 h-44 group">
                <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=600" alt="Volunteers Teamwork" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-sm bg-gray-100 h-44 group">
                <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=600" alt="Mentorship Spark" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-sm bg-gray-100 h-48 col-span-2 group">
                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" alt="Spontaneous Dialogue Hub" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          </div>

          {/* 8. High-End Interactive Before & After Swipe Slider (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-[#C8A24A] font-extrabold tracking-widest text-xs uppercase block mb-1">Visual Progression Vector</span>
              <h2 className="text-3xl font-black text-[#0F2744] tracking-tight flex items-center gap-3">
                <Users className="text-[#C8A24A]" size={24} /> Before & After Growth Impact
              </h2>
            </div>
            <p className="text-gray-600 mb-6 font-light text-sm leading-relaxed">
              Drag or move the slider divider handle tracking horizontally across the viewport frame boundary layer to view our historical transformation scaling vectors over time.
            </p>

            {/* Slider Engine Element Frame */}
            <div 
              ref={sliderRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-2xl bg-gray-900 select-none cursor-ew-resize border border-gray-200"
            >
              {/* BEFORE LAYER (2019 Base Layer Background) */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="2019 Historic Ground Floor Launch" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale"
              />
              <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase">
                Before (2019 First Meet)
              </div>

              {/* AFTER LAYER (2026 Foreground Clipped Image Layer) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none transition-all duration-75"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Current 2026 Scale Capacity Conference" 
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: sliderRef.current?.getBoundingClientRect().width }}
                />
                <div className="absolute top-4 right-4 z-10 bg-[#2F6B4F] text-white px-3 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase shadow-md">
                  After (2026 Annual Arena Conference)
                </div>
              </div>

              {/* SLIDER CONTROLLER HANDLE BAR */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#0F2744] border-4 border-white text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                  <span className="text-xs font-bold text-[#C8A24A] select-none">↔</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Media Coverage */}
      <section className="bg-gray-50 border-t border-gray-200/60 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#C8A24A] font-extrabold tracking-widest text-xs uppercase block mb-2">Public Validation Ledger</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0F2744] tracking-tight">Media Coverage & Reports</h2>
            <div className="w-20 h-1 bg-[#C8A24A] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between transform hover:-translate-y-1">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Community News Network</span>
                <h3 className="text-xl font-bold text-[#0F2744] mb-4 group-hover:text-[#C8A24A] transition-colors leading-snug">
                  Organization Featured Globally for Scale Innovation Grassroots Service Models
                </h3>
              </div>
              <a href="#article" className="inline-flex items-center gap-2 text-sm font-black text-[#0F2744] mt-6 group-hover:underline">
                Read Publication Article <ExternalLink size={16} />
              </a>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between transform hover:-translate-y-1">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Morning Live Broadcast</span>
                <h3 className="text-xl font-bold text-[#0F2744] mb-4 group-hover:text-[#C8A24A] transition-colors leading-snug">
                  Exclusive Sit-down Broadcast Interview with Foundational Organization Leaders
                </h3>
              </div>
              <button 
                onClick={() => setActiveVideo(videos[2])}
                className="inline-flex items-center gap-2 text-sm font-black text-[#0F2744] mt-6 group-hover:underline w-max text-left"
              >
                Launch Media Broadcast <Play size={14} fill="currentColor" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between transform hover:-translate-y-1">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Audited Publications</span>
                <h3 className="text-xl font-bold text-[#0F2744] mb-4 group-hover:text-[#C8A24A] transition-colors leading-snug">
                  Complete 2026 Financial & Operational Social Impact Index Portfolio Released
                </h3>
              </div>
              <a href="#download" className="inline-flex items-center gap-2 text-sm font-black text-[#2F6B4F] mt-6 group-hover:underline">
                Download Audited PDF <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Call to Action Banner Section */}
      <section className="relative py-36 px-6 overflow-hidden bg-[#0F2744]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=2000" alt="Volunteers cheering unity" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744] via-[#0F2744]/95 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none">
            Become Part of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] to-amber-300">Story</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed">
            Every dynamic structural layout event, every active team volunteer hour, and every singular act of sacrificial service writes the next foundational index chapter.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-5 bg-[#C8A24A] hover:bg-[#b5913e] text-white font-extrabold tracking-wide shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg">
              Volunteer With Us
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-[#2F6B4F] hover:bg-[#25543e] text-white font-extrabold tracking-wide shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg">
              Support Our Mission Financially
            </button>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC INTERACTIVE FUNCTIONALITY OVERLAYS (MODALS) --- */}

      {/* DYNAMIC COMPONENT A: PHOTO FULL-SCREEN PREVIEW LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 transition-all duration-500 animate-fadeIn">
          
          {/* Top Control Bar */}
          <div className="flex items-center justify-between text-white z-10 w-full max-w-7xl mx-auto">
            <div>
              <span className="text-[#C8A24A] text-xs font-black tracking-widest uppercase block mb-0.5">
                Asset Frame {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
              <h3 className="text-lg md:text-xl font-bold tracking-tight">{filteredPhotos[lightboxIndex].title}</h3>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={(e) => handleShare(e, filteredPhotos[lightboxIndex].title)}
                className="p-3 bg-white/10 hover:bg-[#C8A24A] rounded-full transition-colors flex items-center gap-2 text-sm font-bold"
              >
                {isCopied ? <Check size={16} className="text-green-400" /> : <Share2 size={16} />}
                <span className="hidden sm:inline">{isCopied ? 'Link Copied!' : 'Share'}</span>
              </button>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="p-3 bg-white/10 hover:bg-red-600 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Main Display Central Assembly Node */}
          <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto my-auto h-[70vh]">
            {/* Left Button */}
            <button 
              onClick={prevLightbox} 
              className="absolute left-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all z-20 focus:outline-none"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Core Box Frame Image */}
            <div className="w-full h-full flex items-center justify-center p-4">
              <img 
                src={filteredPhotos[lightboxIndex].url} 
                alt={filteredPhotos[lightboxIndex].title} 
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg transform scale-100 transition-transform duration-500" 
              />
            </div>

            {/* Right Button */}
            <button 
              onClick={nextLightbox} 
              className="absolute right-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all z-20 focus:outline-none"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Metadata Footer Layer */}
          <div className="text-center text-gray-400 text-xs font-medium pb-4 z-10">
            Categorized Under: <span className="text-white uppercase font-bold tracking-wider">{filteredPhotos[lightboxIndex].category}</span> • Capture Stamp: {filteredPhotos[lightboxIndex].date}
          </div>
        </div>
      )}

      {/* DYNAMIC COMPONENT B: HIGH-END BROADCAST VIDEO PLAYER OVERLAY */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-800 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative">
            
            {/* Control Header */}
            <div className="p-4 bg-neutral-900/80 backdrop-blur-md flex justify-between items-center text-white border-b border-neutral-800">
              <div>
                <span className="text-xs text-[#C8A24A] font-bold tracking-widest uppercase block mb-0.5">Strategic Stream Master</span>
                <h3 className="font-bold text-base md:text-lg tracking-tight line-clamp-1">{activeVideo.title}</h3>
              </div>
              <button 
                onClick={() => setActiveVideo(null)} 
                className="p-2.5 bg-neutral-800 hover:bg-red-600 rounded-full text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Responsive Aspect Screen Box Node */}
            <div className="aspect-video w-full bg-black">
              <iframe 
                src={activeVideo.embedUrl} 
                title={activeVideo.title}
                className="w-full h-full border-0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Meta Info */}
            <div className="p-5 bg-neutral-950 text-neutral-400 text-xs flex justify-between items-center">
              <div>Broadcast Length: <span className="text-white font-bold">{activeVideo.duration}</span></div>
              <div className="uppercase tracking-widest text-[#C8A24A] font-bold">Category Scope: {activeVideo.category}</div>
            </div>

          </div>
        </div>
      )}

      {/* DYNAMIC COMPONENT C: STRATEGIC FEATURED STORY TEXT OVERLAY ACCELERATOR */}
      {storyOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F2744]/95 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white max-w-2xl w-full p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100 relative">
            <button 
              onClick={() => setStoryOpen(false)} 
              className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full transition-colors text-gray-500"
            >
              <X size={18} />
            </button>
            <span className="text-[#C8A24A] text-xs font-black tracking-widest uppercase block mb-2">Detailed Case Assessment</span>
            <h3 className="text-3xl font-black text-[#0F2744] mb-6 tracking-tight">Community Leadership Summit Roadmap</h3>
            <div className="prose text-gray-600 text-sm md:text-base space-y-4 leading-relaxed font-light">
              <p>
                The primary objective of the June 2026 Summit centered on removing geographical friction points within localized operational networks. By linking regional operational directors with field teams, the organization secured over 14 distinct action frameworks spanning technology upskilling and physical center allocations.
              </p>
              <p>
                Moving forward, the architectural metrics recorded here serve as baseline references for similar operations mapping out schedules into 2027 and beyond.
              </p>
            </div>
            <button 
              onClick={() => setStoryOpen(false)}
              className="mt-8 w-full bg-[#0F2744] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#C8A24A] transition-colors duration-300"
            >
              Conclude Framework Reading
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

// Quick Inline Down Arrow Component missing native tracking mapping
function ChevronDown({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className={className}
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}