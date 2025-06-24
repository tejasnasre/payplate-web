import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">PayPlate</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Streamline your restaurant's invoice management with PayPlate.
              Professional invoicing, payment tracking, and analytics in one
              platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">tejasnasre.dev@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-gray-400">
                  Nagpur, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 PayPlate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-amber-500 text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-amber-500 text-sm transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
