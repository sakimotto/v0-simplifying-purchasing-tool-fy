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

export default function SampleRequestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/samples" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Request Sample</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title="Request Sample"
          description="Request product samples from suppliers to evaluate quality, materials, and workmanship before placing bulk orders."
        />

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Sample Request Form</CardTitle>
              <CardDescription>
                Fill out this form to request samples from suppliers for your garment accessories needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">1. Item Information</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="item-select">Select Item from Catalog</Label>
                    <Select>
                      <SelectTrigger id="item-select">
                        <SelectValue placeholder="Select an item" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wl-1001">WL-1001: Woven Labels - Premium</SelectItem>
                        <SelectItem value="mb-2001">MB-2001: Metal Buttons - Antique Brass</SelectItem>
                        <SelectItem value="lp-3001">LP-3001: Leather Patches - Premium</SelectItem>
                        <SelectItem value="zp-4001">ZP-4001: Zipper Pulls - Custom Metal</SelectItem>
                        <SelectItem value="cl-5001">CL-5001: Care Labels - Printed Satin</SelectItem>
                        <SelectItem value="new">+ Request New Item</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-500">
                      Select an existing item from your catalog or request a new item
                    </p>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="sample-description">Sample Description</Label>
                    <Textarea
                      id="sample-description"
                      placeholder="Describe any specific requirements for this sample (variations, colors, etc.)"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" type="number" placeholder="e.g., 5" />
                      <p className="text-sm text-gray-500">Number of sample pieces needed</p>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="required-by">Required By</Label>
                      <Input id="required-by" type="date" />
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
                <h3 className="text-lg font-medium">2. Supplier Selection</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="supplier-select">Select Supplier</Label>
                    <Select>
                      <SelectTrigger id="supplier-select">
                        <SelectValue placeholder="Select a supplier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tk">T&K Garment Accessories Co.</SelectItem>
                        <SelectItem value="huacan">Wuxi Huacan Labels Factory</SelectItem>
                        <SelectItem value="rocky">Guangzhou Rocky Metal Accessories</SelectItem>
                        <SelectItem value="kamwah">Kam Wah Button Factory</SelectItem>
                        <SelectItem value="yangxing">YangXing Embroidery Patch Factory</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="shipping-address">Shipping Address</Label>
                    <Textarea
                      id="shipping-address"
                      placeholder="Enter the address where samples should be shipped"
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="special-instructions">Special Instructions</Label>
                    <Textarea
                      id="special-instructions"
                      placeholder="Any special instructions for the supplier"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">3. Sample Evaluation Plan</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Evaluation Criteria</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="material-quality" />
                        <label
                          htmlFor="material-quality"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Material Quality
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="color-accuracy" />
                        <label
                          htmlFor="color-accuracy"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Color Accuracy
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="dimensions" />
                        <label
                          htmlFor="dimensions"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Dimensions
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="print-quality" />
                        <label
                          htmlFor="print-quality"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Print Quality
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="durability" />
                        <label
                          htmlFor="durability"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Durability
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="finish" />
                        <label
                          htmlFor="finish"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Finish
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="evaluation-notes">Evaluation Notes</Label>
                    <Textarea
                      id="evaluation-notes"
                      placeholder="Additional notes for the evaluation team"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Submit Request</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
