import React from 'react'
import Link from "next/link";

const contact = () => {
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
              <li><Link href="/about" className="hover:text-blue-200">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-200 font-semibold">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl mb-8">
            Have questions? We're here to help.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">📍</div>
                  <p className="text-gray-700">Univeristy of Bolton, Deane Road Bolton, BL3 5AB</p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">📞</div>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">✉️</div>
                  <p className="text-gray-700">info@pipelinex.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-gray-700">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-gray-700">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-gray-700">Closed</span>
                </li>
              </ul>
            </div>

{/* Google Map Integration */}
<div className="rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.357288373741!2d-2.434390823025117!3d53.57676107234394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b00f1a2e0a6a9%3A0x6d8a3f6b4e4e4e4e!2sUniversity%20of%20Bolton!5e0!3m2!1sen!2suk!4v1712345678901!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University of Bolton Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      
      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help with urgent matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="#" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Call Support
            </Link>
            <Link 
              href="#" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Live Chat
            </Link>
          </div>
        </div>
      </div>

      {/* Footer (Same as Layout) */}
      <footer className="bg-gray-800 text-white py-12">
        {/* ... (Copy footer from your Layout component) ... */}
      </footer>
    </div>


    </div>
  )
}

export default contact
