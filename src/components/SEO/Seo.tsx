// src/components/Seo.tsx
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g. "/about"
  image?: string;
  type?: string; // article, website, etc.
}

/*const SITE_URL = 'https://yoursite.com';*/
const SITE_URL = 'https://movec-landing-page-xfza-git-main-maina-gits-projects.vercel.app';
const SITE_NAME = 'Movec Connect';
const DEFAULT_IMAGE = `${SITE_URL}/images/movec logo 1.png`;

export function Seo({ 
  title, 
  description, 
  path, 
  image = DEFAULT_IMAGE,
  type = 'website' 
}: SeoProps) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn, Slack, WhatsApp) */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@movecconnect" />

      {/* Additional Meta Tags */}
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#f97316" />
    </Helmet>
  );
}