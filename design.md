# Design System & UI Specifications

**Concept:** Bold Editorial Clinical (Cardiology Edition)  
**Inspiration:** High-contrast poster typography blended with approachable, life-affirming medical clarity.

---

## 1. Color Palette

| Token Name | Hex Code | Tailwind Equivalent | Purpose |
| :--- | :--- | :--- | :--- |
| **Deep Marine Navy** | `#0B192C` | `bg-slate-950` / `#0A1628` | Main canvas background, high authority |
| **Vitality Crimson** | `#E63946` | `bg-red-600` | Accents, "HEART", serial CTAs, ECG pulses |
| **Warm Gold / Amber** | `#D4A373` | `text-amber-500` / `#E0A96D` | Editorial slash dividers, metric highlights |
| **Pure White** | `#FFFFFF` | `text-white` | Primary high-contrast typography |
| **Clinical Ice Blue**| `#E2F1E7` / `#F0F4F8` | `bg-slate-100` | Chamber section background contrast |
| **WhatsApp Emerald** | `#25D366` | Custom `#25D366` | Floating messaging badge |

---

## 2. Typography Rules

* **Display Heading Font:** *Montserrat* (ExtraBold / Black, tracking-tight).
* **Hero Editorial Headline Layout:**
  ```text
  HEAL THE
  [HEART] /
  LIFE / FIRST
  ```
  * `HEAL THE`: Pure White (`#FFFFFF`), uppercase, heavy block letters.
  * `HEART`: Vitality Crimson (`#E63946`) with subtle glowing text-shadow.
  * `/`: Accent Warm Gold (`#D4A373`) angled divider slash.
  * `LIFE / FIRST`: Pure White, stacked.
* **Body Font:** *Inter* (Regular, Medium, Semi-Bold) for effortless legibility of clinic addresses and schedules.

---

## 3. Component Specs

### 3.1. Top Navigation Bar
* Dark translucent frosted glass (`backdrop-blur-md bg-slate-950/80 border-b border-slate-800`).
* Left: Doctor Name in bold uppercase with BMDC credential subtext.
* Right: Pill-shaped CTA button `BOOK APPOINTMENT` (crimson red) and `CALL FOR SERIAL` (outline border).

### 3.2. Hero Section Composition
* **Left Grid (55%):**
  * Massive typography stack.
  * Subheading: `BMDC Reg No: A-56789 | Professor of Cardiology (NICVD)`.
  * CTA Button Group:
    * `BOOK CHAMBER ↗` (White pill button with red arrow badge).
    * `WhatsApp Serial` (Dark pill button with green WhatsApp emblem).
* **Center/Right Grid (45%):**
  * Glowing 3D anatomical heart visualization with delicate arterial glow and ECG pulse lines.
  * Confident, warm portrait of the doctor in white coat with stethoscope.
  * Floating badge: `Serving with 15+ Years of Heart Care`.

### 3.3. Chamber Locations Cards
* Crisp white card containers over an ice-blue or dark slate section.
* Top badge displaying chamber facility and city area.
* Calendar and clock iconography with red accents.
* Dual phone buttons formatted for immediate tapping on mobile devices.