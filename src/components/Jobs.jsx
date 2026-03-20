import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { jobs } from "../data/jobs";
import ClayCard from "./ClayCard";
import { formatShortDate } from "../utils/date";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "../variants";
import { FaBriefcase } from "react-icons/fa";

const Jobs = () => {
  const navigate = useNavigate();
  const [locationFilter, setLocationFilter] = useState("all");

  const locations = useMemo(() => {
    const unique = Array.from(new Set(jobs.map((j) => j.location)));
    return ["all", ...unique];
  }, []);

  const openJobs = useMemo(() => {
    return jobs
      .filter((j) => j.status === "running")
      .filter((j) => (locationFilter === "all" ? true : j.location === locationFilter))
      .sort((a, b) => (a.closingDate > b.closingDate ? 1 : -1));
  }, [locationFilter]);

  const handleApply = (job) => {
    navigate("/contact", {
      state: {
        prefillMessage: `Hello Makhensa Global, I would like to apply for the role: ${job.title}. Please advise on the application process and next steps.`,
      },
    });
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-blue-900/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.h1
            variants={fadeIn("down", 0.05)}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Jobs
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white/80 mt-4 max-w-2xl"
          >
            Browse currently available roles. Submit an enquiry to our team for application guidance.
          </motion.p>

          <div className="mt-8">
            <div className="flex flex-wrap gap-3">
              {locations.slice(0, 6).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocationFilter(loc)}
                  className={`px-4 py-2 rounded-xl font-semibold clay-card transition ${
                    locationFilter === loc ? "bg-cyan-400 text-blue-900" : ""
                  }`}
                >
                  {loc === "all" ? "All locations" : loc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="max-w-7xl mx-auto px-6 pb-16 pt-12">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="text-blue-900/70">
            Showing <span className="font-semibold text-blue-900">{openJobs.length}</span>{" "}
            {openJobs.length === 1 ? "job" : "jobs"} open right now.
          </div>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="px-5 py-2 rounded-xl font-semibold clay-card bg-white/40 text-blue-900"
          >
            General enquiry
          </button>
        </div>

        {openJobs.length === 0 ? (
          <ClayCard className="p-8">
            <p className="text-blue-900/70">No open jobs found right now.</p>
          </ClayCard>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {openJobs.map((job) => (
              <ClayCard key={job.id} className="p-7 transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <FaBriefcase className="text-cyan-500 text-xl shrink-0" />
                    <div className="min-w-0">
                      <span className="clay-pill inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-blue-900">
                        {job.department}
                      </span>
                      <h2 className="text-xl font-bold text-blue-900 mt-2">{job.title}</h2>
                    </div>
                  </div>
                </div>

                <p className="text-blue-900/70 mt-3">{job.description}</p>

                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <div className="text-sm text-blue-900/70">
                    <span className="font-semibold">Employment:</span> {job.employmentType}
                  </div>
                  <div className="text-sm text-blue-900/70">
                    <span className="font-semibold">Location:</span> {job.location}
                  </div>
                  <div className="text-sm text-blue-900/70">
                    <span className="font-semibold">Posted:</span> {formatShortDate(job.postedDate)}
                  </div>
                  <div className="text-sm text-blue-900/70">
                    <span className="font-semibold">Closing:</span> {formatShortDate(job.closingDate)}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => handleApply(job)}
                    className="w-full bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-semibold py-3 rounded-xl clay-pressable transition"
                  >
                    Apply / Enquire
                  </button>
                </div>
              </ClayCard>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Jobs;

