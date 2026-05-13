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
import { sampleSchema, type SampleFormData } from "@/lib/validations"

export default function SampleRequestPage() {
  const router = useRouter()
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<SampleFormData>({
    resolver: zodResolver(sampleSchema),
    defaultValues: { status: "requested", quantity: 5 },
  })

  const onSubmit = async (data: SampleFormData) => {
    const res = await fetch("/api/samples", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    if (res.ok) { router.push("/samples"); router.refresh() }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/samples" className="mr-4"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
          <h1 className="text-xl font-bold">Request Sample</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader><CardTitle>Sample Request</CardTitle><CardDescription>Request product samples from suppliers.</CardDescription></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">1. Item & Supplier</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2"><Label>Item ID *</Label><Input {...register("itemId")} placeholder="e.g., ITM001" />{errors.itemId && <p className="text-sm text-red-500">{errors.itemId.message}</p>}</div>
                  <div className="grid gap-2"><Label>Supplier ID *</Label><Input {...register("supplierId")} placeholder="e.g., SUP001" />{errors.supplierId && <p className="text-sm text-red-500">{errors.supplierId.message}</p>}</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2"><Label>Quantity</Label><Input {...register("quantity", { valueAsNumber: true })} type="number" /></div>
                    <div className="grid gap-2"><Label>Required By</Label><Input type="date" {...register("requiredByDate")} /></div>
                  </div>
                  <div className="grid gap-2"><Label>Variations</Label><Input {...register("variations")} placeholder="e.g., Black, White, Navy" /></div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">2. Shipping</h3>
                <div className="grid gap-4">
                  <div className="grid gap-2"><Label>Shipping Address</Label><Textarea {...register("shippingAddress")} /></div>
                  <div className="grid gap-2"><Label>Comments</Label><Textarea {...register("comments")} /></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/samples"><Button variant="outline" type="button">Cancel</Button></Link>
              <Button type="submit" disabled={isSubmitting}>{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Submit Request</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}
