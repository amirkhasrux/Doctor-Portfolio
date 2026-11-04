# Product Requirements Document (PRD)

**Project Name:** Doctor's Digital Chamber Website (Cardiology)  
**Target Audience:** Patients and their relatives across Bangladesh looking for an experienced cardiologist, reviewing credentials, finding chamber schedules, and booking serial appointments directly.

---

## 1. Executive Summary & Goals
* **Primary Objective:** Deliver an ultra-fast, mobile-friendly personal chamber website for a senior Bangladeshi Cardiologist.
* **Core Conversion Goal:** Facilitate instant appointment ("Serial") booking via phone call and WhatsApp directly to chamber assistants.
* **Trust & Compliance:** Prominently showcase BMDC registration, institutional affiliations (e.g., NICVD, National Heart Foundation), medical degrees, and specialized cardiovascular services.

---

## 2. User Personas & Local Behaviors
1. **Worried Family Member (Primary Booker):** Uses a smartphone, often searches for senior cardiologists in Dhaka/Chittagong, requires immediate clarity on visiting hours, chamber address, and a one-tap booking number.
2. **Follow-up Patient:** Needs to quickly check the "Report Showing" schedule and consultation fees.
3. **Emergency Inquirer:** Looking for critical contact numbers for acute cardiovascular episodes.

---

## 3. Scope of Features

### 3.1. Navigation & Header
* Doctor's Full Name & Primary Specialty: `Dr. Masudur Rahman`, `MBBS, MD (Cardiology) • CARDIOLOGIST`.
* Quick anchor links: Overview, Heart Care Services, Chamber Locations, About.
* Dual Action CTAs: `Book Appointment` (scrolls to chambers) & `Call for Serial` (`tel:` link).

### 3.2. Hero Section (Visual Anchor)
* **High-Impact Headline:** Editorial typography inspired by reference layout: `HEAL THE HEART / LIFE / FIRST`.
* **Credential Badges:** `BMDC Reg No: A-56789 | Professor of Cardiology (NICVD)`.
* **Experience Metric:** Badge reading `Serving with 15+ Years of Heart Care`.
* **Immediate CTAs:**
  * Primary: `Book Chamber ↗` (smooth-scroll).
  * Secondary: `WhatsApp Serial` (direct `https://wa.me/8801XXXXXXXXX` link).

### 3.3. Chamber Roster (Multi-Chamber BD Ecosystem)
Specialist doctors in Bangladesh practice across diagnostic centers and specialized hospitals. Each chamber card must clearly outline:
* Facility Name (e.g., *National Heart Foundation, Mirpur* / *Labaid Cardiac Hospital, Dhanmondi*).
* Room & Floor Number.
* Visiting Days & Time Slots (e.g., `Sat - Wed, 4:00 PM - 8:00 PM`).
* Direct Assistant Serial Phone Numbers (`tel:+8801...`).
* Integrated Google Maps directions button.

### 3.4. Services & Clinical Expertise
Cardiovascular focus areas:
* Hypertension & Blood Pressure Management
* Coronary Artery Disease & Heart Attack Prevention
* Heart Failure & Arrhythmia (Irregular Heartbeat)
* Interventional Guidance: Angiogram, Angioplasty (Stenting/Ring), Pacemaker Consultation
* Diagnostic review: Echocardiography (2D/Color Doppler), ECG, ETT

### 3.5. Patient FAQs & Consultation Policies
* Consultation Fees: New Patient vs. Follow-up Patient fees.
* Report Showing Hours: Clear guidelines on free or discounted follow-up periods (typically within 7-14 days).
* How to take a serial: Explanation of when phones open for new serial reservations.

### 3.6. Persistent Floating Actions
* Sticky, responsive WhatsApp button at the bottom-right corner with a pre-filled message: `"Hello, I would like to book an appointment with Dr. Masudur Rahman."`

---

## 4. Non-Functional Requirements
* **Mobile-First Responsiveness:** Over 85% of traffic in Bangladesh accesses medical portals via mobile phones.
* **Fast Page Load:** Sub-second load times on 4G cellular networks.
* **SEO & Local Schema:** Local physician JSON-LD schema with area targeting (Dhaka, Bangladesh).