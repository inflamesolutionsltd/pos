import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 animate-fade-in hover:border-pink-400/30">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Demo
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Want to see Inflame POS in action?
                </h3>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  Request a live demo with one of our product experts and see how it fits your business needs. 
                  Experience the power of Inflame POS firsthand and discover how it can transform your operations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/inflamewebsiteltd/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/25">
                    📅 Schedule a 15 Minute Call
                  </Button>
                </a>
                <a
                  href="http://pos.inflamesolutions.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                    Live Demo
                  </Button>
                </a>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-200 text-sm">
                  No commitment required • 15-minute personalized session • See real-time features
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
