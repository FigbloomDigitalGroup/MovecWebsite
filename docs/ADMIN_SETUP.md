# Admin page setup (posts + subscriber emails)

The admin page at **`/admin`** lets you publish News, Events, Holidays, Adverts
and Announcements. Each post appears on the News page and can be emailed to all
newsletter subscribers from **Movec Systems**.

The code is done. The steps below are one-time setup in the **Firebase Console**
(project `reviews-c5d57`) and **Resend**. Do them in order.

## 1. Switch the Firebase project to the Blaze plan

Firebase extensions need it. At Movec's size it is normally $0 (Blaze includes
the free allowance), but it needs a payment card.

1. Firebase Console → ⚙ **Usage and billing** → **Details & settings** → **Modify plan** → **Blaze**.
2. Set a **budget alert** (e.g. $5) so you're warned if anything ever costs money.

## 2. Create your admin login

1. **Build → Authentication → Get started** → **Sign-in method** → enable **Email/Password**.
2. **Users** tab → **Add user** → `francis@figbloom.org` and a strong password.
3. Copy the new user's **User UID** (long code in the users list).

## 3. Mark that user as an admin

1. **Build → Firestore Database → Data** → **Start collection** → Collection ID: `admins`.
2. **Document ID:** paste the **User UID** from step 2.3.
3. Add one field: `email` (string) = `francis@figbloom.org` → **Save**.

To add another admin later, repeat steps 2–3 with their email.

## 4. Publish the security rules

1. **Firestore Database → Rules**.
2. Replace everything with the contents of [`firestore.rules`](../firestore.rules) → **Publish**.

This also protects the subscriber list and reviews. Publishing replaces all
existing rules, so use the whole file.

## 5. Verify your domain in Resend

Resend → **Domains → Add Domain** → add the DNS records it shows where the
domain is managed → wait until it says **Verified**. Emails can't be sent to
subscribers until this is done.

## 6. Install the "Trigger Email from Firestore" extension

Firebase Console → **Build → Extensions** → find **Trigger Email from Firestore**
(by Firebase) → **Install**. When asked:

| Setting | Value |
|---|---|
| Email documents collection | `mail` |
| SMTP connection URI | `smtps://resend@smtp.resend.com:465` |
| SMTP password | your **Resend API key** |
| Default FROM address | `Movec Systems <info@YOUR-DOMAIN>` (an address on the domain verified in step 5) |
| Default REPLY-TO address | the inbox replies should go to |
| Everything else | leave the default |

The API key is stored in Firebase's secret storage, never in the website code.

## 7. Set the live website address

In [`src/config/site.ts`](../src/config/site.ts), set `SITE_URL` to the live
site's address (e.g. `https://movec.co.ke`). Emails use it for the logo and the
"Read on the Movec website" and unsubscribe links.

## 8. Test

1. Subscribe on the website with your own email.
2. Go to `/admin`, sign in, write a short **News** post, leave **Email this to all
   subscribers** ticked → **Publish & email**.
3. Check your inbox (and spam). In Firestore → `mail`, each email shows a
   `delivery.state` of `SUCCESS` or an error message.

## Limits to know

- **Resend free plan:** 100 emails a day, 3,000 a month. With more than 100
  subscribers, a send reaches only the first 100 that day; the admin page warns
  you when that applies.
- **Images** come from the ready-made sets in
  [`src/dummydata/Posts.ts`](../src/dummydata/Posts.ts). To add choices, put the
  image in `public/images/` and add its path to the right category.
- Deleting a post removes it from the website; emails already sent can't be recalled.
