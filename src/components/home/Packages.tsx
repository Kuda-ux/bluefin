"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const packages = [
  {
    name: "Home Starter System",
    tagline: "Essential backup for small households",
    powers: ["Lights (6-8 rooms)", "Phone & laptop charging", "TV & decoder", "Wi-Fi router"],
    ideal: "Small homes, apartments, and cottages",
    popular: false,
    accent: "blue-electric",
  },
  {
    name: "Family Backup System",
    tagline: "Complete power independence for families",
    powers: [
      "Everything in Starter",
      "Full-size fridge/freezer",
      "Microwave & small appliances",
      "Multiple TVs",
      "Security systems",
    ],
    ideal: "Medium to large family homes",
    popular: true,
    accent: "gold",
  },
  {
    name: "Business Power System",
    tagline: "Uninterrupted power for your business",
    powers: [
      "Computers & office equipment",
      "Commercial fridges & freezers",
      "Power tools & machinery",
      "Lighting for large spaces",
      "Air conditioning units",
      "POS & security systems",
    ],
    ideal: "Shops, offices, lodges, restaurants",
    popular: false,
    accent: "blue-bright",
  },
];

export default function Packages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-gold bg-gold/10 rounded-full mb-4">
            Solar Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Power Solution</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tailored solar packages designed for Zimbabwe&apos;s energy needs.
            Every system is custom-designed for maximum performance.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl overflow-hidden ${
                pkg.popular ? "md:-mt-4 md:mb-0" : ""
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-gold to-gold-dark text-navy text-center py-2 text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div
                className={`h-full p-8 ${pkg.popular ? "pt-14" : ""} glass border border-white/5 ${
                  pkg.popular
                    ? "border-gold/20 shadow-xl shadow-gold/5"
                    : "hover:border-white/10"
                } rounded-2xl transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Package Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm mb-8">{pkg.tagline}</p>

                {/* What It Powers */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
                    What it powers
                  </p>
                  <ul className="space-y-3">
                    {pkg.powers.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <svg
                          className={`w-5 h-5 shrink-0 ${
                            pkg.popular ? "text-gold" : "text-blue-electric"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
                    Ideal for
                  </p>
                  <p className="text-sm text-gray-300">{pkg.ideal}</p>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/263776033323?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(
                    pkg.name
                  )}%20package.%20Please%20send%20me%20a%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-gold to-gold-dark text-navy hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02]"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-10 max-w-xl mx-auto"
        >
          All systems are custom-designed based on your actual energy usage.
          Prices vary depending on components selected. Contact us for a
          detailed assessment and accurate quote.
        </motion.p>
      </div>
    </section>
  );
}
