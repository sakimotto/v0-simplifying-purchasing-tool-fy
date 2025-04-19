import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function AddSupplier() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Add New Supplier</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Information</CardTitle>
              <CardDescription>Add a new garment accessories supplier to your database</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">1. Basic Information</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" placeholder="Full legal company name" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="contact-name">Contact Person</Label>
                      <Input id="contact-name" placeholder="Primary contact name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="contact-title">Job Title</Label>
                      <Input id="contact-title" placeholder="e.g., Purchasing Manager" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="contact@company.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Include country code" />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="https://www.example.com" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">2. Company Details</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input id="specialization" placeholder="e.g., Woven labels, buttons, zippers" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="year-established">Year Established</Label>
                      <Input id="year-established" placeholder="e.g., 2005" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Select>
                        <SelectTrigger id="employees">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="201-500">201-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Full company address" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="country">Country</Label>
                      <Select>
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="china">China</SelectItem>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="vietnam">Vietnam</SelectItem>
                          <SelectItem value="bangladesh">Bangladesh</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">3. Business Information</h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Supplier Type</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="is-manufacturer" />
                      <label htmlFor="is-manufacturer" className="text-sm font-medium leading-none">
                        Manufacturer (has own production facility)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="is-trading" />
                      <label htmlFor="is-trading" className="text-sm font-medium leading-none">
                        Trading Company
                      </label>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Certifications</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert-oeko" />
                        <label htmlFor="cert-oeko" className="text-sm font-medium leading-none">
                          OEKO-TEX
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert-iso" />
                        <label htmlFor="cert-iso" className="text-sm font-medium leading-none">
                          ISO 9001
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert-bsci" />
                        <label htmlFor="cert-bsci" className="text-sm font-medium leading-none">
                          BSCI
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert-gots" />
                        <label htmlFor="cert-gots" className="text-sm font-medium leading-none">
                          GOTS
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert-grs" />
                        <label htmlFor="cert-grs" className="text-sm font-medium leading-none">
                          GRS
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert-other" />
                        <label htmlFor="cert-other" className="text-sm font-medium leading-none">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="min-order">Minimum Order Quantity</Label>
                      <Input id="min-order" placeholder="e.g., 1000 pcs" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lead-time">Average Lead Time</Label>
                      <Input id="lead-time" placeholder="e.g., 20-25 days" />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="payment-terms">Payment Terms</Label>
                    <Input id="payment-terms" placeholder="e.g., 30% deposit, 70% before shipment" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any other important information about this supplier"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="supplier-image">Supplier Image or Logo</Label>
                    <Input id="supplier-image" type="file" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Add Supplier</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
