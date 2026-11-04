🩺 Cardiologist Digital Chamber Website

A high-performance, mobile-first doctor portfolio and appointment referral website built for a senior Bangladeshi Interventional Cardiologist. Designed with modern clinical aesthetics, editorial typography, and streamlined for local patient habits (direct telephone serial booking & WhatsApp).

🌟 Key Features

Editorial Clinical Design: Striking high-contrast hero section with medical typography inspired by modern web benchmarks.

Multi-Chamber Roster: Structured Chamber cards for hospitals and diagnostic centers across Bangladesh detailing visiting days, room numbers, and timings.

Local Conversion Focus:

One-tap tel: links to call chamber assistants directly for serial booking.

Floating WhatsApp action button preconfigured with an appointment inquiry template.

Direct Google Maps directions for each practice location.

BMDC Credibility & Trust: Prominently highlights BMDC registration number, qualifications (MBBS, MD (Cardiology)), and institutional affiliations.

Zero-Latency Static Data: Chamber schedules and specialty service offerings are decoupled into clean JSON structures (/data/chambers.json & /data/services.json).

SEO & Social Optimization: Pre-configured OpenGraph metadata and medical physician schema markup (JSON-LD) for Bangladeshi search discovery.

🛠️ Tech Stack

Framework: Next.js (App Router, Static Site Generation)

Styling: Tailwind CSS

Icons: Lucide React

Typography: Montserrat & Inter via next/font/google

Deployment Ready: Vercel, Netlify, or Cloudflare Pages

📁 Project Structure

├── app/
│   ├── favicon.ico
│   ├── globals.css          # Tailwind layer definitions & color tokens
│   ├── layout.jsx           # Root layout, fonts & local SEO schema
│   └── page.jsx             # Main landing page composition
├── components/
│   ├── Navbar.jsx           # Frosted navigation header & quick serial dial
│   ├── HeroSection.jsx      # High-impact typography, badges & CTAs
│   ├── ChamberSection.jsx   # Multi-location chamber cards grid
│   ├── ChamberCard.jsx      # Reusable card with call & map triggers
│   ├── ServicesGrid.jsx     # Clinical focus areas & diagnostic services
│   ├── FaqSection.jsx       # Consultation policies & serial guidelines
│   ├── Footer.jsx           # Legal disclaimers & emergency notices
│   └── FloatingWhatsApp.jsx # Sticky bottom-right WhatsApp quick dial
├── data/
│   ├── chambers.json        # Hospital locations, phone numbers & visiting hours
│   └── services.json        # Cardiology conditions & treatments offered
├── public/
│   └── images/              # Doctor portrait & graphic assets
├── prd.md                   # Product Requirements Document
├── architecture.md          # Technical specifications
└── design.md                # Design system & visual guidelines


🚀 Getting Started

Prerequisites

Node.js 18.17.0 or higher

npm, pnpm, or yarn

1. Installation

Clone the repository and install dependencies:

git clone https://github.com/your-username/doctor-chamber-web.git
cd doctor-chamber-web
npm install


2. Run the Development Server

npm run dev


Open http://localhost:3000 in your browser to inspect the application.

3. Build for Production

npm run build
npm run start


⚙️ Customization

Modifying Chamber Locations & Phone Numbers

All chamber locations, assistant phone numbers, and visiting hours are managed inside data/chambers.json. Update the array to reflect real-world clinic details:

{
  "id": "nhf-mirpur",
  "facility": "National Heart Foundation",
  "branch": "Mirpur, Dhaka",
  "room": "Room 304, 3rd Floor",
  "days": "Saturday - Wednesday",
  "time": "4:00 PM - 8:00 PM",
  "serialPhones": ["+8801711000000"],
  "googleMapsUrl": "https://maps.google.com/?q=National+Heart+Foundation+Dhaka"
}


Updating WhatsApp Serial Number

Open components/FloatingWhatsApp.jsx and replace the placeholder phone number with the doctor's assistant's WhatsApp number in international format (without the +):

const WHATSAPP_NUMBER = "88017XXXXXXXX";


📄 License

This project is open-source and available under the MIT License.