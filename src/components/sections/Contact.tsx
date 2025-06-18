import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-pink-900">
            Contact Us
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to transform your business? Let's talk about your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:border-pink-700/30">
            <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 transition-all duration-300 focus:border-pink-700"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 transition-all duration-300 focus:border-pink-700"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 transition-all duration-300 focus:border-pink-700"
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-white">Company</Label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 transition-all duration-300 focus:border-pink-700"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your business needs..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[120px] focus:bg-white/20 transition-all duration-300 focus:border-pink-700"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-700 to-pink-900 hover:from-pink-800 hover:to-pink-950 text-white transform hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-700/25">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                Inflame Solutions Ltd.
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {/* Address Icon (Map Pin SVG) */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-pink-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-5.373-8-10A8 8 0 0112 3a8 8 0 018 8c0 4.627-3.582 10-8 10zm0-7a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-200">
                      Gulshan-2, Road: 115, House No: 32<br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {/* Phone Icon (Phone SVG) */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-pink-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.086c.414 0 .81.168 1.102.464l2.12 2.121a1.5 1.5 0 01.44 1.06v2.086a.75.75 0 01-.22.53l-1.06 1.06a11.042 11.042 0 005.657 5.657l1.06-1.06a.75.75 0 01.53-.22h2.086a1.5 1.5 0 011.06.44l2.121 2.12c.296.293.464.689.464 1.103v2.086c0 1.243-1.007 2.25-2.25 2.25A17.25 17.25 0 012.25 6.75z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-200">+8801897715426</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {/* Email Icon (Envelope SVG) */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-pink-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.591 7.591a2.25 2.25 0 01-3.182 0L3.409 8.584A2.25 2.25 0 012.75 6.993V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-200">inflamesolutionltd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">🔗 Follow Us Online</h4>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  {/* LinkedIn Icon */}
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300">LinkedIn: Inflame Solution</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  {/* Facebook Icon */}
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z"/></svg>
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300">Facebook: Inflame Solutions Ltd.</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  {/* Twitter Icon */}
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-400"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
                  </span>
                  <span className="group-hover:text-white transition-colors duration-300">Twitter: @test</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-semibold mb-3 text-white">Business Hours</h4>
              <div className="space-y-2 text-gray-200">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
