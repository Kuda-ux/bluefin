import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bluefin Energy | Solar Installation & Solutions in Zimbabwe",
  description:
    "Zimbabwe's trusted solar energy company. Professional solar system design, installation, panels, inverters & batteries. Serving Masvingo & nationwide. Get a free quote today.",
  keywords:
    "solar systems Zimbabwe, solar installation Masvingo, backup power Zimbabwe, solar panels Zimbabwe, solar energy Zimbabwe, solar inverters, solar batteries, irrigation solar systems",
  openGraph: {
    title: "Bluefin Energy | Solar Installation & Solutions in Zimbabwe",
    description:
      "Say goodbye to power cuts. Professional solar solutions for homes, businesses & farms across Zimbabwe.",
    url: "https://www.bluefin.co.zw",
    siteName: "Bluefin Energy",
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluefin Energy | Solar Installation & Solutions in Zimbabwe",
    description:
      "Say goodbye to power cuts. Professional solar solutions for homes, businesses & farms across Zimbabwe.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Bluefin Energy",
              image: "https://www.bluefin.co.zw/logo.jpeg",
              url: "https://www.bluefin.co.zw",
              telephone: "+263776033323",
              email: "sales@bluefin.co.zw",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shop No.16, New Market Centre, Robert Mugabe Way",
                addressLocality: "Masvingo",
                addressCountry: "ZW",
              },
              description:
                "Professional solar system design, installation, and component sales in Zimbabwe.",
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-17:00, Sa 08:00-13:00",
              sameAs: [],
              serviceArea: {
                "@type": "Country",
                name: "Zimbabwe",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
