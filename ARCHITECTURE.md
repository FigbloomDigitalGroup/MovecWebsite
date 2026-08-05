# Architecture Documentation

## System Overview

The Movec Landing Page is a modern, single-page application (SPA) built with React and TypeScript, designed to showcase Movec's ISP management platform and technology solutions.

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Browser                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              React Application (SPA)                   │ │
│  │                                                        │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐           │ │
│  │  │  Pages   │  │Components│  │ Contexts │           │ │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘           │ │
│  │       │             │             │                   │ │
│  │       └─────────────┴─────────────┘                   │ │
│  │                     │                                  │ │
│  │              ┌──────┴──────┐                          │ │
│  │              │   Routing   │                          │ │
│  │              └──────┬──────┘                          │ │
│  └─────────────────────┼─────────────────────────────────┘ │
└────────────────────────┼───────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
    │ Firebase│    │Formspree│    │Google   │
    │Firestore│    │  Forms  │    │Analytics│
    └─────────┘    └─────────┘    └─────────┘
```

---

## Frontend Architecture

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **UI Framework** | React 19 | Component-based UI |
| **Language** | TypeScript 5.6 | Type safety |
| **Styling** | Tailwind CSS 4.3 | Utility-first CSS |
| **Routing** | React Router 7 | Client-side routing |
| **Build Tool** | Vite 8.1 | Fast builds, HMR |
| **State Management** | React Context | Theme state |
| **Forms** | Formspree | Form handling |
| **Database** | Firebase Firestore | Reviews storage |
| **Analytics** | Google Analytics 4 | User tracking |
| **PWA** | Vite PWA Plugin | Offline support |

### Component Hierarchy

```
App
├── ThemeProvider (Context)
├── HelmetProvider (SEO)
├── Router
│   ├── SkipToContent
│   ├── ResponsiveNav
│   │   ├── Navbar (Desktop)
│   │   └── MobileNav
│   ├── PageTransition
│   │   └── Routes
│   │       ├── Home
│   │       ├── About
│   │       ├── Services
│   │       ├── IspPlatform
│   │       ├── Contact
│   │       ├── SubPages (6)
│   │       ├── Legal (2)
│   │       └── NotFound
│   ├── WhatsAppWidget
│   ├── Footer
│   └── ScrollToTop
└── ServiceWorker (PWA)
```

---

## Project Structure

```
movec-landing-page/
│
├── public/                      # Static assets
│   ├── images/                  # Image files
│   ├── icons/                   # Icon assets
│   ├── vector_icons/            # SVG icons
│   ├── video/                   # Video files
│   ├── robots.txt              # SEO crawler rules
│   └── sitemap.xml             # SEO sitemap
│
├── src/
│   ├── components/              # Reusable components
│   │   ├── Button/             # Button components
│   │   ├── cards/              # Card components
│   │   ├── Loading/            # Loading states
│   │   ├── Skeleton/           # Skeleton loaders
│   │   ├── StreamingContent/   # Animated content
│   │   ├── SEO/                # SEO components
│   │   ├── widgets/            # Widget components
│   │   ├── Navbar.tsx          # Desktop navigation
│   │   ├── MobileNav.tsx       # Mobile navigation
│   │   ├── Footer.tsx          # Footer
│   │   └── ...
│   │
│   ├── pages/                   # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── IspPlatform.tsx
│   │   ├── Contacts.tsx
│   │   ├── NotFound.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsOfService.tsx
│   │   └── subPages/           # Service detail pages
│   │       ├── Software.tsx
│   │       ├── Billing.tsx
│   │       ├── Starlink.tsx
│   │       ├── Cctv.tsx
│   │       ├── Gps.tsx
│   │       └── ItSupport.tsx
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── usePageTracking.ts  # Analytics tracking
│   │   └── useScrollTracking.ts # Scroll tracking
│   │
│   ├── lib/                     # Utility libraries
│   │   └── analytics.ts        # GA4 integration
│   │
│   ├── context/                 # React contexts
│   │   └── ThemeContext.tsx    # Dark mode state
│   │
│   ├── config/                  # Configuration
│   │   └── Firebase.ts         # Firebase setup
│   │
│   ├── dummydata/              # Static data
│   │   ├── Feaatures.tsx
│   │   ├── SoftwareFeatures.tsx
│   │   ├── BillingFeatures.tsx
│   │   └── ...
│   │
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles
│   └── vite-env.d.ts          # Type definitions
│
├── .github/                    # GitHub configuration
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── dist/                       # Build output (generated)
├── node_modules/               # Dependencies
│
├── .env                        # Environment variables (gitignored)
├── .env.example               # Env template
├── .gitignore                 # Git ignore rules
├── CODEOWNERS                 # Code ownership
├── LICENSE                    # Proprietary license
├── README.md                  # Documentation
├── CONTRIBUTING.md            # Contribution guidelines
├── SECURITY.md               # Security policy
├── CHANGELOG.md              # Version history
├── ARCHITECTURE.md           # This file
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind config
├── render.yaml               # Render deployment config
└── vercel.json               # Vercel config (alternative)
```

---

## Data Flow

### Page Navigation Flow
```
User clicks link
    → React Router intercepts
    → PageTransition wrapper animates
    → Lazy load page component
    → Page renders
    → usePageTracking logs to GA4
    → ScrollToTop runs
```

### Form Submission Flow (Contact Page)
```
User fills form
    → Real-time validation
    → User submits
    → Formspree API call
    → Success/Error handling
    → Analytics event tracked
    → User feedback shown
