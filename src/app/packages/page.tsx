"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Home Starter System",
    tagline: "Essential backup for small households",
    description:
      "Perfect for small homes and apartments that need basic backup power during load shedding. Keep your lights on, charge your devices, and watch TV without interruption.",
    powers: [
      "Lights (6-8 rooms)",
      "Phone & laptop charging",
      "TV & decoder (DStv)",
      "Wi-Fi router",
      "Small fan",
    ],
    ideal: "Small homes, apartments, cottages, and single-person households",
    components: [
      "2-4 Solar panels (550W each)",
      "3kVA Hybrid inverter",
      "1x Lithium battery (5.12kWh)",
      "Mounting kit & protection",
    ],
    popular: false,
    image: "/images/must-system-masvingo.jpg",
  },
  {
    name: "Family Backup System",
    tagline: "Complete power independence for families",
    description:
      "The most popular choice for medium to large families. This system handles your entire household — from kitchen appliances to entertainment and security systems.",
    powers: [
      "Everything in Starter",
      "Full-size fridge/freezer",
      "Microwave & small appliances",
      "Multiple TVs & entertainment",
      "Security system & gate motor",
      "Washing machine",
    ],
    ideal: "Medium to large family homes with multiple occupants",
    components: [
      "6-8 Solar panels (550W each)",
      "5kVA Hybrid inverter",
      "2x Lithium batteries (10.24kWh)",
      "Complete mounting & protection system",
    ],
    popular: true,
    image: "/images/must-inverter-battery.jpg",
  },
  {
    name: "Business Power System",
    tagline: "Uninterrupted power for your business",
    description:
      "Designed for commercial operations that cannot afford any downtime. Keep your business running smoothly through any power disruption with our enterprise-grade system.",
    powers: [
      "Computers & office equipment",
      "Commercial fridges & freezers",
      "Power tools & machinery",
      "Lighting for large spaces",
      "Air conditioning units",
      "POS systems & security",
      "Industrial equipment",
    ],
    ideal: "Shops, offices, lodges, restaurants, warehouses, and workshops",
    components: [
      "10-16 Solar panels (550W each)",
      "8-10kVA Hybrid inverter",
      "4x Lithium batteries (20.48kWh+)",
      "Industrial mounting & protection",
    ],
    popular: false,
    image: "/images/inverter-batteries-kodak.jpg",
  },
];

const faqs = [
  {
    q: "How long does installation take?",
    a: "Most residential installations are completed within 1-2 days. Commercial systems may take 3-5 days depending on complexity.",
  },
  {
    q: "Do you provide warranties?",
    a: "Yes. Solar panels come with a 25-year performance warranty. Inverters and batteries carry manufacturer warranties of 5-10 years.",
  },
  {
    q: "Can I expand my system later?",
    a: "Absolutely. All our systems are designed to be expandable. You can add more panels, batteries, or upgrade your inverter as your needs grow.",
  },
  {
    q: "What happens during cloudy days?",
    a: "Our systems include battery storage that charges during sunny periods. Your battery backup will power your home during cloudy days and at night.",
  },
];

export default function PackagesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/panels-corrugated-roof.jpg" alt="Solar packages" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/85 to-navy" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-gold bg-gold/10 rounded-full mb-6">
              Solar Packages
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Choose Your{" "}
              <span className="gradient-text">Power Solution</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Every package is custom-designed for your exact energy needs.
              Contact us for a detailed assessment and accurate quote tailored to
              your property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative rounded-3xl overflow-hidden glass border ${
                  pkg.popular
                    ? "border-gold/20 shadow-xl shadow-gold/5"
                    : "border-white/5"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-r from-gold to-gold-dark text-navy text-center py-2.5 text-sm font-bold uppercase tracking-wider">
                    Most Popular Choice
                  </div>
                )}

                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    pkg.popular ? "pt-10 lg:pt-0" : ""
                  }`}
                >
                  {/* Visual */}
                  <div
                    className={`relative aspect-[4/3] lg:aspect-auto min-h-[250px] ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img src={pkg.image} alt={pkg.name} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/80 hidden lg:block" />
                  </div>

                  {/* Content */}
                  <div
                    className={`p-8 sm:p-10 lg:p-12 ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {pkg.name}
                    </h2>
                    <p className="text-gold font-medium mb-4">{pkg.tagline}</p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                      {pkg.description}
                    </p>

                    {/* What it powers */}
                    <div className="mb-8">
                      <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
                        What it powers
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pkg.powers.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <svg
                              className="w-4 h-4 text-gold shrink-0"
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
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Components */}
                    <div className="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                        System Components
                      </h4>
                      {pkg.components.map((comp) => (
                        <div
                          key={comp}
                          className="flex items-center gap-2 text-sm text-gray-300 mb-1.5 last:mb-0"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-electric shrink-0" />
                          {comp}
                        </div>
                      ))}
                    </div>

                    {/* Ideal for */}
                    <p className="text-sm text-gray-400 mb-8">
                      <span className="text-gray-500 font-semibold">
                        Ideal for:
                      </span>{" "}
                      {pkg.ideal}
                    </p>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/263776033323?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(
                        pkg.name
                      )}%20package.%20Please%20send%20me%20a%20detailed%20quote.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 px-8 py-4 font-bold rounded-xl transition-all duration-300 ${
                        pkg.popular
                          ? "bg-gradient-to-r from-gold to-gold-dark text-navy hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02]"
                          : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Get Detailed Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-navy-light/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-gold bg-gold/10 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-light border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
