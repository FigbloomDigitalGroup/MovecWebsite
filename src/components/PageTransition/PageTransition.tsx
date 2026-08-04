import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Fade out
    setIsVisible(false);

    // Fade in after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`
        transition-opacity
        duration-300
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}>
      {children}
    </div>
  );
};

export default PageTransition;
