"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Tendai Moyo",
    role: "Homeowner, Masvingo",
    quote:
      "Bluefin transformed our home. We haven't experienced a single power cut since the installation. The team was professional, punctual, and the system works flawlessly. Best investment we've made.",
    rating: 5,
    system: "Family Backup System",
  },
  {
    name: "Grace Mutasa",
    role: "Lodge Owner, Great Zimbabwe",
    quote:
      "Our lodge now runs entirely on solar. Guests love it, and our electricity costs have dropped by over 80%. Bluefin's team designed a system perfectly tailored to our needs.",
    rating: 5,
    system: "Business Power System",
  },
  {
    name: "Tatenda Chirwa",
    role: "Commercial Farmer, Chiredzi",
    quote:
      "The solar irrigation system has been a game-changer for our farm. Reliable water supply regardless of ZESA power cuts. Production has increased significantly since installation.",
    rating: 5,
    system: "Solar Irrigation System",
  },
  {
    name: "Rumbidzai Ndlovu",
    role: "Shop Owner, Masvingo",
    quote:
      "My shop used to lose thousands during power cuts. Since Bluefin installed our backup system, we've had zero downtime. The POS and fridges run perfectly all day. Highly recommend!",
    rating: 5,
    system: "Business Backup System",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light/30 via-navy to-navy" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-blue/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-gold bg-gold/10 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from real clients who
            have made the switch to solar with Bluefin Energy.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl glass-light border border-white/5 hover:border-gold/20 transition-all duration-500 group hover:-translate-y-1"
            >
              {/* Large Quote Icon */}
              <svg className="absolute top-6 right-6 w-10 h-10 text-gold/10 group-hover:text-gold/20 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author + System Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue to-gold flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold/70 bg-gold/5 rounded-full border border-gold/10">
                  {testimonial.system}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
