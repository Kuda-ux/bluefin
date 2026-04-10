"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Solar Installation",
    description:
      "Complete solar system design and professional installation for homes and businesses across Zimbabwe.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    color: "from-gold/20 to-gold/5",
    iconColor: "text-gold",
    borderColor: "hover:border-gold/30",
  },
  {
    title: "Backup Systems",
    description:
      "Never lose power again. Reliable battery backup and inverter systems to keep your home or business running 24/7.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "from-blue-electric/20 to-blue-electric/5",
    iconColor: "text-blue-electric",
    borderColor: "hover:border-blue-electric/30",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing system monitoring, cleaning, and maintenance to ensure peak performance and maximum energy output.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h13.364M4.93 19.93l.94-2.82m.94-2.82L4.93 19.93zm0 0l2.82-.94m2.82-.94L4.93 19.93z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.17 11.42l-5.1 5.1m0 0l5.1 5.1m-5.1-5.1H2.636" />
      </svg>
    ),
    color: "from-green-400/20 to-green-400/5",
    iconColor: "text-green-400",
    borderColor: "hover:border-green-400/30",
  },
  {
    title: "Irrigation Systems",
    description:
      "Solar-powered irrigation solutions for farms. Reduce operational costs and ensure reliable water supply year-round.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    color: "from-blue-bright/20 to-blue-bright/5",
    iconColor: "text-blue-bright",
    borderColor: "hover:border-blue-bright/30",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/50 to-navy pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-gold bg-gold/10 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Solar{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From design to installation and ongoing support, we deliver
            end-to-end solar energy solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href="/services"
                className={`group block h-full p-8 rounded-2xl glass-light border border-white/5 ${service.borderColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center ${service.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-gold transition-colors duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
