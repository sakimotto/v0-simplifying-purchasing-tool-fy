import { ArrowLeft, Building, CheckCircle, Filter, Globe, Plus, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SupplierListPage() {
  // Sample supplier data
  const suppliers = [
    {
      id: "SUP001",
      name: "YKK Group",
      category: "Zippers & Fasteners",
      location: "Tokyo, Japan",
      status: "Active",
      verified: true,
      contactPerson: "Takahiro Miyake",
      email: "t.miyake@ykk.com",
      phone: "+81-3-5574-8111",
      rating: 4.8,
      lastOrder: "2023-04-15",
      totalOrders: 24,
    },
    {
      id: "SUP002",
      name: "Guangzhou Textile Co.",
      category: "Fabrics & Textiles",
      location: "Guangzhou, China",
      status: "Active",
      verified: true,
      contactPerson: "Li Wei",
      email: "liwei@gztextile.com",
      phone: "+86-20-8888-7777",
      rating: 4.5,
      lastOrder: "2023-04-22",
      totalOrders: 18,
    },
    {
      id: "SUP003",
      name: "T&K Garment Accessories",
      category: "Buttons & Trims",
      location: "Dongguan, China",
      status: "Active",
      verified: true,
      contactPerson: "Chen Mei",
      email: "chen.mei@tkgarment.com",
      phone: "+86-769-2289-8765",
      rating: 4.7,
      lastOrder: "2023-05-01",
      totalOrders: 15,
    },
    {
      id: "SUP004",
      name: "Wuxi Huacan Labels Factory",
      category: "Labels & Tags",
      location: "Wuxi, China",
      status: "Pending",
      verified: false,
      contactPerson: "Zhang Wei",
      email: "zhangwei@huacanlabels.com",
      phone: "+86-510-8521-3578",
      rating: 4.0,
      lastOrder: "2023-03-15",
      totalOrders: 8,
    },
    {
      id: "SUP005",
      name: "Guangzhou Rocky Metal Accessories",
      category: "Metal Hardware",
      location: "Guangzhou, China",
      status: "Active",
      verified: true,
      contactPerson: "Rocky Chen",
      email: "rocky@rockyaccessories.com",
      phone: "+86-20-8623-4589",
      rating: 4.9,
      lastOrder: "2023-05-10",
      totalOrders: 22,
    },
    {
      id: "SUP006",
      name: "Kam Wah Button Factory",
      category: "Buttons & Fasteners",
      location: "Hong Kong",
      status: "Active",
      verified: true,
      contactPerson: "David Wong",
      email: "david@kamwah.com",
      phone: "+852-2543-8765",
      rating: 4.6,
      lastOrder: "2023-04-28",
      totalOrders: 16,
    },
    {
      id: "SUP007",
      name: "YangXing Embroidery Patch Factory",
      category: "Patches & Emblems",
      location: "Guangzhou, China",
      status: "Active",
      verified: true,
      contactPerson: "Yang Liu",
      email: "yang.liu@yangxing.com",
      phone: "+86-20-3401-2987",
      rating: 4.3,
      lastOrder: "2023-04-05",
      totalOrders: 12,
    },
    {
      id: "SUP008",
      name: "Hangzhou Fuhan Label Factory",
      category: "Labels & Tags",
      location: "Hangzhou, China",
      status: "Inactive",
      verified: true,
      contactPerson: "Fu Han",
      email: "fuhan@fuhanlabels.com",
      phone: "+86-571-8667-3214",
      rating: 3.9,
      lastOrder: "2023-02-18",
      totalOrders: 7,
    },
    {
      id: "SUP009",
      name: "Prym Consumer Europe",
      category: "Sewing Accessories",
      location: "Stolberg, Germany",
      status: "Active",
      verified: true,
      contactPerson: "Klaus Mueller",
      email: "k.mueller@prym.com",
      phone: "+49-2402-14-0",
      rating: 4.7,
      lastOrder: "2023-05-05",
      totalOrders: 14,
    },
    {
      id: "SUP010",
      name: "Coats Group",
      category: "Threads & Yarns",
      location: "London, UK",
      status: "Active",
      verified: true,
      contactPerson: "Sarah Johnson",
      email: "sarah.johnson@coats.com",
      phone: "+44-20-8210-5000",
      rating: 4.8,
      lastOrder: "2023-05-12",
      totalOrders: 20,
    },
  ]

  // Count suppliers by status
  const activeSuppliers = suppliers.filter((s) => s.status === "Active").length
  const pendingSuppliers = suppliers.filter((s) => s.status === "Pending").length
  const inactiveSuppliers = suppliers.filter((s) => s.status === "Inactive").length
  const verifiedSuppliers = suppliers.filter((s) => s.verified).length

  // Count unique countries
  const countries = [...new Set(suppliers.map((s) => s.location.split(", ")[1]))].length

  // Count unique categories
  const categories = [...new Set(suppliers.map((s) => s.category))].length

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
            <h1 className="text-xl font-bold">Supplier Management</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/supplier/add">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Supplier
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
                    <p className="text-sm font-medium text-blue-600">Total Suppliers</p>
                    <p className="text-2xl font-bold text-blue-700">{suppliers.length}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Verified</p>
                    <p className="text-2xl font-bold text-emerald-700">{verifiedSuppliers}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Countries</p>
                    <p className="text-2xl font-bold text-amber-700">{countries}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Categories</p>
                    <p className="text-2xl font-bold text-purple-700">{categories}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search suppliers by name, category, or location..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Suppliers ({suppliers.length})</TabsTrigger>
              <TabsTrigger value="active">Active ({activeSuppliers})</TabsTrigger>
              <TabsTrigger value="pending">Pending Verification ({pendingSuppliers})</TabsTrigger>
              <TabsTrigger value="inactive">Inactive ({inactiveSuppliers})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>All Suppliers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {suppliers.map((supplier) => (
                      <Link href={`/supplier/${supplier.id}`} key={supplier.id} className="block">
                        <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{supplier.name}</h3>
                              <div className="text-sm text-gray-500 mt-1">{supplier.category}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              {supplier.verified && (
                                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                              <Badge
                                variant={
                                  supplier.status === "Active"
                                    ? "success"
                                    : supplier.status === "Pending"
                                      ? "secondary"
                                      : "outline"
                                }
                                className="flex items-center"
                              >
                                {supplier.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                            <div>
                              <p className="text-gray-500">Location</p>
                              <p className="font-medium">{supplier.location}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Contact</p>
                              <p className="font-medium">{supplier.contactPerson}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Rating</p>
                              <p className="font-medium flex items-center">
                                {supplier.rating}
                                <span className="text-yellow-400 ml-1">★</span>
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Last Order</p>
                              <p className="font-medium">{supplier.lastOrder}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="active" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Active Suppliers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {suppliers
                      .filter((supplier) => supplier.status === "Active")
                      .map((supplier) => (
                        <Link href={`/supplier/${supplier.id}`} key={supplier.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{supplier.name}</h3>
                                <div className="text-sm text-gray-500 mt-1">{supplier.category}</div>
                              </div>
                              <div className="flex items-center gap-2">
                                {supplier.verified && (
                                  <Badge
                                    variant="outline"
                                    className="bg-emerald-50 text-emerald-700 border-emerald-200"
                                  >
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                                <Badge variant="success" className="flex items-center">
                                  {supplier.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Location</p>
                                <p className="font-medium">{supplier.location}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Contact</p>
                                <p className="font-medium">{supplier.contactPerson}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Rating</p>
                                <p className="font-medium flex items-center">
                                  {supplier.rating}
                                  <span className="text-yellow-400 ml-1">★</span>
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Last Order</p>
                                <p className="font-medium">{supplier.lastOrder}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pending" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {suppliers
                      .filter((supplier) => supplier.status === "Pending")
                      .map((supplier) => (
                        <Link href={`/supplier/${supplier.id}`} key={supplier.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{supplier.name}</h3>
                                <div className="text-sm text-gray-500 mt-1">{supplier.category}</div>
                              </div>
                              <Badge variant="secondary" className="flex items-center">
                                {supplier.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Location</p>
                                <p className="font-medium">{supplier.location}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Contact</p>
                                <p className="font-medium">{supplier.contactPerson}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Rating</p>
                                <p className="font-medium flex items-center">
                                  {supplier.rating}
                                  <span className="text-yellow-400 ml-1">★</span>
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Last Order</p>
                                <p className="font-medium">{supplier.lastOrder}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inactive" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Inactive Suppliers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {suppliers
                      .filter((supplier) => supplier.status === "Inactive")
                      .map((supplier) => (
                        <Link href={`/supplier/${supplier.id}`} key={supplier.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{supplier.name}</h3>
                                <div className="text-sm text-gray-500 mt-1">{supplier.category}</div>
                              </div>
                              <Badge variant="outline" className="flex items-center">
                                {supplier.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Location</p>
                                <p className="font-medium">{supplier.location}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Contact</p>
                                <p className="font-medium">{supplier.contactPerson}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Rating</p>
                                <p className="font-medium flex items-center">
                                  {supplier.rating}
                                  <span className="text-yellow-400 ml-1">★</span>
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Last Order</p>
                                <p className="font-medium">{supplier.lastOrder}</p>
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
