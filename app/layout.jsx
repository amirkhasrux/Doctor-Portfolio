import "./globals.css";

export const metadata = {
  title: "Dr. Masudur Rahman | Senior Cardiologist & Heart Specialist Dhaka",
  description: "Official digital chamber portal for Dr. Masudur Rahman, MBBS, FCPS, MD (Cardiology) - Professor of Cardiology at NICVD. Find chamber schedules at National Heart Foundation, Labaid Cardiac Hospital, and book serial appointments in 60 seconds.",
  keywords: [
    "Dr. Masudur Rahman",
    "Cardiologist in Dhaka",
    "Heart Specialist Bangladesh",
    "National Heart Foundation serial",
    "Labaid Cardiac Hospital cardiologist",
    "NICVD Professor Cardiology",
    "Angiogram Dhaka",
    "High blood pressure doctor BD"
  ],
  authors: [{ name: "Dr. Masudur Rahman" }],
  creator: "Dr. Masudur Rahman",
  publisher: "Dr. Masudur Rahman",
  openGraph: {
    title: "Dr. Masudur Rahman | Senior Cardiologist in Dhaka",
    description: "BMDC Reg: A-56789. Visiting Professor of Cardiology (NICVD). Check chamber visiting hours, consultation fees, and take direct assistant serials.",
    url: "https://drmasudurrahman.com",
    siteName: "Dr. Masudur Rahman - Cardiology Chamber",
    locale: "en_BD",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Masudur Rahman | Senior Cardiologist",
    description: "Chamber schedule and serial booking at National Heart Foundation and Labaid Cardiac Hospital.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Masudur Rahman",
  "jobTitle": "Professor of Cardiology",
  "medicalSpecialty": "CardiovascularDisease",
  "description": "Senior Cardiologist specializing in hypertension, heart failure, coronary interventions, and non-invasive cardiac diagnostics.",
  "alumni": "National Institute of Cardiovascular Diseases (NICVD)",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dhaka",
    "addressRegion": "Dhaka Division",
    "addressCountry": "BD"
  },
  "telephone": "+8801711000000",
  "url": "https://drmasudurrahman.com"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
