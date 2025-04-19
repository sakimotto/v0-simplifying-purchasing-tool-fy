import { ArrowLeft, Download, Edit } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageSummary } from "@/components/page-summary"

export default function SampleDetailPage({ params }) {
  // In a real app, we would fetch the sample data based on the ID
  const sampleId = params.id

  // For demo purposes, let's find the sample in our mock data or use a placeholder
  const sample = {
    id: sampleId,
    product: "Woven Labels",
    details: "Damask, 100% polyester, high-definition weaving",
    supplier: "T&K Garment Accessories Co.",
    requestDate: "Apr 2, 2025",
    status: "received",
    imageUrl: "https://i.imgur.com/JQJbZyL.jpg",
    itemSku: "WL-1001",
    requestedBy: "John Doe",
    quantity: 5,
    variations: "Black, White, Navy",
    requiredByDate: "Apr 15, 2025",
    shippingAddress: "123 Main St, Anytown, USA",
    specialInstructions: "Please include care instructions in multiple languages",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/samples" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Sample: {sampleId}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title={`Sample Details: ${sample.product}`}
          description={`View detailed information about this sample request, including timeline, evaluation criteria, and supplier information.`}
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <div className="p-6 flex items-center justify-center bg-white border-b">
                <img
                  src={sample.imageUrl || "/placeholder.svg"}
                  alt={sample.product}
                  className="max-h-[300px] max-w-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline">{sample.itemSku}</Badge>
                  <StatusBadge status={sample.status} />
                </div>
                <h2 className="text-xl font-bold mb-2">{sample.product}</h2>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>Supplier:</span>
                    <span className="font-medium text-gray-900">{sample.supplier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Requested:</span>
                    <span className="font-medium text-gray-900">{sample.requestDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Required By:</span>
                    <span className="font-medium text-gray-900">{sample.requiredByDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span className="font-medium text-gray-900">{sample.quantity} pcs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-0 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sample Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Description</h3>
                      <p className="text-sm text-gray-600">{sample.details}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Variations Requested</h3>
                      <p className="text-sm text-gray-600">{sample.variations}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Shipping Address</h3>
                      <p className="text-sm text-gray-600">{sample.shippingAddress}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Special Instructions</h3>
                      <p className="text-sm text-gray-600">{sample.specialInstructions}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Related Item</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded bg-gray-100 flex items-center justify-center">
                        <img
                          src={sample.imageUrl || "/placeholder.svg"}
                          alt={sample.product}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{sample.product}</h3>
                        <p className="text-sm text-gray-500">{sample.itemSku}</p>
                        <Link href={`/items/${sample.itemSku}`} className="text-sm text-blue-600 hover:underline">
                          View Item Details
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Sample Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                        </div>
                        <div>
                          <h3 className="font-medium">Sample Requested</h3>
                          <p className="text-sm text-gray-500">Apr 2, 2025 at 10:30 AM</p>
                          <p className="text-sm mt-1">
                            Sample requested by {sample.requestedBy} from {sample.supplier}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                        </div>
                        <div>
                          <h3 className="font-medium">Supplier Confirmed</h3>
                          <p className="text-sm text-gray-500">Apr 3, 2025 at 2:15 PM</p>
                          <p className="text-sm mt-1">
                            {sample.supplier} confirmed the sample request and started production
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
                        </div>
                        <div>
                          <h3 className="font-medium">Sample Shipped</h3>
                          <p className="text-sm text-gray-500">Apr 8, 2025 at 9:45 AM</p>
                          <p className="text-sm mt-1">Sample shipped via DHL Express. Tracking #: DHL1234567890</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">Sample Received</h3>
                          <p className="text-sm text-gray-500">Apr 10, 2025 at 11:20 AM</p>
                          <p className="text-sm mt-1">Sample received by warehouse and awaiting evaluation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="evaluation" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Sample Evaluation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Evaluation Status</h3>
                        <Badge>Pending Review</Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Quality Assessment</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="border rounded-md p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm">Material Quality</span>
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                      key={star}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className={`h-4 w-4 ${star <= 0 ? "text-gray-300" : "text-yellow-400"}`}
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                              <textarea
                                className="w-full text-sm p-2 border rounded-md"
                                rows={2}
                                placeholder="Add comments..."
                              ></textarea>
                            </div>

                            <div className="border rounded-md p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm">Workmanship</span>
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                      key={star}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className={`h-4 w-4 ${star <= 0 ? "text-gray-300" : "text-yellow-400"}`}
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                              <textarea
                                className="w-full text-sm p-2 border rounded-md"
                                rows={2}
                                placeholder="Add comments..."
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-2">Overall Assessment</h3>
                          <textarea
                            className="w-full text-sm p-3 border rounded-md"
                            rows={4}
                            placeholder="Enter your overall assessment of the sample..."
                          ></textarea>
                        </div>

                        <div className="flex gap-2 justify-end">
                          <Button variant="outline">Reject Sample</Button>
                          <Button>Approve Sample</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const getStatusProps = (status) => {
    switch (status) {
      case "requested":
        return { variant: "outline", label: "Requested" }
      case "in-transit":
        return { variant: "secondary", label: "In Transit" }
      case "received":
        return { variant: "default", label: "Received" }
      case "approved":
        return { variant: "success", label: "Approved" }
      case "rejected":
        return { variant: "destructive", label: "Rejected" }
      default:
        return { variant: "outline", label: status }
    }
  }

  const { variant, label } = getStatusProps(status)

  return (
    <Badge variant={variant} className="flex items-center">
      {label}
    </Badge>
  )
}
