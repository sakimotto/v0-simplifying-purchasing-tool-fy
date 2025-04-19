import { ArrowLeft, CheckCircle, ClipboardList, Filter, Plus, Search, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatusBadge } from "@/components/status-badge"
import { PageSummary } from "@/components/page-summary"

export default function RFQListPage() {
  // Sample RFQ data
  const rfqs = [
    {
      id: "RFQ001",
      supplier: "YKK Group",
      items: [{ name: "Metal Zipper #5", quantity: 10000 }],
      date: "2023-05-10",
      dueDate: "2023-05-20",
      status: "Completed",
      responseDate: "2023-05-18",
      requestedBy: "John Doe",
      quotedPrice: 0.42,
      quotedLeadTime: "15-20 days",
      paymentTerms: "Net 30",
      comments: "Competitive pricing, accepted",
    },
    {
      id: "RFQ002",
      supplier: "Guangzhou Textile",
      items: [
        { name: 'Cotton Twill Tape 1/2"', quantity: 5000 },
        { name: "Cotton Drawcord 5mm", quantity: 3000 },
      ],
      date: "2023-05-15",
      dueDate: "2023-05-25",
      status: "Pending",
      responseDate: null,
      requestedBy: "Sarah Williams",
      quotedPrice: null,
      quotedLeadTime: null,
      paymentTerms: null,
      comments: null,
    },
    {
      id: "RFQ003",
      supplier: "T&K Garment Accessories",
      items: [{ name: "Brass Jean Button 17mm", quantity: 20000 }],
      date: "2023-05-20",
      dueDate: "2023-05-30",
      status: "Pending",
      responseDate: null,
      requestedBy: "Michael Chen",
      quotedPrice: null,
      quotedLeadTime: null,
      paymentTerms: null,
      comments: null,
    },
    {
      id: "RFQ004",
      supplier: "Wuxi Huacan Labels",
      items: [
        { name: "Woven Labels - Size S", quantity: 5000 },
        { name: "Woven Labels - Size M", quantity: 5000 },
        { name: "Woven Labels - Size L", quantity: 5000 },
      ],
      date: "2023-05-25",
      dueDate: "2023-06-05",
      status: "Completed",
      responseDate: "2023-06-02",
      requestedBy: "Jessica Taylor",
      quotedPrice: 0.07,
      quotedLeadTime: "10-15 days",
      paymentTerms: "50% deposit, 50% before shipment",
      comments: "Good quality samples, competitive pricing",
    },
    {
      id: "RFQ005",
      supplier: "Guangzhou Rocky Metal",
      items: [{ name: "Plastic Hook 25mm", quantity: 15000 }],
      date: "2023-05-30",
      dueDate: "2023-06-10",
      status: "Expired",
      responseDate: null,
      requestedBy: "John Doe",
      quotedPrice: null,
      quotedLeadTime: null,
      paymentTerms: null,
      comments: "No response received by due date",
    },
    {
      id: "RFQ006",
      supplier: "Coats Group",
      items: [
        { name: "Polyester Thread #40", quantity: 1000 },
        { name: "Polyester Thread #60", quantity: 500 },
      ],
      date: "2023-06-05",
      dueDate: "2023-06-15",
      status: "Pending",
      responseDate: null,
      requestedBy: "Sarah Williams",
      quotedPrice: null,
      quotedLeadTime: null,
      paymentTerms: null,
      comments: null,
    },
    {
      id: "RFQ007",
      supplier: "YKK Group",
      items: [{ name: "Coil Zipper #3", quantity: 8000 }],
      date: "2023-06-10",
      dueDate: "2023-06-20",
      status: "Pending",
      responseDate: null,
      requestedBy: "Michael Chen",
      quotedPrice: null,
      quotedLeadTime: null,
      paymentTerms: null,
      comments: null,
    },
    {
      id: "RFQ008",
      supplier: "Kam Wah Button Factory",
      items: [{ name: "Metal Snap Button 15mm", quantity: 12000 }],
      date: "2023-06-15",
      dueDate: "2023-06-25",
      status: "Pending",
      responseDate: null,
      requestedBy: "Jessica Taylor",
      quotedPrice: null,
      quotedLeadTime: null,
      paymentTerms: null,
      comments: null,
    },
  ]

  // Count RFQs by status
  const pendingRfqs = rfqs.filter((rfq) => rfq.status === "Pending").length
  const completedRfqs = rfqs.filter((rfq) => rfq.status === "Completed").length
  const expiredRfqs = rfqs.filter((rfq) => rfq.status === "Expired").length

  // Count RFQs this month
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()
  const rfqsThisMonth = rfqs.filter((rfq) => {
    const rfqDate = new Date(rfq.date)
    return rfqDate.getMonth() + 1 === currentMonth && rfqDate.getFullYear() === currentYear
  }).length

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
            <h1 className="text-xl font-bold">RFQ Management</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/rfq">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create RFQ
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title="Request for Quote (RFQ) Management"
          description="Create and manage requests for quotes from suppliers to compare pricing, lead times, and other terms before placing orders."
        />

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Total RFQs</p>
                    <p className="text-2xl font-bold text-blue-700">{rfqs.length}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <ClipboardList className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Pending</p>
                    <p className="text-2xl font-bold text-amber-700">{pendingRfqs}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Send className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Completed</p>
                    <p className="text-2xl font-bold text-emerald-700">{completedRfqs}</p>
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
                    <p className="text-sm font-medium text-purple-600">This Month</p>
                    <p className="text-2xl font-bold text-purple-700">{rfqsThisMonth}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <ClipboardList className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search RFQs by ID, supplier, or item..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All RFQs ({rfqs.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({pendingRfqs})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedRfqs})</TabsTrigger>
              <TabsTrigger value="expired">Expired ({expiredRfqs})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>All RFQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {rfqs.map((rfq) => (
                      <Link href={`/rfq/${rfq.id}`} key={rfq.id} className="block">
                        <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">RFQ #{rfq.id}</h3>
                              <div className="text-sm text-gray-500 mt-1">{rfq.supplier}</div>
                            </div>
                            <StatusBadge status={rfq.status} />
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                            <div>
                              <p className="text-gray-500">Items</p>
                              <p className="font-medium">
                                {rfq.items.map((item) => `${item.name} (${item.quantity} pcs)`).join(", ")}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Created</p>
                              <p className="font-medium">{rfq.date}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Due Date</p>
                              <p className="font-medium">{rfq.dueDate}</p>
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
                  <CardTitle>Pending RFQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {rfqs
                      .filter((rfq) => rfq.status === "Pending")
                      .map((rfq) => (
                        <Link href={`/rfq/${rfq.id}`} key={rfq.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">RFQ #{rfq.id}</h3>
                                <div className="text-sm text-gray-500 mt-1">{rfq.supplier}</div>
                              </div>
                              <StatusBadge status={rfq.status} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Items</p>
                                <p className="font-medium">
                                  {rfq.items.map((item) => `${item.name} (${item.quantity} pcs)`).join(", ")}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Created</p>
                                <p className="font-medium">{rfq.date}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Due Date</p>
                                <p className="font-medium">{rfq.dueDate}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Completed RFQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {rfqs
                      .filter((rfq) => rfq.status === "Completed")
                      .map((rfq) => (
                        <Link href={`/rfq/${rfq.id}`} key={rfq.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">RFQ #{rfq.id}</h3>
                                <div className="text-sm text-gray-500 mt-1">{rfq.supplier}</div>
                              </div>
                              <StatusBadge status={rfq.status} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Items</p>
                                <p className="font-medium">
                                  {rfq.items.map((item) => `${item.name} (${item.quantity} pcs)`).join(", ")}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Response Date</p>
                                <p className="font-medium">{rfq.responseDate}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Quoted Price</p>
                                <p className="font-medium">${rfq.quotedPrice} per unit</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="expired" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Expired RFQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {rfqs
                      .filter((rfq) => rfq.status === "Expired")
                      .map((rfq) => (
                        <Link href={`/rfq/${rfq.id}`} key={rfq.id} className="block">
                          <div className="border rounded-lg p-4 hover:border-gray-400 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">RFQ #{rfq.id}</h3>
                                <div className="text-sm text-gray-500 mt-1">{rfq.supplier}</div>
                              </div>
                              <StatusBadge status={rfq.status} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                              <div>
                                <p className="text-gray-500">Items</p>
                                <p className="font-medium">
                                  {rfq.items.map((item) => `${item.name} (${item.quantity} pcs)`).join(", ")}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500">Created</p>
                                <p className="font-medium">{rfq.date}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Due Date</p>
                                <p className="font-medium">{rfq.dueDate}</p>
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
