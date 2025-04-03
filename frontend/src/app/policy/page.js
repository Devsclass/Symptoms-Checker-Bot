"use client";

import Link from "next/link";
import { FaShieldAlt, FaUserLock, FaDatabase, FaLink, FaChild, FaBell } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FaShieldAlt className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
          <p className="text-blue-600 font-medium">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <FaUserLock className="text-blue-600 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Your Privacy Matters</h2>
                <p className="text-gray-600 leading-relaxed">
                  At PipeLine X Health, we're committed to protecting your personal information and health data.
                  This policy explains how we collect, use, and safeguard your data when you use our AI Health Assistant.
                </p>
              </div>
            </div>
          </section>

          {/* Policy Sections */}
          <div className="space-y-12">
            {/* Data Collection */}
            <section className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <FaDatabase className="text-blue-600 text-xl mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Data We Collect</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-700 mb-2">Personal Information</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Contact details (if provided)</li>
                    <li>Account information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-700 mb-2">Health Data</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Symptoms you describe</li>
                    <li>Health concerns</li>
                    <li>Chat history with our AI</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">How We Use Your Data</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Provide personalized health insights",
                  "Improve our AI assistant",
                  "Respond to your inquiries",
                  "Enhance service security",
                  "Develop new features",
                  "Analyze service usage"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mt-1 mr-2">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Protection */}
            <section className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Data Protection</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                    <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Encryption</h4>
                    <p className="text-gray-600">All data is encrypted in transit and at rest using industry-standard protocols.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                    <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Access Control</h4>
                    <p className="text-gray-600">Strict access controls limit who can view your personal information.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                    <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Anonymization</h4>
                    <p className="text-gray-600">Health data used for research is anonymized to protect your identity.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Other Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Third Parties */}
              <section className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center mb-3">
                  <FaLink className="text-yellow-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Third Parties</h3>
                </div>
                <p className="text-gray-600">
                  We only share data with trusted partners who help operate our service, and only the minimum information required.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="p-6 bg-pink-50 rounded-lg border-l-4 border-pink-400">
                <div className="flex items-center mb-3">
                  <FaChild className="text-pink-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Children's Privacy</h3>
                </div>
                <p className="text-gray-600">
                  Our service is not intended for users under 18. We don't knowingly collect data from children.
                </p>
              </section>

              {/* Policy Changes */}
              <section className="p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
                <div className="flex items-center mb-3">
                  <FaBell className="text-indigo-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Policy Updates</h3>
                </div>
                <p className="text-gray-600">
                  We'll notify you of significant changes via email or prominent service notices.
                </p>
              </section>

              {/* Contact */}
              <section className="p-6 bg-teal-50 rounded-lg border-l-4 border-teal-400">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-800">Contact Us</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Questions about our privacy practices?
                </p>
                <Link href="/contact" className="text-teal-600 font-medium hover:underline inline-flex items-center">
                  Reach out to our team
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </section>
            </div>
          </div>

          {/* Final Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-600">
              By using PipeLine X Health, you acknowledge you've read and understood this Privacy Policy.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Effective from {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}