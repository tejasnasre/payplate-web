
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-amber-50 via-white to-orange-50 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/3e862d8a-1222-4c3f-b363-ab8584842a40.png" 
                  alt="PayPlate Logo" 
                  className="w-8 h-8 transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-amber-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                PayPlate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-amber-50">
                Home
              </Link>
              <a href="#features" className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-amber-50">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-amber-50">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-amber-50">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-amber-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-white to-amber-50 border-t border-amber-100 rounded-b-lg shadow-lg">
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="#features"
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white w-full mt-4 shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
