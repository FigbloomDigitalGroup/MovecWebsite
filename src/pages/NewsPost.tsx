import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../config/Firebase";
import { Seo } from "../components/SEO/Seo";
import { formatPostDate, postExcerpt } from "../dummydata/Posts";
import type { Post } from "../dummydata/Posts";

/**
 * NewsPost
 * -----------------------------------------------------------------------
 * Full view of one post published from the admin page. Subscriber emails
 * link here ("Read on the Movec website").
 * -----------------------------------------------------------------------
 */
const NewsPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "missing">("loading");

  useEffect(() => {
    if (!id) return;
    getDoc(doc(db, "posts", id))
      .then((snap: { exists(): boolean; id: string; data(): Omit<Post, "id"> }) => {
        if (!snap.exists()) {
          setState("missing");
          return;
        }
        setPost({ id: snap.id, ...snap.data() });
        setState("ready");
      })
      .catch(() => setState("missing"));
  }, [id]);

  if (state !== "ready" || !post) {
    return (
      <section className="min-h-[70vh] pt-32 pb-20 flex items-center bg-[#f5f5f5] dark:bg-black">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {state === "loading" ? "Loading…" : "This post isn't available"}
          </h1>
          {state === "missing" && (
            <Link to="/news" className="inline-block mt-6 text-orange-500 font-semibold">
              See all news
            </Link>
          )}
        </div>
      </section>
    );
  }

  return (
    <>
      <Seo
        title={`${post.title} | Movec News`}
        description={postExcerpt(post.body, 155)}
        path={`/news/${post.id}`}
        type="article" />

      <article className="pt-28 pb-20 bg-[#f5f5f5] dark:bg-black transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/news" className="text-sm font-semibold text-orange-500">
            ← All news
          </Link>
          <img
            src={post.image}
            alt=""
            className="mt-6 w-full h-64 md:h-96 object-cover rounded-2xl" />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="bg-orange-500 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1">
              {post.category}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {formatPostDate(post.createdAt)}
            </span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {post.title}
          </h1>
          <div className="mt-6 space-y-4">
            {post.body.split(/\n{2,}/).map((paragraph, i) => (
              <p key={i} className="leading-8 text-slate-700 dark:text-slate-300 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default NewsPost;
