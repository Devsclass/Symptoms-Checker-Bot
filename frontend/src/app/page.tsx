"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface DivBoxProps {
  children: ReactNode;
  className?: string;
}

interface OpBoxProps {
  heading: ReactNode;
  body: ReactNode;
  link: string;
  external?: boolean;
  className?: string;
}

const DivBox = ({ children, className = "" }: DivBoxProps) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      {children}
    </div>
  );
};

const OpBox = ({
  heading,
  body,
  link,
  external = false,
  className = "",
}: OpBoxProps) => {
  return (
    <Link
      href={link}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        bg-white/10 backdrop-blur-lg rounded-xl border border-gray-200/20
        w-full h-[200px] sm:h-[220px] 
        flex flex-col justify-between overflow-hidden 
        cursor-pointer transition-all duration-300
        hover:border-blue-400 group ${className}
      `}
    >
      <div className="h-[40%] flex items-center justify-center md:justify-start px-6">
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
          {heading}
        </h3>
      </div>
      <div className="h-[60%] flex items-center justify-center md:justify-start px-6 py-4">
        <p className="text-gray-300 text-sm md:text-base">{body}</p>
      </div>
    </Link>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className={`${isScrolled ? 'bg-gray-900' : 'bg-gray-900/80'} backdrop-blur-md text-white p-4 sticky top-0 z-50 border-b border-gray-800 transition-colors duration-300`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full flex justify-between items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold mb-4 sm:mb-0 cursor-pointer hover:opacity-80 transition-opacity duration-300 flex items-center"
            >
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                PipeLine X Health
              </span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <li>
                <Link href="#" className="hover:text-blue-300 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition-all duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-all duration-300">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/Login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-300">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="block py-2 hover:text-blue-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block py-2 hover:text-blue-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block py-2 hover:text-blue-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/Login" 
                  className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Rest of your existing code remains the same */}
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-transparent bg-clip-text">
              AI Health Assistant
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your intelligent health companion powered by cutting-edge AI technology
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/Login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Start Health Check
            </Link>
            <Link
              href="https://github.com/Devsclass/SymptomChecker"
              className="border border-gray-600 hover:border-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:text-blue-300"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16 md:py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
            <div className="text-blue-400 text-4xl mb-6">🔍</div>
            <h3 className="text-xl font-bold mb-4">Symptom Analysis</h3>
            <p className="text-gray-400">
              Describe your symptoms and receive potential explanations based on the latest medical knowledge.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
            <div className="text-blue-400 text-4xl mb-6">🧠</div>
            <h3 className="text-xl font-bold mb-4">Context-Aware</h3>
            <p className="text-gray-400">
              Remembers your conversation history for more personalized and accurate responses.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300">
            <div className="text-blue-400 text-4xl mb-6">⚕️</div>
            <h3 className="text-xl font-bold mb-4">Safe Guidance</h3>
            <p className="text-gray-400">
              Always recommends professional consultation when needed, never suggests medications.
            </p>
          </div>
        </div>
      </div>

      {/* Safety Disclaimer */}
      <div className="bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-16 max-w-4xl mx-auto rounded-r-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-1">
            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-white mb-2">Important Disclaimer</h3>
            <p className="text-blue-200">
              PipeLine X Health Assistant provides general health information only. It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 py-16 md:py-20 border-t border-b border-gray-700">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to experience AI-powered health guidance?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Get immediate, intelligent health insights while always being directed to professional care when needed.
          </p>
          <Link
            href="/Login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 inline-block"
          >
            Start Your Health Chat
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">PipeLine X Health</h3>
              <p className="text-gray-400">
                Advanced AI health assistant providing preliminary symptom analysis and general health information.
              </p>
            </div>

            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-blue-300 transition">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-blue-300 transition">About</Link></li>
                <li><Link href="/policy" className="text-gray-400 hover:text-blue-300 transition">Medical Disclaimer</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-blue-300 transition">Contact</Link></li>
              </ul>
            </div>

            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold w-full transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} PipeLine X Health. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}