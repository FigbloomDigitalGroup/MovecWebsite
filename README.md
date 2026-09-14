# Movec Landing Page

Modern, responsive landing page for **Movec** - an ISP management platform and technology solutions provider. Built with React, TypeScript, and optimized for performance with code splitting, lazy loading, and integrated analytics.

[![Built with React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite)](https://vitejs.dev/)

## Features

### Core Features
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark Mode** - Theme toggle with system preference detection
- **Fully Responsive** - Mobile-first design, works on all devices
- **Performance Optimized** - Code splitting, lazy loading, optimized bundles
- **SEO Ready** - Meta tags, sitemap, robots.txt, Open Graph tags
- **Accessible** - WCAG compliant, keyboard navigation, ARIA labels

### Technical Features
- **Google Analytics 4** - Automatic page tracking, scroll depth, events
- **Firebase Integration** - Real-time reviews and testimonials
- **Smooth Animations** - Page transitions, streaming content, micro-interactions
- **Lazy Loading** - Images and routes load on-demand
- **Form Validation** - Real-time validation with error messages
- **Auto-scroll Management** - Smooth scroll-to-top on navigation

### Business Features
- **Service Pages** - ISP Platform, Software, Billing, Starlink, CCTV, GPS, IT Support
- **Team Section** - Meet the team with profile images
- **Reviews System** - Firebase-powered customer testimonials
- **WhatsApp Integration** - Direct contact via WhatsApp widget
- **Legal Pages** - Privacy Policy & Terms of Service
- **404 Page** - Custom not-found page with navigation

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript 5.6 |
| **Styling** | Tailwind CSS 4.3, CSS3 |
| **Routing** | React Router 7 |
| **Build Tool** | Vite 8.1 |
| **Backend** | Firebase (Firestore) |
| **Analytics** | Google Analytics 4 |
| **Icons** | React Icons |
| **SEO** | React Helmet Async |
| **Fonts** | Inter (via Fontsource) |

---

## Project Structure

```
movec-landing-page/
├── public/
│   ├── images/           # Static images
│   ├── icons/            # Icon assets
│   ├── vector_icons/     # SVG icons
│   ├── video/            # Video assets
│   ├── robots.txt        # SEO - search engine instructions
│   └── sitemap.xml       # SEO - site structure
├── src/
│   ├── components/       # Reusable components
│   │   ├── Button/
│   │   ├── cards/
│   │   ├── Loading/
│   │   ├── Skeleton/
│   │   ├── StreamingContent/
│   │   ├── SEO/
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── IspPlatform.tsx
│   │   ├── Contacts.tsx
│   │   └── subPages/     # Service detail pages
│   ├── hooks/            # Custom React hooks
│   │   ├── usePageTracking.ts
│   │   └── useScrollTracking.ts
│   ├── lib/              # Utility libraries
│   │   └── analytics.ts  # GA4 integration
│   ├── context/          # React context providers
│   │   └── ThemeContext.tsx
│   ├── config/           # Configuration files
│   │   └── Firebase.ts
│   ├── dummydata/        # Static data
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── .env.example          # Environment variables template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies

```

---

## Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FigbloomDigitalGroup/MovecWebsite.git
   cd MovecWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Add your Google Analytics ID:
   ```env
   VITE_GA_MEASUREMENT_ID=G-JTFCWVTDRS
   ```

4. **Configure Firebase** (Optional - for reviews feature)
   
   Update `src/config/Firebase.ts` with your Firebase credentials:
   ```typescript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     // ... other config
   };
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## Key Features Explained

### 1. Performance Optimization

**Code Splitting**
- All pages are lazy-loaded using `React.lazy()`
- Reduces initial bundle size by 30-50%
- Pages load on-demand as user navigates

**Vendor Chunking**
- React/Router: Separate chunk for better caching
- Firebase: Separate chunk
- Icons: Separate chunk
- Improves browser caching strategy

**Image Optimization**
- Lazy loading with `loading="lazy"` attribute
- Optimized image formats
- Responsive images for different screen sizes

### 2. Analytics Integration

**Automatic Tracking**
- Page views on every route change
- Scroll depth: 25%, 50%, 75%, 100%
- User sessions and behavior
- Traffic sources

**Custom Events**
- Form submissions
- Button clicks
- WhatsApp widget clicks
- Phone/email clicks
- External link tracking

**Usage Example**
```typescript
import { trackButtonClick, trackFormSubmission } from './lib/analytics';

// Track button click
<button onClick={() => trackButtonClick('Get Started', 'Hero')}>
  Get Started
</button>

// Track form submission
const handleSubmit = (e) => {
  trackFormSubmission('Contact Form');
  // ... form logic
};
```

### 3. Dark Mode

Theme toggle with:
- System preference detection
- Local storage persistence
- Smooth transitions
- Icon switching (Sun/Moon)

### 4. Streaming Content

Animated content reveal:
- `StreamingText` - Character-by-character typing
- `StreamingList` - Sequential item reveal
- `StreamingCard` - Fade-in with slide-up
- `StreamingGrid` - Staggered animations
- `ProgressiveImage` - Blur-to-sharp loading

### 5. SEO Optimization

**Meta Tags**
- Dynamic titles per page
- Meta descriptions
- Open Graph tags
- Twitter Cards
- Canonical URLs

**Structured Data**
- Sitemap.xml with all pages
- Robots.txt for crawler instructions
- Proper heading hierarchy (h1, h2, h3)
- Semantic HTML5 elements

---

## Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with hero, features, and CTA |
| **ISP Platform** | `/ispplatform` | ISP management software overview |
| **Services** | `/services` | All services overview |
| **About** | `/about` | Company info, team, reviews |
| **Contact** | `/contact` | Contact form and info |
| **Software** | `/software` | Custom software development |
| **Billing** | `/billing` | Billing management system |
| **Starlink** | `/starlink` | Starlink internet solutions |
| **CCTV** | `/cctv` | Surveillance systems |
| **GPS** | `/gps` | Vehicle tracking |
| **IT Support** | `/itsupport` | IT support services |
| **Privacy Policy** | `/privacy-policy` | Privacy policy |
| **Terms of Service** | `/terms-of-service` | Terms of service |
| **404** | `*` | Custom not-found page |

---

## Configuration

### Vite Configuration

**Build Optimization** (`vite.config.ts`)
```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react')) return 'react-vendor';
          if (id.includes('firebase')) return 'firebase-vendor';
          if (id.includes('react-icons')) return 'icons-vendor';
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
});
```

### Tailwind Configuration

Custom animations and utilities:
- `hover-lift` - Card lift effect
- `hover-glow` - Orange glow on hover
- `animate-bounce-subtle` - Gentle bounce
- `animate-pulse-glow` - Pulsing glow
- `animate-shake` - Shake animation
- `animate-scale-up` - Scale up smoothly

---

## Deployment

### Vercel (Recommended)

1. **Connect GitHub repository**
   ```bash
   vercel --prod
   ```

2. **Add environment variables** in Vercel dashboard:
   - `VITE_GA_MEASUREMENT_ID` = `G-JTFCWVTDRS`

3. **Deploy**
   - Automatic deployment on push to main branch

### Netlify

1. **Connect GitHub repository**

2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment variables**:
   - `VITE_GA_MEASUREMENT_ID` = `G-JTFCWVTDRS`

### Manual Build

```bash
npm run build
```

Upload the `dist` folder to your hosting provider.

---

## Performance Metrics

### Bundle Sizes (Production)

| Chunk | Size (KB) | Gzip (KB) |
|-------|-----------|-----------|
| Main bundle | 30.45 | 6.84 |
| React vendor | 318.38 | 104.60 |
| Firebase vendor | 478.32 | 141.69 |
| Pages (avg) | 3-15 | 1-4 |

### Lighthouse Scores (Target)

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Write semantic HTML
- Ensure accessibility compliance
- Add comments for complex logic
- Test on multiple devices/browsers

---

## Known Issues

- None currently reported

---

## License

This project is proprietary and confidential. All rights reserved by Movec.

---

## Team

- **Ian D** - Founder & CEO
- **Luke K** - Operations Manager
- **Ruth K** - Sales & Marketing Lead
- **Michael M** - Lead Software Developer
- **Morris M** - Senior Software Developer
- **Francis M** - Junior Software Developer
- **Kelvin K** - Lead Technical Engineer

---

## 📧 Contact

- **Website**: [https://movec.co.ke](https://movec.co.ke)
- **Email**: info@movec.co.ke
- **Phone/WhatsApp**: +254 796 287 392
- **Address**: Nairobi, Kenya

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Firebase](https://firebase.google.com/) - Backend services
- [React Router](https://reactrouter.com/) - Routing
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

---

## 📚 Additional Documentation

- [Analytics Setup Guide](./ANALYTICS_SETUP.md) - Detailed GA4 setup instructions
- [Implementation Summary](./IMPLEMENTATION_SUMMARY.md) - Technical implementation details

---

**Built with ❤️ by Figbloom Digital Group**

<!-- test -->
