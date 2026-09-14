import { FaArrowRight, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { Seo } from "../components/SEO/Seo";
import Faq from "../components/Faq/Faq";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "name":
        if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
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
      link: "mailto:sales@movecconnect.com",
      colorClass: "bg-orange-100 dark:bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-orange-500/25",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Us",
      link: "https://wa.me/254796287392?text=Hi,%20I'd%20like%20to%20know%20more%20about%20your%20services.",
      isExternal: true,
      colorClass: "bg-emerald-100 dark:bg-emerald-500/10 text-[#10B982] group-hover:bg-[#10B982] group-hover:text-white group-hover:shadow-[#10B982]/25",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      link: "tel:+254796287392",
      colorClass: "bg-blue-100 dark:bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-blue-500/25",
    },
  ];

  return (
    <>


      {/* Hero Section */}
      <section
        className="
          relative
          py-32
          bg-cover
          bg-center
          bg-fixed
          flex
          items-center"
        style={{
          backgroundImage: "url('/images/graphixmade-ai-generated-8337333_1920.png')",
        }}>
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            We'd Love to Hear
            <span className="text-orange-500">From You</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Whether you're just exploring or ready to move forward, we're here to help.
            Reach out and let's start the conversation.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-8" />
        </div>
      </section>

      { /* we'd love to hear from you */}
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
          path="/contact" />

        <div className="max-w-3xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Let's start a
              <span className="text-[#10B982]"> conversation</span>
            </h1>

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
                    transition-all`} />
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
                    transition-all`} />

                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors} />

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
                  transition-all`} />
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
                  transition-all`} />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>


            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors} />


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



          {/* Quick Contact Icon Buttons */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex items-center justify-center gap-8 md:gap-12">
            {contacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  title={item.title}
                  aria-label={item.title}
                  className="group flex flex-col items-center gap-2.5 cursor-pointer"
                >
                  <div
                    className={`
                      flex
                      items-center
                      justify-center
                      w-14
                      h-14
                      rounded-2xl
                      shadow-md
                      transition-all
                      duration-300
                      group-hover:scale-110
                      ${item.colorClass}
                    `}
                  >
                    <Icon className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-medium tracking-wide text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Interactive Location Map */}
          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/10">
            <div className="text-center mb-8">
              <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
                Find Us
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                Our Location
              </h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
                SMK Business Park, Enterprise Road — Nairobi, Kenya
              </p>
            </div>

            <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10">
              {/* Ambient glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-[#10B982]/15 to-orange-500/20 rounded-[20px] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Map iframe */}
              <iframe
                title="Movec Connect Location — SMK Business Park, Enterprise Road, Nairobi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.523360282421!2d36.86498177190721!3d-1.318664213917522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11106d5a3af9%3A0x22ba9675e0a9144e!2sSMK%20Business%20Centre!5e0!3m2!1sen!2ske!4v1786104293485!5m2!1sen!2ske"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] md:h-[420px]"
              />

              {/* Bottom overlay bar */}
              <div className="flex items-center justify-between px-5 py-3 bg-white dark:bg-[#0b1120] border-t border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-500 text-sm shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                    SMK Business Park, Enterprise Road, Nairobi
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SMK+Business+Park+Enterprise+Road+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-500 font-semibold hover:underline whitespace-nowrap ml-4 shrink-0"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

      </section>

      <Faq />
    </>
  );
};

export default Contacts;




















