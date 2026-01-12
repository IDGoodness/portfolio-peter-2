import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import cvPdf from "@/assets/Peter Adewuyi_CV.pdf";
import profileImg from "@/assets/profile.jpeg";

export default function HeroSection({
  name = "Peter Oluwafemi Adewuyi",
  title = "Professional Title",
  bio = "A brief professional introduction...",
  profileImage = profileImg,
  cvUrl = cvPdf,
  linkedinUrl = "https://www.linkedin.com/in/peter-adewuyi",
  githubUrl = "https://github.com/Peter12Rock",
  email = "adewuyipeter878@gmail.com",
}) {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-4 leading-tight">
              {name}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 font-light mb-6">
              {title}
            </p>
            <p className="text-slate-600 leading-relaxed max-w-lg mb-8 text-base">
              {bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                asChild
                className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                <a href={cvUrl} download="Peter_Adewuyi_CV.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-5 rounded-lg font-medium transition-all duration-300"
              >
                <a href={`mailto:${email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500">Connect:</span>
              <div className="flex gap-3">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 text-slate-600" />
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-300"
                >
                  <Github className="w-4 h-4 text-slate-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 border border-slate-200 rounded-full opacity-60" />
              <div className="absolute -inset-8 border border-slate-100 rounded-full opacity-40" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-slate-600">
                    Available (plugin-hmr-test)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
