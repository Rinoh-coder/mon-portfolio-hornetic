import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ratomboson-tina-roedrino.vercel.app"),
  title: "RATOMBOSON Tina Roédrino - Portfolio - Hornetic",
  description:
    "Étudiant en informatique (télécommunications et réseaux) et entrepreneur émergent. Objectif : ingénieur réseaux alliant cybersécurité et intelligence artificielle. Hornetic propose des services de développement web, design et maintenance système.",
  openGraph: {
    title: "RATOMBOSON Tina Roédrino - Portfolio - Hornetic",
    description:
      "Étudiant en informatique (télécommunications et réseaux) et entrepreneur émergent. Objectif : ingénieur réseaux alliant cybersécurité et intelligence artificielle. Hornetic propose des services de développement web, design et maintenance système.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RATOMBOSON Tina Roédrino - Portfolio - Hornetic",
    description:
      "Étudiant en informatique (télécommunications et réseaux) et entrepreneur émergent. Objectif : ingénieur réseaux alliant cybersécurité et intelligence artificielle. Hornetic propose des services de développement web, design et maintenance système.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
