import React from "react";

import {
  UserPlus,
  FolderKanban,
  WalletCards,
  BriefcaseBusiness,
  HeartHandshake,
  MapPin,
  Clock3,
} from "lucide-react";

import {
  recentActivity,
} from "../../data/rhvDashboardData";


const icons = {
  member: UserPlus,
  case: FolderKanban,
  donation: WalletCards,
  program: BriefcaseBusiness,
  support: HeartHandshake,
};


export default function LiveActivity() {

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,.04)]">

      <div className="mb-5 flex items-start justify-between">

        <div>
          <div className="flex items-center gap-2">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <h2 className="text-sm font-bold text-slate-900">
              What's Happening
            </h2>

          </div>

          <p className="mt-1 text-[10px] text-slate-400">
            Live RHV organization activity
          </p>
        </div>


        <button className="text-[9px] font-semibold text-emerald-600">
          View all
        </button>

      </div>


      <div className="relative">

        {/* timeline */}
        <div className="absolute bottom-4 left-[18px] top-4 w-px bg-slate-100" />


        <div className="space-y-5">

          {recentActivity.map(
            (activity) => {

              const Icon =
                icons[activity.type] ||
                ActivityIcon;


              return (
                <div
                  key={activity.id}
                  className="group relative flex gap-3"
                >

                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-white bg-emerald-50 text-emerald-600 shadow-sm transition group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">

                    <Icon size={14} />

                  </div>


                  <div className="min-w-0 flex-1">

                    <p className="text-[10px] font-bold text-slate-800">
                      {activity.title}
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-400">
                      {activity.description}
                    </p>


                    <div className="mt-2 flex items-center gap-3">

                      <span className="flex items-center gap-1 text-[8px] text-slate-400">

                        <MapPin size={10} />

                        {activity.location}

                      </span>

                      <span className="flex items-center gap-1 text-[8px] text-slate-400">

                        <Clock3 size={10} />

                        {activity.time}

                      </span>

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}


function ActivityIcon() {
  return (
    <Activity size={14} />
  );
}