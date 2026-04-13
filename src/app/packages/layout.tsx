import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Packages & Pricing",
  description:
    "Affordable solar packages for every budget. Home Starter, Family Backup, and Business Power systems with professional installation included. Get a free quote from Bluefin Energy.",
  alternates: {
    canonical: "https://www.bluefin.co.zw/packages",
  },
  openGraph: {
    title: "Solar Packages & Pricing | Bluefin Energy Zimbabwe",
    description:
      "Choose from our range of solar packages — from home starter systems to full business power solutions. Professional installation included.",
    url: "https://www.bluefin.co.zw/packages",
  },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
