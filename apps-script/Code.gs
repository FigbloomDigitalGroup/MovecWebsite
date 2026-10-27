/**
 * Movec subscriber emails — Google Apps Script
 * ---------------------------------------------------------------------------
 * Sends a post published from the website's /admin page to every newsletter
 * subscriber through the Gmail account this script runs in.
 *
 * Setup: paste this whole file into a new project at script.google.com,
 * then Deploy → New deployment → Web app (Execute as: Me, Who has access:
 * Anyone). See docs/ADMIN_SETUP.md.
 *
 * Security: the admin page sends its Firebase sign-in token. The script uses
 * that token to read the subscriber list from Firestore, and the Firestore
 * rules only allow that for admins. So if the caller isn't a signed-in
 * admin, the read fails and nothing is sent.
 *
 * Gmail limits how many emails one account can send a day (about 100 for a
 * free Gmail account, about 1,500 for Google Workspace), and a script run
 * is limited to 6 minutes. When either limit is reached the script stops,
 * remembers where it got to for that post, and the admin page offers
 * "Send to remaining" to continue later.
 * ---------------------------------------------------------------------------
 */

var FIREBASE_PROJECT_ID = 'reviews-c5d57';
var SENDER_NAME = 'Movec Systems';
// Must match SUBSCRIBER_PLACEHOLDER in src/lib/postEmail.ts.
var SUBSCRIBER_PLACEHOLDER = 'SUBSCRIBERIDPLACEHOLDER';
// Stop before Apps Script's 6-minute limit.
var TIME_BUDGET_MS = 5 * 60 * 1000;

function doPost(e) {
  var started = Date.now();
  try {
    var req = JSON.parse(e.postData.contents);
    if (!req.idToken || !req.postId || !req.subject || !req.html || !req.text) {
      return reply_({ ok: false, error: 'Missing fields in the request.' });
    }

    // Only works for a signed-in admin (enforced by the Firestore rules).
    var subscribers = loadSubscribers_(req.idToken);

    var props = PropertiesService.getScriptProperties();
    var key = 'sent_' + req.postId;
    var offset = Number(props.getProperty(key) || 0);
    var quota = MailApp.getRemainingDailyQuota();
    var sent = 0;
    var failed = 0;

    while (offset < subscribers.length) {
      if (quota <= 0 || Date.now() - started > TIME_BUDGET_MS) break;
      var sub = subscribers[offset];
      try {
        MailApp.sendEmail({
          to: sub.email,
          subject: req.subject,
          htmlBody: req.html.split(SUBSCRIBER_PLACEHOLDER).join(encodeURIComponent(sub.id)),
          body: req.text.split(SUBSCRIBER_PLACEHOLDER).join(encodeURIComponent(sub.id)),
          name: SENDER_NAME
        });
        sent++;
        quota--;
      } catch (err) {
        // e.g. an invalid address: skip it rather than block everyone else.
        failed++;
      }
      offset++;
      props.setProperty(key, String(offset));
    }

    return reply_({
      ok: true,
      sent: sent,
      failed: failed,
      done: offset,
      total: subscribers.length,
      remaining: subscribers.length - offset
    });
  } catch (err) {
    return reply_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

// Active subscribers in sign-up order, one per email address. Sign-up order
// keeps "Send to remaining" stable when new people subscribe in between.
function loadSubscribers_(idToken) {
  var base = 'https://firestore.googleapis.com/v1/projects/' + FIREBASE_PROJECT_ID +
    '/databases/(default)/documents/subscribers?pageSize=300';
  var docs = [];
  var pageToken = '';
  do {
    var res = UrlFetchApp.fetch(base + (pageToken ? '&pageToken=' + encodeURIComponent(pageToken) : ''), {
      headers: { Authorization: 'Bearer ' + idToken },
      muteHttpExceptions: true
    });
    if (res.getResponseCode() !== 200) {
      throw new Error('Not allowed to read subscribers. Sign in again as an admin and retry.');
    }
    var data = JSON.parse(res.getContentText());
    docs = docs.concat(data.documents || []);
    pageToken = data.nextPageToken || '';
  } while (pageToken);

  var subs = docs.map(function (d) {
    var f = d.fields || {};
    return {
      id: d.name.split('/').pop(),
      email: f.email && f.email.stringValue ? f.email.stringValue.trim() : '',
      unsubscribed: !!(f.unsubscribed && f.unsubscribed.booleanValue),
      at: f.subscribedAt && f.subscribedAt.timestampValue ? f.subscribedAt.timestampValue : ''
    };
  });
  subs.sort(function (a, b) {
    return a.at < b.at ? -1 : a.at > b.at ? 1 : a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });

  var seen = {};
  return subs.filter(function (s) {
    var email = s.email.toLowerCase();
    if (!email || s.unsubscribed || seen[email]) return false;
    seen[email] = true;
    return true;
  });
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Run this once from the editor (select it, click Run) to grant the script
// permission to send email and call Firestore before deploying.
function authorize() {
  MailApp.getRemainingDailyQuota();
  UrlFetchApp.fetch('https://firestore.googleapis.com/', { muteHttpExceptions: true });
}
