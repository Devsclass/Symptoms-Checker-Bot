import React from 'react';
import Link from "next/link";
import Head from "next/head";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Contact Us | PipeLine X Health</title>
        <meta name="description" content="Get in touch with our health assistant team" />
      </Head>

      {/* Sticky Glass Header */}
      <header className="bg-gray-900/80 backdrop-blur-md text-white p-4 sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold mb-4 sm:mb-0 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              PipeLine X Health
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
                <Link href="/about" className="hover:text-blue-300 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-400 font-medium transition duration-300">
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

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Grid Background */}
        <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 md:py-28">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10"></div>
          </div>
          <div className="container mx-auto text-center px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text">
                Contact Our Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Reach out with questions, feedback, or partnership opportunities
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 max-w-6xl mx-auto">
            {/* Contact Form with Glass Effect */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 w-full shadow-lg hover:shadow-blue-600/30"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-6">
              {/* Info Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-400">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: '📍', text: 'University of Bolton, Deane Road Bolton, BL3 5AB' },
                    { icon: '📞', text: '+1 (555) 123-4567' },
                    { icon: '✉️', text: 'info@pipelinex.com' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 text-xl">{item.icon}</span>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-400">Business Hours</h3>
                <ul className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' }
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-300">{item.day}</span>
                      <span className="text-gray-300 font-medium">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden h-64 border border-gray-700 hover:border-blue-400 transition-all duration-300">
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
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 py-16 border-t border-b border-gray-700">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-blue-300 mb-8 text-lg max-w-2xl mx-auto">
              Our support team is available 24/7 to help with urgent matters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="tel:+15551234567" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-blue-600/30"
              >
                Call Support
              </Link>
              <Link 
                href="#" 
                className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-300"
              >
                Live Chat
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">PipeLine X Health</h3>
              <p className="text-gray-400">
                Advanced AI health assistant providing preliminary symptom analysis.
              </p>
            </div>
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
                <li><Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} PipeLine X Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;