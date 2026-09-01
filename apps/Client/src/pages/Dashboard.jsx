import React, { useMemo, useState } from "react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  ZoomControl,
} from "react-leaflet";

import {
  LayoutDashboard,
  Users,
  MessagesSquare,
  Headphones,
  FolderKanban,
  Link2,
  CalendarDays,
  WalletCards,
  MapPinned,
  Image as ImageIcon,
  FileText,
  BarChart3,
  UserCog,
  ShieldCheck,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Plus,
  UserPlus,
  HeartHandshake,
  BriefcaseBusiness,
  Home,
  HeartPulse,
  HandHeart,
  AlertCircle,
  CheckCircle2,
  Clock3,
  PhoneCall,
  Activity,
  Trophy,
  Star,
  ThumbsUp,
  Megaphone,
  Menu,
  X,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* =========================================================
   DATA
========================================================= */

const navigation = [
  {
    label: "MAIN",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Members",
        icon: Users,
      },
      {
        name: "Support Rooms",
        icon: Headphones,
      },
      {
        name: "Support Cases",
        icon: FolderKanban,
      },
      {
        name: "Programs",
        icon: Link2,
      },
      {
        name: "Events",
        icon: CalendarDays,
      },
      {
        name: "Donations",
        icon: WalletCards,
      },
      {
        name: "Community Map",
        icon: MapPinned,
      },
    ],
  },

  {
    label: "COMMUNICATION",
    items: [
      {
        name: "Messages",
        icon: MessagesSquare,
        badge: 12,
      },
      {
        name: "Announcements",
        icon: Megaphone,
      },
    ],
  },

  {
    label: "RESOURCES",
    items: [
      {
        name: "Gallery",
        icon: ImageIcon,
      },
      {
        name: "Resources",
        icon: FileText,
      },
      {
        name: "Reports",
        icon: BarChart3,
      },
    ],
  },

  {
    label: "SYSTEM",
    items: [
      {
        name: "Staff Management",
        icon: UserCog,
      },
      {
        name: "Audit Logs",
        icon: ShieldCheck,
      },
      {
        name: "Settings",
        icon: Settings,
      },
    ],
  },
];

/*
 * IMPORTANT:
 * These are deliberately aggregated community locations.
 *
 * Do NOT expose private veteran home addresses.
 * In production, these coordinates should represent
 * communities / support centers / program areas.
 */
