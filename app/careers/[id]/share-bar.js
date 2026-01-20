"use client";
import { useEffect, useMemo, useState } from "react";

export default function ShareBar({ job }) {
  const [jobUrl, setJobUrl] = useState("");

  useEffect(() => {
    setJobUrl(window.location.href);
  }, []);

  const shareLinks = useMemo(() => {
    if (!jobUrl || !job) return null;
    const text = encodeURIComponent(`${job.title} at OMO Consultants`);
    const encodedUrl = encodeURIComponent(jobUrl);
    return {
      whatsapp: `https://wa.me/?text=${text}%20${encodedUrl}`,
      x: `https://x.com/intent/tweet?text=${text}&url=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };
  }, [jobUrl, job]);

  if (!shareLinks) return null;

  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
      <span className="text-gray-600">Share this Job</span>
      <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer" className="underline text-teal-700">
        WhatsApp
      </a>
      <a href={shareLinks.x} target="_blank" rel="noreferrer" className="underline text-teal-700">
        X
      </a>
      <a href={shareLinks.linkedin} target="_blank" rel="noreferrer" className="underline text-teal-700">
        LinkedIn
      </a>
    </div>
  );
}
