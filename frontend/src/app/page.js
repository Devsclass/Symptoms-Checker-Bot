import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0 cursor-pointer">PipeLine X Health</Link>
          <nav>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <li><Link href="#" className="hover:text-blue-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-200">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-200">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Your AI Health Assistant</h1>
          <p className="text-lg md:text-xl mb-8">
            Get preliminary health guidance based on your symptoms, powered by advanced AI
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="#chat"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Start Health Check
            </Link>
            <Link
              href="/about"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Chatbot Section */}
      <div id="chat" className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Health Symptom Checker</h2>
            <p className="text-gray-700 mb-6 text-center">
              Describe your symptoms and our AI assistant will provide helpful information
            </p>
            
            {/* Chat interface */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg min-h-40">
              {/* This would be where chat messages appear */}
              <p className="text-gray-500 italic">Start by describing how you're feeling...</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Example: headache and fever for 2 days"
                className="w-full sm:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Analyze Symptoms
              </button>
            </div>
            
            <div className="mt-4 text-sm text-gray-500 text-center">
              <p>Remember: This is not a substitute for professional medical advice</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">How Our Health Assistant Helps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">🤒</div>
            <h3 className="text-xl font-bold mb-2">Symptom Analysis</h3>
            <p className="text-gray-700">
              Describe your symptoms and receive potential explanations based on medical knowledge
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Context-Aware</h3>
            <p className="text-gray-700">
              Remembers your conversation history for more personalized responses
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">⚕️</div>
            <h3 className="text-xl font-bold mb-2">Safe Guidance</h3>
            <p className="text-gray-700">
              Never suggests medications - always recommends professional consultation for serious concerns
            </p>
          </div>
        </div>
      </div>

      {/* Safety Disclaimer */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Important:</strong> PipeLine X Health Assistant provides general health information only. It is not a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Check Your Symptoms?</h2>
          <p className="text-gray-700 mb-8">
            Get immediate, AI-powered health guidance while always being directed to professional care when needed.
          </p>
          <Link
            href="#chat"
            className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Start Health Chat Now
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">About PipeLine X Health</h3>
              <p className="text-gray-400">
                An AI-powered health assistant providing preliminary symptom analysis and general health information.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition duration-300">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition duration-300">About</Link></li>
                <li><Link href="/disclaimer" className="text-gray-400 hover:text-blue-400 transition duration-300">Medical Disclaimer</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition duration-300">Contact</Link></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-xl font-bold mb-4">Health Tips Newsletter</h3>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 PipeLine X Health. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}