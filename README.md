# Backplane Website

**Backplane** – a premium, cyber‑secure infrastructure platform for enterprise customers.

---

## 📖 Overview

Backplane is a modern, **Next.js (v14) + TypeScript** web application that showcases the company's suite of services:
- Cloud Infrastructure
- IT Infrastructure
- Network Solutions
- Security Services
- Data Management
- Managed Services
- IT Management

The site is built around the **"Digital Flow"** design concept – a dark‑mode, glass‑morphism aesthetic with vibrant gradients, micro‑animations, and a focus on high‑performance, accessible UI.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS (custom palette, glass‑morphism utilities) |
| **UI Components** | Custom components (`Button`, `Navbar`, `Footer`, etc.) using `class-variance-authority` |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |
| **Fonts** | Inter (Google Fonts) – can be swapped for Outfit |
| **CMS (planned)** | Decap CMS (git‑based) |
| **Testing** | TBD (Jest / React Testing Library) |
| **Linting** | ESLint + TypeScript ESLint |
| **Build** | `npm run build` (static export) |
| **Deploy** | Any static‑host (Vercel, Netlify, etc.) |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-org/backplane-website.git
cd backplane-website

# Install dependencies
npm install

# Run the development server
npm run dev
```

The site will be available at `http://localhost:3000`.

---

## 🏗️ Project Structure

```
src/
├─ app/                # Next.js App Router pages (home, about, services, etc.)
│   ├─ layout.tsx      # Root layout with Navbar, Footer, global background
│   ├─ page.tsx        # Home page
│   └─ ...
├─ components/
│   ├─ layout/          # Navbar, Footer, MobileOptimizations
│   └─ ui/              # Reusable UI components (Button, etc.)
├─ lib/                # Utility functions (cn, etc.)
└─ styles/             # Global CSS (Tailwind directives)

tailwind.config.ts    # Tailwind configuration with custom colors
postcss.config.js      # PostCSS plugins
next.config.mjs        # Next.js configuration
```

---

## 🎨 Design System

The **Digital Flow** design system provides:
- **Dark background** (`bg-black`) with subtle gradients.
- **Glass‑morphism panels** (`bg-white/5`, `backdrop-blur-lg`).
- **Vibrant accent colors** (indigo, blue, teal, purple) defined in `tailwind.config.ts`.
- **Micro‑animations** using Framer Motion for menus and hover effects.
- **Responsive, mobile‑first layout**.

All components use Tailwind utility classes; no legacy CSS remains.

---

## 📄 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the development server (hot‑reloading). |
| `npm run build` | Builds the static site (`next build && next export`). |
| `npm run lint` | Runs ESLint with TypeScript support. |
| `npm run start` | Serves the production build locally. |

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Ensure code follows the existing design system and passes `npm run lint`.
4. Open a Pull Request with a clear description of the changes.

All contributions should respect the **Corporate Design Guidelines** (dark theme, glass‑morphism, accessibility). Use the `Button` component for all CTA elements and keep navigation consistent.

---

## 📜 License

This project is proprietary and owned by **Backplane Ltd.**. Unauthorized copying or distribution is prohibited.

---

## 📞 Contact

For questions or support, please reach out to:
- **Email:** support@backplane.com
- **Phone:** +1 (800) BACKPLANE

---

*Generated on 2025‑11‑20.*
