# Product Requirements Document (PRD)

**Project Name:** Doctor's Digital Chamber Website (VSL Outcome Funnel Edition)  
**Target Audience:** Cardiac patients and their family members across Bangladesh looking for a senior cardiologist, watching a brief consultation guide video, reviewing chamber schedules, and booking serials directly.

---

## 1. Executive Summary & Goals
* **Primary Objective:** Deliver a high-conversion, single-column centered Video Sales Letter (VSL) style landing page for a senior Bangladeshi Cardiologist (`Dr. Masudur Rahman`).
* **Core Conversion Goal:** Guide visitors from an outcome-focused headline -> short doctor introduction/guide video -> instant 60-second chamber serial booking via direct phone call (`tel:`) or WhatsApp.
* **Trust & Compliance:** Prominently showcase BMDC registration (`A-56789`), institutional affiliations (`NICVD`, `National Heart Foundation`, `Labaid`, `Popular`), and clear consultation fee policies.

---

## 2. Funnel Flow & Page Sections (Top-to-Bottom)

### 2.1. Minimal Top Bar (`Navbar.jsx`)
* Clean, distraction-free top bar with Doctor's Name (`DR. MASUDUR RAHMAN`), specialty (`MBBS, FCPS, MD (Cardiology)`), BMDC badge, and a single high-contrast CTA button (`Book Serial`).

### 2.2. Centered Outcome Hero + Video Player (`HeroSection.jsx`)
* **Eyebrow Pill:** `BMDC Reg: A-56789 • Prof. of Cardiology (NICVD, Dhaka)`.
* **Centered Outcome Headline (H1):** Bold statement highlighting accurate cardiac diagnosis and evidence-based heart care with crimson underlined accent text.
* **Centered Subheadline:** Brief 2-line summary of clinical expertise (hypertension, chest pain, blockages, second opinions on Angiogram/Stenting).
* **Primary CTA Button:** Centered `Book Your Chamber Serial →` button that smooth-scrolls to `#book-serial`.
* **Social Proof & Video Prompt:** 5-star patient trust rating (`★★★★★ Trusted by 45,000+ cardiac patients`) + pointer text (`"↓ Watch this short 2-minute video before visiting the chamber ↓"`).
* **16:9 VSL Video Box:**
  * Custom preview poster with play button overlay, duration badge (`2:15`), and video player support (YouTube/Vimeo/MP4).
  * Embedded bottom CTA bar inside the video card: `"Need an urgent consultation or report review?"` + `Book Serial Now →` button.
* **Institutional Trust Strip:** Badges showing affiliated hospitals (`NICVD`, `National Heart Foundation`, `Labaid Cardiac`, `Popular Diagnostic`).

### 2.3. Key Clinical Metrics (`ExperienceBar.jsx`)
* 4-column stat strip: `15+ Years Experience`, `45,000+ Patients Treated`, `8,500+ Angiograms & Interventions`, `3 Prime Dhaka Chambers`.

### 2.4. Compact Clinical Outcomes & Services (`ServicesGrid.jsx`)
* Clean grid highlighting core cardiology services with English & Bengali titles:
  1. Hypertension & Vascular Care (উচ্চ রক্তচাপ ও ভাস্কুলার চিকিৎসা)
  2. Coronary Artery Disease & Heart Attack (করোনারি ধমনী রোগ ও হার্ট অ্যাটাক প্রতিরোধ)
  3. Angiogram & Stenting (PCI) Second Opinion (এনজিওগ্রাম ও রিং পরানো পরামর্শ)
  4. Heart Failure & Arrhythmia (হার্ট ফেইলিওর ও বুক ধড়ফড়)
  5. Pacemaker & Device Consultation (পেসমেকার স্থাপন ও ফলো-আপ)
  6. Non-Invasive Diagnostics: Echo, ECG, ETT (ইকোকার্ডিওগ্রাফি, ইসিজি ও ইটিটি পরীক্ষা)

### 2.5. Interactive Call & Serial Booking Widget (`ChamberSection.jsx` -> `#book-serial`)
* Designed like a streamlined "Strategy Call / Appointment Booking" container:
  * **Step 1 (Branch Selector Tabs):** Interactive tabs to switch between *National Heart Foundation (Mirpur)*, *Labaid Cardiac (Dhanmondi)*, and *Popular Diagnostic (Shantinagar)*.
  * **Step 2 (Schedule & Fee Breakdown):** Displays exact room/floor, visiting days, visiting hours, and transparent fees (New Patient, Follow-up, Free Report Showing window).
  * **Step 3 (1-Tap Call / WhatsApp Actions):** High-contrast `tel:` buttons for chamber assistants, pre-filled WhatsApp serial button, and Google Maps link.

### 2.6. Single-Column Centered FAQ Accordion (`FaqSection.jsx` -> `#faqs`)
* Narrow, focused (`max-w-3xl mx-auto`) expandable accordion answering:
  * How to book a serial and assistant calling hours.
  * What documents/reports to bring on the first visit.
  * Report showing fee waiver policy (10–14 days).
  * Second opinion process for Angiogram CDs / Stenting.
  * Emergency protocol for acute chest pain.

### 2.7. Footer & Floating WhatsApp (`Footer.jsx`, `FloatingWhatsApp.jsx`)
* Emergency cardiac advisory (`NICVD Emergency` & `999`), BMDC disclaimer, and sticky bottom-right WhatsApp button.