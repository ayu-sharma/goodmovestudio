"use client";

import React from "react";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const TermsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white font-sans">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.019em] sm:tracking-[-0.019em] md:tracking-[-0.021em] lg:tracking-[-0.021em] leading-tight mb-4 md:mb-6">Terms & Conditions</h1>
        <p className="text-gray-400 mb-8">Last updated: October 30, 2025</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-300">By using our site and services, you agree to these terms.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Payments & Refunds</h2>
            <p className="text-gray-300">All purchases are final unless specified otherwise for an event.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Health & Safety</h2>
            <p className="text-gray-300">Participate at your own risk. Consult a physician if needed.</p>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;


