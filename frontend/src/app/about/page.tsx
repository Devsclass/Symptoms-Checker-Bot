import React from 'react';
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Glass Header */}
      <header className="bg-gray-900/80 backdrop-blur-md text-white p-4 sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              PipeLine X
            </span>
          </Link>
          <nav>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <li>
                <Link href="/" className="hover:text-blue-300 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-400 font-medium transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/Login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Grid Background */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text">
              About PipeLine X Health
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your AI-powered health companion for symptom analysis and wellness guidance
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Company Story */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              PipeLine X Health Assistant was created in 2025 to provide accessible, preliminary health guidance using advanced AI technology. We aim to bridge the gap between noticing symptoms and seeking professional medical advice.
            </p>
            <p className="text-gray-300">
              Our chatbot analyzes symptoms while maintaining context through conversation history, powered by the Groq API. We strictly focus on common health concerns and always recommend consulting healthcare professionals for serious conditions.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">How It Works</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300"><strong>Symptom Analysis:</strong> Describe your symptoms and receive potential explanations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300"><strong>Context-Aware:</strong> Remembers your chat history for more personalized responses</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300"><strong>Safe Guidance:</strong> Never suggests antibiotics or serious medical interventions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span className="text-gray-300"><strong>Professional Advice:</strong> Always recommends consulting doctors for serious concerns</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Our Health Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member Cards */}
            {[
              { emoji: "👨‍⚕️", name: "Dr. Robert Chen", title: "Medical Advisor" },
              { emoji: "👩‍💻", name: "Priya Patel", title: "AI Health Specialist" },
              { emoji: "👨‍🔬", name: "David Kim", title: "Data Scientist" },
              { emoji: "👩‍⚕️", name: "Dr. Maria Garcia", title: "Clinical Consultant" }
            ].map((member, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 text-4xl border border-blue-400/30">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "10K+", label: "Daily Consultations" },
            { value: "98%", label: "Accuracy Rate" },
            { value: "24/7", label: "Availability" },
            { value: "50+", label: "Health Conditions Covered" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-16 max-w-4xl mx-auto rounded-r-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-1">
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-white mb-2">Important Disclaimer</h3>
            <p className="text-blue-300">
              PipeLine X Health Assistant is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 py-16 border-t border-b border-gray-700">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to experience AI-powered health guidance?
          </h2>
          <Link 
            href="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-blue-600/30"
          >
            Start Health Chat Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">PipeLine X</h3>
              <p className="text-gray-400 max-w-md">
                Advanced AI health assistant providing preliminary symptom analysis.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition">Home</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/policy" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</Link></li>
                  <li><Link href="/policy" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</Link></li>
                  <li><Link href="/policy" className="text-gray-400 hover:text-blue-400 transition">Medical Disclaimer</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400 hover:text-blue-400 transition cursor-pointer">info@pipelinex.com</li>
                  <li className="text-gray-400">+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} PipeLine X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;