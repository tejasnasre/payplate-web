import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "White Label App",
    price: "₹8,999",
    period: "one-time",
    description:
      "Complete restaurant invoice management app with your branding",
    features: [
      "Full source code included",
      "Your brand name & logo",
      "Invoice generation & PDF export",
      "WhatsApp integration",
      "Menu management system",
      "Payment tracking",
      "Basic analytics dashboard",
      "Mobile responsive design",
      "Email OTP authentication",
      "Transaction history",
      "30 days support included",
    ],
    cta: "Get Your App",
    popular: false,
  },
  {
    name: "Custom Solution",
    price: "₹12,999",
    period: "one-time",
    description:
      "Fully customized app with additional features and integrations",
    features: [
      "Everything in White Label",
      "Custom feature development",
      "Advanced analytics & reports",
      "Multi-location support",
      "Custom integrations",
      "Advanced payment gateways",
      "Cloud deployment setup",
      "Database configuration",
      "90 days support included",
      "Training & documentation",
      "Priority development queue",
    ],
    cta: "Get Custom Solution",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your own restaurant invoice management app. Choose between
            ready-to-deploy solution or fully customized development.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-amber-500 shadow-xl scale-105"
                  : "border-gray-200"
              } hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="https://tejasnasre.is-a.dev/">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-amber-500 hover:bg-amber-600 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
