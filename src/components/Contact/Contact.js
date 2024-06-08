import React, { useState } from "react";
import contactImageLight from "../../images/contact-light.png";
import contactImageDark from "../../images/contact-dark.png";

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

  return (
    <div style={{ fontFamily: "'Poetsen One', sans-serif" }}>
      <h3 className="text-2xl font-semibold text-center text-primary mt-20 mb-8 dark:text-secondary">
        Contact Us
      </h3>
      <div className="max-w-5xl mx-auto p-8 flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-grow">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 p-4 rounded-lg border-2 border-gradient-to-r from-blue-500 to-purple-500 bg-white shadow-lg"
          >
            <div className="flex flex-col mb-2">
              <label htmlFor="name" className="mb-1 text-primary">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="mb-1 text-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="message" className="mb-1 text-primary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 border rounded-md"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-secondary py-2 px-4 rounded-md hover:bg-secondary hover:text-primary transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex-shrink-0">
          <img
            src={contactImageLight}
            alt="Contact Us"
            className="w-full lg:w-96 border border-primary rounded-md"
          />
          <h3 className="text-2xl font-semibold text-primary mb-4 dark:text-secondary">
            Get in Touch
          </h3>
          <p className="text-primary text-wrap text-justify w-96 mb-8 dark:text-secondary">
            Don't be shy!!!
            <br />
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            vision.
          </p>
        </div>
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
    </div>
  );
};

export default Contact;
