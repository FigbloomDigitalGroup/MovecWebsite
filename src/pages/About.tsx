import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../config/Firebase"; // adjust path to match your project
import ContentHeader from "../components/ContentHeader/ContentHeader";
import HeroHeader from "../components/heroheader/HeroHeader";
import AboutCard from "../components/cards/AboutCard";
import { GoGoal } from "react-icons/go";
import { VscCopilotSuccess } from "react-icons/vsc";
import { GiCrystalGrowth } from "react-icons/gi";
import { LiaAlignRightSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { Seo } from "../components/SEO/Seo";

interface AboutItem {
  icon: React.ReactNode
  title: string;
  description: string;
}

const aboutItems: AboutItem[] = [
  {
    icon: <GoGoal />,
    title: "Our Mission",
    description:
      "To deliver reliable, affordable technology solutions that help businesses across the region stay connected, secure and productive.",
  },
  {
    icon: <VscCopilotSuccess />,
    title: "Our Vision",
    description:
      "To become the most trusted technology partner for businesses seeking smart, scalable infrastructure and support.",
  },
  {
    icon: <LiaAlignRightSolid />,
    title: "Our Values",
    description:
      "Integrity, reliability and innovation guide every project we take on  from installation to ongoing support.",
  },

  {
    icon: <GiCrystalGrowth />,
    title: "Our Growth",
    description:
      "Years of hands on experience across software, networking and security, growing alongside the businesses we serve.",
  },
];

interface TeamMember {
  image: string;
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    image: "/images/cto.png",
    name: "Ian D",
    role: "Founder & CEO",
  },
  {
    image: "/images/COO.png",
    name: "Luke K",
    role: "Operations Manager",
  },
  {
    image: "/images/istockphoto-2151669184-612x612.jpg",
    name: "Moses M",
    role: "Sales & Marketing Lead",
  },

  {
    image: "/images/ruth_kibet.jpeg",
    name: "Ruth K",
    role: "Sales Marketer",
  },
  {
    image: "/images/Michael.jpeg",
    name: "Michael M",
    role: "Lead Software Developer",
  },
  {
    image: "/images/WhatsApp Image 2026-08-04 at 12.18.29 PM.jpeg",
    name: "Morris M",
    role: "Senior Software Developer",
  },

  {
    image: "/images/istockphoto-2151669184-612x612.jpg",
    name: "Hassan F",
    role: "Senior Software Developer",
  },

  {
    image: "/images/istockphoto-2151669184-612x612.jpg",
    name: "Fidel M",
    role: "Software Developer",
  },

  {
    image: "/images/istockphoto-2151669184-612x612.jpg",
    name: "Moses K",
    role: "Project Manager",
  },
  {
    image: "/images/istockphoto-2151669184-612x612.jpg",
    name: "Francis M",
    role: "Junior Software Developer",
  },
  {
    image: "/images/istockphoto-2151669184-612x612.jpg",
    name: "Joe W",
    role: "Software Developer",
  },
  {
    image: "/images/istockphoto-2151669184-612x612.jpg",
    name: "Collins K",
    role: "Lead Technical Engineer",
  },
  {
    image: "/images/istockphoto-2151669184-612x612.jpg",
    name: "Kelvin K",
    role: "Technical Engineer",
  },
  {
    image: "/images/istockphoto-2151669184-612x612.jpg",
    name: "Esther N",
    role: "Help Desk Support/Software Developer",
  }
];


interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: Timestamp | null;
}

