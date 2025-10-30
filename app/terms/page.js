"use client";

import React from "react";

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-5 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: October 30, 2025</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing or using our website, services, or attending any classes/workshops, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
            <p className="text-gray-700">
              You must be at least 16 years old to participate in our public classes and 18 years old to purchase tickets or subscriptions. Minors must be accompanied by a guardian where applicable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Payments and Refunds</h2>
            <p className="text-gray-700">
              All payments are final unless otherwise stated for a specific event. Refunds or reschedules may be offered at our discretion in cases such as event cancellation or operational issues.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Health and Safety</h2>
            <p className="text-gray-700">
              Participation in physical activities involves inherent risks. By attending, you confirm that you are physically fit and agree not to hold the studio liable for injuries arising from participation, except where prohibited by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Changes to Services</h2>
            <p className="text-gray-700">
              Class schedules, instructors, locations, and pricing are subject to change. We will make reasonable efforts to notify participants of significant changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this site, including text, graphics, logos, and media, is the property of Good Move Studio or its content providers and is protected by applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
            <p className="text-gray-700">
              For questions about these Terms, please contact us at support@goodmovestudio.example.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;


