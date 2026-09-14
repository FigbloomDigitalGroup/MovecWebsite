import React, { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import ResponsiveNav from "./components/ResponsiveNav";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RouteScrollToTop from "./components/RouterScrollToTop/RouterScrollToTop";
import WhatsAppWidget from "./components/widgets/WhatsAppWidget";
import PageTransition from "./components/PageTransition/PageTransition";
import SkipToContent from "./components/SkipToContent/SkipToContent";
import PageSkeleton from "./components/Skeleton/PageSkeleton";
import { usePageTracking } from "./hooks/usePageTracking";
import { useScrollTracking } from "./hooks/useScrollTracking";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const IspPlatform = lazy(() => import("./pages/IspPlatform"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contacts"));
const Software = lazy(() => import("./pages/subPages/Software"));
const Billing = lazy(() => import("./pages/subPages/Billing"));
const Starlink = lazy(() => import("./pages/subPages/Starlink"));
const Cctv = lazy(() => import("./pages/subPages/Cctv"));
const Gps = lazy(() => import("./pages/subPages/Gps"));
const ItSupport = lazy(() => import("./pages/subPages/ItSupport"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Component to enable analytics tracking
const AnalyticsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePageTracking();
  useScrollTracking();
  return <>{children}</>;
};

const App: React.FC = () => {

  return (
    <>
<Router>
  <AnalyticsWrapper>
    <SkipToContent />
    <RouteScrollToTop/>
    <ResponsiveNav/>
    <main id="main-content" role="main" className="overflow-x-hidden w-full max-w-full">
      <Suspense fallback={<PageSkeleton />}>
        <PageTransition>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/ispplatform" element={<IspPlatform/>}/>
             <Route  path="/services" element={<Services/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/software" element={<Software/>}/>
             <Route path="/billing" element={<Billing/>}/>
             <Route path="/starlink" element={<Starlink/>}/>
             <Route path="/cctv" element={<Cctv/>}/>
             <Route  path="/gps" element={<Gps/>}/>
             <Route path="/itsupport" element={<ItSupport/>}/>
             <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
             <Route path="/terms-of-service" element={<TermsOfService/>}/>
             <Route path="*" element={<NotFound/>}/>
          </Routes>
        </PageTransition>
      </Suspense>
    </main>
    <WhatsAppWidget phoneNumber="254796287392"/>
    <Footer/>
    <ScrollToTop/>
  </AnalyticsWrapper>
</Router>
    </>
  );
};

export default App;