// import React, { useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   Activity,
//   AlertCircle,
//   Bell,
//   BookOpen,
//   Building2,
//   CalendarDays,
//   Check,
//   CheckCircle2,
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   CircleDollarSign,
//   Clock3,
//   Command,
//   Download,
//   Edit3,
//   Eye,
//   FileBarChart,
//   FileText,
//   Filter,
//   Flag,
//   Globe2,
//   HandHeart,
//   Home,
//   KeyRound,
//   LayoutDashboard,
//   LockKeyhole,
//   LogOut,
//   Mail,
//   MapPin,
//   Menu,
//   MessageSquare,
//   MoreHorizontal,
//   Plus,
//   RefreshCw,
//   Search,
//   Settings,
//   Shield,
//   ShieldAlert,
//   ShieldCheck,
//   SlidersHorizontal,
//   Trash2,
//   TrendingDown,
//   TrendingUp,
//   User,
//   UserCheck,
//   UserCog,
//   UserMinus,
//   UserPlus,
//   Users,
//   WalletCards,
//   X,
//   XCircle,
// } from "lucide-react";

// /* =========================================================
//    MOCK DATA
//    Replace these with your API responses later.
// ========================================================= */

// const INITIAL_MEMBERS = [
//   {
//     id: "RHV-000245",
//     name: "Ibrahim Musa",
//     email: "ibrahim@example.com",
//     phone: "+234 803 112 9083",
//     state: "Kano",
//     category: "Full Member",
//     status: "Active",
//     joined: "2026-08-20",
//     role: "Member",
//   },
//   {
//     id: "RHV-000246",
//     name: "Amina Bello",
//     email: "amina@example.com",
//     phone: "+234 806 553 1902",
//     state: "Kaduna",
//     category: "Volunteer",
//     status: "Active",
//     joined: "2026-08-21",
//     role: "Volunteer",
//   },
//   {
//     id: "RHV-000247",
//     name: "Chinedu Okafor",
//     email: "chinedu@example.com",
//     phone: "+234 812 341 5294",
//     state: "Anambra",
//     category: "Associate Member",
//     status: "Suspended",
//     joined: "2026-08-22",
//     role: "Member",
//   },
//   {
//     id: "RHV-000248",
//     name: "Fatima Yusuf",
//     email: "fatima@example.com",
//     phone: "+234 905 222 4108",
//     state: "Katsina",
//     category: "Youth Member",
//     status: "Active",
//     joined: "2026-08-23",
//     role: "Member",
//   },
//   {
//     id: "RHV-000249",
//     name: "Samuel Adeyemi",
//     email: "samuel@example.com",
//     phone: "+234 810 425 7782",
//     state: "Lagos",
//     category: "Full Member",
//     status: "Active",
//     joined: "2026-08-24",
//     role: "Coordinator",
//   },
// ];

// const INITIAL_APPLICATIONS = [
//   {
//     id: "APP-1032",
//     name: "Zainab Abdullahi",
//     state: "Katsina",
//     category: "Full Member",
//     email: "zainab@example.com",
//     date: "2026-09-04",
//     status: "Pending",
//   },
//   {
//     id: "APP-1033",
//     name: "David Eze",
//     state: "Enugu",
//     category: "Volunteer",
//     email: "david@example.com",
//     date: "2026-09-04",
//     status: "Pending",
//   },
//   {
//     id: "APP-1034",
//     name: "Abubakar Sani",
//     state: "Kano",
//     category: "Associate Member",
//     email: "abubakar@example.com",
//     date: "2026-09-03",
//     status: "Under Review",
//   },
//   {
//     id: "APP-1035",
//     name: "Grace Etim",
//     state: "Cross River",
//     category: "Youth Member",
//     email: "grace@example.com",
//     date: "2026-09-03",
//     status: "Pending",
//   },
// ];

// const INITIAL_CHAPTERS = [
//   {
//     id: 1,
//     state: "Katsina",
//     coordinator: "Abdullahi Musa",
//     members: 1240,
//     volunteers: 318,
//     projects: 18,
//     status: "Active",
//   },
//   {
//     id: 2,
//     state: "Kano",
//     coordinator: "Ibrahim Lawal",
//     members: 2120,
//     volunteers: 540,
//     projects: 26,
//     status: "Active",
//   },
//   {
//     id: 3,
//     state: "Kaduna",
//     coordinator: "Maryam Bello",
//     members: 1760,
//     volunteers: 402,
//     projects: 21,
//     status: "Active",
//   },
//   {
//     id: 4,
//     state: "Lagos",
//     coordinator: "Samuel Adeyemi",
//     members: 2890,
//     volunteers: 620,
//     projects: 31,
//     status: "Active",
//   },
//   {
//     id: 5,
//     state: "Borno",
//     coordinator: "Usman Ali",
//     members: 810,
//     volunteers: 188,
//     projects: 10,
//     status: "Needs Attention",
//   },
// ];

// const INITIAL_NOTIFICATIONS = [
//   {
//     id: 1,
//     title: "New membership application",
//     text: "Zainab Abdullahi submitted an application.",
//     time: "4 min ago",
//     read: false,
//   },
//   {
//     id: 2,
//     title: "Chapter report received",
//     text: "Kano State Chapter submitted its monthly report.",
//     time: "24 min ago",
//     read: false,
//   },
//   {
//     id: 3,
//     title: "System activity",
//     text: "A coordinator role was updated.",
//     time: "1 hr ago",
//     read: true,
//   },
// ];

// const INITIAL_AUDIT_LOGS = [
//   {
//     id: 1,
//     admin: "Super Admin",
//     action: "Approved membership application",
//     target: "APP-1029",
//     time: "2026-09-04 16:44",
//   },
//   {
//     id: 2,
//     admin: "Super Admin",
//     action: "Updated user role",
//     target: "RHV-000221",
//     time: "2026-09-04 15:15",
//   },
//   {
//     id: 3,
//     admin: "State Admin — Kano",
//     action: "Updated chapter report",
//     target: "Kano Chapter",
//     time: "2026-09-04 14:20",
//   },
// ];

// const NAVIGATION = [
//   {
//     group: "MAIN",
//     items: [
//       {
//         id: "overview",
//         label: "Overview",
//         icon: LayoutDashboard,
//       },
//       {
//         id: "members",
//         label: "Members",
//         icon: Users,
//       },
//       {
//         id: "applications",
//         label: "Applications",
//         icon: FileText,
//       },
//       {
//         id: "chapters",
//         label: "State Chapters",
//         icon: MapPin,
//       },
//     ],
//   },
//   {
//     group: "OPERATIONS",
//     items: [
//       {
//         id: "projects",
//         label: "Projects",
//         icon: HandHeart,
//       },
//       {
//         id: "events",
//         label: "Events",
//         icon: CalendarDays,
//       },
//       {
//         id: "finance",
//         label: "Finance",
//         icon: WalletCards,
//       },
//       {
//         id: "reports",
//         label: "Reports & Analytics",
//         icon: FileBarChart,
//       },
//     ],
//   },
//   {
//     group: "ADMINISTRATION",
//     items: [
//       {
//         id: "roles",
//         label: "Users & Roles",
//         icon: UserCog,
//       },
//       {
//         id: "messages",
//         label: "Messages",
//         icon: MessageSquare,
//       },
//       {
//         id: "notifications",
//         label: "Notifications",
//         icon: Bell,
//       },
//       {
//         id: "audit",
//         label: "Audit Logs",
//         icon: ShieldCheck,
//       },
//       {
//         id: "settings",
//         label: "System Settings",
//         icon: Settings,
//       },
//     ],
//   },
// ];

// /* =========================================================
//    MAIN
// ========================================================= */

// export default function RHVSuperAdmin() {
//   const [activePage, setActivePage] = useState("overview");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const [members, setMembers] = useState(INITIAL_MEMBERS);
//   const [applications, setApplications] =
//     useState(INITIAL_APPLICATIONS);
//   const [chapters, setChapters] = useState(INITIAL_CHAPTERS);
//   const [notifications, setNotifications] =
//     useState(INITIAL_NOTIFICATIONS);
//   const [auditLogs, setAuditLogs] = useState(INITIAL_AUDIT_LOGS);

//   const [search, setSearch] = useState("");
//   const [memberStatus, setMemberStatus] = useState("All");
//   const [applicationStatus, setApplicationStatus] = useState("All");

//   const [notificationOpen, setNotificationOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   const [modal, setModal] = useState(null);
//   const [toast, setToast] = useState(null);

//   const [settings, setSettings] = useState({
//     maintenanceMode: false,
//     registrationOpen: true,
//     emailNotifications: true,
//     smsNotifications: false,
//     requireAdminApproval: true,
//     allowProfileEditing: true,
//   });

//   const [projects, setProjects] = useState([
//     {
//       id: "PRJ-001",
//       title: "Veterans Welfare Outreach",
//       state: "Katsina",
//       progress: 72,
//       status: "Active",
//       budget: 2500000,
//     },
//     {
//       id: "PRJ-002",
//       title: "Youth Skills Development",
//       state: "Kaduna",
//       progress: 45,
//       status: "Active",
//       budget: 4200000,
//     },
//     {
//       id: "PRJ-003",
//       title: "Community Health Initiative",
//       state: "Lagos",
//       progress: 100,
//       status: "Completed",
//       budget: 6100000,
//     },
//   ]);

//   /* =======================================================
//      COMPUTED DATA
//   ======================================================= */

//   const pendingCount = applications.filter(
//     (application) => application.status === "Pending"
//   ).length;

//   const activeMembers = members.filter(
//     (member) => member.status === "Active"
//   ).length;

//   const unreadNotifications = notifications.filter(
//     (item) => !item.read
//   ).length;

//   const totalProjectBudget = projects.reduce(
//     (sum, project) => sum + project.budget,
//     0
//   );

//   const filteredMembers = useMemo(() => {
//     return members.filter((member) => {
//       const matchesSearch =
//         member.name.toLowerCase().includes(search.toLowerCase()) ||
//         member.id.toLowerCase().includes(search.toLowerCase()) ||
//         member.email.toLowerCase().includes(search.toLowerCase()) ||
//         member.state.toLowerCase().includes(search.toLowerCase());

//       const matchesStatus =
//         memberStatus === "All" ||
//         member.status === memberStatus;

//       return matchesSearch && matchesStatus;
//     });
//   }, [members, search, memberStatus]);

//   const filteredApplications = useMemo(() => {
//     return applications.filter((application) => {
//       const matchesSearch =
//         application.name
//           .toLowerCase()
//           .includes(search.toLowerCase()) ||
//         application.id
//           .toLowerCase()
//           .includes(search.toLowerCase()) ||
//         application.state
//           .toLowerCase()
//           .includes(search.toLowerCase());

//       const matchesStatus =
//         applicationStatus === "All" ||
//         application.status === applicationStatus;

//       return matchesSearch && matchesStatus;
//     });
//   }, [applications, search, applicationStatus]);

//   /* =======================================================
//      HELPERS
//   ======================================================= */

//   const notify = (message, type = "success") => {
//     setToast({
//       id: Date.now(),
//       message,
//       type,
//     });

//     window.setTimeout(() => {
//       setToast(null);
//     }, 2800);
//   };

//   const addAuditLog = (action, target) => {
//     setAuditLogs((previous) => [
//       {
//         id: Date.now(),
//         admin: "Super Admin",
//         action,
//         target,
//         time: new Date().toLocaleString(),
//       },
//       ...previous,
//     ]);
//   };

//   const changePage = (page) => {
//     setActivePage(page);
//     setSidebarOpen(false);
//     setSearch("");
//   };

//   /* =======================================================
//      APPLICATION ACTIONS
//   ======================================================= */

//   const approveApplication = (application) => {
//     setApplications((previous) =>
//       previous.map((item) =>
//         item.id === application.id
//           ? {
//               ...item,
//               status: "Approved",
//             }
//           : item
//       )
//     );

//     const memberExists = members.some(
//       (member) => member.email === application.email
//     );

//     if (!memberExists) {
//       setMembers((previous) => [
//         {
//           id: `RHV-${String(previous.length + 250).padStart(6, "0")}`,
//           name: application.name,
//           email: application.email,
//           phone: "Not provided",
//           state: application.state,
//           category: application.category,
//           status: "Active",
//           joined: new Date().toISOString().slice(0, 10),
//           role: "Member",
//         },
//         ...previous,
//       ]);
//     }

//     addAuditLog(
//       "Approved membership application",
//       application.id
//     );

//     notify(`${application.name} has been approved.`);
//     setModal(null);
//   };

//   const rejectApplication = (application) => {
//     setApplications((previous) =>
//       previous.map((item) =>
//         item.id === application.id
//           ? {
//               ...item,
//               status: "Rejected",
//             }
//           : item
//       )
//     );

//     addAuditLog(
//       "Rejected membership application",
//       application.id
//     );

//     notify(`${application.name}'s application was rejected.`, "error");
//     setModal(null);
//   };

//   /* =======================================================
//      MEMBER ACTIONS
//   ======================================================= */

