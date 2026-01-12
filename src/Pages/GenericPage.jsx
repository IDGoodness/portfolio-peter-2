import React from "react";

export default function GenericPage({ title, children }) {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-light text-slate-800 mb-6">{title}</h2>
      {children}
    </div>
  );
}
