import {
  Shield,
  CheckCircle,
  Star,
  Package,
  Award,
  Code,
  Coffee,
} from "lucide-react";

export function WhiteLabel() {
  return (
    <section
      id="white-label"
      className="py-24 bg-gradient-to-br from-white via-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-amber-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-60 blur-3xl"></div>

        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block animate-pulse">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium px-6 py-2 rounded-full shadow-md">
              White Label Solution
            </span>
          </div>
          <h2 className="mt-8 text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-amber-800 to-orange-700 bg-clip-text text-transparent mb-6">
            Launch Your Branded Restaurant App
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A complete solution that you can customize with your own branding
            and sell to your customers
          </p>

          <div className="absolute -z-10 w-full h-40 bg-amber-100 opacity-20 blur-3xl left-0 top-10"></div>
        </div>

        {/* White Label Info Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white backdrop-blur-sm bg-opacity-90 rounded-3xl p-10 shadow-2xl border border-amber-100 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
              What is a White Label Solution?
            </h3>

            <p className="text-gray-700 mb-10 text-center text-lg leading-relaxed">
              A fully developed product made by one company (us), that another
              company (you) rebrands and sells as their own. You focus on
              marketing and sales while we handle the technical aspects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200 shadow-md transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-amber-500 bg-opacity-20 rounded-lg mr-3">
                    <Package className="h-6 w-6 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-xl text-amber-800">
                    What You Get
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Complete source code</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Your brand name & logo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Customization options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Technical documentation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
                    <span>Deployment assistance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border border-blue-200 shadow-md transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500 bg-opacity-20 rounded-lg mr-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-xl text-blue-800">
                    Legal Considerations
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                    <span>License agreement included</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                    <span>Commercial usage rights</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                    <span>Reselling permissions</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                    <span>Ownership transfer</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                    <span>Confidentiality terms</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Note */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-inner">
              <div className="flex items-start">
                <div className="p-3 bg-gray-200 rounded-lg mr-4 mt-0.5">
                  <Shield className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-4">
                    Important Note
                  </h4>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our white label agreement provides you with the flexibility
                    to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Code className="h-5 w-5 mr-2 text-green-600" />
                        <h5 className="font-semibold text-lg text-gray-900">
                          Included Rights
                        </h5>
                      </div>
                      <ul className="text-gray-700 space-y-3">
                        <li className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-amber-500 flex-shrink-0" />
                          <span>Use your own branding</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-amber-500 flex-shrink-0" />
                          <span>Deploy to multiple clients</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-amber-500 flex-shrink-0" />
                          <span>Make minor customizations</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Coffee className="h-5 w-5 mr-2 text-red-600" />
                        <h5 className="font-semibold text-lg text-gray-900">
                          Restrictions
                        </h5>
                      </div>
                      <ul className="text-gray-700 space-y-3">
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-red-500 flex-shrink-0" />
                          <span>No reselling of source code</span>
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-red-500 flex-shrink-0" />
                          <span>No competing product creation</span>
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-red-500 flex-shrink-0" />
                          <span>No removal of attribution</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <a href="https://wa.me/qr/ANLJVTM5LUIOC1">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                  Get Started with White Label
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
