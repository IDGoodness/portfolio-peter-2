import React from "react";
import ContactForm from "../Components/portfolio/ContactForm";
import { Card, CardContent } from "../Components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adewuyipeter878@gmail.com",
      link: "mailto:adewuyipeter878@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 (814) 085-5756",
      link: "tel:+2348140855756",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nigeria",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Peter12Rock",
      color: "hover:text-slate-700",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/peter-adewuyi",
      color: "hover:text-blue-600",
    },
    // {
    //   icon: Twitter,
    //   name: "Twitter",
    //   url: "https://twitter.com",
    //   color: "hover:text-blue-400",
    // },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">Get In Touch</h1>
          <p className="text-lg text-slate-600">
            I'd love to hear from you. Whether you have a question, a project
            proposal, or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Contact Information Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-lg transition-shadow p-4"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-900 font-semibold hover:text-slate-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-semibold">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Send me a Message
          </h2>
          <p className="text-slate-600">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>
          <ContactForm />
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">
            Connect on Social Media
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-100 rounded-lg text-slate-600 transition-colors ${social.color}`}
                  title={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Response Time Info */}
        <Card className="border-slate-200 bg-slate-50 p-2">
          <CardContent className="p-6">
            <h4 className="font-semibold text-slate-900 mb-2">Response Time</h4>
            <p className="text-slate-700">
              I typically respond to messages within 24-48 hours. For urgent
              matters, please include "URGENT" in the subject line.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
