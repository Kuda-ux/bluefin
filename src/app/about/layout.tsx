import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bluefin Energy — Zimbabwe's trusted solar installation company based in Masvingo. 8+ years of experience, 500+ installations, and a commitment to quality solar solutions.",
  alternates: {
    canonical: "https://www.bluefin.co.zw/about",
  },
  openGraph: {
    title: "About Bluefin Energy | Our Story & Mission",
    description:
      "Meet the team behind Zimbabwe's most trusted solar energy company. Professional installations, tier-1 equipment, and after-sales support.",
    url: "https://www.bluefin.co.zw/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
