import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const CONTACT_EMAIL = "adewuyipeter878@gmail.com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create mailto link with form data
    const subject = formData.subject || "Portfolio Contact";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Card className="border border-slate-200 shadow-sm bg-white">
      <CardContent className="p-8">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Ready to Send!
            </h3>
            <p className="text-slate-600 mb-1">
              Your email client has been opened with your message.
            </p>
            <p className="text-sm text-slate-500">
              Just review and click send!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-900 font-semibold">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: null });
                  }}
                  className={`border-slate-200 focus:border-slate-400 focus:ring-slate-400 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-900 font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: null });
                  }}
                  className={`border-slate-200 focus:border-slate-400 focus:ring-slate-400 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-slate-900 font-semibold">
                Subject
              </Label>
              <Input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="border-slate-200 focus:border-slate-400 focus:ring-slate-400"
                placeholder="Project Inquiry"
              />
              <p className="text-xs text-slate-500">Optional</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-900 font-semibold">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: null });
                }}
                className={`border-slate-200 focus:border-slate-400 focus:ring-slate-400 resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Tell me about your project, question, or inquiry..."
              />
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message}</p>
              )}
              <p className="text-xs text-slate-500">
                {formData.message.length}/500 characters
              </p>
            </div>

            <Button
              type="submit"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            </Button>

            {/* <p className="text-xs text-slate-500">
              <AlertCircle className="w-3 h-3 inline mr-1" />
              Clicking the button will open your default email client with your
              message pre-filled.
            </p> */}
          </form>
        )}
      </CardContent>
    </Card>
  );
}
