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
  },
  {
    name: "Grace Mutasa",
    role: "Lodge Owner, Great Zimbabwe",
    quote:
      "Our lodge now runs entirely on solar. Guests love it, and our electricity costs have dropped by over 80%. Bluefin's team designed a system perfectly tailored to our needs.",
    rating: 5,
  },
  {
    name: "Tatenda Chirwa",
    role: "Commercial Farmer, Chiredzi",
    quote:
      "The solar irrigation system has been a game-changer for our farm. Reliable water supply regardless of ZESA power cuts. Production has increased significantly since installation.",
    rating: 5,
  },
  {
    name: "Rumbidzai Ndlovu",
    role: "Shop Owner, Masvingo",
    quote:
      "My shop used to lose thousands during power cuts. Since Bluefin installed our backup system, we've had zero downtime. The POS and fridges run perfectly all day. Highly recommend!",
    rating: 5,
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
              className="p-8 rounded-2xl glass-light border border-white/5 hover:border-white/10 transition-all duration-500 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-5 h-5 text-gold"
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

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue to-gold flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
