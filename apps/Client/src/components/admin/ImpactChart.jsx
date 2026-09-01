import React, {
  useState,
} from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  impactData,
} from "../../data/rhvDashboardData";


export default function ImpactChart() {

  const [
    metric,
    setMetric,
  ] = useState("members");


  const config = {
    members: {
      title: "Members Growth",
      color: "#16a34a",
      dataKey: "members",
    },

    cases: {
      title: "Support Cases",
      color: "#2563eb",
      dataKey: "cases",
    },

    programs: {
      title: "Programs",
      color: "#7c3aed",
      dataKey: "programs",
    },

    donations: {
      title: "Donations",
      color: "#f59e0b",
      dataKey: "donations",
    },
  };


  const selected =
    config[metric];


  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,.04)]">

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

        <div>
          <h2 className="text-sm font-bold">
            Organization Impact
          </h2>

          <p className="mt-1 text-[10px] text-slate-400">
            RHV performance over time
          </p>
        </div>


        <select
          value={metric}
          onChange={(event) =>
            setMetric(
              event.target.value
            )
          }
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[10px] outline-none focus:border-emerald-400"
        >

          <option value="members">
            Members
          </option>

          <option value="cases">
            Support Cases
          </option>

          <option value="programs">
            Programs
          </option>

          <option value="donations">
            Donations
          </option>

        </select>

      </div>


      <div className="mt-6">

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <AreaChart
            data={impactData}
          >

            <defs>

              <linearGradient
                id="impactGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor={selected.color}
                  stopOpacity={0.28}
                />

                <stop
                  offset="100%"
                  stopColor={selected.color}
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>


            <CartesianGrid
              vertical={false}
              stroke="#eef2f7"
              strokeDasharray="4 4"
            />


            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              fontSize={10}
              tick={{
                fill: "#94a3b8",
              }}
            />


            <YAxis
              axisLine={false}
              tickLine={false}
              fontSize={9}
              tick={{
                fill: "#94a3b8",
              }}
            />


            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                boxShadow:
                  "0 10px 30px rgba(15,23,42,.08)",
                fontSize: 11,
              }}
            />


            <Area
              type="monotone"
              dataKey={
                selected.dataKey
              }
              stroke={
                selected.color
              }
              strokeWidth={3}
              fill="url(#impactGradient)"
              animationDuration={1200}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}