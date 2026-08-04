import { FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { Seo } from "../components/SEO/Seo";
import Faq from "../components/Faq/Faq";
import { useState } from "react";

const Contacts = () => {

  const [state, handleSubmit] = useForm("mnjerdpk");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "subject":
        if (value.trim().length < 3) {
          error = "Subject must be at least 3 characters";
        }
        break;
      case "message":
        if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateField("name", formData.name);
    const isEmailValid = validateField("email", formData.email);
    const isSubjectValid = validateField("subject", formData.subject);
    const isMessageValid = validateField("message", formData.message);

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      handleSubmit(e);
    }
  };

  const contacts = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      value: "sales@movecconnect.com",
      link: "mailto:sales@movecconnect.com",
      linkText: "Send an email",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      value: "+254 796 287 392",
      link: "https://wa.me/254796287392?text=Hi,%20I'd%20like%20to%20know%20more%20about%20your%20services.",
      linkText: "Chat on WhatsApp",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      value: "SMK Business Park, Enterprise Road-Nairobi",
      link: "https://www.google.com/maps/search/?api=1&query=SMK+Business+Park+Enterprise+Road+Nairobi",
      linkText: "Get directions",
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="
          bg-white
          dark:bg-black
          transition-colors
          duration-300
          py-24">

        <Seo
          title="Contact Us | Movec - Get in Touch"
          description="Questions about comparing ISPs or need help choosing a plan? Reach out to the Movec team — we're happy to help."
          path="/contact"/>

        <div className="max-w-3xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">

            <span className="text-orange-500 uppercase text-sm tracking-wider font-semibold">
              Get In Touch
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Let's start a
              <span className="text-[#10B982]"> conversation</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Fill out the form below and our team will get back to you within
              a day.
            </p>

            <div className="w-24 h-1 bg-orange-500 my-6 mx-auto" />

          </div>


          {/* Form */}
          <form
            onSubmit={handleFormSubmit}
            className="space-y-6">

            <div className="grid sm:grid-cols-2 gap-5">

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    bg-slate-100
                    dark:bg-white/5
                    text-slate-900
                    dark:text-white
                    placeholder:text-slate-400
                    dark:placeholder:text-gray-500
                    border
                    ${errors.name ? 'border-red-500' : 'border-transparent'}
                    focus:border-orange-500
                    focus:bg-white
                    dark:focus:bg-transparent
                    outline-none
                    transition-all`}/>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>


              <div className="w-full">

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    bg-slate-100
                    dark:bg-white/5
                    text-slate-900
                    dark:text-white
                    placeholder:text-slate-400
                    dark:placeholder:text-gray-500
                    border
                    ${errors.email ? 'border-red-500' : 'border-transparent'}
                    focus:border-orange-500
                    focus:bg-white
                    dark:focus:bg-transparent
                    outline-none
                    transition-all`}/>

                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}/>

              </div>

            </div>


            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={`
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  bg-slate-100
                  dark:bg-white/5
                  text-slate-900
                  dark:text-white
                  placeholder:text-slate-400
                  dark:placeholder:text-gray-500
                  border
                  ${errors.subject ? 'border-red-500' : 'border-transparent'}
                  focus:border-orange-500
                  focus:bg-white
                  dark:focus:bg-transparent
                  outline-none
                  transition-all`}/>
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
            </div>


            <div>
              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className={`
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  bg-slate-100
                  dark:bg-white/5
                  text-slate-900
                  dark:text-white
                  placeholder:text-slate-400
                  dark:placeholder:text-gray-500
                  border
                  ${errors.message ? 'border-red-500' : 'border-transparent'}
                  focus:border-orange-500
                  focus:bg-white
                  dark:focus:bg-transparent
                  outline-none
                  resize-none
                  transition-all`}/>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>


            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}/>


            <button
              type="submit"
              disabled={state.submitting}
              className="
                group
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-2
                bg-[#10B982]
                hover:bg-white
                text-white
                px-8
                py-3.5
                font-semibold
                transition-all
                duration-300
                cursor-pointer
                hover:text-gray-800
                mx-auto
                disabled:opacity-60
                disabled:cursor-not-allowed">

              {state.submitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaArrowRight
                    className="
                      text-sm
                      transition-transform
                      duration-300
                      group-hover:translate-x-1"/>
                </>
              )}

            </button>


            {state.succeeded && (
              <div className="flex items-center justify-center gap-2 text-[#10B982] bg-green-50 dark:bg-green-500/10 p-4 rounded-lg">
                <FaCheckCircle />
                <p className="text-sm font-medium">
                  Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}


            {state.errors && (
              <p className="text-sm text-red-500 text-center">
                Something went wrong. Please try again.
              </p>
            )}

          </form>



          {/* Contact Info */}
          <div
            className="
              mt-16
              pt-10
              border-t
              border-slate-200
              dark:border-white/10
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-6">

            {contacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target={item.title !== "Email Us" ? "_blank" : undefined}
                  rel={item.title !== "Email Us" ? "noopener noreferrer" : undefined}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    text-center
                    p-6
                    rounded-xl
                    bg-slate-50
                    dark:bg-white/5
                    hover:bg-orange-50
                    dark:hover:bg-white/10
                    border
                    border-transparent
                    hover:border-orange-500
                    transition-all
                    duration-300
                    cursor-pointer
                    min-h-[240px]">

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-14
                      h-14
                      rounded-full
                      bg-orange-100
                      dark:bg-orange-500/10
                      text-orange-500
                      group-hover:bg-orange-500
                      group-hover:text-white
                      transition-all
                      duration-300
                      mb-4">
                    <Icon className="text-xl" />
                  </div>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wide
                      text-slate-500
                      dark:text-gray-500
                      mb-2">
                    {item.title}
                  </p>

                  <p
                    className="
                      text-slate-900
                      dark:text-white
                      font-semibold
                      mb-auto
                      break-words
                      flex-grow">
                    {item.value}
                  </p>

                  <span
                    className="
                      text-sm
                      text-orange-500
                      font-medium
                      group-hover:underline
                      mt-4">
                    {item.linkText} →
                  </span>

                </a>
              );
            })}

          </div>


        </div>

      </section>

      <Faq />
    </>
  );
};

export default Contacts;




















