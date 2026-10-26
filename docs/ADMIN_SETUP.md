# Admin page setup (posts + subscriber emails)

The admin page at **`/admin`** lets you publish News, Events, Holidays, Adverts
and Announcements. Each post appears on the News page and can be emailed to all
newsletter subscribers from **Movec Systems** through Gmail.

Everything is free: Firebase stays on the free **Spark** plan, and emails are
sent by a small **Google Apps Script** that runs in a Google account. No card,
no server.

```
/admin ──"Publish & email"──▶ Firestore `posts` ──▶ News page
   │
   └──▶ Google Apps Script ──reads `subscribers`──▶ Gmail ──▶ subscribers' inboxes
```

Do the steps below once, in order.

## Part A: Firebase (project `reviews-c5d57`)

### A1. Turn on login and create your admin account

1. [Firebase Console](https://console.firebase.google.com) → project **reviews-c5d57** → **Build → Authentication** → **Get started**.
2. **Sign-in method** → **Email/Password** → **Enable** → **Save**.
3. **Users** → **Add user** → `francis@figbloom.org` + a strong password (your `/admin` password).
4. Copy the new user's **User UID**.

### A2. Mark yourself as an admin

1. **Build → Firestore Database → Data** → **+ Start collection** → Collection ID `admins`.
2. **Document ID:** paste the **User UID** (don't use Auto-ID).
3. Field `email` (string) = `francis@figbloom.org` → **Save**.

### A3. Publish the security rules

**Firestore Database → Rules** → delete everything → paste the whole of
[`firestore.rules`](../firestore.rules) → **Publish**. This protects the
subscriber list, posts and reviews. Publishing replaces all existing rules,
so always use the whole file.

## Part B: Google Apps Script (sends the emails)

Use the Google account the emails should come **from**. Subscribers see this
address; the sender name shows as **Movec Systems**. Limits: about **100
recipients a day** on a free Gmail account, about **1,500** on Google Workspace.

### B1. Create the script

1. Signed in to that Google account, open **[script.google.com](https://script.google.com)** → **New project**.
2. Rename it (top left) to `Movec subscriber emails`.
3. Delete the sample code in `Code.gs` and paste **the whole of** [`apps-script/Code.gs`](../apps-script/Code.gs).
4. Click **Save** (💾).

### B2. Give it permission

1. In the toolbar, choose the function **`authorize`** in the dropdown → **Run**.
2. **Review permissions** → choose the account → if Google shows "Google hasn't
   verified this app": **Advanced** → **Go to Movec subscriber emails (unsafe)**.
   This is your own script, so it's safe. → **Allow**.

### B3. Deploy it as a web app

1. **Deploy** (top right) → **New deployment** → ⚙ next to "Select type" → **Web app**.
2. Description: `v1`. **Execute as:** **Me**. **Who has access:** **Anyone**.
3. **Deploy** → copy the **Web app URL** (`https://script.google.com/macros/s/…/exec`).

"Anyone" only means the website can reach it. The script refuses to send
unless the request carries your admin sign-in.

### B4. Connect it to the website

Put the Web app URL in [`src/config/site.ts`](../src/config/site.ts) as
`APPS_SCRIPT_URL`, and set `SITE_URL` there to the live website address (used
for the logo and links in emails). Then merge and deploy the website.

> **Changing the script later:** edit it, then **Deploy → Manage deployments →
> ✏ Edit → Version: New version → Deploy**. The URL stays the same.

## Part C: Test

1. Subscribe on the website with your own email (footer).
2. Open `/admin`, sign in, write a short **News** post, keep **Email this to all
   subscribers** ticked → **Publish & email**. Keep the page open until it says
   how many were sent.
3. Check your inbox (and spam). Click **Unsubscribe** in the email to check that works too.

## Good to know

- **Daily limit:** if Gmail's daily limit is reached, the admin page says how
  many are left. Click **Send to remaining** next to the post later or the next
  day; it continues where it stopped and never sends anyone the same post twice.
- **Posts published without email** can be emailed later with **Email it** in the list.
- **Images** come from the ready-made sets in
  [`src/dummydata/Posts.ts`](../src/dummydata/Posts.ts). To add choices, put the
  image in `public/images/` and add its path to the right category.
- **Spam folder:** the first emails may land in spam. Ask early subscribers to
  mark them "Not spam".
- Deleting a post removes it from the website; emails already sent can't be recalled.
