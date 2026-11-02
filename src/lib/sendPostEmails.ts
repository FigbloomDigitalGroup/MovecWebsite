import type { User } from "firebase/auth";

import { APPS_SCRIPT_URL } from "../config/site";
import type { PostCategory } from "../dummydata/Posts";
import { SUBSCRIBER_PLACEHOLDER, buildPostEmail } from "./postEmail";

export interface SendResult {
  sent: number;
  failed: number;
  done: number;
  total: number;
  remaining: number;
}

interface PostToEmail {
  id: string;
  title: string;
  category: PostCategory;
  body: string;
  image: string;
}

export const emailSendingConfigured = APPS_SCRIPT_URL !== "";

/**
 * Asks the Google Apps Script (apps-script/Code.gs) to email a post to every
 * subscriber through Gmail. Sends the admin's Firebase sign-in token so the
 * script can prove the request comes from an admin. Calling it again for the
 * same post continues where the last run stopped (daily Gmail limit).
 */
export const sendPostEmails = async (user: User, post: PostToEmail): Promise<SendResult> => {
  const idToken = await user.getIdToken();
  const { subject, html, text } = buildPostEmail({
    postId: post.id,
    subscriberId: SUBSCRIBER_PLACEHOLDER,
    title: post.title,
    category: post.category,
    body: post.body,
    image: post.image,
  });

  // No custom headers, so the browser sends a "simple" request that Apps
  // Script web apps accept from another site.
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ idToken, postId: post.id, subject, html, text }),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || "The email script returned an error.");
  return data as SendResult;
};