//   const toggleMemberStatus = (member) => {
//     const nextStatus =
//       member.status === "Active"
//         ? "Suspended"
//         : "Active";

//     setMembers((previous) =>
//       previous.map((item) =>
//         item.id === member.id
//           ? {
//               ...item,
//               status: nextStatus,
//             }
//           : item
//       )
//     );

//     addAuditLog(
//       `${nextStatus === "Active" ? "Activated" : "Suspended"} member`,
//       member.id
//     );

//     notify(
//       `${member.name} is now ${nextStatus}.`,
//       nextStatus === "Active" ? "success" : "error"
//     );

//     setModal(null);
//   };

//   const deleteMember = (member) => {
//     setMembers((previous) =>
//       previous.filter((item) => item.id !== member.id)
//     );

//     addAuditLog("Deleted member", member.id);
//     notify(`${member.name} was removed.`, "error");
//     setModal(null);
//   };

//   const changeMemberRole = (member, role) => {
//     setMembers((previous) =>
//       previous.map((item) =>
//         item.id === member.id
//           ? {
//               ...item,
//               role,
//             }
//           : item
//       )
//     );

//     addAuditLog(
//       `Changed member role to ${role}`,
//       member.id
//     );

//     notify(`${member.name}'s role is now ${role}.`);
//     setModal(null);
//   };

//   /* =======================================================
//      NOTIFICATIONS
//   ======================================================= */

//   const markAllNotificationsRead = () => {
//     setNotifications((previous) =>
//       previous.map((item) => ({
//         ...item,
//         read: true,
//       }))
//     );

//     notify("All notifications marked as read.");
//   };

//   const markNotificationRead = (id) => {
//     setNotifications((previous) =>
//       previous.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               read: true,
//             }
//           : item
//       )
//     );
//   };

//   /* =======================================================
//      PROJECTS
//   ======================================================= */

//   const addProject = (project) => {
//     setProjects((previous) => [
//       {
//         id: `PRJ-${String(previous.length + 1).padStart(3, "0")}`,
//         title: project.title,
//         state: project.state,
//         progress: 0,
//         status: "Active",
//         budget: Number(project.budget) || 0,
//       },
//       ...previous,
//     ]);

//     addAuditLog("Created project", project.title);
//     notify("Project created successfully.");
//     setModal(null);
//   };

//   /* =======================================================
//      SETTINGS
//   ======================================================= */

//   const toggleSetting = (key) => {
//     setSettings((previous) => ({
//       ...previous,
//       [key]: !previous[key],
//     }));

//     addAuditLog("Updated system setting", key);
//   };

//   /* =======================================================
//      EXPORT
//   ======================================================= */

//   const exportMembers = () => {
//     const headers = [
//       "ID",
//       "Name",
//       "Email",
//       "Phone",
//       "State",
//       "Category",
//       "Status",
//       "Role",
//       "Joined",
//     ];

//     const rows = members.map((member) => [
//       member.id,
//       member.name,
//       member.email,
//       member.phone,
//       member.state,
//       member.category,
//       member.status,
//       member.role,
//       member.joined,
//     ]);

//     const csv = [
//       headers.join(","),
//       ...rows.map((row) =>
//         row
//           .map((value) => `"${String(value).replaceAll('"', '""')}"`)
//           .join(",")
//       ),
//     ].join("\n");

//     const blob = new Blob([csv], {
//       type: "text/csv;charset=utf-8;",
//     });

//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");

//     link.href = url;
//     link.download = "RHV-members.csv";

//     document.body.appendChild(link);
//     link.click();
//     link.remove();

//     URL.revokeObjectURL(url);

//     notify("Member report exported.");
//   };

//   /* =======================================================
//      OVERVIEW
//   ======================================================= */

//   const OverviewPage = () => (
//     <div className="space-y-7">
//       <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">
//         <div>
//           <p className="text-sm font-semibold text-gray-400">
//             Friday, 4 September 2026
//           </p>

//           <h1 className="text-3xl font-black text-gray-900 mt-1">
//             SuperAdmin Control Center
//           </h1>

//           <p className="text-sm text-gray-500 mt-2">
//             Monitor and manage the entire Renewed Hope Veterans platform.
//           </p>
//         </div>

//         <div className="flex flex-wrap gap-3">
//           <button
//             type="button"
//             onClick={() =>
//               setModal({
//                 type: "newProject",
//               })
//             }
//             className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 font-bold text-sm flex items-center gap-2 hover:border-[#054226]"
//           >
//             <Plus size={17} />
//             New Project
//           </button>

//           <button
//             type="button"
//             onClick={() => changePage("applications")}
//             className="px-4 py-2.5 rounded-xl bg-[#054226] text-white font-bold text-sm flex items-center gap-2 hover:bg-[#032e1a] shadow-lg"
//           >
//             <UserCheck size={17} />
//             Review Applications

//             {pendingCount > 0 && (
//               <span className="bg-[#c99e38] rounded-full px-2 py-0.5 text-[10px]">
//                 {pendingCount}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
//         <StatCard
//           icon={Users}
//           label="Total Members"
//           value={members.length.toLocaleString()}
//           change="+12.4%"
//           positive
//           subtitle={`${activeMembers} active`}
//         />

//         <StatCard
//           icon={FileText}
//           label="Pending Applications"
//           value={pendingCount}
//           change="+8.2%"
//           positive
//           subtitle="Requires review"
//         />

//         <StatCard
//           icon={MapPin}
//           label="State Chapters"
//           value="36 + FCT"
//           change="National"
//           positive
//           subtitle={`${chapters.length} reporting today`}
//         />

//         <StatCard
//           icon={HandHeart}
//           label="Active Projects"
//           value={projects.filter((p) => p.status === "Active").length}
//           change="₦"
//           positive
//           subtitle={`₦${(totalProjectBudget / 1000000).toFixed(1)}m budget`}
//         />
//       </div>

//       <div className="grid xl:grid-cols-[1.5fr_1fr] gap-5">
//         <Panel>
//           <PanelHeader
//             title="Membership Growth"
//             subtitle="Registration activity over the last 7 months"
//             action={
//               <button className="text-xs font-bold text-[#054226]">
//                 View report
//               </button>
//             }
//           />

//           <div className="h-[290px] flex items-end gap-3 pt-7">
//             {[
//               {
//                 month: "Mar",
//                 value: 46,
//               },
//               {
//                 month: "Apr",
//                 value: 58,
//               },
//               {
//                 month: "May",
//                 value: 52,
//               },
//               {
//                 month: "Jun",
//                 value: 68,
//               },
//               {
//                 month: "Jul",
//                 value: 76,
//               },
//               {
//                 month: "Aug",
//                 value: 88,
//               },
//               {
//                 month: "Sep",
//                 value: 96,
//               },
//             ].map((item) => (
//               <div
//                 key={item.month}
//                 className="flex-1 h-full flex flex-col justify-end items-center"
//               >
//                 <div className="text-[10px] font-bold text-gray-400 mb-2">
//                   {item.value}%
//                 </div>

//                 <motion.div
//                   initial={{
//                     height: 0,
//                   }}
//                   animate={{
//                     height: `${item.value}%`,
//                   }}
//                   className="w-full max-w-12 rounded-t-xl bg-[#054226]"
//                 />

//                 <p className="text-[10px] text-gray-400 mt-3">
//                   {item.month}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </Panel>

//         <Panel>
//           <PanelHeader
//             title="Quick Actions"
//             subtitle="Frequently used administration tools"
//           />

//           <div className="grid grid-cols-2 gap-3">
//             <QuickAction
//               icon={UserPlus}
//               label="Add Member"
//               onClick={() =>
//                 notify(
//                   "Connect Add Member to the member creation API."
//                 )
//               }
//             />

//             <QuickAction
//               icon={UserCheck}
//               label="Applications"
//               onClick={() => changePage("applications")}
//             />

//             <QuickAction
//               icon={Building2}
//               label="Chapters"
//               onClick={() => changePage("chapters")}
//             />

//             <QuickAction
//               icon={FileBarChart}
//               label="Reports"
//               onClick={() => changePage("reports")}
//             />

//             <QuickAction
//               icon={UserCog}
//               label="Manage Roles"
//               onClick={() => changePage("roles")}
//             />

//             <QuickAction
//               icon={Settings}
//               label="Settings"
//               onClick={() => changePage("settings")}
//             />
//           </div>
//         </Panel>
//       </div>

