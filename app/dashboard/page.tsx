import { Badge } from "@/components/ui/badge"
import { ArrowRight, Box, Building, FileText, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <h1 className="text-xl font-bold">Dashboard</h1>
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
                    <p className="text-2xl font-bold text-blue-700">86</p>
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
                    <p className="text-sm font-medium text-emerald-600">Active Items</p>
                    <p className="text-2xl font-bold text-emerald-700">124</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Box className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Suppliers</p>
                    <p className="text-2xl font-bold text-amber-700">32</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Building className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Documents</p>
                    <p className="text-2xl font-bold text-purple-700">120</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest purchase orders in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "ORD005",
                      supplier: "Guangzhou Rocky Metal",
                      items: "Plastic Hooks (8,000 pcs)",
                      date: "2023-05-30",
                      status: "Delivered",
                    },
                    {
                      id: "ORD004",
                      supplier: "Wuxi Huacan Labels",
                      items: "Woven Labels - Size S, M, L (15,000 pcs)",
                      date: "2023-05-25",
                      status: "Processing",
                    },
                    {
                      id: "ORD003",
                      supplier: "T&K Garment Accessories",
                      items: "Brass Jean Buttons (10,000 pcs)",
                      date: "2023-05-20",
                      status: "Processing",
                    },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex justify-between items-start pb-4 border-b last:border-0 last:pb-0"
                    >
                      <div>
                        <h3 className="font-medium">Order #{order.id}</h3>
                        <p className="text-sm text-gray-500">{order.supplier}</p>
                        <p className="text-sm text-gray-500 mt-1">{order.date}</p>
                      </div>
                      <StatusBadge status={order.status} />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/orders" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Orders
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sample Requests</CardTitle>
                <CardDescription>Latest sample requests in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "SAM005",
                      item: "Plastic Hook 25mm",
                      supplier: "Guangzhou Rocky Metal",
                      requestDate: "2023-05-25",
                      status: "Approved",
                    },
                    {
                      id: "SAM004",
                      item: "Woven Label - Size S",
                      supplier: "Wuxi Huacan Labels",
                      requestDate: "2023-05-22",
                      status: "Rejected",
                    },
                    {
                      id: "SAM003",
                      item: "Brass Jean Button 17mm",
                      supplier: "T&K Garment Accessories",
                      requestDate: "2023-05-20",
                      status: "Pending",
                    },
                  ].map((sample) => (
                    <div
                      key={sample.id}
                      className="flex justify-between items-start pb-4 border-b last:border-0 last:pb-0"
                    >
                      <div>
                        <h3 className="font-medium">{sample.item}</h3>
                        <p className="text-sm text-gray-500">{sample.supplier}</p>
                        <p className="text-sm text-gray-500 mt-1">{sample.requestDate}</p>
                      </div>
                      <StatusBadge status={sample.status} />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/samples" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Samples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Low Stock Items</CardTitle>
                <CardDescription>Items that need to be reordered soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "ITM005",
                      name: "Plastic Hook 25mm",
                      sku: "PH-025-CLR",
                      supplier: "Guangzhou Rocky Metal",
                      stock: 800,
                    },
                    {
                      id: "ITM008",
                      name: "Cotton Drawcord 5mm",
                      sku: "CD-005-WHT",
                      supplier: "Guangzhou Textile",
                      stock: 650,
                    },
                    {
                      id: "ITM012",
                      name: "Polyester Thread #40",
                      sku: "PT-040-BLK",
                      supplier: "Shanghai Thread Works",
                      stock: 450,
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-start pb-4 border-b last:border-0 last:pb-0"
                    >
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                        <p className="text-sm text-gray-500 mt-1">Stock: {item.stock} units</p>
                      </div>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        Low Stock
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/items" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Items
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent RFQs</CardTitle>
                <CardDescription>Latest requests for quotation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "RFQ005",
                      supplier: "Guangzhou Rocky Metal",
                      items: "Plastic Hook 25mm",
                      date: "2023-05-30",
                      status: "Pending",
                    },
                    {
                      id: "RFQ004",
                      supplier: "Wuxi Huacan Labels",
                      items: "Woven Labels - Size S, M, L",
                      date: "2023-05-25",
                      status: "Completed",
                    },
                    {
                      id: "RFQ003",
                      supplier: "T&K Garment Accessories",
                      items: "Brass Jean Button 17mm",
                      date: "2023-05-20",
                      status: "Pending",
                    },
                  ].map((rfq) => (
                    <div
                      key={rfq.id}
                      className="flex justify-between items-start pb-4 border-b last:border-0 last:pb-0"
                    >
                      <div>
                        <h3 className="font-medium">RFQ #{rfq.id}</h3>
                        <p className="text-sm text-gray-500">{rfq.supplier}</p>
                        <p className="text-sm text-gray-500 mt-1">{rfq.date}</p>
                      </div>
                      <StatusBadge status={rfq.status} />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/rfq/list" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All RFQs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Documents</CardTitle>
                <CardDescription>Latest documents added to the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "T&K Garment Accessories - Contract 2025.pdf",
                      type: "Contract",
                      modified: "2 hours ago",
                    },
                    {
                      name: "Woven Labels - Technical Specifications.docx",
                      type: "Specification",
                      modified: "Yesterday",
                    },
                    {
                      name: "Invoice #8976 - Wuxi Huacan Labels.pdf",
                      type: "Invoice",
                      modified: "2 days ago",
                    },
                  ].map((doc, i) => (
                    <div key={i} className="flex justify-between items-start pb-4 border-b last:border-0 last:pb-0">
                      <div>
                        <h3 className="font-medium">{doc.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{doc.modified}</p>
                      </div>
                      <Badge variant="outline">{doc.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/documents" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Documents
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
