import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

// Hook to track page views on route change
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    const pageTitle = document.title;
    const pagePath = location.pathname + location.search;

    trackPageView(pagePath, pageTitle);
  }, [location]);
};
