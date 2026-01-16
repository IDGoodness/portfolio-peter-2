import React from "react";
import CertificationCard from "../Components/portfolio/CertificationCard";

// Images from src/assets/conferences
import conference1 from "../assets/conferences/IMG_20230927_160822_1 (1).jpg";
import conference2 from "../assets/conferences/IMG_20240523_155536_1 (1).jpg";
import niqsConf from "../assets/conferences/niqscert.jpg";
import volunteer3 from "../assets/conferences/volunteer3.jpeg";

const conferences = [
  {
    title:
      "Nigeria Institute of Quantity Surveyors (NIQS) Oyo State Chapter, Annual General meeting and Workshop ",
    issuing_body: "NIQS, OYO",
    year: "2023",
    description: "Theme: Sustainable Infrastructural Management.",
    certificate_image: conference1,
  },
  {
    title: "Ife Built Environments Summits 1.0",
    issuing_body: "IBES",
    year: "2024",
    description:
      "Theme: Sustainability: Repositioning the Nigeria Built Environment.",
    certificate_image: conference2,
  },
  {
    title: "NIQS Young professional Technical Symposium And Exhibition (YPTSE)",
    issuing_body: "NIQS",
    year: "2024",
    // description: "Professional conference participation.",
    certificate_image: niqsConf,
  },
  {
    title: "Ogbomso Digital Economic Summit 2025",
    issuing_body: "Ennovate Lab",
    year: "2025",
    description:
      "Theme: Financing and Deploying Resources for Digital Transformation.",
    certificate_image: volunteer3,
  },
];

export default function ResearchExperience() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-light text-slate-800 mb-6">Conferences</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {conferences.map((conference, i) => (
          <CertificationCard key={i} certification={conference} />
        ))}
      </div>
    </div>
  );
}
