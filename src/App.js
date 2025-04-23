import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DubbersAutoSite() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.img
              src="/tire.png"
              alt="Tire spinning"
              className="w-40 h-40"
              initial={{ rotate: 0, scale: 0.8 }}
              animate={{ rotate: 360, scale: 1, transition: { duration: 2, ease: "easeInOut" } }}
              exit={{ scale: 0.5, opacity: 0, transition: { duration: 1 } }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div initial="hidden" animate="show">
          <motion.header className="flex justify-between items-center p-6 bg-red-600 text-white" variants={fadeIn}>
            <h1 className="text-2xl font-bold">Dubbers Auto Shop</h1>
            <nav className="space-x-6">
              <a href="#services" className="hover:underline">Services</a>
              <a href="#testimonials" className="hover:underline">Testimonials</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </motion.header>

          <motion.section className="p-16 text-center bg-gray-800" variants={fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Your Neighborhood Auto Experts</h2>
            <p className="mb-6 text-lg">Fast, reliable, and affordable vehicle repair in Lafayette, Indiana.</p>
            <a href="#contact" className="bg-red-600 px-6 py-3 rounded-xl text-white font-semibold hover:bg-red-500 transition">Book an Appointment</a>
          </motion.section>

          <motion.section id="services" className="p-12 bg-gray-900" variants={fadeIn}>
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Oil Change", "Tires & Brakes", "Alignment"].map((title, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={`/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}.jpg`} alt={title} className="mx-auto mb-4 rounded-xl" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p>{
                    title === "Oil Change"
                      ? "Keep your engine running smooth with full synthetic or conventional oil."
                      : title === "Tires & Brakes"
                      ? "Flat tire? Squeaky brakes? We’ll fix it up safely and quickly."
                      : "Improve handling and extend the life of your tires with precise alignments."
                  }</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="testimonials" className="p-12 bg-gray-800 text-center" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
            {["They got me in the next day and had my vehicle repaired quickly. Very reasonable prices!", "If you're looking for an honest mechanic, look no further. Great experience every time."].map((quote, i) => (
              <motion.blockquote key={i} className="italic max-w-xl mx-auto mb-6" variants={fadeIn}>
                “{quote}”
                <cite className="block mt-2 text-sm">— {i === 0 ? "Happy Customer" : "Local Resident"}</cite>
              </motion.blockquote>
            ))}
          </motion.section>

          <motion.section id="contact" className="p-12 bg-gray-900" variants={fadeIn}>
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <div className="text-center mb-6">
              <p>Phone: <a href="tel:7654473298" className="underline">(765) 447-3298</a></p>
              <p>Address: 625 1/2 N Earl Ave, Lafayette, IN 47904</p>
              <p>Hours: Mon–Fri, 8am–5pm</p>
            </div>
            <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
              <input className="p-3 rounded-xl bg-gray-800 border border-gray-700" type="text" placeholder="First name" required />
              <input className="p-3 rounded-xl bg-gray-800 border border-gray-700" type="text" placeholder="Last name" required />
              <input className="p-3 rounded-xl bg-gray-800 border border-gray-700" type="email" placeholder="Email" required />
              <textarea className="p-3 rounded-xl bg-gray-800 border border-gray-700" placeholder="Your message" rows="4" required></textarea>
              <button className="bg-red-600 px-6 py-3 rounded-xl text-white font-semibold hover:bg-red-500 transition">Submit</button>
            </form>
          </motion.section>

          <motion.footer className="p-6 text-center bg-gray-800 text-sm" variants={fadeIn}>
            &copy; {new Date().getFullYear()} Dubbers Auto Shop. All rights reserved.
          </motion.footer>
        </motion.div>
      )}
    </div>
  );
}
