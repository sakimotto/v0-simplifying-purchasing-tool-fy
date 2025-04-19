import { ArrowLeft, Building, FileText, Mail, MapPin, Phone, Plus, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SupplierDetailPage({ params }: { params: { id: string } }) {
  // This would be fetched from an API in a real application
  const supplier = {
    id: params.id,
    name: "YKK Group",
    logo: "/interlocking-letters.png",
    category: "Zippers & Fasteners",
    address: "1-6 Myobadai, Kurobe City, Toyama Prefecture, 938-8601, Japan",
    phone: "+81-765-54-8000",
    email: "info@ykk.com",
    website: "https://www.ykk.com",
    contactPerson: "Takahiro Miyake",
    rating: 4.8,
    status: "Active",
    description:
      "YKK Group is a Japanese group of manufacturing companies. YKK stands for Yoshida Kōgyō Kabushiki gaisha (吉田工業株式会社, Yoshida Manufacturing Corporation). The company is primarily known for manufacturing zippers, but it also manufactures other fastening products, architectural products, plastic hardware, and industrial machinery.",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/supplier" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Supplier Details</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/rfq?supplier=${params.id}`}>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create RFQ
              </Button>
            </Link>
            <Link href={`/orders/create?supplier=${params.id}`}>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create Order
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
                    <p className="text-sm font-medium text-blue-600">Total Orders</p>
                    <p className="text-2xl font-bold text-blue-700">24</p>
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
                    <p className="text-sm font-medium text-amber-600">Active RFQs</p>
                    <p className="text-2xl font-bold text-amber-700">3</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Items Supplied</p>
                    <p className="text-2xl font-bold text-emerald-700">12</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Building className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Years Active</p>
                    <p className="text-2xl font-bold text-purple-700">5</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Supplier Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <img
                        src={supplier.logo || "/placeholder.svg"}
                        alt={supplier.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-bold">{supplier.name}</h2>
                    <Badge className="mt-2">{supplier.category}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">{supplier.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">{supplier.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">{supplier.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Contact Person</p>
                        <p className="text-gray-600">{supplier.contactPerson}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="items">Items</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {supplier.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{supplier.description}</p>

                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Performance Metrics</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">On-time Delivery</span>
                              <span className="font-medium">98%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Quality Rating</span>
                              <span className="font-medium">4.8/5</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Response Time</span>
                              <span className="font-medium">24 hours</span>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Certifications</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">ISO 9001</span>
                              <Badge variant="outline">Verified</Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">OEKO-TEX</span>
                              <Badge variant="outline">Verified</Badge>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">BSCI</span>
                              <Badge variant="outline">Verified</Badge>
                            </div>
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
                        <p>This tab would display the order history with this supplier.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="items" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Items Supplied</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-gray-500">
                        <p>This tab would display items supplied by this supplier.</p>
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
                        <p>This tab would display documents related to this supplier.</p>
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
