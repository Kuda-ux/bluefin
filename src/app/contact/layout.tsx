import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bluefin Energy for a free solar quote. WhatsApp, call, or visit us in Masvingo, Zimbabwe. Fast response guaranteed.",
  alternates: {
    canonical: "https://www.bluefin.co.zw/contact",
  },
  openGraph: {
    title: "Contact Bluefin Energy | Get a Free Solar Quote",
    description:
      "Reach out for a free solar assessment and custom quote. WhatsApp, call, email, or visit our Masvingo office.",
    url: "https://www.bluefin.co.zw/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
