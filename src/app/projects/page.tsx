"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Home", "Business", "Farm"];

const projects = [
  { title: "Rooftop Panels – Mountain View", location: "Mutare", category: "Home", description: "Solar panels on tile roof with scenic mountain backdrop.", image: "/images/rooftop-panels-mountain.jpg" },
  { title: "Kodak & Dyness Battery System", location: "Masvingo", category: "Business", description: "Kodak hybrid inverter with dual Dyness lithium batteries.", image: "/images/inverter-batteries-kodak.jpg" },
  { title: "Technician Commissioning", location: "Masvingo", category: "Business", description: "Bluefin technician commissioning a Kodak inverter system.", image: "/images/technician-inverter.jpg" },
  { title: "Team Electrical Wiring", location: "Masvingo", category: "Business", description: "Installation team completing wiring for a new backup system.", image: "/images/team-wiring.jpg" },
  { title: "Urban Rooftop Installation", location: "Masvingo", category: "Home", description: "Panoramic rooftop solar overlooking the city.", image: "/images/rooftop-panels-city.jpg" },
  { title: "Township Rooftop Panels", location: "Masvingo", category: "Home", description: "Residential panels at optimal angle for maximum sun capture.", image: "/images/rooftop-panels-town.jpg" },
  { title: "Inverter Commissioning – SVolt", location: "Masvingo", category: "Home", description: "Two-man team commissioning AlfTech inverter with SVolt battery.", image: "/images/team-inverter-install.jpg" },
  { title: "Ground-Mount Farm Array", location: "Chiredzi", category: "Farm", description: "Elevated ground-mount solar for agricultural power and pumping.", image: "/images/ground-mount-farm.jpg" },
  { title: "Solar Pump Controller", location: "Beitbridge", category: "Farm", description: "DIFFUL pump controller with surge protection for borehole pumping.", image: "/images/pump-controller.jpg" },
  { title: "MUST Inverter Home System", location: "Masvingo", category: "Home", description: "MUST Solar Inverter with LiFePO4 battery module.", image: "/images/must-inverter-battery.jpg" },
  { title: "Technician – MUST Showcase", location: "Masvingo", category: "Home", description: "Technician showcasing completed MUST inverter and battery install.", image: "/images/technician-must-system.jpg" },
  { title: "MUST System – Wall Mount", location: "Masvingo", category: "Business", description: "Professional wall-mounted MUST inverter with trunking.", image: "/images/must-inverter-wall.jpg" },
  { title: "Commercial Corrugated Roof", location: "Masvingo", category: "Business", description: "Large solar panels on corrugated roofing for commercial property.", image: "/images/panels-corrugated-roof.jpg" },
  { title: "Residential Backup – Compact", location: "Masvingo", category: "Home", description: "Compact MUST inverter with battery in Masvingo Province.", image: "/images/must-system-masvingo.jpg" },
  { title: "Commercial Blue Roof Sunset", location: "Masvingo", category: "Business", description: "Solar panels on IBR sheeting with sunset across Masvingo.", image: "/images/panels-blue-roof-sunset.jpg" },
  { title: "Dual Panel Array – Residential", location: "Masvingo", category: "Home", description: "Dual panel array on corrugated roofing with optimal alignment.", image: "/images/rooftop-panels-masvingo.jpg" },
  { title: "MUST Inverter & DB Board", location: "Masvingo", category: "Home", description: "Complete MUST system with DB board and neat cabling.", image: "/images/must-inverter-battery-wall.jpg" },
  { title: "Solar-Powered Home at Night", location: "Masvingo", category: "Home", description: "Bluefin-powered home lit up at night — zero load shedding.", image: "/images/home-night-solar-lights.jpg" },
  { title: "Residential Roof Installation", location: "Masvingo", category: "Home", description: "Multiple panels being installed on corrugated residential roof.", image: "/images/rooftop-panels-residential.jpg" },
  { title: "Bluefin Tech – Battery Setup", location: "Masvingo", category: "Business", description: "Branded Bluefin technician installing MUST inverter system.", image: "/images/technician-bluefin-install.jpg" },
  { title: "Full System Install", location: "Masvingo", category: "Home", description: "Complete MUST inverter and battery with precision wall mount.", image: "/images/technician-must-install.jpg" },
  { title: "Codi Energy Inverter", location: "Masvingo", category: "Business", description: "Codi Energy inverter with SVolt battery — multi-brand expertise.", image: "/images/technician-codi-inverter.jpg" },
  { title: "Large Commercial Array", location: "Masvingo", category: "Business", description: "Major rooftop installation on metal sheeting — commercial scale.", image: "/images/panels-metal-roof-install.jpg" },
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
          <img src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=1920&q=85" alt="Solar installation portfolio" className="absolute inset-0 w-full h-full object-cover" />
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
