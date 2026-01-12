import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Background Card */}
          <Card className="border-0 shadow-sm bg-slate-50/50 hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-800">
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
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium text-slate-800">
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