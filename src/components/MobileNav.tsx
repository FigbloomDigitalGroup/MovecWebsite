import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import {
  FaLaptopCode,
  FaMoneyBillWave,
  FaSatelliteDish,
  FaVideo,
  FaMapMarkedAlt,
  FaNetworkWired,
} from "react-icons/fa";

interface Props {
  showNav: boolean;
  closeNav: () => void;
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
    link: "/itSupport",
  },
];

const MobileNav: React.FC<Props> = ({ showNav, closeNav }) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Explore", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "ISP Platform", link: "/ispplatform" },
    { name: "Get In touch", link: "/contact" },
  ];


  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`
          fixed
          inset-0
          bg-black/60
          backdrop-blur-sm
          z-40
          transition-all
          duration-300
          ${showNav
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }
        `} />

      {/* Sidebar */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[85%]
          sm:w-[380px]

          bg-white
          dark:bg-[#0b1120]

          border-l
          border-slate-200
          dark:border-slate-700

          shadow-2xl

          transform
          ${navOpen}

          transition-transform
          duration-500
          ease-in-out

          z-50

          flex
          flex-col
        `}
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            px-6
            h-20

            border-b
            border-slate-200
            dark:border-slate-700

            shrink-0">
          <img src="/images/movec logo f.png"
            alt="Movec Connect"
            loading="lazy"
            className="w-28 object-contain dark:hidden" />

          <img
            src="/images/logo.png"
            alt="Movec Connect"
            loading="lazy"
            className="hidden w-32 object-contain dark:block" />
          <button
            onClick={closeNav}
            className="
              text-2xl
              text-slate-700
              dark:text-white

              hover:text-orange-500
              transition-colors
            ">
            <FaXmark />
          </button>
        </div>

        {/* Navigation */}
        <nav
          className="
            flex-1
            overflow-y-auto
            py-6">
          {/* Explore, About Us, ISP Platform */}
          {navLinks.slice(0, 3).map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={closeNav}
              className="
                block
                px-6
                sm:px-8
                py-4
                text-lg
                font-medium
                text-slate-700
                dark:text-white
                hover:bg-orange-500
                hover:text-white
                transition-all
                duration-300">
              {item.name}
            </Link>
          ))}

          {/* What We Do - expandable */}
          <div>
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              className="
                w-full
                flex
                items-center
                justify-between
                px-6
                sm:px-8
                py-4
                text-lg
                font-medium
                text-slate-700
                dark:text-white
                hover:bg-orange-500
                hover:text-white
                transition-all
                duration-300
                cursor-pointer
                group">
              <span>What We Do</span>
              <MdAdd
                className={`
                  text-xl
                  transition-transform
                  duration-300
                  ${servicesOpen ? "rotate-45" : ""}
                `}
              />
            </button>

            <div
              className={`
                grid
                transition-all
                duration-300
                ease-in-out
                ${servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
              `}>
              <div className="overflow-hidden">
                <div className="bg-slate-50 dark:bg-white/5 py-2">
                  {serviceLinks.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.link}
                        onClick={closeNav}
                        className="
                          flex
                          items-center
                          gap-3
                          px-6
                          sm:px-8
                          py-3
                          text-sm
                          sm:text-base
                          font-medium
                          text-slate-600
                          dark:text-slate-300
                          hover:bg-orange-500
                          hover:text-white
                          transition-all
                          duration-200
                          group">
                        <span
                          className="
                            flex
                            items-center
                            justify-center
                            w-8
                            h-8
                            sm:w-9
                            sm:h-9
                            shrink-0
                            rounded-lg
                            bg-orange-50
                            dark:bg-white/10
                            text-orange-500
                            group-hover:bg-white/20
                            group-hover:text-white
                            transition-colors
                            duration-200">
                          <Icon className="text-sm" />
                        </span>
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          {navLinks.slice(3).map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={closeNav}
              className="
                block
                px-6
                sm:px-8
                py-4
                text-lg
                font-medium
                text-slate-700
                dark:text-white
                hover:bg-orange-500
                hover:text-white
                transition-all
                duration-300">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bottom Buttons */}
        <div
          className="
            p-6

            border-t
            border-slate-200
            dark:border-slate-700

            flex
            flex-col
            gap-4

            shrink-0">

        </div>
      </div>
    </>
  );
};

export default MobileNav;









