import React from "react";
import CertificationCard from "@/components/portfolio/CertificationCard";

const sampleCerts = [
  {
    title: "Advanced React",
    issuing_body: "Training Co",
    year: "2023",
    description: "Practical React course",
  },
  {
    title: "Data Science Intro",
    issuing_body: "University",
    year: "2022",
    description: "Foundations of data analysis",
  },
];

export default function Certifications() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-light text-slate-800 mb-6">
        Certifications
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {sampleCerts.map((c, i) => (
          <CertificationCard key={i} certification={c} />
        ))}
      </div>
    </div>
  );
}
