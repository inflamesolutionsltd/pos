import { Card } from "@/components/ui/card";

const features = [
	{
		icon: "☁️",
		title: "Fully Cloud-Based",
		description: "Access from Anywhere - Your data is always available, wherever you are",
	},
	{
		icon: "⚡",
		title: "Lightning-Fast Ajax-powered",
		description: "POS Terminal - No reloads, instant responses for faster transactions",
	},
	{
		icon: "🏪",
		title: "Easy Multi-Store & Multi-User",
		description: "Management - Scale your business across multiple locations effortlessly",
	},
	{
		icon: "📊",
		title: "Barcode & Thermal Printer",
		description: "Support - Professional hardware integration for seamless operations",
	},
	{
		icon: "📈",
		title: "Real-Time Reports",
		description: "Smart Dashboards - Make data-driven decisions with live insights",
	},
	{
		icon: "📱",
		title: "SMS & Email Notifications",
		description: "Built-In - Keep customers and staff informed automatically",
	},
	{
		icon: "🌍",
		title: "Translation Ready",
		description: "Perfect for Global Use - Serve international markets with ease",
	},
	{
		icon: "📏",
		title: "Flexible & Scalable",
		description: "For Any Business Size - Grows with your business needs",
	},
];

export const WhyChoose = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-3/4 left-2/3 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
						Why Choose Inflame POS?
					</h2>
					<p className="text-xl text-gray-200 max-w-2xl mx-auto">
						Built with modern technology and designed for success
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<Card
							key={feature.title}
							className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-pink-400/30"
							style={{ animationDelay: `${index * 150}ms` }}
						>
							<div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
								{feature.icon}
							</div>
							<h3 className="text-lg font-bold text-white mb-3">
								{" "}
								{feature.title}
							</h3>
							<p className="text-gray-200 leading-relaxed text-sm">
								{feature.description}
							</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
