import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Award, Music, Users, Calendar, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: GraduationCap,
    title: "Master of Music",
    description: "Juilliard School of Music",
    year: "2018"
  },
  {
    icon: Award,
    title: "Young Artist Award",
    description: "International Viola Competition",
    year: "2019"
  },
  {
    icon: Users,
    title: "Principal Viola",
    description: "Metropolitan Chamber Orchestra",
    year: "2020-Present"
  },
  {
    icon: Music,
    title: "Solo Performances",
    description: "Carnegie Hall, Lincoln Center",
    year: "2021-2024"
  }
];

const venues = [
  "Carnegie Hall",
  "Lincoln Center",
  "Metropolitan Opera House",
  "Brooklyn Academy of Music",
  "The Plaza Hotel",
  "Central Park Conservatory"
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Ana Kastro
                <span className="block text-xl md:text-2xl font-light text-amber-300 mt-2">
                  Award-Winning Viola Virtuoso
                </span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                With over a decade of professional experience and performances at the world's most prestigious venues, 
                Ana brings unparalleled artistry and passion to every performance. Her versatile repertoire and 
                personalized approach ensure your event will be truly memorable.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-white/80">
                  <Calendar className="w-5 h-5 mr-2 text-amber-400" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPin className="w-5 h-5 mr-2 text-amber-400" />
                  <span>Based in New York</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ana Kastro performing"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 ring-4 ring-amber-400/20 rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional
                <span className="block bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
                  Achievements & Recognition
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A journey of musical excellence, marked by prestigious awards, world-class education, 
                and performances at renowned venues.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {achievement.description}
                    </p>
                    <div className="text-sm font-semibold text-purple-600">
                      {achievement.year}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Venues */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Performed At
                <span className="block bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
                  World-Class Venues
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bringing the same level of excellence and artistry to your special event.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {venues.map((venue, index) => (
              <div
                key={venue}
                className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Music className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {venue}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Add Beautiful Music to Your Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how I can make your special occasion even more memorable 
              with professional viola performances tailored to your vision.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}