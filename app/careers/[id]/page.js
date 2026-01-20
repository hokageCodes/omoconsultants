import Link from "next/link";
import { notFound } from "next/navigation";
import { jobs } from "../jobsData";
import ShareBar from "./share-bar";

export const metadata = {
  title: "Careers - OMO Consultants",
  description: "Open roles at OMO Consultants",
};

export default async function JobDetails({ params }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) return notFound();

  const mailtoHref = `mailto:${job.email}?subject=${encodeURIComponent(
    `Application: ${job.title}`
  )}`;

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <Link href="/careers" className="text-xs sm:text-sm text-teal-700 font-semibold underline">
              Careers / Job Detail
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight break-words">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
              <span>{job.location}</span>
              <span>• {job.mode}</span>
              <span>• {job.department}</span>
              {job.posted && <span className="hidden sm:inline">• Posted {job.posted}</span>}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Overview</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{job.overview || job.summary}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Key Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              {job.responsibilities?.map((item) => (
                <li key={item} className="break-words">{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">What We Expect From You</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              {job.expectations?.map((item) => (
                <li key={item} className="break-words">{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
            <a
              href={mailtoHref}
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 text-center"
            >
              Apply for this Position
            </a>
            <ShareBar job={job} />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 sm:space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Job Overview</h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              {job.salaryRange && (
                <div>
                  <p className="font-semibold text-gray-900">Salary Range</p>
                  <p className="break-words">{job.salaryRange}</p>
                </div>
              )}
              {job.startDate && (
                <div>
                  <p className="font-semibold text-gray-900">Start Date</p>
                  <p>{job.startDate}</p>
                </div>
              )}
              {job.applicationDeadline && (
                <div>
                  <p className="font-semibold text-gray-900">Application Deadline</p>
                  <p>{job.applicationDeadline}</p>
                </div>
              )}
              {job.workingStyle && (
                <div>
                  <p className="font-semibold text-gray-900">Working Style</p>
                  <p className="break-words">{job.workingStyle}</p>
                </div>
              )}
            </div>
            <a
              href={mailtoHref}
              className="mt-4 sm:mt-5 inline-flex w-full justify-center px-4 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700"
            >
              Quick Apply
            </a>
            <p className="text-xs text-gray-500 mt-2 text-center">
              We reply to everyone. Submitting your application takes less than 2 minutes.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-2">Need help?</p>
            <p className="mb-3">
              Questions about this role or the recruitment process? Reach out to our team.
            </p>
            <a href={`mailto:${job.email}`} className="text-teal-700 font-semibold break-all">{job.email}</a>
          </div>
        </aside>
      </section>
    </main>
  );
}
