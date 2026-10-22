import { useState } from "react";
import type { FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FaPaperPlane } from "react-icons/fa";

import { db } from "../../config/Firebase";

/**
 * NewsletterSubscribe
 * -----------------------------------------------------------------------
 * Email-only signup that writes to a `subscribers` collection in
 * Firestore, same pattern as the reviews feature in About.tsx. This is
 * a collector only — it does not send any emails itself. Whenever
 * there's an update/event to announce, export the collection (Firebase
 * Console > Firestore > subscribers > Export, or the Firebase CLI) and
 * send it through your own email tool.
 *
 * SECURITY NOTE
 * This collection should be write-only from the client: anyone can
 * submit an email (create), but nobody should be able to read, list,
 * update or delete it from the browser. Add this rule in the Firebase
 * Console (Firestore Database > Rules):
 *
 *   match /subscribers/{docId} {
 *     allow create: if request.resource.data.keys().hasOnly(['email', 'subscribedAt'])
 *                   && request.resource.data.email is string
 *                   && request.resource.data.email.size() < 200;
 *     allow read, update, delete: if false;
 *   }
 * -----------------------------------------------------------------------
 */

type Status = "idle" | "submitting" | "success" | "error";

interface Props {
  variant?: "light" | "dark";
}

const NewsletterSubscribe = ({ variant = "dark" }: Props) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const isDark = variant === "dark";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = email.trim();
    if (!/\S+@\S+\.\S+/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("submitting");
      await addDoc(collection(db, "subscribers"), {
        email: trimmed,
        subscribedAt: serverTimestamp(),
      });
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Error subscribing:", err);
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <p
        className={`text-sm font-medium ${
          isDark ? "text-[#10B982]" : "text-[#0d7a5f]"
        }`}>
        You're subscribed — we'll keep you posted on Movec news and events.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          disabled={status === "submitting"}
          className={`
            w-full
            px-4
            py-3
            rounded-lg
            outline-none
            border
            transition-all
            disabled:opacity-60
            ${
              isDark
                ? "bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-orange-500"
                : "bg-slate-100 border-transparent text-slate-900 placeholder:text-slate-400 focus:border-orange-500"
            }
          `}
        />
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="
          flex
          items-center
          justify-center
          gap-2
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-6
          py-3
          rounded-lg
          font-semibold
          whitespace-nowrap
          transition-colors
          duration-300
          cursor-pointer
          disabled:opacity-60
          disabled:cursor-not-allowed">
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
        {status !== "submitting" && <FaPaperPlane className="text-sm" />}
      </button>
    </form>
  );
};

export default NewsletterSubscribe;
