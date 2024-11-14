import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="mt-12 flex justify-center space-x-4">
      <a
        href="#"
        className="text-[#66fcf1] hover:text-white text-2xl transition-transform duration-300 hover:scale-125"
      >
        <FaFacebook />
      </a>
      <a
        href="#"
        className="text-[#66fcf1] hover:text-white text-2xl transition-transform duration-300 hover:scale-125"
      >
        <FaTwitter />
      </a>
      <a
        href="#"
        className="text-[#66fcf1] hover:text-white text-2xl transition-transform duration-300 hover:scale-125"
      >
        <FaLinkedin />
      </a>
      <a
        href="#"
        className="text-[#66fcf1] hover:text-white text-2xl transition-transform duration-300 hover:scale-125"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
