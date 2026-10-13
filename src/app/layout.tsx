import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "32 Smiles Multispeciality Dental Clinic | Advanced Dental Care & Implant Centre",
  description: "32 Smiles Multispeciality Dental Clinic provides expert comprehensive dental treatments including Dental Implants, Root Canal Treatment, Orthodontics, Teeth Whitening, Cosmetic Dentistry, and Laser Dental Care.",
  keywords: [
    "32 Smiles",
    "32 Smiles Multispeciality Dental Clinic",
    "Multispeciality Dental Clinic",
    "Dental Clinic",
    "Dentist",
    "Dental Implants",
    "Root Canal Treatment",
    "Teeth Alignment",
    "Orthodontics",
    "Cosmetic Dentistry",
    "Teeth Whitening",
    "Laser Dentistry",
  ],
  authors: [{ name: "32 Smiles Multispeciality Dental Clinic" }],
  openGraph: {
    title: "32 Smiles Multispeciality Dental Clinic | Advanced Dental Care & Implant Centre",
    description: "Experience premium, painless, and modern multispeciality dental care at 32 Smiles Multispeciality Dental Clinic. Book your consultation today.",
    type: "website",
    locale: "en_US",
    siteName: "32 Smiles Multispeciality Dental Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "32 Smiles Multispeciality Dental Clinic",
    description: "Premium multispeciality dental care and implant centre.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0153AD",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white text-[#013A8F] selection:bg-[#0153AD] selection:text-white font-sans relative z-0"
        style={{ zIndex: 0 }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
