
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Inflame Solutions Ltd" 
                className="h-10 w-auto brightness-110 contrast-125 saturate-150 hue-rotate-15"
              
              />
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>

              <a href="#features" className="text-gray-700 hover:text-pink-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-pink-600 transition-colors">Prices</a>
              <a href="#demo" className="text-gray-700 hover:text-pink-600 transition-colors">Demo</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact Us</a>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white">
              Book Demo
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-pink-600">About Us</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Prices</a>
              <a href="#demo" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Demo</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Contact Us</a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="ghost" className="w-full">Login</Button>
                <Button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800">Book Demo</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
