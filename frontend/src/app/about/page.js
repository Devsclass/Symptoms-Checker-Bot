import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* Header (Same as Layout) */}
        <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold mb-4 sm:mb-0 cursor-pointer">PipeLine X</h1>
            </Link>
            <nav>
              <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-200 font-semibold">About</Link></li>
                <li><Link href="/contact" className="hover:text-blue-200">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
  
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16 md:py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About PipeLine X Health Assistant</h1>
            <p className="text-lg md:text-xl mb-8">
              Your AI-powered health companion for symptom analysis and general wellness advice
            </p>
          </div>
        </div>
  
        {/* About Content Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Company Story */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                PipeLine X Health Assistant was created in 2025 to provide accessible, preliminary health guidance using advanced AI technology. We aim to bridge the gap between noticing symptoms and seeking professional medical advice.
              </p>
              <p className="text-gray-700">
                Our chatbot analyzes symptoms while maintaining context through conversation history, powered by the Groq API. We strictly focus on common health concerns and always recommend consulting healthcare professionals for serious conditions.
              </p>
            </div>
  
            {/* How It Works */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">How It Works</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700"><strong>Symptom Analysis:</strong> Describe your symptoms and receive potential explanations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700"><strong>Context-Aware:</strong> Remembers your chat history for more personalized responses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700"><strong>Safe Guidance:</strong> Never suggests antibiotics or serious medical interventions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700"><strong>Professional Advice:</strong> Always recommends consulting doctors for serious concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Team Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Health Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">👨‍⚕️</div>
                <h3 className="text-xl font-bold mb-2">Dr. Robert Chen</h3>
                <p className="text-gray-600">Medical Advisor</p>
              </div>
  
              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">👩‍💻</div>
                <h3 className="text-xl font-bold mb-2">Priya Patel</h3>
                <p className="text-gray-600">AI Health Specialist</p>
              </div>
  
              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">👨‍🔬</div>
                <h3 className="text-xl font-bold mb-2">David Kim</h3>
                <p className="text-gray-600">Data Scientist</p>
              </div>
  
              {/* Team Member 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">👩‍⚕️</div>
                <h3 className="text-xl font-bold mb-2">Dr. Maria Garcia</h3>
                <p className="text-gray-600">Clinical Consultant</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl font-bold text-blue-600">10K+</p>
              <p className="text-gray-700">Daily Consultations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-gray-700">Accuracy Rate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-700">Availability</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-gray-700">Health Conditions Covered</p>
            </div>
          </div>
        </div>
  
        {/* Disclaimer Section */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-16">
          <div className="container mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important Disclaimer:</strong> PipeLine X Health Assistant is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read or received from this service.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Try Our Health Assistant?</h2>
            <Link 
              href="/" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Start Chat Now
            </Link>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-bold mb-4">PipeLine X</h3>
                <p className="text-gray-400">An AI-powered health assistant providing preliminary symptom analysis and general health information.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                    <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                    <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2">
                    <li><Link href="/policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                    <li><Link href="/policy" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                    <li><Link href="/disclaimer" className="text-gray-400 hover:text-white">Medical Disclaimer</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-400">info@pipelinex.com</li>
                    <li className="text-gray-400">+1 (555) 123-4567</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
              <p>© 2025 PipeLine X. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default page