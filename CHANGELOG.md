# Changelog

All notable changes to the Movec Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Michael's profile image on About page

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
