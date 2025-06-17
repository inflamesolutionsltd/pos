
import { Card } from "@/components/ui/card";

const industries = [
  { name: "Super Shops & Retail Stores", icon: "🛍️", description: "Complete retail solutions" },
  { name: "Restaurants & Cafes", icon: "🍽️", description: "Built for food service" },
  { name: "Wholesale Distributors", icon: "📦", description: "Bulk sales management" },
  { name: "Pharmacies & Health Stores", icon: "💊", description: "Healthcare solutions" },
  { name: "Electronics & Mobile Shops", icon: "📱", description: "Tech-savvy features" },
  { name: "Fashion & Apparel Outlets", icon: "👕", description: "Style meets function" },
  { name: "Bookstores & Stationery", icon: "📚", description: "Inventory management" },
  { name: "Home Appliance Stores", icon: "🏠", description: "Large item tracking" },
  { name: "Hardware & Spare Parts", icon: "🔧", description: "Parts and tools" },
];

export const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for every business type
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={industry.name}
              className="p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                {industry.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
