"use client";

import React from "react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-5 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-8">
          We'd love to hear from you. Reach out for questions about classes, workshops, or partnerships.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-gray-700">hello@goodmovestudio.example</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Phone</h2>
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Studio Address</h2>
              <p className="text-gray-700">Good Move Studio, Koramangala, Bengaluru, KA 560095</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Hours</h2>
              <p className="text-gray-700">Mon–Fri: 10:00–19:00, Sat–Sun: 10:00–16:00</p>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00EA9C]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00EA9C]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00EA9C]"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="button"
                className="bg-[#00EA9C] text-[#003000] font-medium rounded-lg px-5 py-2 hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;


