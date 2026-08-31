import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { 
  Search, Bell, ChevronDown, ChevronRight, Home, Users, Folder, 
  Calendar, MessageSquare, FileText, Settings, Shield, Map, Layout,
  CheckCircle, Clock, AlertCircle, PlayCircle, MapPin, Activity, 
  TrendingUp, X
} from 'lucide-react';

// --- DYNAMIC MOCK DATA ---

const growthData = [
  { name: 'Jan', members: 1200 },
  { name: 'Feb', members: 2500 },
  { name: 'Mar', members: 5000 },
  { name: 'Apr', members: 5500 },
  { name: 'May', members: 8000 },
  { name: 'Jun', members: 10500 },
  { name: 'Jul', members: 11200 },
  { name: 'Aug', members: 12450 },
];

const healthData = [
  { name: 'Membership', score: 90, fill: '#0ea5e9' },
  { name: 'Reporting', score: 75, fill: '#14b8a6' },
  { name: 'Programs', score: 85, fill: '#22c55e' },
  { name: 'Engagement', score: 80, fill: '#34d399' },
  { name: 'Structure', score: 95, fill: '#10b981' },
];

const activityLog = [
  { id: 1, region: 'North West', type: 'Monthly Report', status: 'Complete', urgency: 'Normal', date: '23/08/2024' },
  { id: 2, region: 'North East', type: 'Event Planning', status: 'Complete', urgency: 'Normal', date: '25/08/2024' },
  { id: 3, region: 'South South', type: 'Program Launch', status: 'In Progress', urgency: 'High', date: '29/08/2024' },
  { id: 4, region: 'North Central', type: 'Member Verification', status: 'Complete', urgency: 'Normal', date: '26/08/2024' },
  { id: 5, region: 'South West', type: 'Volunteer Drive', status: 'Pending', urgency: 'Medium', date: '30/08/2024' },
  { id: 6, region: 'South East', type: 'Unit Request', status: 'Pending', urgency: 'High', date: '02/09/2024' },
];

// Map Data: Geopolitical zones with coordinates for relative plotting
const regionalData = [
  { id: 'NW', name: 'North West', users: 4520, activity: 88, x: '30%', y: '25%', color: '#0ea5e9' }, // Katsina, Kano, etc.
  { id: 'NE', name: 'North East', users: 2100, activity: 65, x: '75%', y: '30%', color: '#3b82f6' },
  { id: 'NC', name: 'North Central', users: 1850, activity: 72, x: '45%', y: '50%', color: '#22c55e' },
  { id: 'SW', name: 'South West', users: 2400, activity: 91, x: '20%', y: '75%', color: '#f59e0b' },
  { id: 'SE', name: 'South East', users: 1580, activity: 54, x: '60%', y: '80%', color: '#8b5cf6' },
  { id: 'SS', name: 'South South', users: 1900, activity: 79, x: '45%', y: '85%', color: '#ec4899' },
];

// --- REUSABLE COMPONENTS ---

const StatusBadge = ({ status, urgency }) => {
  const styles = {
    'Complete': "text-emerald-700 bg-emerald-50 border-emerald-200",
    'Pending': "text-amber-700 bg-amber-50 border-amber-200",
    'In Progress': "text-blue-700 bg-blue-50 border-blue-200",
  };
  
  const urgencyStyles = {
    'High': "text-red-600 bg-red-50 border-red-200",
    'Medium': "text-orange-600 bg-orange-50 border-orange-200",
    'Normal': "text-slate-600 bg-slate-50 border-slate-200",
  };

  return (
    <div className="flex gap-2">
      <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${styles[status]}`}>
        {status}
      </span>
      {urgency === 'High' && (
        <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${urgencyStyles[urgency]}`}>
          <AlertCircle className="w-3 h-3 mr-1" /> {urgency}
        </span>
      )}
    </div>
  );
};

