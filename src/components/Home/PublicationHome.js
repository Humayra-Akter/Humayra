import React from "react";
import { Link } from "react-router-dom";

const publications = [
  {
    title:
      "Smart Pricing in Online Marketplaces: A Machine Learning and Analytics Framework",
    venue: "STI 2025",
    status: "Accepted",
  },
  {
    title:
      "LaundryMate: A React Native-Based Mobile Application for Smart Laundry Management",
    venue: "IEEE QPAIN 2025",
    status: "Published",
  },
];

const statusColor = {
  Published: "bg-green-500/20 text-green-400",
  Accepted: "bg-blue-500/20 text-blue-400",
  Submitted: "bg-yellow-500/20 text-yellow-400",
  "In Preparation": "bg-purple-500/20 text-purple-400",
};

const PublicationHome = () => {
  return (
    <section
      style={{ fontFamily: "'Poetsen One'" }}
      className="pb-6 max-w-6xl mx-auto"
    >
      <h3 className="text-3xl mt-10 mb-6 text-primary text-center">
        Publications
      </h3>

      <div className="flex items-end justify-end mb-10">
        <Link
          to="/publications"
          className="text-sm text-primary hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="rounded-2xl border-x border-slate-500 backdrop-blur-xl py-5 px-6 shadow-xl hover:shadow-primary/30 transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-between items-start gap-4">
              <h4
                className="text-primary font-semibold leading-snug"
                style={{ fontFamily: "sans-serif" }}
              >
                {pub.title}
              </h4>
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  statusColor[pub.status]
                }`}
              >
                {pub.status}
              </span>
            </div>

            <p
              style={{ fontFamily: "'Esteban'" }}
              className="text-sm text-gray-300 mt-2"
            >
              {pub.venue}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationHome;
