import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional solar installation, backup power systems, maintenance & monitoring, and solar irrigation solutions. Bluefin Energy serves homes, businesses & farms across Zimbabwe.",
  alternates: {
    canonical: "https://www.bluefin.co.zw/services",
  },
  openGraph: {
    title: "Solar Services | Bluefin Energy Zimbabwe",
    description:
      "From solar installation to backup power and irrigation — comprehensive solar energy services for Zimbabwe.",
    url: "https://www.bluefin.co.zw/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
