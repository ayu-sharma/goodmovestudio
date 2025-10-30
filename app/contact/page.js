"use client";

import React from "react";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.019em] sm:tracking-[-0.019em] md:tracking-[-0.021em] lg:tracking-[-0.021em] leading-tight mb-4 md:mb-6">Contact Us</h1>
        <p className="text-gray-300 mb-8">Have questions? Reach out — we’re here to help.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-gray-300">hello@goodmovestudio.example</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Phone</h2>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Address</h2>
              <p className="text-gray-300">Koramangala, Bengaluru, KA 560095</p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input type="text" className="w-full border border-gray-700 bg-black text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00EA9C]" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-700 bg-black text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00EA9C]" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea rows={4} className="w-full border border-gray-700 bg-black text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00EA9C]" placeholder="How can we help?" />
            </div>
            <button type="button" className="bg-[#00EA9C] text-[#003000] font-medium rounded-lg px-5 py-2 hover:opacity-90">Send Message</button>
          </form>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default ContactPage;


