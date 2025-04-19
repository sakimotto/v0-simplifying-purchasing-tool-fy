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

export default function CreateOrderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/orders" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Create New Order</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <PageSummary
          title="Create Purchase Order"
          description="Create a new purchase order for garment accessories from your suppliers. Specify items, quantities, shipping details, and payment terms."
        />

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Order</CardTitle>
              <CardDescription>
                Create a new purchase order for garment accessories from your suppliers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">1. Supplier Information</h3>

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

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="order-date">Order Date</Label>
                      <Input id="order-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="delivery-date">Required Delivery Date</Label>
                      <Input id="delivery-date" type="date" />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="payment-terms">Payment Terms</Label>
                    <Select>
                      <SelectTrigger id="payment-terms">
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30-net">Net 30 days</SelectItem>
                        <SelectItem value="60-net">Net 60 days</SelectItem>
                        <SelectItem value="90-net">Net 90 days</SelectItem>
                        <SelectItem value="50-50">50% deposit, 50% before shipment</SelectItem>
                        <SelectItem value="30-70">30% deposit, 70% before shipment</SelectItem>
                        <SelectItem value="lc">Letter of Credit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="shipping-terms">Shipping Terms</Label>
                    <Select>
                      <SelectTrigger id="shipping-terms">
                        <SelectValue placeholder="Select shipping terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fob">FOB (Free On Board)</SelectItem>
                        <SelectItem value="exw">EXW (Ex Works)</SelectItem>
                        <SelectItem value="cif">CIF (Cost, Insurance, Freight)</SelectItem>
                        <SelectItem value="ddu">DDU (Delivered Duty Unpaid)</SelectItem>
                        <SelectItem value="dap">DAP (Delivered At Place)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">2. Item Selection</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Select Items from Catalog</Label>
                    <div className="border rounded-md divide-y">
                      {[
                        { id: "WL-1001", name: "Woven Labels - Premium", price: 0.12, unit: "pc" },
                        { id: "MB-2001", name: "Metal Buttons - Antique Brass", price: 0.25, unit: "pc" },
                        { id: "LP-3001", name: "Leather Patches - Premium", price: 0.45, unit: "pc" },
                        { id: "ZP-4001", name: "Zipper Pulls - Custom Metal", price: 0.18, unit: "pc" },
                        { id: "CL-5001", name: "Care Labels - Printed Satin", price: 0.08, unit: "pc" },
                      ].map((item) => (
                        <div key={item.id} className="flex items-center p-3">
                          <Checkbox id={`item-${item.id}`} className="mr-3" />
                          <label htmlFor={`item-${item.id}`} className="flex-1 cursor-pointer">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-500">
                              {item.id} - ${item.price.toFixed(2)} / {item.unit}
                            </div>
                          </label>
                          <Input type="number" placeholder="Qty" className="w-20" min="1" defaultValue="1000" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="order-notes">Order Notes</Label>
                    <Textarea
                      id="order-notes"
                      placeholder="Any special instructions or notes for this order"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">3. Shipping Information</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="shipping-address">Shipping Address</Label>
                    <Textarea
                      id="shipping-address"
                      placeholder="Enter the shipping address for this order"
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="shipping-method">Shipping Method</Label>
                      <Select>
                        <SelectTrigger id="shipping-method">
                          <SelectValue placeholder="Select shipping method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="air">Air Freight</SelectItem>
                          <SelectItem value="sea">Sea Freight</SelectItem>
                          <SelectItem value="express">Express Courier</SelectItem>
                          <SelectItem value="ground">Ground Transport</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="incoterms">Incoterms</Label>
                      <Select>
                        <SelectTrigger id="incoterms">
                          <SelectValue placeholder="Select incoterms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fob">FOB</SelectItem>
                          <SelectItem value="cif">CIF</SelectItem>
                          <SelectItem value="exw">EXW</SelectItem>
                          <SelectItem value="ddp">DDP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Create Order</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
