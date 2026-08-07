# Changelog

All notable changes to the Movec Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Michael's profile image on About page
- HTML5 structural page region landmarks (`<header role="banner">`) in `ResponsiveNav.tsx` for WAVE and WCAG compliance
- Module type declaration for `firebase/firestore` in `vite-env.d.ts`
- Schema.org JSON-LD structured data and custom `<Seo>` meta tags across all sub-service pages (`Software`, `Billing`, `Starlink`, `CCTV`, `GPS`, `IT Support`)
- Fading "MOVEC" brand watermark in `Footer.tsx` using top-to-bottom CSS mask gradient, positioned above the copyright bar
- Subtle tech/circuit doodle repeating background pattern baked directly into page sections via `.bg-doodle` utility in `index.css` and `AlternatingSection.tsx` with static `background-attachment: fixed`
- Bi-directional scroll-triggered stream-in animations in `StreamingCard.tsx` (re-animates smoothly when scrolling up/down), GPU acceleration, and 4-stage sequential slide-in from left in `Hero.tsx` ("Grow your ISP business" → "without / the hustle" → Description → CTA Buttons) with "without" placed on Line 1 next to "business"
- Embedded interactive Google Maps iframe of SMK Business Park, Enterprise Road, Nairobi on `/contact` page (`Contacts.tsx`) — fully pannable/zoomable inline with an "Open in Google Maps" link; no API key required

### Changed
- Updated hero header elements from `<h2>` to `<h1>` in `HeroHeader.tsx` and `Contacts.tsx` to establish proper `<h1>` heading structure across all pages
- Added explicit type annotations for Firestore snapshot listeners in `About.tsx`
- Redesigned image card containers in `AlternatingSection.tsx` replacing harsh diagonal clip-path polygons with sleek `rounded-2xl` borders, ambient blur glows (`from-orange-500/30 via-[#10B982]/25`), and subtle hover scale interactions
- Upgraded `MobileNav.tsx` to a sleek 100% full-screen menu overlay with backdrop blur (`backdrop-blur-xl`), locking background body scroll while open and eliminating duplicate logo visibility on mobile screens
- Collapsed `Contacts.tsx` quick contact cards into compact interactive icon buttons (Email, WhatsApp, Call) without displaying text email addresses/phone numbers, and removed redundant "Visit Us" card in favor of the interactive Google Map

### Fixed
- Resolved WebAIM (WAVE) accessibility alerts ("No page regions" and "No heading structure") across all site routes
- Fixed Vite import resolution error for `react-icons` submodules by restoring missing dependencies and clearing pre-bundle cache
- Fixed `Footer.tsx` corruption caused by misplaced watermark inside Quick Links section and duplicate `export default Footer` that caused a blank white screen
- Eliminated initial scroll lag by removing performance-heavy `background-attachment: fixed` from `.bg-doodle` in `index.css` and setting instant-pre-trigger `rootMargin: "0px 0px 50px 0px"` in `StreamingCard.tsx`
- Fixed mobile horizontal viewport overflow gap by enforcing strict `overflow-x: hidden` on `html`, `body`, `#root`, `<main>`, and `<header>`, adding `invisible pointer-events-none` when `MobileNav` is closed, and scaling mobile horizontal offsets in `StreamingCard.tsx`
- Fixed syntax error in `Navbar.tsx` on line 16 by replacing typo `pinterface` with `interface`
- Contact form in `Contacts.tsx` now automatically clears all fields and validation errors after successful submission via `useEffect` watching `state.succeeded`

---

## [1.0.0] - 2026-08-05

### Added
- Initial production release
- PWA support with offline functionality
- Service worker for asset caching
- Google Analytics 4 integration
- Automatic page view tracking
- Scroll depth tracking (25%, 50%, 75%, 100%)
- Code splitting and lazy loading
- Image optimization
- Dark mode with theme toggle
- Responsive navigation (desktop + mobile)
- WhatsApp integration widget
- Contact form with Formspree
- Review system with Firebase
- Team section (7 members)
- 13 pages (Home, About, Services, ISP Platform, Contact, 6 sub-service pages, Privacy Policy, Terms of Service, 404)
- Custom 404 page
- Page transitions
- Streaming content animations
- Skeleton loaders
- Loading states
- Skip to content link
- Accessibility features (ARIA labels, keyboard navigation)
- SEO optimization (meta tags, sitemap, robots.txt)
- Open Graph tags for social sharing
- Repository documentation (README, CONTRIBUTING, SECURITY)
- GitHub templates (PR, Issues)

### Technical
- React 19 with TypeScript
- Vite 8.1 build tool
- Tailwind CSS 4.3
- React Router 7
- Firebase Firestore
- Formspree forms
- Vendor chunking for optimal caching
- PWA manifest
- Service worker
- Deployed on Render

### Performance
- Initial bundle: ~31 KB (gzipped: 7 KB)
- React vendor: 318 KB (gzipped: 104 KB)
- Firebase vendor: 478 KB (gzipped: 141 KB)
- Lazy-loaded pages: 3-15 KB each
- 29 files precached (945 KB)

---

## [0.2.0] - 2026-08-04

### Added
- Privacy Policy page
- Terms of Service page
- Footer improvements (Quick Links, clickable contact info)
- Enhanced Open Graph tags
- Real-time form validation
- Page transition animations
- Accessibility improvements (Skip to Content, focus indicators)
- Loading components (Spinner, LoadingOverlay)
- Skeleton loaders (Card, Page)
- ButtonWithLoading component
- Streaming content components
- Micro-interactions and animations
- Team section improvements (responsive grid)

### Fixed
- Navigation dropdown hover issue (200ms grace period)
- NodeJS.Timeout type error (changed to number)
- Contact page layout and styling
- Email/phone/address links now functional

### Changed
- Team grid: 2 columns (mobile) → 3 columns (tablet) → 4 columns (desktop)
- Improved team member card styling

---

## [0.1.0] - 2026-08-03

### Added
- Initial project setup
- Basic page structure
- Navigation system
- Hero section
- Service cards
- About page with team section
- Contact form
- ISP Platform page
- Sub-service pages (Software, Billing, Starlink, CCTV, GPS, IT Support)
- Dark mode implementation
- Responsive design
- Firebase integration for reviews
- Basic SEO setup

---

## Version History

- **1.0.0** (2026-08-05) - Production release with PWA
- **0.2.0** (2026-08-04) - Major UI/UX improvements
- **0.1.0** (2026-08-03) - Initial development

---

## Deployment History

| Version | Date | Environment | URL |
|---------|------|-------------|-----|
| 1.0.0 | 2026-08-05 | Production | https://movecwebsite.onrender.com |

---

## Legend

- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` for vulnerability fixes

---

[Unreleased]: https://github.com/FigbloomDigitalGroup/MovecWebsite/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/FigbloomDigitalGroup/MovecWebsite/releases/tag/v1.0.0
