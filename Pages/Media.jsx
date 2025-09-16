import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Music, Image as ImageIcon, Video, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mediaCategories = [
  { id: "all", label: "All Media", icon: Music },
  { id: "performance", label: "Performances", icon: Play },
  { id: "photos", label: "Photos", icon: ImageIcon },
  { id: "videos", label: "Videos", icon: Video }
];

const mediaItems = [
  {
    id: 1,
    type: "video",
    category: "performance",
    title: "Wedding Ceremony Performance",
    description: "Beautiful viola performance during a Central Park wedding ceremony",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
    venue: "Central Park, NYC"
  },
  {
    id: 2,
    type: "photo",
    category: "performance",
    title: "Carnegie Hall Solo Performance",
    description: "Solo viola performance at Carnegie Hall's Weill Recital Hall",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    venue: "Carnegie Hall"
  },
  {
    id: 3,
    type: "video",
    category: "performance", 
    title: "Corporate Event Highlight",
    description: "Elegant background music for a high-end corporate gala",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:30",
    venue: "The Plaza Hotel"
  },
  {
    id: 4,
    type: "photo",
    category: "photos",
    title: "Studio Portrait Session",
    description: "Professional headshots and artistic portraits",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    venue: "NYC Studio"
  },
  {
    id: 5,
    type: "video",
    category: "performance",
    title: "Bach Cello Suite Arrangement",
    description: "Beautiful arrangement of Bach's Cello Suite No. 1 for viola",
    thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:12",
    venue: "Lincoln Center"
  },
  {
    id: 6,
    type: "photo",
    category: "photos",
    title: "Outdoor Wedding Performance",
    description: "Performing during an outdoor wedding ceremony in the Hamptons",
    thumbnail: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    venue: "The Hamptons"
  },
  {
    id: 7,
    type: "video",
    category: "videos",
    title: "Behind the Scenes",
    description: "A glimpse into the preparation and setup for a performance",
    thumbnail: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "1:45",
    venue: "Various Locations"
  },
  {
    id: 8,
    type: "photo",
    category: "photos",
    title: "Chamber Music Collaboration",
    description: "Performing with string quartet at a private concert",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    venue: "Private Residence"
  }
];

export default function Media() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredMedia = activeCategory === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory || item.type === activeCategory);

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
              Media Gallery
              <span className="block text-xl md:text-2xl font-light text-amber-300 mt-2">
                Experience the artistry through sight and sound
              </span>
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore photos and videos from performances at prestigious venues, 
              intimate weddings, and special events showcasing the beauty of viola music.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {mediaCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-amber-600 text-white'
                    : 'hover:bg-gray-50'
                } transition-all duration-300`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredMedia.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className={`${
                          item.type === 'video' 
                            ? 'bg-red-500 text-white' 
                            : 'bg-blue-500 text-white'
                        } font-semibold`}>
                          {item.type === 'video' ? (
                            <><Play className="w-3 h-3 mr-1" /> Video</>
                          ) : (
                            <><ImageIcon className="w-3 h-3 mr-1" /> Photo</>
                          )}
                        </Badge>
                      </div>

                      {/* Duration for videos */}
                      {item.type === 'video' && (
                        <div className="absolute bottom-4 right-4">
                          <Badge variant="secondary" className="bg-black/50 text-white">
                            {item.duration}
                          </Badge>
                        </div>
                      )}

                      {/* Play button for videos */}
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button
                            size="lg"
                            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50 group-hover:scale-110 transition-all duration-300"
                            onClick={() => setSelectedVideo(item)}
                          >
                            <Play className="w-6 h-6 text-white ml-1" />
                          </Button>
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm flex items-center">
                          <Music className="w-3 h-3 mr-1" />
                          {item.venue}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">{selectedVideo.title}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4">
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full rounded"
                  allowFullScreen
                />
              </div>
              <div className="mt-4">
                <p className="text-gray-600 mb-2">{selectedVideo.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Music className="w-4 h-4 mr-2" />
                  {selectedVideo.venue}
                  {selectedVideo.duration && (
                    <>
                      <span className="mx-2">•</span>
                      {selectedVideo.duration}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 