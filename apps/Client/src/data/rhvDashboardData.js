export const dashboardStats = [
  {
    id: "members",
    title: "Total Members",
    value: 1248,
    change: "+18",
    changeText: "this month",
    trend: "up",
  },

  {
    id: "cases",
    title: "Active Support Cases",
    value: 142,
    change: "+8",
    changeText: "from last month",
    trend: "up",
  },

  {
    id: "programs",
    title: "Active Programs",
    value: 24,
    change: "+4",
    changeText: "this month",
    trend: "up",
  },

  {
    id: "impact",
    title: "Lives Impacted",
    value: 8732,
    change: "+312",
    changeText: "this month",
    trend: "up",
  },
];

/*
|--------------------------------------------------------------------------
| Nigeria state operational data
|--------------------------------------------------------------------------
|
| IMPORTANT:
| This is aggregated organizational information.
|
| Do not store or display private veteran home addresses on this map.
|
*/

export const nigeriaStateActivity = {
  Abia: {
    members: 32,
    programs: 2,
    cases: 4,
    centers: 1,
    volunteers: 8,
  },

  Adamawa: {
    members: 42,
    programs: 2,
    cases: 6,
    centers: 1,
    volunteers: 11,
  },

  "Akwa Ibom": {
    members: 43,
    programs: 2,
    cases: 5,
    centers: 1,
    volunteers: 10,
  },

  Anambra: {
    members: 66,
    programs: 4,
    cases: 7,
    centers: 2,
    volunteers: 18,
  },

  Bauchi: {
    members: 54,
    programs: 3,
    cases: 7,
    centers: 1,
    volunteers: 14,
  },

  Bayelsa: {
    members: 29,
    programs: 2,
    cases: 3,
    centers: 1,
    volunteers: 7,
  },

  Benue: {
    members: 46,
    programs: 2,
    cases: 5,
    centers: 1,
    volunteers: 12,
  },

  Borno: {
    members: 48,
    programs: 3,
    cases: 8,
    centers: 2,
    volunteers: 14,
  },

  "Cross River": {
    members: 37,
    programs: 2,
    cases: 4,
    centers: 1,
    volunteers: 9,
  },

  Delta: {
    members: 52,
    programs: 3,
    cases: 5,
    centers: 1,
    volunteers: 13,
  },

  Ebonyi: {
    members: 31,
    programs: 2,
    cases: 3,
    centers: 1,
    volunteers: 8,
  },

  Edo: {
    members: 61,
    programs: 3,
    cases: 6,
    centers: 2,
    volunteers: 17,
  },

  Ekiti: {
    members: 28,
    programs: 2,
    cases: 3,
    centers: 1,
    volunteers: 7,
  },

  Enugu: {
    members: 48,
    programs: 3,
    cases: 5,
    centers: 1,
    volunteers: 13,
  },

  "FCT": {
    members: 94,
    programs: 5,
    cases: 10,
    centers: 3,
    volunteers: 24,
  },

  Gombe: {
    members: 39,
    programs: 2,
    cases: 5,
    centers: 1,
    volunteers: 10,
  },

  Imo: {
    members: 45,
    programs: 3,
    cases: 5,
    centers: 1,
    volunteers: 12,
  },

  Jigawa: {
    members: 34,
    programs: 2,
    cases: 4,
    centers: 1,
    volunteers: 9,
  },

  Kaduna: {
    members: 91,
    programs: 5,
    cases: 11,
    centers: 3,
    volunteers: 26,
  },

  Kano: {
    members: 112,
    programs: 6,
    cases: 14,
    centers: 3,
    volunteers: 31,
  },

  Katsina: {
    members: 86,
    programs: 4,
    cases: 8,
    centers: 2,
    volunteers: 23,
  },

  Kebbi: {
    members: 31,
    programs: 2,
    cases: 4,
    centers: 1,
    volunteers: 8,
  },

  Kogi: {
    members: 38,
    programs: 2,
    cases: 5,
    centers: 1,
    volunteers: 10,
  },

  Kwara: {
    members: 35,
    programs: 2,
    cases: 4,
    centers: 1,
    volunteers: 9,
  },

  Lagos: {
    members: 138,
    programs: 8,
    cases: 17,
    centers: 4,
    volunteers: 37,
  },

  Nasarawa: {
    members: 36,
    programs: 2,
    cases: 4,
    centers: 1,
    volunteers: 10,
  },

  Niger: {
    members: 51,
    programs: 3,
    cases: 6,
    centers: 1,
    volunteers: 14,
  },

  Ogun: {
    members: 69,
    programs: 4,
    cases: 8,
    centers: 2,
    volunteers: 19,
  },

  Ondo: {
    members: 44,
    programs: 2,
    cases: 5,
    centers: 1,
    volunteers: 11,
  },

  Osun: {
    members: 49,
    programs: 3,
    cases: 5,
    centers: 1,
    volunteers: 13,
  },

  Oyo: {
    members: 72,
    programs: 4,
    cases: 9,
    centers: 2,
    volunteers: 20,
  },

  Plateau: {
    members: 57,
    programs: 3,
    cases: 5,
    centers: 2,
    volunteers: 15,
  },

  Rivers: {
    members: 73,
    programs: 4,
    cases: 9,
    centers: 2,
    volunteers: 21,
  },

  Sokoto: {
    members: 47,
    programs: 3,
    cases: 5,
    centers: 1,
    volunteers: 13,
  },

  Taraba: {
    members: 30,
    programs: 2,
    cases: 4,
    centers: 1,
    volunteers: 8,
  },

  Yobe: {
    members: 28,
    programs: 2,
    cases: 4,
    centers: 1,
    volunteers: 8,
  },

  Zamfara: {
    members: 33,
    programs: 2,
    cases: 4,
    centers: 1,
    volunteers: 9,
  },
};


