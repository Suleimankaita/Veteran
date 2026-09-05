import React, { useState, useMemo, useEffect } from 'react';
import { 
  Users, UserCheck, Clock, ShieldBan, UserPlus, Map, 
  Search, Filter, Plus, Download, RefreshCw, Bell, 
  MoreVertical, X, CheckCircle2, MapPin, Mail, Phone, 
  ChevronLeft, ChevronRight, Inbox, Copy
} from 'lucide-react';

// --- MOCK DATA ---
const mockStats = [
  { title: 'Total Members', value: '12,450', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', ring: 'ring-blue-100' },
  { title: 'Active Members', value: '10,231', icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', ring: 'ring-emerald-100' },
  { title: 'Pending', value: '48', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', ring: 'ring-amber-100' },
  { title: 'Suspended', value: '12', icon: ShieldBan, color: 'text-rose-600', bg: 'bg-rose-50', ring: 'ring-rose-100' },
  { title: 'New This Month', value: '342', icon: UserPlus, color: 'text-indigo-600', bg: 'bg-indigo-50', ring: 'ring-indigo-100' },
  { title: 'States Covered', value: '36', icon: Map, color: 'text-violet-600', bg: 'bg-violet-50', ring: 'ring-violet-100' },
];

const mockMembers = [
  {
    id: 'RHV-000184',
    name: 'Abdullahi Musa',
    email: 'a.musa@example.com',
    phone: '+234 801 234 5678',
    type: 'Full Member',
    state: 'Katsina',
    chapter: 'Katsina Central',
    status: 'Active',
    verification: 'Verified',
    joinedDate: '14 Aug 2026',
    lastActive: 'Today',
    avatar: 'https://ui-avatars.com/api/?name=Abdullahi+Musa&background=0D8ABC&color=fff',
    profession: 'Software Engineer',
    interests: ['Technology', 'Youth Development']
  },
  {
    id: 'RHV-000185',
    name: 'Chioma Adebayo',
    email: 'c.adebayo@example.com',
    phone: '+234 802 345 6789',
    type: 'Associate Member',
    state: 'Lagos',
    chapter: 'Ikeja',
    status: 'Pending',
    verification: 'Pending',
    joinedDate: '01 Sep 2026',
    lastActive: 'Yesterday',
    avatar: 'https://ui-avatars.com/api/?name=Chioma+Adebayo&background=10B981&color=fff',
    profession: 'Medical Doctor',
    interests: ['Healthcare', 'Women Empowerment']
  },
  {
    id: 'RHV-000186',
    name: 'Ibrahim Bello',
    email: 'i.bello@example.com',
    phone: '+234 803 456 7890',
    type: 'Volunteer',
    state: 'Kano',
    chapter: 'Kano Municipal',
    status: 'Suspended',
    verification: 'Verified',
    joinedDate: '10 Jan 2025',
    lastActive: 'Aug 30',
    avatar: 'https://ui-avatars.com/api/?name=Ibrahim+Bello&background=EF4444&color=fff',
    profession: 'Teacher',
    interests: ['Education', 'Community Outreach']
  }
];

export default function MembersManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Filter members based on search
  const filteredMembers = useMemo(() => {
    return mockMembers.filter(member => 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.state.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Handle single checkbox selection
  const toggleSelection = (id) => {
    setSelectedMembers(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  // Handle "Select All"
  const toggleSelectAll = () => {
    if (selectedMembers.length === filteredMembers.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(filteredMembers.map(m => m.id));
    }
  };

  // Open profile drawer
  const openProfile = (member) => {
    setActiveMember(member);
    setDrawerOpen(true);
  };

  // Status Badge Styling Function with modern rings
  const getStatusBadge = (status) => {
    const styles = {
      'Active': 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
      'Pending': 'bg-amber-50 text-amber-700 ring-amber-600/20',
      'Suspended': 'bg-rose-50 text-rose-700 ring-rose-600/20'
    };
    return `px-2.5 py-1 text-xs font-medium rounded-full ring-1 inset-ring ${styles[status] || 'bg-slate-50 text-slate-700 ring-slate-600/20'}`;
  };

  // Mock refresh handler
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setDrawerOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. PAGE HEADER */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-0 z-30 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Members Management</h1>
          <p className="text-sm text-slate-500 mt-1">Manage registered members, roles, and chapters across Nigeria.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            onClick={handleRefresh}
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200"
            aria-label="Refresh data"
          >
            <RefreshCw size={20} className={isRefreshing ? "animate-spin text-blue-600" : ""} />
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-slate-200">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
          </button>
          <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 flex-1 sm:flex-none">
            <Download size={16} /> <span className="hidden sm:inline">Export</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium flex-1 sm:flex-none">
            <Plus size={16} /> Add <span className="hidden sm:inline">Member</span>
          </button>
        </div>
      </header>

      <main className="p-6 max-w-[1400px] mx-auto space-y-6">
        
        {/* 2. STATISTICS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {mockStats.map((stat, index) => (
            <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-lg ${stat.bg} ${stat.color} ring-1 ${stat.ring} transition-transform group-hover:scale-110`}>
                  <stat.icon size={20} strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* 3. SEARCH & FILTERS */}
        <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, ID, or state..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-transparent border-none rounded-lg focus:ring-0 text-sm outline-none placeholder:text-slate-400"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto px-2 md:px-0 pb-2 md:pb-0">
            {selectedMembers.length > 0 && (
              <div className="flex items-center gap-3 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium animate-in fade-in zoom-in duration-200">
                <span>{selectedMembers.length} selected</span>
                <div className="h-4 w-px bg-blue-200"></div>
                <button className="hover:text-blue-900 transition-colors">Bulk Actions</button>
              </div>
            )}
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 w-full md:w-auto justify-center">
              <Filter size={16} /> Filters
            </button>
          </div>
        </div>

        {/* 4. MEMBERS TABLE */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 w-12 text-center">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer transition-colors"
                      checked={selectedMembers.length === filteredMembers.length && filteredMembers.length > 0}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Member Info</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">ID & Type</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Timeline</th>
                  <th className="p-4 w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member) => (
                    <tr 
                      key={member.id} 
                      className={`hover:bg-slate-50 transition-colors group cursor-pointer ${selectedMembers.includes(member.id) ? 'bg-blue-50/30' : ''}`} 
                      onClick={() => openProfile(member)}
                    >
                      <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="checkbox" 
                          className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer transition-colors"
                          checked={selectedMembers.includes(member.id)}
                          onChange={() => toggleSelection(member.id)}
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full border border-slate-200 bg-slate-100" />
                          <div>
                            <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{member.name}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="font-mono text-xs font-medium text-slate-700 bg-slate-100 inline-block px-2 py-1 rounded-md mb-1">{member.id}</p>
                        <p className="text-xs text-slate-500">{member.type}</p>
                      </td>
                      <td className="p-4">
                        <p className="font-medium text-slate-900">{member.state}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{member.chapter}</p>
                      </td>
                      <td className="p-4 space-y-2">
                        <div className="block"><span className={getStatusBadge(member.status)}>{member.status}</span></div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                          {member.verification === 'Verified' ? <CheckCircle2 size={14} className="text-blue-500" /> : <Clock size={14} className="text-amber-500" />}
                          {member.verification}
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="font-medium text-slate-900">{member.joinedDate}</p>
                        <p className="text-xs text-slate-500 mt-0.5">Active: {member.lastActive}</p>
                      </td>
                      <td className="p-4 text-right">
                        <button 
                          onClick={(e) => { e.stopPropagation(); }} 
                          className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 opacity-0 group-hover:opacity-100"
                        >
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="p-12 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-500">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                          <Inbox size={24} className="text-slate-400" />
                        </div>
                        <p className="text-base font-medium text-slate-900">No members found</p>
                        <p className="text-sm mt-1">Adjust your filters or search query to find what you're looking for.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Footer */}
          <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between text-sm">
            <p className="text-slate-500">Showing <span className="font-medium text-slate-900">{filteredMembers.length}</span> of <span className="font-medium text-slate-900">{mockMembers.length}</span> results</p>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg border border-slate-300 text-slate-500 hover:bg-white disabled:opacity-50 transition-colors" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="p-1.5 rounded-lg border border-slate-300 text-slate-500 hover:bg-white transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 5. PROFILE DRAWER (Slide-out animation) */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Overlay backdrop */}
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" onClick={() => setDrawerOpen(false)}></div>
        
        {/* Drawer Panel */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {activeMember && (
            <>
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-200 relative bg-slate-50/50 flex-shrink-0">
                <button 
                  onClick={() => setDrawerOpen(false)} 
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-4 mt-2">
                  <div className="relative">
                    <img src={activeMember.avatar} alt="Profile" className="w-16 h-16 rounded-full border-2 border-white shadow-md bg-white" />
                    <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${activeMember.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{activeMember.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="font-mono text-sm font-medium text-slate-500">{activeMember.id}</p>
                      <button className="text-slate-400 hover:text-blue-600 transition-colors"><Copy size={14} /></button>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <span className={getStatusBadge(activeMember.status)}>{activeMember.status}</span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full ring-1 inset-ring bg-blue-50 text-blue-700 ring-blue-600/20 flex items-center gap-1">
                        <CheckCircle2 size={12}/> {activeMember.verification}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="p-6 overflow-y-auto flex-1 space-y-8 custom-scrollbar">
                
                {/* Contact Info */}
                <section>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Contact & Location</h3>
                  <div className="space-y-4 text-sm bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="p-2 bg-white rounded-lg shadow-sm"><Mail size={16} className="text-slate-400" /></div>
                      <span className="font-medium">{activeMember.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="p-2 bg-white rounded-lg shadow-sm"><Phone size={16} className="text-slate-400" /></div>
                      <span className="font-medium">{activeMember.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="p-2 bg-white rounded-lg shadow-sm"><MapPin size={16} className="text-slate-400" /></div>
                      <span><span className="font-medium">{activeMember.state}</span> State • {activeMember.chapter} Chapter</span>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* Membership Details */}
                <section>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Membership Info</h3>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
                    <div>
                      <p className="text-slate-500 mb-1 text-xs">Role / Type</p>
                      <p className="font-medium text-slate-900">{activeMember.type}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1 text-xs">Joined Date</p>
                      <p className="font-medium text-slate-900">{activeMember.joinedDate}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1 text-xs">Profession</p>
                      <p className="font-medium text-slate-900">{activeMember.profession}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-slate-500 mb-3 text-xs">Areas of Interest</p>
                    <div className="flex flex-wrap gap-2">
                      {activeMember.interests.map(interest => (
                        <span key={interest} className="px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-default rounded-lg text-xs font-medium">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* Activity Timeline */}
                <section>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Recent Activity</h3>
                  <div className="relative border-l-2 border-slate-200 ml-2.5 space-y-6 pb-2">
                    <div className="relative pl-6">
                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-blue-500 rounded-full ring-4 ring-white"></div>
                      <p className="text-sm font-medium text-slate-900">Logged in from Web</p>
                      <p className="text-xs text-slate-500 mt-0.5">{activeMember.lastActive}</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-slate-300 rounded-full ring-4 ring-white"></div>
                      <p className="text-sm font-medium text-slate-900">Profile Verified</p>
                      <p className="text-xs text-slate-500 mt-0.5">Aug 20, 2026</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-4 border-t border-slate-200 bg-slate-50 flex-shrink-0 grid grid-cols-2 gap-3">
                <button className="px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-white text-sm font-semibold transition-colors shadow-sm">
                  Edit Profile
                </button>
                <button className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold transition-colors shadow-sm">
                  Message Member
                </button>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
} 