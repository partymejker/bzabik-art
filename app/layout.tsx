import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./hero.css";
import "./home.css";
import "./work/work.css";
import "./about/about.css";
import "./profile/profile.css";
import "./contact/contact.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "BZABIK.ART — Digital Creative Archive",
  description: "Film, 3D, animation and AI experiments by BZABIK.ART.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}><body>{children}</body></html>;
}