```

### Review System Flow (About Page)
```
User writes review
    → Form validation
    → Firebase Firestore write
    → Real-time listener updates
    → Review appears in marquee
    → Analytics event tracked
```

### Theme Toggle Flow
```
User clicks theme toggle
    → ThemeContext state updates
    → All components re-render with new theme
    → localStorage updated
    → CSS classes applied
```

---

## Build & Deployment

### Build Process

```
npm run build
    │
    ├─→ TypeScript compilation (tsc -b)
    │
    └─→ Vite build
        │
        ├─→ Code splitting
        │   ├─ React vendor chunk (318 KB)
        │   ├─ Firebase vendor chunk (478 KB)
        │   ├─ Icons vendor chunk
        │   └─ Page chunks (lazy loaded)
        │
        ├─→ Asset optimization
        │   ├─ Image compression
        │   ├─ CSS minification
        │   └─ JS minification
        │
        ├─→ PWA generation
        │   ├─ Service worker (sw.js)
        │   ├─ Web manifest
        │   └─ Asset precaching
        │
        └─→ Output to dist/
```

### Deployment Flow (Render)

```
GitHub push to main
    │
    ↓
Render detects change
    │
    ├─→ Clone repository
    ├─→ Install dependencies (npm install)
    ├─→ Run build (npm run build)
    ├─→ Upload dist/ to CDN
    └─→ Deploy to production
        │
        └─→ Live at movecwebsite.onrender.com
```

---

## External Services

### Firebase (Firestore)
- **Purpose**: Store user reviews
- **Collection**: `reviews`
- **Operations**: Read, Write
- **Security**: Firestore rules configured

### Formspree
- **Purpose**: Handle contact form submissions
- **Endpoint**: Form ID `mnjerdpk`
- **Features**: Spam protection, email forwarding

### Google Analytics 4
- **Purpose**: Track user behavior
- **Events**: Page views, scrolls, clicks, form submissions
- **Privacy**: Anonymized IPs

---

## Performance Optimizations

### Code Splitting
- All pages lazy loaded with `React.lazy()`
- Vendor chunks separated (React, Firebase, Icons)
- On-demand loading reduces initial bundle

### Image Optimization
- Lazy loading with `loading="lazy"`
- Responsive images
- WebP format (where supported)

### Caching Strategy
- Service Worker caches static assets
- CDN caching on Render
- Browser caching headers

### Bundle Analysis
```
Initial load:  ~31 KB (gzipped: 7 KB)
React vendor:  318 KB (gzipped: 104 KB)
Firebase:      478 KB (gzipped: 141 KB)
Pages:         3-15 KB each (lazy loaded)
```

---

## Security Architecture

### Data Protection
- No sensitive data in client code
- Environment variables for secrets
- HTTPS enforced
- Security headers configured

### Authentication
- No user authentication (public site)
- Firebase security rules protect database
- Formspree handles CSRF

### Input Validation
- Client-side validation
- Server-side validation (Formspree)
- XSS protection (React escaping)

---

## Testing Strategy

### Manual Testing
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS, Android)
- Accessibility testing (keyboard, screen readers)
- Performance testing (Lighthouse)

### Build Verification
- TypeScript compilation
- Linting (ESLint)
- Build success
- No console errors

---

## Monitoring & Analytics

### Google Analytics 4
- Page views
- User sessions
- Scroll depth
- Button clicks
- Form submissions
- Error tracking

### Performance Metrics
- Core Web Vitals
- Page load time
- Time to interactive
- First contentful paint

---

## Future Architecture Considerations

### Potential Enhancements
- GraphQL API for dynamic content
- CMS integration (Contentful, Sanity)
- A/B testing framework
- Advanced error tracking (Sentry)
- Automated testing (Jest, Cypress)
- Server-side rendering (SSR)
- Static site generation (SSG)

### Scalability
- Current architecture scales well
- Stateless frontend
- External services handle backend
- CDN distribution

---

## Architecture Decisions

### Why React?
- Component reusability
- Large ecosystem
- Great developer experience
- Strong TypeScript support

### Why Vite?
- Fast builds
- Hot module replacement
- Modern tooling
- Great PWA support

### Why Tailwind CSS?
- Utility-first approach
- Rapid development
- Consistent design
- Small production bundle

### Why Firebase?
- Real-time updates
- Simple setup
- Free tier sufficient
- Good documentation

### Why Formspree?
- No backend required
- Spam protection
- Email forwarding
- Free tier sufficient

---

## Development Guidelines

### Adding a New Page
1. Create component in `src/pages/`
2. Add route in `App.tsx`
3. Update `sitemap.xml`
4. Add SEO component
5. Test responsiveness
6. Test dark mode

### Adding a New Component
1. Create in `src/components/`
2. Define TypeScript interfaces
3. Add PropTypes/TypeScript types
4. Implement accessibility
5. Test in isolation
6. Document usage

### Updating Styles
1. Use Tailwind utilities first
2. Add custom CSS only when necessary
3. Maintain dark mode compatibility
4. Test responsive breakpoints

---

## Support & Maintenance

### Code Owners
- Primary: @FigbloomDigitalGroup
- Security: @FigbloomDigitalGroup

### Contact
- Technical Issues: info@movec.co.ke
- Security: info@movec.co.ke

---

**Last Updated**: August 5, 2026  
**Version**: 1.0.0  
**Maintainer**: Figbloom Digital Group
