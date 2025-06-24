
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    period: "Forever Free",
    description: "Perfect for small restaurants just getting started",
    features: [
      "Up to 50 invoices per month",
      "Basic menu management",
      "Email OTP authentication",
      "PDF invoice generation",
      "WhatsApp sharing",
      "Basic analytics"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: "₹999",
    period: "per month",
    description: "Ideal for growing restaurants with more customers",
    features: [
      "Unlimited invoices",
      "Advanced menu management",
      "Payment tracking",
      "Transaction history",
      "Advanced analytics",
      "Custom branding",
      "Priority support",
      "API access"
    ],
    cta: "Start 14-day trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "₹2,999",
    period: "per month",
    description: "For restaurant chains and large establishments",
    features: [
      "Everything in Professional",
      "Multi-location support",
      "Advanced reporting",
      "Custom integrations",
      "Dedicated account manager",
      "White-label solution",
      "24/7 phone support",
      "Training & onboarding"
    ],
    cta: "Contact Sales",
    popular: false
  }
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
            Choose the perfect plan for your restaurant. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'border-amber-500 shadow-xl scale-105' 
                  : 'border-gray-200'
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
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
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
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600">No setup fees, no hidden charges. Pay only for what you use with transparent pricing.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards, debit cards, UPI, and net banking.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer customer support?</h4>
              <p className="text-gray-600">Yes, we provide email support for all plans and phone support for Enterprise customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
