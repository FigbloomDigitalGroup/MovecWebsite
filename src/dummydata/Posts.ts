// Posts published from the admin page (/admin). They are stored in the
// Firestore `posts` collection as text only; the image is the path of one of
// the ready-made images below, picked by the admin for the post's category.

export const POST_CATEGORIES = [
  "News",
  "Event",
  "Holiday",
  "Advert",
  "Announcement",
] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number];

// Ready-made images for each category. Add more paths here to give the admin
// more choices. Every path must be a file in /public.
export const POST_IMAGES: Record<PostCategory, string[]> = {
  News: [
    "/images/ar130405-business-2082639_1920.jpg",
    "/images/geralt-business-5205180.jpg",
    "/images/thedigitalartist-internet-1676139_1920.jpg",
    "/images/geralt-cloud-3843352_1920.jpg",
  ],
  Event: [
    "/images/posts/event-conference-audience.jpg",
    "/images/posts/event-business-conference.jpg",
    "/images/figbloom-vision-smart-security-booth.jpg",
  ],
  Holiday: [
    "/images/posts/holiday-celebrate-bauble.jpg",
    "/images/posts/holiday-christmas-tree.jpg",
    "/images/posts/holiday-fireworks.jpg",
  ],
  Advert: [
    "/images/pexels-wifi6-router-32698507.jpg",
    "/images/thedigitalartist-camera-8053993.jpg",
    "/images/webtechexperts-cctv-surveillance-camera-7267551_1920.jpg",
    "/images/pexels-rafa-sants-3818665-5790645.jpg",
  ],
  Announcement: [
    "/images/geralt-blue-light-1675686_1920.jpg",
    "/images/geralt-binary-3725329.jpg",
    "/images/pexels-margo-evardson-2158292018-37166577.jpg",
  ],
};

export interface PostTimestamp {
  toDate(): Date;
}

export interface Post {
  id: string;
  title: string;
  category: PostCategory;
  body: string;
  image: string;
  createdAt: PostTimestamp | null;
  emailed: boolean;
  recipients: number;
}

export const formatPostDate = (createdAt: PostTimestamp | null) =>
  createdAt
    ? createdAt.toDate().toLocaleDateString("en-KE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Just now";

export const postExcerpt = (body: string, length = 160) =>
  body.length > length ? `${body.slice(0, length).trimEnd()}…` : body;
