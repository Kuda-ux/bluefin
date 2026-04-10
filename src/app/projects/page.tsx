"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Home", "Business", "Farm"];

const projects = [
  {
    title: "Modern Home Solar System",
    location: "Masvingo",
    category: "Home",
    description: "5kVA hybrid system with 8 panels and lithium battery backup for a family of 6.",
    image: "/images/rooftop-panels-city.jpg",
  },
  {
    title: "Shopping Centre Power",
    location: "Harare",
    category: "Business",
    description: "10kVA commercial system powering a retail complex with 16 solar panels.",
    image: "/images/panels-blue-roof-sunset.jpg",
  },
  {
    title: "Irrigation Pump System",
    location: "Chiredzi",
    category: "Farm",
    description: "Solar-powered borehole pump system irrigating 20 hectares of farmland.",
    image: "/images/ground-mount-farm.jpg",
  },
  {
    title: "Backup Power Installation",
    location: "Masvingo",
    category: "Business",
    description: "Complete Kodak inverter with Dyness battery backup for a commercial property.",
    image: "/images/inverter-batteries-kodak.jpg",
  },
  {
    title: "Suburban Family Home",
    location: "Mutare",
    category: "Home",
    description: "3kVA starter system for essential backup — lights, TV, fridge, and charging.",
    image: "/images/rooftop-panels-mountain.jpg",
  },
  {
    title: "Water Pumping Station",
    location: "Beitbridge",
    category: "Farm",
    description: "High-capacity solar pump system for livestock watering across 50 hectares.",
    image: "/images/pump-controller.jpg",
  },
  {
    title: "Office Complex",
    location: "Gweru",
    category: "Business",
    description: "8kVA MUST system powering a multi-tenant office building with server room backup.",
    image: "/images/must-inverter-wall.jpg",
  },
  {
    title: "Residential Full System",
    location: "Masvingo",
    category: "Home",
    description: "Full off-grid system with rooftop panels and MUST inverter for a family home.",
    image: "/images/rooftop-panels-masvingo.jpg",
  },
  {
    title: "Farm Ground Mount",
    location: "Marondera",
    category: "Farm",
    description: "Ground-mounted solar array powering agricultural operations and irrigation.",
    image: "/images/panels-metal-roof-install.jpg",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/rooftop-panels-residential.jpg" alt="Solar projects portfolio" className="absolute inset-0 w-full h-full object-cover" />
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
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Projects That{" "}
              <span className="gradient-text">Speak for Themselves</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Browse our portfolio of completed solar installations across
              Zimbabwe. Every project is a testament to our commitment to
              quality and professional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-gold to-gold-dark text-navy shadow-lg shadow-gold/20"
                    : "glass text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title + project.location}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-gold/90 text-navy rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-gray-300 text-sm mb-3">
                        <svg
                          className="w-4 h-4 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                        {project.location}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-light/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Want Results Like These?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Every project starts with a conversation. Tell us about your energy
            needs and we&apos;ll design a custom solution that delivers.
          </p>
          <a
            href="https://wa.me/263776033323?text=Hi%2C%20I%20saw%20your%20projects%20and%20I%27d%20like%20a%20solar%20system%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
