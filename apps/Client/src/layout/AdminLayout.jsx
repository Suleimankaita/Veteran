import React, {
  useState,
} from "react";

import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  FolderKanban,
  HeartHandshake,
  CalendarDays,
  WalletCards,
  Image,
  FileText,
  BarChart3,
  ShieldCheck,
  Settings,
  UserCog,
  MessageSquare,
  Megaphone,
  Map,
  LogOut,
} from "lucide-react";


const menu = [
  {
    section: "MAIN",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/admin",
      },

      {
        name: "Members",
        icon: Users,
        path: "/admin/members",
      },

      {
        name: "Support Cases",
        icon: FolderKanban,
        path: "/admin/support",
      },

      {
        name: "Programs",
        icon: HeartHandshake,
        path: "/admin/programs",
      },

      {
        name: "Events",
        icon: CalendarDays,
        path: "/admin/events",
      },
    ],
  },

  {
    section: "ORGANIZATION",
    items: [
      {
        name: "Community Map",
        icon: Map,
        path: "/admin/map",
      },

      {
        name: "Donations",
        icon: WalletCards,
        path: "/admin/donations",
      },

      {
        name: "Gallery",
        icon: Image,
        path: "/admin/gallery",
      },

      {
        name: "Resources",
        icon: FileText,
        path: "/admin/resources",
      },

      {
        name: "Reports",
        icon: BarChart3,
        path: "/admin/reports",
      },
    ],
  },

  {
    section: "COMMUNICATION",
    items: [
      {
        name: "Messages",
        icon: MessageSquare,
        path: "/admin/messages",
      },

      {
        name: "Announcements",
        icon: Megaphone,
        path: "/admin/announcements",
      },
    ],
  },

  {
    section: "GOVERNANCE",
    items: [
      {
        name: "Staff",
        icon: UserCog,
        path: "/admin/staff",
      },

      {
        name: "Audit Logs",
        icon: ShieldCheck,
        path: "/admin/audit",
      },

      {
        name: "Settings",
        icon: Settings,
        path: "/admin/settings",
      },
    ],
  },
];


export default function AdminLayout({
  children,
}) {

  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);


  return (
    <div className="min-h-screen bg-[#f7faf8]">

      {/* MOBILE OVERLAY */}

      {mobileOpen && (
        <button
          onClick={() =>
            setMobileOpen(false)
          }
          className="fixed inset-0 z-[998] bg-slate-950/30 backdrop-blur-sm lg:hidden"
        />
      )}


      {/* SIDEBAR */}

      <aside
        className={`fixed left-0 top-0 z-[999] flex h-screen w-[245px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* BRAND */}

        <div className="flex h-[74px] items-center border-b border-slate-100 px-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-black text-emerald-700">
              RHV
            </div>

            <div>

              <p className="text-[12px] font-black">
                RENEWED HOPE
              </p>

              <p className="text-[8px] font-bold uppercase tracking-[.18em] text-emerald-600">
                Veterans
              </p>

            </div>

          </div>


          <button
            onClick={() =>
              setMobileOpen(false)
            }
            className="ml-auto lg:hidden"
          >
            <X size={18} />
          </button>

        </div>


        {/* NAVIGATION */}

        <nav className="flex-1 overflow-y-auto px-3 py-5">

          {menu.map(
            (section) => (
              <div
                key={section.section}
                className="mb-6"
              >

                <p className="mb-2 px-3 text-[8px] font-bold tracking-[.18em] text-slate-400">
                  {section.section}
                </p>


                <div className="space-y-1">

                  {section.items.map(
                    (item) => {

                      const Icon =
                        item.icon;

                      const active =
                        window.location.pathname ===
                        item.path;


                      return (
                        <a
                          href={item.path}
                          key={item.path}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[10px] font-semibold transition ${
                            active
                              ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/10"
                              : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >

                          <Icon size={15} />

                          {item.name}

                        </a>
                      );

                    }
                  )}

                </div>

              </div>
            )
          )}

        </nav>


        {/* BOTTOM */}

        <div className="border-t border-slate-100 p-3">

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[10px] font-semibold text-slate-500 hover:bg-red-50 hover:text-red-500">

            <LogOut size={15} />

            Sign out

          </button>

        </div>

      </aside>


      {/* CONTENT */}

      <div className="lg:pl-[245px]">

        <button
          onClick={() =>
            setMobileOpen(true)
          }
          className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-lg lg:hidden"
        >
          <Menu size={18} />
        </button>

        {children}

      </div>

    </div>
  );
}