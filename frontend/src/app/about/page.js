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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About PipeLine X</h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering businesses with modern, scalable, and secure web solutions.
            </p>
          </div>
        </div>
  
        {/* About Content Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Company Story */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2025, PipeLine X began as a small team of developers passionate about bridging the gap between cutting-edge technology and real-world business needs. Today, we serve clients globally with our innovative web solutions.
              </p>
              <p className="text-gray-700">
                Our journey has been driven by a commitment to excellence, user-centric design, and the belief that technology should empower, not complicate.
              </p>
            </div>
  
            {/* Mission & Values */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">Mission & Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700"><strong>Innovation:</strong> Push boundaries with scalable, future-proof solutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700"><strong>Integrity:</strong> Transparent, ethical, and accountable in all we do.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700"><strong>Impact:</strong> Deliver measurable results that drive growth.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Team Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">👨‍💻</div>
                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
  
              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">👩‍🎨</div>
                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                <p className="text-gray-600">Lead Designer</p>
              </div>
  
              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">👨‍🔧</div>
                <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
                <p className="text-gray-600">Senior Developer</p>
              </div>
  
              {/* Team Member 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">👩‍💼</div>
                <h3 className="text-xl font-bold mb-2">Sarah Lee</h3>
                <p className="text-gray-600">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-gray-700">Clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl font-bold text-blue-600">100+</p>
              <p className="text-gray-700">Projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-700">Support</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-3xl font-bold text-blue-600">10+</p>
              <p className="text-gray-700">Awards</p>
            </div>
          </div>
        </div>
  
        {/* CTA Section (Same as Layout) */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Get in Touch
            </Link>
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

export default page
