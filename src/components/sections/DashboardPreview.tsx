
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const salesData = [
  { name: "Mon", sales: 4000, orders: 240 },
  { name: "Tue", sales: 3000, orders: 139 },
  { name: "Wed", sales: 2000, orders: 980 },
  { name: "Thu", sales: 2780, orders: 390 },
  { name: "Fri", sales: 1890, orders: 480 },
  { name: "Sat", sales: 2390, orders: 380 },
  { name: "Sun", sales: 3490, orders: 430 },
];

const pieData = [
  { name: "Coffee", value: 35, color: "#22c55e" },
  { name: "Food", value: 30, color: "#3b82f6" },
  { name: "Beverages", value: 20, color: "#f59e0b" },
  { name: "Others", value: 15, color: "#ef4444" },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#22c55e",
  },
  orders: {
    label: "Orders",
    color: "#3b82f6",
  },
};

export const DashboardPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 font-playfair">
            Interactive Dashboard Preview
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            See how our intuitive interface makes business management effortless
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-lg">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Dashboard</TabsTrigger>
            <TabsTrigger value="pos" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">POS Terminal</TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="animate-fade-in">
            <Card className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-2xl border-0">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-lg text-white animate-scale-in transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-semibold mb-2">Today's Sales</h3>
                    <p className="text-3xl font-bold">$12,450</p>
                    <p className="text-sm mt-1 opacity-90">↗ +15% from yesterday</p>
                    <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white animate-slide-up" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white animate-scale-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '150ms' }}>
                    <h3 className="text-lg font-semibold mb-2">Orders</h3>
                    <p className="text-3xl font-bold">156</p>
                    <p className="text-sm mt-1 opacity-90">↗ +8% from yesterday</p>
                    <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white animate-slide-up" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white animate-scale-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '300ms' }}>
                    <h3 className="text-lg font-semibold mb-2">Customers</h3>
                    <p className="text-3xl font-bold">89</p>
                    <p className="text-sm mt-1 opacity-90">↗ +12% from yesterday</p>
                    <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white animate-slide-up" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg border animate-bounce-in">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trend</h3>
                    <ChartContainer config={chartConfig} className="h-64">
                      <AreaChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="name" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area type="monotone" dataKey="sales" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} strokeWidth={3} />
                      </AreaChart>
                    </ChartContainer>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg border animate-bounce-in" style={{ animationDelay: '200ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Sales</h3>
                    <ChartContainer config={chartConfig} className="h-64">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border animate-slide-up">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
                  <div className="space-y-3">
                    {[
                      { id: '#12345', amount: '$245.00', status: 'completed' },
                      { id: '#12344', amount: '$89.50', status: 'completed' },
                      { id: '#12343', amount: '$156.75', status: 'pending' },
                    ].map((transaction, index) => (
                      <div key={transaction.id} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${transaction.status === 'completed' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>
                          <span className="text-gray-700 font-medium">{transaction.id}</span>
                        </div>
                        <span className="font-semibold text-green-600">{transaction.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="pos" className="animate-fade-in">
            <Card className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-2xl border-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="animate-slide-up">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Selection</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Coffee', price: '$4.50', color: 'blue' },
                      { name: 'Sandwich', price: '$8.99', color: 'green' },
                      { name: 'Pastry', price: '$3.25', color: 'purple' },
                      { name: 'Juice', price: '$5.75', color: 'orange' },
                    ].map((product, index) => (
                      <div key={product.name} className={`bg-${product.color}-50 p-4 rounded-lg border border-${product.color}-200 cursor-pointer hover:bg-${product.color}-100 transition-all duration-300 transform hover:scale-105 animate-bounce-in`} style={{ animationDelay: `${index * 100}ms` }}>
                        <p className={`font-medium text-${product.color}-900`}>{product.name}</p>
                        <p className={`text-${product.color}-600 font-bold`}>{product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Order</h3>
                  <div className="bg-white p-6 rounded-lg shadow-lg border">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between animate-fade-in">
                        <span>Coffee x1</span>
                        <span>$4.50</span>
                      </div>
                      <div className="flex justify-between animate-fade-in" style={{ animationDelay: '100ms' }}>
                        <span>Sandwich x1</span>
                        <span>$8.99</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-semibold text-lg animate-scale-in">
                        <span>Total</span>
                        <span className="text-green-600">$13.49</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Process Payment
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="animate-fade-in">
            <Card className="p-8 bg-gradient-to-br from-white to-gray-50 shadow-2xl border-0">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Sales Analytics</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg border animate-bounce-in">
                    <h4 className="font-medium text-gray-900 mb-4">Weekly Sales Trend</h4>
                    <ChartContainer config={chartConfig} className="h-48">
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="name" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="sales" fill="#22c55e" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ChartContainer>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg border animate-bounce-in" style={{ animationDelay: '200ms' }}>
                    <h4 className="font-medium text-gray-900 mb-4">Top Products</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Coffee', sold: 245, color: 'green' },
                        { name: 'Sandwich', sold: 189, color: 'blue' },
                        { name: 'Pastry', sold: 167, color: 'purple' },
                      ].map((product, index) => (
                        <div key={product.name} className="flex justify-between items-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 bg-${product.color}-500 rounded-full animate-pulse`}></div>
                            <span className="text-gray-700">{product.name}</span>
                          </div>
                          <span className="font-medium">{product.sold} sold</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
