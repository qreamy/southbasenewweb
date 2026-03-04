import type { Metadata } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://southbase.se"),
  title: {
    default: "Southbase Consulting — Sales Growth, Delivered",
    template: "%s | Southbase Consulting",
  },
  description:
    "Southbase Consulting AB is a Swedish consulting firm specializing in operative sales. We grow revenue, train sales teams, and build high-performance commercial organizations.",
  keywords: [
    "sales consulting",
    "sales training",
    "revenue growth",
    "B2B sales",
    "Swedish consulting",
    "Helsingborg",
    "operative sales",
  ],
  authors: [{ name: "Southbase Consulting AB" }],
  openGraph: {
    type: "website",
    locale: "en_SE",
    url: "https://southbase.se",
    siteName: "Southbase Consulting",
    title: "Southbase Consulting — Sales Growth, Delivered",
    description:
      "Swedish consulting firm specializing in operative sales, revenue growth, and sales team development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Southbase Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Southbase Consulting — Sales Growth, Delivered",
    description:
      "Swedish consulting firm specializing in operative sales, revenue growth, and sales team development.",
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
    <html lang="en" className={`${outfit.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