const nigeriaActivity = [
  {
    state: "Sokoto",
    lat: 13.0622,
    lng: 5.2433,
    members: 47,
    programs: 3,
    cases: 5,
    centers: 1,
    level: "high",
  },

  {
    state: "Katsina",
    lat: 12.988,
    lng: 7.6171,
    members: 86,
    programs: 4,
    cases: 8,
    centers: 2,
    level: "high",
  },

  {
    state: "Kano",
    lat: 12.0022,
    lng: 8.592,
    members: 112,
    programs: 6,
    cases: 14,
    centers: 3,
    level: "high",
  },

  {
    state: "Kaduna",
    lat: 10.5105,
    lng: 7.4165,
    members: 91,
    programs: 5,
    cases: 11,
    centers: 3,
    level: "high",
  },

  {
    state: "Bauchi",
    lat: 10.3158,
    lng: 9.8442,
    members: 54,
    programs: 3,
    cases: 7,
    centers: 1,
    level: "medium",
  },

  {
    state: "Gombe",
    lat: 10.2897,
    lng: 11.1673,
    members: 39,
    programs: 2,
    cases: 5,
    centers: 1,
    level: "medium",
  },

  {
    state: "Borno",
    lat: 11.8311,
    lng: 13.151,
    members: 48,
    programs: 3,
    cases: 8,
    centers: 2,
    level: "medium",
  },

  {
    state: "Adamawa",
    lat: 9.325,
    lng: 12.3984,
    members: 42,
    programs: 2,
    cases: 6,
    centers: 1,
    level: "medium",
  },

  {
    state: "Plateau",
    lat: 9.8965,
    lng: 8.8583,
    members: 57,
    programs: 3,
    cases: 5,
    centers: 2,
    level: "high",
  },

  {
    state: "Niger",
    lat: 9.0819,
    lng: 6.541,
    members: 51,
    programs: 3,
    cases: 6,
    centers: 1,
    level: "medium",
  },

  {
    state: "Kwara",
    lat: 8.9669,
    lng: 4.3874,
    members: 35,
    programs: 2,
    cases: 4,
    centers: 1,
    level: "low",
  },

  {
    state: "Oyo",
    lat: 8.1574,
    lng: 3.6147,
    members: 72,
    programs: 4,
    cases: 9,
    centers: 2,
    level: "high",
  },

  {
    state: "Lagos",
    lat: 6.5244,
    lng: 3.3792,
    members: 138,
    programs: 8,
    cases: 17,
    centers: 4,
    level: "high",
  },

  {
    state: "Ogun",
    lat: 7.1475,
    lng: 3.3619,
    members: 69,
    programs: 4,
    cases: 8,
    centers: 2,
    level: "high",
  },

  {
    state: "Ondo",
    lat: 7.25,
    lng: 5.2,
    members: 44,
    programs: 2,
    cases: 5,
    centers: 1,
    level: "medium",
  },

  {
    state: "Edo",
    lat: 6.6349,
    lng: 5.93,
    members: 61,
    programs: 3,
    cases: 6,
    centers: 2,
    level: "high",
  },

  {
    state: "Delta",
    lat: 5.704,
    lng: 5.9339,
    members: 52,
    programs: 3,
    cases: 5,
    centers: 1,
    level: "medium",
  },

  {
    state: "Rivers",
    lat: 4.8156,
    lng: 7.0498,
    members: 73,
    programs: 4,
    cases: 9,
    centers: 2,
    level: "high",
  },

  {
    state: "Cross River",
    lat: 5.9631,
    lng: 8.3309,
    members: 37,
    programs: 2,
    cases: 4,
    centers: 1,
    level: "low",
  },

  {
    state: "Akwa Ibom",
    lat: 5.0077,
    lng: 7.85,
    members: 43,
    programs: 2,
    cases: 5,
    centers: 1,
    level: "medium",
  },

  {
    state: "Enugu",
    lat: 6.4584,
    lng: 7.5464,
    members: 48,
    programs: 3,
    cases: 5,
    centers: 1,
    level: "medium",
  },

  {
    state: "Anambra",
    lat: 6.22,
    lng: 6.94,
    members: 66,
    programs: 4,
    cases: 7,
    centers: 2,
    level: "high",
  },

  {
    state: "Benue",
    lat: 7.1906,
    lng: 8.1294,
    members: 46,
    programs: 2,
    cases: 5,
    centers: 1,
    level: "medium",
  },

  {
    state: "FCT",
    lat: 9.0765,
    lng: 7.3986,
    members: 94,
    programs: 5,
    cases: 10,
    centers: 3,
    level: "high",
  },
];

const recentActivity = [
  {
    type: "member",
    title: "New member registered",
    description: "John A. from Kaduna joined RHV",
    time: "2 mins ago",
    icon: UserPlus,
  },

  {
    type: "case",
    title: "Support case updated",
    description: "Case #RHV-2048 status changed to In Progress",
    time: "15 mins ago",
    icon: FolderKanban,
  },

  {
    type: "donation",
    title: "New donation received",
    description: "₦50,000 donation received from Grace Foundation",
    time: "32 mins ago",
    icon: WalletCards,
  },

  {
    type: "program",
    title: "Program completed",
    description: "Veteran Skills Acquisition Program completed successfully",
    time: "1 hour ago",
    icon: CheckCircle2,
  },

  {
    type: "request",
    title: "New support request",
    description: "Housing support request from Michael O. in Lagos",
    time: "2 hours ago",
    icon: HandHeart,
  },
];

const programs = [
  {
    name: "Veteran Skills Program",
    participants: 124,
    progress: 75,
    icon: BriefcaseBusiness,
  },

  {
    name: "Entrepreneurship Program",
    participants: 96,
    progress: 60,
    icon: WalletCards,
  },

  {
    name: "Community Reintegration",
    participants: 78,
    progress: 80,
    icon: Users,
  },

  {
    name: "Health & Wellness Program",
    participants: 112,
    progress: 65,
    icon: HeartPulse,
  },
];

