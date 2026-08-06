import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-gray-200 dark:bg-gray-950 text-gray-300">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Company */}
        <div>
          <img
            src="images/movec logo f.png"
            alt="Movec Connect"
            loading="lazy"
            className="w-40 mb-6 dark:hidden" />
          <img
            src="/images/logo.png"
            alt="Movec Connect"
            loading="lazy"
            className="w-40 mb-6 hidden dark:block" />

          <p className="leading-7 text-gray-600 dark:text-gray-400 text-sm">
            Smart Technology for Every Business.
            We provide reliable technology solutions
            including custom software development,
            billing systems, Starlink internet installation,
            CCTV security systems and GPS fleet tracking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-black dark:text-white text-lg font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/ispplatform"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                ISP Platform
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-black dark:text-white text-lg font-semibold mb-6">
            Our Services
          </h3>

          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/software"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link
                to="/billing"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                Billing Systems
              </Link>
            </li>
            <li>
              <Link
                to="/starlink"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                Starlink Installation
              </Link>
            </li>
            <li>
              <Link
                to="/cctv"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                CCTV Security Systems
              </Link>
            </li>
            <li>
              <Link
                to="/gps"
                className="hover:text-orange-500 text-gray-600 dark:text-gray-400 transition">
                GPS Fleet Tracking
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-black dark:text-white text-lg font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-5">
            <a
              href="mailto:sales@movecconnect.com"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-500 gap-3 text-sm transition group">
              <FaEnvelope className="text-orange-500 group-hover:scale-110 transition-transform" />
              <span>sales@movecconnect.com</span>
            </a>

            <a
              href="https://wa.me/254796287392?text=Hi,%20I'd%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-500 gap-3 text-sm transition group">
              <FaPhoneAlt className="text-orange-500 group-hover:scale-110 transition-transform" />
              <span>+254 796 287 392</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SMK+Business+Park+Enterprise+Road+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start text-gray-600 dark:text-gray-400 hover:text-orange-500 gap-3 text-sm transition group">
              <FaMapMarkerAlt className="text-orange-500 group-hover:scale-110 transition-transform mt-1" />
              <span>SMK Business Park,<br />Enterprise Road - Nairobi</span>
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://web.facebook.com/profile.php?id=61591630655828"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-[#1B2435] hover:bg-orange-500 transition flex items-center justify-center">
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/135305554/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-[#1B2435] hover:bg-orange-500 transition flex items-center justify-center">
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/movecconnect/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-[#1B2435] hover:bg-orange-500 transition flex items-center justify-center">
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@movec.connect?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-11 h-11 rounded-full bg-[#1B2435] hover:bg-orange-500 transition flex items-center justify-center">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Fading MOVEC Watermark */}
      <div className="relative overflow-hidden select-none pointer-events-none" aria-hidden="true">
        <p
          className="text-center font-black tracking-tighter text-gray-400 dark:text-gray-700 leading-none"
          style={{
            fontSize: "clamp(3rem, 13vw, 10rem)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
          }}
        >
          MOVEC
        </p>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center md:text-left text-sm">
            © {new Date().getFullYear()} Movec Connect. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <Link
              to="/privacy-policy"
              className="hover:text-orange-500 transition">
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-orange-500 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
