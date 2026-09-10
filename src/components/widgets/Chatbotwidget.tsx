import { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";
import { FiX, FiSend } from "react-icons/fi";
import { RiRobot3Fill } from "react-icons/ri";

/**
 * ChatbotWidget
 * -----------------------------------------------------------------------
 * A floating chat widget that talks to Google's Gemini API directly from
 * the browser. Drop this component anywhere in your app (e.g. in App.tsx)
 * and it will render a chat bubble in the bottom-right corner.
 *
 * SETUP
 * 1. Install react-icons if you haven't already:
 *      npm install react-icons
 * 2. Create a `.env` file in your project root (Vite) with:
 *      VITE_GEMINI_API_KEY=your_key_here
 *    (If you're using Create React App instead of Vite, use
 *     REACT_APP_GEMINI_API_KEY and swap `import.meta.env.VITE_GEMINI_API_KEY`
 *     for `process.env.REACT_APP_GEMINI_API_KEY` below.)
 * 3. Add `.env` to your `.gitignore` so the key never gets committed.
 * 4. Import and render <ChatbotWidget /> once, near the root of your app.
 *
 * DARK MODE
 * This uses Tailwind's `dark:` variants, which follow whatever strategy
 * your project already uses (class-based `dark` on <html>, or the `media`
 * strategy). No extra setup needed here — it just inherits your site's
 * current theme automatically.
 *
 * SECURITY NOTE
 * Because this calls Gemini directly from the browser, the API key is
 * visible to anyone who inspects network requests. That's an acceptable
 * tradeoff for a personal project or MVP, since Gemini's free tier has
 * built-in quota limits. For a production/public site, move the fetch
 * call into a small backend or serverless function that holds the key
 * server-side, and have this component call your own endpoint instead.
 * -----------------------------------------------------------------------
 */

type Role = "user" | "model";

interface ChatMessage {
  role: Role;
  text: string;
}

// Change this to whichever Gemini model you want to use.
const GEMINI_MODEL = "gemini-3.6-flash";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;

// Company/site facts the bot can answer from. Keep this in sync with the
// content on the actual pages (Services.tsx, About.tsx, Contacts.tsx,
// Footer.tsx) whenever those change.
const COMPANY_KNOWLEDGE = `
Company: Movec Connect
Mission: Deliver reliable, affordable technology solutions that help
businesses stay connected, secure and productive.
Vision: Become the most trusted technology partner for businesses seeking
smart, scalable infrastructure and support.
Values: Integrity, reliability and innovation, from installation to
ongoing support.

Services offered:
- Custom Software Development: reliable software built around your
  business needs, from web applications to business management systems.
- Billing Systems: automated, secure billing, invoicing and payment
  record management.
- Starlink Installation: high-speed internet setup for homes, offices
  and remote business locations.
- CCTV Security Systems: professional CCTV installation and monitoring.
- GPS Fleet Tracking: real-time vehicle tracking to improve efficiency
  and manage fleets.
- IT Support & Networking: network setup, maintenance and technical
  support.

Contact:
- Email: sales@movecconnect.com
- Phone / WhatsApp: +254 796 287 392
- Location: SMK Business Park, Enterprise Road, Nairobi, Kenya
- Contact form: available on the Contact page of this site.
`.trim();

// Optional: give the bot context about your site/business so it answers
// visitor questions well. Edit this (and COMPANY_KNOWLEDGE above) to
// describe what your site is about.
const SYSTEM_INSTRUCTION =
  "You are a helpful assistant embedded on the Movec Connect company " +
  "website. Answer visitor questions clearly and concisely, in a " +
  "friendly, professional tone, using the facts below. If a visitor " +
  "asks something not covered by these facts, say so honestly instead " +
  "of guessing, and point them to the contact details below.\n\n" +
  COMPANY_KNOWLEDGE;

async function askGemini(history: ChatMessage[]): Promise<string> {
  if (!API_KEY) {
    return "Chatbot isn't configured yet — missing VITE_GEMINI_API_KEY.";
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${API_KEY}`;

  const body = {
    systemInstruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }],
    },
    contents: history.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    })),
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Gemini API error:", errText);
    throw new Error("Gemini API request failed");
  }

  const data = await res.json();
  const text: string | undefined =
    data?.candidates?.[0]?.content?.parts?.[0]?.text;

  return text ?? "Sorry, I couldn't generate a response. Please try again.";
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "Hi! I'm here to help with any questions about our site. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", text: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const reply = await askGemini(nextMessages);
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (err) {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-44 right-8 z-[60] font-sans">
      {isOpen ? (
        <div className="flex h-[min(32rem,70vh)] w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:w-96">
          {/* Header */}
          <div className="flex items-center justify-between bg-slate-900 px-4 py-3 text-white dark:bg-slate-800">
            <span className="font-medium">Chat with us</span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-slate-300 transition hover:bg-slate-700 hover:text-white text-sm"
            >
              close
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-3 py-4 dark:bg-slate-950"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                      : "border border-slate-200 bg-white text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">
                  Typing…
                </div>
              </div>
            )}
            {error && (
              <div className="text-center text-xs text-red-500 dark:text-red-400">
                {error}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={isLoading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white transition hover:bg-slate-700 disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
            >
              <FiSend size={16} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
        >
          <RiRobot3Fill size={24} />
        </button>
      )}
    </div>
  );
}