import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { opportunities } from "../data/opportunities";
import ClayCard from "./ClayCard";
import { formatShortDate } from "../utils/date";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

import { fadeIn } from "../variants";

const typeLabel = {
  learnership: "Learnership",
  internship: "Internship",
};

const Opportunities = () => {
  const navigate = useNavigate();
  const [typeFilter, setTypeFilter] = useState("all");
  const [onlyCurrent, setOnlyCurrent] = useState(true);

  const visible = useMemo(() => {
    const base = opportunities
      .filter((o) => (onlyCurrent ? o.status === "running" : o.status !== "none"))
      .filter((o) => (typeFilter === "all" ? true : o.category === typeFilter))
      .sort((a, b) => (a.applicationDeadline > b.applicationDeadline ? 1 : -1));
    return base;
  }, [onlyCurrent, typeFilter]);

  const handleApply = (o) => {
    navigate("/contact", {
      state: {
        prefillMessage: `Hello Makhensa Global, I would like to apply for: ${o.title}. Please advise on the application process and next steps.`,
      },
    });
  };

  const currentCount = useMemo(() => {
    return opportunities.filter((o) => o.status === "running").length;
  }, []);

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
            Opportunities
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white/80 mt-4 max-w-2xl"
          >
            Learnerships and internships currently running, with clear deadlines and
            eligibility details.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              type="button"
              onClick={() => setOnlyCurrent(true)}
              className={`px-5 py-2 rounded-xl font-semibold clay-card transition ${
                onlyCurrent ? "bg-cyan-400 text-blue-900" : "bg-white/20 text-white"
              }`}
            >
              Current ({currentCount})
            </button>
            <button
              type="button"
              onClick={() => setOnlyCurrent(false)}
              className={`px-5 py-2 rounded-xl font-semibold clay-card transition ${
                !onlyCurrent ? "bg-cyan-400 text-blue-900" : "bg-white/20 text-white"
              }`}
            >
              All upcoming
            </button>
          </div>
        </div>
      </section>

      {/* FILTERS + LIST */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
          <div className="flex flex-wrap gap-3">
            {[
              { id: "all", label: "All" },
              { id: "learnership", label: "Learnerships" },
              { id: "internship", label: "Internships" },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTypeFilter(t.id)}
                className={`px-4 py-2 rounded-xl font-semibold clay-card transition ${
                  typeFilter === t.id ? "bg-cyan-400 text-blue-900" : ""
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="text-blue-900/70">
            Showing <span className="font-semibold text-blue-900">{visible.length}</span>{" "}
            {visible.length === 1 ? "opportunity" : "opportunities"}
          </div>
        </div>

        {visible.length === 0 ? (
          <ClayCard className="p-8">
            <p className="text-blue-900/70">No opportunities match your filters right now.</p>
          </ClayCard>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {visible.map((o) => {
              const Icon = o.category === "learnership" ? FaGraduationCap : MdOutlineWork;
              return (
                <ClayCard key={o.id} className="p-7 transition-transform hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 min-w-0">
                      <Icon className="text-cyan-500 text-xl mt-1 shrink-0" />
                      <div className="min-w-0">
                        <span className="clay-pill inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-blue-900">
                          {typeLabel[o.category] ?? o.category}
                        </span>
                        <h2 className="text-xl font-bold text-blue-900 mt-3">
                          {o.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <p className="text-blue-900/70 mt-3">{o.description}</p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-4">
                    <div className="text-sm text-blue-900/70">
                      <span className="font-semibold">Location:</span> {o.location}
                    </div>
                    <div className="text-sm text-blue-900/70">
                      <span className="font-semibold">Dates:</span>{" "}
                      {formatShortDate(o.startDate)} - {formatShortDate(o.endDate)}
                    </div>
                    <div className="text-sm text-blue-900/70">
                      <span className="font-semibold">Deadline:</span>{" "}
                      {formatShortDate(o.applicationDeadline)}
                    </div>
                    <div className="text-sm text-blue-900/70">
                      <span className="font-semibold">Intake:</span> {o.intakeLabel}
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => handleApply(o)}
                      className="w-full bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-semibold py-3 rounded-xl clay-pressable transition"
                    >
                      Apply / Enquire
                    </button>
                  </div>
                </ClayCard>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Opportunities;

