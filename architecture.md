# System Architecture Document

**Project:** Doctor's Digital Chamber Website (VSL Outcome Funnel Edition)  
**Framework:** Next.js (App Router) with Tailwind CSS  
**Hosting Target:** Vercel

---

## 1. Technical Stack Selection
* **Core Framework:** Next.js (App Router, Server Components with `"use client"` interactive islands for the Video Player, Chamber Booking Tabs, and FAQ Accordion).
* **Styling Engine:** Tailwind CSS.
* **Icons:** `lucide-react`.
* **Fonts:** `next/font/google` (*Montserrat* and *Inter*).
* **Data Layer:** Static JSON (`/data/chambers.json`, `/data/services.json`) or co-located structured constants for zero-latency rendering.

---

## 2. Directory & Component Structure

```text
doctor-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Tailwind imports & custom scroll-behavior: smooth
│   ├── layout.jsx           # Root layout with JSON-LD MedicalBusiness schema
│   └── page.jsx             # Vertical single-page VSL funnel assembly
├── components/
│   ├── Navbar.jsx           # Minimal header with BMDC badge & Book Serial CTA
│   ├── HeroSection.jsx      # Centered outcome title, CTA, 16:9 VSL video player & hospital strip
│   ├── ExperienceBar.jsx    # 4-metric authority counter bar
│   ├── ChamberSection.jsx   # Interactive tabbed Call & WhatsApp Serial Booking widget (#book-serial)
│   ├── ServicesGrid.jsx     # 6-card cardiovascular specialty & outcome grid (#services)
│   ├── FaqSection.jsx       # Centered single-column accordion (#faqs)
│   ├── Footer.jsx           # Emergency advisory (NICVD / 999) & BMDC copyright
│   └── FloatingWhatsApp.jsx # Sticky bottom-right WhatsApp trigger
├── data/
│   ├── chambers.json        # Chamber branches, visiting hours, fees, phone numbers
│   └── services.json        # Cardiology services with Bengali subtitles
├── prd.md
├── architecture.md
├── design.md
└── package.json