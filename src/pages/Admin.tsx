import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import type { User } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { Helmet } from "react-helmet-async";

import { auth, db } from "../config/Firebase";
import {
  POST_CATEGORIES,
  POST_IMAGES,
  formatPostDate,
} from "../dummydata/Posts";
import type { Post, PostCategory } from "../dummydata/Posts";
import { buildPostEmail } from "../lib/postEmail";

// Resend's free plan sends at most 100 emails a day.
const DAILY_EMAIL_LIMIT = 100;
// Firestore allows at most 500 writes in one batch.
const BATCH_SIZE = 450;

interface Subscriber {
  id: string;
  email: string;
  unsubscribed?: boolean;
}

interface SubscriberSnapshot {
  docs: { id: string; data(): Omit<Subscriber, "id"> }[];
}

interface PostsSnapshot {
  docs: { id: string; data(): Omit<Post, "id"> }[];
}

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-slate-900 dark:text-white outline-none focus:border-orange-500";

// Active subscribers, one per email address.
const loadSubscribers = async (): Promise<Subscriber[]> => {
  const snapshot: SubscriberSnapshot = await getDocs(collection(db, "subscribers"));
  const seen = new Set<string>();
  const active: Subscriber[] = [];
  for (const d of snapshot.docs) {
    const sub = { id: d.id, ...d.data() };
    const email = sub.email?.trim().toLowerCase();
    if (!email || sub.unsubscribed || seen.has(email)) continue;
    seen.add(email);
    active.push(sub);
  }
  return active;
};

/**
 * Admin
 * -----------------------------------------------------------------------
 * Private page (not linked from the menu) for publishing news, events,
 * holidays, adverts and announcements. Each post is saved to Firestore
 * `posts` (shown on the News page) and, optionally, emailed to every
 * subscriber by writing one document per subscriber to `mail`, which the
 * Firebase "Trigger Email" extension sends through Resend.
 *
 * Only signed-in users with a document in `admins/{uid}` can use it; the
 * Firestore rules (firestore.rules) enforce the same check.
 * -----------------------------------------------------------------------
 */
