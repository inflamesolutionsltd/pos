import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-white-400 text-sm animate-glow">
                <Zap className="w-4 h-4 mr-2" />
                Lightning Fast POS System
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-playfair">
                Powerful POS Software{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 animate-gradient">
                  Tailored for Every Business
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed font-inter">
                Inflame POS is your all-in-one retail and business management solution. Whether you're managing a small retail store, a chain of restaurants, or multiple warehouses—our cloud-based POS software simplifies operations, boosts sales, and enhances efficiency with every click.
              </p>
            </div>
            
            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-pink-400 mr-2" />
                  <span className="text-3xl font-bold text-white">99.9%</span>
                </div>
                <p className="text-gray-300 text-sm">Uptime</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '450ms' }}>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-purple-400 mr-2" />
                  <span className="text-3xl font-bold text-white">1,000+</span>
                </div>
                <p className="text-gray-300 text-sm">Businesses</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-pink-400 mr-2" />
                  <span className="text-3xl font-bold text-white">24/7</span>
                </div>
                <p className="text-gray-300 text-sm">Support</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://pos.inflamesolutions.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 group transform hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/25 font-semibold">
                  Live Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 font-semibold">
                View Pricing
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <span><span className="text-white font-semibold">1,000+</span> Businesses Trust Us</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span><span className="text-white font-semibold">99.9%</span> Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                <span><span className="text-white font-semibold">24/7</span> Support</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            {/* Main POS device image */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/lovable-uploads/tab.png"
                alt="Inflame POS Tablet Interface"
                className="rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm w-full max-w-lg mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            
            {/* Animated graph elements */}
            <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 animate-float">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-xs text-white font-medium">Sales Growth</span>
              </div>
              <div className="flex items-end space-x-1">
                <div className="w-2 h-4 bg-pink-500 rounded-sm animate-pulse"></div>
                <div className="w-2 h-6 bg-pink-500 rounded-sm animate-pulse delay-100"></div>
                <div className="w-2 h-8 bg-pink-500 rounded-sm animate-pulse delay-200"></div>
                <div className="w-2 h-5 bg-pink-500 rounded-sm animate-pulse delay-300"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 animate-float delay-1000">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xs text-white font-medium">Orders Today</span>
              </div>
              <div className="text-2xl font-bold text-white">247</div>
              <div className="text-xs text-pink-400">+12% from yesterday</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
