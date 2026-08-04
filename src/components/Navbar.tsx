import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

import {
  FaLaptopCode,
  FaMoneyBillWave,
  FaSatelliteDish,
  FaVideo,
  FaMapMarkedAlt,
  FaNetworkWired,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

interface NavbarProps {
  openNav: () => void;
}

const serviceLinks = [
  {
    name: "Custom Software Development",
    icon: FaLaptopCode,
    link: "/software",
  },
  {
    name: "Billing Systems",
    icon: FaMoneyBillWave,
    link: "/billing",
  },
  {
    name: "Starlink Installation",
    icon: FaSatelliteDish,
    link: "/starlink",
  },
  {
    name: "CCTV Security Systems",
    icon: FaVideo,
    link: "/cctv",
  },
  {
    name: "GPS Fleet Tracking",
    icon: FaMapMarkedAlt,
    link: "/gps",
  },
  {
    name: "IT Support & Networking",
    icon: FaNetworkWired,
    link: "/itsupport",
  },
];

const Navbar: React.FC<NavbarProps> = ({ openNav }) => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  const navLinks = [
    { name: "Explore", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "ISP Platform", link: "/ispplatform" },
    { name: "Get In touch", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle dropdown hover with delay
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`
        top-0
        left-0
        w-full
        z-50
        transition-all duration-500 ease-in-out
        duration-300
        bg-white
        dark:bg-black
        ${scrolled
          ? `
              fixed
              bg-white
              dark:bg-[#1A1A1A]
              border-slate-200
              dark:border-white/10
            `
          : "absolute bg-transparent"
        }
      `}>
      <div
        className="
          max-w-6xl
          mx-auto
          h-15
          px-6
          flex
          items-center
          justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/images/movec logo f.png "
            alt="Movec Connect"
            loading="lazy"
            className="w-32 object-contain dark:hidden" />
          <img
            src="/images/logo.png"
            alt="Movec Connect"
            loading="lazy"
            className="hidden w-32 object-contain dark:block" />
        </a>
        <ul className="hidden lg:flex items-center gap-10">
          <Link
            to="/"
            className="
              relative
              font-medium
              text-slate-800
              text-sm
              dark:text-white
              hover:text-orange-500
              transition-colors
              duration-200
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:bg-orange-500
              after:transition-all
              after:duration-300
              hover:after:w-full">
            Explore
          </Link>
          <Link
            to="/about"
            className="
              relative
              font-medium
              text-slate-800
              text-sm
              dark:text-white
              hover:text-orange-500
              transition-colors
              duration-200
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:bg-orange-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            ">
            About Us
          </Link>
          <Link
            to="/ispplatform"
            className="
              relative
              font-medium
              text-slate-800
              text-sm
              dark:text-white
              hover:text-orange-500
              transition-colors
              duration-200
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:bg-orange-500
              after:transition-all
              after:duration-300
              hover:after:w-full">
            ISP Platform
          </Link>
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link to="/services">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="
                relative
                flex
                items-center
                gap-1.5
                font-medium
                text-slate-800
                text-sm
                dark:text-white
                hover:text-orange-500
                transition-colors
                duration-200
                cursor-pointer">
                What We Do
                <MdAdd
                  className={`
                  text-xs
                  transition-transform
                  duration-200
                  ${dropdownOpen ? "rotate-180" : ""}
                `} />
              </button>
            </Link>
            <div
              className={`
                absolute
                top-full
                left-1/2
                -translate-x-1/2
                mt-2
                w-80
                bg-white
                dark:bg-black
                shadow-xl
                overflow-hidden
                transition-all
                duration-200
                origin-top
                ${dropdownOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
                }
              `}>
              <div className="p-2">
                {serviceLinks.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.link}
                      onClick={() => setDropdownOpen(false)}
                      className="
                        flex
                        items-center
                        gap-3
                        px-3
                        py-2.5
                        rounded-lg
                        text-sm
                        font-medium
                        text-slate-700
                        dark:text-slate-200
                        hover:bg-orange-50
                        dark:hover:bg-white/5
                        hover:text-orange-500
                        transition-colors
                        duration-150
                        group">
                      <span
                        className="
                          flex
                          items-center
                          justify-center
                          w-9
                          h-9
                          rounded-lg
                          bg-orange-50
                          dark:bg-white/5
                          text-orange-500
                          group-hover:bg-orange-500
                          group-hover:text-white
                          transition-colors
                          duration-150
                          shrink-0">
                        <Icon className="text-sm" />
                      </span>
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {navLinks.slice(3).map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="
                relative
                font-medium
                text-black
                text-sm
                dark:text-white
                hover:text-orange-500
                transition-colors
                duration-200
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-orange-500
                after:transition-all
                after:duration-300
                hover:after:w-full">
              {item.name}
            </Link>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-2">

          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={openNav}
            className="text-2xl text-slate-800 dark:text-white transition-colors">
            <FaBars />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






