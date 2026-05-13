"use client"

import { ArrowLeft, Loader2, Save } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { itemSchema, type ItemFormData } from "@/lib/validations"

export default function AddItemPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ItemFormData>({
    resolver: zodResolver(itemSchema),
    defaultValues: { status: "active", currency: "USD", unitPrice: 0, stock: 0, reorderPoint: 0 },
  })

  const onSubmit = async (data: ItemFormData) => {
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      router.push("/items")
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/items" className="mr-4">
              <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
            </Link>
            <h1 className="text-xl font-bold">Add New Item</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <Card>
                <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sku">Internal SKU *</Label>
                      <Input id="sku" {...register("sku")} placeholder="e.g., WL-1001" />
                      {errors.sku && <p className="text-sm text-red-500">{errors.sku.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customerSku">Customer SKU</Label>
                      <Input id="customerSku" {...register("customerSku")} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Item Name *</Label>
                    <Input id="name" {...register("name")} placeholder="e.g., Woven Label - Premium" />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select onValueChange={(v) => setValue("category", v)}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
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
                      <Label htmlFor="supplierId">Supplier ID</Label>
                      <Input id="supplierId" {...register("supplierId")} placeholder="Supplier reference" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" {...register("description")} rows={3} />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Pricing & Inventory</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="unitPrice">Unit Price ($)</Label>
                      <Input id="unitPrice" {...register("unitPrice", { valueAsNumber: true })} type="number" step="0.01" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="moq">Min Order Qty</Label>
                      <Input id="moq" {...register("moq", { valueAsNumber: true })} type="number" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="leadTime">Lead Time</Label>
                      <Input id="leadTime" {...register("leadTime")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stock">Current Stock</Label>
                      <Input id="stock" {...register("stock", { valueAsNumber: true })} type="number" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reorderPoint">Reorder Point</Label>
                      <Input id="reorderPoint" {...register("reorderPoint", { valueAsNumber: true })} type="number" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader><CardTitle>Specifications</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2"><Label>Width</Label><Input {...register("width")} placeholder="e.g., 30mm" /></div>
                    <div className="space-y-2"><Label>Height</Label><Input {...register("height")} placeholder="e.g., 15mm" /></div>
                    <div className="space-y-2"><Label>Depth</Label><Input {...register("depth")} placeholder="e.g., 0.5mm" /></div>
                  </div>
                  <div className="space-y-2">
                    <Label>Tech Specs</Label>
                    <Textarea {...register("techSpecs")} rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label>Quality Standards</Label>
                    <Input {...register("qualityStandards")} placeholder="e.g., OEKO-TEX, ISO 9001" />
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-end gap-2">
                <Link href="/items"><Button variant="outline" type="button">Cancel</Button></Link>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Item
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
