import { ArrowLeft, Box, Calendar, Clock, Edit, FileText, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  // This would be fetched from an API in a real application
  const item = {
    id: params.id,
    name: "Metal Zipper #5",
    sku: "MZ-005-BLK",
    category: "Zippers",
    description:
      "High-quality metal zipper with #5 teeth size. Available in various colors and lengths. Ideal for jackets, bags, and heavy-duty applications.",
    supplier: "YKK Group",
    price: 0.45,
    moq: 1000,
    leadTime: "15-20 days",
    stock: 2500,
    reorderPoint: 1000,
    lastOrdered: "2023-04-15",
    status: "Active",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/items" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Item Details</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/items/${params.id}/edit`}>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit Item
              </Button>
            </Link>
            <Link href={`/orders/create?item=${params.id}`}>
              <Button size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Order
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Current Stock</p>
                    <p className="text-2xl font-bold text-blue-700">{item.stock.toLocaleString()}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Box className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Unit Price</p>
                    <p className="text-2xl font-bold text-emerald-700">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Lead Time</p>
                    <p className="text-2xl font-bold text-amber-700">{item.leadTime}</p>
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
                    <p className="text-sm font-medium text-purple-600">Last Ordered</p>
                    <p className="text-2xl font-bold text-purple-700">{item.lastOrdered}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Item Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-40 h-40 bg-gray-100 rounded flex items-center justify-center mb-4">
                      <img
                        src="/metal-teeth-closure.png"
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <Badge className="mt-2">{item.category}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">SKU</p>
                      <p className="font-medium">{item.sku}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Supplier</p>
                      <p className="font-medium">{item.supplier}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Minimum Order Quantity</p>
                      <p className="font-medium">{item.moq.toLocaleString()} units</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Reorder Point</p>
                      <p className="font-medium">{item.reorderPoint.toLocaleString()} units</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <Badge
                        variant={item.status === "Active" ? "success" : "secondary"}
                        className="flex items-center mt-1"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="orders">Order History</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{item.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Stock Status</h3>
                          <div className="h-8 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${item.stock > item.reorderPoint ? "bg-emerald-500" : "bg-amber-500"}`}
                              style={{ width: `${Math.min((item.stock / (item.reorderPoint * 2)) * 100, 100)}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-2 text-sm">
                            <span>0</span>
                            <span>Reorder Point: {item.reorderPoint.toLocaleString()}</span>
                            <span>{(item.reorderPoint * 2).toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Price History</h3>
                          <div className="text-center py-8 text-gray-500">
                            <p>Price history chart would appear here</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="orders" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-gray-500">
                        <p>This tab would display the order history for this item.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="specifications" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Technical Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-gray-500">
                        <p>This tab would display technical specifications for this item.</p>
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
                        <p>This tab would display documents related to this item.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
