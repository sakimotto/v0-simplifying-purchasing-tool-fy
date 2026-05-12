import { ArrowLeft, Calendar, Clock, CreditCard, Edit, FileText, Package, ShoppingCart, TruckIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { StatusBadge } from "@/components/status-badge"
import { PageSummary } from "@/components/page-summary"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = {
    id: params.id,
    supplier: "YKK Group",
    items: [
      { name: "Metal Zipper #5", quantity: 5000, price: 0.45 },
    ],
    date: "2023-05-10",
    total: 2250.00,
    status: "Delivered",
    deliveryDate: "2023-05-25",
    paymentStatus: "Paid",
    paymentTerms: "Net 30",
    shippingMethod: "Air Freight",
    trackingNumber: "YKK12345678",
    shippingAddress: "123 Main St, Anytown, USA",
    notes: "Standard order for Q3 production. No special instructions.",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/orders" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Order #{order.id}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Order
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title={`Order #${order.id}`}
          description={`From ${order.supplier} — ${order.date}`}
        />

        <div className="grid gap-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Total</p>
                    <p className="text-2xl font-bold text-blue-700">${order.total.toLocaleString()}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Status</p>
                    <StatusBadge status={order.status} />
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Delivery</p>
                    <p className="text-2xl font-bold text-amber-700">{order.deliveryDate}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <TruckIcon className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Payment</p>
                    <p className="text-2xl font-bold text-purple-700">{order.paymentStatus}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detail Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Supplier</p>
                      <p className="font-medium">{order.supplier}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Order Date</p>
                      <p className="font-medium">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Payment Terms</p>
                      <p className="font-medium">{order.paymentTerms}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Shipping Method</p>
                      <p className="font-medium">{order.shippingMethod}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tracking Number</p>
                      <p className="font-medium">{order.trackingNumber || "N/A"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="items" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="items">Line Items</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="items" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Line Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {order.items.map((item, i) => (
                          <div key={i} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                  Quantity: {item.quantity.toLocaleString()} × ${item.price.toFixed(2)}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold">${(item.quantity * item.price).toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="border-t pt-4 flex justify-between">
                          <span className="font-bold text-lg">Total</span>
                          <span className="font-bold text-lg">${order.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="shipping" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Shipping Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Delivery Date</p>
                          <p className="font-medium">{order.deliveryDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Shipping Method</p>
                          <p className="font-medium">{order.shippingMethod}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Tracking Number</p>
                          <p className="font-medium">{order.trackingNumber || "Not yet assigned"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Shipping Address</p>
                          <p className="font-medium">{order.shippingAddress}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documents" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Documents</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-gray-500">
                        <p>This tab would display documents related to this order.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{order.notes}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
