import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import {
  Menu,
  X,
  Home,
  Award,
  Mail,
  Wrench,
  FlaskConical,
  Trophy,
  Heart,
} from "lucide-react";
import { Button } from "./Components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", page: "Home", icon: Home },
    { name: "Industrial", page: "IndustrialExperience", icon: Wrench },
    { name: "Conferences", page: "ResearchExperience", icon: FlaskConical },
    { name: "Certifications", page: "Certifications", icon: Award },
    { name: "Awards", page: "Awards", icon: Trophy },
    { name: "Volunteering", page: "Volunteering", icon: Heart },
    // { name: "Contact", page: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              className="text-lg font-semibold text-slate-800 hover:text-slate-600 transition-colors"
            >
              Peter Adewuyi
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentPageName === link.page;
                return (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-slate-100 text-slate-800"
                        : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-medium"
              >
                <Link to={createPageUrl("Contact")}>Get in Touch</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-100">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = currentPageName === link.page;
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.page}
                      to={createPageUrl(link.page)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-slate-100 text-slate-800"
                          : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-3 mt-3 border-t border-slate-100">
                  <Button
                    asChild
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link to={createPageUrl("Contact")}>Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="text-center">
              <div className="flex items-center gap-3 ml-4 mb-4">
                <img
                  src="/profile.ico"
                  alt="ProfileImg"
                  className="w-10"
                />
                <h3 className="text-lg font-semibold text-slate-800">
                  Peter Oluwafemi Adewuyi
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advancing Construction Management of Sustainable and Smart
                Cities through technology, innovations and research.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-sm text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
                Contact
              </h4>
              <p className="text-sm text-slate-600">
                adewuyipeter878@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-[8px] text-green-800">
              Designed with ❤️ by{" "}
              <a href="https://github.com/IDGoodness" target="_blank">Cḥrēstótēs🔥</a> - His
              brother😁
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
