import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { Helmet } from "react-helmet-async";

import { db } from "../config/Firebase";

type Status = "working" | "done" | "error";

/**
 * Unsubscribe
 * -----------------------------------------------------------------------
 * Opened from the "Unsubscribe" link in every subscriber email
 * (/unsubscribe?id=<subscriber doc id>). Marks that subscriber as
 * unsubscribed so the admin page skips them on future sends. The doc id is
 * a random, unguessable value only that subscriber receives.
 * -----------------------------------------------------------------------
 */
const Unsubscribe = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const [status, setStatus] = useState<Status>(id ? "working" : "error");

  useEffect(() => {
    if (!id) return;
    updateDoc(doc(db, "subscribers", id), { unsubscribed: true })
      .then(() => setStatus("done"))
      .catch(() => setStatus("error"));
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Unsubscribe | Movec</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="min-h-[70vh] pt-32 pb-20 flex items-center bg-[#f5f5f5] dark:bg-black">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {status === "working" && "Unsubscribing…"}
            {status === "done" && "You've been unsubscribed"}
            {status === "error" && "We couldn't unsubscribe you"}
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {status === "done" && "You won't receive any more emails from Movec Systems."}
            {status === "error" &&
              "The link may be incomplete or already used. Contact us and we'll remove you from the list."}
          </p>
          <Link
            to={status === "error" ? "/contact" : "/"}
            className="inline-block mt-8 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium">
            {status === "error" ? "Contact us" : "Back to the website"}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Unsubscribe;
