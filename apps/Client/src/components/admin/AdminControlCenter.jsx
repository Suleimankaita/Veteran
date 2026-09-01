import React from "react";

import {
  Users,
  FolderKanban,
  HeartHandshake,
  Trophy,
  Plus,
  BarChart3,
  CalendarDays,
  Bell,
  ShieldCheck,
  Activity,
} from "lucide-react";

import StatCard from "./StatCard";
import NigeriaMap from "./NigeriaMap";
import LiveActivity from "./LiveActivity";
import QuickActions from "./QuickActions";
import ImpactChart from "./ImpactChart";

import {
  dashboardStats,
} from "../../data/rhvDashboardData";


const iconMap = {
  members: {
    icon: Users,
    className:
      "bg-emerald-50 text-emerald-600",
  },

  cases: {
    icon: FolderKanban,
    className:
      "bg-blue-50 text-blue-600",
  },

  programs: {
    icon: HeartHandshake,
    className:
      "bg-purple-50 text-purple-600",
  },

  impact: {
    icon: Trophy,
    className:
      "bg-amber-50 text-amber-600",
  },
};


export default function AdminControlCenter() {

  return (
    <div className="min-h-screen bg-[#f7faf8]">

      {/* ===================================================
          TOP HEADER
      =================================================== */}

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">

        <div className="flex h-[72px] items-center justify-between px-5 lg:px-8">

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-600">
              RHV Administration
            </p>

            <h1 className="mt-1 text-lg font-black tracking-tight text-slate-900">
              Control Center
            </h1>

          </div>


          <div className="flex items-center gap-2">

            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50">

              <Bell size={17} />

              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />

            </button>


            <button className="hidden h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 sm:flex">

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-[8px] font-bold text-white">
                AD
              </div>

              <div className="text-left">

                <p className="text-[9px] font-bold">
                  Administrator
                </p>

                <p className="text-[8px] text-slate-400">
                  Super Admin
                </p>

              </div>

            </button>

          </div>

        </div>

      </header>


      {/* ===================================================
          CONTENT
      =================================================== */}

      <main className="mx-auto max-w-[1600px] space-y-6 p-5 lg:p-8">


        {/* =================================================
            INTRO
        ================================================= */}

        <section className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-2xl font-black tracking-tight text-slate-900">
                Good morning, Admin
              </h2>

              <span className="text-xl">
                👋
              </span>

            </div>

            <p className="mt-1 text-xs text-slate-400">
              Here's what's happening across Renewed Hope Veterans.
            </p>

          </div>


          <div className="flex gap-2">

            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[10px] font-bold text-slate-600 hover:border-emerald-200">

              <BarChart3 size={14} />

              Reports

            </button>


            <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-[10px] font-bold text-white shadow-lg shadow-emerald-600/10 hover:bg-emerald-700">

              <Plus size={14} />

              Quick Action

            </button>

          </div>

        </section>


        {/* =================================================
            KPI
        ================================================= */}

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {dashboardStats.map(
            (stat) => {

              const meta =
                iconMap[stat.id];

              return (
                <StatCard
                  key={stat.id}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  changeText={stat.changeText}
                  trend={stat.trend}
                  icon={meta.icon}
                  iconClass={
                    meta.className
                  }
                />
              );
            }
          )}

        </section>


        {/* =================================================
            MAP + LIVE ACTIVITY
        ================================================= */}

        <section className="grid gap-5 xl:grid-cols-[1.65fr_.75fr]">

          <div>

            <div className="mb-3 flex items-center justify-between">

              <div>

                <h2 className="text-sm font-bold">
                  Community Network
                </h2>

                <p className="mt-1 text-[10px] text-slate-400">
                  RHV activity across Nigeria
                </p>

              </div>


              <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />

                <span className="text-[9px] font-bold text-emerald-600">
                  LIVE
                </span>

              </div>

            </div>


            <NigeriaMap />

          </div>


          <LiveActivity />

        </section>


        {/* =================================================
            CONTROL CENTER
        ================================================= */}

        <section className="grid gap-5 xl:grid-cols-[1fr_1.5fr]">

          <QuickActions />

          <ImpactChart />

        </section>


        {/* =================================================
            OPERATION STATUS
        ================================================= */}

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">


          <OperationCard
            icon={Users}
            title="Member Management"
            value="1,248"
            status="Operational"
          />


          <OperationCard
            icon={FolderKanban}
            title="Support Operations"
            value="142 active"
            status="Operational"
          />


          <OperationCard
            icon={CalendarDays}
            title="Programs & Events"
            value="24 active"
            status="Operational"
          />


          <OperationCard
            icon={ShieldCheck}
            title="System Security"
            value="Protected"
            status="Healthy"
          />

        </section>


        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="border-t border-slate-200 py-7 text-center">

          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">

            <Activity size={12} />

            RHV Control Center

            <span>•</span>

            System operational

          </div>

          <p className="mt-2 text-[10px] italic text-slate-400">
            "Honoring their service. Empowering their future."
          </p>

        </footer>

      </main>

    </div>
  );
}


function OperationCard({
  icon: Icon,
  title,
  value,
  status,
}) {

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,.04)] transition hover:-translate-y-1">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition group-hover:bg-emerald-50 group-hover:text-emerald-600">

          <Icon size={17} />

        </div>


        <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          {status}

        </span>

      </div>


      <p className="mt-5 text-[10px] text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-lg font-black">
        {value}
      </p>

    </div>
  );
}