"use client"

import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { supplierSchema, type SupplierFormData } from "@/lib/validations"

export default function AddSupplier() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SupplierFormData>({
    resolver: zodResolver(supplierSchema),
    defaultValues: {
      status: "active",
      verified: false,
    },
  })

  const onSubmit = async (data: SupplierFormData) => {
    const res = await fetch("/api/suppliers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      router.push("/supplier")
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link href="/supplier" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Add New Supplier</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-6">
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
                    <Label htmlFor="name">Company Name *</Label>
                    <Input id="name" {...register("name")} placeholder="Full legal company name" />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <Input id="contactPerson" {...register("contactPerson")} placeholder="Primary contact name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Input id="category" {...register("category")} placeholder="e.g., Zippers, Buttons" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" {...register("email")} type="email" placeholder="contact@company.com" />
                      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" {...register("phone")} placeholder="Include country code" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" {...register("website")} placeholder="https://www.example.com" />
                    {errors.website && <p className="text-sm text-red-500">{errors.website.message}</p>}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">2. Company Details</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input id="specialization" {...register("specialization")} placeholder="e.g., Woven labels, buttons, zippers" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" {...register("address")} placeholder="Full company address" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" {...register("location")} placeholder="City, Country" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="leadTime">Average Lead Time</Label>
                      <Input id="leadTime" {...register("leadTime")} placeholder="e.g., 20-25 days" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="minOrderQty">Min Order Qty</Label>
                      <Input id="minOrderQty" {...register("minOrderQty", { valueAsNumber: true })} type="number" placeholder="e.g., 1000" />
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
                      <Checkbox id="verified" onCheckedChange={(v) => setValue("verified", !!v)} />
                      <label htmlFor="verified" className="text-sm font-medium leading-none">
                        Verified Supplier
                      </label>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="certifications">Certifications</Label>
                    <Input id="certifications" {...register("certifications")} placeholder="e.g., OEKO-TEX, ISO 9001, BSCI" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="paymentTerms">Payment Terms</Label>
                    <Input id="paymentTerms" {...register("paymentTerms")} placeholder="e.g., 30% deposit, 70% before shipment" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="samplingPolicy">Sampling Policy</Label>
                    <Input id="samplingPolicy" {...register("samplingPolicy")} placeholder="e.g., Free samples for qualified buyers" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea id="notes" {...register("notes")} placeholder="Any other important information" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/supplier"><Button variant="outline" type="button">Cancel</Button></Link>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Add Supplier
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}
