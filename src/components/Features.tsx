
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  MessageSquare, 
  CreditCard, 
  BarChart3, 
  Menu, 
  Building2, 
  Shield, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart Invoice Creation",
    description: "Create professional invoices with customer details, menu items, discounts, and taxes. Generate PDF invoices instantly.",
    color: "text-blue-500"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "Share invoices directly via WhatsApp or other platforms. Keep your customers connected and payments flowing.",
    color: "text-green-500"
  },
  {
    icon: CreditCard,
    title: "Payment Tracking",
    description: "Track payment status, view transaction history, and never lose track of what's owed to your restaurant.",
    color: "text-purple-500"
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description: "Get insights on sales trends, top-selling items, revenue growth, and average order value with beautiful charts.",
    color: "text-amber-500"
  },
  {
    icon: Menu,
    title: "Menu Management",
    description: "Easily add, edit, and categorize menu items. Upload images and keep your digital menu always up to date.",
    color: "text-red-500"
  },
  {
    icon: Building2,
    title: "Business Profile",
    description: "Set up your restaurant details, payment information, and upload your logo for professional branding.",
    color: "text-indigo-500"
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "Email OTP-based login ensures your business data is secure with enterprise-level protection.",
    color: "text-gray-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Access PayPlate from any device. Fully responsive design that works perfectly on phones, tablets, and desktops.",
    color: "text-pink-500"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Restaurant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PayPlate provides all the tools you need to manage invoices, track payments, 
            analyze performance, and grow your restaurant business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-gray-200">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 group-hover:bg-amber-50 transition-colors mb-4 mx-auto`}>
                    <IconComponent className={`h-6 w-6 ${feature.color} group-hover:text-amber-500 transition-colors`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-amber-100">Invoices Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-amber-100">Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">₹50L+</div>
              <div className="text-amber-100">Revenue Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-amber-100">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
