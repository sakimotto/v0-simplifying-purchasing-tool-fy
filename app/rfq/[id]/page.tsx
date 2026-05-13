"use client"

import { ArrowLeft, Calendar, CheckCircle, Clock, FileText, Loader2, Send } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { StatusBadge } from "@/components/status-badge"
import { PageSummary } from "@/components/page-summary"

export default function RFQDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [converting, setConverting] = useState(false)
  const rfq = {
    id: params.id,
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
    shippingTerms: "FOB",
    certifications: ["OEKO-TEX", "ISO 9001"],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/rfq/list" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">RFQ #{rfq.id}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={async () => {
              setConverting(true)
              const res = await fetch("/api/rfq/convert", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ rfqId: rfq.id }) })
              if (res.ok) { const order = await res.json(); router.push(`/orders/${order.id}`) }
              setConverting(false)
            }} disabled={converting}>
              {converting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
              Convert to Order
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title={`RFQ #${rfq.id}`}
          description={`Quote request sent to ${rfq.supplier} — ${rfq.date}`}
        />

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Status</p>
                    <StatusBadge status={rfq.status} />
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Due Date</p>
                    <p className="text-2xl font-bold text-emerald-700">{rfq.dueDate}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Response Date</p>
                    <p className="text-2xl font-bold text-amber-700">{rfq.responseDate || "Pending"}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Requested By</p>
                    <p className="text-2xl font-bold text-purple-700">{rfq.requestedBy}</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>RFQ Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Supplier</p>
                      <p className="font-medium">{rfq.supplier}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Created</p>
                      <p className="font-medium">{rfq.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Due Date</p>
                      <p className="font-medium">{rfq.dueDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Shipping Terms</p>
                      <p className="font-medium">{rfq.shippingTerms}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Certifications Required</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {rfq.certifications.map((cert, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{cert}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="items" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="items">Line Items</TabsTrigger>
                  <TabsTrigger value="response">Quote Response</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                </TabsList>

                <TabsContent value="items" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Requested Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {rfq.items.map((item, i) => (
                          <div key={i} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                  Quantity: {item.quantity.toLocaleString()} units
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="response" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quote Response</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {rfq.status === "Completed" ? (
                        <div className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-gray-500">Quoted Price</p>
                                <p className="font-bold text-lg">${rfq.quotedPrice?.toFixed(2)} / unit</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Lead Time</p>
                                <p className="font-bold text-lg">{rfq.quotedLeadTime}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Payment Terms</p>
                                <p className="font-bold">{rfq.paymentTerms}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Response Date</p>
                                <p className="font-bold">{rfq.responseDate}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 justify-end">
                            <Button variant="outline">Reject Quote</Button>
                            <Button>Accept Quote &amp; Create Order</Button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <p>Waiting for supplier response.</p>
                          <p className="text-sm mt-2">Due by {rfq.dueDate}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="comments" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Comments &amp; Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {rfq.comments ? (
                        <p className="text-gray-600">{rfq.comments}</p>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <p>No comments yet.</p>
                        </div>
                      )}
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