const supportRooms = [
  {
    name: "Welfare Support",
    requests: 42,
    progress: 68,
    icon: HeartHandshake,
  },

  {
    name: "Employment Support",
    requests: 27,
    progress: 54,
    icon: BriefcaseBusiness,
  },

  {
    name: "Housing Support",
    requests: 18,
    progress: 36,
    icon: Home,
  },

  {
    name: "Healthcare Support",
    requests: 31,
    progress: 62,
    icon: HeartPulse,
  },

  {
    name: "Financial Assistance",
    requests: 16,
    progress: 32,
    icon: WalletCards,
  },
];

const events = [
  {
    day: "25",
    month: "MAY",
    title: "Veterans Community Meeting",
    location: "RHV Community Center",
    time: "10:00 AM - 12:00 PM",
  },

  {
    day: "28",
    month: "MAY",
    title: "Employment Workshop",
    location: "Skills Training Hall",
    time: "2:00 PM - 4:00 PM",
  },

  {
    day: "02",
    month: "JUN",
    title: "Family Support Session",
    location: "RHV Support Center",
    time: "11:00 AM - 1:00 PM",
  },

  {
    day: "05",
    month: "JUN",
    title: "Health & Wellness Program",
    location: "General Hospital Partnership",
    time: "9:00 AM - 12:00 PM",
  },
];

const members = [
  {
    name: "John A. Musa",
    location: "Kaduna State",
    joined: "Joined 2 mins ago",
  },

  {
    name: "Peter Emmanuel",
    location: "Lagos State",
    joined: "Joined 1 hour ago",
  },

  {
    name: "Michael O. Ade",
    location: "Oyo State",
    joined: "Joined 3 hours ago",
  },

  {
    name: "Samuel T. John",
    location: "Rivers State",
    joined: "Joined 5 hours ago",
  },
];

const donations = [
  {
    name: "Grace Foundation",
    amount: "₦50,000",
    time: "2 mins ago",
  },

  {
    name: "Individual Donation",
    amount: "₦25,000",
    time: "1 hour ago",
  },

  {
    name: "Patriot Support Group",
    amount: "₦100,000",
    time: "3 hours ago",
  },

  {
    name: "Veterans Friend",
    amount: "₦10,000",
    time: "5 hours ago",
  },
];

const impactData = [
  {
    month: "Jan",
    members: 520,
    cases: 340,
    programs: 220,
    donations: 90,
  },

  {
    month: "Feb",
    members: 760,
    cases: 460,
    programs: 300,
    donations: 130,
  },

  {
    month: "Mar",
    members: 850,
    cases: 570,
    programs: 390,
    donations: 210,
  },

  {
    month: "Apr",
    members: 1100,
    cases: 750,
    programs: 470,
    donations: 280,
  },

  {
    month: "May",
    members: 1000,
    cases: 730,
    programs: 500,
    donations: 300,
  },

  {
    month: "Jun",
    members: 1248,
    cases: 1000,
    programs: 680,
    donations: 450,
  },
];

const caseData = [
  {
    name: "Open",
    value: 42,
  },

  {
    name: "In Progress",
    value: 61,
  },

  {
    name: "Resolved",
    value: 29,
  },

  {
    name: "Closed",
    value: 10,
  },
];

const caseColors = [
  "#16a34a",
  "#2563eb",
  "#7c3aed",
  "#ef4444",
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function StatCard({
  title,
  value,
  change,
  positive,
  description,
  icon: Icon,
  iconClass,
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-[29px] font-bold tracking-tight text-slate-900">
            {value}
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <span
              className={`flex items-center gap-0.5 text-xs font-semibold ${
                positive
                  ? "text-emerald-600"
                  : "text-red-500"
              }`}
            >
              {positive ? (
                <ArrowUpRight size={14} />
              ) : (
                <ArrowDownRight size={14} />
              )}

              {change}
            </span>

            <span className="text-[11px] text-slate-400">
              {description}
            </span>
          </div>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon size={20} />
        </div>
      </div>

      {/* Decorative mini graph */}
      <div className="absolute bottom-0 right-0 h-[65px] w-[135px] opacity-30">
        <svg
          viewBox="0 0 135 65"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48 C18 42 20 52 33 43 C47 33 48 39 61 28 C75 17 81 37 92 23 C104 8 116 28 135 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  description,
  action = "View all",
}) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div>
        <h2 className="text-[15px] font-bold text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-[11px] text-slate-400">
            {description}
          </p>
        )}
      </div>

      {action && (
        <button className="flex items-center gap-1 text-xs font-medium text-slate-500 transition hover:text-slate-900">
          {action}
          <ChevronRight size={13} />
        </button>
      )}
    </div>
  );
}

