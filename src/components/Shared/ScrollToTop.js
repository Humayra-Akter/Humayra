// src/components/Shared/ScrollToTop.js
import React, { useState, useEffect } from "react";
import scroll from "../../images/scrollToTOp.svg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="scroll-to-top bg-primary hover:bg-accent fixed bottom-10 right-30 left-8 z-50 font-bold cursor-pointer p-2 duration-300 text-white rounded-full hover:scale-110 transition-transform"
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
        >
          <img src={scroll} alt="Scroll to top" className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