const About = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [reviewError, setReviewError] = useState("");

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Review[];
        setReviews(data);
        setReviewsLoading(false);
      },
      (err) => {
        console.error("Error fetching reviews:", err);
        setReviewsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setReviewError("");

    if (!name.trim() || !comment.trim() || rating === 0) {
      setReviewError("Please fill in your name, a comment, and a star rating.");
      return;
    }

    try {
      setSubmitting(true);
      await addDoc(collection(db, "reviews"), {
        name: name.trim(),
        comment: comment.trim(),
        rating,
        createdAt: serverTimestamp(),
      });
      setName("");
      setComment("");
      setRating(0);
    } catch (err) {
      console.error("Error submitting review:", err);
      setReviewError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="About Us | Movec - Our Story"
        description="Movec was built to make choosing an internet provider simple and transparent, helping people compare real plans and prices without the guesswork."
        path="/about" />

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
          backgroundImage: "url('images/graphixmade-ai-generated-8990043.png ')",
        }}>
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <HeroHeader
            eyebrow="About Us"
            title="Who we are and"
            span="what drives us"
            description="We're a technology company built on reliability and trust  helping businesses grow with the right tools, systems and support behind them."
            variant="dark"
            align="center" />
        </div>
      </section>

      {/* About Cards Section */}
      <section
        id="about"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            eyebrow=""
            title="What makes us"
            span="different"
            description="Here's a closer look at what shapes the way we work and the value we bring to every client." />
          <div
            className="
    py-16
    px-4
    sm:px-6
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-2
    gap-6
    md:gap-8">
            {aboutItems.map((item, index) => (
              <AboutCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="
          py-20
          bg-white
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            eyebrow=""
            title="Meet the"
            span="team"
            description="The people behind Movec, working every day to keep our clients connected, secure and supported." />

          <div
            className="
              py-16
              px-4
              sm:px-6
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              gap-8
              md:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-28 h-28 sm:w-32 sm:h-32 border-4 border-orange-500 aspect-square object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300" />
                <h3 className="mt-4 font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            eyebrow=""
            title="What our"
            span="clients say"
            description="Real feedback from the businesses and individuals we've worked with." />

          {/* Reviews Marquee */}
          {reviewsLoading ? (
            <p className="text-center text-slate-500 dark:text-slate-400 py-16">
              Loading reviews...
            </p>
          ) : reviews.length === 0 ? (
            <p className="text-center text-slate-500 dark:text-slate-400 py-16">
              No reviews at the moment. Be the first to leave one below.
            </p>
          ) : (
            <div className="relative py-16 -mx-6 lg:-mx-8 overflow-hidden group">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[#f5f5f5] dark:from-black to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[#f5f5f5] dark:from-black to-transparent" />

              <div
                className={`flex w-max ${reviews.length > 2
                  ? "animate-marquee group-hover:[animation-play-state:paused]"
                  : "justify-center flex-wrap w-full"
                  }`}>
                {(reviews.length > 2 ? [...reviews, ...reviews] : reviews).map(
                  (review, index) => (
                    <div
                      key={`${review.id}-${index}`}
                      className="
                        w-[300px]
                        sm:w-[340px]
                        shrink-0
                        mx-3
                        bg-white
                        dark:bg-white/5
                        border
                        flex flex-col 
                        items-center
                        border-gray-200
                        dark:border-white/10
                        rounded-full
                        p-6">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < review.rating
                                ? "text-orange-500"
                                : "text-gray-300 dark:text-white/10"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm text-center">
                        {review.comment}
                      </p>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {review.name}
                      </p>
                    </div>
                  )
                )}
              </div>

              <style>{`
                @keyframes marquee {
                  from { transform: translateX(0); }
                  to { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 30s linear infinite;
                }
              `}</style>
            </div>
          )}

          {/* Add Review Form */}
          <div className="max-w-xl mx-auto mt-8">
            <div
              className="
                bg-white
                dark:bg-white/5
                dark:border-white/10
                rounded-3xl
                p-6
                sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Leave a review
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Tell others about your experience working with us.
              </p>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="
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
                    border-transparent
                    focus:border-orange-500
                    outline-none
                    transition-all"/>

                <textarea
                  rows={4}
                  placeholder="Your Review"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  className="
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
                    border-transparent
                    focus:border-orange-500
                    outline-none
                    resize-none
                    transition-all"/>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400 mr-2">
                    Your rating:
                  </span>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const starValue = i + 1;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHoverRating(starValue)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="cursor-pointer">
                        <FaStar
                          className={
                            starValue <= (hoverRating || rating)
                              ? "text-orange-500"
                              : "text-gray-300 dark:text-white/10"
                          }
                        />
                      </button>
                    );
                  })}
                </div>

                {reviewError && (
                  <p className="text-sm text-red-500">{reviewError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    w-full
                    sm:w-auto
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-8
                    py-3
                    rounded-lg
                    font-semibold
                    transition-colors
                    duration-300
                    cursor-pointer
                    disabled:opacity-60
                    disabled:cursor-not-allowed">
                  {submitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;