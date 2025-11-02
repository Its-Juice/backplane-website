# Backplane Enterprise Infrastructure - React Website

This is a React-based version of the Backplane Enterprise Infrastructure website, converted from the original HTML/CSS/JavaScript implementation.

## Features

- **Complete Content Migration**: All content from the original website has been preserved
- **React Router**: Client-side routing for seamless navigation
- **Responsive Design**: Mobile-first responsive layout
- **Modern UI**: Dark theme with professional enterprise styling
- **Accessibility**: WCAG-compliant semantic HTML and ARIA attributes
- **Performance Optimized**: Smooth scrolling, lazy loading, and optimized animations

## Project Structure

```
react-website/
├── public/
│   ├── assets/          # Images and logos
│   └── style.css        # Original CSS (imported)
├── src/
│   ├── components/
│   │   ├── Header.jsx   # Site header with navigation
│   │   └── Footer.jsx   # Site footer
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   ├── Services.jsx
│   │   ├── CloudService.jsx
│   │   ├── InfrastructureService.jsx
│   │   ├── NetworkService.jsx
│   │   ├── SecurityService.jsx
│   │   ├── DataService.jsx
│   │   ├── ManagementService.jsx
│   │   ├── ManagedServicesService.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfService.jsx
│   ├── utils/
│   │   └── hooks.js     # Custom React hooks
│   ├── App.jsx          # Main app component with routing
│   ├── index.css        # CSS imports
│   └── main.jsx         # Entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## Routes

- `/` - Home page
- `/about` - About Us
- `/pricing` - Pricing plans
- `/contact` - Contact form
- `/services` - Services overview
- `/services/cloud` - Cloud Infrastructure
- `/services/infrastructure` - IT Infrastructure
- `/services/network` - Network Solutions
- `/services/security` - Security Services
- `/services/data` - Data Management
- `/services/management` - IT Management
- `/services/managed-services` - Managed Services
- `/privacy-policy` - Privacy Policy
- `/tos` - Terms of Service

## Technology Stack

- **React 19** - UI framework
- **React Router 7** - Client-side routing
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Original styling preserved

## Custom Hooks

The application includes custom React hooks for enhanced functionality:

- `useSmoothScrolling()` - Smooth scroll behavior for anchor links
- `useScrollAnimations()` - Intersection Observer-based animations
- `useHeaderEffects()` - Header scroll effects and transitions

## Build & Deployment

```bash
# Create production build
npm run build

# Output will be in the 'dist' directory
# Deploy the 'dist' folder to your hosting service
```

## Original vs React Migration

### Preserved
- ✅ All HTML content and structure
- ✅ All CSS styling (unchanged)
- ✅ All page content and copy
- ✅ All navigation and links
- ✅ All images and assets

### Converted
- ✅ HTML → JSX (with React Router Links)
- ✅ Vanilla JS event listeners → React hooks
- ✅ Multi-page HTML → Single-page React app
- ✅ Static navigation → React Router

### Improvements
- ✅ Better performance with code splitting
- ✅ Faster navigation with client-side routing
- ✅ Reusable React components
- ✅ Modern development workflow with Vite

## License

Copyright © 2025 Backplane. All rights reserved.