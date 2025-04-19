import { ArrowLeft, Box, CheckCircle, Clock, Filter, Plus, Search, Truck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatusBadge } from "@/components/status-badge"
import { PageSummary } from "@/components/page-summary"

export default function SamplesPage() {
  // Sample data
  const samples = [
    {
      id: "SAM001",
      item: "Metal Zipper #5",
      itemId: "ITM001",
      supplier: "YKK Group",
      requestDate: "2023-05-15",
      status: "Approved",
      receivedDate: "2023-05-25",
      evaluationDate: "2023-05-27",
      requestedBy: "John Doe",
      quantity: 5,
      variations: "Black, Silver, Antique Brass",
      comments: "Excellent quality, approved for production",
      imageUrl: "/metal-teeth-closure.png",
    },
    {
      id: "SAM002",
      item: 'Cotton Twill Tape 1/2"',
      itemId: "ITM002",
      supplier: "Guangzhou Textile",
      requestDate: "2023-05-18",
      status: "In Transit",
      receivedDate: null,
      evaluationDate: null,
      requestedBy: "Sarah Williams",
      quantity: 3,
      variations: "Natural, Black, Navy",
      comments: null,
      imageUrl: "/natural-cotton-twill-tape.png",
    },
    {
      id: "SAM003",
      item: "Brass Jean Button 17mm",
      itemId: "ITM003",
      supplier: "T&K Garment Accessories",
      requestDate: "2023-05-20",
      status: "Pending",
      receivedDate: null,
      evaluationDate: null,
      requestedBy: "Michael Chen",
      quantity: 10,
      variations: "Antique Brass, Nickel, Gunmetal",
      comments: null,
      imageUrl: "/brass-jean-button-close-up.png",
    },
    {
      id: "SAM004",
      item: "Woven Label - Size S",
      itemId: "ITM004",
      supplier: "Wuxi Huacan Labels",
      requestDate: "2023-05-22",
      status: "Rejected",
      receivedDate: "2023-06-01",
      evaluationDate: "2023-06-02",
      requestedBy: "Jessica Taylor",
      quantity: 5,
      variations: "Black on White, White on Black",
      comments: "Color doesn't match specification, text alignment issues",
      imageUrl: "/fabric-tag-close-up.png",
    },
    {
      id: "SAM005",
      item: "Plastic Hook 25mm",
      itemId: "ITM005",
      supplier: "Guangzhou Rocky Metal",
      requestDate: "2023-05-25",
      status: "Approved",
      receivedDate: "2023-06-05",
      evaluationDate: "2023-06-07",
      requestedBy: "John Doe",
      quantity: 8,
      variations: "Clear, Black, White",
      comments: "Good quality, approved for production",
      imageUrl: "/colorful-plastic-hooks.png",
    },
    {
      id: "SAM006",
      item: "Polyester Thread #40",
      itemId: "ITM006",
      supplier: "Coats Group",
      requestDate: "2023-06-01",
      status: "Pending",
      receivedDate: null,
      evaluationDate: null,
      requestedBy: "Sarah Williams",
      quantity: 3,
      variations: "Black, White, Navy",
      comments: null,
      imageUrl: "/spool-of-teal-thread.png",
    },
    {
      id: "SAM007",
      item: "Metal Snap Button 15mm",
      itemId: "ITM007",
      supplier: "Kam Wah Button Factory",
      requestDate: "2023-06-05",
      status: "In Transit",
      receivedDate: null,
      evaluationDate: null,
      requestedBy: "Michael Chen",
      quantity: 6,
      variations: "Nickel, Antique Brass",
      comments: null,
      imageUrl: "/placeholder.svg?height=100&width=100&query=metal+snap+button",
    },
    {
      id: "SAM008",
      item: "Cotton Drawcord 5mm",
      itemId: "ITM008",
      supplier: "Guangzhou Textile",
      requestDate: "2023-06-10",
      status: "Pending",
      receivedDate: null,
      evaluationDate: null,
      requestedBy: "Jessica Taylor",
      quantity: 4,
      variations: "White, Black, Natural",
      comments: null,
      imageUrl: "/placeholder.svg?height=100&width=100&query=cotton+drawcord",
    },
  ]

  // Count samples by status
  const pendingSamples = samples.filter((sample) => sample.status === "Pending").length
  const approvedSamples = samples.filter((sample) => sample.status === "Approved").length
  const rejectedSamples = samples.filter((sample) => sample.status === "Rejected").length
  const inTransitSamples = samples.filter((sample) => sample.status === "In Transit").length

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
            <h1 className="text-xl font-bold">Sample Management</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/samples/request">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Request Sample
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title="Sample Management"
          description="Request, track, and evaluate product samples from suppliers before placing bulk orders."
        />

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Total Samples</p>
                    <p className="text-2xl font-bold text-blue-700">{samples.length}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Box className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Pending</p>
                    <p className="text-2xl font-bold text-amber-700">{pendingSamples}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Approved</p>
                    <p className="text-2xl font-bold text-emerald-700">{approvedSamples}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">In Transit</p>
                    <p className="text-2xl font-bold text-purple-700">{inTransitSamples}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search samples by ID, supplier, or item..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Samples ({samples.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({pendingSamples})</TabsTrigger>
              <TabsTrigger value="approved">Approved ({approvedSamples})</TabsTrigger>
              <TabsTrigger value="rejected">Rejected ({rejectedSamples})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>All Sample Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {samples.map((sample) => (
                      <Link href={`/samples/${sample.id}`} key={sample.id} className="block">
                        <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{sample.item}</h3>
                              <div className="text-sm text-gray-500 mt-1">ID: {sample.id}</div>
                            </div>
                            <StatusBadge status={sample.status} />
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                            <div>
                              <p className="text-gray-500">Supplier</p>
                              <p className="font-medium">{sample.supplier}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Request Date</p>
                              <p className="font-medium">{sample.requestDate}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Requested By</p>
                              <p className="font-medium">{sample.requestedBy}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Variations</p>
                              <p className="font-medium">{sample.variations}</p>
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
                  <CardTitle>Pending Samples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {samples
                      .filter((sample) => sample.status === "Pending")
                      .map((sample) => (
                        <Link href={`/samples/${sample.id}`} key={sample.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{sample.item}</h3>
                                <div className="text-sm text-gray-500 mt-1">ID: {sample.id}</div>
                              </div>
                              <StatusBadge status={sample.status} />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Supplier</p>
                                <p className="font-medium">{sample.supplier}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Request Date</p>
                                <p className="font-medium">{sample.requestDate}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Requested By</p>
                                <p className="font-medium">{sample.requestedBy}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Variations</p>
                                <p className="font-medium">{sample.variations}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="approved" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Approved Samples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {samples
                      .filter((sample) => sample.status === "Approved")
                      .map((sample) => (
                        <Link href={`/samples/${sample.id}`} key={sample.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{sample.item}</h3>
                                <div className="text-sm text-gray-500 mt-1">ID: {sample.id}</div>
                              </div>
                              <StatusBadge status={sample.status} />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Supplier</p>
                                <p className="font-medium">{sample.supplier}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Evaluation Date</p>
                                <p className="font-medium">{sample.evaluationDate}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Comments</p>
                                <p className="font-medium">{sample.comments}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Variations</p>
                                <p className="font-medium">{sample.variations}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rejected" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Rejected Samples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {samples
                      .filter((sample) => sample.status === "Rejected")
                      .map((sample) => (
                        <Link href={`/samples/${sample.id}`} key={sample.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{sample.item}</h3>
                                <div className="text-sm text-gray-500 mt-1">ID: {sample.id}</div>
                              </div>
                              <StatusBadge status={sample.status} />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Supplier</p>
                                <p className="font-medium">{sample.supplier}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Evaluation Date</p>
                                <p className="font-medium">{sample.evaluationDate}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Comments</p>
                                <p className="font-medium">{sample.comments}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Variations</p>
                                <p className="font-medium">{sample.variations}</p>
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
