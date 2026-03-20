import React, { useMemo } from "react";
import ClayCard from "./ClayCard";
import { jobs } from "../data/jobs";
import { formatShortDate } from "../utils/date";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";

const CurrentJobs = () => {
  const openJobs = useMemo(() => {
    return jobs
      .filter((j) => j.status === "running")
      .sort((a, b) => (a.closingDate > b.closingDate ? 1 : -1))
      .slice(0, 3);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Available Jobs
          </h2>
          <p className="text-blue-900/70 mt-3 max-w-2xl">
            Explore current roles we are hiring for.
          </p>
        </div>

        <Link
          to="/jobs"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-400 text-blue-900 font-semibold clay-pressable"
        >
          View All
        </Link>
      </div>

      {openJobs.length === 0 ? (
        <ClayCard className="p-8">
          <p className="text-blue-900/70">No open jobs found right now.</p>
        </ClayCard>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {openJobs.map((j) => (
            <ClayCard key={j.id} className="p-7 transition-transform hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <FaBriefcase className="text-cyan-500" />
                    <span className="clay-pill inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-blue-900">
                      {j.employmentType}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mt-3">
                    {j.title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 text-blue-900/70">
                <p className="text-sm">
                  <span className="font-semibold">Location:</span> {j.location}
                </p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Closing:</span> {formatShortDate(j.closingDate)}
                </p>
              </div>

              <p className="text-blue-900/70 mt-4">{j.description}</p>

              <div className="mt-6">
                <Link to="/jobs" className="text-blue-900 font-semibold hover:underline">
                  View role
                </Link>
              </div>
            </ClayCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default CurrentJobs;