//       <div className="grid xl:grid-cols-[1.45fr_0.8fr] gap-5">
//         <Panel>
//           <PanelHeader
//             title="Recent Applications"
//             subtitle="Latest membership applications"
//             action={
//               <button
//                 onClick={() => changePage("applications")}
//                 className="text-xs font-black text-[#054226]"
//               >
//                 View all →
//               </button>
//             }
//           />

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[650px]">
//               <thead>
//                 <tr className="text-left text-[10px] uppercase tracking-wider text-gray-400 border-b">
//                   <th className="py-3">Applicant</th>
//                   <th>State</th>
//                   <th>Category</th>
//                   <th>Status</th>
//                   <th className="text-right">
//                     Action
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {applications.slice(0, 4).map((application) => (
//                   <tr
//                     key={application.id}
//                     className="border-b last:border-0 text-sm"
//                   >
//                     <td className="py-4">
//                       <div className="font-bold">
//                         {application.name}
//                       </div>

//                       <div className="text-[10px] text-gray-400 mt-1">
//                         {application.id}
//                       </div>
//                     </td>

//                     <td className="text-gray-500">
//                       {application.state}
//                     </td>

//                     <td className="text-gray-500">
//                       {application.category}
//                     </td>

//                     <td>
//                       <StatusBadge status={application.status} />
//                     </td>

//                     <td className="text-right">
//                       <button
//                         onClick={() =>
//                           setModal({
//                             type: "application",
//                             data: application,
//                           })
//                         }
//                         className="w-8 h-8 rounded-lg border border-gray-200 inline-flex items-center justify-center hover:bg-gray-50"
//                       >
//                         <Eye size={15} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </Panel>

//         <Panel>
//           <PanelHeader
//             title="System Health"
//             subtitle="Current service status"
//           />

//           <div className="space-y-4">
//             <HealthRow
//               label="API Server"
//               status="Operational"
//             />

//             <HealthRow
//               label="Database"
//               status="Operational"
//             />

//             <HealthRow
//               label="File Storage"
//               status="Operational"
//             />

//             <HealthRow
//               label="Email Service"
//               status="Operational"
//             />

//             <HealthRow
//               label="SMS Gateway"
//               status={
//                 settings.smsNotifications
//                   ? "Operational"
//                   : "Disabled"
//               }
//             />
//           </div>

//           <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-100">
//             <div className="flex items-center gap-2 text-green-700 font-black text-sm">
//               <CheckCircle2 size={17} />
//               Platform operational
//             </div>

//             <p className="text-[11px] text-green-600 mt-1">
//               No critical system incidents detected.
//             </p>
//           </div>
//         </Panel>
//       </div>
//     </div>
//   );

//   /* =======================================================
//      MEMBERS
//   ======================================================= */

//   const MembersPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Member Management"
//         subtitle="Search, manage and control RHV member accounts."
//         action={
//           <div className="flex gap-2">
//             <button
//               onClick={exportMembers}
//               className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-bold flex items-center gap-2"
//             >
//               <Download size={16} />
//               Export
//             </button>

//             <button
//               onClick={() =>
//                 notify(
//                   "Connect this action to your member creation endpoint."
//                 )
//               }
//               className="px-4 py-2.5 rounded-xl bg-[#054226] text-white text-sm font-bold flex items-center gap-2"
//             >
//               <Plus size={16} />
//               Add Member
//             </button>
//           </div>
//         }
//       />

//       <Panel>
//         <div className="flex flex-col lg:flex-row gap-3 justify-between mb-5">
//           <SearchBox
//             value={search}
//             onChange={setSearch}
//             placeholder="Search members by name, ID, email or state..."
//           />

//           <div className="flex gap-2">
//             <SelectFilter
//               value={memberStatus}
//               onChange={setMemberStatus}
//               options={["All", "Active", "Suspended"]}
//             />

//             <button
//               onClick={() => {
//                 setSearch("");
//                 setMemberStatus("All");
//               }}
//               className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50"
//             >
//               <RefreshCw size={16} />
//             </button>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[900px]">
//             <thead>
//               <tr className="border-b text-left text-[10px] uppercase tracking-wider text-gray-400">
//                 <th className="pb-3">Member</th>
//                 <th>State</th>
//                 <th>Membership</th>
//                 <th>Role</th>
//                 <th>Status</th>
//                 <th>Joined</th>
//                 <th className="text-right">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredMembers.map((member) => (
//                 <tr
//                   key={member.id}
//                   className="border-b last:border-0"
//                 >
//                   <td className="py-4">
//                     <div className="flex items-center gap-3">
//                       <Avatar name={member.name} />

//                       <div>
//                         <p className="font-bold text-sm">
//                           {member.name}
//                         </p>

//                         <p className="text-[10px] text-gray-400">
//                           {member.id} · {member.email}
//                         </p>
//                       </div>
//                     </div>
//                   </td>

//                   <td className="text-sm text-gray-500">
//                     {member.state}
//                   </td>

//                   <td className="text-sm text-gray-500">
//                     {member.category}
//                   </td>

//                   <td>
//                     <span className="text-xs font-bold">
//                       {member.role}
//                     </span>
//                   </td>

//                   <td>
//                     <StatusBadge status={member.status} />
//                   </td>

//                   <td className="text-xs text-gray-500">
//                     {member.joined}
//                   </td>

//                   <td className="text-right">
//                     <button
//                       onClick={() =>
//                         setModal({
//                           type: "member",
//                           data: member,
//                         })
//                       }
//                       className="w-8 h-8 rounded-lg border border-gray-200 inline-flex items-center justify-center hover:bg-gray-50"
//                     >
//                       <MoreHorizontal size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {filteredMembers.length === 0 && (
//             <EmptyState
//               icon={Users}
//               title="No members found"
//               text="Try changing your search or filters."
//             />
//           )}
//         </div>
//       </Panel>
//     </div>
//   );

//   /* =======================================================
//      APPLICATIONS
//   ======================================================= */

//   const ApplicationsPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Membership Applications"
//         subtitle="Review, approve or reject incoming RHV membership applications."
//       />

//       <div className="grid sm:grid-cols-3 gap-4">
//         <MiniStat
//           label="Pending"
//           value={applications.filter((x) => x.status === "Pending").length}
//           icon={Clock3}
//         />

//         <MiniStat
//           label="Approved"
//           value={applications.filter((x) => x.status === "Approved").length}
//           icon={CheckCircle2}
//         />

//         <MiniStat
//           label="Rejected"
//           value={applications.filter((x) => x.status === "Rejected").length}
//           icon={XCircle}
//         />
//       </div>

//       <Panel>
//         <div className="flex flex-col lg:flex-row gap-3 justify-between mb-5">
//           <SearchBox
//             value={search}
//             onChange={setSearch}
//             placeholder="Search applications..."
//           />

//           <SelectFilter
//             value={applicationStatus}
//             onChange={setApplicationStatus}
//             options={[
//               "All",
//               "Pending",
//               "Under Review",
//               "Approved",
//               "Rejected",
//             ]}
//           />
//         </div>

//         <div className="space-y-3">
//           {filteredApplications.map((application) => (
//             <div
//               key={application.id}
//               className="border border-gray-100 rounded-xl p-4 flex flex-col lg:flex-row lg:items-center gap-4 justify-between hover:border-gray-200 transition"
//             >
//               <div className="flex gap-3">
//                 <Avatar name={application.name} />

//                 <div>
//                   <h3 className="font-black text-sm">
//                     {application.name}
//                   </h3>

//                   <p className="text-xs text-gray-400 mt-1">
//                     {application.id} · {application.email}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mt-2">
//                     <SmallBadge text={application.state} />
//                     <SmallBadge text={application.category} />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap items-center gap-2">
//                 <StatusBadge status={application.status} />

//                 <button
//                   onClick={() =>
//                     setModal({
//                       type: "application",
//                       data: application,
//                     })
//                   }
//                   className="px-3 py-2 rounded-lg border border-gray-200 text-xs font-bold flex items-center gap-2"
//                 >
//                   <Eye size={14} />
//                   Review
//                 </button>

//                 {application.status !== "Approved" && (
//                   <button
//                     onClick={() => approveApplication(application)}
//                     className="px-3 py-2 rounded-lg bg-[#054226] text-white text-xs font-bold flex items-center gap-2"
//                   >
//                     <Check size={14} />
//                     Approve
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Panel>
//     </div>
//   );

//   /* =======================================================
//      CHAPTERS
//   ======================================================= */

//   const ChaptersPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="State Chapters"
//         subtitle="Monitor RHV structures across Nigeria."
//         action={
//           <button
//             onClick={() =>
//               notify(
//                 "Connect this button to your Create Chapter backend endpoint."
//               )
//             }
//             className="px-4 py-2.5 rounded-xl bg-[#054226] text-white text-sm font-bold flex items-center gap-2"
//           >
//             <Plus size={16} />
//             Add Chapter
//           </button>
//         }
//       />

//       <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
//         {chapters.map((chapter) => (
//           <motion.div
//             whileHover={{
//               y: -3,
//             }}
//             key={chapter.id}
//             className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
//           >
//             <div className="flex justify-between items-start gap-3">
//               <div className="w-11 h-11 rounded-xl bg-[#054226]/10 flex items-center justify-center text-[#054226]">
//                 <MapPin size={20} />
//               </div>

//               <StatusBadge status={chapter.status} />
//             </div>

//             <h3 className="font-black text-lg mt-4">
//               {chapter.state} State
//             </h3>

//             <p className="text-xs text-gray-500 mt-1">
//               Coordinator: {chapter.coordinator}
//             </p>

//             <div className="grid grid-cols-3 gap-2 mt-5">
//               <ChapterStat
//                 label="Members"
//                 value={chapter.members}
//               />

//               <ChapterStat
//                 label="Volunteers"
//                 value={chapter.volunteers}
//               />

//               <ChapterStat
//                 label="Projects"
//                 value={chapter.projects}
//               />
//             </div>

//             <button
//               onClick={() =>
//                 notify(`${chapter.state} chapter opened.`)
//               }
//               className="w-full mt-5 py-2.5 rounded-xl border border-gray-200 text-xs font-black hover:border-[#054226] hover:text-[#054226]"
//             >
//               Manage Chapter
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );

//   /* =======================================================
//      PROJECTS
//   ======================================================= */

//   const ProjectsPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Projects"
//         subtitle="Manage RHV initiatives, programs and project delivery."
//         action={
//           <button
//             onClick={() =>
//               setModal({
//                 type: "newProject",
//               })
//             }
//             className="px-4 py-2.5 rounded-xl bg-[#054226] text-white text-sm font-bold flex items-center gap-2"
//           >
//             <Plus size={16} />
//             New Project
//           </button>
//         }
//       />

//       <div className="grid lg:grid-cols-2 gap-4">
//         {projects.map((project) => (
//           <Panel key={project.id}>
//             <div className="flex justify-between gap-4">
//               <div>
//                 <p className="text-[10px] font-bold text-gray-400">
//                   {project.id}
//                 </p>

//                 <h3 className="font-black text-lg mt-1">
//                   {project.title}
//                 </h3>

//                 <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
//                   <MapPin size={12} />
//                   {project.state}
//                 </p>
//               </div>

//               <StatusBadge status={project.status} />
//             </div>

//             <div className="mt-5">
//               <div className="flex justify-between text-xs mb-2">
//                 <span className="font-bold">
//                   Project Progress
//                 </span>

//                 <span className="text-gray-500">
//                   {project.progress}%
//                 </span>
//               </div>

//               <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
//                 <div
//                   style={{
//                     width: `${project.progress}%`,
//                   }}
//                   className="h-full rounded-full bg-[#054226]"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-between mt-5 pt-4 border-t text-xs">
//               <span className="text-gray-400">
//                 Budget
//               </span>

//               <span className="font-black">
//                 ₦{project.budget.toLocaleString()}
//               </span>
//             </div>
//           </Panel>
//         ))}
//       </div>
//     </div>
//   );

//   /* =======================================================
//      EVENTS
//   ======================================================= */

//   const EventsPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Events"
//         subtitle="Plan and monitor RHV meetings, outreach programs and activities."
//       />

//       <Panel>
//         <EmptyState
//           icon={CalendarDays}
//           title="Event management ready"
//           text="Connect this dashboard section to your event API. The navigation and layout are already active."
//           action={
//             <button
//               onClick={() =>
//                 notify(
//                   "Connect New Event to your POST /api/events endpoint."
//                 )
//               }
//               className="mt-4 px-4 py-2.5 rounded-xl bg-[#054226] text-white text-sm font-bold"
//             >
//               Create Event
//             </button>
//           }
//         />
//       </Panel>
//     </div>
//   );

//   /* =======================================================
//      FINANCE
//   ======================================================= */

//   const FinancePage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Finance"
//         subtitle="Monitor RHV financial records and project budgets."
//       />

//       <div className="grid md:grid-cols-3 gap-4">
//         <MiniStat
//           icon={WalletCards}
//           label="Project Budget"
//           value={`₦${(totalProjectBudget / 1000000).toFixed(1)}m`}
//         />

//         <MiniStat
//           icon={CircleDollarSign}
//           label="Approved Spending"
//           value="₦7.8m"
//         />

//         <MiniStat
//           icon={TrendingUp}
//           label="Available"
//           value={`₦${Math.max(
//             0,
//             totalProjectBudget - 7800000
//           ).toLocaleString()}`}
//         />
//       </div>

//       <Panel>
//         <PanelHeader
//           title="Finance Controls"
//           subtitle="Administrative finance actions"
//         />

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
//           <QuickAction
//             icon={Plus}
//             label="Record Transaction"
//             onClick={() =>
//               notify(
//                 "Connect transaction recording to your finance API."
//               )
//             }
//           />

//           <QuickAction
//             icon={FileBarChart}
//             label="Generate Report"
//             onClick={() => changePage("reports")}
//           />

//           <QuickAction
//             icon={Download}
//             label="Export Records"
//             onClick={() => notify("Finance export prepared.")}
//           />

//           <QuickAction
//             icon={ShieldCheck}
//             label="Audit Finance"
//             onClick={() => changePage("audit")}
//           />
//         </div>
//       </Panel>
//     </div>
//   );

//   /* =======================================================
//      REPORTS
//   ======================================================= */

//   const ReportsPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Reports & Analytics"
//         subtitle="Platform-wide operational analytics and reporting."
//       />

//       <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
//         <ReportCard
//           icon={Users}
//           title="Membership Report"
//           text="Member distribution, registrations and status."
//         />

//         <ReportCard
//           icon={MapPin}
//           title="Chapter Report"
//           text="State-level activity and performance."
//         />

//         <ReportCard
//           icon={HandHeart}
//           title="Project Report"
//           text="Project delivery and budget analysis."
//         />

//         <ReportCard
//           icon={ShieldCheck}
//           title="Audit Report"
//           text="Administrative actions and security events."
//         />
//       </div>
//     </div>
//   );

//   /* =======================================================
//      ROLES
//   ======================================================= */

//   const RolesPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Users & Roles"
//         subtitle="Assign administrative permissions and responsibilities."
//       />

//       <Panel>
//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[700px]">
//             <thead>
//               <tr className="border-b text-left text-[10px] uppercase text-gray-400 tracking-wider">
//                 <th className="pb-3">User</th>
//                 <th>Role</th>
//                 <th>State</th>
//                 <th>Status</th>
//                 <th className="text-right">
//                   Manage
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {members.map((member) => (
//                 <tr
//                   key={member.id}
//                   className="border-b last:border-0"
//                 >
//                   <td className="py-4">
//                     <div className="flex items-center gap-3">
//                       <Avatar name={member.name} />

//                       <div>
//                         <p className="font-bold text-sm">
//                           {member.name}
//                         </p>

//                         <p className="text-[10px] text-gray-400">
//                           {member.email}
//                         </p>
//                       </div>
//                     </div>
//                   </td>

//                   <td className="text-xs font-bold">
//                     {member.role}
//                   </td>

//                   <td className="text-xs text-gray-500">
//                     {member.state}
//                   </td>

//                   <td>
//                     <StatusBadge status={member.status} />
//                   </td>

//                   <td className="text-right">
//                     <button
//                       onClick={() =>
//                         setModal({
//                           type: "role",
//                           data: member,
//                         })
//                       }
//                       className="px-3 py-2 rounded-lg border text-xs font-bold"
//                     >
//                       Change role
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </Panel>
//     </div>
//   );

//   /* =======================================================
//      MESSAGES
//   ======================================================= */

//   const MessagesPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Messages"
//         subtitle="Communicate with chapters, coordinators and members."
//       />

//       <Panel>
//         <EmptyState
//           icon={MessageSquare}
//           title="Messaging center"
//           text="Connect this section to your Socket.IO or messaging backend."
//           action={
//             <button
//               onClick={() =>
//                 notify(
//                   "Connect Compose Message to your messaging API."
//                 )
//               }
//               className="mt-4 px-4 py-2.5 bg-[#054226] text-white rounded-xl text-sm font-bold"
//             >
//               Compose Message
//             </button>
//           }
//         />
//       </Panel>
//     </div>
//   );

//   /* =======================================================
//      NOTIFICATIONS PAGE
//   ======================================================= */

//   const NotificationsPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Notifications"
//         subtitle="System and administrative notifications."
//         action={
//           <button
//             onClick={markAllNotificationsRead}
//             className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-bold"
//           >
//             Mark all read
//           </button>
//         }
//       />

//       <Panel>
//         <div className="space-y-2">
//           {notifications.map((notification) => (
//             <button
//               key={notification.id}
//               onClick={() =>
//                 markNotificationRead(notification.id)
//               }
//               className={`w-full text-left rounded-xl p-4 border transition ${
//                 notification.read
//                   ? "border-gray-100"
//                   : "border-[#054226]/10 bg-[#054226]/5"
//               }`}
//             >
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-lg bg-[#054226]/10 text-[#054226] flex items-center justify-center shrink-0">
//                   <Bell size={16} />
//                 </div>

//                 <div>
//                   <p className="font-bold text-sm">
//                     {notification.title}
//                   </p>

//                   <p className="text-xs text-gray-500 mt-1">
//                     {notification.text}
//                   </p>

//                   <p className="text-[10px] text-gray-400 mt-2">
//                     {notification.time}
//                   </p>
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>
//       </Panel>
//     </div>
//   );

//   /* =======================================================
//      AUDIT
//   ======================================================= */

//   const AuditPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="Audit Logs"
//         subtitle="Review important administrative actions across RHV."
//       />

//       <Panel>
//         <div className="space-y-2">
//           {auditLogs.map((log) => (
//             <div
//               key={log.id}
//               className="p-4 border border-gray-100 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-3"
//             >
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-xl bg-[#054226]/10 flex items-center justify-center text-[#054226]">
//                   <ShieldCheck size={17} />
//                 </div>

//                 <div>
//                   <p className="font-bold text-sm">
//                     {log.action}
//                   </p>

//                   <p className="text-[11px] text-gray-500 mt-1">
//                     {log.admin} · {log.target}
//                   </p>
//                 </div>
//               </div>

//               <p className="text-[10px] text-gray-400">
//                 {log.time}
//               </p>
//             </div>
//           ))}
//         </div>
//       </Panel>
//     </div>
//   );

//   /* =======================================================
//      SETTINGS
//   ======================================================= */

//   const SettingsPage = () => (
//     <div className="space-y-6">
//       <PageTitle
//         title="System Settings"
//         subtitle="Control RHV platform behavior and security."
//       />

//       <div className="grid xl:grid-cols-2 gap-5">
//         <Panel>
//           <PanelHeader
//             title="Platform Controls"
//             subtitle="System-wide application settings"
//           />

//           <div className="space-y-1">
//             <SettingToggle
//               title="Open Membership Registration"
//               text="Allow new users to submit membership applications."
//               value={settings.registrationOpen}
//               onChange={() =>
//                 toggleSetting("registrationOpen")
//               }
//             />

//             <SettingToggle
//               title="Require Admin Approval"
//               text="Applications require administrator approval."
//               value={settings.requireAdminApproval}
//               onChange={() =>
//                 toggleSetting("requireAdminApproval")
//               }
//             />

//             <SettingToggle
//               title="Allow Profile Editing"
//               text="Members can update their profile information."
//               value={settings.allowProfileEditing}
//               onChange={() =>
//                 toggleSetting("allowProfileEditing")
//               }
//             />

//             <SettingToggle
//               title="Maintenance Mode"
//               text="Temporarily restrict platform access."
//               value={settings.maintenanceMode}
//               onChange={() =>
//                 toggleSetting("maintenanceMode")
//               }
//               danger
//             />
//           </div>
//         </Panel>

//         <Panel>
//           <PanelHeader
//             title="Communication"
//             subtitle="Control notification delivery"
//           />

//           <div className="space-y-1">
//             <SettingToggle
//               title="Email Notifications"
//               text="Enable administrative email notifications."
//               value={settings.emailNotifications}
//               onChange={() =>
//                 toggleSetting("emailNotifications")
//               }
//             />

//             <SettingToggle
//               title="SMS Notifications"
//               text="Enable SMS alerts where configured."
//               value={settings.smsNotifications}
//               onChange={() =>
//                 toggleSetting("smsNotifications")
//               }
//             />
//           </div>
//         </Panel>

//         <Panel>
//           <PanelHeader
//             title="Security"
//             subtitle="Sensitive SuperAdmin controls"
//           />

//           <div className="space-y-3">
//             <SecurityButton
//               icon={KeyRound}
//               title="Change SuperAdmin Password"
//               text="Update your administrative password."
//             />

//             <SecurityButton
//               icon={ShieldCheck}
//               title="Two-Factor Authentication"
//               text="Protect the SuperAdmin account with MFA."
//             />

//             <SecurityButton
//               icon={LockKeyhole}
//               title="Active Sessions"
//               text="Review and revoke authenticated sessions."
//             />
//           </div>
//         </Panel>

//         <Panel>
//           <PanelHeader
//             title="Danger Zone"
//             subtitle="High-impact administrative actions"
//           />

//           <button
//             onClick={() =>
//               setModal({
//                 type: "danger",
//               })
//             }
//             className="w-full flex items-start gap-3 border border-red-200 bg-red-50 rounded-xl p-4 text-left hover:bg-red-100"
//           >
//             <ShieldAlert
//               size={19}
//               className="text-red-600 mt-0.5"
//             />

//             <div>
//               <p className="font-black text-sm text-red-800">
//                 System administration
//               </p>

//               <p className="text-[11px] text-red-600 mt-1">
//                 Access high-impact platform controls.
//               </p>
//             </div>
//           </button>
//         </Panel>
//       </div>
//     </div>
//   );

//   /* =======================================================
//      ACTIVE PAGE
//   ======================================================= */

//   const renderPage = () => {
//     switch (activePage) {
//       case "members":
//         return <MembersPage />;

//       case "applications":
//         return <ApplicationsPage />;

//       case "chapters":
//         return <ChaptersPage />;

//       case "projects":
//         return <ProjectsPage />;

//       case "events":
//         return <EventsPage />;

//       case "finance":
//         return <FinancePage />;

//       case "reports":
//         return <ReportsPage />;

//       case "roles":
//         return <RolesPage />;

//       case "messages":
//         return <MessagesPage />;

//       case "notifications":
//         return <NotificationsPage />;

//       case "audit":
//         return <AuditPage />;

//       case "settings":
//         return <SettingsPage />;

//       default:
//         return <OverviewPage />;
//     }
//   };

//   /* =======================================================
//      RETURN
//   ======================================================= */

//   return (
//     <div className="min-h-screen bg-[#f6f8f7] text-gray-800 font-sans">
//       {/* =================================================
//           DESKTOP SIDEBAR
//       ================================================= */}

//       <aside className="hidden lg:flex fixed inset-y-0 left-0 w-[270px] bg-[#032e1a] text-white z-40 flex-col border-r border-white/5">
//         <SidebarContent
//           activePage={activePage}
//           changePage={changePage}
//         />
//       </aside>

//       {/* =================================================
//           MOBILE SIDEBAR
//       ================================================= */}

//       <AnimatePresence>
//         {sidebarOpen && (
//           <>
//             <motion.div
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//               }}
//               onClick={() => setSidebarOpen(false)}
//               className="fixed inset-0 bg-black/50 z-50 lg:hidden"
//             />

//             <motion.aside
//               initial={{
//                 x: -280,
//               }}
//               animate={{
//                 x: 0,
//               }}
//               exit={{
//                 x: -280,
//               }}
//               transition={{
//                 type: "spring",
//                 damping: 25,
//               }}
//               className="fixed inset-y-0 left-0 w-[270px] bg-[#032e1a] z-[60] text-white lg:hidden"
//             >
//               <button
//                 onClick={() => setSidebarOpen(false)}
//                 className="absolute right-3 top-3 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"
//               >
//                 <X size={17} />
//               </button>

//               <SidebarContent
//                 activePage={activePage}
//                 changePage={changePage}
//               />
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>

//       {/* =================================================
//           CONTENT
//       ================================================= */}

//       <div className="lg:pl-[270px] min-h-screen">
//         {/* HEADER */}

//         <header className="h-[72px] bg-white border-b border-gray-100 sticky top-0 z-30 px-4 md:px-7 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="lg:hidden w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center"
//             >
//               <Menu size={19} />
//             </button>

//             <div className="hidden sm:flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 h-10 rounded-xl w-[300px]">
//               <Search
//                 size={16}
//                 className="text-gray-400"
//               />

//               <input
//                 value={search}
//                 onChange={(event) =>
//                   setSearch(event.target.value)
//                 }
//                 placeholder="Search RHV..."
//                 className="bg-transparent outline-none flex-1 text-xs"
//               />

//               <Command
//                 size={14}
//                 className="text-gray-300"
//               />
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             {/* NOTIFICATIONS */}

//             <div className="relative">
//               <button
//                 onClick={() => {
//                   setNotificationOpen((previous) => !previous);
//                   setProfileOpen(false);
//                 }}
//                 className="relative w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50"
//               >
//                 <Bell size={18} />

//                 {unreadNotifications > 0 && (
//                   <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-red-500 text-white rounded-full text-[9px] font-black flex items-center justify-center">
//                     {unreadNotifications}
//                   </span>
//                 )}
//               </button>

//               <AnimatePresence>
//                 {notificationOpen && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       y: -8,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     exit={{
//                       opacity: 0,
//                       y: -8,
//                     }}
//                     className="absolute right-0 top-12 w-[330px] bg-white border border-gray-100 rounded-2xl shadow-2xl p-3"
//                   >
//                     <div className="flex items-center justify-between px-2 py-2">
//                       <h3 className="font-black text-sm">
//                         Notifications
//                       </h3>

//                       <button
//                         onClick={markAllNotificationsRead}
//                         className="text-[10px] font-bold text-[#054226]"
//                       >
//                         Mark all read
//                       </button>
//                     </div>

//                     <div className="space-y-1">
//                       {notifications.slice(0, 4).map((notification) => (
//                         <button
//                           key={notification.id}
//                           onClick={() =>
//                             markNotificationRead(notification.id)
//                           }
//                           className={`w-full text-left p-3 rounded-xl ${
//                             notification.read
//                               ? "hover:bg-gray-50"
//                               : "bg-[#054226]/5"
//                           }`}
//                         >
//                           <p className="text-xs font-bold">
//                             {notification.title}
//                           </p>

//                           <p className="text-[10px] text-gray-500 mt-1">
//                             {notification.text}
//                           </p>
//                         </button>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* PROFILE */}

//             <div className="relative">
//               <button
//                 onClick={() => {
//                   setProfileOpen((previous) => !previous);
//                   setNotificationOpen(false);
//                 }}
//                 className="flex items-center gap-3 p-1.5 pr-2 rounded-xl hover:bg-gray-50"
//               >
//                 <div className="w-9 h-9 rounded-xl bg-[#054226] text-white flex items-center justify-center font-black text-xs">
//                   SA
//                 </div>

//                 <div className="hidden md:block text-left">
//                   <p className="text-xs font-black">
//                     Super Admin
//                   </p>

//                   <p className="text-[9px] text-gray-400">
//                     Full system access
//                   </p>
//                 </div>

//                 <ChevronDown size={14} />
//               </button>

//               <AnimatePresence>
//                 {profileOpen && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       y: -6,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     exit={{
//                       opacity: 0,
//                       y: -6,
//                     }}
//                     className="absolute right-0 top-12 w-56 bg-white border rounded-xl shadow-xl p-2"
//                   >
//                     <ProfileMenuItem
//                       icon={User}
//                       text="My Profile"
//                     />

//                     <ProfileMenuItem
//                       icon={Settings}
//                       text="Settings"
//                       onClick={() => {
//                         changePage("settings");
//                         setProfileOpen(false);
//                       }}
//                     />

//                     <div className="border-t my-1" />

//                     <ProfileMenuItem
//                       icon={LogOut}
//                       text="Sign Out"
//                       danger
//                       onClick={() =>
//                         notify(
//                           "Connect Sign Out to your logout API.",
//                           "error"
//                         )
//                       }
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </header>

//         {/* PAGE */}

//         <main className="p-4 md:p-7 max-w-[1650px] mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activePage}
//               initial={{
//                 opacity: 0,
//                 y: 8,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -5,
//               }}
//               transition={{
//                 duration: 0.2,
//               }}
//             >
//               {renderPage()}
//             </motion.div>
//           </AnimatePresence>
//         </main>
//       </div>

//       {/* =================================================
//           MODALS
//       ================================================= */}

//       <AnimatePresence>
//         {modal && (
//           <ModalOverlay onClose={() => setModal(null)}>
//             {modal.type === "application" && (
//               <ApplicationModal
//                 application={modal.data}
//                 onApprove={() =>
//                   approveApplication(modal.data)
//                 }
//                 onReject={() =>
//                   rejectApplication(modal.data)
//                 }
//                 onClose={() => setModal(null)}
//               />
//             )}

//             {modal.type === "member" && (
//               <MemberModal
//                 member={modal.data}
//                 onToggleStatus={() =>
//                   toggleMemberStatus(modal.data)
//                 }
//                 onDelete={() =>
//                   setModal({
//                     type: "confirmDelete",
//                     data: modal.data,
//                   })
//                 }
//                 onRole={() =>
//                   setModal({
//                     type: "role",
//                     data: modal.data,
//                   })
//                 }
//                 onClose={() => setModal(null)}
//               />
//             )}

//             {modal.type === "confirmDelete" && (
//               <ConfirmDeleteModal
//                 member={modal.data}
//                 onConfirm={() =>
//                   deleteMember(modal.data)
//                 }
//                 onCancel={() => setModal(null)}
//               />
//             )}

//             {modal.type === "role" && (
//               <RoleModal
//                 member={modal.data}
//                 onChange={(role) =>
//                   changeMemberRole(modal.data, role)
//                 }
//                 onClose={() => setModal(null)}
//               />
//             )}

//             {modal.type === "newProject" && (
//               <NewProjectModal
//                 onCreate={addProject}
//                 onClose={() => setModal(null)}
//               />
//             )}

//             {modal.type === "danger" && (
//               <DangerModal
//                 onClose={() => setModal(null)}
//                 onAction={(action) => {
//                   addAuditLog("Danger zone action", action);
//                   notify(`${action} command recorded.`, "error");
//                   setModal(null);
//                 }}
//               />
//             )}
//           </ModalOverlay>
//         )}
//       </AnimatePresence>

//       {/* =================================================
//           TOAST
//       ================================================= */}

//       <AnimatePresence>
//         {toast && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//               x: 20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               x: 0,
//             }}
//             exit={{
//               opacity: 0,
//               y: 15,
//             }}
//             className={`fixed bottom-5 right-5 z-[100] max-w-sm rounded-xl shadow-2xl border p-4 flex gap-3 ${
//               toast.type === "error"
//                 ? "bg-red-50 border-red-200"
//                 : "bg-white border-green-100"
//             }`}
//           >
//             {toast.type === "error" ? (
//               <AlertCircle
//                 size={19}
//                 className="text-red-500 shrink-0"
//               />
//             ) : (
//               <CheckCircle2
//                 size={19}
//                 className="text-green-600 shrink-0"
//               />
//             )}

//             <p className="text-xs font-bold">
//               {toast.message}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* =========================================================
//    SIDEBAR
// ========================================================= */

// function SidebarContent({
//   activePage,
//   changePage,
// }) {
//   return (
//     <div className="h-full flex flex-col">
//       <div className="h-[76px] flex items-center px-5 border-b border-white/10">
//         <div className="w-10 h-10 rounded-xl bg-[#c99e38] flex items-center justify-center shrink-0">
//           <Shield size={21} />
//         </div>

//         <div className="ml-3">
//           <p className="font-black text-sm leading-none">
//             RENEWED HOPE
//           </p>

//           <p className="text-[9px] tracking-[0.27em] text-[#c99e38] mt-1">
//             VETERANS
//           </p>
//         </div>
//       </div>

//       <div className="px-3 py-5 flex-1 overflow-y-auto">
//         {NAVIGATION.map((section) => (
//           <div
//             key={section.group}
//             className="mb-6"
//           >
//             <p className="px-3 mb-2 text-[9px] font-black tracking-[0.2em] text-white/30">
//               {section.group}
//             </p>

//             <div className="space-y-1">
//               {section.items.map((item) => {
//                 const Icon = item.icon;
//                 const active =
//                   item.id === activePage;

//                 return (
//                   <button
//                     key={item.id}
//                     onClick={() =>
//                       changePage(item.id)
//                     }
//                     className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
//                       active
//                         ? "bg-white/10 text-white font-bold"
//                         : "text-white/60 hover:bg-white/5 hover:text-white"
//                     }`}
//                   >
//                     <Icon
//                       size={17}
//                       className={
//                         active
//                           ? "text-[#c99e38]"
//                           : ""
//                       }
//                     />

//                     {item.label}

//                     {active && (
//                       <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#c99e38]" />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="p-3">
//         <div className="rounded-xl bg-white/5 border border-white/5 p-3">
//           <div className="flex items-center gap-2">
//             <Activity
//               size={15}
//               className="text-green-400"
//             />

//             <span className="text-[10px] font-bold text-white/70">
//               System Online
//             </span>
//           </div>

//           <p className="text-[9px] text-white/30 mt-2">
//             SuperAdmin access · RHV Platform
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    SHARED COMPONENTS
// ========================================================= */

// function Panel({ children }) {
//   return (
//     <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
//       {children}
//     </div>
//   );
// }

// function PanelHeader({
//   title,
//   subtitle,
//   action,
// }) {
//   return (
//     <div className="flex items-start justify-between gap-4">
//       <div>
//         <h2 className="font-black text-gray-900">
//           {title}
//         </h2>

//         {subtitle && (
//           <p className="text-xs text-gray-400 mt-1">
//             {subtitle}
//           </p>
//         )}
//       </div>

//       {action}
//     </div>
//   );
// }

// function PageTitle({
//   title,
//   subtitle,
//   action,
// }) {
//   return (
//     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//       <div>
//         <h1 className="text-2xl md:text-3xl font-black text-gray-900">
//           {title}
//         </h1>

//         <p className="text-sm text-gray-500 mt-2">
//           {subtitle}
//         </p>
//       </div>

//       {action}
//     </div>
//   );
// }

// function StatCard({
//   icon: Icon,
//   label,
//   value,
//   change,
//   positive,
//   subtitle,
// }) {
//   return (
//     <motion.div
//       whileHover={{
//         y: -2,
//       }}
//       className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
//     >
//       <div className="flex items-start justify-between">
//         <div className="w-10 h-10 rounded-xl bg-[#054226]/10 flex items-center justify-center text-[#054226]">
//           <Icon size={19} />
//         </div>

//         <span
//           className={`text-[10px] font-black ${
//             positive
//               ? "text-green-600"
//               : "text-red-500"
//           }`}
//         >
//           {change}
//         </span>
//       </div>

//       <p className="text-2xl font-black mt-5">
//         {value}
//       </p>

//       <p className="text-xs font-bold text-gray-600 mt-1">
//         {label}
//       </p>

//       <p className="text-[10px] text-gray-400 mt-2">
//         {subtitle}
//       </p>
//     </motion.div>
//   );
// }

// function MiniStat({
//   icon: Icon,
//   label,
//   value,
// }) {
//   return (
//     <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
//       <div className="w-11 h-11 rounded-xl bg-[#054226]/10 text-[#054226] flex items-center justify-center">
//         <Icon size={19} />
//       </div>

//       <div>
//         <p className="text-2xl font-black">
//           {value}
//         </p>

//         <p className="text-xs text-gray-400">
//           {label}
//         </p>
//       </div>
//     </div>
//   );
// }

// function QuickAction({
//   icon: Icon,
//   label,
//   onClick,
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className="rounded-xl border border-gray-100 p-4 text-left hover:border-[#054226]/30 hover:bg-[#054226]/5 transition"
//     >
//       <div className="w-9 h-9 rounded-lg bg-[#054226]/10 text-[#054226] flex items-center justify-center">
//         <Icon size={17} />
//       </div>

//       <p className="text-xs font-black mt-3">
//         {label}
//       </p>
//     </button>
//   );
// }

// function StatusBadge({ status }) {
//   const style =
//     status === "Active" ||
//     status === "Approved" ||
//     status === "Completed" ||
//     status === "Operational"
//       ? "bg-green-50 text-green-700 border-green-100"
//       : status === "Pending" ||
//         status === "Under Review" ||
//         status === "Needs Attention"
//       ? "bg-amber-50 text-amber-700 border-amber-100"
//       : status === "Disabled"
//       ? "bg-gray-100 text-gray-500 border-gray-200"
//       : "bg-red-50 text-red-600 border-red-100";

//   return (
//     <span
//       className={`inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-black border ${style}`}
//     >
//       {status}
//     </span>
//   );
// }

// function SmallBadge({ text }) {
//   return (
//     <span className="px-2 py-1 rounded-full bg-gray-100 text-[9px] font-bold text-gray-500">
//       {text}
//     </span>
//   );
// }

// function Avatar({ name }) {
//   const initials = name
//     .split(" ")
//     .map((part) => part[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();

//   return (
//     <div className="w-10 h-10 rounded-xl bg-[#054226]/10 text-[#054226] flex items-center justify-center font-black text-xs shrink-0">
//       {initials}
//     </div>
//   );
// }

// function HealthRow({
//   label,
//   status,
// }) {
//   const operational =
//     status === "Operational";

//   return (
//     <div className="flex justify-between items-center gap-4">
//       <div className="flex items-center gap-2">
//         <span
//           className={`w-2 h-2 rounded-full ${
//             operational
//               ? "bg-green-500"
//               : "bg-gray-300"
//           }`}
//         />

//         <span className="text-xs font-bold">
//           {label}
//         </span>
//       </div>

//       <span className="text-[10px] text-gray-400">
//         {status}
//       </span>
//     </div>
//   );
// }

// function SearchBox({
//   value,
//   onChange,
//   placeholder,
// }) {
//   return (
//     <div className="h-10 px-3 rounded-xl border border-gray-200 flex items-center gap-2 flex-1 max-w-xl">
//       <Search
//         size={16}
//         className="text-gray-400"
//       />

//       <input
//         value={value}
//         onChange={(event) =>
//           onChange(event.target.value)
//         }
//         placeholder={placeholder}
//         className="flex-1 outline-none text-xs bg-transparent"
//       />
//     </div>
//   );
// }

// function SelectFilter({
//   value,
//   onChange,
//   options,
// }) {
//   return (
//     <div className="relative">
//       <select
//         value={value}
//         onChange={(event) =>
//           onChange(event.target.value)
//         }
//         className="h-10 pl-3 pr-9 rounded-xl border border-gray-200 text-xs font-bold outline-none appearance-none bg-white"
//       >
//         {options.map((option) => (
//           <option
//             key={option}
//             value={option}
//           >
//             {option}
//           </option>
//         ))}
//       </select>

//       <ChevronDown
//         size={14}
//         className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
//       />
//     </div>
//   );
// }

// function ChapterStat({
//   label,
//   value,
// }) {
//   return (
//     <div className="bg-gray-50 rounded-xl p-3 text-center">
//       <p className="font-black text-sm">
//         {value.toLocaleString()}
//       </p>

//       <p className="text-[9px] text-gray-400 mt-1">
//         {label}
//       </p>
//     </div>
//   );
// }

// function EmptyState({
//   icon: Icon,
//   title,
//   text,
//   action,
// }) {
//   return (
//     <div className="py-14 text-center flex flex-col items-center">
//       <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center">
//         <Icon size={23} />
//       </div>

//       <h3 className="font-black mt-4">
//         {title}
//       </h3>

//       <p className="text-xs text-gray-400 mt-2 max-w-md">
//         {text}
//       </p>

//       {action}
//     </div>
//   );
// }

// function ReportCard({
//   icon: Icon,
//   title,
//   text,
// }) {
//   return (
//     <button className="text-left bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:border-[#054226]/30">
//       <div className="w-11 h-11 rounded-xl bg-[#054226]/10 text-[#054226] flex items-center justify-center">
//         <Icon size={19} />
//       </div>

//       <h3 className="font-black mt-4">
//         {title}
//       </h3>

//       <p className="text-xs text-gray-400 mt-2 leading-relaxed">
//         {text}
//       </p>

//       <div className="mt-4 text-xs font-black text-[#054226] flex items-center gap-1">
//         Generate
//         <ArrowRight size={13} />
//       </div>
//     </button>
//   );
// }

// function SettingToggle({
//   title,
//   text,
//   value,
//   onChange,
//   danger,
// }) {
//   return (
//     <div className="flex items-start justify-between gap-4 py-4 border-b last:border-0">
//       <div>
//         <p
//           className={`font-black text-sm ${
//             danger
//               ? "text-red-600"
//               : ""
//           }`}
//         >
//           {title}
//         </p>

//         <p className="text-[11px] text-gray-400 mt-1 max-w-sm">
//           {text}
//         </p>
//       </div>

//       <button
//         type="button"
//         onClick={onChange}
//         className={`w-11 h-6 rounded-full p-1 transition ${
//           value
//             ? danger
//               ? "bg-red-500"
//               : "bg-[#054226]"
//             : "bg-gray-200"
//         }`}
//       >
//         <span
//           className={`block w-4 h-4 bg-white rounded-full transition-transform ${
//             value
//               ? "translate-x-5"
//               : ""
//           }`}
//         />
//       </button>
//     </div>
//   );
// }

// function SecurityButton({
//   icon: Icon,
//   title,
//   text,
// }) {
//   return (
//     <button className="w-full p-4 rounded-xl border border-gray-100 flex gap-3 text-left hover:border-[#054226]/20">
//       <div className="w-9 h-9 rounded-lg bg-[#054226]/10 text-[#054226] flex items-center justify-center shrink-0">
//         <Icon size={17} />
//       </div>

//       <div>
//         <p className="font-black text-sm">
//           {title}
//         </p>

//         <p className="text-[11px] text-gray-400 mt-1">
//           {text}
//         </p>
//       </div>
//     </button>
//   );
// }

// function ProfileMenuItem({
//   icon: Icon,
//   text,
//   onClick,
//   danger,
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-xs font-bold ${
//         danger
//           ? "text-red-500 hover:bg-red-50"
//           : "hover:bg-gray-50"
//       }`}
//     >
//       <Icon size={15} />
//       {text}
//     </button>
//   );
// }

// /* =========================================================
//    MODALS
// ========================================================= */

// function ModalOverlay({
//   children,
//   onClose,
// }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0,
//       }}
//       className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] p-4 flex items-center justify-center"
//       onMouseDown={(event) => {
//         if (
//           event.target === event.currentTarget
//         ) {
//           onClose();
//         }
//       }}
//     >
//       <motion.div
//         initial={{
//           opacity: 0,
//           scale: 0.96,
//           y: 15,
//         }}
//         animate={{
//           opacity: 1,
//           scale: 1,
//           y: 0,
//         }}
//         exit={{
//           opacity: 0,
//           scale: 0.97,
//         }}
//         className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
//       >
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// }

// function ModalHeader({
//   title,
//   subtitle,
//   onClose,
// }) {
//   return (
//     <div className="p-5 border-b flex justify-between gap-4">
//       <div>
//         <h2 className="font-black text-lg">
//           {title}
//         </h2>

//         {subtitle && (
//           <p className="text-xs text-gray-400 mt-1">
//             {subtitle}
//           </p>
//         )}
//       </div>

//       <button
//         onClick={onClose}
//         className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center"
//       >
//         <X size={16} />
//       </button>
//     </div>
//   );
// }

// function ApplicationModal({
//   application,
//   onApprove,
//   onReject,
//   onClose,
// }) {
//   return (
//     <>
//       <ModalHeader
//         title="Review Application"
//         subtitle={application.id}
//         onClose={onClose}
//       />

//       <div className="p-5 space-y-4">
//         <div className="flex gap-3 items-center">
//           <Avatar name={application.name} />

//           <div>
//             <p className="font-black">
//               {application.name}
//             </p>

//             <p className="text-xs text-gray-400">
//               {application.email}
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-3">
//           <InfoField
//             label="State"
//             value={application.state}
//           />

//           <InfoField
//             label="Category"
//             value={application.category}
//           />

//           <InfoField
//             label="Application Date"
//             value={application.date}
//           />

//           <InfoField
//             label="Status"
//             value={application.status}
//           />
//         </div>
//       </div>

//       <div className="p-5 border-t flex gap-3">
//         <button
//           onClick={onReject}
//           className="flex-1 border border-red-200 text-red-600 py-3 rounded-xl font-bold text-sm"
//         >
//           Reject
//         </button>

//         <button
//           onClick={onApprove}
//           className="flex-1 bg-[#054226] text-white py-3 rounded-xl font-bold text-sm"
//         >
//           Approve Application
//         </button>
//       </div>
//     </>
//   );
// }

// function MemberModal({
//   member,
//   onToggleStatus,
//   onDelete,
//   onRole,
//   onClose,
// }) {
//   return (
//     <>
//       <ModalHeader
//         title="Manage Member"
//         subtitle={member.id}
//         onClose={onClose}
//       />

//       <div className="p-5">
//         <div className="flex items-center gap-3 mb-5">
//           <Avatar name={member.name} />

//           <div>
//             <h3 className="font-black">
//               {member.name}
//             </h3>

//             <p className="text-xs text-gray-400">
//               {member.email}
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-3">
//           <InfoField
//             label="State"
//             value={member.state}
//           />

//           <InfoField
//             label="Category"
//             value={member.category}
//           />

//           <InfoField
//             label="Role"
//             value={member.role}
//           />

//           <InfoField
//             label="Status"
//             value={member.status}
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-3 mt-5">
//           <button
//             onClick={onRole}
//             className="border border-gray-200 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2"
//           >
//             <UserCog size={15} />
//             Change Role
//           </button>

//           <button
//             onClick={onToggleStatus}
//             className={`border py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 ${
//               member.status === "Active"
//                 ? "border-amber-200 text-amber-700"
//                 : "border-green-200 text-green-700"
//             }`}
//           >
//             {member.status === "Active" ? (
//               <UserMinus size={15} />
//             ) : (
//               <UserCheck size={15} />
//             )}

//             {member.status === "Active"
//               ? "Suspend"
//               : "Activate"}
//           </button>

//           <button
//             onClick={onDelete}
//             className="col-span-2 border border-red-200 bg-red-50 text-red-600 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2"
//           >
//             <Trash2 size={15} />
//             Delete Member
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// function ConfirmDeleteModal({
//   member,
//   onConfirm,
//   onCancel,
// }) {
//   return (
//     <div className="p-6 text-center">
//       <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto">
//         <Trash2 size={23} />
//       </div>

//       <h2 className="font-black text-xl mt-4">
//         Delete Member?
//       </h2>

//       <p className="text-sm text-gray-500 mt-2">
//         Are you sure you want to permanently remove{" "}
//         <strong>{member.name}</strong>?
//       </p>

//       <div className="flex gap-3 mt-6">
//         <button
//           onClick={onCancel}
//           className="flex-1 border py-3 rounded-xl text-sm font-bold"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={onConfirm}
//           className="flex-1 bg-red-500 text-white py-3 rounded-xl text-sm font-bold"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// function RoleModal({
//   member,
//   onChange,
//   onClose,
// }) {
//   return (
//     <>
//       <ModalHeader
//         title="Change User Role"
//         subtitle={member.name}
//         onClose={onClose}
//       />

//       <div className="p-5 space-y-2">
//         {[
//           "Member",
//           "Volunteer",
//           "Coordinator",
//           "State Admin",
//           "National Admin",
//         ].map((role) => (
//           <button
//             key={role}
//             onClick={() => onChange(role)}
//             className={`w-full p-4 rounded-xl border text-left flex items-center justify-between ${
//               member.role === role
//                 ? "border-[#054226] bg-[#054226]/5"
//                 : "border-gray-100 hover:border-gray-300"
//             }`}
//           >
//             <span className="text-sm font-black">
//               {role}
//             </span>

//             {member.role === role && (
//               <CheckCircle2
//                 size={17}
//                 className="text-[#054226]"
//               />
//             )}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// function NewProjectModal({
//   onCreate,
//   onClose,
// }) {
//   const [form, setForm] = useState({
//     title: "",
//     state: "",
//     budget: "",
//   });

//   return (
//     <>
//       <ModalHeader
//         title="Create New Project"
//         subtitle="Add an RHV initiative"
//         onClose={onClose}
//       />

//       <form
//         onSubmit={(event) => {
//           event.preventDefault();

//           if (
//             !form.title.trim() ||
//             !form.state.trim()
//           ) {
//             return;
//           }

//           onCreate(form);
//         }}
//         className="p-5 space-y-4"
//       >
//         <ModalInput
//           label="Project Title"
//           value={form.title}
//           onChange={(value) =>
//             setForm((previous) => ({
//               ...previous,
//               title: value,
//             }))
//           }
//         />

//         <ModalInput
//           label="State"
//           value={form.state}
//           onChange={(value) =>
//             setForm((previous) => ({
//               ...previous,
//               state: value,
//             }))
//           }
//         />

//         <ModalInput
//           label="Budget"
//           type="number"
//           value={form.budget}
//           onChange={(value) =>
//             setForm((previous) => ({
//               ...previous,
//               budget: value,
//             }))
//           }
//         />

//         <button
//           type="submit"
//           className="w-full bg-[#054226] text-white py-3.5 rounded-xl text-sm font-bold"
//         >
//           Create Project
//         </button>
//       </form>
//     </>
//   );
// }

// function DangerModal({
//   onClose,
//   onAction,
// }) {
//   return (
//     <>
//       <ModalHeader
//         title="Danger Zone"
//         subtitle="High-impact administrative controls"
//         onClose={onClose}
//       />

//       <div className="p-5 space-y-3">
//         {[
//           "Force logout all users",
//           "Invalidate all sessions",
//           "Lock member registration",
//           "Generate security audit",
//         ].map((action) => (
//           <button
//             key={action}
//             onClick={() =>
//               onAction(action)
//             }
//             className="w-full border border-red-100 hover:bg-red-50 p-4 rounded-xl text-left text-sm font-bold text-red-600"
//           >
//             {action}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// function InfoField({
//   label,
//   value,
// }) {
//   return (
//     <div className="p-3 rounded-xl bg-gray-50">
//       <p className="text-[9px] uppercase tracking-wide text-gray-400 font-bold">
//         {label}
//       </p>

//       <p className="text-xs font-black mt-1">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ModalInput({
//   label,
//   value,
//   onChange,
//   type = "text",
// }) {
//   return (
//     <div>
//       <label className="block text-xs font-bold mb-2">
//         {label}
//       </label>

//       <input
//         type={type}
//         value={value}
//         onChange={(event) =>
//           onChange(event.target.value)
//         }
//         className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#054226] focus:ring-2 focus:ring-[#054226]/10"
//       />
//     </div>
//   );
// }

import React, { useMemo, useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleUserRound,
  Clock3,
  Filter,
  LayoutDashboard,
  MapPin,
  Menu,
  MoreHorizontal,
  Search,
  Settings,
  ShieldCheck,
  Users,
  UserCheck,
  UserPlus,
  X,
  Zap,
} from "lucide-react";

import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   NIGERIA SITE DATA
   Replace this later with API/MongoDB data.
========================================================= */

const NIGERIA_SITES = [
  {
    id: 1,
    state: "Katsina",
    city: "Katsina",
    region: "North West",
    members: 1240,
    active: 1128,
    pending: 54,
    volunteers: 87,
    lat: 12.9908,
    lng: 7.6008,
    status: "active",
  },
  {
    id: 2,
    state: "Kano",
    city: "Kano",
    region: "North West",
    members: 2480,
    active: 2260,
    pending: 96,
    volunteers: 143,
    lat: 12.0022,
    lng: 8.592,
    status: "active",
  },
  {
    id: 3,
    state: "Kaduna",
    city: "Kaduna",
    region: "North West",
    members: 1850,
    active: 1690,
    pending: 73,
    volunteers: 118,
    lat: 10.5105,
    lng: 7.4165,
    status: "active",
  },
  {
    id: 4,
    state: "Sokoto",
    city: "Sokoto",
    region: "North West",
    members: 970,
    active: 891,
    pending: 35,
    volunteers: 62,
    lat: 13.0059,
    lng: 5.2476,
    status: "active",
  },
  {
    id: 5,
    state: "Kebbi",
    city: "Birnin Kebbi",
    region: "North West",
    members: 620,
    active: 560,
    pending: 22,
    volunteers: 41,
    lat: 12.4539,
    lng: 4.1975,
    status: "active",
  },
  {
    id: 6,
    state: "Jigawa",
    city: "Dutse",
    region: "North West",
    members: 710,
    active: 648,
    pending: 29,
    volunteers: 48,
    lat: 11.7562,
    lng: 9.338,
    status: "active",
  },
  {
    id: 7,
    state: "Bauchi",
    city: "Bauchi",
    region: "North East",
    members: 820,
    active: 744,
    pending: 38,
    volunteers: 52,
    lat: 10.3158,
    lng: 9.8442,
    status: "active",
  },
  {
    id: 8,
    state: "Gombe",
    city: "Gombe",
    region: "North East",
    members: 640,
    active: 580,
    pending: 31,
    volunteers: 44,
    lat: 10.2897,
    lng: 11.1671,
    status: "active",
  },
  {
    id: 9,
    state: "Yobe",
    city: "Damaturu",
    region: "North East",
    members: 530,
    active: 472,
    pending: 24,
    volunteers: 37,
    lat: 11.747,
    lng: 11.9608,
    status: "active",
  },
  {
    id: 10,
    state: "Borno",
    city: "Maiduguri",
    region: "North East",
    members: 910,
    active: 821,
    pending: 42,
    volunteers: 71,
    lat: 11.8333,
    lng: 13.15,
    status: "active",
  },
  {
    id: 11,
    state: "Plateau",
    city: "Jos",
    region: "North Central",
    members: 1120,
    active: 1017,
    pending: 46,
    volunteers: 82,
    lat: 9.8965,
    lng: 8.8583,
    status: "active",
  },
  {
    id: 12,
    state: "Nasarawa",
    city: "Lafia",
    region: "North Central",
    members: 690,
    active: 621,
    pending: 29,
    volunteers: 46,
    lat: 8.491,
    lng: 8.5167,
    status: "active",
  },
  {
    id: 13,
    state: "Benue",
    city: "Makurdi",
    region: "North Central",
    members: 880,
    active: 803,
    pending: 35,
    volunteers: 57,
    lat: 7.7322,
    lng: 8.5391,
    status: "active",
  },
  {
    id: 14,
    state: "Kogi",
    city: "Lokoja",
    region: "North Central",
    members: 760,
    active: 694,
    pending: 28,
    volunteers: 49,
    lat: 7.8023,
    lng: 6.7333,
    status: "active",
  },
  {
    id: 15,
    state: "Niger",
    city: "Minna",
    region: "North Central",
    members: 930,
    active: 846,
    pending: 40,
    volunteers: 64,
    lat: 9.6139,
    lng: 6.5569,
    status: "active",
  },
  {
    id: 16,
    state: "FCT",
    city: "Abuja",
    region: "North Central",
    members: 3210,
    active: 2960,
    pending: 121,
    volunteers: 187,
    lat: 9.0765,
    lng: 7.3986,
    status: "active",
  },
  {
    id: 17,
    state: "Lagos",
    city: "Lagos",
    region: "South West",
    members: 4250,
    active: 3930,
    pending: 162,
    volunteers: 241,
    lat: 6.5244,
    lng: 3.3792,
    status: "active",
  },
  {
    id: 18,
    state: "Oyo",
    city: "Ibadan",
    region: "South West",
    members: 2150,
    active: 1980,
    pending: 84,
    volunteers: 132,
    lat: 7.3775,
    lng: 3.947,
    status: "active",
  },
  {
    id: 19,
    state: "Osun",
    city: "Osogbo",
    region: "South West",
    members: 980,
    active: 892,
    pending: 39,
    volunteers: 63,
    lat: 7.7827,
    lng: 4.5418,
    status: "active",
  },
  {
    id: 20,
    state: "Ondo",
    city: "Akure",
    region: "South West",
    members: 840,
    active: 761,
    pending: 33,
    volunteers: 52,
    lat: 7.2571,
    lng: 5.2058,
    status: "active",
  },
  {
    id: 21,
    state: "Ekiti",
    city: "Ado-Ekiti",
    region: "South West",
    members: 620,
    active: 570,
    pending: 21,
    volunteers: 39,
    lat: 7.6219,
    lng: 5.2215,
    status: "active",
  },
  {
    id: 22,
    state: "Edo",
    city: "Benin City",
    region: "South South",
    members: 1250,
    active: 1132,
    pending: 52,
    volunteers: 81,
    lat: 6.335,
    lng: 5.6037,
    status: "active",
  },
  {
    id: 23,
    state: "Delta",
    city: "Asaba",
    region: "South South",
    members: 1110,
    active: 1004,
    pending: 44,
    volunteers: 75,
    lat: 6.1989,
    lng: 6.724,
    status: "active",
  },
  {
    id: 24,
    state: "Rivers",
    city: "Port Harcourt",
    region: "South South",
    members: 1930,
    active: 1780,
    pending: 71,
    volunteers: 119,
    lat: 4.8156,
    lng: 7.0498,
    status: "active",
  },
  {
    id: 25,
    state: "Akwa Ibom",
    city: "Uyo",
    region: "South South",
    members: 1040,
    active: 938,
    pending: 43,
    volunteers: 67,
    lat: 5.0377,
    lng: 7.9128,
    status: "active",
  },
  {
    id: 26,
    state: "Cross River",
    city: "Calabar",
    region: "South South",
    members: 720,
    active: 651,
    pending: 27,
    volunteers: 47,
    lat: 4.9757,
    lng: 8.3417,
    status: "active",
  },
  {
    id: 27,
    state: "Imo",
    city: "Owerri",
    region: "South East",
    members: 1080,
    active: 974,
    pending: 46,
    volunteers: 71,
    lat: 5.4763,
    lng: 7.025,
    status: "active",
  },
  {
    id: 28,
    state: "Abia",
    city: "Umuahia",
    region: "South East",
    members: 870,
    active: 786,
    pending: 37,
    volunteers: 58,
    lat: 5.532,
    lng: 7.486,
    status: "active",
  },
  {
    id: 29,
    state: "Enugu",
    city: "Enugu",
    region: "South East",
    members: 1190,
    active: 1082,
    pending: 48,
    volunteers: 79,
    lat: 6.4584,
    lng: 7.5464,
    status: "active",
  },
  {
    id: 30,
    state: "Anambra",
    city: "Awka",
    region: "South East",
    members: 1320,
    active: 1211,
    pending: 51,
    volunteers: 86,
    lat: 6.2104,
    lng: 7.0677,
    status: "active",
  },
];

/* =========================================================
   RECENT ACTIVITY
========================================================= */

const INITIAL_ACTIVITIES = [
  {
    id: 1,
    type: "member",
    title: "New member registered",
    description: "A new member joined from Katsina State.",
    time: "4 minutes ago",
    icon: UserPlus,
  },
  {
    id: 2,
    type: "application",
    title: "Membership application submitted",
    description: "New application received from Lagos.",
    time: "11 minutes ago",
    icon: CircleUserRound,
  },
  {
    id: 3,
    type: "chapter",
    title: "Chapter activity updated",
    description: "Abuja chapter submitted its weekly report.",
    time: "28 minutes ago",
    icon: Building2,
  },
  {
    id: 4,
    type: "system",
    title: "System backup completed",
    description: "Automated database backup completed successfully.",
    time: "1 hour ago",
    icon: ShieldCheck,
  },
  {
    id: 5,
    type: "event",
    title: "Event created",
    description: "New community outreach event scheduled.",
    time: "2 hours ago",
    icon: CalendarDays,
  },
];

/* =========================================================
   MAP SEARCH HELPER
========================================================= */

function MapController({ selectedSite }) {
  const map = useMap();

  React.useEffect(() => {
    if (!selectedSite) return;

    map.flyTo(
      [selectedSite.lat, selectedSite.lng],
      8,
      {
        duration: 1.2,
      }
    );
  }, [selectedSite, map]);

  return null;
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function StatCard({
  title,
  value,
  change,
  icon: Icon,
  positive = true,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">{title}</p>

          <h3 className="text-2xl font-bold text-slate-900 mt-2">
            {value}
          </h3>

          {subtitle && (
            <p className="text-xs text-slate-400 mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <div className="w-11 h-11 rounded-xl bg-[#e9f5ef] flex items-center justify-center">
          <Icon
            size={21}
            className="text-[#075c35]"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        {positive ? (
          <ArrowUpRight
            size={15}
            className="text-emerald-600"
          />
        ) : (
          <ArrowDownRight
            size={15}
            className="text-red-500"
          />
        )}

        <span
          className={`text-xs font-semibold ${
            positive
              ? "text-emerald-600"
              : "text-red-500"
          }`}
        >
          {change}
        </span>

        <span className="text-xs text-slate-400">
          vs last month
        </span>
      </div>
    </motion.div>
  );
}

function SectionHeader({
  title,
  subtitle,
  action,
}) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="text-sm text-slate-500 mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}

/* =========================================================
   MAIN DASHBOARD
========================================================= */

export default function RHVSuperAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [selectedSite, setSelectedSite] = useState(null);

  const [regionFilter, setRegionFilter] = useState("All Regions");

  const [statusFilter, setStatusFilter] = useState("All");

  const [showNotifications, setShowNotifications] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const [activities] = useState(INITIAL_ACTIVITIES);

  /* =====================================================
     CALCULATE TOTALS
  ===================================================== */

  const totals = useMemo(() => {
    return NIGERIA_SITES.reduce(
      (acc, site) => {
        acc.members += site.members;
        acc.active += site.active;
        acc.pending += site.pending;
        acc.volunteers += site.volunteers;

        return acc;
      },
      {
        members: 0,
        active: 0,
        pending: 0,
        volunteers: 0,
      }
    );
  }, []);

  /* =====================================================
     FILTER MAP SITES
  ===================================================== */

  const filteredSites = useMemo(() => {
    return NIGERIA_SITES.filter((site) => {
      const matchesSearch =
        site.state
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        site.city
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesRegion =
        regionFilter === "All Regions" ||
        site.region === regionFilter;

      const matchesStatus =
        statusFilter === "All" ||
        site.status === statusFilter;

      return (
        matchesSearch &&
        matchesRegion &&
        matchesStatus
      );
    });
  }, [
    search,
    regionFilter,
    statusFilter,
  ]);

  /* =====================================================
     REGION DATA
  ===================================================== */

  const regions = useMemo(() => {
    const data = {};

    NIGERIA_SITES.forEach((site) => {
      if (!data[site.region]) {
        data[site.region] = {
          members: 0,
          active: 0,
          sites: 0,
        };
      }

      data[site.region].members += site.members;
      data[site.region].active += site.active;
      data[site.region].sites += 1;
    });

    return Object.entries(data)
      .map(([name, value]) => ({
        name,
        ...value,
      }))
      .sort((a, b) => b.members - a.members);
  }, []);

  /* =====================================================
     MAP MARKER SIZE
  ===================================================== */

  const markerRadius = (members) => {
    if (members >= 3500) return 20;
    if (members >= 2500) return 17;
    if (members >= 1800) return 14;
    if (members >= 1200) return 11;
    if (members >= 800) return 9;

    return 7;
  };

  return (
    <div className="min-h-screen bg-[#f6f8f7] text-slate-900">
      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside
        className={`
          fixed left-0 top-0 bottom-0 z-50
          w-[255px]
          bg-[#043c23]
          text-white
          transform transition-transform duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}

          <div className="px-6 py-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
                <ShieldCheck
                  size={25}
                  className="text-[#075c35]"
                />
              </div>

              <div>
                <h1 className="font-bold text-lg">
                  RHV
                </h1>

                <p className="text-[11px] text-white/60">
                  SuperAdmin
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}

          <div className="flex-1 px-3 py-5 overflow-y-auto">
            <p className="px-3 text-[10px] uppercase tracking-widest text-white/40 mb-3">
              Main
            </p>

            <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-white text-[#043c23] font-semibold">
              <LayoutDashboard size={18} />
              Dashboard
            </button>

            {[
              {
                name: "Members",
                icon: Users,
              },
              {
                name: "Applications",
                icon: UserPlus,
              },
              {
                name: "State Chapters",
                icon: Building2,
              },
              {
                name: "Projects",
                icon: Activity,
              },
              {
                name: "Events",
                icon: CalendarDays,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className="w-full flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  <Icon size={18} />
                  {item.name}
                </button>
              );
            })}

            <p className="px-3 text-[10px] uppercase tracking-widest text-white/40 mb-3 mt-8">
              Management
            </p>

            {[
              {
                name: "Finance",
                icon: Zap,
              },
              {
                name: "Reports & Analytics",
                icon: Activity,
              },
              {
                name: "Users & Roles",
                icon: UserCheck,
              },
              {
                name: "Notifications",
                icon: Bell,
              },
              {
                name: "Settings",
                icon: Settings,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className="w-full flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  <Icon size={18} />
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Bottom user */}

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                <CircleUserRound size={21} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">
                  Super Administrator
                </p>

                <p className="text-xs text-white/50">
                  Full system access
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* =================================================
          MAIN AREA
      ================================================= */}

      <main className="lg:ml-[255px] min-h-screen">
        {/* =================================================
            TOP BAR
        ================================================= */}

        <header className="h-[74px] bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="h-full px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"
              >
                <Menu size={20} />
              </button>

              <div>
                <h1 className="text-xl font-bold">
                  Dashboard
                </h1>

                <p className="text-xs text-slate-500 hidden sm:block">
                  RHV national operations overview
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}

              <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-xl px-3 h-10 w-[230px]">
                <Search
                  size={17}
                  className="text-slate-400"
                />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search state or city..."
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>

              {/* Notification */}

              <div className="relative">
                <button
                  onClick={() =>
                    setShowNotifications(
                      !showNotifications
                    )
                  }
                  className="relative w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200"
                >
                  <Bell size={19} />

                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      className="absolute right-0 mt-3 w-[330px] bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden"
                    >
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold">
                            Notifications
                          </h3>

                          <span className="text-xs text-[#075c35]">
                            3 unread
                          </span>
                        </div>
                      </div>

                      {[
                        "5 new membership applications",
                        "Lagos chapter submitted a report",
                        "System backup completed",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 border-b hover:bg-slate-50"
                        >
                          <p className="text-sm font-medium">
                            {item}
                          </p>

                          <p className="text-xs text-slate-400 mt-1">
                            {index + 4} minutes ago
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile */}

              <div className="relative">
                <button
                  onClick={() =>
                    setShowProfile(!showProfile)
                  }
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-[#075c35] text-white flex items-center justify-center">
                    <CircleUserRound size={20} />
                  </div>

                  <ChevronDown
                    size={15}
                    className="hidden sm:block"
                  />
                </button>

                {showProfile && (
                  <div className="absolute right-0 mt-3 w-48 bg-white border border-slate-200 shadow-xl rounded-xl p-2">
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-sm">
                      Profile
                    </button>

                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-sm">
                      Account Settings
                    </button>

                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 text-sm text-red-600">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="p-4 sm:p-6 lg:p-8 max-w-[1800px] mx-auto">
          {/* Welcome */}

          <div className="mb-7">
            <h2 className="text-2xl font-bold text-slate-900">
              National Operations
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Monitor RHV members, chapters and activity
              across Nigeria.
            </p>
          </div>

          {/* =================================================
              STAT CARDS
          ================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard
              title="Total Members"
              value={totals.members.toLocaleString()}
              change="+12.8%"
              icon={Users}
              subtitle="Registered nationwide"
            />

            <StatCard
              title="Active Members"
              value={totals.active.toLocaleString()}
              change="+9.4%"
              icon={UserCheck}
              subtitle="Currently active"
            />

            <StatCard
              title="Pending Applications"
              value={totals.pending.toLocaleString()}
              change="+4.2%"
              icon={Clock3}
              positive={false}
              subtitle="Awaiting review"
            />

            <StatCard
              title="Active Sites"
              value={NIGERIA_SITES.length}
              change="+6"
              icon={Building2}
              subtitle="Operational locations"
            />
          </div>

          {/* =================================================
              MAP SECTION
          ================================================= */}

          <div className="mt-6 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            {/* Map header */}

            <div className="p-5 border-b border-slate-200">
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={19}
                      className="text-[#075c35]"
                    />

                    <h2 className="text-lg font-bold">
                      Nigeria Operations Map
                    </h2>
                  </div>

                  <p className="text-sm text-slate-500 mt-1">
                    View member distribution and RHV
                    operational sites across Nigeria.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {/* Search */}

                  <div className="flex md:hidden items-center gap-2 bg-slate-100 rounded-xl px-3 h-10 w-full">
                    <Search
                      size={16}
                      className="text-slate-400"
                    />

                    <input
                      value={search}
                      onChange={(e) =>
                        setSearch(e.target.value)
                      }
                      placeholder="Search location..."
                      className="bg-transparent outline-none text-sm w-full"
                    />

                    {search && (
                      <button
                        onClick={() => setSearch("")}
                      >
                        <X size={15} />
                      </button>
                    )}
                  </div>

                  {/* Region */}

                  <select
                    value={regionFilter}
                    onChange={(e) =>
                      setRegionFilter(e.target.value)
                    }
                    className="h-10 rounded-xl border border-slate-200 px-3 text-sm outline-none bg-white"
                  >
                    <option>
                      All Regions
                    </option>
                    <option>North West</option>
                    <option>North East</option>
                    <option>North Central</option>
                    <option>South West</option>
                    <option>South East</option>
                    <option>South South</option>
                  </select>

                  {/* Status */}

                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(e.target.value)
                    }
                    className="h-10 rounded-xl border border-slate-200 px-3 text-sm outline-none bg-white"
                  >
                    <option value="All">
                      All Sites
                    </option>

                    <option value="active">
                      Active
                    </option>

                    <option value="inactive">
                      Inactive
                    </option>
                  </select>

                  <button className="h-10 px-4 rounded-xl bg-[#075c35] text-white text-sm font-semibold flex items-center gap-2 hover:bg-[#054629]">
                    <Filter size={15} />
                    Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Map */}

            <div className="relative h-[580px]">
              <MapContainer
                center={[9.08, 8.67]}
                zoom={6}
                minZoom={5}
                maxZoom={12}
                scrollWheelZoom={true}
                className="w-full h-full z-0"
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapController
                  selectedSite={selectedSite}
                />

                {filteredSites.map((site) => (
                  <CircleMarker
                    key={site.id}
                    center={[
                      site.lat,
                      site.lng,
                    ]}
                    radius={markerRadius(
                      site.members
                    )}
                    pathOptions={{
                      color:
                        site.status === "active"
                          ? "#075c35"
                          : "#94a3b8",
                      fillColor:
                        site.status === "active"
                          ? "#16a34a"
                          : "#94a3b8",
                      fillOpacity: 0.75,
                      weight: 2,
                    }}
                    eventHandlers={{
                      click: () =>
                        setSelectedSite(site),
                    }}
                  >
                    <Popup>
                      <div className="min-w-[220px]">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-bold text-base">
                              {site.city}
                            </h3>

                            <p className="text-xs text-slate-500">
                              {site.state} •{" "}
                              {site.region}
                            </p>
                          </div>

                          <span className="text-[10px] px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                            {site.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <div className="bg-slate-50 p-2 rounded-lg">
                            <p className="text-[10px] text-slate-400">
                              Members
                            </p>

                            <p className="font-bold">
                              {site.members.toLocaleString()}
                            </p>
                          </div>

                          <div className="bg-slate-50 p-2 rounded-lg">
                            <p className="text-[10px] text-slate-400">
                              Active
                            </p>

                            <p className="font-bold text-green-600">
                              {site.active.toLocaleString()}
                            </p>
                          </div>

                          <div className="bg-slate-50 p-2 rounded-lg">
                            <p className="text-[10px] text-slate-400">
                              Pending
                            </p>

                            <p className="font-bold text-orange-600">
                              {site.pending}
                            </p>
                          </div>

                          <div className="bg-slate-50 p-2 rounded-lg">
                            <p className="text-[10px] text-slate-400">
                              Volunteers
                            </p>

                            <p className="font-bold">
                              {site.volunteers}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() =>
                            setSelectedSite(site)
                          }
                          className="w-full mt-3 py-2 rounded-lg bg-[#075c35] text-white text-xs font-semibold"
                        >
                          View site details
                        </button>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>

              {/* =================================================
                  MAP LEGEND
              ================================================= */}

              <div className="absolute bottom-5 left-5 z-[1000] bg-white/95 backdrop-blur border border-slate-200 rounded-xl p-3 shadow-lg">
                <p className="text-xs font-bold mb-2">
                  Member Density
                </p>

                <div className="flex items-center gap-3 text-[10px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-green-600" />
                    500+
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="w-4 h-4 rounded-full bg-green-600" />
                    1,000+
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-green-600" />
                    2,000+
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="w-6 h-6 rounded-full bg-green-600" />
                    3,500+
                  </div>
                </div>
              </div>

              {/* =================================================
                  MAP SITE COUNT
              ================================================= */}

              <div className="absolute top-5 right-5 z-[1000] bg-white/95 backdrop-blur border border-slate-200 rounded-xl shadow-lg px-4 py-3">
                <p className="text-xs text-slate-400">
                  Visible sites
                </p>

                <p className="text-xl font-bold">
                  {filteredSites.length}
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              SELECTED SITE
          ================================================= */}

          <AnimatePresence>
            {selectedSite && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="mt-6 overflow-hidden"
              >
                <div className="bg-[#043c23] text-white rounded-2xl p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-widest">
                        Selected Site
                      </p>

                      <h2 className="text-2xl font-bold mt-1">
                        {selectedSite.city},{" "}
                        {selectedSite.state}
                      </h2>

                      <p className="text-sm text-white/60 mt-1">
                        {selectedSite.region}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setSelectedSite(null)
                      }
                      className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs text-white/50">
                        Total Members
                      </p>

                      <p className="text-2xl font-bold mt-1">
                        {selectedSite.members.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs text-white/50">
                        Active Members
                      </p>

                      <p className="text-2xl font-bold mt-1">
                        {selectedSite.active.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs text-white/50">
                        Pending
                      </p>

                      <p className="text-2xl font-bold mt-1">
                        {selectedSite.pending}
                      </p>
                    </div>

                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-xs text-white/50">
                        Volunteers
                      </p>

                      <p className="text-2xl font-bold mt-1">
                        {selectedSite.volunteers}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =================================================
              LOWER DASHBOARD
          ================================================= */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
            {/* =================================================
                REGIONAL DISTRIBUTION
            ================================================= */}

            <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <SectionHeader
                title="Regional Distribution"
                subtitle="Member concentration across Nigeria"
                action={
                  <button className="text-xs font-semibold text-[#075c35]">
                    View report
                  </button>
                }
              />

              <div className="space-y-5">
                {regions.map((region) => {
                  const percentage =
                    (region.members /
                      totals.members) *
                    100;

                  return (
                    <div key={region.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-sm font-semibold">
                            {region.name}
                          </p>

                          <p className="text-xs text-slate-400">
                            {region.sites} operational sites
                          </p>
                        </div>

                        <p className="text-sm font-bold">
                          {region.members.toLocaleString()}
                        </p>
                      </div>

                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width: `${percentage}%`,
                          }}
                          transition={{
                            duration: 0.8,
                          }}
                          className="h-full bg-[#075c35] rounded-full"
                        />
                      </div>

                      <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-slate-400">
                          {percentage.toFixed(1)}%
                          national share
                        </span>

                        <span className="text-[10px] text-emerald-600">
                          {region.active.toLocaleString()} active
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                SYSTEM HEALTH
            ================================================= */}

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <SectionHeader
                title="System Health"
                subtitle="Current platform status"
              />

              <div className="space-y-4">
                {[
                  {
                    name: "API Server",
                    status: "Operational",
                    percentage: "99.98%",
                  },
                  {
                    name: "Database",
                    status: "Operational",
                    percentage: "99.99%",
                  },
                  {
                    name: "Authentication",
                    status: "Operational",
                    percentage: "99.97%",
                  },
                  {
                    name: "File Storage",
                    status: "Operational",
                    percentage: "99.95%",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                        <CheckCircle2
                          size={17}
                          className="text-green-600"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          {item.name}
                        </p>

                        <p className="text-xs text-green-600">
                          {item.status}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-bold">
                      {item.percentage}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-xl bg-[#e9f5ef]">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[#075c35]"
                  />

                  <p className="text-sm font-bold text-[#075c35]">
                    All systems operational
                  </p>
                </div>

                <p className="text-xs text-slate-500 mt-1">
                  No critical incidents detected.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              ACTIVITY + QUICK ACTIONS
          ================================================= */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
            {/* Activity */}

            <div className="xl:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <SectionHeader
                title="Recent Activity"
                subtitle="Latest system events"
                action={
                  <button className="text-xs font-semibold text-[#075c35]">
                    View all
                  </button>
                }
              />

              <div className="space-y-1">
                {activities.map((activity) => {
                  const Icon = activity.icon;

                  return (
                    <div
                      key={activity.id}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#e9f5ef] flex items-center justify-center shrink-0">
                        <Icon
                          size={17}
                          className="text-[#075c35]"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold">
                              {activity.title}
                            </p>

                            <p className="text-xs text-slate-500 mt-1">
                              {activity.description}
                            </p>
                          </div>

                          <span className="text-[10px] text-slate-400 whitespace-nowrap">
                            {activity.time}
                          </span>
                        </div>
                      </div>

                      <button className="text-slate-400 hover:text-slate-700">
                        <MoreHorizontal
                          size={18}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <SectionHeader
                title="Quick Actions"
                subtitle="Frequently used controls"
              />

              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 rounded-xl border border-slate-200 hover:border-[#075c35] hover:bg-[#e9f5ef] transition text-left">
                  <UserPlus
                    size={20}
                    className="text-[#075c35]"
                  />

                  <p className="text-sm font-bold mt-3">
                    Add Member
                  </p>

                  <p className="text-[10px] text-slate-400 mt-1">
                    Create member
                  </p>
                </button>

                <button className="p-4 rounded-xl border border-slate-200 hover:border-[#075c35] hover:bg-[#e9f5ef] transition text-left">
                  <Building2
                    size={20}
                    className="text-[#075c35]"
                  />

                  <p className="text-sm font-bold mt-3">
                    New Site
                  </p>

                  <p className="text-[10px] text-slate-400 mt-1">
                    Add location
                  </p>
                </button>

                <button className="p-4 rounded-xl border border-slate-200 hover:border-[#075c35] hover:bg-[#e9f5ef] transition text-left">
                  <CalendarDays
                    size={20}
                    className="text-[#075c35]"
                  />

                  <p className="text-sm font-bold mt-3">
                    Create Event
                  </p>

                  <p className="text-[10px] text-slate-400 mt-1">
                    Schedule event
                  </p>
                </button>

                <button className="p-4 rounded-xl border border-slate-200 hover:border-[#075c35] hover:bg-[#e9f5ef] transition text-left">
                  <Activity
                    size={20}
                    className="text-[#075c35]"
                  />

                  <p className="text-sm font-bold mt-3">
                    Generate Report
                  </p>

                  <p className="text-[10px] text-slate-400 mt-1">
                    Export analytics
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
              STATE TABLE
          ================================================= */}

          <div className="mt-6 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200">
              <SectionHeader
                title="Site Overview"
                subtitle="Operational locations currently visible on the map"
                action={
                  <span className="text-xs bg-slate-100 px-3 py-2 rounded-lg">
                    {filteredSites.length} sites
                  </span>
                }
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[750px]">
                <thead>
                  <tr className="text-left bg-slate-50 border-b">
                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                      Location
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                      Region
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                      Members
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                      Active
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                      Pending
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredSites
                    .slice(0, 12)
                    .map((site) => (
                      <tr
                        key={site.id}
                        className="border-b last:border-0 hover:bg-slate-50"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#e9f5ef] flex items-center justify-center">
                              <MapPin
                                size={16}
                                className="text-[#075c35]"
                              />
                            </div>

                            <div>
                              <p className="text-sm font-semibold">
                                {site.city}
                              </p>

                              <p className="text-xs text-slate-400">
                                {site.state}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-500">
                          {site.region}
                        </td>

                        <td className="px-5 py-4 text-sm font-bold">
                          {site.members.toLocaleString()}
                        </td>

                        <td className="px-5 py-4 text-sm text-emerald-600 font-semibold">
                          {site.active.toLocaleString()}
                        </td>

                        <td className="px-5 py-4 text-sm text-orange-600">
                          {site.pending}
                        </td>

                        <td className="px-5 py-4">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            Active
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <button
                            onClick={() =>
                              setSelectedSite(site)
                            }
                            className="text-xs font-semibold text-[#075c35] hover:underline"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* =================================================
              FOOTER
          ================================================= */}

          <div className="py-8 text-center">
            <p className="text-xs text-slate-400">
              RHV SuperAdmin System • National
              Operations Dashboard
            </p>

            <p className="text-[10px] text-slate-300 mt-1">
              System status: Operational
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}