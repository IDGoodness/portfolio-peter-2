import React from "react";
import CertificationCard from "../Components/portfolio/CertificationCard";

// Images from src/assets/certificates
import smartCityImg from "../assets/certificates/smartcity-cert.jpg";
import pythonDataImg from "../assets/certificates/pythondatacert.jpg";
import mlImg from "../assets/certificates/mlcert.jpg";
import gradeplusImg from "../assets/certificates/gradepluscert.jpg";
import understand from "../assets/certificates/Understanding Data Science certificate_page-0001.jpg";
import inter from "../assets/certificates/Intermediate SQL Queries Certificate_page-0001.jpg";
import dsforeveryone from "../assets/certificates/DS for everyone certificate_page-0001.jpg";
import datavizsea from "../assets/certificates/Data Viz with Seaborn certificate_page-0001.jpg";
import datavizmatplotlib from "../assets/certificates/Data Viz with Matplotlibs certificate_page-0001.jpg"
import datamani from "../assets/certificates/Data manipulation with Pandas Certificate_page-0001.jpg";
import dataManage from "../assets/certificates/projectManage.jpg";

// NOTE: Details below are inferred from filenames; please edit titles/issuers/years as needed.
const sampleCerts = [
  {
    title: "Smart Cities: Planning & Management",
    issuing_body: "Smart City Institute",
    year: "2023",
    description: "Overview of sustainable & smart city planning and management.",
    certificate_image: smartCityImg,
  },
  {
    title: "Python for Data Science, AI & Development",
    issuing_body: "IBM",
    year: "2024",
    description: "Foundations of Python for data analysis and visualization.",
    certificate_image: pythonDataImg,
  },
  // {
  //   title: "NIQS Certification",
  //   issuing_body: "NIQS",
  //   year: "2024",
  //   description: "Professional certification from NIQS.",
  //   certificate_image: niqsImg,
  // },
  {
    title: "Machine Learning Fundamentals",
    issuing_body: "IBM",
    year: "2025",
    description: "Introductory machine learning concepts and practice.",
    certificate_image: mlImg,
  },
  {
    title: "Advanced Research Writing",
    issuing_body: "GradePlus Africa",
    year: "2025",
    description: "Assessment-based certification from GradePlus.",
    certificate_image: gradeplusImg,
  },
  {
    title: "Data Manipulation with Pandas",
    issuing_body: "Datacamp",
    year: "2022",
    description: "Learn to manipulate and analyze data using Pandas.",
    certificate_image: datamani,
  },
  {
    title: "Data Visualization with Matplotlib",
    issuing_body: "Datacamp",
    year: "2022",
    description: "Learn to visualize data using Matplotlib.",
    certificate_image: datavizmatplotlib,
  },
  {
    title: "Data Visualization with Seaborn",
    issuing_body: "Datacamp",
    year: "2022",
    description: "Learn to visualize data using Seaborn.",
    certificate_image: datavizsea,
  },
  {
    title: "Data Science for Everyone",
    issuing_body: "Datacamp",
    year: "2022",
    description: "Introduction to data science concepts and techniques.",
    certificate_image: dsforeveryone,
  },
  {
    title: "Understanding Data Science",
    issuing_body: "Datacamp",
    year: "2022",
    description: "Learn the fundamentals of data science.",
    certificate_image: understand,
  },
  {
    title: "Intermediate SQL Queries",
    issuing_body: "Datacamp",
    year: "2022",
    description: "Learn to write intermediate SQL queries for data analysis.",
    certificate_image: inter,
  },
  {
    title: "Developing Professional Project Plans through MS Project",
    issuing_body: "Udemy",
    year: "2023",
    description: "Learn to create and manage project plans using MS Project.",
    certificate_image: dataManage,
  }
];

export default function Certifications() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-light text-slate-800 mb-6">
        Certifications
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCerts.map((c, i) => (
          <CertificationCard key={i} certification={c} />
        ))}
      </div>
    </div>
  );
}
