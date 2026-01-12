import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-secondary text-white shadow-2xl hover:bg-primary transition-all duration-300 transform ${
        isVisible
          ? "scale-100 translate-y-0 opacity-100"
          : "scale-0 translate-y-10 opacity-0"
      }`}
    >
      <ArrowUp size={24} strokeWidth={3} />
    </button>
  );
};

export default ScrollToTop;