function ProgressBar({
  progress,
  className = "",
}) {
  return (
    <div
      className={`h-1.5 overflow-hidden rounded-full bg-slate-100 ${className}`}
    >
      <div
        className="h-full rounded-full bg-emerald-500 transition-all duration-700"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

/* =========================================================
   NIGERIA MAP
========================================================= */

function NigeriaMap() {
  const [selected, setSelected] = useState(null);

  const levelClass = {
    high: "bg-emerald-500",
    medium: "bg-amber-500",
    low: "bg-red-500",
  };

  return (
    <div className="relative h-[485px] overflow-hidden rounded-b-2xl">
      {/* Map */}
      <MapContainer
        center={[9.2, 8.2]}
        zoom={5.4}
        minZoom={5}
        maxZoom={8}
        scrollWheelZoom={false}
        zoomControl={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="topleft" />

        {nigeriaActivity.map((item) => {
          const radius =
            item.members >= 100
              ? 13
              : item.members >= 70
              ? 11
              : 9;

          const fill =
            item.level === "high"
              ? "#16a34a"
              : item.level === "medium"
              ? "#f59e0b"
              : "#ef4444";

          return (
            <CircleMarker
              key={item.state}
              center={[item.lat, item.lng]}
              radius={radius}
              pathOptions={{
                color: "#ffffff",
                weight: 3,
                fillColor: fill,
                fillOpacity: 0.95,
              }}
              eventHandlers={{
                click: () => setSelected(item),
              }}
            >
              <Popup>
                <div className="min-w-[190px]">
                  <p className="text-sm font-bold">
                    {item.state} State
                  </p>

                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>Members</span>
                      <strong>{item.members}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Programs</span>
                      <strong>{item.programs}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Support cases</span>
                      <strong>{item.cases}</strong>
                    </div>

                    <div className="flex justify-between">
                      <span>Support centers</span>
                      <strong>{item.centers}</strong>
                    </div>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>

      {/* Map overlay */}
      <div className="pointer-events-none absolute left-4 top-4 z-[500] rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
        <p className="text-xs font-bold text-slate-900">
          Nigeria Community Network
        </p>

        <p className="mt-1 text-[10px] text-slate-500">
          Aggregated RHV activity
        </p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-[500] rounded-xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          Member Activity
        </p>

        <div className="flex flex-wrap gap-4 text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            High
          </span>

          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            Medium
          </span>

          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            Low
          </span>
        </div>
      </div>

      {/* Selected state */}
      {selected && (
        <div className="absolute bottom-4 right-4 z-[500] w-[230px] rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Selected location
              </p>

              <h3 className="mt-1 font-bold text-slate-900">
                {selected.state}
              </h3>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="rounded-lg p-1 hover:bg-slate-100"
            >
              <X size={14} />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-slate-50 p-2">
              <p className="text-[9px] text-slate-400">
                Members
              </p>

              <p className="mt-1 text-sm font-bold">
                {selected.members}
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-2">
              <p className="text-[9px] text-slate-400">
                Programs
              </p>

              <p className="mt-1 text-sm font-bold">
                {selected.programs}
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-2">
              <p className="text-[9px] text-slate-400">
                Cases
              </p>

              <p className="mt-1 text-sm font-bold">
                {selected.cases}
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 p-2">
              <p className="text-[9px] text-slate-400">
                Centers
              </p>

              <p className="mt-1 text-sm font-bold">
                {selected.centers}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   ACTIVITY
========================================================= */

function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <SectionHeader
        title="What's Happening"
        description="Live organization activity"
      />

      <div className="relative">
        <div className="absolute bottom-4 left-[18px] top-4 w-px bg-slate-100" />

        <div className="space-y-5">
          {recentActivity.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative flex gap-3"
              >
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-white bg-emerald-50 text-emerald-600 shadow-sm">
                  <Icon size={15} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-slate-800">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    {item.description}
                  </p>

                  <p className="mt-1 text-[9px] text-slate-400">
                    {item.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-[11px] font-semibold text-slate-500 transition hover:bg-slate-50">
        Load more
        <ArrowUpRight size={13} />
      </button>
    </div>
  );
}

/* =========================================================
   SUPPORT CASES
========================================================= */

function SupportCases() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <SectionHeader
        title="Support Cases Overview"
        description="Current month"
      />

      <div className="relative flex items-center justify-center">
        <ResponsiveContainer
          width="100%"
          height={180}
        >
          <PieChart>
            <Pie
              data={caseData}
              cx="50%"
              cy="50%"
              innerRadius={48}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {caseData.map((_, index) => (
                <Cell
                  key={index}
                  fill={caseColors[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute text-center">
          <p className="text-[9px] text-slate-400">
            Total Cases
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            142
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {caseData.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor: caseColors[index],
                }}
              />

              <span className="text-[10px] text-slate-500">
                {item.name}
              </span>
            </div>

            <span className="text-[10px] font-bold text-slate-700">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-5 text-[10px] font-semibold text-slate-500 hover:text-slate-900">
        View all cases →
      </button>
    </div>
  );
}

/* =========================================================
   PROGRAMS
========================================================= */

function ProgramsCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <SectionHeader
        title="Program Progress"
        description="Current program performance"
      />

      <div className="space-y-5">
        {programs.map((program) => {
          const Icon = program.icon;

          return (
            <div key={program.name}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon size={16} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex justify-between gap-3">
                    <p className="truncate text-[11px] font-semibold text-slate-700">
                      {program.name}
                    </p>

                    <span className="text-[10px] font-bold text-slate-600">
                      {program.progress}%
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] text-slate-400">
                    {program.participants} participants
                  </p>

                  <ProgressBar
                    progress={program.progress}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   SUPPORT ROOMS
========================================================= */

function SupportRooms() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <SectionHeader
        title="Top Support Rooms"
        description="Most active support areas"
      />

      <div className="space-y-5">
        {supportRooms.map((room) => {
          const Icon = room.icon;

          return (
            <button
              key={room.name}
              className="group flex w-full items-center gap-3 text-left"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition group-hover:bg-emerald-50 group-hover:text-emerald-600">
                <Icon size={16} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex justify-between">
                  <p className="truncate text-[10px] font-semibold">
                    {room.name}
                  </p>

                  <span className="text-[9px] font-bold text-slate-500">
                    {room.progress}%
                  </span>
                </div>

                <p className="mt-1 text-[9px] text-slate-400">
                  {room.requests} active requests
                </p>

                <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                    style={{
                      width: `${room.progress}%`,
                    }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   EVENTS
========================================================= */

function UpcomingEvents() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <SectionHeader
        title="Upcoming Events"
        description="Next organization activities"
      />

      <div className="space-y-3">
        {events.map((event) => (
          <button
            key={event.title}
            className="group flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:border-slate-200 hover:bg-slate-50"
          >
            <div className="flex h-12 w-11 shrink-0 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white">
              <span className="text-[8px] font-bold text-red-500">
                {event.month}
              </span>

              <span className="text-lg font-bold text-slate-900">
                {event.day}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold">
                {event.title}
              </p>

              <p className="mt-1 truncate text-[9px] text-slate-400">
                {event.location}
              </p>

              <p className="mt-1 text-[9px] text-slate-400">
                {event.time}
              </p>
            </div>

            <ChevronRight
              size={14}
              className="text-slate-300 transition group-hover:translate-x-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   RECENT MEMBERS
========================================================= */

function RecentMembers() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <SectionHeader
        title="Recent Members"
        description="Recently registered members"
      />

      <div className="space-y-4">
        {members.map((member, index) => (
          <div
            key={member.name}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
              {member.name
                .split(" ")
                .slice(0, 2)
                .map((x) => x[0])
                .join("")}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold">
                {member.name}
              </p>

              <p className="truncate text-[9px] text-slate-400">
                {member.location} · {member.joined}
              </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">
              Active
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   DONATIONS
========================================================= */

function RecentDonations() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <SectionHeader
        title="Recent Donations"
        description="Latest contributions"
      />

      <div className="space-y-4">
        {donations.map((donation) => (
          <div
            key={`${donation.name}-${donation.amount}`}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <HeartHandshake size={15} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold">
                {donation.name}
              </p>

              <p className="text-[9px] text-slate-400">
                {donation.time}
              </p>
            </div>

            <span className="text-[10px] font-bold text-slate-700">
              {donation.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   IMPACT CHART
========================================================= */

function MonthlyImpact() {
  const [metric, setMetric] = useState("all");

  const lines = [
    {
      key: "members",
      name: "Members",
      className: "text-emerald-500",
    },
    {
      key: "cases",
      name: "Cases",
      className: "text-blue-500",
    },
    {
      key: "programs",
      name: "Programs",
      className: "text-purple-500",
    },
    {
      key: "donations",
      name: "Donations",
      className: "text-amber-500",
    },
  ];

  const visibleLines =
    metric === "all"
      ? lines
      : lines.filter((item) => item.key === metric);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h2 className="text-[15px] font-bold">
            Monthly Impact Overview
          </h2>

          <p className="mt-1 text-[11px] text-slate-400">
            Tracking our impact over the months
          </p>
        </div>

        <select
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[10px] outline-none"
        >
          <option value="all">All metrics</option>
          <option value="members">Members</option>
          <option value="cases">Cases</option>
          <option value="programs">Programs</option>
          <option value="donations">Donations</option>
        </select>
      </div>

      <div className="mb-4 flex flex-wrap gap-4">
        {lines.map((line) => (
          <button
            key={line.key}
            onClick={() => setMetric(line.key)}
            className="flex items-center gap-1.5 text-[9px] text-slate-500"
          >
            <span
              className={`h-2 w-2 rounded-full ${
                line.key === "members"
                  ? "bg-emerald-500"
                  : line.key === "cases"
                  ? "bg-blue-500"
                  : line.key === "programs"
                  ? "bg-purple-500"
                  : "bg-amber-500"
              }`}
            />

            {line.name}
          </button>
        ))}
      </div>

      <ResponsiveContainer
        width="100%"
        height={280}
      >
        <LineChart data={impactData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#eef2f7"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            fontSize={10}
            tick={{ fill: "#94a3b8" }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            fontSize={9}
            tick={{ fill: "#94a3b8" }}
          />

          <Tooltip />

          {visibleLines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              stroke={
                line.key === "members"
                  ? "#16a34a"
                  : line.key === "cases"
                  ? "#2563eb"
                  : line.key === "programs"
                  ? "#7c3aed"
                  : "#f59e0b"
              }
              strokeWidth={2}
              dot={{
                r: 2,
              }}
              activeDot={{
                r: 5,
              }}
              animationDuration={900}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

/* =========================================================
   ACHIEVEMENTS
========================================================= */

function Achievements() {
  const items = [
    {
      icon: Trophy,
      title: "1,000+ Members Milestone",
      description:
        "We have successfully reached over 1,000 registered members.",
    },

    {
      icon: Star,
      title: "24 Active Programs",
      description:
        "Running programs across multiple communities in Nigeria.",
    },

    {
      icon: ThumbsUp,
      title: "8,000+ Lives Impacted",
      description:
        "Making a real difference in veterans' lives and families.",
    },

    {
      icon: HeartPulse,
      title: "95% Satisfaction Rate",
      description:
        "Feedback from our members and beneficiaries.",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
      <SectionHeader
        title="Achievements"
        description="Organization milestones"
      />

      <div className="space-y-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon size={18} />
              </div>

              <div>
                <p className="text-[11px] font-bold text-emerald-600">
                  {item.title}
                </p>

                <p className="mt-1 text-[9px] leading-4 text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN DASHBOARD
========================================================= */

export default function VeteranAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] =
    useState("Dashboard");

  const [search, setSearch] = useState("");

  const [notificationsOpen, setNotificationsOpen] =
    useState(false);

  const filteredStates = useMemo(() => {
    if (!search.trim()) {
      return nigeriaActivity;
    }

    return nigeriaActivity.filter((state) =>
      state.state
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#f8fafb] text-slate-900">
      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      {sidebarOpen && (
        <button
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-[999] bg-slate-950/30 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`fixed left-0 top-0 z-[1000] flex h-screen w-[245px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex h-[76px] items-center border-b border-slate-100 px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-xs font-black text-emerald-700">
              RHV
            </div>

            <div>
              <p className="text-[13px] font-extrabold tracking-tight text-slate-900">
                RENEWED HOPE
              </p>

              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                Veterans (RHV)
              </p>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-slate-50 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-5">
          {navigation.map((section) => (
            <div
              key={section.label}
              className="mb-6"
            >
              <p className="mb-2 px-3 text-[8px] font-bold tracking-[0.18em] text-slate-400">
                {section.label}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active =
                    activePage === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        setActivePage(item.name);
                        setSidebarOpen(false);
                      }}
                      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[11px] font-medium transition-all ${
                        active
                          ? "bg-emerald-600 text-white shadow-[0_5px_15px_rgba(16,185,129,0.18)]"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={
                          active
                            ? "text-white"
                            : "text-slate-400 group-hover:text-emerald-600"
                        }
                      />

                      <span className="flex-1">
                        {item.name}
                      </span>

                      {item.badge && (
                        <span
                          className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[8px] font-bold ${
                            active
                              ? "bg-white text-emerald-600"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Card */}
        <div className="border-t border-slate-100 p-3">
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm">
              <HeartHandshake size={15} />
            </div>

            <p className="mt-3 text-[10px] font-bold text-emerald-700">
              RHV Impact
            </p>

            <p className="mt-1 text-[9px] leading-4 text-slate-500">
              Together, we are building stronger lives for those we serve.
            </p>

            <button className="mt-3 flex w-full items-center justify-center gap-1 rounded-lg bg-emerald-600 py-2 text-[9px] font-bold text-white">
              View Impact
              <ArrowUpRight size={12} />
            </button>
          </div>

          {/* Emergency */}
          <div className="mt-3 rounded-xl border border-red-100 bg-red-50/40 p-4">
            <div className="flex items-center gap-2 text-red-500">
              <PhoneCall size={14} />
              <span className="text-[10px] font-bold">
                Emergency Support Line
              </span>
            </div>

            <p className="mt-1 text-[8px] text-slate-400">
              24/7 Support Available
            </p>

            <p className="mt-2 text-[12px] font-bold tracking-wider text-slate-800">
              0800 123 4567
            </p>

            <button className="mt-3 flex w-full items-center justify-center gap-1 rounded-lg bg-red-500 py-2 text-[9px] font-bold text-white">
              <PhoneCall size={12} />
              Call Now
            </button>
          </div>

          <button className="mt-3 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-[10px] font-medium text-slate-500 hover:bg-slate-50">
            <LogOut size={15} />
            Sign out
          </button>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="lg:pl-[245px]">
        {/* HEADER */}
        <header className="sticky top-0 z-[900] border-b border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="flex h-[76px] items-center gap-4 px-4 sm:px-6 lg:px-7">
            {/* Mobile menu */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl p-2 text-slate-500 hover:bg-slate-50 lg:hidden"
            >
              <Menu size={20} />
            </button>

            {/* Search */}
            <div className="relative w-full max-w-[390px]">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search anything..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-14 text-[11px] text-slate-700 outline-none transition focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-50"
              />

              <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-slate-200 bg-white px-2 py-1 text-[8px] font-semibold text-slate-400">
                ⌘ K
              </span>
            </div>

            <div className="ml-auto flex items-center gap-3">
              {/* Date */}
              <div className="hidden items-center gap-2 text-[10px] text-slate-500 xl:flex">
                <CalendarDays size={14} />

                Thursday, May 22, 2025
              </div>

              {/* Live */}
              <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[9px] font-bold text-emerald-600 md:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                LIVE · 10:24 AM
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() =>
                    setNotificationsOpen(
                      !notificationsOpen
                    )
                  }
                  className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-50"
                >
                  <Bell size={19} />

                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[7px] font-bold text-white">
                    8
                  </span>
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 top-12 w-[300px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold">
                        Notifications
                      </p>

                      <button className="text-[9px] text-emerald-600">
                        Mark all read
                      </button>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[10px] font-semibold">
                          New support request
                        </p>

                        <p className="mt-1 text-[9px] text-slate-400">
                          Housing support request received.
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[10px] font-semibold">
                          Program update
                        </p>

                        <p className="mt-1 text-[9px] text-slate-400">
                          Veteran Skills Program reached 75%.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Messages */}
              <button className="relative hidden rounded-xl p-2 text-slate-500 hover:bg-slate-50 sm:block">
                <MessagesSquare size={19} />

                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[7px] font-bold text-white">
                  5
                </span>
              </button>

              {/* User */}
              <button className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-50">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-white">
                  AD
                </div>

                <div className="hidden text-left lg:block">
                  <p className="text-[10px] font-bold text-slate-800">
                    Admin
                  </p>

                  <p className="text-[8px] text-slate-400">
                    Super Administrator
                  </p>
                </div>

                <ChevronDown
                  size={13}
                  className="hidden text-slate-400 lg:block"
                />
              </button>
            </div>
          </div>
        </header>

        {/* PAGE */}
        <div className="mx-auto max-w-[1500px] space-y-6 p-4 sm:p-6 lg:p-7">
          {/* =================================================
              PAGE INTRO
          ================================================= */}

          <section className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  Good morning, Admin!
                </h1>

                <span className="text-xl">👋</span>
              </div>

              <p className="mt-1 text-[11px] text-slate-400">
                Here's what's happening with Renewed Hope Veterans today.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold text-slate-600 shadow-sm transition hover:border-emerald-200 hover:text-emerald-600">
                <BarChart3 size={14} />
                Reports
              </button>

              <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-[10px] font-bold text-white shadow-sm transition hover:bg-emerald-700">
                <Plus size={14} />
                Quick Action
              </button>
            </div>
          </section>

          {/* =================================================
              KPI CARDS
          ================================================= */}

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Total Members"
              value="1,248"
              change="+18"
              positive
              description="this month"
              icon={Users}
              iconClass="bg-emerald-50 text-emerald-600"
            />

            <StatCard
              title="Active Support Cases"
              value="142"
              change="+8"
              positive
              description="from last month"
              icon={FolderKanban}
              iconClass="bg-blue-50 text-blue-600"
            />

            <StatCard
              title="Active Programs"
              value="24"
              change="+4"
              positive
              description="this month"
              icon={HeartHandshake}
              iconClass="bg-purple-50 text-purple-600"
            />

            <StatCard
              title="Lives Impacted"
              value="8,732"
              change="+312"
              positive
              description="this month"
              icon={Trophy}
              iconClass="bg-amber-50 text-amber-600"
            />
          </section>

          {/* =================================================
              MAP + ACTIVITY
          ================================================= */}

          <section className="grid gap-5 xl:grid-cols-[1.65fr_0.75fr]">
            {/* MAP */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_3px_20px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                  <h2 className="text-[15px] font-bold text-slate-900">
                    Members Across Nigeria
                  </h2>

                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5 text-[9px] text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      High Members
                    </span>

                    <span className="flex items-center gap-1.5 text-[9px] text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      Medium Members
                    </span>

                    <span className="flex items-center gap-1.5 text-[9px] text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                      Low Members
                    </span>
                  </div>
                </div>

                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <NigeriaMap />

              {/* Map metrics */}
              <div className="grid grid-cols-2 border-t border-slate-100 sm:grid-cols-4">
                <div className="border-b border-slate-100 p-4 sm:border-b-0">
                  <p className="text-[9px] text-slate-400">
                    Total Members on Map
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    1,248
                  </p>
                </div>

                <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-l">
                  <p className="text-[9px] text-slate-400">
                    Active Programs
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    124
                  </p>
                </div>

                <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-l">
                  <p className="text-[9px] text-slate-400">
                    Support Centers
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    32
                  </p>
                </div>

                <div className="p-4 sm:border-l">
                  <p className="text-[9px] text-slate-400">
                    Open Cases
                  </p>

                  <p className="mt-1 text-xl font-bold text-red-500">
                    142
                  </p>
                </div>
              </div>
            </div>

            {/* ACTIVITY */}
            <ActivityFeed />
          </section>

          {/* =================================================
              OPERATIONS
          ================================================= */}

          <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            <SupportCases />
            <SupportRooms />
            <UpcomingEvents />
          </section>

          {/* =================================================
              MEMBERS / DONATIONS / PROGRAMS
          ================================================= */}

          <section className="grid gap-5 lg:grid-cols-3">
            <RecentMembers />
            <RecentDonations />
            <ProgramsCard />
          </section>

          {/* =================================================
              IMPACT + ACHIEVEMENTS
          ================================================= */}

          <section className="grid gap-5 xl:grid-cols-[1.6fr_0.8fr]">
            <MonthlyImpact />
            <Achievements />
          </section>

          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="border-t border-slate-200 py-7 text-center">
            <p className="text-[10px] italic text-slate-400">
              ❤️ "Honoring their service. Empowering their future."
              — Renewed Hope Veterans (RHV)
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}