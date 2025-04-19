import { ArrowLeft, Clock, Filter, Package, Plus, Search, ShoppingCart, TruckIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatusBadge } from "@/components/status-badge"
import { PageSummary } from "@/components/page-summary"

export default function OrdersPage() {
  // Sample orders data
  const orders = [
    {
      id: "ORD001",
      supplier: "YKK Group",
      items: [{ name: "Metal Zipper #5", quantity: 5000, price: 0.45 }],
      date: "2023-05-10",
      total: 2250.0,
      status: "Delivered",
      deliveryDate: "2023-05-25",
      paymentStatus: "Paid",
      paymentTerms: "Net 30",
      shippingMethod: "Air Freight",
      trackingNumber: "YKK12345678",
    },
    {
      id: "ORD002",
      supplier: "Guangzhou Textile",
      items: [
        { name: "Cotton Twill Tape", quantity: 2000, price: 0.12 },
        { name: "Cotton Drawcord 5mm", quantity: 1000, price: 0.22 },
      ],
      date: "2023-05-15",
      total: 460.0,
      status: "Shipped",
      deliveryDate: "2023-06-01",
      paymentStatus: "Pending",
      paymentTerms: "Net 30",
      shippingMethod: "Sea Freight",
      trackingNumber: "GZT87654321",
    },
    {
      id: "ORD003",
      supplier: "T&K Garment Accessories",
      items: [
        { name: "Brass Jean Buttons", quantity: 10000, price: 0.25 },
        { name: "Metal Snap Buttons", quantity: 5000, price: 0.18 },
      ],
      date: "2023-05-20",
      total: 3400.0,
      status: "Processing",
      deliveryDate: "2023-06-10",
      paymentStatus: "Deposit Paid",
      paymentTerms: "50% Deposit, 50% Before Shipment",
      shippingMethod: "Air Freight",
      trackingNumber: null,
    },
    {
      id: "ORD004",
      supplier: "Wuxi Huacan Labels",
      items: [
        { name: "Woven Labels - Size S", quantity: 5000, price: 0.08 },
        { name: "Woven Labels - Size M", quantity: 5000, price: 0.08 },
        { name: "Woven Labels - Size L", quantity: 5000, price: 0.08 },
      ],
      date: "2023-05-25",
      total: 1200.0,
      status: "Processing",
      deliveryDate: "2023-06-15",
      paymentStatus: "Deposit Paid",
      paymentTerms: "30% Deposit, 70% Before Shipment",
      shippingMethod: "Express Courier",
      trackingNumber: null,
    },
    {
      id: "ORD005",
      supplier: "Guangzhou Rocky Metal",
      items: [{ name: "Plastic Hooks", quantity: 8000, price: 0.15 }],
      date: "2023-05-30",
      total: 1200.0,
      status: "Delivered",
      deliveryDate: "2023-06-20",
      paymentStatus: "Paid",
      paymentTerms: "Net 30",
      shippingMethod: "Air Freight",
      trackingNumber: "GRM98765432",
    },
    {
      id: "ORD006",
      supplier: "Coats Group",
      items: [
        { name: "Polyester Thread #40", quantity: 500, price: 2.5 },
        { name: "Polyester Thread #60", quantity: 300, price: 2.75 },
      ],
      date: "2023-06-05",
      total: 2075.0,
      status: "Pending",
      deliveryDate: "2023-06-25",
      paymentStatus: "Not Paid",
      paymentTerms: "Net 45",
      shippingMethod: "Express Courier",
      trackingNumber: null,
    },
    {
      id: "ORD007",
      supplier: "YKK Group",
      items: [{ name: "Coil Zipper #3", quantity: 3000, price: 0.35 }],
      date: "2023-06-10",
      total: 1050.0,
      status: "Pending",
      deliveryDate: "2023-06-30",
      paymentStatus: "Not Paid",
      paymentTerms: "Net 30",
      shippingMethod: "Air Freight",
      trackingNumber: null,
    },
    {
      id: "ORD008",
      supplier: "Kam Wah Button Factory",
      items: [{ name: "Metal Snap Button 15mm", quantity: 5000, price: 0.18 }],
      date: "2023-06-15",
      total: 900.0,
      status: "Pending",
      deliveryDate: "2023-07-05",
      paymentStatus: "Not Paid",
      paymentTerms: "Net 30",
      shippingMethod: "Sea Freight",
      trackingNumber: null,
    },
  ]

  // Count orders by status
  const processingOrders = orders.filter((order) => order.status === "Processing").length
  const shippedOrders = orders.filter((order) => order.status === "Shipped").length
  const deliveredOrders = orders.filter((order) => order.status === "Delivered").length
  const pendingOrders = orders.filter((order) => order.status === "Pending").length

  // Calculate total spend
  const totalSpend = orders.reduce((sum, order) => sum + order.total, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Order Management</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/orders/create">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create Order
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title="Order Management"
          description="Track and manage purchase orders with suppliers, monitor order status, and view order history."
        />

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Total Orders</p>
                    <p className="text-2xl font-bold text-blue-700">{orders.length}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Processing</p>
                    <p className="text-2xl font-bold text-amber-700">{processingOrders}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Shipped</p>
                    <p className="text-2xl font-bold text-purple-700">{shippedOrders}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <TruckIcon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Delivered</p>
                    <p className="text-2xl font-bold text-emerald-700">{deliveredOrders}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Package className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search orders by ID, supplier, or item..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Orders ({orders.length})</TabsTrigger>
              <TabsTrigger value="processing">Processing ({processingOrders})</TabsTrigger>
              <TabsTrigger value="shipped">Shipped ({shippedOrders})</TabsTrigger>
              <TabsTrigger value="delivered">Delivered ({deliveredOrders})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>All Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {orders.map((order) => (
                      <Link href={`/orders/${order.id}`} key={order.id} className="block">
                        <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">Order #{order.id}</h3>
                              <div className="text-sm text-gray-500 mt-1">{order.supplier}</div>
                            </div>
                            <StatusBadge status={order.status} />
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                            <div>
                              <p className="text-gray-500">Items</p>
                              <p className="font-medium">
                                {order.items.map((item) => `${item.name} (${item.quantity} pcs)`).join(", ")}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Order Date</p>
                              <p className="font-medium">{order.date}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Total</p>
                              <p className="font-medium">${order.total.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="processing" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Processing Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {orders
                      .filter((order) => order.status === "Processing")
                      .map((order) => (
                        <Link href={`/orders/${order.id}`} key={order.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">Order #{order.id}</h3>
                                <div className="text-sm text-gray-500 mt-1">{order.supplier}</div>
                              </div>
                              <StatusBadge status={order.status} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Items</p>
                                <p className="font-medium">
                                  {order.items.map((item) => `${item.name} (${item.quantity} pcs)`).join(", ")}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Order Date</p>
                                <p className="font-medium">{order.date}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Total</p>
                                <p className="font-medium">${order.total.toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipped" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Shipped Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {orders
                      .filter((order) => order.status === "Shipped")
                      .map((order) => (
                        <Link href={`/orders/${order.id}`} key={order.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">Order #{order.id}</h3>
                                <div className="text-sm text-gray-500 mt-1">{order.supplier}</div>
                              </div>
                              <StatusBadge status={order.status} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Items</p>
                                <p className="font-medium">
                                  {order.items.map((item) => `${item.name} (${item.quantity} pcs)`).join(", ")}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Order Date</p>
                                <p className="font-medium">{order.date}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Total</p>
                                <p className="font-medium">${order.total.toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="delivered" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Delivered Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {orders
                      .filter((order) => order.status === "Delivered")
                      .map((order) => (
                        <Link href={`/orders/${order.id}`} key={order.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">Order #{order.id}</h3>
                                <div className="text-sm text-gray-500 mt-1">{order.supplier}</div>
                              </div>
                              <StatusBadge status={order.status} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Items</p>
                                <p className="font-medium">
                                  {order.items.map((item) => `${item.name} (${item.quantity} pcs)`).join(", ")}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Order Date</p>
                                <p className="font-medium">{order.date}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Total</p>
                                <p className="font-medium">${order.total.toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
