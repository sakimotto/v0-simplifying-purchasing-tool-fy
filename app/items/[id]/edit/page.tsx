import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { PageSummary } from "@/components/page-summary"

export default function EditItemPage({ params }: { params: { id: string } }) {
  // Pre-filled mock data — in a real app this would be fetched
  const item = {
    id: params.id,
    name: "Metal Zipper #5",
    sku: "MZ-005-BLK",
    supplier: "YKK Group",
    category: "Zippers",
    price: "0.45",
    moq: "1000",
    leadTime: "15-20 days",
    description: "High-quality metal zipper with #5 teeth size. Available in various colors and lengths. Ideal for jackets, bags, and heavy-duty applications.",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href={`/items/${params.id}`} className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Edit Item</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title={`Edit Item: ${item.name}`}
          description={`Update catalog item SKU: ${item.sku}`}
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
                    <Input id="internal-sku" defaultValue={item.sku} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-sku">Customer SKU/Part #</Label>
                    <Input id="customer-sku" placeholder="e.g., CUST-WL-001" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="item-name">Item Name</Label>
                  <Input id="item-name" defaultValue={item.name} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select defaultValue="zippers">
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
                    <Label htmlFor="supplier">Supplier</Label>
                    <Input id="supplier" defaultValue={item.supplier} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" defaultValue={item.description} rows={3} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing &amp; Inventory</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="unit-price">Unit Price ($)</Label>
                    <Input id="unit-price" type="number" step="0.01" defaultValue={item.price} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="moq">Minimum Order Quantity</Label>
                    <Input id="moq" type="number" defaultValue={item.moq} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lead-time">Lead Time</Label>
                    <Input id="lead-time" defaultValue={item.leadTime} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stock">Current Stock</Label>
                    <Input id="stock" type="number" defaultValue="2500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reorder-point">Reorder Point</Label>
                    <Input id="reorder-point" type="number" defaultValue="1000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select defaultValue="active">
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                <CardTitle>Images &amp; Attachments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-500 mb-1">Current image displayed below</p>
                  <div className="w-32 h-32 bg-gray-100 rounded mx-auto mt-4 flex items-center justify-center">
                    <img src="/placeholder.svg" alt="Item" className="max-h-full max-w-full object-contain" />
                  </div>
                  <Button variant="outline" size="sm" className="mt-4">
                    Replace Image
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
