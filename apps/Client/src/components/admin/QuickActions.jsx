import React from "react";

import {
  UserPlus,
  FolderPlus,
  CalendarPlus,
  Megaphone,
  ImagePlus,
  FilePlus,
  WalletCards,
  Settings,
} from "lucide-react";


const actions = [
  {
    label: "Add Member",
    icon: UserPlus,
  },

  {
    label: "Create Support Case",
    icon: FolderPlus,
  },

  {
    label: "Create Program",
    icon: FolderPlus,
  },

  {
    label: "Create Event",
    icon: CalendarPlus,
  },

  {
    label: "Announcement",
    icon: Megaphone,
  },

  {
    label: "Upload Gallery",
    icon: ImagePlus,
  },

  {
    label: "Add Resource",
    icon: FilePlus,
  },

  {
    label: "Record Donation",
    icon: WalletCards,
  },

  {
    label: "System Settings",
    icon: Settings,
  },
];


export default function QuickActions() {

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,.04)]">

      <div className="mb-5">
        <h2 className="text-sm font-bold">
          Control Center
        </h2>

        <p className="mt-1 text-[10px] text-slate-400">
          Quickly manage RHV operations
        </p>
      </div>


      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">

        {actions.map(
          (action) => {

            const Icon =
              action.icon;

            return (
              <button
                key={action.label}
                className="group rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50"
              >

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm transition group-hover:bg-emerald-600 group-hover:text-white">

                  <Icon size={14} />

                </div>

                <p className="mt-3 text-[9px] font-bold text-slate-700">
                  {action.label}
                </p>

              </button>
            );
          }
        )}

      </div>

    </div>
  );
}