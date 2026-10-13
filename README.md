# 32 Smiles Multispeciality Dental Clinic Website

A complete, modern, responsive website for **32 Smiles Multispeciality Dental Clinic**, matching the layout, structure, circular services diagram, and components of the VR Dental and Sameeksha Dental Hospital templates, with clinic-specific branding and color palette (Clean White, Primary Blue `#0AA8DE` / `#0284C7`, and Dark Navy text `#0F172A`).

---

## 🌟 Key Features

1. **Top Announcement & Contact Bar:**
   - Clinic working hours and quick emergency/booking direct phone dial.

2. **Navigation Bar:**
   - Dedicated vector emblem & typography for 32 Smiles.
   - Smooth-scrolling navigation links with active scroll spy observer.
   - Prominent Contact Us action button.
   - Responsive mobile navigation menu with slide-in drawer.

3. **Hero Section:**
   - High-resolution dental treatment smiling patient visual.
   - Clean gradient wash, bold typography, and phone call action button.

4. **Quick Online Consultancy Card:**
   - Overlapping elevated card layout (`-mt-20 lg:-mt-24`).
   - 2x2 grid form with full validation and direct WhatsApp chat trigger.

5. **About Our Clinic:**
   - Treatment room imagery with sterile operatory badge.
   - Concise overview of multispeciality treatments and patient-first care.

6. **About Our Doctor:**
   - Dedicated doctor profile section with decorative backdrop, subtle circular glow, and dots grid.
   - Dedicated doctor photograph placeholder (`/doctor_placeholder.svg`) ready for replacement with the doctor's actual portrait photo.

7. **Our Services (Circular Orbit Diagram):**
   - Iconic central 3D tooth illustration with concentric orbit guide rings.
   - 12 multispeciality services arranged symmetrically around the tooth on desktop.
   - Responsive 2-column card grid on mobile and tablet screens.

8. **Clinic Gallery:**
   - 1 + 4 grid featuring modern dental operatory, digital diagnostic suite, sterilization, and waiting lounge.
   - Decorative corner dental instruments.

9. **Patient Testimonials:**
   - Smooth auto-rotating carousel with drag/touch swipe and pagination dots.
   - 6 authentic-style patient reviews written specifically for 32 Smiles with 5-star ratings and diverse avatars.

10. **Appointment Booking & Contact CTA:**
    - Signature rich blue gradient banner with circular smiling tooth container.
    - Quick contact cards for Phone, WhatsApp, Hours, and Location.

11. **Footer & Legal Pages:**
    - 4-column footer with clinic logo, navigation, dental services, contact details, and current-year copyright.
    - Full Privacy Policy (`/privacy-policy`) and Terms of Service (`/terms-of-service`).
    - Floating WhatsApp quick-action button in the bottom right corner.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Static Export:** Output configured for `out/` static build compatible with Vercel, Netlify, Apache, Nginx, or GitHub Pages.

---

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build & Export
```bash
npm run build
```
Generates a static export inside the `out/` directory.

---

## 📝 Customizable Placeholders

All clinic-specific details can be updated easily:
- **Phone Number:** Search for `+91 98765 43210` across components (`Navbar.tsx`, `Hero.tsx`, `AppointmentCTA.tsx`, `Footer.tsx`).
- **WhatsApp:** Search for `919876543210`.
- **Email:** `contact@32smilesdental.com`.
- **Address:** Update the address placeholder in `AppointmentCTA.tsx` and `Footer.tsx`.
- **Doctor Photo:** Replace `/public/doctor_placeholder.svg` with your doctor's cutout photo in PNG format (e.g., `doctor.png`) and update the `src` attribute in `AboutDoctor.tsx`.
