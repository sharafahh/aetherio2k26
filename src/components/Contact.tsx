"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Mail,
  Clock,
  Ticket,
  Send,
  MessageSquare,
} from "lucide-react";
import { contactInfo, inquiryTopics } from "@/data/contact";
import { siteInfo } from "@/data/site";
import { useState, type FormEvent } from "react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  MapPin,
  Mail,
  Clock,
  Ticket,
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: inquiryTopics[0],
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent! Our student liaison committee will get back to you promptly.");
    setFormData({ name: "", email: "", phone: "", topic: inquiryTopics[0], message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            HELP DESK & INQUIRIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect with {siteInfo.name}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have queries about rules, registration pass fees, accommodation, or reporting times? Our
            coordinator desks are available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-700 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Symposium Helpdesk</h3>
              <p className="text-gray-400 text-sm mb-6">
                Reach out directly to our student coordinators or faculty convenors for immediate event
                guidance.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = iconMap[item.icon] || Mail;
                  return (
                    <div key={item.name} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.name}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium hover:text-purple-300 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
               </div>
               <div className="pt-4 border-t border-gray-700">
                 <a
                   href={siteInfo.instagramUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                 >
                   <span className="text-sm font-medium">@{siteInfo.instagram}</span>
                 </a>
               </div>
             </div>
           </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-gray-900/50 border border-gray-700"
          >
            <h3 className="text-xl font-bold text-white mb-6">Send an Inquiry</h3>
            <p className="text-gray-400 text-sm mb-6">
              Leave a message below and our student liaison committee will get back to you promptly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Topic / Event</label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                >
                  {inquiryTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30"
              >
                <Send className="w-4 h-4" />
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
