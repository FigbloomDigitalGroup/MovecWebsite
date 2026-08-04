import React, { useEffect, useState } from "react";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";


const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
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
      aria-label="Scroll to top"
      className={`
        fixed
        bottom-24
        right-8
        z-50
        cursor-pointer
        h-14
        w-14
        rounded-full
        bg-orange-500
        hover:bg-orange-600
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}>
      <TbArrowBigUpLinesFilled className="mx-auto text-lg animate-bounce"/>
    </button>
  );
};

export default ScrollToTop;


