# Design System & UI Specifications

**Concept:** Clean Clinical Light VSL Funnel (High-Contrast Outcome Layout, inspired by skitmediastudio.com/saas-marketing-outcome)  
**Visual Vibe:** Crisp white (`bg-white`) and warm soft slate (`bg-slate-50`) backgrounds, deep ink slate (`text-slate-900`) typography, crimson red (`text-red-600` / `bg-red-600`) outcome highlights, elevated cards with subtle slate shadows (`shadow-slate-900/5`), and a framed dark 16:9 video player card that pops sharply off the light canvas.

---

## 1. Color Palette (Light Mode)

| Token Name | Hex Code | Tailwind Equivalent | Purpose |
| :--- | :--- | :--- | :--- |
| **Pure White Canvas** | `#FFFFFF` | `bg-white` | Main page background, Hero, Services cards, FAQ items |
| **Soft Clinical Slate** | `#F8FAFC` | `bg-slate-50` | Chamber section background, sub-panels, experience bar |
| **Slate Tint 100** | `#F1F5F9` | `bg-slate-100` | Tab bar background, subtle badge fills, footer container |
| **Deep Ink Slate** | `#0F172A` | `text-slate-900` | Primary headings (H1/H2/H3), doctor title, bold stats |
| **Muted Slate Body** | `#475569` | `text-slate-600` | Subtitles, descriptions, procedures, FAQ answers |
| **Light Slate Caption** | `#64748B` | `text-slate-500` | Micro-copy, metadata, credential labels |
| **Border Slate** | `#E2E8F0` | `border-slate-200` | Crisp structural borders and card dividers |
| **Vitality Crimson** | `#DC2626` / `#E63946` | `bg-red-600` / `text-red-600` | Key outcome phrase, primary CTAs, active chamber tab, phone buttons |
| **Crimson Hover** | `#B91C1C` | `bg-red-700` | CTA button hover state |
| **Crimson Tint** | `#FEF2F2` | `bg-red-50` | Eyebrow badge fill, emergency box fill |
| **Crimson Border** | `#FECACA` | `border-red-200` | Eyebrow badge border, emergency card border |
| **Trust Amber** | `#F59E0B` | `text-amber-500` | 5-star rating stars and consultation room accents |
| **WhatsApp Emerald** | `#16A34A` | `text-emerald-700` / `bg-emerald-50` | WhatsApp booking button, assistant status badge |

---

## 2. Typography & Hierarchy

* **Heading Font:** *Montserrat* (`800` ExtraBold / `700` Bold, tight tracking `-0.02em`, `text-slate-900`).
* **Body Font:** *Inter* (`400` Regular, `500` Medium, `600` SemiBold, `text-slate-600`).
* **Hero Headline Pattern (Centered High-Contrast Canvas):**
  * Centered `h1` in `text-slate-900` (`text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15]`).
  * Core outcome phrase emphasized in `text-red-600 underline decoration-red-600/30 underline-offset-8`.

---

## 3. Component Architecture & Style Specifications

### 3.1. Minimal Sticky Header (`components/Navbar.jsx`)
* **Container:** Sticky top-0, `bg-white/90 backdrop-blur-md border-b border-slate-200`.
* **Doctor Branding:** Doctor name in `text-slate-900 font-extrabold`, specialty subtitle in `text-slate-500`.
* **Credential Badge:** `bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-semibold`.
* **Header CTA:** Solid pill button `bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20`.

### 3.2. Light VSL Hero + Framed Video Container (`components/HeroSection.jsx`)
* **Section Canvas:** `bg-white` with a subtle top center radial glow (`bg-red-500/5`).
* **Eyebrow Pill:** `bg-red-50 border border-red-200 text-red-700 font-semibold`.
* **Headline & Subtitle:** `text-slate-900` H1 with `text-red-600` underline; subheadline in `text-slate-600`.
* **Social Proof:** `text-amber-500` stars with `text-slate-700 font-semibold` patient trust text.
* **Elevated Video Player Frame:**
  * Outer card: `rounded-2xl border-4 border-white ring-1 ring-slate-200 shadow-2xl shadow-slate-900/10 overflow-hidden`.
  * Inner video stage: Dark canvas (`bg-slate-950`) to ensure high contrast for the video playback and crimson play button (`bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/40`).
  * Video CTA Strip: `bg-slate-900 text-white` with high-contrast `bg-red-600 hover:bg-red-500 text-white` direct serial button.
* **Hospital Affiliations:** Clean light badge pills (`bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300`).

### 3.3. Authority Metrics Bar (`components/ExperienceBar.jsx`)
* **Container:** `bg-slate-50 border-y border-slate-200 py-8`.
* **Stat Values:** `text-slate-900 font-black` with `text-red-600` accent icons.
* **Stat Labels:** `text-slate-700 font-bold` with `text-slate-500` descriptions.

### 3.4. Light Call & Serial Booking Widget (`components/ChamberSection.jsx`)
* **Section Canvas:** `bg-slate-50 border-b border-slate-200`.
* **Main Container Card:** `bg-white border border-slate-200 shadow-xl shadow-slate-900/5 rounded-2xl`.
* **Branch Selector Bar:** `bg-slate-100 border-b border-slate-200 p-2`.
  * Active Tab: `bg-red-600 text-white shadow-md`.
  * Inactive Tabs: `bg-white text-slate-700 hover:bg-slate-50 border border-slate-200`.
* **Left Details Column:**
  * Facility title in `text-slate-900`, address in `text-slate-600`.
  * Schedule and Fee Cards: `bg-slate-50 border border-slate-200 rounded-xl` with clear fee breakdowns.
* **Right Call Action Box:**
  * Box styling: `bg-slate-50 border border-slate-200 rounded-2xl p-6`.
  * Direct 1-Tap Calling Buttons: Solid `bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20`.
  * WhatsApp Button: Crisp light emerald pill `bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100`.
  * Google Maps Button: `bg-white hover:bg-slate-100 border border-slate-200 text-slate-700`.

### 3.5. Light Services Grid (`components/ServicesGrid.jsx`)
* **Section Canvas:** `bg-white`.
* **Service Cards:** `bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 rounded-2xl p-6 transition-all`.
* **Card Elements:**
  * Service Icon: `bg-red-50 text-red-600` container.
  * Title: `text-slate-900 font-bold`.
  * Bengali Subtitle: `text-red-600/90 font-medium`.
  * Description & Checklist: `text-slate-600` with `text-red-600` checkmarks.

### 3.6. Light FAQ Accordion (`components/FaqSection.jsx`)
* **Section Canvas:** `bg-slate-50 border-t border-slate-200`.
* **Accordion Items:** `bg-white border border-slate-200 shadow-sm hover:border-slate-300 rounded-xl overflow-hidden`.
* **Question Header:** `text-slate-900 font-bold` with `bg-red-50 text-red-600` icon wrapper.
* **Expanded Answer:** `text-slate-600 border-t border-slate-100 leading-relaxed`.

### 3.7. Light Clinical Footer (`components/Footer.jsx`)
* **Container:** Light clinical styling `bg-slate-100 border-t border-slate-200 text-slate-700`.
* **Doctor Info:** Name in `text-slate-900`, credentials in `text-slate-600`.
* **Emergency Advisory Box:** High-visibility safety warning in `bg-red-50 border border-red-200 text-red-900`.
