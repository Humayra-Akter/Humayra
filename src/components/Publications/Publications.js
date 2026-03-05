import React from "react";

const PublicationCard = ({ title, status, statusColor, description, doi }) => (
  <div className="rounded-2xl border-x border-slate-500 bg-slate-900 backdrop-blur-xl py-5 px-6 shadow-xl hover:shadow-primary/30 transition-transform duration-300 hover:-translate-y-0.5">
    <h4 className="text-lg">{title}</h4>

    <div className="flex flex-wrap items-center gap-3 mt-1">
      <p
        style={{ fontFamily: "'Esteban'" }}
        className={`text-sm ${statusColor}`}
      >
        {status}
      </p>

      {doi && (
        <a
          href={doi}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
        >
          View Paper
        </a>
      )}
    </div>

    <p
      style={{ fontFamily: "'Esteban'" }}
      className="text-gray-200 mt-3 leading-relaxed"
    >
      {description}
    </p>
  </div>
);

const Publications = () => {
  return (
    <section
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
      className="py-20 px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl text-primary mb-12 text-center">Publications</h2>

      {/* Thesis / Conference Publication */}
      <div className="mb-14 text-justify">
        <h3 className="text-2xl text-primary mb-4">
          Thesis & Conference Publication
        </h3>

        <PublicationCard
          title="Smart Pricing in Online Marketplaces: A Machine Learning and Analytics Framework"
          status="Published — IEEE STI 2025"
          statusColor="text-green-300"
          doi="https://ieeexplore.ieee.org/document/11367595/"
          description="Developed a machine learning-based pricing framework for online marketplaces using extensive feature engineering and ensemble learning. Evaluated 14 regression models and proposed a stacked ensemble achieving R² = 0.8633, RMSE = 303.83, and MAE = 215.88 on laptop price prediction. The final model was deployed as a real-time Streamlit web application for practical decision support."
        />
      </div>

      {/* Journal Article */}
      <div className="mb-14 text-justify">
        <h3 className="text-2xl text-primary mb-4">Journal Article</h3>

        <PublicationCard
          title="Leak-Aware and Explainable Machine Learning for Population-Level ADHD Risk Modeling"
          status="Under Review — Springer Journal (Desk Review Stage)"
          statusColor="text-purple-300"
          description="Designed a dual-pipeline, leak-aware machine learning framework to distinguish diagnostic replication from genuine population-level ADHD risk using nationally representative survey data (n ≈ 50,280). Engineered theory-driven contextual composites and interaction terms, compared linear and ensemble models, quantified performance inflation due to diagnostic leakage (ROC-AUC ≈ 1 vs. ≈ 0.77), and applied SHAP analysis with bootstrap validation to reveal heterogeneous socioeconomic risk patterns."
        />
      </div>

      {/* Conference Papers */}
      <div>
        <h3 className="text-2xl text-primary mb-4">Conference Papers</h3>

        <div className="space-y-8 text-justify">
          <PublicationCard
            title="LaundryMate: A React Native-Based Mobile Application for Smart Laundry Management"
            status="Accepted — IEEE QPAIN 2025"
            statusColor="text-green-300"
            doi="https://ieeexplore.ieee.org/document/11171674"
            description="Developed a cross-platform mobile application using React Native to streamline laundry management for busy individuals."
          />

          <PublicationCard
            title="A Reproducible Baseline Study of Closed-Set Speaker Identification Using MFCCs and a Lightweight DNN"
            status="Accepted — IEEE QPAIN 2026"
            statusColor="text-green-300"
            description="Developed a lightweight MFCC-DNN pipeline for speaker identification, achieving 95% validation accuracy and 0.60% EER on the TIMIT dataset, demonstrating efficiency and reproducibility in controlled biometric settings."
          />

          <PublicationCard
            title="An IoT-Based Multisensor System for Real-Time Sleep Stage Monitoring"
            status="Accepted — IEEE QPAIN 2026"
            statusColor="text-green-300"
            description="Designed a low-cost IoT system integrating multimodal biosensors for real-time sleep stage classification with mobile interface support."
          />
        </div>
      </div>
    </section>
  );
};

export default Publications;
