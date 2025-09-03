import React, { useState, useEffect } from "react";
import scroll from "../../images/scrollToTOp.svg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="scroll-to-top bg-primary hover:bg-accent fixed bottom-10 right-30 left-8 z-50 font-bold cursor-pointer p-2 duration-300 text-white rounded-full hover:scale-110 transition-transform"
          onClick={scrollToTop}
        >
          <img src={scroll} className="h-4 w-4 text-white" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
