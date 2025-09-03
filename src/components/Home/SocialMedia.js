import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
      <Link
        to="https://www.facebook.com/profile.php?id=100004821604675"
        className="text-2xl text-purple-200 hover:text-accent hover:scale-125  transition-colors duration-200 border-b-2 border-transparent hover:border-accent"
      >
        <FaFacebook />
      </Link>
      <Link
        to="https://www.linkedin.com/in/humayra-akter25/"
        className="text-2xl text-purple-200 hover:text-accent hover:scale-125  transition-colors duration-200 border-b-2 border-transparent hover:border-accent"
      >
        <FaLinkedin />
      </Link>
      <Link
        to="https://github.com/Humayra-Akter"
        className="text-2xl text-purple-200 hover:text-accent hover:scale-125  transition-colors duration-200 border-b-2 border-transparent hover:border-accent"
      >
        <FaGithub />
      </Link>{" "}
      <Link
        to="https://mail.google.com/mail/?tab=rm&ogbl"
        className="text-2xl text-purple-200 hover:text-accent hover:scale-125  transition-colors duration-200 border-b-2 border-transparent hover:border-accent"
      >
        <FaEnvelope />
      </Link>
    </div>
  );
};

export default SocialMedia;
