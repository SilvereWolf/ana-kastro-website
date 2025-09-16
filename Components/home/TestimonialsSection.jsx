import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "../../entities/Testimonial";
import { usePrefersReducedMotion } from "../../utils/accessibility";
import { useRef } from "react";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const liveRef = useRef(null);

  useEffect(() => {
    loadTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0 && !reducedMotion && !isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [testimonials.length, reducedMotion, isPaused]);

  const loadTestimonials = async () => {
    try {
      const data = await Testimonial.list('-rating', 10);
      setTestimonials(data.filter(t => t.rating >= 4));
    } catch (error) {
      console.error('Error loading testimonials:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Clients Say About
              <span className="block bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
                Their Experience
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from those who have experienced the magic of live viola performances 
              at their special events.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <button className="text-sm px-2 py-1 bg-white/90 rounded" onClick={() => setIsPaused(!isPaused)} aria-pressed={isPaused}>
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <Quote className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].testimonial_text}"
                  </blockquote>
                  <div id="testimonial-live" ref={liveRef} className="sr-only" aria-live="polite">
                    {testimonials[currentIndex].testimonial_text}
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating
                            ? 'text-amber-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div>
                    <p className="font-bold text-lg text-gray-900">
                      {testimonials[currentIndex].client_name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].client_title} • {testimonials[currentIndex].event_type}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Show testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
