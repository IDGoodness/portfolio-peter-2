import React from "react";

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="w-2 h-2 bg-slate-200 rounded-full" />
      <div className="w-16 h-px bg-slate-200 mx-3" />
      <div className="w-2 h-2 bg-slate-300 rounded-full" />
      <div className="w-16 h-px bg-slate-200 mx-3" />
      <div className="w-2 h-2 bg-slate-200 rounded-full" />
    </div>
  );
}