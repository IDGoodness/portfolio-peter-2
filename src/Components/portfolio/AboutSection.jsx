import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb, BookOpen, Briefcase } from "lucide-react";

export default function AboutSection({
  background = "Your professional background and journey...",
  focus = "Your current career focus and goals...",
  interests = ["Interest 1", "Interest 2", "Interest 3"],
}) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase mb-3">
            Get to Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-800">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-slate-300 mx-auto mt-6" />
        </div>

        <div className="my-8 p-8 text-slate-600 leading-relaxed text-base bg-slate-400/10 rounded-lg shadow-sm">
          <p>
            Peter Oluwafemi Adewuyi is a First Class graduate of Quantity
            Surveying and a researcher from Obafemi Awolowo University (OAU,
            Nigeria), where he ranked in the top 1% of his class. His work
            focuses on the convergence of the built environment and computer
            science, utilizing Artificial Intelligence, Machine Learning, and
            data analytics to develop smart, sustainable construction solutions.
          </p>

          <br />

          <p>
            He is dedicated to leveraging Construction 4.0 technologies to
            enhance project delivery, cost accuracy, and safety standards within
            the industry, as evidenced by his extensive research into digital
            tools for sustainable construction.
          </p>

          <br />

          <p>
            His research interests are in areas related to digital construction
            and applied intelligence, such as Smart Cities, automated cost
            estimation, construction health and safety, and the application of
            Python and SQL in data management. Peter is passionate about
            bridging the gap between traditional quantity surveying and modern
            technology. He values professional development and collaboration,
            demonstrated by his active participation in summits like the Africa
            Future Leaders Summit and the NIQS Technical Symposium. He is eager
            to be part of forward-thinking teams that utilize data science and
            BIM tools (like Revit and PlanSwift) to solve complex infrastructure
            challenges.
          </p>

          <br />

          <p>
            He has also demonstrated exceptional leadership qualities and has
            participated in extracurricular activities that have empowered both
            students and the community over time. He serves as a volunteer with
            the Nigerian Red Cross Society and has held leadership roles such as
            Academic Coordinator for student fellowships. Peter enjoys teaching
            and mentoring; as an Academic Tutor and Software Trainer, he has
            upskilled dozens of undergraduates in measurement software and
            research methodology, helping them achieve measurable academic
            improvements. His dedication to excellence has been recognized with
            multiple awards, including the Top 100 Africa Future Leader Award
            (2025).
          </p>

          <br />

          <p>
            Welcome to my E-portfolio where you can learn more about my
            research, technical projects, certifications, and contributions to
            the built environment.
          </p>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 my-8">
          {/* Education */}
          <Card className="border-0 shadow-sm bg-slate-50 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mt-8">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-800 mt-8">
                  Education
                </h3>
                {/* <h4 className="text-sm text-slate-600 mt-2">
                  What I have learned
                </h4> */}
              </div>

              <div className="space-y-4">
                {/* <div>
                  <p className="font-medium text-slate-700">
                    M.Sc. Construction Management — University of Example
                  </p>
                  <p className="text-sm text-slate-500">
                    2020 – 2022 · Thesis: Digital methods for site monitoring
                  </p>
                </div> */}
                <div>
                  <p className="font-medium text-slate-700">
                    B.Sc. Quantity Surveying — Obafemi Awolowo University,
                    Ile-Ife, Osun State, Nigeria
                  </p>
                  <p className="text-sm text-slate-500">
                    2024 · First Class (Honours), CGPA: 4.57/5.00 (Top 1% Class
                    Rank)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="border-0 shadow-sm bg-slate-50 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mt-8">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-800 mt-8">
                  Experience
                </h3>
                {/* <h4 className="text-sm text-slate-600 mt-2">
                  Where I have worked
                </h4> */}
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium text-slate-700">
                    Research Assistant — Dept. of Quantity Surveying, Obafemi
                    Awolowo University
                  </p>
                  <p className="text-sm text-slate-500">
                    Sept. 2024 - Present · Received training in scientific
                    writing (IMRD methodology) and the PRISMA framework for
                    systematic reviews.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-slate-700">
                    Undergraduate Researcher — Dept. of Quantity Surveying,
                    Obafemi Awolowo University
                  </p>
                  <p className="text-sm text-slate-500">
                    Oct. 2023 - Sept 2024 · Led a project titled "Assessment of
                    Construction 4.0 Technologies for Sustainable Construction
                    in Lagos State, Nigeria"
                  </p>
                </div>

                <div>
                  <p className="font-medium text-slate-700">
                    Intern — Etteh Aro and Partners Consulting Engineers, Ibadan
                  </p>
                  <p className="text-sm text-slate-500">
                    Feb. 2025 - April 2025 · Collaborated on preparing the
                    program of works (Gantt charts) for commercial projects to
                    track progress.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-slate-700">
                    Intern — Collaborative Effortwill Works, Ibadan
                  </p>
                  <p className="text-sm text-slate-500">
                    Feb. 2023 - Sept 2023 · Managed documentation and reporting
                    of financial expenses for cost monitoring.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-slate-700">
                    3D Modeller — Freelance.
                  </p>
                  <p className="text-sm text-slate-500">
                    2019 - Present · Created 3D architectural models and
                    renderings using SketchUp and Autodesk Revit to improve
                    client visualization.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-slate-700">
                    Academic Tutor — National Association of Quantity Surveying
                    Students
                  </p>
                  <p className="text-sm text-slate-500">
                    2021 - 2025 · delivered tutorials to 40 fourth-year
                    undergraduates on Measurement of Mechanical and Electrical
                    Services.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-slate-700">
                    Software Trainer — National Association of Quantity
                    Surveying Students
                  </p>
                  <p className="text-sm text-slate-500">
                    April 2024 - May 2024 · Provided hands-on training for 10
                    students on Autodesk Revit, PlanSwift, Microsoft Excel, and
                    Microsoft Project.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Background Card */}
          <Card className="border-0 shadow-sm bg-slate-50/50 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mt-10">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-800 mt-10">
                  Background
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{background}</p>
            </CardContent>
          </Card>

          {/* Career Focus Card */}
          <Card className="border-0 shadow-sm bg-slate-50/50 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mt-10">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-800 mt-10">
                  Career Focus
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{focus}</p>
            </CardContent>
          </Card>
        </div>

        {/* Research Interests */}
        <Card className="border-0 shadow-sm bg-gradient-to-br from-slate-800 to-slate-900 mt-8 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mt-6 mb-6">
              <div className="w-10 mt-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mt-10">
                Research Interests & Focus Area
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm font-medium border border-white/10"
                >
                  {interest}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
