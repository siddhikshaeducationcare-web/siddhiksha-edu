import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Siddhiksha Education Care | Tuition Centre in Chennai",
    template: "%s | Siddhiksha Education Care",
  },
  description:
    "Siddhiksha Education Care - A Place to Learn! Premium tuition centre in Chennai offering State Board (1-12) and CBSE (1-10) coaching. Expert faculty for Mathematics, Science, and Tamil.",
  keywords: [
    "Tuition Centre in Chennai",
    "State Board Tuition",
    "CBSE Tuition",
    "Maths Tuition",
    "Science Tuition",
    "Tamil Tuition",
    "Siddhiksha Education Care",
    "Best Tuition Centre Chennai",
    "Class 1 to 12 Tuition",
    "CBSE Coaching Chennai",
  ],
  authors: [{ name: "Siddhiksha Education Care" }],
  creator: "Siddhiksha Education Care",
  publisher: "Siddhiksha Education Care",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://siddhikshaedu.com",
    siteName: "Siddhiksha Education Care",
    title: "Siddhiksha Education Care | A Place to Learn!",
    description:
      "Premium tuition centre in Chennai. State Board & CBSE coaching for Classes 1-12. Expert faculty in Mathematics, Science & Tamil.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Siddhiksha Education Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhiksha Education Care | A Place to Learn!",
    description:
      "Premium tuition centre in Chennai. State Board & CBSE coaching for Classes 1-12.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://siddhikshaedu.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Siddhiksha Education Care",
              description: "A Place to Learn! - Premium tuition centre in Chennai",
              url: "https://siddhikshaedu.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "State Board Tuition Classes 1-12",
                  description: "Expert tuition for State Board students",
                },
                {
                  "@type": "Offer",
                  name: "CBSE Tuition Classes 1-10",
                  description: "Expert tuition for CBSE students",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
