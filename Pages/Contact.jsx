import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Booking } from "../entities/Booking";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event_type: "",
    event_date: "",
    event_time: "",
    location: "",
    duration: "",
    budget: "",
    special_requests: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const statusRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await Booking.create(formData);
      setIsSubmitted(true);
      setTimeout(() => {
        if (statusRef.current) statusRef.current.focus();
      }, 50);
      setFormData({
        name: "",
        email: "",
        phone: "",
        event_type: "",
        event_date: "",
        event_time: "",
        location: "",
        duration: "",
        budget: "",
        special_requests: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      // announce error via aria-live region
      const el = document.getElementById('form-feedback');
      if (el) el.textContent = 'There was an error sending your request. Please try again later.';
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">Your booking request has been received. I'll get back to you within 24 hours to discuss your event and provide a personalized quote.</p>
          <div>
            <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white font-semibold px-8 py-3">Submit Another Request</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Something <span className="block bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">Beautiful Together</span></h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">Ready to add the elegant sound of viola to your special event? Let's discuss your vision and create an unforgettable musical experience.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">I'd love to hear about your upcoming event and discuss how beautiful viola music can enhance your special occasion. Feel free to reach out with any questions or to schedule a consultation.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full flex items-center justify-center" aria-hidden="true"><Phone className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full flex items-center justify-center" aria-hidden="true"><Mail className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">ana@anakastro.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full flex items-center justify-center" aria-hidden="true"><MapPin className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">New York City & Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full flex items-center justify-center" aria-hidden="true"><Clock className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick FAQ</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-800">How far in advance should I book?</p>
                    <p className="text-gray-600">I recommend booking 3-6 months in advance for weddings, and 4-8 weeks for other events.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Do you travel for events?</p>
                    <p className="text-gray-600">Yes! I regularly perform throughout the tri-state area and am available for destination events.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">What's included in your service?</p>
                    <p className="text-gray-600">Professional performance, consultation, sound equipment, and coordination with your event team.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent">Request a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="form-feedback">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Your full name" required aria-required="true" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="your@email.com" required aria-required="true" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="Optional phone number" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="event_type">Event Type</Label>
                        <Select onValueChange={(v) => handleInputChange('event_type', v)}>
                          <SelectTrigger id="event_type" className="w-full" aria-haspopup="listbox"><SelectValue placeholder="Select an event type" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate</SelectItem>
                            <SelectItem value="private_party">Private Party</SelectItem>
                            <SelectItem value="concert">Concert</SelectItem>
                            <SelectItem value="recording">Recording</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="special_requests">Special Requests</Label>
                      <Textarea id="special_requests" value={formData.special_requests} onChange={(e) => handleInputChange('special_requests', e.target.value)} placeholder="Any special songs, equipment requests, or accessibility notes" rows={4} />
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="Additional details about your event" rows={4} />
                    </div>

                    <div className="flex items-center justify-between">
                      <Button type="submit" className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white font-semibold px-6 py-3" aria-disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send Request'}</Button>
                      <div className="text-sm text-gray-500">We typically reply within 24 hours</div>
                    </div>

                    <div id="form-feedback" role="status" aria-live="polite" className="mt-2 text-sm text-gray-700" tabIndex={-1} ref={statusRef} />
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 