export const recentActivity = [
  {
    id: 1,
    type: "member",
    title: "New member registered",
    description: "A new RHV member joined the organization.",
    location: "Kaduna",
    time: "2 mins ago",
  },

  {
    id: 2,
    type: "case",
    title: "Support case updated",
    description: "Case RHV-2048 moved to In Progress.",
    location: "Lagos",
    time: "15 mins ago",
  },

  {
    id: 3,
    type: "donation",
    title: "Donation received",
    description: "A new contribution was recorded.",
    location: "FCT",
    time: "32 mins ago",
  },

  {
    id: 4,
    type: "program",
    title: "Program milestone reached",
    description: "Veteran Skills Program reached 75%.",
    location: "Kano",
    time: "1 hour ago",
  },

  {
    id: 5,
    type: "support",
    title: "New support request",
    description: "Housing support request submitted.",
    location: "Rivers",
    time: "2 hours ago",
  },
];


export const supportRooms = [
  {
    name: "Welfare Support",
    requests: 42,
    progress: 68,
  },

  {
    name: "Employment Support",
    requests: 27,
    progress: 54,
  },

  {
    name: "Housing Support",
    requests: 18,
    progress: 36,
  },

  {
    name: "Healthcare Support",
    requests: 31,
    progress: 62,
  },

  {
    name: "Financial Assistance",
    requests: 16,
    progress: 32,
  },
];


export const programs = [
  {
    name: "Veteran Skills Program",
    participants: 124,
    progress: 75,
  },

  {
    name: "Entrepreneurship Program",
    participants: 96,
    progress: 60,
  },

  {
    name: "Community Reintegration",
    participants: 78,
    progress: 80,
  },

  {
    name: "Health & Wellness",
    participants: 112,
    progress: 65,
  },
];


export const impactData = [
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
    members: 1180,
    cases: 880,
    programs: 560,
    donations: 360,
  },

  {
    month: "Jun",
    members: 1248,
    cases: 1000,
    programs: 680,
    donations: 450,
  },
];