import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NewDigitalMediaPortfolio() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">New Digital Media</h1>
        <p className="text-xl mb-6">Empowering Brands Through Digital Excellence</p>
        <Button className="text-lg bg-white text-black hover:bg-gray-200">Let’s Work Together</Button>
      </motion.section>

      {/* About Us */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="py-16 px-6 text-center bg-white"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          New Digital Media is a full-service digital marketing agency helping brands grow their online presence with impactful strategies, engaging content, and performance-driven campaigns. From startups to established businesses, we build digital brands that matter.
        </p>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="py-16 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-50 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-purple-700">Why Choose Us</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Creative Excellence", desc: "We craft visually stunning and engaging content tailored to your audience." },
            { title: "Results-Driven", desc: "Our strategies are built around your goals – more traffic, engagement, and conversions." },
            { title: "Dedicated Support", desc: "We work closely with clients, keeping communication clear and consistent." },
            { title: "Data-Backed Decisions", desc: "All actions are backed by insights and analytics to ensure maximum impact." },
            { title: "Full-Service Agency", desc: "From strategy to execution – everything under one creative roof." },
            { title: "Affordable Packages", desc: "Top-tier services without breaking the bank – perfect for startups and SMEs." }
          ].map(({ title, desc }) => (
            <motion.div whileHover={{ scale: 1.05 }} key={title}>
              <Card className="rounded-2xl shadow-md hover:shadow-xl bg-white p-4 transition">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="py-16 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-purple-700">Services We Provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Social Media Management",
            "Content Creation",
            "Ad Campaign Management",
            "Influencer Marketing",
            "Brand Strategy",
            "Analytics & Reporting"
          ].map((service) => (
            <motion.div whileHover={{ scale: 1.05 }} key={service}>
              <Card className="rounded-2xl shadow-lg bg-white hover:bg-blue-50 transition">
                <CardContent className="p-6 text-lg font-medium text-blue-900">{service}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Work */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="py-16 px-6 text-center bg-white"
      >
        <h2 className="text-3xl font-bold mb-8 text-green-700">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[ 
            { name: "Shifu Media", desc: "Web Development Agency", services: "Website design, brand identity, SEO setup" },
            { name: "Ananya Naturals", desc: "Dairy Products Brand", services: "Social media content, influencer outreach, ad campaigns" },
            { name: "Cafe Delight", desc: "Local Food & Beverage Cafe", services: "Instagram management, photoshoots, seasonal campaigns" },
            { name: "FitGear India", desc: "Fitness Apparel & Gear", services: "Full rebranding, product shoot direction, paid ads" }
          ].map(({ name, desc, services }) => (
            <motion.div whileHover={{ scale: 1.05 }} key={name}>
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
                  <p className="mb-2 italic text-gray-600">{desc}</p>
                  <p className="text-sm text-gray-700">Services: {services}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="py-16 px-6 bg-gradient-to-b from-white via-gray-50 to-white text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-pink-700">Testimonials</h2>
        <div className="max-w-4xl mx-auto">
          {[ 
            {
              quote: "New Digital Media helped us scale our content and social presence to a whole new level. Highly recommended!",
              client: "Client, Shifu Media"
            },
            {
              quote: "Creative, professional, and always on time. Loved working with their team!",
              client: "Client, Ananya Naturals"
            }
          ].map(({ quote, client }, idx) => (
            <motion.div whileHover={{ scale: 1.02 }} key={idx}>
              <Card className="rounded-2xl shadow-md mb-6 bg-white hover:bg-pink-50 transition">
                <CardContent className="p-6 text-lg text-gray-700">
                  “{quote}”<br />
                  <span className="block mt-4 font-semibold text-gray-900">— {client}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="py-16 px-6 text-center bg-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Contact</h2>
        <p className="text-lg mb-4 text-gray-700">We’d love to hear from you! Reach out to collaborate or ask any questions.</p>
        <div className="flex flex-col items-center space-y-2">
          <p>Email: <a href="mailto:jainsanket7035@gmail.com" className="text-blue-600 underline">jainsanket7035@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/9407295549" className="text-blue-600 underline">+91-9407295549</a></p>
          <p>Instagram: <a href="https://instagram.com/new.digitalmedia" className="text-blue-600 underline">@new.digitalmedia</a></p>
        </div>
      </motion.section>
    </div>
  );
}
