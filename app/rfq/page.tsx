import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { PageSummary } from "@/components/page-summary"

export default function RequestForQuote() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/rfq/list" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Request for Quote</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title="Create Request for Quote"
          description="Submit a request for quote (RFQ) to multiple suppliers to compare pricing, lead times, and other terms before placing an order."
        />

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Request for Quote (RFQ)</CardTitle>
              <CardDescription>
                Fill out this form to request quotes from selected suppliers for your garment accessories needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">1. Product Information</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="product-type">Product Type</Label>
                    <Select>
                      <SelectTrigger id="product-type">
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="woven-labels">Woven Labels</SelectItem>
                        <SelectItem value="printed-labels">Printed Labels</SelectItem>
                        <SelectItem value="hang-tags">Hang Tags</SelectItem>
                        <SelectItem value="buttons">Buttons</SelectItem>
                        <SelectItem value="zippers">Zippers</SelectItem>
                        <SelectItem value="patches">Patches</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="product-description">Product Description</Label>
                    <Textarea
                      id="product-description"
                      placeholder="Describe the product you need in detail (size, material, color, etc.)"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" type="number" placeholder="e.g., 5000" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="target-price">Target Price (per unit)</Label>
                      <Input id="target-price" type="text" placeholder="e.g., $0.10" />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="attachments">Attachments</Label>
                    <Input id="attachments" type="file" multiple />
                    <p className="text-sm text-gray-500">Upload design files, sketches, or reference images</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">2. Requirements</h3>

                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="delivery-date">Required Delivery Date</Label>
                      <Input id="delivery-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="shipping-terms">Shipping Terms</Label>
                      <Select>
                        <SelectTrigger id="shipping-terms">
                          <SelectValue placeholder="Select shipping terms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fob">FOB</SelectItem>
                          <SelectItem value="exw">EXW</SelectItem>
                          <SelectItem value="cif">CIF</SelectItem>
                          <SelectItem value="ddu">DDU</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Required Certifications</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="oeko-tex" />
                        <label
                          htmlFor="oeko-tex"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          OEKO-TEX
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gots" />
                        <label
                          htmlFor="gots"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          GOTS
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="iso" />
                        <label
                          htmlFor="iso"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          ISO 9001
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="bsci" />
                        <label
                          htmlFor="bsci"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          BSCI
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="additional-requirements">Additional Requirements</Label>
                    <Textarea
                      id="additional-requirements"
                      placeholder="Any other specific requirements or preferences"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">3. Supplier Selection</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Select Suppliers to Request Quotes From</Label>
                    <div className="border rounded-md divide-y">
                      {[
                        { id: 1, name: "T&K Garment Accessories Co.", specialization: "Woven labels, wash labels" },
                        { id: 2, name: "Wuxi Huacan Labels Factory", specialization: "Woven labels, leather labels" },
                        {
                          id: 3,
                          name: "Guangzhou Rocky Metal Accessories",
                          specialization: "Metal buttons, snaps, rivets",
                        },
                        { id: 4, name: "Kam Wah Button Factory", specialization: "Fashion buttons, zippers" },
                        {
                          id: 5,
                          name: "YangXing Embroidery Patch Factory",
                          specialization: "Embroidery patches, emblems",
                        },
                      ].map((supplier) => (
                        <div key={supplier.id} className="flex items-center p-3">
                          <Checkbox id={`supplier-${supplier.id}`} className="mr-3" />
                          <label htmlFor={`supplier-${supplier.id}`} className="flex-1 cursor-pointer">
                            <div className="font-medium">{supplier.name}</div>
                            <div className="text-sm text-gray-500">{supplier.specialization}</div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Submit RFQ</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
