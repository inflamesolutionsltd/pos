import { Card } from "@/components/ui/card";

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration or Image */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200/40 bg-white/40 backdrop-blur-md">
              <img
                src="/public/lovable-uploads/logo.png"
                alt="Inflame POS Illustration"
                className="w-80 h-80 object-contain p-8 animate-fade-in"
              />
            </div>
          </div>
          {/* Content Card */}
          <Card className="p-12 bg-white/80 backdrop-blur-lg border border-white/30 shadow-2xl hover:shadow-pink-200/40 transition-all duration-500 animate-fade-in">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">
              About Us
            </h2>
            <h3 className="text-xl font-semibold text-pink-700 mb-6">Empowering Retailers with Next-Gen POS Solutions</h3>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-purple-700">Inflame Solutions Ltd.</strong> is a trusted software company dedicated to building smart business solutions. With deep expertise in retail technology, our mission is to empower businesses with innovative tools like <span className="font-semibold text-pink-700">Inflame POS</span>, making daily operations seamless, accurate, and efficient.
              </p>
              <p>
                <span className="font-semibold text-pink-700">Inflame POS</span> is a modern, cloud-based point-of-sale platform designed for flexibility and scalability. Whether you run a single store or a multi-branch chain, Inflame POS adapts to your needs with real-time inventory, sales analytics, and multi-device support.
              </p>
              <ul className="list-disc pl-6 text-base text-gray-800 space-y-2">
                <li>Intuitive, touch-friendly interface for fast checkout</li>
                <li>Advanced inventory & stock management</li>
                <li>Real-time sales analytics and reporting</li>
                <li>Multi-store and multi-user support</li>
                <li>Secure cloud data backup & offline mode</li>
                <li>Easy integrations with accounting, e-commerce, and more</li>
              </ul>
              <p>
                Our passionate team of developers and business analysts work tirelessly to keep Inflame POS at the forefront of retail innovation, ensuring you always have the tools to succeed in a fast-changing market.
              </p>
              <div className="mt-6">
                <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-700 to-purple-700 text-white font-bold shadow-lg hover:from-pink-800 hover:to-purple-800 transition-all duration-300">
                  Get in Touch &rarr;
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
