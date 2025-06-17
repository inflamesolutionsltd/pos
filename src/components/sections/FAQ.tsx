
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Inflame POS cloud-based?",
    answer: "Yes, it's fully cloud-based and can be accessed from anywhere with an internet connection. Your data is securely stored in the cloud and synchronized across all your devices in real-time."
  },
  {
    question: "Can I use it for multiple stores?",
    answer: "Absolutely. You can manage multiple business locations from a single dashboard. Our multi-store feature allows you to track inventory, sales, and performance across all your locations with centralized reporting."
  },
  {
    question: "Is barcode scanner supported?",
    answer: "Yes, Inflame POS works with all standard barcode scanners and thermal printers. We support various barcode formats and provide seamless integration with popular hardware devices."
  },
  {
    question: "Do you offer local support?",
    answer: "Yes, we provide priority customer support across Bangladesh and beyond. Our dedicated support team is available 24/7 to help you with any questions or technical issues."
  },
  {
    question: "Can I get a custom feature?",
    answer: "Yes. Our Enterprise Plan allows for custom module development and integrations. We can work with you to develop specific features that meet your unique business requirements."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about Inflame POS
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 px-6 animate-fade-in hover:bg-white transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