export default function RHVDashboard() {
  // State Management
  const [activeMenu, setActiveMenu] = useState('overview');
  const [isOrgOpen, setIsOrgOpen] = useState(true);
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapMetric, setMapMetric] = useState('users'); // 'users' or 'activity'
  const [hoveredRegion, setHoveredRegion] = useState(null);

  // Animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  // Calculations for Map
  const maxMetricValue = useMemo(() => {
    return Math.max(...regionalData.map(r => r[mapMetric]));
  }, [mapMetric]);

  const highestRegion = useMemo(() => {
    return regionalData.find(r => r[mapMetric] === maxMetricValue);
  }, [maxMetricValue, mapMetric]);

  const getSidebarItemClass = (id) => {
    return `w-full flex items-center px-3 py-2.5 rounded-lg font-medium transition-all duration-200 ${
      activeMenu === id 
        ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
        : 'text-slate-600 hover:bg-slate-50 border border-transparent'
    }`;
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans overflow-hidden text-slate-800">
      
      {/* SIDEBAR NAVIGATION */}
      <motion.aside 
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="w-64 bg-white border-r border-slate-200 flex flex-col h-full overflow-y-auto shrink-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]"
      >
        <div className="h-16 flex items-center px-6 border-b border-slate-100 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2 text-2xl font-black text-slate-800 tracking-tighter">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
              <Layout className="w-5 h-5 text-white" />
            </div>
            RHV<span className="text-blue-600">.</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 custom-scrollbar">
          <button onClick={() => setActiveMenu('overview')} className={getSidebarItemClass('overview')}>
            <Home className={`w-5 h-5 mr-3 ${activeMenu === 'overview' ? 'text-blue-600' : 'text-slate-400'}`} /> 
            Overview
          </button>

          {/* Organization Menu */}
          <div>
            <button 
              onClick={() => setIsOrgOpen(!isOrgOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              <div className="flex items-center">
                <Folder className="w-5 h-5 mr-3 text-slate-400" /> Organization
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOrgOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isOrgOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-11 pr-3 py-1 space-y-1 overflow-hidden text-sm text-slate-500"
                >
                  {['Zones', 'States', 'LGAs', 'Wards', 'Units'].map((item) => (
                    <button key={item} className="block w-full text-left py-1.5 hover:text-blue-600 transition-colors">{item}</button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Members Menu */}
          <div>
            <button 
              onClick={() => setIsMembersOpen(!isMembersOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3 text-slate-400" /> Members
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMembersOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isMembersOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-11 pr-3 py-1 space-y-1 overflow-hidden text-sm text-slate-500"
                >
                  {['All members', 'Verification', 'Applications', 'Analytics'].map((item) => (
                    <button key={item} className="block w-full text-left py-1.5 hover:text-blue-600 transition-colors">{item}</button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => setActiveMenu('programs')} className={getSidebarItemClass('programs')}>
            <Activity className={`w-5 h-5 mr-3 ${activeMenu === 'programs' ? 'text-blue-600' : 'text-slate-400'}`} /> Programs
          </button>
          <button onClick={() => setActiveMenu('reports')} className={getSidebarItemClass('reports')}>
            <FileText className={`w-5 h-5 mr-3 ${activeMenu === 'reports' ? 'text-blue-600' : 'text-slate-400'}`} /> Reports
          </button>
          <button onClick={() => setActiveMenu('events')} className={getSidebarItemClass('events')}>
            <Calendar className={`w-5 h-5 mr-3 ${activeMenu === 'events' ? 'text-blue-600' : 'text-slate-400'}`} /> Events
          </button>
          <button onClick={() => setActiveMenu('communications')} className={getSidebarItemClass('communications')}>
            <MessageSquare className={`w-5 h-5 mr-3 ${activeMenu === 'communications' ? 'text-blue-600' : 'text-slate-400'}`} /> Communications
          </button>
          
          <div className="pt-4 mt-4 border-t border-slate-100">
            <button onClick={() => setActiveMenu('admin')} className={getSidebarItemClass('admin')}>
              <Shield className={`w-5 h-5 mr-3 ${activeMenu === 'admin' ? 'text-blue-600' : 'text-slate-400'}`} /> Administration
            </button>
            <button onClick={() => setActiveMenu('settings')} className={getSidebarItemClass('settings')}>
              <Settings className={`w-5 h-5 mr-3 ${activeMenu === 'settings' ? 'text-blue-600' : 'text-slate-400'}`} /> Settings
            </button>
          </div>
        </nav>
      </motion.aside>

      {/* MAIN LAYOUT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* TOP HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-10 shadow-sm">
          <div className="relative w-96 group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search members, programs, or reports..." 
              className="w-full pl-10 pr-10 py-2 bg-slate-100 border border-transparent rounded-lg focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium text-slate-700 placeholder-slate-400"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-5">
            <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-slate-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=AdminSuleiman&backgroundColor=e2e8f0" alt="Admin" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-none text-slate-700">System Admin</span>
                <span className="text-[10px] text-slate-500 font-medium">National Level</span>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 ml-1" />
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT SCROLLABLE */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          
          {/* Page Header */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-1 flex items-center gap-2">
                <Activity className="w-4 h-4" /> Strategic Command Center
              </motion.div>
              <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-3xl font-black text-slate-900 tracking-tight">
                National Leadership Dashboard
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
              <button className="px-4 py-1.5 text-sm font-semibold rounded-md bg-slate-100 text-slate-700">YTD 2026</button>
              <button className="px-4 py-1.5 text-sm font-semibold rounded-md text-slate-500 hover:text-slate-700">Q3</button>
              <button className="px-4 py-1.5 text-sm font-semibold rounded-md text-slate-500 hover:text-slate-700">Q4</button>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* KPI METRICS GRID (Left Column) */}
            <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -4 }} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 -z-0"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Members</span>
                      <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="text-3xl font-black text-slate-800 mb-1">12,450</div>
                    <div className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +12.5% this month
                    </div>
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ y: -4 }} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 -z-0"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Verified</span>
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="text-3xl font-black text-slate-800 mb-1">10,840</div>
                    <div className="text-xs font-medium text-slate-500">87% verification rate</div>
                  </div>
                </motion.div>
              </div>

              {/* Sub Metrics */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
                <div className="grid grid-cols-4 gap-4 divide-x divide-slate-100">
                  <div className="text-center px-2">
                    <div className="text-2xl font-bold text-slate-800">228</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">States</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-2xl font-bold text-slate-800">127</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">LGAs</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-2xl font-bold text-slate-800">24</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">Wards</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-2xl font-bold text-blue-600">328</div>
                    <div className="text-[10px] font-bold text-blue-600 uppercase mt-1">Active Units</div>
                  </div>
                </div>
              </div>

              {/* Action Alerts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 cursor-pointer hover:bg-amber-100 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-bold text-amber-800 uppercase">Pending Apps</div>
                    <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
                  </div>
                  <div className="text-2xl font-black text-amber-900">61</div>
                </div>
                <div className="bg-red-50 p-4 rounded-xl border border-red-200 cursor-pointer hover:bg-red-100 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-bold text-red-800 uppercase">Overdue Reports</div>
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                  </div>
                  <div className="text-2xl font-black text-red-900">14</div>
                </div>
              </div>
            </motion.div>

            {/* INTERACTIVE GEOGRAPHIC MAP (Center Column) */}
            <motion.div variants={fadeUp} className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden relative min-h-[400px]">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white relative z-10">
                <div>
                  <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">National Distribution</h2>
                  <p className="text-xs text-slate-500 mt-1">Mapping data across geopolitical zones</p>
                </div>
                
                {/* Data Toggle */}
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button 
                    onClick={() => setMapMetric('users')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${mapMetric === 'users' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Members
                  </button>
                  <button 
                    onClick={() => setMapMetric('activity')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${mapMetric === 'activity' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Activity
                  </button>
                </div>
              </div>
              
              <div className="flex-1 bg-[#f1f5f9] relative overflow-hidden flex items-center justify-center p-4">
                
                {/* Status Indicator showing the Highest Region dynamically */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm z-10 max-w-[200px]">
                  <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Highest {mapMetric === 'users' ? 'Membership' : 'Activity'} Zone</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    <span className="font-bold text-sm text-slate-800">{highestRegion.name}</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    {highestRegion[mapMetric].toLocaleString()} {mapMetric === 'users' ? 'Members' : 'Active Programs'}
                  </div>
                </div>

                {/* Abstract Stylized Map Container */}
                <div className="relative w-full max-w-[400px] aspect-[4/3] bg-slate-200/50 rounded-3xl border-2 border-slate-300/50">
                  {/* Faux Map Background Lines */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  <Map className="absolute inset-0 w-full h-full text-slate-300 p-10 opacity-30" strokeWidth={0.5} />

                  {/* Render Regional Nodes */}
                  <AnimatePresence>
                    {regionalData.map((region) => {
                      const isHighest = region.id === highestRegion.id;
                      const value = region[mapMetric];
                      // Calculate relative size based on data
                      const sizeBase = Math.max(16, (value / maxMetricValue) * 40); 
                      const isHovered = hoveredRegion === region.id;

                      return (
                        <motion.div
                          key={region.id}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                          style={{ left: region.x, top: region.y }}
                          onMouseEnter={() => setHoveredRegion(region.id)}
                          onMouseLeave={() => setHoveredRegion(null)}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                          {/* Pulsing ring for highest value */}
                          {isHighest && (
                            <motion.div 
                              className="absolute inset-0 bg-blue-500 rounded-full z-0"
                              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                            />
                          )}

                          {/* Main Data Node */}
                          <motion.div 
                            className={`relative z-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-white transition-colors duration-300 ${isHighest ? 'bg-blue-600' : 'bg-slate-500'}`}
                            style={{ width: sizeBase, height: sizeBase }}
                            whileHover={{ scale: 1.15 }}
                          >
                             {/* Show tiny icon if enough space */}
                             {sizeBase > 24 && <MapPin className="w-3 h-3 opacity-70" />}
                          </motion.div>

                          {/* Hover Tooltip */}
                          {isHovered && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-slate-800 text-white p-3 rounded-lg shadow-xl w-48 pointer-events-none z-50 border border-slate-700"
                            >
                              <div className="font-bold text-sm mb-1">{region.name} Zone</div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                  <div className="text-slate-400">Members</div>
                                  <div className="font-semibold text-blue-300">{region.users.toLocaleString()}</div>
                                </div>
                                <div>
                                  <div className="text-slate-400">Activity</div>
                                  <div className="font-semibold text-teal-300">{region.activity}</div>
                                </div>
                              </div>
                              <div className="mt-2 pt-2 border-t border-slate-600 text-[10px] text-center text-slate-300 flex items-center justify-center gap-1">
                                Click to open Regional Dashboard <ChevronRight className="w-3 h-3" />
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* CHARTS (Right Column) */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              
              {/* Line Chart */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Member Growth</h2>
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex-1 min-h-[150px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={growthData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                      <RechartsTooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                        cursor={{ stroke: '#e2e8f0', strokeWidth: 2, strokeDasharray: '4 4' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="members" 
                        stroke="#2563eb" 
                        strokeWidth={4} 
                        dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#2563eb' }} 
                        activeDot={{ r: 7, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Bar Chart */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 flex-1 flex flex-col">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">Org Health Score</h2>
                <p className="text-[10px] font-medium text-slate-500 mb-4">Real-time composite metric</p>
                <div className="flex-1 min-h-[150px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={healthData} margin={{ top: 0, right: 0, left: 10, bottom: 0 }}>
                      <XAxis type="number" hide domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#475569', fontWeight: 500 }} width={80} />
                      <RechartsTooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ fontSize: '12px', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Bar dataKey="score" radius={[0, 6, 6, 0]} barSize={14}>
                        {healthData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM SECTION - TABLE & PROFILE */}
            
            {/* Interactive Data Table */}
            <motion.div variants={fadeUp} className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col overflow-hidden h-full">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Recent National Activity Log</h2>
                <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">
                  View Full Log <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
                    <tr>
                      <th className="px-5 py-4 font-bold border-b border-slate-200">Region</th>
                      <th className="px-5 py-4 font-bold border-b border-slate-200">Activity Type</th>
                      <th className="px-5 py-4 font-bold border-b border-slate-200">Status</th>
                      <th className="px-5 py-4 font-bold border-b border-slate-200">Date Logged</th>
                      <th className="px-5 py-4 font-bold border-b border-slate-200 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activityLog.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                        <td className="px-5 py-3.5 font-semibold text-slate-800 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                            <MapPin className="w-4 h-4" />
                          </div>
                          {log.region}
                        </td>
                        <td className="px-5 py-3.5 font-medium text-slate-600">{log.type}</td>
                        <td className="px-5 py-3.5">
                          <StatusBadge status={log.status} urgency={log.urgency} />
                        </td>
                        <td className="px-5 py-3.5 text-slate-500 text-xs font-medium">{log.date}</td>
                        <td className="px-5 py-3.5 text-right">
                          <button className="text-blue-600 hover:text-blue-800 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100">
                            Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Dynamic Profile Context Card */}
            <motion.div variants={fadeUp} className="lg:col-span-4 relative h-full">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg border border-slate-700 p-6 h-full flex flex-col text-white relative overflow-hidden">
                {/* Decorative background shape */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h2 className="text-xs font-bold text-blue-300 uppercase tracking-widest">Active Executive Profile</h2>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20 animate-pulse"></span>
                </div>
                
                <div className="flex gap-4 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 shadow-inner overflow-hidden shrink-0 backdrop-blur-sm">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Suleiman&backgroundColor=transparent" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-black text-xl leading-tight">Suleiman</div>
                    <div className="text-xs font-medium text-blue-200 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Katsina State Base
                    </div>
                    <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-200 border border-blue-500/30 uppercase">
                      National Admin Access
                    </div>
                  </div>
                </div>

                {/* Stat grid inside profile */}
                <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">System Verified</div>
                    <div className="font-black text-lg">Since 2026</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Vol. Hours logged</div>
                    <div className="font-black text-lg text-emerald-400">124 h</div>
                  </div>
                </div>

                <div className="mt-auto relative z-10">
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-3 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg shadow-blue-900/50">
                    <Settings className="w-4 h-4" /> Manage Full Profile
                  </button>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </main>
      </div>
    </div>
  );
}