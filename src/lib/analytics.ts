// Google Analytics 4 Integration

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Initialize Google Analytics
export const initAnalytics = (measurementId: string) => {
  if (typeof window === 'undefined') return;

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(..._args: any[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    send_page_view: false, // We'll manually send page views
  });
};

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: url,
    page_title: title,
  });
};

// Track custom events
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track conversions
export const trackConversion = (conversionLabel: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: conversionLabel,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent({
    action: 'form_submission',
    category: 'Form',
    label: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent({
    action: 'button_click',
    category: 'Engagement',
    label: `${buttonName} - ${location}`,
  });
};

// Track external link clicks
export const trackOutboundLink = (url: string) => {
  trackEvent({
    action: 'outbound_link',
    category: 'Navigation',
    label: url,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'Engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  trackEvent({
    action: 'whatsapp_click',
    category: 'Contact',
    label: 'WhatsApp Widget',
  });
};

// Track phone clicks
export const trackPhoneClick = () => {
  trackEvent({
    action: 'phone_click',
    category: 'Contact',
    label: 'Phone Number',
  });
};

// Track email clicks
export const trackEmailClick = () => {
  trackEvent({
    action: 'email_click',
    category: 'Contact',
    label: 'Email Address',
  });
};

// Type definitions for window.gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
