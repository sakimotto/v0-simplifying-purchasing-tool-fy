import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { PageSummary } from "@/components/page-summary"

export default function AddItemPage() {
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
            <h1 className="text-xl font-bold">Add New Item</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Item
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title="Add New Item"
          description="Create a new item in your catalog with detailed specifications, pricing information, and images."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="internal-sku">Internal SKU</Label>
                    <Input id="internal-sku" placeholder="e.g., WL-1001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-sku">Customer SKU/Part #</Label>
                    <Input id="customer-sku" placeholder="e.g., CUST-WL-001" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="item-name">Item Name</Label>
                  <Input id="item-name" placeholder="e.g., Woven Label - Premium" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="labels">Labels</SelectItem>
                        <SelectItem value="buttons">Buttons</SelectItem>
                        <SelectItem value="zippers">Zippers</SelectItem>
                        <SelectItem value="patches">Patches</SelectItem>
                        <SelectItem value="hangtags">Hang Tags</SelectItem>
                        <SelectItem value="packaging">Packaging</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subcategory">Subcategory</Label>
                    <Select>
                      <SelectTrigger id="subcategory">
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="woven">Woven</SelectItem>
                        <SelectItem value="printed">Printed</SelectItem>
                        <SelectItem value="leather">Leather</SelectItem>
                        <SelectItem value="care">Care</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Detailed description of the item..." rows={4} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="target-price">Target Price</Label>
                    <Input id="target-price" type="number" step="0.01" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price-currency">Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger id="price-currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="gbp">GBP</SelectItem>
                        <SelectItem value="cny">CNY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="moq">Minimum Order Quantity</Label>
                    <Input id="moq" type="number" placeholder="e.g., 1000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Select defaultValue="pcs">
                      <SelectTrigger id="unit">
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pcs">Pieces</SelectItem>
                        <SelectItem value="rolls">Rolls</SelectItem>
                        <SelectItem value="meters">Meters</SelectItem>
                        <SelectItem value="kg">Kilograms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price-notes">Pricing Notes</Label>
                  <Textarea
                    id="price-notes"
                    placeholder="Additional pricing information, volume discounts, etc."
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="material">Material</Label>
                    <Input id="material" placeholder="e.g., 100% Polyester" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="color">Color</Label>
                    <Input id="color" placeholder="e.g., Black, Navy" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="width">Width</Label>
                    <Input id="width" placeholder="e.g., 30mm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input id="height" placeholder="e.g., 15mm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="depth">Depth/Thickness</Label>
                    <Input id="depth" placeholder="e.g., 0.5mm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tech-specs">Technical Specifications</Label>
                  <Textarea id="tech-specs" placeholder="Detailed technical specifications..." rows={4} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quality-standards">Quality Standards</Label>
                  <Input id="quality-standards" placeholder="e.g., OEKO-TEX, ISO 9001" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Images & Attachments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
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
                  <p className="text-sm text-gray-500 mb-1">Drag and drop image files here, or click to browse</p>
                  <p className="text-xs text-gray-400">Supports JPG, PNG, GIF up to 5MB</p>
                  <input type="file" className="hidden" multiple accept="image/*" />
                  <Button variant="outline" size="sm" className="mt-4">
                    Upload Images
                  </Button>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Drag and drop documents here, or click to browse</p>
                  <p className="text-xs text-gray-400">Supports PDF, DOC, XLS up to 10MB</p>
                  <input type="file" className="hidden" multiple accept=".pdf,.doc,.docx,.xls,.xlsx" />
                  <Button variant="outline" size="sm" className="mt-4">
                    Upload Documents
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