const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setIsAdmin(null);
      setAuthReady(true);
      if (u) {
        try {
          const adminDoc = await getDoc(doc(db, "admins", u.uid));
          setIsAdmin(adminDoc.exists());
        } catch {
          setIsAdmin(false);
        }
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin | Movec</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="min-h-screen pt-32 pb-20 bg-[#f5f5f5] dark:bg-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          {!authReady ? (
            <p className="text-center text-slate-500">Loading…</p>
          ) : !user ? (
            <LoginForm />
          ) : isAdmin === null ? (
            <p className="text-center text-slate-500">Checking access…</p>
          ) : !isAdmin ? (
            <NotAuthorized user={user} />
          ) : (
            <Dashboard user={user} />
          )}
        </div>
      </section>
    </>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch {
      setError("Wrong email or password.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 space-y-4">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin sign in</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className={inputClass} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className={inputClass} />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={busy}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg disabled:opacity-60">
        {busy ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
};

const NotAuthorized = ({ user }: { user: User }) => (
  <div className="max-w-md mx-auto text-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8">
    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">No admin access</h1>
    <p className="mt-3 text-slate-600 dark:text-slate-400">
      {user.email} is signed in but isn't an admin.
    </p>
    <button
      onClick={() => signOut(auth)}
      className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg">
      Sign out
    </button>
  </div>
);

const Dashboard = ({ user }: { user: User }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);

  useEffect(() => {
    loadSubscribers()
      .then((subs) => setSubscriberCount(subs.length))
      .catch(() => setSubscriberCount(null));

    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot: PostsSnapshot) =>
      setPosts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
  }, []);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Movec admin</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Signed in as {user.email} ·{" "}
            {subscriberCount === null ? "…" : subscriberCount} active subscribers
          </p>
        </div>
        <button
          onClick={() => signOut(auth)}
          className="px-5 py-2 border border-gray-300 dark:border-white/20 rounded-lg text-slate-700 dark:text-white hover:border-orange-500">
          Sign out
        </button>
      </div>

      <NewPostForm subscriberCount={subscriberCount} />

      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Published posts</h2>
        {posts.length === 0 ? (
          <p className="text-slate-500">Nothing published yet.</p>
        ) : (
          <ul className="space-y-3">
            {posts.map((post) => (
              <li
                key={post.id}
                className="flex items-center gap-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-3">
                <img src={post.image} alt="" className="w-20 h-14 object-cover rounded-lg shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-white truncate">{post.title}</p>
                  <p className="text-xs text-slate-500">
                    {post.category} · {formatPostDate(post.createdAt)} ·{" "}
                    {post.emailed ? `emailed to ${post.recipients}` : "not emailed"}
                  </p>
                </div>
                <Link to={`/news/${post.id}`} className="text-sm text-orange-500 font-semibold shrink-0">
                  View
                </Link>
                <button
                  onClick={() => {
                    if (window.confirm(`Delete "${post.title}" from the website? Emails already sent can't be recalled.`)) {
                      deleteDoc(doc(db, "posts", post.id));
                    }
                  }}
                  className="text-sm text-red-500 font-semibold shrink-0">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const NewPostForm = ({ subscriberCount }: { subscriberCount: number | null }) => {
  const [category, setCategory] = useState<PostCategory>("News");
  const [image, setImage] = useState(POST_IMAGES.News[0]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [sendEmail, setSendEmail] = useState(true);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const changeCategory = (c: PostCategory) => {
    setCategory(c);
    setImage(POST_IMAGES[c][0]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("");

    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();
    if (!trimmedTitle || !trimmedBody) {
      setError("Add a title and a message.");
      return;
    }

    const confirmText = sendEmail
      ? `Publish "${trimmedTitle}" on the website and email it to all subscribers?`
      : `Publish "${trimmedTitle}" on the website (no email)?`;
    if (!window.confirm(confirmText)) return;

    setBusy(true);
    try {
      setStatus("Publishing…");
      const postRef = await addDoc(collection(db, "posts"), {
        title: trimmedTitle,
        category,
        body: trimmedBody,
        image,
        createdAt: serverTimestamp(),
        emailed: false,
        recipients: 0,
      });

      if (sendEmail) {
        setStatus("Preparing emails…");
        const subscribers = await loadSubscribers();
        for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
          const batch = writeBatch(db);
          for (const sub of subscribers.slice(i, i + BATCH_SIZE)) {
            batch.set(doc(collection(db, "mail")), {
              to: sub.email.trim(),
              message: buildPostEmail({
                postId: postRef.id,
                subscriberId: sub.id,
                title: trimmedTitle,
                category,
                body: trimmedBody,
                image,
              }),
              postId: postRef.id,
              createdAt: serverTimestamp(),
            });
          }
          setStatus(`Queuing emails… ${Math.min(i + BATCH_SIZE, subscribers.length)}/${subscribers.length}`);
          await batch.commit();
        }
        await updateDoc(postRef, { emailed: true, recipients: subscribers.length });
        setStatus(`Published and queued ${subscribers.length} emails.`);
      } else {
        setStatus("Published on the website.");
      }

      setTitle("");
      setBody("");
    } catch (err) {
      console.error("Publishing failed:", err);
      setError("Something went wrong. Check your connection and try again.");
      setStatus("");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">New post</h2>

      <div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Type</p>
        <div className="flex flex-wrap gap-2">
          {POST_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => changeCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                c === category
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "border-gray-300 dark:border-white/20 text-slate-700 dark:text-slate-300 hover:border-orange-500"
              }`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Image</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {POST_IMAGES[category].map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setImage(src)}
              aria-label="Use this image"
              className={`rounded-lg overflow-hidden border-4 transition-colors ${
                src === image ? "border-orange-500" : "border-transparent hover:border-orange-300"
              }`}>
              <img src={src} alt="" className="w-full h-24 object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="post-title" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Title
        </label>
        <input
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={150}
          placeholder="e.g. Happy Holidays from Movec"
          className={`${inputClass} mt-2`} />
      </div>

      <div>
        <label htmlFor="post-body" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Message
        </label>
        <textarea
          id="post-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={7}
          maxLength={5000}
          placeholder="Write the message. Leave an empty line between paragraphs."
          className={`${inputClass} mt-2`} />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
        <input
          type="checkbox"
          checked={sendEmail}
          onChange={(e) => setSendEmail(e.target.checked)}
          className="mt-1 h-4 w-4 accent-orange-500" />
        <span>
          Email this to all subscribers
          {subscriberCount !== null && ` (${subscriberCount})`}
          {sendEmail && subscriberCount !== null && subscriberCount > DAILY_EMAIL_LIMIT && (
            <span className="block mt-1 text-red-500">
              The free email plan sends at most {DAILY_EMAIL_LIMIT} emails a day, so some
              subscribers may not get this one.
            </span>
          )}
        </span>
      </label>

      {error && <p className="text-sm text-red-500">{error}</p>}
      {status && <p className="text-sm text-[#10B982] font-medium">{status}</p>}

      <button
        type="submit"
        disabled={busy}
        className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg disabled:opacity-60 disabled:cursor-not-allowed">
        {busy ? "Working…" : sendEmail ? "Publish & email" : "Publish"}
      </button>
    </form>
  );
};

export default Admin;
