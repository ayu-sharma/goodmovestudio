"use client";

import React from "react";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const PrivacyPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white font-sans">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.019em] sm:tracking-[-0.019em] md:tracking-[-0.021em] lg:tracking-[-0.021em] leading-tight mb-4 md:mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: October 30, 2025</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Data We Collect</h2>
            <p className="text-gray-300">Name, email, phone, and payment info for bookings.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Data</h2>
            <p className="text-gray-300">To process bookings, send confirmations, and improve services.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Your Rights</h2>
            <p className="text-gray-300">Request access, correction, or deletion by contacting us.</p>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;


