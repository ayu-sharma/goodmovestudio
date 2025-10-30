"use client";

import React from "react";

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-5 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: October 30, 2025</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="text-gray-700">
              We may collect personal information such as your name, email address, contact number, and payment details when you purchase tickets, subscriptions, or contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
            <p className="text-gray-700">
              Your information is used to provide and improve our services, process transactions, send confirmations, and communicate updates about events and classes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
            <p className="text-gray-700">
              We do not sell your personal data. We may share limited information with trusted service providers for payment processing, analytics, and communication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
            <p className="text-gray-700">
              We retain your information only as long as necessary for the purposes outlined in this policy or as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
            <p className="text-gray-700">
              You may request access, correction, or deletion of your personal data. To exercise your rights, contact privacy@goodmovestudio.example.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Security</h2>
            <p className="text-gray-700">
              We implement reasonable technical and organizational measures to protect your data. However, no method of transmission over the Internet is 100% secure.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;


