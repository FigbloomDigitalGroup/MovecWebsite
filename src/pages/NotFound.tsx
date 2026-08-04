import { Link } from "react-router-dom";
import { Seo } from "../components/SEO/Seo";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <>
      <Seo
        title="404 - Page Not Found | Movec Connect"
        description="The page you're looking for doesn't exist."
        path="/404"
      />

      <section className="bg-white dark:bg-black transition-colors duration-300 min-h-screen flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          {/* 404 Number */}
          <h1 className="text-9xl md:text-[12rem] font-bold text-orange-500 mb-4">
            404
          </h1>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-orange-500
                hover:bg-orange-600
                text-white
                px-8
                py-3.5
                rounded-lg
                font-semibold
                transition-colors
                duration-300">
              <FaHome />
              Go to Homepage
            </Link>

            <button
              onClick={() => window.history.back()}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-slate-100
                dark:bg-white/5
                hover:bg-slate-200
                dark:hover:bg-white/10
                text-slate-900
                dark:text-white
                px-8
                py-3.5
                rounded-lg
                font-semibold
                transition-colors
                duration-300">
              <FaArrowLeft />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
            <p className="text-sm text-slate-500 dark:text-gray-500 mb-4">
              Or try one of these pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/services"
                className="text-orange-500 hover:underline">
                Services
              </Link>
              <Link
                to="/ispplatform"
                className="text-orange-500 hover:underline">
                ISP Platform
              </Link>
              <Link
                to="/about"
                className="text-orange-500 hover:underline">
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-orange-500 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
