import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { person } from "@/data/person";
import { SITE_URL } from "@/lib/utils";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Prof. Linus Muthuri Gitonga | Vice-Chancellor, Karatina University",
    template: "%s | Prof. Linus Muthuri Gitonga",
  },
  description:
    "Digital academic archive of Prof. Linus Muthuri Gitonga, PhD — Vice-Chancellor of Karatina University and Professor of Entomology. Research in biological control, integrated pest management, and documented academic leadership.",
  keywords: [
    "Linus Muthuri Gitonga",
    "Karatina University",
    "Vice-Chancellor",
    "Professor of Entomology",
    "biological control",
    "integrated pest management",
    "thrips",
    "academic leadership",
  ],
  authors: [{ name: person.fullName }],
  openGraph: {
    title: "Prof. Linus Muthuri Gitonga | Vice-Chancellor, Karatina University",
    description:
      "Scholarship, science, leadership and institutional service — a living academic archive.",
    type: "profile",
    url: SITE_URL,
    images: [
      {
        url: "/images/portrait-headshot.png",
        alt: "Prof. Linus Muthuri Gitonga, Vice-Chancellor of Karatina University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Linus Muthuri Gitonga | Vice-Chancellor, Karatina University",
    description:
      "Professor of Entomology and Vice-Chancellor of Karatina University.",
    images: ["/images/portrait-headshot.png"],
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-forest-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
