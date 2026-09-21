import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./hero.css";
import "./home.css";
import "./work/work.css";
import "./about/about.css";
import "./profile/profile.css";
import "./contact/contact.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteTitle = "BZABIK.ART — Digital Creative Archive";
const siteDescription =
  "Portfolio and digital archive of film, 3D, animation and creative technology by Bartłomiej Żabik.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bzabik.art"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "BZABIK.ART",
  authors: [{ name: "Bartłomiej Żabik" }],
  creator: "Bartłomiej Żabik",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "BZABIK.ART",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body>
        <noscript>
          <style>{`[data-reveal="hidden"]{opacity:1;transform:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
