export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">PipeLine X</h1>
          <nav>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <li><a href="#" className="hover:text-blue-200">Home</a></li>
              <li><a href="#" className="hover:text-blue-200">About</a></li>
              <li><a href="#" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to PipeLine X</h1>
          <p className="text-lg md:text-xl mb-8">
            Your gateway to modern health check web application.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* DeepSeek Section */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Hi, I'm PipeLine X</h2>
            <p className="text-gray-700 mb-6">How can I help you today?</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Message PipeLine X"
                className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                PipeLine (R1) Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
            <p className="text-gray-700">
              Optimized for speed and efficiency, ensuring a seamless user experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
            <p className="text-gray-700">
              Works flawlessly on all devices, from desktops to mobile phones.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
            <p className="text-gray-700">
              Built with security in mind to protect your data and privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-8">
            Join thousands of users who trust PipeLine X for their health check ups.
          </p>
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 PipeLine X. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}