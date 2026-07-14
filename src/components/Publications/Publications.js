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
          Undergraduate Thesis & Publication
        </h3>

        <PublicationCard
          title="Smart Pricing in Online Marketplaces: A Machine Learning and Analytics Framework"
          status="Published — IEEE STI 2025"
          statusColor="text-green-300"
          doi="https://ieeexplore.ieee.org/document/11367595/"
          description="Accurately predicting prices of electronic devices, particularly laptops, in online marketplaces is crucial for fair competition. This research uses a machine learning approach to estimate prices based on hardware specifications, evaluating fourteen regression models. The best-performing model, a stacked ensemble combining various regression techniques, achieved a price prediction accuracy of R28633. Deployed as a Streamlit web application, it allows users to input specifications for real-time price predictions, with the potential for extension to other electronic devices, offering a flexible tool for e-commerce platforms."
        />
      </div>

      {/* Journal Article */}
      <div className="mb-14 text-justify">
        <h3 className="text-2xl text-primary mb-4">Journal Article</h3>

        <PublicationCard
          title="Leakage-Audited Machine Learning for Childhood ADHD: Separating Symptom Overlap, Contextual Risk, and Diagnosis Discordance in National Survey Data"
          status="Under Review — Springer Journal (Desk Review Stage)"
          statusColor="text-purple-300"
          description="Developed a leakage-audited machine learning framework to predict caregiver-reported current ADHD diagnosis using national child health survey data, separating diagnosis, treatment, symptom-overlap, demographic, and contextual variables before modeling. Instead of maximizing accuracy through possible information leakage, it shows how machine learning can support responsible population-level ADHD risk stratification and diagnosis-discordance analysis."
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
            description="Mobile-based laundry service, LaundryMate, aims to enhance user experience through digital automation. Built with React Native, it offers features like smart scheduling, secure payments via Stripe, real-time order tracking, and transparent pricing. The paper covers system architecture, technology stack, implementation details, and user convenience impacts. Future updates may include AI service recommendations and real-time location tracking, marking a shift from traditional to modern digital laundry services."
          />

          <PublicationCard
            title="A Reproducible Baseline Study of Closed-Set Speaker Identification Using MFCCs and a Lightweight DNN"
            status="Accepted — IEEE QPAIN 2026"
            statusColor="text-green-300"
            doi="https://ieeexplore.ieee.org/document/11546469"
            description="This paper evaluates the use of handcrafted Mel-Frequency Cepstral Coefficient (MFCC) features in a lightweight deep neural network for closed-set speaker identification. The study is conducted on the TIMIT Acoustic-Phonetic Continuous Speech Corpus, employing an utterance-disjoint protocol where speakers are trained but evaluated on unseen utterances. The system achieves high classification accuracy and low error rates, indicating effective speaker discrimination in clean conditions. The focus is on providing a reproducible diagnostic baseline for MFCC-based identification rather than presenting novel algorithms, offering comprehensive performance analysis for future research in controlled scenarios."
          />
          <PublicationCard
            title="A Terrain-Aware Instance Segmentation Framework for Building-Level Flood Risk Mapping from High-Resolution Satellite Imagery"
            status="Under Preparation"
            statusColor="text-green-300"
            description="Coastal and deltaic areas of Bangladesh are often affected by floods and other environmental hazards, with traditional disaster planning relying on slow and expensive field surveys. This study introduces an automated approach using high-resolution satellite imagery to identify structurally vulnerable buildings. By classifying roofs into lightweight or reinforced categories using a YOLO-based segmentation model, the method creates geographic building polygons. These are analyzed alongside hazard layers to assign risk scores based on roof vulnerability and local hazards, facilitating quicker risk assessment for flood preparedness in affected regions."
          />

          <PublicationCard
            title="An IoT-Based Multisensor System for Real-Time Sleep Stage Monitoring"
            status="Accepted — IEEE QPAIN 2026"
            statusColor="text-green-300"
            doi="https://ieeexplore.ieee.org/document/11545574"
            description="Sleep disorders are increasingly prevalent, contributing to various health risks. Polysomnography (PSG) is the gold standard for sleep assessment but is limited by cost and complexity. In contrast, consumer wearable devices offer partial alternatives but have moderate accuracy compared to PSG. This paper introduces a cost-effective, open-source IoT multisensor system for real-time home sleep monitoring, utilizing motion, heart-rate, and temperature sensors on an Arduino Mega. A lightweight, rule-based algorithm classifies sleep stages without cloud dependency. Preliminary tests indicate feasibility for basic sleep-stage differentiation, warranting further development with extensive evaluation."
          />
        </div>
      </div>
    </section>
  );
};

export default Publications;
