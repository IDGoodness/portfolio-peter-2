import React, { useMemo, useState, useEffect } from "react";
import GenericPage from "./GenericPage";
import { Card } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../Components/ui/dialog";
import { ChevronLeft, ChevronRight, ZoomIn, FileText } from "lucide-react";

// Import work images
import img1 from "../assets/work/IMG_20221014_134800.jpg";
import img2 from "../assets/work/IMG_20220914_123818.jpg";
import img3 from "../assets/work/IMG_20220816_124144.jpg";
import img3b from "../assets/work/IMG_20220816_124144 (1).jpg";
import img4 from "../assets/work/original_6b51adfd-c697-482b-9e4c-7d28705d42cd_IMG_20220816_111233.jpg";
import img4b from "../assets/work/original_6b51adfd-c697-482b-9e4c-7d28705d42cd_IMG_20220816_111233 (1).jpg";
import doc1 from "../assets/work/Upgrade Letter – NIQS (1)_page-0001.jpg";

export default function IndustrialExperience() {
  // Build items with inferred metadata
  const items = useMemo(
    () => [
      {
        id: "img1",
        src: img1,
        title: "Site Progress - 2022-10-14",
        // description: "On-site photo showing progress of building works.",
        tag: "Photo",
      },
      {
        id: "img2",
        src: img2,
        title: "Site Equipment - 2022-09-14",
        // description: "Equipment and scaffolding on site.",
        tag: "Photo",
      },
      {
        id: "img3",
        src: img3,
        title: "Survey Capture - 2022-08-16",
        // description: "Survey and measurements being recorded.",
        tag: "Photo",
      },
      // {
      //   id: "img3b",
      //   src: img3b,
      //   title: "Survey Capture (alt) - 2022-08-16",
      //   description: "Alternate angle of survey activities.",
      //   tag: "Photo",
      // },
      {
        id: "img4",
        src: img4,
        title: "On-site Team - 2022-08-16",
        // description: "Team photo and site briefing.",
        tag: "Photo",
      },
      // {
      //   id: "img4b",
      //   src: img4b,
      //   title: "On-site Team (alt) - 2022-08-16",
      //   description: "Alternate team photo.",
      //   tag: "Photo",
      // },
      {
        id: "doc1",
        src: doc1,
        title: "Upgrade Letter (NIQS)",
        // description: "Official upgrade letter from NIQS.",
        tag: "Document",
      },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = items; // everything is a photo; keep the variable name for compatibility

  // When modal open, attach keyboard handlers for navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((idx) => (idx + 1) % filtered.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((idx) => (idx - 1 + filtered.length) % filtered.length);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered.length]);

  return (
    <GenericPage title="Industrial Experience">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-800">
              Work Gallery
            </h2>
            <p className="text-slate-500 text-sm sm:text-sm">
              Site photos and important project images.
            </p>
          </div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white"
              onClick={() => {
                setActiveIndex(index);
                setOpen(true);
              }}
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                  <img
                    src={item.src}
                    alt={item.title}
                    onError={(e) => {
                      console.error(
                        "Failed to load work image:",
                        e.currentTarget.src
                      );
                      e.currentTarget.src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect width='100%' height='100%' fill='%23f8fafc'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23938f8f' font-family='Arial, Helvetica, sans-serif' font-size='20'>Image not available</text></svg>";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-xs opacity-90">{item.tag}</p>
                  </div>
                </div>

                <div className="absolute left-3 top-3 flex gap-2">
                  <span className="inline-flex items-center gap-1 bg-white/90 text-slate-700 rounded-full px-2 py-1 text-xs font-medium">
                    {item.tag === "Document" ? (
                      <FileText className="w-3 h-3" />
                    ) : (
                      <ZoomIn className="w-3 h-3" />
                    )}
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-slate-600 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal preview */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-[90vw] w-full p-0 overflow-hidden bg-transparent shadow-none">
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img
                src={filtered[activeIndex]?.src}
                alt={filtered[activeIndex]?.title}
                onError={(e) => {
                  console.error(
                    "Failed to load modal image:",
                    e.currentTarget.src
                  );
                  e.currentTarget.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'><rect width='100%' height='100%' fill='%23f8fafc'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23938f8f' font-family='Arial, Helvetica, sans-serif' font-size='26'>Image not available</text></svg>";
                }}
                className="w-full h-[60vh] object-contain bg-black/5"
              />

              <div className="absolute left-4 top-4 flex gap-2">
                <Button
                  variant="ghost"
                  onClick={() =>
                    setActiveIndex(
                      (i) => (i - 1 + filtered.length) % filtered.length
                    )
                  }
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant="ghost"
                  onClick={() =>
                    setActiveIndex((i) => (i + 1) % filtered.length)
                  }
                >
                  <ChevronRight />
                </Button>
              </div>

              <div className="p-6">
                <DialogHeader>
                  <DialogTitle>{filtered[activeIndex]?.title}</DialogTitle>
                  <p className="text-sm text-slate-500 mt-1">
                    {filtered[activeIndex]?.description}
                  </p>
                </DialogHeader>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </GenericPage>
  );
}
