"use client"

import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { orderSchema, type OrderFormData } from "@/lib/validations"

export default function CreateOrderPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      status: "pending",
      paymentStatus: "unpaid",
      items: [{ itemId: "", quantity: 1000, unitPrice: 0, total: 0 }],
    },
  })

  const { fields, append, remove } = useFieldArray({ control, name: "items" })

  const onSubmit = async (data: OrderFormData) => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      router.push("/orders")
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/orders" className="mr-4">
            <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
          </Link>
          <h1 className="text-xl font-bold">Create New Order</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Order</CardTitle>
              <CardDescription>Create a new purchase order for garment accessories.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">1. Supplier & Dates</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="supplierId">Supplier ID *</Label>
                    <Input id="supplierId" {...register("supplierId")} placeholder="e.g., SUP001" />
                    {errors.supplierId && <p className="text-sm text-red-500">{errors.supplierId.message}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2"><Label>Order Date</Label><Input type="date" {...register("orderDate")} /></div>
                    <div className="grid gap-2"><Label>Delivery Date</Label><Input type="date" {...register("deliveryDate")} /></div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Payment Terms</Label>
                    <Select onValueChange={(v) => setValue("paymentTerms", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Net 30">Net 30</SelectItem>
                        <SelectItem value="Net 60">Net 60</SelectItem>
                        <SelectItem value="50% deposit, 50% before shipment">50/50</SelectItem>
                        <SelectItem value="30% deposit, 70% before shipment">30/70</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">2. Line Items</h3>
                {fields.map((field, index) => (
                  <div key={field.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Item {index + 1}</span>
                      {fields.length > 1 && (
                        <Button variant="ghost" size="sm" type="button" onClick={() => remove(index)}>Remove</Button>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div><Label>Item ID</Label><Input {...register(`items.${index}.itemId`)} placeholder="e.g., ITM001" /></div>
                      <div><Label>Quantity</Label><Input {...register(`items.${index}.quantity`, { valueAsNumber: true })} type="number" /></div>
                      <div><Label>Unit Price</Label><Input {...register(`items.${index}.unitPrice`, { valueAsNumber: true })} type="number" step="0.01" /></div>
                    </div>
                  </div>
                ))}
                {errors.items && <p className="text-sm text-red-500">{errors.items.message || errors.items.root?.message}</p>}
                <Button type="button" variant="outline" size="sm" onClick={() => append({ itemId: "", quantity: 1000, unitPrice: 0, total: 0 })}>
                  + Add Item
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">3. Shipping</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2"><Label>Shipping Method</Label>
                    <Select onValueChange={(v) => setValue("shippingMethod", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Air Freight">Air Freight</SelectItem>
                        <SelectItem value="Sea Freight">Sea Freight</SelectItem>
                        <SelectItem value="Express Courier">Express Courier</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2"><Label>Shipping Address</Label><Textarea {...register("shippingAddress")} /></div>
                  <div className="grid gap-2"><Label>Tracking Number</Label><Input {...register("trackingNumber")} /></div>
                  <div className="grid gap-2"><Label>Notes</Label><Textarea {...register("notes")} /></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/orders"><Button variant="outline" type="button">Cancel</Button></Link>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create Order
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}
