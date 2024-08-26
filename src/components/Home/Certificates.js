import React, { useEffect, useState } from "react";
import txbd from "../../images/TechnocianBD.png";
import devSprint from "../../images/devSprint.jpg";
import caseCraft from "../../images/BUETCasecraft.jpg";
import kiron from "../../images/kironPython.png";
import leetcon from "../../images/leetcon.jpg";
import ieee from "../../images/IEEECSBDC.jpeg";
import bohubrihi from "../../images/Bohubrihi.png";
import bohubrihi2 from "../../images/bohubrihi2.png";
import trust from "../../images/TrustBank.png";
import genAI from "../../images/GenAI.png";
import gpTownhall from "../../images/gp.png";
import idpc from "../../images/idpc.png";
import robot from "../../images/robotOlympiad.jpg";
import remove from "../../images/remove.png";
import click from "../../images/tap.png";
import Aos from "aos";
import "aos/dist/aos.css";

const certificateImages = {
  "IEEE Computer Society Bangladesh chapter Web and IT Committee Frontend Volunteer":
    ieee,
  "Introduction to Generative AI by Google Cloud 2024": genAI,
  "Trust Bank Presents Creaventure 3.0 National idea pitching competition by DUEDC 2024":
    trust,
  "Pathway to Software Engineering by Bohubrihi": bohubrihi,
  "Introduction to Data Analytics by Bohubrihi": bohubrihi2,
  "1st Technoxian Bangladesh: National Round, Finalist - 8 March 2024": txbd,
  "BUET DevSprint 2024: Inter-University Software Development Competition, finalist - 1 March 2024":
    devSprint,
  "BUET CaseCraft AutoRealm competition: 2nd Runner-up - 26 January 2024":
    caseCraft,
  "Certificate of Completion on Python Fundamentals Kiron, Ascend International Limited - 14 July 2021":
    kiron,
  "Certificate of Volunteering on MIST LeetCon 2023: HackMeIfYouCan - 20 May 2023":
    leetcon,
  "Hosting and volunteering in 'MIST Campus Townhall' by GP Academy 2023 at MIST":
    gpTownhall,
  "IDPC (Independence Day Programming Contest) 2023 -- Position: 23rd": idpc,
  "Robot Olympiad Quiz 2019 -- Position: 14th": robot,
};

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const handleCertificateClick = (certificate, image) => {
    setSelectedCertificate(certificate);
    setSelectedImage(image);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleCloseModal = () => {
    setSelectedCertificate("");
    setSelectedImage("");
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <h3
        className="text-2xl mt-20 mb-10 font-semibold text-primary text-center dark:text-secondary"
        style={{
          fontFamily: "'Poetsen One', sans-serif",
        }}
      >
        Certificates
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(certificateImages).map(
          ([certificate, image], index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="bg-primary text-secondary p-4 rounded-md shadow-md transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleCertificateClick(certificate, image)}
            >
              <p>
                {certificate}
                <img src={click} className="w-5 h-5 fixed bottom-3 right-3" />
              </p>
            </div>
          )
        )}
      </div>
      {selectedCertificate && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="max-w-2xl bg-primary rounded-lg p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              <img src={remove} className="w-10 h-10" />
            </button>
            <img
              src={selectedImage}
              alt={selectedCertificate}
              className="flex items-center justify-center"
              style={{
                height: "600px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
