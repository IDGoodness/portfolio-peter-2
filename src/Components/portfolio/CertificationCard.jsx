import React, { useState } from "react";
import { Card } from "../ui/card";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export default function CertificationCard({ certification }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <Card
        className="group overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-slate-200 cursor-pointer bg-white"
        onClick={() => certification.certificate_image && setShowPreview(true)}
      >
        {/* Certificate Image Preview */}
        {certification.certificate_image ? (
          <div className="aspect-[4/3] overflow-hidden bg-slate-50 relative">
            <img
              src={certification.certificate_image}
              alt={certification.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <ExternalLink className="w-4 h-4 text-slate-600" />
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
            <Award className="w-16 h-16 text-slate-300" />
          </div>
        )}

        {/* Card Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-semibold text-slate-800 leading-tight line-clamp-2">
              {certification.title}
            </h3>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Building className="w-4 h-4 text-slate-400" />
              <span>{certification.issuing_body}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{certification.year}</span>
            </div>
          </div>

          {certification.description && (
            <p className="text-sm text-slate-500 line-clamp-2 mb-3">
              {certification.description}
            </p>
          )}

          {certification.credential_url && (
            <a
              href={certification.credential_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              <span>View Credential</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </Card>

      {/* Image Preview Dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-semibold text-slate-800">
              {certification.title}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-4">
            <img
              src={certification.certificate_image}
              alt={certification.title}
              className="w-full h-auto rounded-lg shadow-sm"
            />
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
              <div>
                <p className="font-medium text-slate-700">
                  {certification.issuing_body}
                </p>
                <p className="text-sm text-slate-500">{certification.year}</p>
              </div>
              {certification.credential_url && (
                <a
                  href={certification.credential_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
