import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = {
	monthly: [
		{
			name: "Basic Plan",
			subtitle: "Best for Small Shops",
			price: "BDT 198",
			period: "/month",
			description: "Perfect for single location businesses",
			features: [
				"Product Upload (400)",
				"Purchase Management",
				"Sales Management",
				"Stock & Sales Management",
				"User- 1",
				"Admin Panel ",
				"Basic Reports ",
				"Online Training x 2",
				"Customer Support",


			],
			popular: false,
		},
		{
			name: "Standard Plan",
			subtitle: "For Growing Businesses",
			price: "BDT 389",
			period: "/month",
			description: "Most popular for expanding businesses",
			features: [
				"Product Upload (400)",
				"Purchase Management",
				"Sales Management",
				"Expenses Management",
				"Quatation",
				"Product Variants",
				"Monthly Data Backup",
				"Stock & Sales Management",
				"User- 5",
				"Admin Panel ",
				"Basic Reports ",
				"Online Training x 5",
				"Customer Support",
				"Email & SMS Notification",
				"Priority Support",

			],
			popular: true,
		},
		{
			name: "Premium Plan",
			subtitle: "Large-Scale Solution",
			price: "BDT 899",
			period: "/month",
			description: "For large scale operations",
			features: [
				"Product Upload (Unlimited)",
				"Purchase Management",
				"Sales Management",
				"Expenses Management",
				"Quatation",
				"Product Variants",
				"Daily Data Backup",
				"Stock & Sales Management",
				"User- 5",
				"Admin Panel ",
				"All Reports ",
				"Online Training (Unlimited) & Offline Training x 2",
				"Customer Support",
				"Email & SMS Notification",
				"Priority Support",
				"Activity Logs",
				"API Access & Integration",
				"Dedicated Support Team",

			],
			popular: false,
		},
	],
	sixMonths: [
		{
			name: "Basic Plan",
			subtitle: "Best for Small Shops",
			price: "BDT 1100",
			period: "/6 months",
			description: "Perfect for single location businesses",
			features: [
				"Product Upload (400)",
				"Purchase Management",
				"Sales Management",
				"Stock & Sales Management",
				"User- 1",
				"Admin Panel ",
				"Basic Reports ",
				"Online Training x 2",
				"Customer Support",
			],
			popular: false,
		},
		{
			name: "Standard Plan",
			subtitle: "For Growing Businesses",
			price: "BDT 2200",
			period: "/6 months",
			description: "Most popular for expanding businesses",
			features: [
				"Product Upload (400)",
				"Purchase Management",
				"Sales Management",
				"Expenses Management",
				"Quatation",
				"Product Variants",
				"Monthly Data Backup",
				"Stock & Sales Management",
				"User- 5",
				"Admin Panel ",
				"Basic Reports ",
				"Online Training x 5",
				"Customer Support",
				"Email & SMS Notification",
				"Priority Support",
			],
			popular: true,
		},
		{
			name: "Premium Plan",
			subtitle: "Large-Scale Solution",
			price: "BDT 5000",
			period: "/six months",
			description: "For large scale operations",
			features: [
				"Product Upload (Unlimited)",
				"Purchase Management",
				"Sales Management",
				"Expenses Management",
				"Quatation",
				"Product Variants",
				"Daily Data Backup",
				"Stock & Sales Management",
				"User- 5",
				"Admin Panel ",
				"All Reports ",
				"Online Training (Unlimited) & Offline Training x 2",
				"Customer Support",
				"Email & SMS Notification",
				"Priority Support",
				"Activity Logs",
				"API Access & Integration",
				"Dedicated Support Team",
			],
			popular: false,
		},
	],
	yearly: [
		{
			name: "Basic Plan",
			subtitle: "Best for Small Shops",
			price: "BDT 2000",
			period: "/year",
			description: "Perfect for single location businesses",
			features: [
				"Product Upload (400)",
				"Purchase Management",
				"Sales Management",
				"Stock & Sales Management",
				"User- 1",
				"Admin Panel ",
				"Basic Reports ",
				"Online Training x 2",
				"Customer Support",
			],
			popular: false,
		},
		{
			name: "Standard Plan",
			subtitle: "For Growing Businesses",
			price: "BDT 4000",
			period: "/year",
			description: "Most popular for expanding businesses",
			features: [
				"Product Upload (400)",
				"Purchase Management",
				"Sales Management",
				"Expenses Management",
				"Quatation",
				"Product Variants",
				"Monthly Data Backup",
				"Stock & Sales Management",
				"User- 5",
				"Admin Panel ",
				"Basic Reports ",
				"Online Training x 5",
				"Customer Support",
				"Email & SMS Notification",
				"Priority Support",
			],
			popular: true,
		},
		{
			name: "Premium Plan",
			subtitle: "Large-Scale Solution",
			price: "BDT 10000",
			period: "/year",
			description: "For large scale operations",
			features: [
				"Product Upload (Unlimited)",
				"Purchase Management",
				"Sales Management",
				"Expenses Management",
				"Quatation",
				"Product Variants",
				"Daily Data Backup",
				"Stock & Sales Management",
				"User- 5",
				"Admin Panel ",
				"All Reports ",
				"Online Training (Unlimited) & Offline Training x 2",
				"Customer Support",
				"Email & SMS Notification",
				"Priority Support",
				"Activity Logs",
				"API Access & Integration",
				"Dedicated Support Team",
			],
			popular: false,
		},
	],
};

