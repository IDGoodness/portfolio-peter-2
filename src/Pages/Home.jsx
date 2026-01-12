import React from "react";
import HeroSection from "../Components/portfolio/HeroSection";
import AboutSection from "../Components/portfolio/AboutSection";
import SectionDivider from "../Components/portfolio/SectionDivider";

export default function Home() {
  return (
    <div>
      <HeroSection
        name="Peter Oluwafemi Adewuyi"
        title="Construction Technology Researcher, Research Assistant"
        bio="Advancing Construction Management of Sustainable and Smart Cities through technology, innovations and research."
      />
      {/* hmr-test: updated */}

      <SectionDivider />

      <AboutSection
        background="I am an early-career Quantity Surveyor with a strong interest in enhancing construction management for smart cities and communities through technology, research, and innovation. With a solid foundation in cost management and estimation, I am passionate about leveraging digital tools and data-driven approaches to improve project delivery, collaboration, and sustainable outcomes in the construction industry. Beyond my technical interests, I am deeply committed to people development and community impact. I find fulfillment in bringing out the best in others, which has driven my active involvement in mentoring junior colleagues and supporting fellow students academically through one-on-one guidance and organized tutorial sessions. These experiences have strengthened my leadership, communication, and teamwork skills. I also served as a leader within the academic unit of the outreach arm of my fellowship, where we extended academic support to villages within the Ile-Ife university community. Through this role, I contributed to improving students’ academic performance and access to learning resources, reinforcing my belief in education as a tool for community development. Future-driven and forward-looking, I am committed to continuous learning, research, and professional growth. My goal is to contribute meaningfully to the development of innovative construction technologies and best practices that support smarter, more inclusive, and sustainable communities."
        focus="I am an ambitious and high-performing Quantity Surveying graduate (First Class Honours, Top 1%) focused on building a pioneering career at the intersection of construction technology, data analytics, and applied research. With a specialized research interest in ML and AI in Construction, I am committed to leveraging Machine Learning, Python, and Construction 4.0 tools to advance smart, sustainable, and efficient built environments. My professional goals center on conducting impactful research-evidenced by my work on assessing Construction 4.0 technologies and conducting systematic literature reviews while applying digital construction and BIM technologies like Autodesk Revit and Navisworks to real-world scenarios. I aim to utilize data-driven methods, including statistical analysis and cost modeling, to improve cost management, project delivery, and decision-making in the construction industry. Ultimately, I seek to bridge the gap between academic excellence and industrial innovation, contributing to the development of resilient infrastructure and the advancement of construction health and safety practices."
        interests={[
          "Machine Learning",
          "Construction Technology",
          "Smart Cities",
          "Humanitarian Aid",
          "Mentorship & Education",
          "Construction 4.0",
          "Data Analytics",
        ]}
      />
    </div>
  );
}
