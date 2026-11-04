# System Architecture Document

**Project:** Doctor's Digital Chamber Website (Cardiology)  
**Framework:** Next.js (App Router) with Tailwind CSS  
**Hosting Target:** Vercel / Cloudflare Pages / Node.js VPS

---

## 1. Technical Stack Selection
* **Core Framework:** Next.js (App Router, Static Site Generation / Server Components by default).
* **Styling Engine:** Tailwind CSS with custom color extensions (`cardio-navy`, `cardio-red`, `vitality-amber`).
* **Icons:** `lucide-react` for clean, lightweight medical and interface iconography.
* **Fonts:** `next/font/google` importing *Montserrat* / *Syne* (for editorial headings) and *Inter* (for clean clinical readability).
* **Data Layer:** Flat static JSON (`/data/chambers.json`, `/data/services.json`) for zero-latency, zero-database overhead.

---

## 2. Directory Structure

```text
doctor-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Custom typography & utility layers
│   ├── layout.jsx           # Root layout with SEO metadata & schema markup
│   └── page.jsx             # Single-page assemble composed of modular sections
├── components/
│   ├── Navbar.jsx           # Top branding with BMDC and serial quick-dial
│   ├── HeroSection.jsx      # High-impact typography, 3D anatomical motif & doctor portrait
│   ├── ExperienceBar.jsx    # Quick stat counters (Years, Patients, Operations)
│   ├── ChamberSection.jsx   # Grid of multi-location chamber cards
│   ├── ChamberCard.jsx      # Reusable chamber card with direct-dial and maps
│   ├── ServicesGrid.jsx     # Cardiovascular specialties & diagnostic tests
│   ├── FaqSection.jsx       # Consultation policies & serial guidelines
│   ├── Footer.jsx           # Legal, BMDC disclaimer, emergency contact
│   └── FloatingWhatsApp.jsx # Sticky bottom-right WhatsApp quick action
├── data/
│   ├── chambers.json        # Hospital locations, serial numbers, visiting times
│   └── services.json        # List of cardiology procedures & conditions treated
├── public/
│   └── images/              # Doctor portrait, heart illustration asset, clinic badges
├── prd.md
├── architecture.md
├── design.md
└── package.json
```

---

## 3. Data Schema Definitions

### 3.1. `chambers.json`
```json
[
  {
    "id": "nhf-mirpur",
    "facility": "National Heart Foundation",
    "branch": "Mirpur, Dhaka",
    "room": "Room 304, 3rd Floor",
    "days": "Saturday - Wednesday",
    "time": "4:00 PM - 8:00 PM",
    "serialPhones": ["+8801711000000", "+8801811000000"],
    "googleMapsUrl": "https://maps.google.com/?q=National+Heart+Foundation+Dhaka"
  },
  {
    "id": "labaid-dhanmondi",
    "facility": "Labaid Cardiac Hospital",
    "branch": "House 01, Road 04, Dhanmondi, Dhaka",
    "room": "Chamber 210, 2nd Floor",
    "days": "Sunday - Thursday",
    "time": "6:00 PM - 9:30 PM",
    "serialPhones": ["+8801722000000"],
    "googleMapsUrl": "https://maps.google.com/?q=Labaid+Cardiac+Hospital+Dhanmondi"
  }
]
```

---

## 4. SEO & Medical Metadata Strategy
* Implement JSON-LD `MedicalBusiness` / `Physician` schema in `app/layout.jsx`:
  * `medicalSpecialty`: `CardiovascularDisease`
  * `alumni`: `National Institute of Cardiovascular Diseases (NICVD)`
  * `addressCountry`: `BD`
* OpenGraph tags preconfigured for WhatsApp link sharing (shows doctor headshot + chamber title on chat previews).