
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Shield, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pt-20 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
            New: PDF Invoice Generation & WhatsApp Sharing
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Restaurant Invoice
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              {" "}Management
            </span>
            <br />
            Made Simple
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
            Get your own branded restaurant invoice management app. Complete white label solution 
            with PDF generation, WhatsApp sharing, analytics, and more.
          </p>

          {/* White Label Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-4xl mx-auto border border-amber-200 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">White Label Solution</h3>
            </div>
            <p className="text-gray-600 mb-4">
              ✅ A fully developed product made by one company, that another company rebrands and sells as their own.
            </p>
            
            {/* Legal Note */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">🔒 Legal Note</h4>
                  <p className="text-sm text-amber-700 mb-2">You should always include a license agreement:</p>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>✅ Allow only branded usage</li>
                    <li>❌ No reselling of source code (unless allowed)</li>
                    <li>✅ Limit to specific customers or markets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Get Your App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg hover:border-amber-400 transition-all duration-200">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* App Mockup Images in Column Layout */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Restaurant Profile Screen */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-6 flex items-center px-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <img 
                      src="/lovable-uploads/f609a4bf-ea14-4fbd-8828-4bf25c78c727.png" 
                      alt="Restaurant Profile Management"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 font-medium">Restaurant Profile</p>
              </div>

              {/* Invoice Creation Screen */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-6 flex items-center px-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <img 
                      src="/lovable-uploads/7069521a-5971-4850-ad6a-9029e8de03b3.png" 
                      alt="Invoice Creation Interface"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 font-medium">Invoice Creation</p>
              </div>

              {/* WhatsApp PDF Sharing */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-6 flex items-center px-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <img 
                      src="/lovable-uploads/0d99c060-2dad-4ed6-a2d5-22a3e276455c.png" 
                      alt="WhatsApp PDF Sharing"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 font-medium">WhatsApp & PDF Sharing</p>
              </div>
            </div>

            {/* Second Row of Mockups */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Menu Management */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-6 flex items-center px-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <img 
                      src="/lovable-uploads/c0532286-8d5e-4d69-9c1e-75b707b2bfaa.png" 
                      alt="Menu Management System"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 font-medium">Menu Management</p>
              </div>

              {/* Transaction History */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-6 flex items-center px-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <img 
                      src="/lovable-uploads/18e55846-81b0-4661-8e0e-4c928e34f2f5.png" 
                      alt="Transaction History & Invoice Tracking"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 font-medium">Transaction History</p>
              </div>

              {/* Analytics Dashboard */}
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-6 flex items-center px-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <img 
                      src="/lovable-uploads/48bdd389-efda-47df-869e-8ad0526bbeb3.png" 
                      alt="Business Analytics Dashboard"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 font-medium">Analytics Dashboard</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
              ✓ Your Brand
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
              🚀 Ready to Deploy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
