import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What services does Movec offer?",
    answer:
      "We offer custom software development, billing systems, Starlink installation, CCTV security systems, GPS fleet tracking, and IT support & networking.",
  },
  {
    question: "Do you work with businesses outside your local area?",
    answer:
      "Yes, our software and billing solutions are available remotely. Physical installations like Starlink and CCTV are scheduled based on location.",
  },
  {
    question: "How long does a typical software project take?",
    answer:
      "Timelines vary by scope, but most projects range from a few weeks for smaller builds to a few months for full platforms.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we provide maintenance and support packages for all our software, network, and installation services.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through our contact form, email, or WhatsApp, and we'll schedule a call to understand your needs and scope the work.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        bg-white
        dark:bg-black
        transition-colors
        duration-300
        py-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase text-sm tracking-wider font-semibold">
            Got Questions?
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Frequently asked
            <span className="text-[#10B982]"> questions</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Answers to common questions about how we work and what we offer.
          </p>

          <div className="w-24 h-1 bg-orange-500 my-6 mx-auto" />
        </div>

        {/* FAQ Pills */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="
                  bg-slate-100
                  dark:bg-white/5
                  border
                  border-transparent
                  hover:border-orange-500/40
                  rounded-full
                  transition-colors
                  duration-300
                  overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-4
                    px-6
                    sm:px-8
                    py-4
                    sm:py-5
                    text-left
                    cursor-pointer">
                  <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className="
                      shrink-0
                      w-8 h-8
                      flex items-center justify-center
                      rounded-full
                      bg-white
                      dark:bg-white/10
                      text-orange-500">
                    <FaChevronDown
                      className={`
                        text-xs
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </span>
                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}>
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-8 pb-5 sm:pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;