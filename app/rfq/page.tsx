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
import { Checkbox } from "@/components/ui/checkbox"
import { rfqSchema, type RFQFormData } from "@/lib/validations"

export default function RequestForQuote() {
  const router = useRouter()
  const { register, handleSubmit, setValue, control, formState: { errors, isSubmitting } } = useForm<RFQFormData>({
    resolver: zodResolver(rfqSchema),
    defaultValues: { items: [{ itemId: "", quantity: 1000 }] },
  })
  const { fields, append, remove } = useFieldArray({ control, name: "items" })

  const onSubmit = async (data: RFQFormData) => {
    const res = await fetch("/api/rfq", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    if (res.ok) { router.push("/rfq/list"); router.refresh() }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/rfq/list" className="mr-4"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
          <h1 className="text-xl font-bold">Request for Quote</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader><CardTitle>RFQ</CardTitle><CardDescription>Request quotes from suppliers.</CardDescription></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">1. Supplier & Dates</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2"><Label>Supplier ID *</Label><Input {...register("supplierId")} placeholder="e.g., SUP001" />{errors.supplierId && <p className="text-sm text-red-500">{errors.supplierId.message}</p>}</div>
                  <div className="grid grid-cols-2 gap-4"><div className="grid gap-2"><Label>Due Date</Label><Input type="date" {...register("dueDate")} /></div></div>
                  <div className="grid gap-2"><Label>Shipping Terms</Label><Select onValueChange={(v) => setValue("shippingTerms", v)}><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="FOB">FOB</SelectItem><SelectItem value="CIF">CIF</SelectItem><SelectItem value="EXW">EXW</SelectItem></SelectContent></Select></div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">2. Line Items</h3>
                {fields.map((field, index) => (
                  <div key={field.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex justify-between"><span className="font-medium">Item {index + 1}</span>{fields.length > 1 && <Button variant="ghost" size="sm" type="button" onClick={() => remove(index)}>Remove</Button>}</div>
                    <div className="grid grid-cols-2 gap-3"><div><Label>Item ID</Label><Input {...register(`items.${index}.itemId`)} /></div><div><Label>Quantity</Label><Input {...register(`items.${index}.quantity`, { valueAsNumber: true })} type="number" /></div></div>
                  </div>
                ))}
                {errors.items && <p className="text-sm text-red-500">{errors.items.message || errors.items.root?.message}</p>}
                <Button type="button" variant="outline" size="sm" onClick={() => append({ itemId: "", quantity: 1000 })}>+ Add Item</Button>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">3. Requirements</h3>
                <div className="grid gap-2"><Label>Required Certifications</Label><Input {...register("certifications")} placeholder="e.g., OEKO-TEX, ISO 9001" /></div>
                <div className="grid gap-2"><Label>Comments</Label><Textarea {...register("comments")} /></div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/rfq/list"><Button variant="outline" type="button">Cancel</Button></Link>
              <Button type="submit" disabled={isSubmitting}>{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Submit RFQ</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}
