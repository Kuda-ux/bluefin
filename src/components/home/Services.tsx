"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Solar Installation",
    description:
      "Complete solar system design and professional installation for homes and businesses across Zimbabwe.",
    image: "/images/rooftop-panels-city.jpg",
    stats: "500+ systems installed",
  },
  {
    title: "Backup Power",
    description:
      "Never lose power again. Reliable battery backup and inverter systems to keep you running 24/7.",
    image: "/images/technician-dual-must-system.jpg",
    stats: "Zero downtime guarantee",
  },
  {
    title: "Maintenance & Monitoring",
    description:
      "Ongoing system monitoring, cleaning, and maintenance to ensure peak performance year-round.",
    image: "/images/technician-dyness-branded.jpg",
    stats: "98% client satisfaction",
  },
  {
    title: "Solar Irrigation",
    description:
      "Solar-powered borehole pumping and drip irrigation for farms. Cut diesel costs permanently.",
    image: "/images/ground-mount-farm.jpg",
    stats: "Agricultural specialists",
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

        {/* Services Grid - 2x2 image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href="/services"
                className="group relative block h-72 sm:h-80 rounded-2xl overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent group-hover:via-navy/70 transition-all duration-500" />

                {/* Stats Pill */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 text-xs font-semibold bg-white/10 backdrop-blur-md text-white rounded-full border border-white/10">
                    {service.stats}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
