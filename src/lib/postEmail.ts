import { EMAIL_LOGO_PATH, SENDER_NAME, SITE_URL } from "../config/site";
import type { PostCategory } from "../dummydata/Posts";

// Stands in for the subscriber's id in the unsubscribe link. The Apps Script
// (apps-script/Code.gs) swaps it for each subscriber's real id when sending.
export const SUBSCRIBER_PLACEHOLDER = "SUBSCRIBERIDPLACEHOLDER";

interface PostEmailInput {
  postId: string;
  subscriberId: string;
  title: string;
  category: PostCategory;
  body: string;
  image: string;
}

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const absoluteUrl = (path: string) => `${SITE_URL}${encodeURI(path)}`;

/**
 * Builds the email a subscriber receives for a post: Movec logo, the post's
 * image, category, title and message, a button to read it on the website,
 * and a personal unsubscribe link. Table layout + inline styles so it renders
 * in Gmail, Outlook and phone mail apps.
 */
export const buildPostEmail = ({
  postId,
  subscriberId,
  title,
  category,
  body,
  image,
}: PostEmailInput) => {
  const postUrl = `${SITE_URL}/news/${postId}`;
  const unsubscribeUrl = `${SITE_URL}/unsubscribe?id=${encodeURIComponent(subscriberId)}`;
  const paragraphs = escapeHtml(body)
    .split(/\n{2,}/)
    .map(
      (p) =>
        `<p style="margin:0 0 16px;font-size:16px;line-height:26px;color:#334155;">${p.replace(/\n/g, "<br>")}</p>`
    )
    .join("");

  const html = `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
        <tr><td align="center" style="padding:24px;border-bottom:4px solid #f97316;">
          <a href="${SITE_URL}"><img src="${absoluteUrl(EMAIL_LOGO_PATH)}" alt="${SENDER_NAME}" width="160" style="display:block;border:0;height:auto;"></a>
        </td></tr>
        <tr><td><img src="${absoluteUrl(image)}" alt="" width="600" style="display:block;width:100%;height:auto;border:0;"></td></tr>
        <tr><td style="padding:32px 32px 8px;">
          <span style="display:inline-block;background:#f97316;color:#ffffff;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;padding:4px 12px;">${escapeHtml(category)}</span>
          <h1 style="margin:16px 0 16px;font-size:26px;line-height:34px;color:#0f172a;">${escapeHtml(title)}</h1>
          ${paragraphs}
        </td></tr>
        <tr><td style="padding:8px 32px 32px;">
          <a href="${postUrl}" style="display:inline-block;background:#f97316;color:#ffffff;font-size:16px;font-weight:bold;text-decoration:none;padding:14px 28px;">Read on the Movec website</a>
        </td></tr>
        <tr><td style="padding:24px 32px;background:#0b1120;color:#94a3b8;font-size:13px;line-height:20px;">
          <strong style="color:#10b981;">${SENDER_NAME}</strong><br>
          You're receiving this because you subscribed on the <a href="${SITE_URL}" style="color:#f97316;">Movec website</a>.<br>
          <a href="${unsubscribeUrl}" style="color:#94a3b8;">Unsubscribe</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = `${category.toUpperCase()}: ${title}

${body}

Read on the Movec website: ${postUrl}

--
${SENDER_NAME}
Unsubscribe: ${unsubscribeUrl}`;

  return { subject: `${title} | ${SENDER_NAME}`, html, text };
};
