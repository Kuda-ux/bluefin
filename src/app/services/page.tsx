"use client";

import { motion } from "framer-motion";
const services = [
  {
    title: "Solar System Design & Installation",
    description:
      "Complete end-to-end solar system design tailored to your property and energy needs. Our team of certified technicians handles everything from site assessment to final commissioning.",
    features: [
      "Professional site assessment",
      "Custom system design",
      "Premium component selection",
      "Expert installation",
      "System testing & commissioning",
      "Documentation & warranties",
    ],
    image: "/images/rooftop-panels-masvingo.jpg",
    accent: "gold",
  },
  {
    title: "Solar Panels & Components",
    description:
      "We supply and install only tier-1 solar panels, inverters, batteries, and mounting systems from globally recognized manufacturers. Every component is selected for maximum durability and performance in Zimbabwe's climate.",
    features: [
      "Tier-1 monocrystalline panels",
      "Hybrid & off-grid inverters",
      "Lithium & gel batteries",
      "Mounting kits & structures",
      "Protection systems & breakers",
      "Cables & connectors",
    ],
    image: "/images/inverter-batteries-kodak.jpg",
    accent: "blue-electric",
  },
  {
    title: "Backup Power Solutions",
    description:
      "Never be left in the dark again. Our backup power systems seamlessly switch to battery power during load shedding, keeping your essential appliances running without interruption.",
    features: [
      "Automatic changeover systems",
      "Battery backup sizing",
      "UPS integration",
      "Load management",
      "Remote monitoring",
      "24/7 support availability",
    ],
    image: "/images/must-inverter-battery.jpg",
    accent: "blue-bright",
  },
  {
    title: "Solar Irrigation Systems",
    description:
      "Purpose-built solar pumping and irrigation solutions for farms and agricultural operations. Reduce your dependency on grid power and diesel generators for consistent water supply.",
    features: [
      "Solar water pump systems",
      "Drip irrigation integration",
      "Borehole pump solutions",
      "Variable speed controllers",
      "Water storage management",
      "Agricultural consulting",
    ],
    image: "/images/ground-mount-farm.jpg",
    accent: "green-400",
  },
  {
    title: "Maintenance & Monitoring",
    description:
      "Keep your solar system performing at peak efficiency with our comprehensive maintenance and monitoring services. Regular inspections, cleaning, and performance optimization included.",
    features: [
      "Scheduled panel cleaning",
      "Performance monitoring",
      "Inverter diagnostics",
      "Battery health checks",
      "Wiring inspections",
      "System upgrades & expansion",
    ],
    image: "/images/technician-bluefin-install.jpg",
    accent: "gold",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/rooftop-panels-town.jpg" alt="Solar installation services" className="absolute inset-0 w-full h-full object-cover" />
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Complete Solar{" "}
              <span className="gradient-text">Energy Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              From initial consultation to installation and ongoing support, we
              deliver professional solar solutions that transform how you power
              your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Visual */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <svg
                          className={`w-5 h-5 shrink-0 text-${service.accent}`}
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
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/263776033323?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
                  >
                    Enquire Now
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-navy-light/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Our solar experts will assess your property and energy needs to
            recommend the perfect system. Contact us for a free, no-obligation
            consultation.
          </p>
          <a
            href="https://wa.me/263776033323?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20solar%20system%20for%20my%20needs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Talk to a Solar Expert
          </a>
        </div>
      </section>
    </div>
  );
}
