import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import contactImageLight from "../../images/contact-light.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSubmit = new FormData(event.target);

    formDataToSubmit.append(
      "access_key",
      "1c41f3ee-c4a7-47f5-9d09-104be218aa96"
    );

    const object = Object.fromEntries(formDataToSubmit);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setShowThankYou(true);
    }
  };

  const handleCloseModal = () => {
    setShowThankYou(false);
  };

  const waveStyle = {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "10vh",
    backgroundImage: "url(https://i.imgur.com/DLD3N2t.png)",
    backgroundSize: "100vw 10vh",
  };

  const wave1Style = {
    ...waveStyle,
    animation: "animate 20s linear infinite",
    zIndex: 1,
    bottom: 0,
    opacity: 0.2,
  };

  const wave2Style = {
    ...waveStyle,
    animation: "animate2 12s linear infinite",
    zIndex: 0,
    bottom: "10px",
    opacity: 0.3,
  };

  const wave3Style = {
    ...waveStyle,
    animation: "animate 10s linear infinite",
    zIndex: 5,
    opacity: 0.4,
    animationDelay: "-2s",
    bottom: "15px",
  };

  const wave4Style = {
    ...waveStyle,
    animation: "animate2 16s linear infinite",
    zIndex: 1,
    opacity: 0.5,
    animationDelay: "-5s",
    bottom: "20px",
  };

  const sectionStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "'Poetsen One', sans-serif",
    zIndex: 0,
  };

  const keyframesAnimate = `
    @keyframes animate {
      0% { background-position-x: 0; }
      100% { background-position-x: 100vw; }
    }
  `;

  const keyframesAnimate2 = `
    @keyframes animate2 {
      0% { background-position-x: 0; }
      100% { background-position-x: -100vw; }
    }
  `;

  return (
    <div style={sectionStyle}>
      <style>
        {keyframesAnimate}
        {keyframesAnimate2}
      </style>
      <h3 className="text-3xl text-center text-primary mt-20 mb-8">
        Contact Me
      </h3>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-50"
        >
          <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br from-primary to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-white"></div>
        </div>
      </div>
      <div className="lg:max-w-5xl mx-auto p-8 flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-grow w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-4 rounded-lg shadow-accent border shadow-md"
          >
            <div className="flex flex-col mb-2">
              <label htmlFor="name" className="mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border bg-transparent rounded-md z-10 relative"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border bg-transparent rounded-md z-10 relative"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="message" className="mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 border bg-transparent rounded-md z-10 relative"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="hover:bg-primary hover:text-secondary py-2 px-6 rounded-md bg-secondary text-primary border-2  hover:border-secondary transition-colors mt-4 inline-block"
            >
              Send Message
            </button>
          </form>
        </div>
        <Slide cascade damping={0.5} className="hidden lg:block lg:w-1/2">
          <div className="flex-shrink-0 text-center lg:text-left">
            <img
              src={contactImageLight}
              alt="Contact Us"
              className="w-full bg-cover lg:w-96 border border-primary rounded-md mx-auto"
            />
            <h3 className="text-2xl mb-4 text-primary">Get in Touch</h3>
            <p
              style={{
                fontFamily: "'Esteban'",
              }}
              className="text-accent text-wrap text-justify w-96 mb-8"
            >
              Don't be shy!!!
              <br />
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              vision.
            </p>
          </div>
        </Slide>
      </div>
      {showThankYou && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-center text-primary mb-4">
              Thank You!
            </h2>
            <p className="text-center text-primary mb-4">
              Your message has been sent successfully. We'll get back to you
              soon.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={handleCloseModal}
                className="bg-primary text-secondary py-2 px-4 rounded-md hover:bg-secondary hover:text-primary transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="wave mt-20" style={wave1Style}></div>
      <div className="wave mt-20" style={wave2Style}></div>
      <div className="wave mt-20" style={wave3Style}></div>
      <div className="wave mt-20" style={wave4Style}></div>
    </div>
  );
};

export default Contact;
