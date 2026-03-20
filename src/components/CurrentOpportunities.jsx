import React, { useMemo } from "react";
import { opportunities } from "../data/opportunities";
import { formatShortDate } from "../utils/date";
import ClayCard from "./ClayCard";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

const typeLabel = {
  learnership: "Learnership",
  internship: "Internship",
};

const CurrentOpportunities = () => {
  const running = useMemo(() => {
    return opportunities
      .filter((o) => o.status === "running")
      .sort((a, b) => (a.endDate > b.endDate ? 1 : -1))
      .slice(0, 3);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Current Learnerships & Internships
          </h2>
          <p className="text-blue-900/70 mt-3 max-w-2xl">
            View opportunities currently running and closing soon.
          </p>
        </div>

        <Link
          to="/programs"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-400 text-blue-900 font-semibold clay-pressable"
        >
          View All
        </Link>
      </div>

      {running.length === 0 ? (
        <ClayCard className="p-8">
          <p className="text-blue-900/70">No current learnerships/internships found.</p>
        </ClayCard>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {running.map((o) => (
            <ClayCard key={o.id} className="p-7 transition-transform hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-cyan-500" />
                    <span className="clay-pill inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-blue-900">
                      {typeLabel[o.category] ?? o.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mt-3">
                    {o.title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 text-blue-900/70">
                <p className="text-sm">
                  <span className="font-semibold">Location:</span> {o.location}
                </p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Dates:</span> {formatShortDate(o.startDate)} -{" "}
                  {formatShortDate(o.endDate)}
                </p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Deadline:</span> {formatShortDate(o.applicationDeadline)}
                </p>
              </div>

              <p className="text-blue-900/70 mt-4">{o.description}</p>

              <div className="mt-6">
                <Link
                  to="/programs"
                  className="text-blue-900 font-semibold hover:underline"
                >
                  Explore details
                </Link>
              </div>
            </ClayCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default CurrentOpportunities;

