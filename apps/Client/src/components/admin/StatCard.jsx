import React, {
  useEffect,
  useState,
} from "react";

import {
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";


export default function StatCard({
  title,
  value,
  change,
  changeText,
  trend = "up",
  icon: Icon,
  iconClass = "bg-emerald-50 text-emerald-600",
}) {

  const [displayValue, setDisplayValue] =
    useState(0);


  /*
  |--------------------------------------------------------------------------
  | Animated number counter
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let start = 0;

    const duration = 900;

    const startTime =
      performance.now();

    function animate(currentTime) {

      const elapsed =
        currentTime - startTime;

      const progress =
        Math.min(
          elapsed / duration,
          1
        );

      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );

      start =
        Math.floor(
          eased * value
        );

      setDisplayValue(start);

      if (progress < 1) {
        requestAnimationFrame(
          animate
        );
      }
    }

    requestAnimationFrame(
      animate
    );

  }, [value]);


  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(15,23,42,.08)]">

      {/* Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-50 opacity-0 blur-2xl transition group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-[10px] font-medium text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-[30px] font-black tracking-tight text-slate-900">
            {displayValue.toLocaleString()}
          </h3>

          <div className="mt-3 flex items-center gap-2">

            <span
              className={`flex items-center gap-0.5 text-[10px] font-bold ${
                trend === "up"
                  ? "text-emerald-600"
                  : "text-red-500"
              }`}
            >

              {trend === "up" ? (
                <ArrowUpRight size={13} />
              ) : (
                <ArrowDownRight size={13} />
              )}

              {change}

            </span>

            <span className="text-[9px] text-slate-400">
              {changeText}
            </span>

          </div>

        </div>


        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon size={19} />
        </div>

      </div>


      {/* Animated bottom line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

    </div>
  );
}