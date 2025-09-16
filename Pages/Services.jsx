import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Heart, 
  Building2, 
  Users, 
  Sparkles, 
  Check, 
  Clock, 
  MapPin, 
  Music,
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "wedding",
    icon: Heart,
    title: "Wedding Ceremonies",
    subtitle: "Make your special day unforgettable",
    description: "From processional to recessional, create magical moments with elegant viola music tailored to your love story.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    startingPrice: "$800",
    duration: "2-4 hours",
    features: [
      "Bridal processional & recessional",
      "Ceremony background music",
      "Cocktail hour performance",
      "Custom song requests",
      "Professional sound equipment",
      "Consultation & planning"
    ],
    popular: true,
    color: "from-rose-400 to-pink-500"
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Events",
    subtitle: "Elevate your business gatherings",
    description: "Professional performances that add sophistication and elegance to your corporate functions and networking events.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    startingPrice: "$600",
    duration: "1-3 hours",
    features: [
      "Background music for networking",
      "Opening/closing performances",
      "Award ceremony music",
      "Professional attire",
      "Flexible repertoire",
      "Sound system included"
    ],
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: "private",
    icon: Users,
    title: "Private Parties",
    subtitle: "Intimate performances for special occasions",
    description: "Create intimate and memorable moments for your personal celebrations with customized viola performances.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    startingPrice: "$500",
    duration: "1-2 hours",
    features: [
      "Personalized song selection",
      "Birthday & anniversary music",
      "Dinner party ambiance",
      "Small intimate settings",
      "Custom arrangements",
      "Flexible timing"
    ],
    color: "from-purple-400 to-violet-500"
  },
  {
    id: "special",
    icon: Sparkles,
    title: "Special Occasions",
    subtitle: "Custom performances for unique events",
    description: "From memorial services to holiday parties, let beautiful viola music enhance your meaningful gatherings.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    startingPrice: "Custom",
    duration: "Flexible",
    features: [
      "Memorial services",
      "Holiday celebrations",
      "Proposal music",
      "Religious ceremonies",
      "Art gallery openings",
      "Charity events"
    ],
    color: "from-amber-400 to-orange-500"
  }
];

const pricingPackages = [
  {
    name: "Essential",
    price: "$400",
    duration: "1 hour",
    description: "Perfect for small intimate gatherings",
    features: [
      "1 hour performance",
      "Basic repertoire",
      "Professional setup",
      "Email consultation"
    ]
  },
  {
    name: "Premium",
    price: "$700",
    duration: "2 hours",
    description: "Most popular choice for events",
    features: [
      "2 hour performance",
      "Extended repertoire",
      "Sound equipment included",
      "Phone/video consultation",
      "Custom song requests (2)",
      "Professional attire"
    ],
    popular: true
  },
  {
    name: "Deluxe",
    price: "$1,200",
    duration: "4 hours",
    description: "Complete musical experience",
    features: [
      "4 hour performance",
      "Full repertoire access",
      "Premium sound system",
      "In-person consultation",
      "Unlimited song requests",
      "Multiple costume changes",
      "Backup equipment"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Viola Services
              <span className="block text-xl md:text-2xl font-light text-amber-300 mt-2">
                Elegant music for every occasion
              </span>
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Whether you're planning a wedding, corporate event, or intimate gathering, 
              I provide professional viola performances that create unforgettable moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 font-semibold">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 text-right">
                      <div className="text-white font-bold text-lg">
                        Starting at {service.startingPrice}
                      </div>
                      <div className="text-white/80 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
                Flexible Pricing
                <span className="block bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">
                  For Every Budget
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the package that best fits your event needs and budget.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full ${
                  pkg.popular ? 'ring-2 ring-purple-500' : ''
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-500 to-amber-500 text-white font-semibold px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-gray-500 mb-4">
                      {pkg.duration}
                    </div>
                    <p className="text-gray-600 mb-6">
                      {pkg.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Additional Information
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Service Areas</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Primary service area includes New York City, Long Island, Westchester, 
                  and Northern New Jersey. Travel to other locations available with 
                  additional fee.
                </p>
                <div className="text-sm text-gray-500">
                  • No travel fee within 25 miles<br/>
                  • $1/mile beyond 25 miles<br/>
                  • Overnight accommodations for distant locations
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Music className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Repertoire</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Extensive repertoire spanning classical, contemporary, popular, 
                  jazz, and world music. Custom arrangements available upon request.
                </p>
                <div className="text-sm text-gray-500">
                  • Classical masterpieces<br/>
                  • Modern pop arrangements<br/>
                  • Wedding favorites<br/>
                  • Cultural and religious music
                </div>
              </CardContent>
            </Card>
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
              Ready to Book Your Performance?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss your event and create a musical experience that your 
              guests will remember forever.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}