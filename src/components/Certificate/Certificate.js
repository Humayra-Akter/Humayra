import React, { useEffect } from "react";
import txbd from "../../images/TechnocianBD.png";
import txbd2 from "../../images/txbd.jpg";
import devSprint from "../../images/devSprint.jpg";
import nexus from "../../images/nexus.jpg";
import nexus2 from "../../images/nexus2.jpg";
import devSprint2 from "../../images/devSprint2.jpg";
import caseCraft from "../../images/BUETCasecraft.jpg";
import caseCraft2 from "../../images/casecraft.jpg";
import kiron from "../../images/kironPython.png";
import uiu from "../../images/uiu_participate_certificate.png";
import leetcon from "../../images/leetcon.jpg";
import leetcon2 from "../../images/leetcon2.jpg";
import ieee from "../../images/IEEECSBDC.jpeg";
import ieee2 from "../../images/IEEECSBDC.jpg";
import bohubrihi from "../../images/Bohubrihi.png";
import bohubrihi2 from "../../images/bohubrihi2.png";
import trust from "../../images/TrustBank.png";
import genAI from "../../images/GenAI.png";
import gpOnlineSafety from "../../images/gpOnlineSafety.png";
import gpMS from "../../images/gpMSWord.png";
import gpCv from "../../images/gpCVWriting.png";
import gpAdaption from "../../images/gpCustomerBehavior.png";
import gpTownhall from "../../images/gp.png";
import gpTownhall2 from "../../images/gpTownhall.jpg";
import idpc from "../../images/idpc.png";
import idpc2 from "../../images/idpc.jpg";
import robot from "../../images/robotOlympiad.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../Shared/ScrollToTop";

const certificates = [
  {
    title:
      "IEEE Computer Society Bangladesh chapter Web and IT Committee Frontend Volunteer",
    image1: ieee,
    image2: ieee2,
  },
  {
    title:
      "BUET DevSprint 2024: Inter-University Software Development Competition, finalist - 1 March 2024",
    image1: devSprint,
    image2: devSprint2,
  },
  {
    title:
      "Secured a spot among the Top 10 Finalists at Nexus of Wit National Business Case Competition, Rabindra University.",
    image1: nexus,
    image2: nexus2,
  },
  {
    title:
      "BUET CaseCraft AutoRealm competition: 2nd Runner-up - 26 January 2024",
    image1: caseCraft2,
    image2: caseCraft,
  },
  {
    title: "1st Technoxian Bangladesh: National Round, Finalist - 8 March 2024",
    image1: txbd2,
    image2: txbd,
  },
  {
    title:
      "Hosting and volunteering in 'MIST Campus Townhall' by GP Academy 2023 at MIST",
    image1: gpTownhall,
    image2: gpTownhall2,
  },
  {
    title: "IDPC (Independence Day Programming Contest) 2023 -- Position: 23rd",
    image1: idpc,
    image2: idpc2,
  },
  {
    title:
      "Certificate of Volunteering on MIST LeetCon 2023: HackMeIfYouCan - 20 May 2023",
    image1: leetcon2,
    image2: leetcon,
  },
  {
    title:
      "Trust Bank Presents Creaventure 3.0 National idea pitching competition by DUEDC 2024",
    image1: trust,
    image2: trust,
  },
  {
    title: "Introduction to Generative AI by Google Cloud 2024",
    image1: genAI,
    image2: genAI,
  },
  {
    title: "Pathway to Software Engineering by Bohubrihi",
    image1: bohubrihi,
    image2: bohubrihi,
  },
  {
    title: "Introduction to Data Analytics by Bohubrihi",
    image1: bohubrihi2,
    image2: bohubrihi2,
  },

  {
    title: "Certificate of Participation: LaunchPad by UIHP@UIU Program UIUEDF",
    image1: uiu,
    image2: uiu,
  },

  {
    title:
      "Certificate of Completion on Python Fundamentals Kiron, Ascend International Limited - 14 July 2021",
    image1: kiron,
    image2: kiron,
  },

  {
    title:
      "Certificate for successful completion of ADAPTATION TO CUSTOMER BEHAVIOR in GP Academy",
    image1: gpAdaption,
    image2: gpAdaption,
  },
  {
    title:
      "Certificate for successful completion of CV WRITING FOR PROFESSIONALS in GP Academy",
    image1: gpCv,
    image2: gpCv,
  },
  {
    title:
      "Certificate for successful completion of MS POWERPOINT ADVANCED COURSE in GP Academy",
    image1: gpMS,
    image2: gpMS,
  },
  {
    title:
      "Certificate for successful completion of ONLINE SAFETY in GP Academy",
    image1: gpOnlineSafety,
    image2: gpOnlineSafety,
  },

  {
    title: "Robot Olympiad Quiz 2019 -- Position: 14th",
    image1: robot,
    image2: robot,
  },
];

const Certificate = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="mx-auto px-4 sm:px-6 lg:px-8 py-8"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] lg:h-56  h-auto max-w-full bg-gradient-to-br from-primary to-purple-400 dark:from-gray-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-100 to-sky-300 dark:to-white"></div>
        </div>
      </div>
      <h3 className="text-3xl mb-10 font-semibold text-primary text-center dark:text-secondary">
        Certificates
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="relative bg-primary text-secondary p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <div className="relative group lg:h-64 h-48 overflow-hidden rounded-md">
              {/* First Image */}
              <img
                src={certificate.image1}
                alt={certificate.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Second Image */}
              <img
                src={certificate.image2}
                alt={certificate.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium">
              {certificate.title}
            </p>
          </div>
        ))}
      </div>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] lg:h-56  h-auto max-w-full bg-gradient-to-br from-primary to-purple-400 dark:from-gray-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-100 to-sky-300 dark:to-white"></div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Certificate;
