import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
