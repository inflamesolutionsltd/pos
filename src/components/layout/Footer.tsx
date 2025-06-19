export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Inflame Solutions Ltd" 
                className="h-12 w-auto brightness-125 contrast-110 saturate-150"
              
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Powerful, cloud-based point-of-sale solution designed to help businesses grow and succeed in today's competitive market.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Inflame Solutions Ltd. All rights reserved.
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Certification Section at the very bottom */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 border-t border-gray-800 pt-6">
        <span className="text-gray-300 font-medium">Certified by</span>
        <img
          src="https://basis.org.bd/public/images/logo.svg"
          alt="BASIS Certified"
          className="h-10 w-auto bg-white rounded shadow p-1"
          style={{ background: 'white' }}
        />
        <img
          src="https://ictd.gov.bd/themes/responsive_npf/img/np-logo-set.png"
          alt="ICT Division Certified"
          className="h-10 w-auto bg-white rounded shadow p-1"
          style={{ background: 'white' }}
        />
      </div>
      {/* Payment Partner Section at the very bottom */}
      <div className="flex items-center justify-center mt-4">
        <span className="text-gray-300 font-medium">Pay with&nbsp;</span>
        <img
          src="https://dotinternetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsslcommerz-foo2.100447b6.png&w=3840&q=75"
          alt="SSLCommerz Payment Partner"
          className="h-10 w-auto bg-white rounded shadow p-1"
          style={{ background: 'white' }}
        />
      </div>
    </footer>
  );
};
