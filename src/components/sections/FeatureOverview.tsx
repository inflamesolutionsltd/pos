
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: "Business Management",
    description: "Manage multiple businesses, locations, warehouses, financial year settings, profit margins, and tax registrations—all from a single dashboard.",
    details: "Complete business oversight with real-time dashboards, performance metrics, and operational insights. Control every aspect of your business operations from one central location."
  },
  {
    title: "Product Management", 
    description: "Add single or variable products, manage stock, categories, expiry dates, brands, SKUs, barcodes, and bulk import CSVs easily.",
    details: "Comprehensive product catalog management with advanced categorization, inventory tracking, and bulk operations for efficient product management."
  },
  {
    title: "Purchases",
    description: "Track purchases, returns, payment statuses, taxes, and upload documents—all from one place.",
    details: "Smart purchasing workflow with automated reordering, supplier management, and comprehensive purchase tracking with document management."
  },
  {
    title: "Sell & POS Terminal",
    description: "Experience fast, fully-Ajax POS—no reloads, quick checkout, keyboard shortcuts, and multiple payment methods.",
    details: "Lightning-fast point-of-sale system with intuitive interface, keyboard shortcuts, multiple payment options, and real-time transaction processing."
  },
  {
    title: "Suppliers & Customers",
    description: "Keep detailed contact profiles, transaction history, payment terms, and alerts for suppliers and customers.",
    details: "Comprehensive relationship management with detailed profiles, transaction history, payment tracking, and automated communication tools."
  },
  {
    title: "Staff Management",
    description: "Role-based access control, commission agents, predefined roles like Admin & Cashier, and full salary and expense tracking.",
    details: "Complete workforce management with role-based permissions, performance tracking, commission calculations, and comprehensive payroll management."
  },
  {
    title: "Reports",
    description: "Access powerful visual reports: profit & loss, tax, sales, inventory, expenses, and salesperson performance.",
    details: "Advanced analytics and reporting suite with interactive dashboards, custom report generation, and real-time business intelligence."
  },
  {
    title: "Other Key Features",
    description: "Customizable invoices, barcode settings, SMS/email notifications, stock adjustments, thermal printer compatibility, and multilingual support.",
    details: "Additional powerful features including invoice customization, barcode integration, automated notifications, inventory adjustments, and global localization support."
  }
];

export const FeatureOverview = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Complete Feature Overview
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Everything you need to run your business efficiently
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {features.map((feature, index) => (
              <AccordionItem
                key={feature.title}
                value={feature.title}
                className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 animate-fade-in hover:bg-white/20 transition-all duration-300 hover:border-pink-400/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/5 rounded-lg transition-colors">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-200 text-sm mt-1">{feature.description}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-100 leading-relaxed">{feature.details}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
