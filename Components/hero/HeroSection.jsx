import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Play, Music, Star, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../utils/accessibility";

export default function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();

  const stats = [
    { number: "500+", label: "Performances" },
    { number: "50+", label: "Venues" },
    { number: "5 Star", label: "Rating" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-amber-900">
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Decorative background image */}
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }} />

      {/* Floating notes (reduced-motion respects user preference) */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <motion.div key={i} className="absolute text-white/10" initial={{ y: "100vh", x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) }} animate={{ y: "-100vh", x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) }} transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5, ease: "linear" }} style={{ fontSize: `${20 + Math.random() * 30}px`, left: `${Math.random() * 100}%` }}>♪</motion.div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white mb-6">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium">Award-Winning Viola Artist</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ana Kastro
            <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-amber-300 mt-2">Professional Viola Artist</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bringing elegance and emotion to your special moments with beautiful viola performances. Available for weddings, corporate events, and intimate gatherings.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Book a Performance
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 group">
              <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              Listen to Samples
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}