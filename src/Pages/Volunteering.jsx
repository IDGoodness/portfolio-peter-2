import React from "react";
import CertificationCard from "../Components/portfolio/CertificationCard";

// Images from src/assets/volunteering
import iblesVolunteer from "../assets/volunteering/Adewuyi Peter - IBES Volunteer Certificate_page-0001.jpg";
import adrCert from "../assets/volunteering/Peter Adewuyi. ADR_page-0001.jpg";
import volunteer1 from "../assets/volunteering/IMG_20250914_192540.jpg";
// import volunteer2 from "../assets/volunteering/IMG_20250914_192604.jpg";
// import volunteer3 from "../assets/volunteering/IMG_20250914_192703.jpg";
import volunteer4 from "../assets/volunteering/IMG_20250914_192729.jpg";

const volunteerWork = [
  {
    title: "Planning Committee for Ife Built Environments Summits",
    issuing_body: "IBES",
    year: "2024",
    description: "Volunteer work with IBES organization.",
    certificate_image: iblesVolunteer,
  },
  {
    title: "Member of Alternative Dispute Resolution Society",
    issuing_body: "ADR Program",
    year: "2025",
    description: "Alternative Dispute Resolution certification.",
    certificate_image: adrCert,
  },
  {
    title: "Volunteer, Mission Subgroup",
    issuing_body: "Baptist Student Fellowship",
    year: "2024",
    description: "Community volunteering experience.",
    certificate_image: volunteer1,
  },
  // {
  //   title: "Best Student, Faculty of EDM, BSF",
  //   issuing_body: "Baptist Student Fellowship",
  //   year: "2024",
  //   description: "Community volunteering experience.",
  //   certificate_image: volunteer2,
  // },
  // {
  //   title: "Prayer Head, BSF",
  //   issuing_body: "Baptist Student Fellowship",
  //   year: "2024",
  //   description: "Community volunteering experience.",
  //   certificate_image: volunteer3,
  // },
  {
    title: "Member, BSF",
    issuing_body: "Baptist Student Fellowship",
    year: "2024",
    description: "Community volunteering experience.",
    certificate_image: volunteer4,
  },
];

export default function Volunteering() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-light text-slate-800 mb-6">Volunteering</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteerWork.map((volunteer, i) => (
          <CertificationCard key={i} certification={volunteer} />
        ))}
      </div>
    </div>
  );
}
