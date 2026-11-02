// The live website's address. Emails use it for the Movec logo and for the
// "Read more" and unsubscribe links, so it must be the real public address
// (no trailing slash).
// TODO: confirm this is the live address on Render.
export const SITE_URL = "https://movec.co.ke";

// Name shown in emails sent to subscribers.
export const SENDER_NAME = "Movec Systems";

// Web app address of the Google Apps Script that emails posts to subscribers
// (apps-script/Code.gs). Paste the "Web app URL" from Deploy here. While it's
// empty, the admin page can publish posts but not email them.
export const APPS_SCRIPT_URL = "";

// Movec logo used at the top of every email.
export const EMAIL_LOGO_PATH = "/images/movec logo f.png";
