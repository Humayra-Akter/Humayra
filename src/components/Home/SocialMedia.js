import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="mt-12 flex justify-center space-x-4">
      <Link
        to="https://www.facebook.com/profile.php?id=100004821604675"
        className="text-2xl text-primary dark:text-secondary hover:scale-125  transition-colors duration-200"
      >
        <FaFacebook />
      </Link>
      <Link
        to="https://www.linkedin.com/in/humayra-akter25/"
        className="text-2xl text-primary dark:text-secondary hover:scale-125  transition-colors duration-200"
      >
        <FaLinkedin />
      </Link>
      <Link
        to="https://github.com/Humayra-Akter"
        className="text-2xl text-primary dark:text-secondary hover:scale-125  transition-colors duration-200"
      >
        <FaGithub />
      </Link>{" "}
      <Link
        to="https://mail.google.com/mail/?tab=rm&ogbl"
        className="text-2xl text-primary dark:text-secondary hover:scale-125  transition-colors duration-200"
      >
        <FaEnvelope />
      </Link>
    </div>
  );
};

export default SocialMedia;
