import { ArrowLeft, Filter, Plus, Search, SlidersHorizontal, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatusBadge } from "@/components/status-badge"
import { PageSummary } from "@/components/page-summary"

export default function ItemsPage() {
  // Sample items data
  const items = [
    {
      id: "ITM001",
      name: "Metal Zipper #5",
      sku: "MZ-005-BLK",
      supplier: "YKK Group",
      category: "Zippers",
      stock: 2500,
      reorderPoint: 1000,
      price: 0.45,
      status: "Active",
      lastOrdered: "2023-04-15",
      imageUrl: "/metal-teeth-closure.png",
    },
    {
      id: "ITM002",
      name: 'Cotton Twill Tape 1/2"',
      sku: "CT-050-NAT",
      supplier: "Guangzhou Textile",
      category: "Tapes & Ribbons",
      stock: 1200,
      reorderPoint: 800,
      price: 0.12,
      status: "Active",
      lastOrdered: "2023-04-22",
      imageUrl: "/natural-cotton-twill-tape.png",
    },
    {
      id: "ITM003",
      name: "Brass Jean Button 17mm",
      sku: "BJB-017-ANT",
      supplier: "T&K Garment Accessories",
      category: "Buttons",
      stock: 3000,
      reorderPoint: 1500,
      price: 0.25,
      status: "Active",
      lastOrdered: "2023-05-01",
      imageUrl: "/brass-jean-button-close-up.png",
    },
    {
      id: "ITM004",
      name: "Woven Label - Size S",
      sku: "WL-SIZE-S",
      supplier: "Wuxi Huacan Labels",
      category: "Labels",
      stock: 5000,
      reorderPoint: 2000,
      price: 0.08,
      status: "Active",
      lastOrdered: "2023-03-15",
      imageUrl: "/fabric-tag-close-up.png",
    },
    {
      id: "ITM005",
      name: "Plastic Hook 25mm",
      sku: "PH-025-CLR",
      supplier: "Guangzhou Rocky Metal",
      category: "Hooks & Eyes",
      stock: 800,
      reorderPoint: 1000,
      price: 0.15,
      status: "Low Stock",
      lastOrdered: "2023-05-10",
      imageUrl: "/colorful-plastic-hooks.png",
    },
    {
      id: "ITM006",
      name: "Polyester Thread #40",
      sku: "PT-040-BLK",
      supplier: "Coats Group",
      category: "Threads",
      stock: 450,
      reorderPoint: 600,
      price: 2.5,
      status: "Low Stock",
      lastOrdered: "2023-04-28",
      imageUrl: "/spool-of-teal-thread.png",
    },
    {
      id: "ITM007",
      name: "Metal Snap Button 15mm",
      sku: "MSB-015-NKL",
      supplier: "Kam Wah Button Factory",
      category: "Buttons",
      stock: 1800,
      reorderPoint: 1000,
      price: 0.18,
      status: "Active",
      lastOrdered: "2023-04-05",
      imageUrl: "/placeholder.svg?height=100&width=100&query=metal+snap+button",
    },
    {
      id: "ITM008",
      name: "Cotton Drawcord 5mm",
      sku: "CD-005-WHT",
      supplier: "Guangzhou Textile",
      category: "Cords & Drawstrings",
      stock: 650,
      reorderPoint: 800,
      price: 0.22,
      status: "Low Stock",
      lastOrdered: "2023-02-18",
      imageUrl: "/placeholder.svg?height=100&width=100&query=cotton+drawcord",
    },
    {
      id: "ITM009",
      name: "Embroidered Patch - Logo",
      sku: "EP-LOGO-001",
      supplier: "YangXing Embroidery",
      category: "Patches & Emblems",
      stock: 2200,
      reorderPoint: 1000,
      price: 0.75,
      status: "Active",
      lastOrdered: "2023-05-05",
      imageUrl: "/placeholder.svg?height=100&width=100&query=embroidered+patch",
    },
    {
      id: "ITM010",
      name: "Coil Zipper #3",
      sku: "CZ-003-BLU",
      supplier: "YKK Group",
      category: "Zippers",
      stock: 3500,
      reorderPoint: 1500,
      price: 0.35,
      status: "Active",
      lastOrdered: "2023-05-12",
      imageUrl: "/placeholder.svg?height=100&width=100&query=coil+zipper",
    },
  ]

  // Count items by status
  const activeItems = items.filter((item) => item.status === "Active").length
  const lowStockItems = items.filter((item) => item.status === "Low Stock").length
  const inactiveItems = items.filter((item) => item.status === "Inactive").length

  // Count unique categories
  const categories = [...new Set(items.map((item) => item.category))].length

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
            <h1 className="text-xl font-bold">Item Catalog</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/items/add">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add New Item
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title="Item Catalog"
          description="Manage your garment accessories inventory, track stock levels, and view item details."
        />

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Active Items</p>
                    <p className="text-2xl font-bold text-emerald-700">{activeItems}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Tag className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Categories</p>
                    <p className="text-2xl font-bold text-blue-700">{categories}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <SlidersHorizontal className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Low Stock</p>
                    <p className="text-2xl font-bold text-amber-700">{lowStockItems}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Filter className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">New Items</p>
                    <p className="text-2xl font-bold text-purple-700">12</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Plus className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search items by name, SKU, or supplier..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Items ({items.length})</TabsTrigger>
              <TabsTrigger value="active">Active ({activeItems})</TabsTrigger>
              <TabsTrigger value="inactive">Inactive ({inactiveItems})</TabsTrigger>
              <TabsTrigger value="low-stock">Low Stock ({lowStockItems})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>All Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {items.map((item) => (
                      <Link href={`/items/${item.id}`} key={item.id} className="block">
                        <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <div className="text-sm text-gray-500 mt-1">SKU: {item.sku}</div>
                            </div>
                            <StatusBadge status={item.status} />
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                            <div>
                              <p className="text-gray-500">Supplier</p>
                              <p className="font-medium">{item.supplier}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Category</p>
                              <p className="font-medium">{item.category}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">In Stock</p>
                              <p className="font-medium">{item.stock.toLocaleString()}</p>
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
                  <CardTitle>Active Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {items
                      .filter((item) => item.status === "Active")
                      .map((item) => (
                        <Link href={`/items/${item.id}`} key={item.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <div className="text-sm text-gray-500 mt-1">SKU: {item.sku}</div>
                              </div>
                              <StatusBadge status={item.status} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Supplier</p>
                                <p className="font-medium">{item.supplier}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Category</p>
                                <p className="font-medium">{item.category}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">In Stock</p>
                                <p className="font-medium">{item.stock.toLocaleString()}</p>
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
                  <CardTitle>Inactive Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {items
                      .filter((item) => item.status === "Inactive")
                      .map((item) => (
                        <Link href={`/items/${item.id}`} key={item.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <div className="text-sm text-gray-500 mt-1">SKU: {item.sku}</div>
                              </div>
                              <StatusBadge status={item.status} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Supplier</p>
                                <p className="font-medium">{item.supplier}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Category</p>
                                <p className="font-medium">{item.category}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">In Stock</p>
                                <p className="font-medium">{item.stock.toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="low-stock" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Low Stock Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {items
                      .filter((item) => item.status === "Low Stock")
                      .map((item) => (
                        <Link href={`/items/${item.id}`} key={item.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <div className="text-sm text-gray-500 mt-1">SKU: {item.sku}</div>
                              </div>
                              <StatusBadge status={item.status} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Supplier</p>
                                <p className="font-medium">{item.supplier}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Category</p>
                                <p className="font-medium">{item.category}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">In Stock</p>
                                <p className="font-medium">{item.stock.toLocaleString()}</p>
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