export const Pricing = () => {
	const [selectedPlan, setSelectedPlan] = useState("monthly");

	return (
		<section id="pricing" className="py-20 bg-white relative overflow-hidden">
			<div className="absolute inset-0">
				<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-100/50 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center space-y-6 mb-16">
					<h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
						Choose the Perfect Plan for Your Business
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Explore flexible pricing plans to suit every business stage—from startups
						to enterprises. Start with a free trial or request a demo today.
					</p>
					<div className="flex justify-center gap-4">
						<button
							className={`px-4 py-2 rounded-lg font-semibold ${selectedPlan === "monthly" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800"}`}
							onClick={() => setSelectedPlan("monthly")}
						>
							Monthly
						</button>
						<button
							className={`px-4 py-2 rounded-lg font-semibold ${selectedPlan === "sixMonths" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800"}`}
							onClick={() => setSelectedPlan("sixMonths")}
						>
							6 Months
						</button>
						<button
							className={`px-4 py-2 rounded-lg font-semibold ${selectedPlan === "yearly" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800"}`}
							onClick={() => setSelectedPlan("yearly")}
						>
							Yearly
						</button>
					</div>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{plans[selectedPlan].map((plan, index) => {
						const isPopular = plan.popular;
						return (
							<Card
								key={plan.name}
								className={`relative transition-all duration-500 animate-fade-in flex flex-col items-center
          ${index === 1
									? "z-20 scale-110 border-2 border-pink-600 bg-white shadow-2xl shadow-pink-200/40 hover:shadow-red-900/40 ring-2 ring-pink-400 min-h-[650px] md:min-h-[700px]"
									: "z-10 bg-white/90 border border-gray-200 shadow-lg hover:shadow-red-900/30 min-h-[500px] md:min-h-[550px]"
								}
          py-12 px-6 md:px-8
        `}
								style={{ animationDelay: `${index * 200}ms` }}
							>
								{isPopular && (
									<div className="absolute -top-7 left-1/2 -translate-x-1/2">
										<span className="px-6 py-2 rounded-full bg-pink-600 text-white text-xs font-bold shadow-lg tracking-wider uppercase">
											Most Popular
										</span>
									</div>
								)}
								<div className="text-center mb-8 w-full">
									<h3 className="text-2xl font-bold text-gray-900 mb-1">
										{plan.name}
									</h3>
									<p className="text-pink-600 font-semibold mb-2">
										{plan.subtitle}
									</p>
									<p className="text-gray-600 mb-6">{plan.description}</p>
									<div className="flex flex-col items-center justify-center mb-2">
										<span
											className={`text-5xl font-extrabold ${
												isPopular ? "text-pink-700" : "text-gray-900"
											}`}
										>
											{plan.price}
										</span>
										<span className="text-gray-600 text-base">
											{plan.period}
										</span>
									</div>
								</div>
								<ul className="space-y-4 mb-8 w-full">
									{plan.features.map((feature) => (
										<li key={feature} className="flex items-center w-full">
											<Check
												className={`h-5 w-5 ${
													isPopular ? "text-pink-600" : "text-green-500"
												} mr-3 flex-shrink-0`}
											/>
											<span className="text-gray-700 text-left">
												{feature}
											</span>
										</li>
									))}
								</ul>
								<Button
									className={`w-full py-3 text-lg font-bold rounded-lg transition-all duration-300
            ${isPopular
											? "bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 text-white shadow-lg shadow-pink-400/30"
											: "bg-white border border-pink-200 text-pink-700 hover:bg-pink-50"
										}`}
								>
									{plan.name === "Enterprise Plan"
										? "Contact Sales"
										: "Choose Plan"}
								</Button>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};
