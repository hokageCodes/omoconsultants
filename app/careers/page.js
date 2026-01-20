"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { jobs } from "./jobsData";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [baseUrl, setBaseUrl] = useState("https://omoconsultants.com");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin);
    }
  }, []);

  const shareLinks = useMemo(() => {
    if (!selectedJob) return null;
    const jobUrl = `${baseUrl}/careers/${selectedJob.id}`;
    const text = encodeURIComponent(`${selectedJob.title} at OMO Consultants`);
    const encodedUrl = encodeURIComponent(jobUrl);

    return {
      whatsapp: `https://wa.me/?text=${text}%20${encodedUrl}`,
      x: `https://x.com/intent/tweet?text=${text}&url=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      jobUrl,
    };
  }, [baseUrl, selectedJob]);

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const mailtoHref = selectedJob
    ? `mailto:${selectedJob.email}?subject=${encodeURIComponent(
        `Application: ${selectedJob.title}`
      )}&body=${encodeURIComponent(
        `Hi OMO Consultants team,%0D%0A%0D%0AI'd like to apply for the ${selectedJob.title} role.%0D%0A%0D%0AThanks!`
      )}`
    : "#";

  return (
    <main className="bg-white text-gray-900">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-teal-600 uppercase">
              Work with OMO
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-3">
              Browse our latest opportunities
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Shape the future of life sciences with us.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col gap-3"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 truncate">{job.department} · {job.location}</p>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 break-words">{job.title}</h2>
                    <p className="text-xs sm:text-sm text-gray-500">{job.mode} · Posted {job.posted}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{job.summary}</p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/careers/${job.id}`}
                    className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-900 hover:border-teal-500 hover:text-teal-700"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleApply(job)}
                    className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              ×
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Apply for {selectedJob.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please confirm you have read the job requirements before applying.
              <Link
                href={`/careers/${selectedJob.id}`}
                className="text-teal-700 font-semibold underline ml-1"
                onClick={() => setSelectedJob(null)}
              >
                View job requirements
              </Link>
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={mailtoHref}
                className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700"
              >
                Send Email Application
              </a>
              {shareLinks && (
                <div className="flex flex-wrap gap-2 text-sm font-semibold text-teal-700">
                  <span className="text-gray-500 mr-2">Share:</span>
                  <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer" className="underline">WhatsApp</a>
                  <a href={shareLinks.x} target="_blank" rel="noreferrer" className="underline">X</a>
                  <a href={shareLinks.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
                </div>
              )}
            </div>

            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-800 mb-1">What to include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Brief intro</li>
                <li>Latest CV</li>
                <li>Availability and notice period</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
