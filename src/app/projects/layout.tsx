import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse 500+ completed solar installations across Zimbabwe. Residential rooftops, commercial systems, battery backups, and solar irrigation projects by Bluefin Energy.",
  alternates: {
    canonical: "https://www.bluefin.co.zw/projects",
  },
  openGraph: {
    title: "Solar Project Portfolio | Bluefin Energy Zimbabwe",
    description:
      "See our real completed solar installations — rooftop panels, inverter systems, battery backups, and farm irrigation across Zimbabwe.",
    url: "https://www.bluefin.co.zw/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
