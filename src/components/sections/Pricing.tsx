
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    subtitle: "Best for Small Shops",
    price: "$29",
    period: "/month",
    description: "Perfect for single location businesses",
    features: [
      "Single Location",
      "1 POS Terminal", 
      "Basic Reports",
      "Stock & Sales Management",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional Plan",
    subtitle: "For Growing Businesses", 
    price: "$79",
    period: "/month",
    description: "Most popular for expanding businesses",
    features: [
      "Up to 3 Locations",
      "5 Users",
      "Full Feature Access",
      "Email & SMS Notification",
      "Priority Support",
      "Advanced analytics"
    ],
    popular: true
  },
  {
    name: "Enterprise Plan",
    subtitle: "Large-Scale Solution",
    price: "Custom",
    period: "",
    description: "For large scale operations",
    features: [
      "Unlimited Locations",
      "Unlimited Users", 
      "Custom Features",
      "API Access & Integration",
      "Dedicated Support Team",
      "SLA guarantee"
    ],
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Choose the Perfect Plan for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore flexible pricing plans to suit every business stage—from startups to enterprises. Start with a free trial or request a demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/25">
              View Pricing
            </Button>
            <Button variant="outline" className="border-green-300 text-white-600 hover:bg-green-50 hover:text-green-600 transition-colors">
             Book a Free Demo
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`p-8 relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in ${
                plan.popular 
                  ? 'border-2 border-green-500 bg-gradient-to-br from-green-50 via-white to-emerald-50 scale-105 shadow-xl shadow-green-500/20' 
                  : 'hover:border-green-200 bg-white/80 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{plan.subtitle}</p>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-5xl font-bold ${plan.popular ? 'bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 shadow-lg shadow-green-500/25' 
                    : 'bg-gray-900 hover:bg-gray-800 transform hover:scale-105'
                }`}
              >
                {plan.name === "Enterprise Plan" ? "Contact Sales" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
