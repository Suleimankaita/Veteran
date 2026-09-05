import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Home,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function RHVNotFound() {
  const goHome = () => {
    window.location.href = "/";
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-[#f7f9f8] flex items-center justify-center px-5 py-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#075c35]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#c99e38]/5 blur-3xl" />

        <div className="absolute top-[18%] left-[8%] w-2 h-2 bg-[#075c35]/20 rounded-full" />
        <div className="absolute top-[28%] right-[15%] w-3 h-3 bg-[#c99e38]/20 rounded-full" />
        <div className="absolute bottom-[20%] right-[8%] w-2 h-2 bg-[#075c35]/20 rounded-full" />
      </div>

      <main className="relative z-10 w-full max-w-4xl">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <button
            onClick={goHome}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#075c35] flex items-center justify-center shadow-lg shadow-[#075c35]/20 group-hover:scale-105 transition-transform">
              <ShieldCheck
                size={25}
                className="text-white"
              />
            </div>

            <div className="text-left">
              <h1 className="text-xl font-black tracking-tight text-[#043c23]">
                RHV
              </h1>

              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Renewed Hope Veterans
              </p>
            </div>
          </button>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="bg-white border border-slate-200 rounded-[28px] shadow-xl shadow-slate-200/50 overflow-hidden"
        >
          <div className="px-6 py-12 sm:px-12 sm:py-16 text-center">
            {/* 404 illustration */}
            <div className="relative w-fit mx-auto mb-8">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="text-[110px] sm:text-[150px] leading-none font-black tracking-[-0.08em] text-[#043c23]">
                  404
                </div>

                {/* Compass */}
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 sm:-right-8 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#c99e38] border-[6px] border-white shadow-xl flex items-center justify-center"
                >
                  <Compass
                    size={34}
                    className="text-white"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e9f5ef] text-[#075c35] text-xs font-bold mb-5">
                <Search size={13} />
                PAGE NOT FOUND
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                We couldn't find that page
              </h2>

              <p className="text-sm sm:text-base text-slate-500 leading-7 mt-4">
                The page you're looking for may have been moved,
                deleted, or the address may be incorrect.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9">
              <button
                onClick={goHome}
                className="w-full sm:w-auto px-6 h-12 rounded-xl bg-[#075c35] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#054629] active:scale-[0.98] transition-all shadow-lg shadow-[#075c35]/15"
              >
                <Home size={17} />
                Back to Dashboard
              </button>

              <button
                onClick={goBack}
                className="w-full sm:w-auto px-6 h-12 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-[0.98] transition-all"
              >
                <ArrowLeft size={17} />
                Go Back
              </button>
            </div>
          </div>

          {/* Bottom information bar */}
          <div className="border-t border-slate-100 bg-slate-50/70 px-6 sm:px-10 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                RHV System Operational
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Need help?</span>

                <button className="text-[#075c35] font-bold hover:underline flex items-center gap-1">
                  Contact Support
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-slate-400 mt-7"
        >
          © {new Date().getFullYear()} Renewed Hope Veterans.
          All rights reserved.
        </motion.p>
      </main>
    </div>
  );
}